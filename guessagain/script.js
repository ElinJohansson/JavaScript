//UI variables are kept in an UI object
let ui = {
    feedback: document.getElementById("feedback"),
    input: document.getElementById("textBox"),
    submitBtn: document.getElementById("submitButton"),
    resetBtn: document.getElementById("resetButton")
};

//Object that represents one session
let appState = {
};

function enterGuess(currentState, newGuess, ui) {
    // code which looks at current state and new guess, and calculates
    // a -new- state and returns it 

    let appState = {
        answer: currentState.answer,
        remaining: currentState.remaining,
        playing: currentState.playing,
        feedback: currentState.feedback,
        placeholder: currentState.placeholder
    }

    if (ui.input.value) {
        let validation = validateInput(newGuess);
        if (validation) {
            appState.feedback = validation;
            appState.placeholder = 'Guess again';
        } else
            if (Number(newGuess) === currentState.answer) {
                appState.feedback = "GG! You guess the correct number!";
                appState.playing = false;
            } else if (Number(newGuess) !== currentState.answer && appState.remaining === 1) {
                appState.feedback = "You're out of tries, better luck next time!";
                appState.playing = false;
                appState.placeholder = ':(';
            } else if (Number(newGuess) !== currentState.answer && currentState.remaining > 0) {
                appState.remaining = appState.remaining - 1;
                appState.feedback = `You have ${appState.remaining} tries left`;
                appState.placeholder = 'Guess again';
            }
    }
    return appState;
}

function newState() {
    // code which returns a fresh app state object
    let appState = {
        answer: Math.floor(Math.random() * 10) + 1,
        remaining: 3,
        feedback: "Guess on a number between 1-10:",
        playing: true,
        placeholder: 'Enter your guess'  // if true show enterGuess panel, otherwise resetPanel
    };
    return appState;
}

function validateInput(guess) {
    if (isNaN(guess) || (guess < 1 || guess > 10)) {
        return "Enter a number between 1 and 10:";
    } else if (Number(guess) !== Math.floor(guess)) { // checking if has decimals
        return "Enter an integer between 1 and 10:";
    }
}

function render(currentState, ui) {
    // code which updates the ui elements according to the current state
    if (currentState.playing) {
        ui.submitBtn.classList.remove("hidden");
        ui.resetBtn.classList.add("hidden");
        ui.feedback.innerHTML = currentState.feedback;
        ui.input.placeholder = currentState.placeholder;
        ui.input.focus();
        ui.input.value = '';
    } else {
        ui.submitBtn.classList.add("hidden");
        ui.resetBtn.classList.remove("hidden");
        ui.feedback.innerHTML = currentState.feedback;
        ui.input.placeholder = currentState.placeholder;
        ui.input.focus();
        ui.input.value = '';
    }
}

let newGuess = function (e) {
    let guess = document.getElementById("textBox").value;
    appState = enterGuess(appState, guess, ui);
    render(appState, ui);
}

function startGame() {
    appState = newState();
    render(appState, ui);
}

//Set event handlers
ui.input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        newGuess();
    }
});
ui.submitBtn.addEventListener("click", newGuess);
ui.resetBtn.addEventListener("click", startGame);

//Initialise the game
startGame();