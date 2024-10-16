
let overlay = document.querySelector('#overlay-modal')

document.getElementById('paint').addEventListener('dblclick', (e) => {
    // откроем модальное окно

    e.preventDefault();

    let modalElem = document.getElementById("modal");

    svg = document.getElementById("modal_graph");
    paint_coordinates();

    if (PointsList !== null) {
        PointsList.points.forEach(point => {
            svg.innerHTML += `<circle class="point" cx="${center + point.x / point.r * baseR}" cy="${center - point.y / point.r * baseR}" r="4" fill=${point.isHit === true ? colorHit : colorMiss} stroke="grey" visibility="visible"/>`
        });
    }


    modalElem.classList.add('active');
    overlay.classList.add('active');
});


document.getElementById('close').addEventListener('click', function () {
    let parentModal = this.closest('#modal');

    // fetch(`controller?data=1`)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         PointsList = data;
    //         if (data == null) {
    //             PointsList = null
    //         }
    //     })

    svg = document.getElementById('paint')
    parentModal.classList.remove('active');
    overlay.classList.remove('active');

});


$("#modal_graph").on("click", function (e) {

    let footer = document.querySelector(".fixed-bottom")
    if (footer !== null) footer.classList.remove("fixed-bottom");

    let pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;

    // The cursor point, translated into SVG coordinates
    let cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse());

    let reallyX = cursorpt.x - center;
    let reallyY = center - cursorpt.y;

    let r = $("input[name='r-modal']:checked").val()
    if (!isNaN(+r)) {
        fetch(`controller?x=${(reallyX * r / baseR).toFixed(2)}&y=${(reallyY * r / baseR).toFixed(2)}&r=${r}&res=0`)
            .then(response => {
                return response.json();
            })
            .then(point => {

                svg.innerHTML += `<circle class="point" cx="${center + reallyX}" cy="${center - reallyY}" r="4" fill=${point.isHit === true ? colorHit : colorMiss} stroke="grey" visibility="visible"/>`

                svg = document.getElementById('paint')
                svg.innerHTML += `<circle class="point" cx="${center + reallyX}" cy="${center - reallyY}" r="4" fill=${point.isHit === true ? colorHit : colorMiss} stroke="grey" visibility="visible"/>`
                svg = document.getElementById('modal_graph')


                if (PointsList === null) {
                    $("#check tr:nth-child(2) td:first").remove()
                    PointsList = {points: []}
                }

                PointsList.points.push(point)
                let newRow = table.insertRow(-1);
                const rowX = newRow.insertCell(0);
                const rowY = newRow.insertCell(1);
                const rowR = newRow.insertCell(2);
                const rowResult = newRow.insertCell(3);
                const rowNow = newRow.insertCell(4);

                rowX.textContent = point.x;
                rowY.textContent = point.y;
                rowR.textContent = point.r;
                rowNow.textContent = point.date;
                if (point.isHit) {
                    rowResult.textContent = "Да"
                    newRow.className = "hit"
                } else {
                    rowResult.textContent = "Нет"
                    newRow.className = "miss"
                }
            })

    } else {
        document.getElementById('info_modal').textContent = "Не тыкнули R!"
        setTimeout(function () {
            document.getElementById('info_modal').textContent = '';
        }, 3000);
    }
})