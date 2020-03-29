$(document).ready(function () {

    var currentTime = function () {
        document.getElementById("currentDay")
            .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(currentTime, 1000);
});

var workHour = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (i = 0; i < workHour.length; i++) {
    var newRow = $("<row>");
    $("#intro").append(newRow);
    var time = $("<div>");
    var event = $("<div>");
    var save = $("<div>");
    newRow.append(time, event, save);
    time.attr("class", "col-sm-2 hour");
    time.html("<h4>" + workHour[i] + "</h4>");
    time.innerhtml;
    event.attr("class", "col-sm-8 eventHead");
    event.html("<textarea></textarea>");
    save.attr("class", "col-sm-2 saveBtn");
    save.html("<input type=button value=save>");
    newRow.attr("class", "row hour");
};
