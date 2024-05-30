document.addEventListener("DOMContentLoaded", () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 3;

  let guessInput = document.getElementById("guessInput");
  let guessButton = document.getElementById("guessButton");
  let message = document.getElementById("message");
  let attemptsDisplay = document.getElementById("attempts");

  attemptsDisplay.textContent = `Attempts left: ${attempts}`;

  guessInput.addEventListener("input", (event) => {
    let value = event.target.value;
    if (!/^\d*$/.test(value)) {
      alert("You can only enter whole numbers.");
      guessInput.value = value.replace(/[^0-9]/g, "");
    }
  });

  guessButton.addEventListener("click", () => {
    let userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      message.textContent = "Please enter a valid number between 1 and 100.";

      return;
    }
    attempts--;

    if (userGuess === randomNumber) {
      message.textContent = `Congratulations! You guessed the right number: ${randomNumber}`;
      guessButton.disabled = true;
    } else if (attempts === 0) {
      message.textContent = `Sorry, you've used all your attempts. The correct number was: ${randomNumber}`;
      guessButton.disabled = true;
    } else if (userGuess < randomNumber) {
      message.textContent = "Too low!";
    } else if (userGuess > randomNumber) {
      message.textContent = "Too high!";
    }

    attemptsDisplay.textContent = `Attempts left: ${attempts}`;
  });
});
