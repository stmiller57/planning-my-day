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
        save.attr("class", "col-sm-2 btn btn-dark saveBtn");
        save.html("<input type=button value=save>");
        nextRow.attr("class", "row hour");
    };
});

// This is where I ran into trouble. I understand what I still need to do but haven't been able to figure out the code to do it.

// Here is what is missing that I couldn’t code.

// 1. On-click functionality for the save buttons. I believe I should do something like what’s below:
// $('saveBtn').click(function () {
// });

// 2. A way to save the events to local storage. I know I’m supposed to use setItem and getItem, but I don’t understand the syntax yet. I also struggled with this in my Week 4 homework. I’m hoping a tutor will help me with it this week. 

// 3. A way to change the colors based on the time of day. I know I need to attach the classes from the CSS file (.past, .present, .future), but I’m unable to generate the code that will change the event column based on time of day. I understand we are supposed to use moment.JS but I was unable to go any further than this. 

