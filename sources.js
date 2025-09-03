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
        },




        {
            "name": "Calves_Weak", 
            "type": "geojson",
            "data": "./map/Calves_Weak_FeaturesToJSON.geojson"
        },
                {
            "name": "Dry_season_grz", 
            "type": "geojson",
            "data": "./map/Dry_season_grz_FeaturesToJSO.geojson"
        },
                {
            "name": "ForestZones", 
            "type": "geojson",
            "data": "./map/ForestZones_FeaturesToJSON.geojson"
        },
                {
            "name": "GrazingZones", 
            "type": "geojson",
            "data": "./map/GrazingZones_FeaturesToJSON.geojson"
        },
                {
            "name": "InvestmentZone", 
            "type": "geojson",
            "data": "./map/InvestmentZone_FeaturesToJSO.geojson"
        },
                {
            "name": "Settlement_Agr", 
            "type": "geojson",
            "data": "./map/Settlement_Agr_FeaturesToJSO.geojson"
        },
                {
            "name": "Settlement_Gra", 
            "type": "geojson",
            "data": "./map/Settlement_Gra_FeaturesToJSO.geojson"
        },
                {
            "name": "Social_Service", 
            "type": "geojson",
            "data": "./map/Social_Service_FeaturesToJSO.geojson"
        },
                {
            "name": "Water_sources", 
            "type": "geojson",
            "data": "./map/Water_sources_FeaturesToJSON.geojson"
        },
                {
            "name": "WetSeasonGrazi", 
            "type": "geojson",
            "data": "./map/WetSeasonGrazi_FeaturesToJSO.geojson"
        },
                {
            "name": "WildlifeMGMT", 
            "type": "geojson",
            "data": "./map/WildlifeMGMT_FeaturesToJSON.geojson"
        },



                {
            "name": "ForestReserveM", 
            "type": "geojson",
            "data": "./map/ForestReserveM_FeaturesToJSO.geojson"
        },
                {
            "name": "Game_Reserve", 
            "type": "geojson",
            "data": "./map/Game_Reserve_FeaturesToJSON.geojson"
        },
                {
            "name": "GCA_main", 
            "type": "geojson",
            "data": "./map/GCA_main_FeaturesToJSON.geojson"
        },
                {
            "name": "National_parks", 
            "type": "geojson",
            "data": "./map/National_parks_FeaturesToJSO.geojson"
        },
                {
            "name": "WMA", 
            "type": "geojson",
            "data": "./map/WMA_FeaturesToJSON.geojson"
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






        {
            "id": "Calves_Weak-fill",
            "type": "fill",
            "source": "Calves_Weak",
            "paint": {
                "fill-color": "#e41a1c",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Dry_season_grz-fill",
            "type": "fill",
            "source": "Dry_season_grz",
            "paint": {
                "fill-color": "#485A82",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "ForestZones-fill",
            "type": "fill",
            "source": "ForestZones",
            "paint": {
                "fill-color": "#927F5F",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "GrazingZones-fill",
            "type": "fill",
            "source": "GrazingZones",
            "paint": {
                "fill-color": "#377eb8",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "InvestmentZone-fill",
            "type": "fill",
            "source": "InvestmentZone",
            "paint": {
                "fill-color": "#ff7f00",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Settlement_Agr-fill",
            "type": "fill",
            "source": "Settlement_Agr",
            "paint": {
                "fill-color": "#4daf4a",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Settlement_Gra-fill",
            "type": "fill",
            "source": "Settlement_Gra",
            "paint": {
                "fill-color": "#984ea3",
                "fill-opacity": 0.5
            }
        },

                {
            "id": "Social_Service-fill",
            "type": "fill",
            "source": "Social_Service",
            "paint": {
                "fill-color": "#F5FCBD",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "Water_sources-fill",
            "type": "fill",
            "source": "Water_sources",
            "paint": {
                "fill-color": "#9C4061",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "WetSeasonGrazi-fill",
            "type": "fill",
            "source": "WetSeasonGrazi",
            "paint": {
                "fill-color": "#F56959",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "WildlifeMGMT-fill",
            "type": "fill",
            "source": "WildlifeMGMT",
            "paint": {
                "fill-color": "#FCCCC5",
                "fill-opacity": 0.5
            }
        },






        {
            "id": "ForestReserveM-fill",
            "type": "fill",
            "source": "ForestReserveM",
            "paint": {
                "fill-color": "#984ea3",
                "fill-opacity": 0.5
            }
        },

                {
            "id": "Game_Reserve-fill",
            "type": "fill",
            "source": "Game_Reserve",
            "paint": {
                "fill-color": "#F5FCBD",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "GCA_main-fill",
            "type": "fill",
            "source": "GCA_main",
            "paint": {
                "fill-color": "#9C4061",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "National_parks-fill",
            "type": "fill",
            "source": "National_parks",
            "paint": {
                "fill-color": "#F56959",
                "fill-opacity": 0.5
            }
        },

        {
            "id": "WMA-fill",
            "type": "fill",
            "source": "WMA",
            "paint": {
                "fill-color": "#FCCCC5",
                "fill-opacity": 0.5
            }
        },



        


        
    ]
};

