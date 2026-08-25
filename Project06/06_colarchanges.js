const Start = document.querySelector("#start");
const Stop = document.querySelector("#stop");

let intervaleId;

function changeColor() {
    const color = "rgb(" +
        Math.floor(Math.random() * 256) + "," +
        Math.floor(Math.random() * 256) + "," +
        Math.floor(Math.random() * 256) + ")";

    document.body.style.backgroundColor = color;
}

Start.addEventListener("click", function () {
    intervaleId = setInterval(changeColor, 1000);
});

Stop.addEventListener("click", function () {
    clearInterval(intervaleId);
});