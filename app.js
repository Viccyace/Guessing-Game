document.addEventListener("DOMContentLoaded", () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 5;

  const guessInput = document.getElementById("guessInput");
  const guessButton = document.getElementById("guessButton");
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  attemptsDisplay.textContent = `Attempts left: ${attempts}`;

  guessButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);

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
