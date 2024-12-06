function updateCountdown() {
    var now = new Date();
    var newyear = new Date("January 1,2025,00:00:00")
    var res = newyear - now;
    var seconds = (60 - now.getSeconds())
    var minutes = (59 - now.getMinutes());
    var hours = (23 - now.getHours());
    var days = res / (1000 * 60 * 60 * 24);
    document.getElementById("days").innerHTML = Math.round(days - 1);
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
updateCountdown();
setInterval(updateCountdown, 1000); // Обновляем каждый 1000 мс