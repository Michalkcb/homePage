let timer;
  let seconds = 0;

  function startTimer() {
    timer = setInterval(updateTimer, 1000);
  }

  function pauseTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    updateTimer();
  }

  function updateTimer() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer').innerText = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    seconds++;
  }