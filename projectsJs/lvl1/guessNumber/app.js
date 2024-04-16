const targetNumber = Math.floor(Math.random() * 100);
console.log(targetNumber);

const themeToggle = document.getElementById("themeToggle");

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

let attempts = 0;

guessButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess) || userGuess < 0 || userGuess>99) {
    message.textContent = "Enter a number from 0 to 99.";
  } else {
    attempts++;
    if (userGuess == targetNumber) {
      message.textContent = `Way to go! You guessed the number ${targetNumber} w ${attempts} próbach.`;
    } else if (userGuess < targetNumber) {
      message.textContent = "The number you are looking for is larger.";
    } else {
      message.textContent = "The number you are looking for is smaller.";
    }
  }
  guessInput.value = "";
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});
