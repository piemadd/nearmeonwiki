const baseStyle = [
  {
    "id": "background",
    "type": "background",
    "paint": {
      "background-color": "#dddddd"
    }
  },
  {
    "id": "earth",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "earth",
    "paint": {
      "fill-color": "#151515"
    }
  },
  {
    "id": "landuse_park",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "==",
        "pmap:kind",
        "park"
      ],
      [
        "==",
        "landuse",
        "cemetery"
      ]
    ],
    "paint": {
      "fill-color": "#1d3e2e"
    }
  },
  {
    "id": "landuse_hospital",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "==",
        "pmap:kind",
        "hospital"
      ]
    ],
    "paint": {
      "fill-color": "#2e2226"
    }
  },
  {
    "id": "landuse_industrial",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "==",
        "pmap:kind",
        "industrial"
      ]
    ],
    "paint": {
      "fill-color": "#20201e"
    }
  },
  {
    "id": "landuse_school",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "==",
        "pmap:kind",
        "school"
      ]
    ],
    "paint": {
      "fill-color": "#193a3c"
    }
  },
  {
    "id": "natural_wood",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "natural",
    "filter": [
      "any",
      [
        "==",
        "natural",
        "wood"
      ],
      [
        "==",
        "leisure",
        "nature_reserve"
      ],
      [
        "==",
        "landuse",
        "forest"
      ]
    ],
    "paint": {
      "fill-color": "#212e25"
    }
  },
  {
    "id": "landuse_pedestrian",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "==",
        "highway",
        "footway"
      ]
    ],
    "paint": {
      "fill-color": "#1a1a1a"
    }
  },
  {
    "id": "natural_scrub",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "natural",
    "filter": [
      "in",
      "natural",
      "scrub",
      "grassland"
    ],
    "paint": {
      "fill-color": "#27362a"
    }
  },
  {
    "id": "natural_glacier",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "natural",
    "filter": [
      "==",
      "natural",
      "glacier"
    ],
    "paint": {
      "fill-color": "#1c1c1c"
    }
  },
  {
    "id": "natural_sand",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "natural",
    "filter": [
      "==",
      "natural",
      "sand"
    ],
    "paint": {
      "fill-color": "#374238"
    }
  },
  {
    "id": "landuse_aerodrome",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "==",
      "aeroway",
      "aerodrome"
    ],
    "paint": {
      "fill-color": "#000000"
    }
  },
  {
    "id": "transit_runway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "transit",
    "filter": [
      "has",
      "aeroway"
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": 6
    }
  },
  {
    "id": "landuse_runway",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "==",
        "aeroway",
        "runway"
      ],
      [
        "==",
        "area:aeroway",
        "runway"
      ],
      [
        "==",
        "area:aeroway",
        "taxiway"
      ]
    ],
    "paint": {
      "fill-color": "#000000"
    }
  },
  {
    "id": "water",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "water",
    "paint": {
      "fill-color": "#1e293b"
    }
  },
  {
    "id": "roads_tunnels_other_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "other"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_tunnels_other",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "other"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-dasharray": [
        1,
        1
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    }
  },
  {
    "id": "roads_tunnels_minor_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-dasharray": [
        3,
        2
      ],
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        12,
        0,
        12.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_tunnels_minor",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    "id": "roads_tunnels_medium_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-dasharray": [
        3,
        2
      ],
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        10,
        0,
        10.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_tunnels_medium",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    "id": "roads_tunnels_major_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-dasharray": [
        3,
        2
      ],
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        9,
        0,
        9.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_tunnels_major",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ]
    }
  },
  {
    "id": "roads_tunnels_highway_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-dasharray": [
        3,
        2
      ],
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_tunnels_highway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ]
    }
  },
  {
    "id": "physical_line_waterway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "physical_line",
    "filter": [
      "==",
      [
        "get",
        "pmap:kind"
      ],
      "waterway"
    ],
    "paint": {
      "line-color": "#1e293b",
      "line-width": 0.5
    }
  },
  {
    "id": "buildings",
    "type": "fill-extrusion",
    "source": "protomaps",
    "source-layer": "buildings",
    "paint": {
      "fill-extrusion-color": "#393f43",
      "fill-extrusion-height": [
        "to-number",
        [
          "get",
          "height"
        ]
      ],
      "fill-extrusion-opacity": 0.5
    }
  },
  {
    "id": "roads_other",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "other"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-dasharray": [
        2,
        1
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    }
  },
  {
    "id": "roads_minor_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#222222",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        12,
        0,
        12.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_minor",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    "id": "roads_medium_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#222222",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        10,
        0,
        10.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_medium",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#282828",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    "id": "roads_major_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#222222",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        9,
        0,
        9.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_major",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#2f2f2f",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ]
    }
  },
  {
    "id": "roads_highway_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ]
    ],
    "paint": {
      "line-color": "#222222",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_highway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ]
    ],
    "paint": {
      "line-color": "#3b3b3b",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ]
    }
  },
  {
    "id": "transit_railway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "transit",
    "filter": [
      "all",
      [
        "==",
        "pmap:kind",
        "railway"
      ]
    ],
    "paint": {
      "line-color": "#bbbbbb",
      "line-width": 2
    }
  },
  {
    "id": "transit_railway_tracks",
    "type": "line",
    "source": "protomaps",
    "source-layer": "transit",
    "filter": [
      "all",
      [
        "==",
        "pmap:kind",
        "railway"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": 0.8,
      "line-dasharray": [
        6,
        10
      ]
    }
  },
  {
    "id": "boundaries",
    "type": "line",
    "source": "protomaps",
    "source-layer": "boundaries",
    "paint": {
      "line-color": "#6b1001",
      "line-width": 0.5,
      "line-dasharray": [
        3,
        2
      ]
    }
  },
  {
    "id": "roads_bridges_other_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "other"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_bridges_other",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "other"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-dasharray": [
        2,
        1
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    }
  },
  {
    "id": "roads_bridges_minor_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        12,
        0,
        12.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_bridges_minor",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    "id": "roads_bridges_medium_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        10,
        0,
        10.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_bridges_medium",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    "id": "roads_bridges_major_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        9,
        0,
        9.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_bridges_major",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ]
    }
  },
  {
    "id": "roads_bridges_highway_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ]
    ],
    "paint": {
      "line-color": "#ffffff",
      "line-gap-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ],
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        7,
        0,
        7.5,
        1
      ]
    },
    "layout": {
      "visibility": "visible"
    }
  },
  {
    "id": "roads_bridges_highway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ]
    ],
    "paint": {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ]
    }
  },
  {
    "id": "physical_line_waterway_label",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "physical_line",
    "minzoom": 14,
    "layout": {
      "symbol-placement": "line",
      "text-font": [
        "NotoSans-Regular"
      ],
      "text-field": [
        "get",
        "name"
      ],
      "text-size": 14,
      "text-letter-spacing": 0.3
    },
    "paint": {
      "text-color": "#ffffff",
      "text-halo-color": "#000000",
      "text-halo-width": 2
    }
  },
  {
    "id": "roads_labels",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "roads",
    "layout": {
      "symbol-placement": "line",
      "text-font": [
        "NotoSans-Regular"
      ],
      "text-field": [
        "get",
        "name"
      ],
      "text-size": 12
    },
    "paint": {
      "text-color": "#7a7a7a",
      "text-halo-color": "#000000",
      "text-halo-width": 2
    }
  },
  {
    "id": "mask",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "mask",
    "paint": {
      "fill-color": "#dddddd"
    }
  },
  {
    "id": "physical_point_ocean",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "physical_point",
    "filter": [
      "any",
      [
        "==",
        "place",
        "sea"
      ],
      [
        "==",
        "place",
        "ocean"
      ]
    ],
    "layout": {
      "text-font": [
        "NotoSans-Regular"
      ],
      "text-field": [
        "get",
        "name"
      ],
      "text-size": 13,
      "text-letter-spacing": 0.1
    },
    "paint": {
      "text-color": "#ffffff",
      "text-halo-color": "#000000",
      "text-halo-width": 1
    }
  },
  {
    "id": "physical_point_peak",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "physical_point",
    "filter": [
      "any",
      [
        "==",
        "natural",
        "peak"
      ]
    ],
    "layout": {
      "text-font": [
        "NotoSans-Regular"
      ],
      "text-field": [
        "get",
        "name"
      ],
      "text-size": 14
    },
    "paint": {
      "text-color": "#ffffff",
      "text-halo-color": "#000000",
      "text-halo-width": 1.5
    }
  },
  {
    "id": "places_subplace",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": [
      "==",
      "pmap:kind",
      "neighbourhood"
    ],
    "layout": {
      "text-field": "{name}",
      "text-font": [
        "NotoSans-Regular"
      ],
      "text-size": {
        "base": 1.2,
        "stops": [
          [
            11,
            10
          ],
          [
            14,
            12
          ]
        ]
      },
      "text-transform": "uppercase"
    },
    "paint": {
      "text-color": "#8e8e8e",
      "text-halo-color": "#000000",
      "text-halo-width": 0.5
    }
  },
  {
    "id": "places_city_circle",
    "type": "circle",
    "source": "protomaps",
    "source-layer": "places",
    "filter": [
      "==",
      "pmap:kind",
      "city"
    ],
    "paint": {
      "circle-radius": 2,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#000000",
      "circle-color": "#ffffff"
    },
    "maxzoom": 8
  },
  {
    "id": "places_city",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": [
      "==",
      "pmap:kind",
      "city"
    ],
    "layout": {
      "text-field": "{name}",
      "text-font": [
        "NotoSans-Bold"
      ],
      "text-size": [
        "step",
        [
          "get",
          "pmap:rank"
        ],
        0,
        1,
        12,
        2,
        10
      ],
      "text-variable-anchor": [
        "bottom-left"
      ],
      "text-radial-offset": 0.2
    },
    "paint": {
      "text-color": "#ffffff",
      "text-halo-color": "#000000",
      "text-halo-width": 1
    }
  },
  {
    "id": "places_state",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": [
      "==",
      "pmap:kind",
      "state"
    ],
    "layout": {
      "text-field": "{name}",
      "text-font": [
        "NotoSans-Regular"
      ],
      "text-size": 12,
      "text-radial-offset": 0.2,
      "text-anchor": "center",
      "text-transform": "uppercase"
    },
    "paint": {
      "text-color": "#ffffff",
      "text-halo-color": "#000000",
      "text-halo-width": 0.5
    }
  },
  {
    "id": "places_country",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": [
      "==",
      "place",
      "country"
    ],
    "layout": {
      "text-field": "{name}",
      "text-font": [
        "NotoSans-Bold"
      ],
      "text-size": {
        "base": 1.2,
        "stops": [
          [
            2,
            13
          ],
          [
            6,
            13
          ],
          [
            8,
            20
          ]
        ]
      },
      "text-transform": "uppercase"
    },
    "paint": {
      "text-color": "#ffffff",
      "text-halo-color": "#000000",
      "text-halo-width": 1
    }
  }
]