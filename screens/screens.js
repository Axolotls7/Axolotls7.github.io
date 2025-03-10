function moveToCursor(event, id) {
    try {
        let x = event.offsetX;
        let y = event.offsetY;
        document.getElementById(id).setAttribute("cx", x);
        document.getElementById(id).setAttribute("cy", y);
    } catch (e) {
        dbg(`ERROR: ${e}`);
    }
}
function rope(ids, dist) {
    try {
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
    } catch (e) {
        dbg(`ERROR: ${e}`);
    }
}
function dbg(msg) {
    const d = document.getElementById('debug');
    d.innerHTML += msg + "<br>";
}
function resize(amount, id, clas, dims = ["r"]) {
    try {
        let targets = document.getElementById(id).getElementsByClassName(clas);
        for (let i = 0; i < targets.length; i++) {
            for (let j = 0; j < dims.length; j++) {
                targets.item(i).setAttribute(dims[j], amount.toString());
            }
        }
    } catch (e) {
        dbg(`ERROR: ${e}`);
    }
}

export default { moveToCursor, rope, dbg, resize };
