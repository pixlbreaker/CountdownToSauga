// Main Countdown date
const end_date = new Date("07/01/2025");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Updates every second
setInterval(function () {

    // Updates the current time
    let current_date = new Date().getTime();

    // Calculates the difference
    let diff = end_date - current_date;
    let diff_days = Math.floor(diff / (day));
    let diff_hours = Math.floor((diff % day) / hour);
    let diff_minutes = Math.floor((diff % hour) / minute);
    let diff_seconds = Math.floor((diff % minute) / second);


    // Updates the information on the site
    document.getElementById("days").innerText = diff_days;
    document.getElementById("hours").innerText = diff_hours;
    document.getElementById("minutes").innerText = diff_minutes;
    document.getElementById("seconds").innerText = diff_seconds;
    console.log(diff);

    // When the count is done
    if (diff < 0) {
        document.getElementById("headline").innerText = "It's Moving Time!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";

        // Adds Confetti
        confetti();
        clearInterval();
    }

}, 1000);