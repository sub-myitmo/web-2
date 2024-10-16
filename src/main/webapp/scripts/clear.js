
$("#clear").on("click", function (e) {
    e.preventDefault();
    PointsList = null

    if ($("#check tr:nth-child(2) td:first").textContent === "Нет результатов") {
    } else {
        $("#check tr:not(:first)").remove();


        document.getElementById("check").innerHTML +=
            `<tr>
            <td colSpan="5" id="no-results">Нет результатов</td>
        </tr>`


        paint_coordinates();

        if ($(document).height() <= $(window).height()) {
            $(".footer").addClass("fixed-bottom");
        }
    }
    $.ajax({
        url: "controller?" + $.param({"clear": 1}),
        type: "GET"
    });
})
