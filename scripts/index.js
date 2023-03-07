//global variables
let points = [];
let pointsGeoJSON = {
  type: 'FeatureCollection',
  features: []
};

const loading = document.getElementById('loading');
const loadingMessage = document.getElementById('loadingMessage');

let baseMapStyle = mapStyle.layers;

var map = new maplibregl.Map({
  container: 'map',
  style: {
    id: "43f36e14-e3f5-43c1-84c0-50a9c80dc5c7",
    name: "MapLibre",
    zoom: 0,
    pitch: 0,
    center: [-87.6279871036212, 41.884579601743276],
    glyphs:
      "https://cdn.jsdelivr.net/gh/piemadd/fonts@54b954f510dc79e04ae47068c5c1f2ee39a69216/_output/{fontstack}/{range}.pbf",
    layers: baseMapStyle,
    bearing: 0,
    sources: {
      protomaps: {
        type: "vector",
        tiles: [
          "https://tilea.piemadd.com/tiles/{z}/{x}/{y}.mvt",
          "https://tileb.piemadd.com/tiles/{z}/{x}/{y}.mvt",
          "https://tilec.piemadd.com/tiles/{z}/{x}/{y}.mvt",
          "https://tiled.piemadd.com/tiles/{z}/{x}/{y}.mvt",
          //"http://10.0.0.237:8081/tiles/{z}/{x}/{y}.mvt"
        ],
        maxzoom: 13,
      },
    },
    version: 8,
    metadata: {},
  }, // stylesheet location
  center: [-87.6279871036212, 41.884579601743276], // starting position [lng, lat]
  zoom: 3 // starting zoom
});

const loadMarkers = async () => {
  console.log('loading chunk list')
  loadingMessage.innerText = 'Loading chunk list...';
  const chunksRes = await fetch('https://data.nearmeon.wiki/output/index.json')
  const fileKeys = await chunksRes.json();
  console.log('file chunks loaded')
  loadingMessage.innerText = 'Loading data chunks...';

  console.log('loading data chunks')
  loadingMessage.innerText = 'Loading data chunks...';
  for (let i = 0; i < fileKeys.length; i++) {
    const res = await fetch(`https://data.nearmeon.wiki/output/${fileKeys[i]}.json`);
    const data = await res.json();

    points.push(...data);

    console.log(`Loaded ${fileKeys[i]}.json`);
    loadingMessage.innerText = `Loaded ${fileKeys[i]}.json`;
  }

  console.log('data chunks loaded')
  loadingMessage.innerText = 'Data chunks loaded';
  console.log('creating geojson')
  loadingMessage.innerText = 'Creating geojson...';

  points.forEach((point) => {
    pointsGeoJSON.features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [point[1], point[0]]
      },
      properties: {
        pageID: point[2],
      }
    })
  })

  console.log('geojson created, returning')
  loadingMessage.innerText = 'Geojson created, returning...';
}

map.on('load', async () => {
  map.addControl(new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
  }), 'top-right');

  map.addControl(new maplibregl.FullscreenControl());
  await loadMarkers();

  console.log(pointsGeoJSON)

  console.log('loading in markers')
  loadingMessage.innerText = 'Loading in markers... (this will take a while)';

  map.on('idle', function () {
    loading.style.display = 'none';
  });

  map.addSource('wikiLocations', {
    type: 'geojson',
    // Point to GeoJSON data. This example visualizes all M1.0+ wikiLocations
    // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
    data: pointsGeoJSON,
    cluster: true,
    clusterMaxZoom: 14, // Max zoom to cluster points on
    clusterRadius: 75 // Radius of each cluster when clustering points (defaults to 50)
  });

  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'wikiLocations',
    filter: ['has', 'point_count'],
    paint: {
      // Use step expressions (https://maplibre.org/maplibre-gl-js-docs/style-spec/#expressions-step)
      // with three steps to implement three types of circles:
      //   * Blue, 20px circles when point count is less than 100
      //   * Yellow, 30px circles when point count is between 100 and 750
      //   * Pink, 40px circles when point count is greater than or equal to 750
      'circle-color': [
        'step',
        ['get', 'point_count'],
        '#51bbd6',
        100,
        '#f1f075',
        750,
        '#f28cb1'
      ],
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        12,
        100,
        15,
        750,
        20
      ]
    }
  });

  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'wikiLocations',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['Open Sans Semibold'],
      'text-size': 12
    }
  });

  map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'wikiLocations',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#96f28c',
      'circle-radius': 12,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff'
    }
  });

  // When a click event occurs on a feature in
  // the unclustered-point layer, open a popup at
  // the location of the feature, with
  // description HTML from its properties.
  map.on('click', 'unclustered-point', async function (e) {
    const meta = JSON.parse(JSON.stringify(e.features[0]));

    var coordinates = meta.geometry.coordinates.slice();

    console.log(meta)

    const req = await fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&pageids=${meta.properties.pageID}`);
    const res = await req.json();
    const data = res.query.pages[meta.properties.pageID];

    console.log(data)

    // Ensure that if the map is zoomed out such that
    // multiple copies of the feature are visible, the
    // popup appears over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    const popup = new maplibregl.Popup({
      maxWidth: '95vw',
      anchor: 'bottom',
      offset: 16
    })
      .setLngLat(coordinates)
      .setHTML(`
        <h3>${data.title}</h3>
        <p>${data.extract}</p>
        <a href="https://en.wikipedia.org/wiki/${data.title}" target="_blank">View on Wikipedia</a>
      `)
      .addTo(map);

    console.log(popup)

    //map.flyTo({ center: popup._lngLat });
  });

  // inspect a cluster on click
  map.on('click', 'clusters', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['clusters']
    });
    var clusterId = features[0].properties.cluster_id;
    map.getSource('wikiLocations').getClusterExpansionZoom(
      clusterId,
      function (err, zoom) {
        if (err) return;

        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom
        });
      }
    );
  });

  map.on('mouseenter', 'clusters', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'clusters', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('mouseenter', 'unclustered-point', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'unclustered-point', function () {
    map.getCanvas().style.cursor = '';
  });
});