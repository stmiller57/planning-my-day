var currentTime = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(currentTime, 1000);