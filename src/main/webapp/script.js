const svgCenterX = 150;
const svgCenterY = 150;
const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

const showCorrect = document.getElementById("online-checker");

function draw(x, y, r) {
    if (checker(x, y, r)) {

        const coordinateX = svgCenterX + x / r * 60;
        const coordinateY = svgCenterY - y / r * 60;

        let pointElement = document.getElementById('point');

        pointElement.setAttribute('cx', "" + coordinateX)
        pointElement.setAttribute('cy', "" + coordinateY)
        pointElement.setAttribute('visibility', 'visible')
    }
}

function checker(x, y, r) {
    let isValidate = !isNaN(+x) && !isNaN(+y) && !isNaN(+r) && +y >= -3 && +y <= 5;
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
    return $("input[name='x-parameter']:checked").val()
}

function getActualY() {
    return $("input[name='y-parameter']").val()
}

function getActualR() {
    return $("input[name='r-parameter']:checked").val()
}


$("#clear").on("click", function (e) {
    e.preventDefault();
    $("#check tr:not(:first)").remove();
})

$("#Y-text").on("change", function () {
        draw(getActualX(), getActualY(), getActualR());
    }
)

$('input[type=radio][name=x-parameter]').on("change", function () {
        draw(getActualX(), getActualY(), getActualR());
    }
)

$('input[type=radio][name=r-parameter]').on("change", function () {
        draw(getActualX(), getActualY(), getActualR());
    }
)


const table = document.getElementById("check")


$("#submit").on("click", function (e) {
    e.preventDefault();
    let now = new Date();

    let data = {
        "x": getActualX(),
        "y": getActualY(),
        "r": getActualR()
    }
    if (!checker(data.x, data.y, data.r)) {
        return;
    }


    $.ajax({
        url: "controller?" + $.param(data),
        type: "GET",
        dataType: "json",
        success: function (response) {

            if (response.error != null) {
                alert("Ответ от сервера не получен");
                console.log(response);
            } else {
                let newRow = table.insertRow(1);
                const rowX = newRow.insertCell(0);
                const rowY = newRow.insertCell(1);
                const rowR = newRow.insertCell(2);
                const rowResult = newRow.insertCell(3);
                const rowNow = newRow.insertCell(4);
                const rowTime = newRow.insertCell(5);

                rowX.textContent = data.x;
                rowY.textContent = data.y;
                rowR.textContent = data.r;
                if (response.result) {
                    rowResult.textContent = "Да"
                    newRow.className = "hit"
                } else {
                    rowResult.textContent = "Нет"
                    newRow.className = "miss"
                }
                if (now.getSeconds() < 10) rowNow.textContent = now.getHours().toString() + ":" + now.getMinutes().toString() + ":0" + now.getSeconds().toString() + " " + now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear()
                else rowNow.textContent = now.getHours().toString() + ":" + now.getMinutes().toString() + ":" + now.getSeconds().toString() + " " + now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear()
                rowTime.textContent = response.time
                sessionStorageSize++
                window.sessionStorage.setItem(sessionStorageSize.toString(), `${rowX.textContent}, ${rowY.textContent}, ${rowR.textContent}, ${rowResult.textContent}, ${rowNow.textContent}, ${rowTime.textContent}`);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Ошибка:", textStatus, errorThrown);
        }
    });
})






