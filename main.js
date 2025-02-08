let body = l("body");
let main = body.l(".main");
let getFontSize = (clase)=>{
    console.log(clase);
    let font = 16;
    let str = clase.split("-").reverse()[0];
    //see if clase contains a number 12,16,24,32,48,96
    switch (str) {
        case "12":
            font = 12;
            break;
        case "16":
            font = 16;
            break;
        case "24":
            font = 24;
            break;
        case "32":
            font = 32;
            break;
        case "48":
            font = 48;
            break;
        case "96":
            font = 96;
            break;
    }
    return font;
}
fetch("./css/info.json").then((response)=>response.json()).then((jso)=>{
    console.log(jso);
    for (let key in jso) {
        let clase = jso[key];
        let h3 = l.CE("span");
        let icon = l.CE("i");
        icon.classList.add("oi");
        icon.classList.add(clase);
        icon.setStyle({
            "font-size":getFontSize(clase) + "px"
        })
        let wrapper = l.CE("div");
        wrapper.setattr({
            class:"icon-wrapper"
        })
        h3.apCh(icon);
        wrapper.apCh(h3);
        main.apCh(wrapper);
    }
})
