var externalData = {
    sources: [
        {
            "name": "my-geojson-source", 
            "type": "geojson",
            "data": "./map/CCRO.geojson"
        },
        {
            "name": "my-geojson-source2", 
            "type": "geojson",
            "data": "./map/UCRT_districts.geojson"
        },
        {
            "name": "Datooga", 
            "type": "geojson",
            "data": "./map/Datooga_FeaturesToJSON.geojson"
        },
                {
            "name": "Datooga_Hadzabe", 
            "type": "geojson",
            "data": "./map/Datooga_Hadzab_FeaturesToJSO.geojson"
        },
                {
            "name": "Datooga_Maasai", 
            "type": "geojson",
            "data": "./map/Datooga_Maasai_FeaturesToJSO.geojson"
        },
                {
            "name": "Hadzabe", 
            "type": "geojson",
            "data": "./map/Hadzabe_FeaturesToJSON.geojson"
        },
                {
            "name": "Maasai_Akie", 
            "type": "geojson",
            "data": "./map/Maasai_Akie_FeaturesToJSON.geojson"
        },
                {
            "name": "Maasai", 
            "type": "geojson",
            "data": "./map/Maasai_FeaturesToJSON.geojson"
        },
                {
            "name": "Sandawe_Maasai", 
            "type": "geojson",
            "data": "./map/Sandawe_Maasai_FeaturesToJSO.geojson"
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
            "id": "my-geojson-fill3",
            "type": "fill",
            "source": "my-geojson-source3",
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
        },

        {
            "id": "Datooga-fill",
            "type": "fill",
            "source": "Datooga",
            "paint": {
                "fill-color": "#e41a1c",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Datooga_Hadzabe-fill",
            "type": "fill",
            "source": "Datooga_Hadzabe",
            "paint": {
                "fill-color": "#485A82",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Datooga_Maasai-fill",
            "type": "fill",
            "source": "Datooga_Maasai",
            "paint": {
                "fill-color": "#927F5F",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Hadzabe-fill",
            "type": "fill",
            "source": "Hadzabe",
            "paint": {
                "fill-color": "#377eb8",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Maasai_Akie-fill",
            "type": "fill",
            "source": "Maasai_Akie",
            "paint": {
                "fill-color": "#ff7f00",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Maasai-fill",
            "type": "fill",
            "source": "Maasai",
            "paint": {
                "fill-color": "#4daf4a",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Sandawe_Maasai-fill",
            "type": "fill",
            "source": "Sandawe_Maasai",
            "paint": {
                "fill-color": "#984ea3",
                "fill-opacity": 0.5
            }
        },


        
    ]
};