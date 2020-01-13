const geojson2svg = require('geojson2svg')
const parseSVG = require('parse-svg')
const fs = require('fs')
const path = require('path')


const jsonfile = path.join(__dirname, '全台灣村里界圖_20140501.json')

fs.readFile(jsonfile, { encoding: 'utf-8' }, (err, data) => {
    if (!err) {
        conv(data);
    }
})

function conv(geojsonContent) {
    // console.log(geojsonContent);
    
    const converter = geojson2svg({})

    const svgStrings = converter.convert(geojsonContent, {})
    console.log(svgStrings); // undefined
    
    // const svgElement = svgStrings.map(function (svgString) {
    //     return parseSVG(svgString)
    // })
}
    


