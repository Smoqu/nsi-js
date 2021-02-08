const chronoDiv = document.getElementById("chrono");
const countP = document.getElementById("count");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const stopBtn = document.getElementById("stop");

let count = 0;
let interval;

function countInterval() {
  interval = setInterval(() => {
    count++;
    countP.innerHTML = count;
  }, 1000);
}

startBtn.onclick = countInterval;

stopBtn.onclick = () => {
  clearInterval(interval);
};

resetBtn.onclick = () => {
  clearInterval(interval);
  count = 0;
  countP.innerHTML = count;
};
