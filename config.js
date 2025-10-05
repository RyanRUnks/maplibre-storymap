var config = {
    style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=ISAejSbv9TwJZOOcbCbJ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: true, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: true, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'Ujamaa Community Resource Team (UCRT)',
    logo: '',
    subtitle: 'Empowering pastoralist, agro-pastoralist and hunter-gatherer communities',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Indigenous land in Tanzania',
            image: './images/landscape.png',
            caption: '',
            website: '',
            author: '',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: '  ',
            location: {
                center: [33, -6],
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {layer: 'my-geojson-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-fill2',opacity: 0, visibility: 'none'},
                {layer: 'Datooga-fill',opacity: 0.5, visibility: 'visible'},
                {layer: 'Datooga_Hadzabe-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Datooga_Maasai-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Hadzabe-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Maasai_Akie-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Maasai-fill',opacity: 0.75, visibility: 'visible'},
                {layer: 'Sandawe_Maasai-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Calves_Weak-fill',opacity: 0, visibility: 'none'},
                {layer: 'Dry_season_grz-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'GrazingZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'InvestmentZone-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Agr-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Gra-fill',opacity: 0, visibility: 'none'},
                {layer: 'Social_Service-fill',opacity: 0, visibility: 'none'},
                {layer: 'Water_sources-fill',opacity: 0, visibility: 'none'},
                {layer: 'WetSeasonGrazi-fill',opacity: 0, visibility: 'none'},
                {layer: 'WildlifeMGMT-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestReserveM-fill',opacity: 0, visibility: 'none'},
                {layer: 'Game_Reserve-fill',opacity: 0, visibility: 'none'},
                {layer: 'Ngorongoro-fill',opacity: 0, visibility: 'none'},
                {layer: 'National_parks-fill',opacity: 0, visibility: 'none'},
                {layer: 'WMA-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-label2', paint: 'text-opacity', opacity: 0, visibility: 'none'}
            ],
            onChapterExit: [
                {layer: 'my-geojson-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-fill2',opacity: 0, visibility: 'none'},
                {layer: 'Datooga-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai_Akie-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Sandawe_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Calves_Weak-fill',opacity: 0, visibility: 'none'},
                {layer: 'Dry_season_grz-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'GrazingZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'InvestmentZone-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Agr-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Gra-fill',opacity: 0, visibility: 'none'},
                {layer: 'Social_Service-fill',opacity: 0, visibility: 'none'},
                {layer: 'Water_sources-fill',opacity: 0, visibility: 'none'},
                {layer: 'WetSeasonGrazi-fill',opacity: 0, visibility: 'none'},
                {layer: 'WildlifeMGMT-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestReserveM-fill',opacity: 0, visibility: 'none'},
                {layer: 'Game_Reserve-fill',opacity: 0, visibility: 'none'},
                {layer: 'Ngorongoro-fill',opacity: 0, visibility: 'none'},
                {layer: 'National_parks-fill',opacity: 0, visibility: 'none'},
                {layer: 'WMA-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-label2', paint: 'text-opacity', opacity: 0, visibility: 'none'}
            ],
            legend: `<h3 style="margin-top:0;">Legend</h3>
                <ul style="list-style: none; padding-left: 0;">
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #e41a1c; margin-right: 8px; border-radius:3px;"></span>
                    Datooga
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #485A82; margin-right: 8px; border-radius:3px;"></span>
                    Datooga & Hadzabe
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #927F5F; margin-right: 8px; border-radius:3px;"></span>
                    Datooga & Maasai
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #377eb8; margin-right: 8px; border-radius:3px;"></span>
                    Hadzabe
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #ff7f00; margin-right: 8px; border-radius:3px;"></span>
                    Maasai & Akie
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #ffbd59; margin-right: 8px; border-radius:3px;"></span>
                    Maasai
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #984ea3; margin-right: 8px; border-radius:3px;"></span>
                    Sandawe & Maasai
                  </li>
                </ul>`
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'Districts UCRT works in',
            image: './images/pastoralism.png',
            caption: '',
            website: '',
            author: '',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: '',
            location: {
                center: [35.35, -4.05],
                zoom: 6.75,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {layer: 'my-geojson-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-fill2',opacity: 0.5, visibility: 'visible'},
                {layer: 'Datooga-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai_Akie-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Sandawe_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Calves_Weak-fill',opacity: 0, visibility: 'none'},
                {layer: 'Dry_season_grz-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'GrazingZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'InvestmentZone-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Agr-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Gra-fill',opacity: 0, visibility: 'none'},
                {layer: 'Social_Service-fill',opacity: 0, visibility: 'none'},
                {layer: 'Water_sources-fill',opacity: 0, visibility: 'none'},
                {layer: 'WetSeasonGrazi-fill',opacity: 0, visibility: 'none'},
                {layer: 'WildlifeMGMT-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestReserveM-fill',opacity: 1, visibility: 'none'},
                {layer: 'Game_Reserve-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Ngorongoro-fill',opacity: 1, visibility: 'visible'},
                {layer: 'National_parks-fill',opacity: 1, visibility: 'visible'},
                {layer: 'WMA-fill',opacity: 1, visibility: 'visible'},
                {layer: 'my-geojson-label2', paint: 'text-opacity', opacity: 1, visibility: 'visible'}
            ],
            onChapterExit: [
                {layer: 'my-geojson-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-fill2',opacity: 0, visibility: 'none'},
                {layer: 'Datooga-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai_Akie-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Sandawe_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Calves_Weak-fill',opacity: 0, visibility: 'none'},
                {layer: 'Dry_season_grz-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'GrazingZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'InvestmentZone-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Agr-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Gra-fill',opacity: 0, visibility: 'none'},
                {layer: 'Social_Service-fill',opacity: 0, visibility: 'none'},
                {layer: 'Water_sources-fill',opacity: 0, visibility: 'none'},
                {layer: 'WetSeasonGrazi-fill',opacity: 0, visibility: 'none'},
                {layer: 'WildlifeMGMT-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestReserveM-fill',opacity: 0, visibility: 'none'},
                {layer: 'Game_Reserve-fill',opacity: 0, visibility: 'none'},
                {layer: 'Ngorongoro-fill',opacity: 0, visibility: 'none'},
                {layer: 'National_parks-fill',opacity: 0, visibility: 'none'},
                {layer: 'WMA-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-label2', paint: 'text-opacity', opacity: 0, visibility: 'none'}
            ],
            legend: `<h3 style="margin-top:0;">Legend</h3>
                <ul style="list-style: none; padding-left: 0;">
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #B42222; margin-right: 8px; border-radius:3px;"></span>
                    Districts
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #4c3f0c; margin-right: 8px; border-radius:3px;"></span>
                    Forest Reserves
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #F5FCBD; margin-right: 8px; border-radius:3px;"></span>
                    Game Reserves
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #9C4061; margin-right: 8px; border-radius:3px;"></span>
                    Ngorongoro Conservation Area (Maasai Community Land)
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #55524c; margin-right: 8px; border-radius:3px;"></span>
                    National Parks
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #FCCCC5; margin-right: 8px; border-radius:3px;"></span>
                    Wildlife Management Areas 
                  </li>
                </ul>`
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Certificates of Customary Right of Occupancy (CCROs)',
            image: './images/CCRO_1.png',
            caption: '',
            website: '',
            author: 'UCRT',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'Strengthening tenure arrangements beyond CVLs through communal Certificates of Customary Right of Occupancy (CCROs) that institutionalise collective tenure arrangements for pastoralists and hunter-gatherers. Established Women’s Rights and Leadership Forums (WRLFs) to promote women’s rights to own, and make decisions over, land and property.  ',
            location: {
                center: [35.32, -3.8],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {layer: 'my-geojson-fill',opacity: 1, visibility: 'visible'},
                {layer: 'my-geojson-fill2',opacity: 0.5, visibility: 'visible'},
                {layer: 'Datooga-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai_Akie-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Sandawe_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Calves_Weak-fill',opacity: 0, visibility: 'none'},
                {layer: 'Dry_season_grz-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'GrazingZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'InvestmentZone-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Agr-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Gra-fill',opacity: 0, visibility: 'none'},
                {layer: 'Social_Service-fill',opacity: 0, visibility: 'none'},
                {layer: 'Water_sources-fill',opacity: 0, visibility: 'none'},
                {layer: 'WetSeasonGrazi-fill',opacity: 0, visibility: 'none'},
                {layer: 'WildlifeMGMT-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestReserveM-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Game_Reserve-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Ngorongoro-fill',opacity: 1, visibility: 'visible'},
                {layer: 'National_parks-fill',opacity: 1, visibility: 'visible'},
                {layer: 'WMA-fill',opacity: 1, visibility: 'visible'},
                {layer: 'my-geojson-label2', paint: 'text-opacity', opacity: 1, visibility: 'visible'}
            ],
            onChapterExit: [
                {layer: 'my-geojson-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-fill2',opacity: 0, visibility: 'none'},
                {layer: 'Datooga-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai_Akie-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Sandawe_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Calves_Weak-fill',opacity: 0, visibility: 'none'},
                {layer: 'Dry_season_grz-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'GrazingZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'InvestmentZone-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Agr-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Gra-fill',opacity: 0, visibility: 'none'},
                {layer: 'Social_Service-fill',opacity: 0, visibility: 'none'},
                {layer: 'Water_sources-fill',opacity: 0, visibility: 'none'},
                {layer: 'WetSeasonGrazi-fill',opacity: 0, visibility: 'none'},
                {layer: 'WildlifeMGMT-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestReserveM-fill',opacity: 0, visibility: 'none'},
                {layer: 'Game_Reserve-fill',opacity: 0, visibility: 'none'},
                {layer: 'Ngorongoro-fill',opacity: 0, visibility: 'none'},
                {layer: 'National_parks-fill',opacity: 0, visibility: 'none'},
                {layer: 'WMA-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-label2', paint: 'text-opacity', opacity: 0, visibility: 'none'}
            ],
            legend: `<h3 style="margin-top:0;">Legend</h3>
                <ul style="list-style: none; padding-left: 0;">
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #ffbd59; margin-right: 8px; border-radius:3px;"></span>
                    CCROs
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #4c3f0c; margin-right: 8px; border-radius:3px;"></span>
                    Forest Reserves
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #F5FCBD; margin-right: 8px; border-radius:3px;"></span>
                    Game Reserves
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #9C4061; margin-right: 8px; border-radius:3px;"></span>
                    Ngorongoro Conservation Area (Maasai Community Land)
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #55524c; margin-right: 8px; border-radius:3px;"></span>
                    National Parks
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #FCCCC5; margin-right: 8px; border-radius:3px;"></span>
                    Wildlife Management Areas 
                  </li>
                </ul>`
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Land Use Planning',
            image: './images/CCRO_3.png',
            caption: '',
            website: '',
            author: '',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: '  ',
            location: {
                center: [35.32, -3.8],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {layer: 'my-geojson-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-fill2',opacity: 0.5, visibility: 'visible'},
                {layer: 'Datooga-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai_Akie-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Sandawe_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Calves_Weak-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Dry_season_grz-fill',opacity: 1, visibility: 'visible'},
                {layer: 'ForestZones-fill',opacity: 1, visibility: 'visible'},
                {layer: 'GrazingZones-fill',opacity: 1, visibility: 'visible'},
                {layer: 'InvestmentZone-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Agr-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Settlement_Gra-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Social_Service-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Water_sources-fill',opacity: 0, visibility: 'none'},
                {layer: 'WetSeasonGrazi-fill',opacity: 1, visibility: 'visible'},
                {layer: 'WildlifeMGMT-fill',opacity: 1, visibility: 'visible'},
                {layer: 'ForestReserveM-fill',opacity: 0, visibility: 'none'},
                {layer: 'Game_Reserve-fill',opacity: 1, visibility: 'visible'},
                {layer: 'Ngorongoro-fill',opacity: 1, visibility: 'visible'},
                {layer: 'National_parks-fill',opacity: 1, visibility: 'visible'},
                {layer: 'WMA-fill',opacity: 1, visibility: 'visible'},
                {layer: 'my-geojson-label2', paint: 'text-opacity', opacity: 1, visibility: 'visible'}
            ],
            onChapterExit: [
                {layer: 'my-geojson-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-fill2',opacity: 0, visibility: 'none'},
                {layer: 'Datooga-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Datooga_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Hadzabe-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai_Akie-fill',opacity: 0, visibility: 'none'},
                {layer: 'Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Sandawe_Maasai-fill',opacity: 0, visibility: 'none'},
                {layer: 'Calves_Weak-fill',opacity: 0, visibility: 'none'},
                {layer: 'Dry_season_grz-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'GrazingZones-fill',opacity: 0, visibility: 'none'},
                {layer: 'InvestmentZone-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Agr-fill',opacity: 0, visibility: 'none'},
                {layer: 'Settlement_Gra-fill',opacity: 0, visibility: 'none'},
                {layer: 'Social_Service-fill',opacity: 0, visibility: 'none'},
                {layer: 'Water_sources-fill',opacity: 0, visibility: 'none'},
                {layer: 'WetSeasonGrazi-fill',opacity: 0, visibility: 'none'},
                {layer: 'WildlifeMGMT-fill',opacity: 0, visibility: 'none'},
                {layer: 'ForestReserveM-fill',opacity: 0, visibility: 'none'},
                {layer: 'Game_Reserve-fill',opacity: 0, visibility: 'none'},
                {layer: 'Ngorongoro-fill',opacity: 0, visibility: 'none'},
                {layer: 'National_parks-fill',opacity: 0, visibility: 'none'},
                {layer: 'WMA-fill',opacity: 0, visibility: 'none'},
                {layer: 'my-geojson-label2', paint: 'text-opacity', opacity: 0, visibility: 'none'}
            ],
            legend: `<h3 style="margin-top:0;">Legend</h3>
                <ul style="list-style: none; padding-left: 0;">

                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #ffbd59; margin-right: 8px; border-radius:3px;"></span>
                    Grazing Zones
                  </li>

                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #4daf4a; margin-right: 8px; border-radius:3px;"></span>
                    Settlements
                  </li>

                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #858463; margin-right: 8px; border-radius:3px;"></span>
                    Agriculture
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #4c3f0c; margin-right: 8px; border-radius:3px;"></span>
                    Forest Reserves
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #F5FCBD; margin-right: 8px; border-radius:3px;"></span>
                    Game Reserves
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #9C4061; margin-right: 8px; border-radius:3px;"></span>
                    Ngorongoro Conservation Area (Maasai Community Land)
                  </li>

                  
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #55524c; margin-right: 8px; border-radius:3px;"></span>
                    National Parks
                  </li>
                  <li>
                    <span style="display: inline-block; width: 18px; height: 18px; background: #FCCCC5; margin-right: 8px; border-radius:3px;"></span>
                    Wildlife Management Areas 
                  </li>

                </ul>`
        }
    ]
};