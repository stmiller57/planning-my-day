$(document).ready(function () {
    var today = $("#currentDay");
    currentDay();
    function currentDay() {
        $(today).text(moment().format("MMMM Do, YYYY"));
    }
});