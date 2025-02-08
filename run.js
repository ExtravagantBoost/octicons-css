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
    outSVGReact: true,
    outSVGReactNative: true,
    emptyDist: true,
    logger: (msg) => {
        //create console message that changes while processing
        console.log(msg);

    },
    styleTemplates: "style_template",
    svgicons2svgfont: {
        
        normalize: true,
    },
    css: {
      hasTimestamp: false,
      fontSize: "16px",
    },
    website: {
        title: "Octicons-css",
        logo: "",//path.resolve(process.cwd(), "svg", "git.svg"),
        version: version,
        meta: {
          description: "Octicons/Primer condensed down into a css file",
          keywords: "octicons,primer,css,octicons-css,octicons.css,primer.css",
          favicon: "./favicon.png"
        },
        // Add a Github corner to your website
        // Like: https://github.com/uiwjs/react-github-corners
        corners: {
          url: 'https://github.com/ExtravagantBoost/octicons-css',
          width: 62, // default: 60
          height: 62, // default: 60
          bgColor: '#dc3545' // default: '#151513'
        },
        links: [
          {
            title: "GitHub",
            url: "https://github.com/ExtravagantBoost/octicons-css"
          },
          {
            title: "Feedback",
            url: "https://github.com/ExtravagantBoosr/octicons-css/issues"
          },
          {
            title: "Font Class",
            url: "index.html"
          },
          {
            title: "Unicode",
            url: "unicode.html"
          }
        ]
      }
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
