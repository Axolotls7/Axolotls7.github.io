function moveToCursor(event, id) {
    let x = event.offsetX
    let y = event.offsetY
    document.getElementById(id).setAttribute("cx", x)
    document.getElementById(id).setAttribute("cy", y)
}
