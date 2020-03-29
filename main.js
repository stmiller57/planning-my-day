$(document).ready(function () {

    // function to inject the current time into the jumbotron
    var currentTime = function () {
        document.getElementById("currentDay")
            .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(currentTime, 1000);
    // function that generates the rows and columns under the static HTML for time, event and save
    var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

    for (i = 0; i < workHours.length; i++) {
        var nextRow = $("<row>");
        $("#intro").append(nextRow);
        var time = $("<div>");
        var event = $("<div>");
        var save = $("<div>");
        nextRow.append(time, event, save);
        time.attr("class", "col-sm-2 hour");
        time.html("<h4>" + workHours[i] + "</h4>");
        time.innerhtml;
        event.attr("class", "col-sm-8 eventHead");
        event.html("<textarea></textarea>");
        save.attr("class", "col-sm-2 btn btn-secondary btn-lg saveBtn");
        save.html("<input type=button value=save>");
        nextRow.attr("class", "row hour");
    };
});
