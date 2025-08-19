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
    byline: 'By a Digital Storyteller',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'my-first-chapter',
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
                center: [36.7672, -5.2448],
                zoom: 9.41,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-79, 0],
                zoom: 5,
                pitch: 0,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-id',
            alignment: 'left',
            hidden: false,
            title: 'Chapter title',
            image: './images/name.png',
            caption: 'Source image caption',
            website: '<a href="" target="_blank">Website</a>',
            author: 'Digital Storyteller',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'Your chapter content',
            location: {
                center: [-75.15911, 39.97307],
                zoom: 10.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
