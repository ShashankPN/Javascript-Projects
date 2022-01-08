let progress = document.getElementById('progress').style;

let hour = document.getElementById('hour').querySelector('span');
let minute = document.getElementById('minute').querySelector('span');
let second = document.getElementById('second').querySelector('span');

let icons = document.getElementById('icons');
let setHour = 0,
    setMinute = 0,
    currentHour = 0,
    currentMinute = 0,
    currentSecond = 0;

let timer = undefined;


function setTime() {
    let newtime = document.getElementById('new-time').value.split(':');
    if (newtime == '') {
        console.log('SetTime');
        return;
    }
    currentHour = parseInt(newtime[0]);
    currentMinute = parseInt(newtime[1]);
    if (currentHour == 0 && currentMinute == 0)
        return;
    totalSeconds = (currentHour * 3600) + (currentMinute * 60); //== 100%
    countSeconds = 0; // =0%
    clearInterval(timer);
    currentSecond = 0;
    startTimer();
}

function startTimer() {
    timer = setTimeout(() => {
        currentSecond--;
        countSeconds++;
        progressPercent = (countSeconds / totalSeconds) * 100;
        if (currentSecond == -1) {
            if (currentHour == 0 && currentMinute == 0) {
                alert('Timer complete');
                clearTimeout(timer);
            } else {
                currentSecond = 59;
                currentMinute--;
                if (currentMinute == -1) {
                    if (currentHour == 0)
                        currentMinute = 0;
                    else {
                        currentMinute = 59;
                        currentHour--;
                    }
                }
            }
        }
        hour.innerText = currentHour;
        minute.innerText = currentMinute;
        second.innerText = currentSecond;
        progress.width = `${progressPercent}%`
        startTimer();
    }, 1000)
}

function createSnowflake() {
    let newElement = document.createElement('i');
    newElement.classList.add("fa");
    newElement.classList.add('fa-snowflake-o');
    newElement.style.left = (Math.random() * (window.innerWidth - 40)) + 'px';
    newElement.style.animation = 'fall 5s linear forwards';
    newElement.style.animationDuration = ((Math.random() * 14) + 4) + 's';
    newElement.style.opacity = (Math.random() * 100) / 100;
    icons.appendChild(newElement);

    setTimeout(() => {
        newElement.remove();
    }, 14000);
}
setInterval(createSnowflake, 300);