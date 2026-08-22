const name = document.querySelector("#name");
const startBtn = document.querySelector("#startBtn");

const start = document.querySelector(".start");
const guessGame = document.querySelector(".guess-game");

const welcome = document.querySelector("#welcome");
const guess = document.querySelector("#guess");
const guessBtn = document.querySelector("#guessBtn");

const message = document.querySelector("#message");
const attempts = document.querySelector("#attempts");

const restartBtn = document.querySelector("#restartBtn");

let randomNumber;
let attemptCount = 0;

const maxAttempts = 7;


// START GAME

startBtn.addEventListener("click", function () {

    if (name.value.trim() === "") {
        alert("Please enter your name");
        return;
    }

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attemptCount = 0;

    welcome.textContent =
        "Welcome, " + name.value + "!";

    attempts.textContent =
        "Attempts: 0 / " + maxAttempts;

    message.textContent = "";

    guess.value = "";

    guessBtn.disabled = false;

    restartBtn.classList.add("hidden");

    start.classList.add("hidden");
    guessGame.classList.remove("hidden");

    guess.focus();
});


// GUESS

guessBtn.addEventListener("click", function () {

    const userGuess = Number(guess.value);


    // Check input

    if (
        guess.value === "" ||
        userGuess < 1 ||
        userGuess > 100
    ) {
        message.textContent =
            "Please enter a number between 1 and 100.";
        return;
    }


    // Increase attempt

    attemptCount++;

    attempts.textContent =
        "Attempts: " +
        attemptCount +
        " / " +
        maxAttempts;


    // Correct answer

    if (userGuess === randomNumber) {

        message.textContent =
            "🎉 Congratulations " +
            name.value +
            "! You guessed it!";

        guessBtn.disabled = true;

        restartBtn.classList.remove("hidden");

        return;
    }


    // Hint

    if (userGuess < randomNumber) {

        message.textContent =
            "Too low! Try a higher number.";

    } else {

        message.textContent =
            "Too high! Try a lower number.";
    }


    // Maximum attempts reached

    if (attemptCount === maxAttempts) {

        message.textContent =
            "Game over! The number was " +
            randomNumber +
            ".";

        guessBtn.disabled = true;

        restartBtn.classList.remove("hidden");

        return;
    }


    // Clear input

    guess.value = "";

    guess.focus();
});


// RESTART GAME

restartBtn.addEventListener("click", function () {

    // Go back to name screen

    guessGame.classList.add("hidden");
    start.classList.remove("hidden");


    // Clear old name

    name.value = "";


    // Reset game

    guess.value = "";

    message.textContent = "";

    attempts.textContent = "";

    attemptCount = 0;

    randomNumber = null;


    // Reset buttons

    guessBtn.disabled = false;

    restartBtn.classList.add("hidden");


    // Focus on name input

    name.focus();
});