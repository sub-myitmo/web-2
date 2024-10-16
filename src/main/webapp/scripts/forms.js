function getActualX() {
    return $("input[name='x']:checked").val()
}

function getActualY() {
    return $("input[name='y']").val()
}

function getActualR() {
    return $("input[name='r']:checked").val()
}


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