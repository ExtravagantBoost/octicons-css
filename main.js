let body = l("body");
let main = body.l(".main");
fetch("./css/info.json").then((response)=>response.json()).then((jso)=>{
    for (let key in jso) {
        let h3 = l.CE("h3");
        let icon = l.CE("i");
        icon.classList.add("oi");
        icon.classList.add(jso[key].className);
        let wrapper = l.CE("div");
        wrapper.setattr({
            class:"icon-wrapper"
        })
        h3.apCh(icon);
        wrapper.apCh(h3);
        main.apCh(wrapper);
    }
})
