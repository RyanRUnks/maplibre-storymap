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
        }
    ]
};