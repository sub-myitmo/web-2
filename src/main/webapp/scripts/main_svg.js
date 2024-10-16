
$("#paint").on("click", function (e) {
    let pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;

    // The cursor point, translated into SVG coordinates
    let cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse());

    let reallyX = cursorpt.x - center;
    let reallyY = center - cursorpt.y;

    showCorrect.className = "info";
    let r = getActualR()
    if (!isNaN(+r)) {
        superFlag = true;
        showCorrect.innerHTML = `Вы попали в точку с координатами (${(reallyX * r / baseR).toFixed(2)}, ${(reallyY * r / baseR).toFixed(2)}). <span onclick="svgToServer(${(reallyX / baseR).toFixed(2)}, ${(reallyY / baseR).toFixed(2)}, ${r})" id="check-poke">Нажмите здесь, чтобы проверить эту точку</span>`;
        draw((reallyX * r / baseR).toFixed(2), (reallyY * r / baseR).toFixed(2), r);
    } else {
        showCorrect.textContent = `Чтобы зафиксировать точку, надо ввести значение R!`;
    }
})
function svgToServer(x, y, r) {
    const form = $('<form>', {
        action: `controller?x=${x}&y=${y}&r=${r}`,
        method: "get"
    });

    const args = {x: x, y: y, r: r};
    Object.entries(args).forEach(entry => {
        const [key, value] = entry;
        $('<input>').attr({
            type: "hidden",
            name: key,
            value: value
        }).appendTo(form);
    });

    form.appendTo('body').submit()

}
