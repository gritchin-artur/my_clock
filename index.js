
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

// =======================timer===============================

const seconds = document.querySelector('.seconds-timer');
const minutes = document.querySelector('.minutes-timer');
const hours = document.querySelector('.hours-timer');
const buttonStart = document.querySelector('.button-start');
const buttonStop = document.querySelector('.button-stop');
const buttonReset = document.querySelector('.button-reset')
    
 let totalSeconds = 0;
let totalMnutes = 0;
let totalHours = 0;
let timer;


buttonStart.addEventListener('click', onStartTimer);


function onStartTimer(event) {
    if (event) {
        timer = setInterval(onStartTimer, 1000);
        buttonStart.disabled = true;
    }
        totalSeconds++
        if (totalSeconds >= 60) {
            totalSeconds = 0;
            totalMnutes++;
            if (totalMnutes >= 60) {
                totalMnutes = 0;
                totalHours++;
                if (totalHours >= 24) {
                    totalHours = 0;
                }
            }
        };

        seconds.textContent = totalSeconds.toString().padStart(2, '0');
        minutes.textContent = totalMnutes.toString().padStart(2, '0');
        hours.textContent = totalHours.toString().padStart(2, '0');
};


buttonStop.addEventListener('click', (event) => {
    if (event) {
         buttonStart.disabled = false;
        clearInterval(timer);
    }
  
});


buttonReset.addEventListener('click', () => {
    seconds.textContent = '00';
    minutes.textContent = '00';
    hours.textContent = '00';

    totalSeconds = 0;
    totalMnutes = 0;
    totalHours = 0;
});

