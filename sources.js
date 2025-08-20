var externalData = {
    sources: [
        {
            "name": "my-geojson-source", // Use "name", not "id"
            "type": "geojson",
            "data": "./map/CCRO.geojson"
        },
        {
            "name": "my-geojson-source2", // Use "name", not "id"
            "type": "geojson",
            "data": "./map/UCRT_districts.geojson"
        }
    ],
    layers: [
        {
            "id": "my-geojson-fill",
            "type": "fill",
            "source": "my-geojson-source",
            "paint": {
                "fill-color": "#B42222",
                "fill-opacity": 0.5
            }
        },
        
        {
            "id": "my-geojson-fill2",
            "type": "fill",
            "source": "my-geojson-source2",
            "paint": {
                "fill-color": "#B42222",
                "fill-opacity": 0.5
            }
        },

        {
            id: "my-geojson-label2",
            type: "symbol",
            source: "my-geojson-source2",
            layout: {
                "text-field": ["get", "NewDist20"],        // property to use as label
                "text-size": 14,
                "text-anchor": "center"
            },
            paint: {
                "text-color": "#222",
                "text-halo-color": "#fff",
                "text-halo-width": 1
            }
        }

        
    ]
};