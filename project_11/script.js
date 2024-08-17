const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minutEl = document.getElementById("minut");
const secondEl = document.getElementById("second");

const newYearDate = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountdown();

function updateCountdown(){
    const now = new Date().getTime();
    console.log(now);
}