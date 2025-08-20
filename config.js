var config = {
    style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=ISAejSbv9TwJZOOcbCbJ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
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
                {layer: 'my-geojson-fill',opacity: 0},
                {layer: 'my-geojson-fill3',opacity: 1},
                                 {
                      layer: 'my-geojson-label2',
                      opacity: 0
                 },
                {layer: 'my-geojson-fill2',opacity: 0}
            ],
            onChapterExit: [
                 {layer: 'my-geojson-fill',opacity: 0},
                                  {
                      layer: 'my-geojson-label2',
                      opacity: 0
                 },
                 {layer: 'my-geojson-fill3',opacity: 0},
                 {layer: 'my-geojson-fill2',opacity: 0}
            ]
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
            description: 'Strengthening tenure arrangements beyond CVLs through communal Certificates of Customary Right of Occupancy (CCROs) that institutionalise collective tenure arrangements for pastoralists and hunter-gatherers. Established Women’s Rights and Leadership Forums (WRLFs) to promote women’s rights to own, and make decisions over, land and property.  ',
            location: {
                center: [35.5, -4.05],
                zoom: 7.75,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                 {
                      layer: 'my-geojson-fill',
                      opacity: 0
                 },
                 {layer: 'my-geojson-fill3',opacity: 0},
                 {
                      layer: 'my-geojson-label2',
                      opacity: 1
                 },
                 {
                      layer: 'my-geojson-fill2',
                      opacity: 0.5
                 }
            ],
            onChapterExit: [
                 {
                      layer: 'my-geojson-fill',
                      opacity: 0
                 },
                 {layer: 'my-geojson-fill3',opacity: 0},
                                  {
                      layer: 'my-geojson-label2',
                      opacity: 0
                 },
                 {
                      layer: 'my-geojson-fill2',
                      opacity: 0
                 }
            ]
        },
                        {
            id: 'chapter-3',
            alignment: 'right',
            hidden: false,
            title: 'Arusha area',
            image: './images/hadzabe.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [36.6830, -3.3869],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                 {
                      layer: 'my-geojson-fill',
                      opacity: 0
                 },
                 {layer: 'my-geojson-fill3',opacity: 0},
                 {
                      layer: 'my-geojson-fill2',
                      opacity: 0
                 }
            ],
            onChapterExit: [
                 {
                      layer: 'my-geojson-fill',
                      opacity: 0
                 },
                 {layer: 'my-geojson-fill3',opacity: 0},
                 {
                      layer: 'my-geojson-fill2',
                      opacity: 0
                 }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Certificates of Customary Right of Occupancy (CCROs)',
            image: './images/UCRT_WEB.png',
            caption: '',
            website: '',
            author: 'UCRT',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'Strengthening tenure arrangements beyond CVLs through communal Certificates of Customary Right of Occupancy (CCROs) that institutionalise collective tenure arrangements for pastoralists and hunter-gatherers. Established Women’s Rights and Leadership Forums (WRLFs) to promote women’s rights to own, and make decisions over, land and property.  ',
            location: {
                center: [36.12, -3.8],
                zoom: 7.71,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                 {
                      layer: 'my-geojson-fill',
                      opacity: 1
                 },
                 {layer: 'my-geojson-fill3',opacity: 0},
                 {
                      layer: 'my-geojson-label2',
                      opacity: 0
                 },
                 {
                      layer: 'my-geojson-fill2',
                      opacity: 0
                 }
            ],
            onChapterExit: [
                 {
                      layer: 'my-geojson-fill',
                      opacity: 1
                 },
                 {layer: 'my-geojson-fill3',opacity: 0},
                {
                      layer: 'my-geojson-label2',
                      opacity: 0
                 },
                 {
                      layer: 'my-geojson-fill2',
                      opacity: 0
                 }
            ]
        },

    ]
};
