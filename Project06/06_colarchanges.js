const Start = document.querySelector("#start");
const Stop = document.querySelector("#stop");

let intervalId = null;

function changeColor() {
    const color = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
    )`;

    document.body.style.backgroundColor = color;
}

Start.addEventListener("click", function () {
    if (intervalId === null) {
        intervalId = setInterval(changeColor, 1000);
    }
});

Stop.addEventListener("click", function () {
    clearInterval(intervalId);
    intervalId = null;
});