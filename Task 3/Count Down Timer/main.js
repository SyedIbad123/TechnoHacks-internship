let interval; 

window.onload = () => {
    document.querySelector("#Calculate").onclick = calculate;
    document.querySelector("#reset").onclick = reset;
}

function calculate() {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    const stop = document.querySelector("#Stop");
    const start = document.querySelector("#start");

    const endTime = new Date(date + " " + time);

    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(() => calculateTime(endTime), 1000);

    stop.addEventListener("click", () => {
        clearInterval(interval);
    });

    start.addEventListener("click", () => {
        if (interval) {
            clearInterval(interval);
        }

        interval = setInterval(() => calculateTime(endTime), 1000);
    });
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const days = document.querySelector("#countdown-days");
    const hours = document.querySelector("#countdown-hours");
    const minutes = document.querySelector("#countdown-minutes");
    const seconds = document.querySelector("#countdown-seconds");

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
    }
}

function reset() {
    document.querySelector("#countdown-days").innerText = 0;
    document.querySelector("#countdown-hours").innerText = 0;
    document.querySelector("#countdown-minutes").innerText = 0;
    document.querySelector("#countdown-seconds").innerText = 0;

    if (interval) {
        clearInterval(interval); 
        interval = null;
    }
}
