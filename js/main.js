let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0;
const display = document.querySelector('.display');


function startPause() {
    if (!isRunning) {
        timer = setInterval(runTimer, 1000);
        isRunning = true;
    } 
    // else {
    //     clearInterval(timer);
    //     isRunning = false;
    // }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.innerHTML = "00:00:00";
}

function runTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    display.innerHTML = `${(hours < 10 ? '0' : '') + hours}:${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
}

document.getElementById('startPause').addEventListener('click', startPause);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
