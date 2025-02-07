import svgtofont from 'svgtofont';
import path from 'path';
//import { generateIconsSource } from 'svgtofont/src/generate';	

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
    emptyDist: true,
    logger: (msg) => {
        //create console message that changes while processing
        console.log(msg);

    },
    css: {
      cssTemplate:""
      hasTimestamp: false,
    },
}).then((resp)=>{
    console.log(resp);
    
})
