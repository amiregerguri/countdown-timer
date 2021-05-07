const newYears = '1 Jan 2022';

const day_el = document.getElementById('days');
const hour_el = document.getElementById('hours');
const minute_el = document.getElementById('mins');
const second_el = document.getElementById('seconds');

function countDown() {
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);

    const seconds = (newYearsDate - currentDate) / 1000;

    const total_days =  Math.floor((seconds / 3600) / 24);
    const total_hours = Math.floor((seconds / 3600) % 24);
    const total_minutes = Math.floor((seconds / 60) % 60);
    const total_seconds =  Math.floor(seconds % 60);

    day_el.innerHTML = total_days;
    hour_el.innerHTML = formatDate(total_hours);
    minute_el.innerHTML = formatDate(total_minutes);
    second_el.innerHTML = formatDate(total_seconds);
}

function formatDate(time) {
 return time < 10 ? (`0${time}`) : time;
}
countDown();

setInterval(countDown, 1000);