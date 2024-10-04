const center = 150;
let baseR = 60;

const showCorrect = document.getElementById("online-checker");

const svg = document.getElementById("paint");

window.onload = function () {
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
        <text fill="black" x="${center + baseR/2 - 10}" y="140">R/2</text>
        <text fill="black" x="${center + baseR - 5}" y="140">R</text>

        <text fill="black" x="${center - baseR - 8}" y="140">-R</text>
        <text fill="black" x="${center - baseR/2 - 13}" y="140">-R/2</text>

        <text fill="black" x="160" y="${center - baseR + 5}">R</text>
        <text fill="black" x="160" y="${center - baseR/2 + 5}">R/2</text>

        <text fill="black" x="160" y="${center + baseR/2 + 3}">-R/2</text>
        <text fill="black" x="160" y="${center + baseR + 3}">-R</text>

        <text fill="black" x="285" y="140">X</text>
        <text fill="black" x="160" y="15">Y</text>

        <polygon points="150,150 ${center + baseR},150 150,${center - baseR / 2}" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>

        <rect x="${center - baseR}" y="${center - baseR}" width="${baseR}" height="${baseR}" fill-opacity="0.4" stroke="navy" fill="blue"></rect>

        <path d="M 150 150 L 150 ${center + baseR} A${baseR},${baseR} 0 0,1 ${center - baseR},150 Z" fill-opacity="0.4" stroke="navy"
              fill="blue"></path>
        `;
}

function draw(x, y, r) {

    if (checker(x, y, r)) {
        x = +x;
        y = +y;
        r = +r;
        if (Math.abs(x / r) >= 2.5 || Math.abs(y / r) >= 2.5) baseR = Math.floor(150 / Math.max(Math.abs(x / r), Math.abs(y / r))) - 5;
        else baseR = 60;
        svg.innerHTML =  `
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
<!--        <text fill="black" x="${center + baseR/2 - 10}" y="140" font-size="0.5em">R/2</text>-->
        <text fill="black" x="${center + baseR - 5}" y="140">R</text>

        <text fill="black" x="${center - baseR - 8}" y="140">-R</text>
<!--        <text fill="black" x="${center - baseR/2 - 13}107" y="140" font-size="0.5em">-R/2</text>-->

        <text fill="black" x="160" y="${center - baseR + 5}">R</text>
<!--        <text fill="black" x="160" y="${center - baseR/2 + 5}" font-size="0.5em">R/2</text>-->

<!--        <text fill="black" x="160" y="${center + baseR/2 + 3}" font-size="0.5em">-R/2</text>-->
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


$("#clear").on("click", function (e) {
    e.preventDefault();
    $("#check tr:not(:first)").remove();
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

    // const form = new FormData();
    // form.append("x", getActualX());
    // form.append("y", getActualY());
    // form.append("R", getActualR());

    if (!checker(data.x, data.y, data.r)) {
        console.log("хуета!");
    }
    // async function sendToServer() {
    //     const url = "controller?" + new URLSearchParams(form).toString();
    //     const response = await fetch(url, {method: "get"});
    //
    //     if (!response.ok) {
    //         alert("Не удалось отправить точку.");
    //     }
    //     return response;
    // }
    // sendToServer().then(r => console.log(r));
    //
    // $.ajax({
    //     url: "controller?" + $.param(data),
    //     type: "GET"
    // });

    //window.location.href = "/server/controller?x=" + data.x + "&y=" + data.y + "&r=" + data.r;
})


if ($(document).height() <= $(window).height()) {
    $(".footer").addClass("fixed-bottom");
}




