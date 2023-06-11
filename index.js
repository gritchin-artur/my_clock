
const arrDay = [
    "Воскресение",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    
];

const namesOfMonth = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентярь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",

];

setInterval(() => {
const currentTime = new Date();

const currentDay = arrDay[currentTime.getDay()];
const currentDate = currentTime.getDate();
const currentMonth = namesOfMonth[currentTime.getMonth()];
const currentYear = currentTime.getFullYear();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();

// console.log(currentDay);
// console.log(currentMonth);
// console.log(currentYear);
//     console.log(currentDate);
//     console.log(currentHour);
//     console.log(currentMinutes);
    console.log(currentSecond);

const day = document.querySelector('.name-week');
const date = document.querySelector('.number-month');
const month = document.querySelector('.month');
    const year = document.querySelector('.year');

   document.querySelector('.digital-clock').textContent =
        `${currentHour.toString().padStart(2, '0')} : ${currentMinutes.toString().padStart(2, '0')} : ${currentSecond.toString().padStart(2, '0')}`;
    
    day.textContent = currentDay;
    date.textContent = currentDate;
    month.textContent = currentMonth;
    year.textContent = currentYear;
    
    const changeSecond = (360 / 60) * currentSecond;
    const changeMinutes = (360 / 60) * currentMinutes;
    const changeHours =  (360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes;

    const handSecond = document.querySelector('.hand-second');
    const handMinute = document.querySelector('.hand-minute');
        const handHours = document.querySelector('.hand-hour');

    handSecond.style.transform = `rotate(${changeSecond}deg)`;
    handMinute.style.transform = `rotate(${changeMinutes}deg)`;
     handHours.style.transform = `rotate(${changeHours}deg)`;

}, 1000);
