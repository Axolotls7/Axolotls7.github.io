function moveToCursor(event, id) {
    let x = event.offsetX;
    let y = event.offsetY;
    document.getElementById(id).setAttribute("cx", x);
    document.getElementById(id).setAttribute("cy", y);
}
function rope(ids, dist) {
    for (let x = 0;x < ids.length - 1; x++) {
        let y = document.getElementById(ids[x]);
        let z = document.getElementById(ids[x + 1]);
        let xdif = parseFloat(z.getAttribute("cx")) - parseFloat(y.getAttribute("cx"));
        let ydif = parseFloat(z.getAttribute("cy")) - parseFloat(y.getAttribute("cy"));
        let d = Math.hypot(xdif, ydif);
        let nx = dist * (xdif / d) + parseFloat(y.getAttribute("cx"));
        let ny = dist * (ydif / d) + parseFloat(y.getAttribute("cy"));
        z.setAttribute("cx", nx);
        z.setAttribute("cy", ny);
    }
}
function size(amount, id, clas, dims = ["r"]) {
    let targets = document.getElementById(id).getElementsByClassName(clas);
    for (let i = 0; i < targets.length; i++) {
        for (let j = 0; j < dims.length; j++) {
            targets.item(i).setAttribute(dims[j], amount);
        }
    }
}
