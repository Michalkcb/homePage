let timer;
let seconds = 0;
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);


function startTimer() {
    if (!timer){
  timer = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateTimer();
}

function updateTimer() {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  document.getElementById("timer").innerText = `${minutes}:$${remainingSeconds}`;
//   document.getElementById("timer").innerText = `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  seconds++;
}
