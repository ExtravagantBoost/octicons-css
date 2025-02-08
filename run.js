import svgtofont from 'svgtofont';
import path from 'path';
import fs from 'fs';
//lets import process from nodejs
import process from 'process';
//import { generateIconsSource } from 'svgtofont/src/generate';	
const version = process.env.npm_package_version;
let icons = path.resolve("./icons/");
let output_file = path.resolve("./css/");
let fontName = "octicons";
let font = svgtofont({
    src: icons,
    dist: output_file,
    fontName,
    classNamePrefix:"oi",
    excludeFormat: ['svg', 'ttf', 'eot'],
    generateInfoData: true,
    outSVGReact: false,
    outSVGReactNative: false,
    emptyDist: true,
    
    styleTemplates: "style_template",
    svgicons2svgfont: {
        
        normalize: true,
    },
    css: {
      hasTimestamp: false,
      fontSize: "16px",
    },
}).then(()=>{
    //lets minify the json file that was generated
    let jsn = output_file + "/info.json";
    fs.readFile(jsn, (err, data)=>{
        if (err) throw err;
        let jso = JSON.parse(data);
        let newjson = {};
        for (let key in jso) {
            console.log()
            newjson[jso[key].unicode.replace("&#","").replace(";","")] = jso[key].className;
        }
        fs.writeFile(jsn, JSON.stringify(newjson), "utf8", (err)=>{
            if (err) throw err;
            console.log("simplified info.json");
        })
    });
});
