const show = document.getElementById("show")
const btn1 = document.getElementById("btn1")

let seconds = 0;
let minutes = 0;
let hours = 0;
interval = null;
let startStopwatchStaus ="stopped"

function startStopwatch() {
    seconds++;
    if (seconds / 60 === 1) {
        minutes++;
        seconds = 0;
    }
    if (minutes / 60 === 1) {
        hours++
        minutes = 0

    }
   updateDisplay()
}
function updateDisplay(){
let displaySeconds = seconds < 10 ? "0" + seconds.toString(): seconds;
let displayMinutes =minutes <10 ? "0" + minutes.toString():minutes;
let displayHours =hours <10 ? "0" + hours.toString():hours;

show.innerHTML=displayHours+":"+displayMinutes+":"+displaySeconds;
}
function startStopwatchBtn(){
    if(startStopwatchStaus==="stopped"){
        startStopwatchStaus="start"
        interval = setInterval(startStopwatch, 1000);
    }


 }

btn1.addEventListener("click", startStopwatchBtn)


