const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const campaneroDate = '17 August 2024';

function countTimer(){
    const newDate = new Date(campaneroDate);
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000;

    const daysCalc = Math.round(Math.floor(totalSeconds / 3600 / 24) / 31);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minutesCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);


    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    minutes.innerHTML = minutesCalc;
    seconds.innerHTML = secondsCalc;
    


}

countTimer();

setInterval(countTimer,1000);

