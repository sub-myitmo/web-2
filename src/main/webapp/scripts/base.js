const center = 150;
let baseR = 60;
let superFlag = false;
const colorHit = "#258a17"
const colorMiss = "#f32a15"
// флаг, чтобы скипать checker при тыкании в svg

let PointsList;


const showCorrect = document.getElementById("online-checker");

let svg = document.getElementById("paint");

window.onload = function () {
    if (svg) {
        fetch(`controller?data=1`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                PointsList = data;
                let prev_points = ""
                if (data == null) {
                    PointsList = null
                    return prev_points;
                }
                data.points.forEach(point => {
                    prev_points += `<circle class="point" cx="${center + point.x / point.r * baseR}" cy="${center - point.y / point.r * baseR}" r="4" fill=${point.isHit === true ? colorHit : colorMiss} stroke="grey" visibility="visible"/>`
                });
                return prev_points;
            })
            .then(prev_points => {
                paint_coordinates();
                svg.innerHTML += prev_points;
            })
    }
    if (window.location.href.includes("/server/controller?x=")) window.location.href = "./result.jsp";
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


        paint_coordinates();
        svg.innerHTML += `<circle class="point" cx="${center + x / r * baseR}" cy="${center - y / r * baseR}" r="5" fill="orange" stroke="grey" visibility="visible"/>`

        if (PointsList !== null) {
            PointsList.points.forEach(point => {
                svg.innerHTML += `<circle class="point" cx="${center + point.x / point.r * baseR}" cy="${center - point.y / point.r * baseR}" r="4" fill=${point.isHit === true ? colorHit : colorMiss} stroke="grey" visibility="visible"/>`
            });
        }

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

const table = document.getElementById("check")
