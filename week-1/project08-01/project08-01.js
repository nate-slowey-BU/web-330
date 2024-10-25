"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Nate Slowey
      Date:   10/24

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function Timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

Timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(function() {
      countdown(timer, minBox, secBox)
    }, 1000);
  }
}

function countdown(timer, minBox, secBox) {
  if (timer.seconds > 0) {
    timer.seconds --;
  } else if(timer.minutes > 0) {
    timer.minutes --;
    timer.seconds = 59;
  } else {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }
  minBox.value = timer.minutes;
  secBox.value = timer.seconds;
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");


let myTimer = new Timer(minBox.value, secBox.value);

minBox.onchange = function() {
  myTimer.minutes = minBox.value;
}

secBox.onchange = function() {
  myTimer.seconds = secBox.value;
}

runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
}