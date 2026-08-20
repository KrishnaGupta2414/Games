const name = document.querySelector("#name");

const startBtn = document.querySelector("#startBtn");

const start = document.querySelector(".start");

const guessGame = document.querySelector(".guess-game");

const welcome = document.querySelector("#welcome");

const guess = document.querySelector("#guess");

const guessBtn = document.querySelector("#guessBtn");

const message = document.querySelector("#message");

const attempts = document.querySelector("#attempts");


let randomNumber;

let attempt = 0;

const maxAttempts = 7;


// Start Game

startBtn.addEventListener("click", function () {

    if (name.value.trim() === "") {

        alert("Please enter your name.");

        return;
    }


    randomNumber =
        Math.floor(Math.random() * 100) + 1;


    attempt = 0;


    welcome.textContent =
        "Good luck, " + name.value + ".";


    attempts.textContent =
        "Attempts: 0 / " + maxAttempts;


    start.classList.add("hidden");

    guessGame.classList.remove("hidden");

    guess.focus();

});


// Check Guess

guessBtn.addEventListener("click", function () {

    const userGuess =
        Number(guess.value);


    if (
        guess.value === "" ||
        userGuess < 1 ||
        userGuess > 100
    ) {

        message.textContent =
            "Please enter a number between 1 and 100.";

        return;
    }


    attempt++;


    attempts.textContent =
        "Attempts: " +
        attempt +
        " / " +
        maxAttempts;


    if (userGuess === randomNumber) {

        message.textContent =
            "Congratulations " +
            name.value +
            "! You guessed it.";

        guessBtn.disabled = true;

        return;
    }


    if (userGuess < randomNumber) {

        message.textContent =
            "Too low. Try a higher number.";

    }

    else {

        message.textContent =
            "Too high. Try a lower number.";

    }


    if (attempt === maxAttempts) {

        message.textContent =
            "Game over. The number was " +
            randomNumber +
            ".";

        guessBtn.disabled = true;

    }


    guess.value = "";

    guess.focus();

});