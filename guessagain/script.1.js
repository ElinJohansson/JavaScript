

let numberOfAttempts = 3;
let currentAttempt;
let answer;

//UI variables
let feedbackNode = document.getElementById("feedback");



function startGame() {
    hideResetButton();
    showSubmittButton();
    feedbackNode.innerHTML = "Guess on a number between 1-10:";
    document.getElementById("textBox").value = '';
    document.getElementById("textBox").placeholder = 'Enter your guess';
    document.getElementById("textBox").focus();

    answer = Math.floor(Math.random() * 10) + 1;

    currentAttempt = 1;

    let submit = document.getElementById("submitButton");
    submit.addEventListener("click", clickGuess);

    let enterSubmit = document.getElementById("textBox");
    enterSubmit.addEventListener("keyup", enterGuess);
}

function clickGuess(e) {
    let guess = document.getElementById("textBox").value;
    checkGuess(guess);

}

function enterGuess(e) {
    if (e.keyCode === 13) {
        let guess = document.getElementById("textBox").value;
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (document.getElementById("textBox").value) {
        let validation = validateInput(guess);
        if (validation) {
            feedbackNode.innerHTML = validation;
            document.getElementById("textBox").focus();
            document.getElementById("textBox").placeholder = 'Guess again';
            document.getElementById("textBox").value = '';
        } else if (Number(guess) === answer) {
            feedbackNode.innerHTML = "GG! You guess the correct number!";
            showResetButton();
            hideSubmitButton();
        } else if (guess !== answer && currentAttempt === 3) {
            feedbackNode.innerHTML = "You're out of tries, better luck next time!";
            document.getElementById("textBox").placeholder = ':(';
            document.getElementById("textBox").value = '';
            showResetButton();
            hideSubmitButton();
        } else if (guess !== answer && currentAttempt < 3) {
            document.getElementById("textBox").focus();
            document.getElementById("textBox").placeholder = 'Guess again';
            document.getElementById("textBox").value = '';
            feedbackNode.innerHTML = `You have ${numberOfAttempts - currentAttempt} tries left`;
            currentAttempt++;
        }
    }
}

function validateInput(guess){
    if (isNaN(guess) || (guess < 1 || guess > 10)) {
        return "Enter a number between 1 and 10:";
      } else if (Number(guess) !== Math.floor(guess)) { // checking if has decimals
        return "Enter an integer between 1 and 10:";
      }
}

function resetGame(e) {
    startGame();
}

function hideResetButton() {
    let resetArea = document.getElementById("resetButton");
    resetArea.classList.add("hidden");
}

function showResetButton() {
    let resetArea = document.getElementById("resetButton");
    resetArea.classList.remove("hidden");
    let reset = document.getElementById("resetButton");
    reset.addEventListener("click", resetGame);
}

function hideSubmitButton() {
    let submitButton = document.getElementById("submitButton");
    submitButton.classList.add("hidden");
}

function showSubmittButton() {
    let resetArea = document.getElementById("submitButton");
    submitButton.classList.remove("hidden");
}

startGame();