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
        let xdif = z.getAttribute("cx") - y.getAttribute("cx");
        let ydif = z.getAttribute("cy") - y.getAttribute("cy");
        let d = Math.hypot(xdif, ydif);
        let nx = dist * (xdif / d) + y.getAttribute("cx");
        let ny = dist * (ydif / d) + y.getAttribute("cy");
        z.setAttribute("cx", nx);
        z.setAttribute("cy", ny);
    }
}
