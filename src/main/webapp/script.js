const center = 150;
let baseR = 60;
let superFlag = false;
// флаг, чтобы скипать checker при тыкании в svg

const showCorrect = document.getElementById("online-checker");

const svg = document.getElementById("paint");

window.onload = function () {
    if (svg) {
        svg.innerHTML = `
        <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
        <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>
        <polygon fill="black" points="150,0 144,15 156,15" stroke="black"></polygon>
        <polygon fill="black" points="300,150 285,156 285,144" stroke="black"></polygon>
                
        <!-- lines on lines -->
        <line stroke="black" x1="${center + baseR / 2}" x2="${center + baseR / 2}" y1="155" y2="145"></line>
        <line stroke="black" x1="${center + baseR}" x2="${center + baseR}" y1="155" y2="145"></line>

        <line stroke="black" x1="${center - baseR}" x2="${center - baseR}" y1="155" y2="145"></line>
        <line stroke="black" x1="${center - baseR / 2}" x2="${center - baseR / 2}" y1="155" y2="145"></line>

        <line stroke="black" x1="145" x2="155" y1="${center - baseR / 2}" y2="${center - baseR / 2}"></line>
        <line stroke="black" x1="145" x2="155" y1="${center - baseR}" y2="${center - baseR}"></line>

        <line stroke="black" x1="145" x2="155" y1="${center + baseR / 2}" y2="${center + baseR / 2}"></line>
        <line stroke="black" x1="145" x2="155" y1="${center + baseR}" y2="${center + baseR}"></line>

        <!-- Rs and X, Y -->
        <text fill="black" x="${center + baseR / 2 - 10}" y="140">R/2</text>
        <text fill="black" x="${center + baseR - 5}" y="140">R</text>

        <text fill="black" x="${center - baseR - 8}" y="140">-R</text>
        <text fill="black" x="${center - baseR / 2 - 13}" y="140">-R/2</text>

        <text fill="black" x="160" y="${center - baseR + 5}">R</text>
        <text fill="black" x="160" y="${center - baseR / 2 + 5}">R/2</text>

        <text fill="black" x="160" y="${center + baseR / 2 + 3}">-R/2</text>
        <text fill="black" x="160" y="${center + baseR + 3}">-R</text>

        <text fill="black" x="285" y="140">X</text>
        <text fill="black" x="160" y="15">Y</text>

        <polygon points="150,150 ${center + baseR},150 150,${center - baseR / 2}" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>

        <rect x="${center - baseR}" y="${center - baseR}" width="${baseR}" height="${baseR}" fill-opacity="0.4" stroke="navy" fill="blue"></rect>

        <path d="M 150 150 L 150 ${center + baseR} A${baseR},${baseR} 0 0,1 ${center - baseR},150 Z" fill-opacity="0.4" stroke="navy"
              fill="blue"></path>
        `;
    }
    if (window.location.href.includes("/server/controller?x=")) window.location.href = "/server/result.jsp";
    if ($(document).height() <= $(window).height()) {
        $(".footer").addClass("fixed-bottom");
    }
}

function draw(x, y, r) {

    if (superFlag || checker(x, y, r)) {
        superFlag = false;
        x = +x;
        y = +y;
        r = +r;
        if (Math.abs(x / r) >= 2.5 || Math.abs(y / r) >= 2.5) baseR = Math.floor(150 / Math.max(Math.abs(x / r), Math.abs(y / r))) - 5;
        else baseR = 60;
        svg.innerHTML = `
        <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
        <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>
        <polygon fill="black" points="150,0 144,15 156,15" stroke="black"></polygon>
        <polygon fill="black" points="300,150 285,156 285,144" stroke="black"></polygon>
                
        <!-- lines on lines -->
        <line stroke="black" x1="${center + baseR / 2}" x2="${center + baseR / 2}" y1="155" y2="145"></line>
        <line stroke="black" x1="${center + baseR}" x2="${center + baseR}" y1="155" y2="145"></line>

        <line stroke="black" x1="${center - baseR}" x2="${center - baseR}" y1="155" y2="145"></line>
        <line stroke="black" x1="${center - baseR / 2}" x2="${center - baseR / 2}" y1="155" y2="145"></line>

        <line stroke="black" x1="145" x2="155" y1="${center - baseR / 2}" y2="${center - baseR / 2}"></line>
        <line stroke="black" x1="145" x2="155" y1="${center - baseR}" y2="${center - baseR}"></line>

        <line stroke="black" x1="145" x2="155" y1="${center + baseR / 2}" y2="${center + baseR / 2}"></line>
        <line stroke="black" x1="145" x2="155" y1="${center + baseR}" y2="${center + baseR}"></line>

        <!-- Rs and X, Y -->
        <text fill="black" x="${center + baseR - 5}" y="140">R</text>

        <text fill="black" x="${center - baseR - 8}" y="140">-R</text>

        <text fill="black" x="160" y="${center - baseR + 5}">R</text>

        <text fill="black" x="160" y="${center + baseR + 3}">-R</text>

        <text fill="black" x="285" y="140">X</text>
        <text fill="black" x="160" y="15">Y</text>

        <polygon points="150,150 ${center + baseR},150 150,${center - baseR / 2}" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>

        <rect x="${center - baseR}" y="${center - baseR}" width="${baseR}" height="${baseR}" fill-opacity="0.4" stroke="navy" fill="blue"></rect>

        <path d="M 150 150 L 150 ${center + baseR} A${baseR},${baseR} 0 0,1 ${center - baseR},150 Z" fill-opacity="0.4" stroke="navy"
              fill="blue"></path>
        <circle id="point" cx="${center + x / r * baseR}" cy="${center - y / r * baseR}" r="4" fill="red" stroke="white" visibility="visible"/>`
    } else {
        let pointElement = document.getElementById('point');
        if (pointElement) pointElement.setAttribute('visibility', 'hidden')
    }

}

function checker(x, y, r) {
    let isValidate = !isNaN(+x) && !isNaN(+y) && !isNaN(+r) && +y >= -3 && +y <= 5 && y.trim();
    if (isValidate) {
        showCorrect.className = "correct";
        showCorrect.textContent = "Данные корректны";

    } else {
        showCorrect.className = "not_correct";
        showCorrect.textContent = "Данные не корректны"
    }
    return isValidate;
}

function getActualX() {
    return $("input[name='x']:checked").val()
}

function getActualY() {
    return $("input[name='y']").val()
}

function getActualR() {
    return $("input[name='r']:checked").val()
}

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
        draw((reallyX*r / baseR).toFixed(2), (reallyY*r / baseR).toFixed(2), r);
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

$("#clear").on("click", function (e) {
    e.preventDefault();

    if ($("#check tr:nth-child(2) td:first").textContent === "Нет результатов") {
    } else {
        $("#check tr:not(:first)").remove();

        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.colSpan = 5; td.id = "no-results";
        let text = document.createTextNode("Нет результатов");
        td.appendChild(text);
        tr.appendChild(td);

        document.getElementById("check").appendChild(tr);
    }
    $.ajax({
        url: "controller?" + $.param({"clear": 1}),
        type: "GET"
    });
})

$("#Y-text").on("change", function () {
        draw(getActualX(), getActualY(), getActualR());
    }
)

$('input[type=radio][name=x]').on("change", function () {
        draw(getActualX(), getActualY(), getActualR());
    }
)

$("input[type='checkbox']").on("change", function () {
    $("input[name='" + this.name + "']").not(this).prop("checked", false);
    draw(getActualX(), getActualY(), getActualR());
});

const table = document.getElementById("check")


$("#submit").on("click", function () {
    //e.preventDefault();
    // let now = new Date();

    let data = {
        "x": getActualX(),
        "y": getActualY(),
        "r": getActualR()
    }

    if (!checker(data.x, data.y, data.r)) {
        console.log("хуета!");
    }
})