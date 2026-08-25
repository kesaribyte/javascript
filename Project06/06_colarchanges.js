const Start = document.querySelector("#start");
const Stop = document.querySelector("#stop");

let intervaleId;

Start.addEventListener("click", function () {

    intervaleId = setInterval(function () {

    }, 1000);

    console.log(Start);
});