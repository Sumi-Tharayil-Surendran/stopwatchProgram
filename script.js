const show = document.getElementById("show")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

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
 function stopStopWatch(){
    clearInterval(interval);
    updateDisplay()
    startStopwatchStaus ="stopped"
 }
 function pauseStopWatch(){
    clearInterval(interval);
    seconds=0;
    minutes=0;
    hours = 0;
    updateDisplay()
    startStopwatchStaus="stopped"

 }


btn1.addEventListener("click", startStopwatchBtn)
btn2.addEventListener("click", stopStopWatch)
btn3.addEventListener("click", pauseStopWatch)


