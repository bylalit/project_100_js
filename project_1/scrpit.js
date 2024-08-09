const months = document.getElementById("months");
const days = document.getElementById("days");
const dates = document.getElementById("date");
const year = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
months.innerHTML = date.toLocaleString("en", {
    month : "long"
});

days.innerHTML = date.toLocaleString("en", {
    weekday:"long"
});

dates.innerHTML = date.getDate();

year.innerHTML = date.getFullYear();