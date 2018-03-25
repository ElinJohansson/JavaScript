
function newAppState() {
    return {
        answer: Math.floor(Math.random() * 10) + 1,
        remainingTries: 3,
        showRules: false,
        gameOver: false
    };
}

function render(currentAppState) {
    if (currentAppState.showRules) {
        $("#rules").removeClass("hidden");
    } else {
        $("#rules").addClass("hidden");
    }
    if (currentAppState.gameOver) {
        $(".number").each(function(){
            if(Number(this.innerHTML) === currentAppState.answer){
                $(this).addClass("correctAnswer");
            }
        });
        $("#playground").addClass("avoid-clicks");
    } else {
        $("#playground").removeClass("hidden avoid-clicks");
        $(".number").removeClass("correctAnswer");
    }
}

let appState = {
};

function startGame() {
    appState = newAppState();
    $(".number").removeClass("invisible");
    render(appState);
}

$("#playground").on("click", ".number", function (e) {
    if (appState.answer === Number(e.target.innerHTML)) {
        window.location = "win.html";
    } else if (appState.remainingTries === 1) {
        e.target.classList.add("invisible");
        appState.gameOver = true;
    } else {
        e.target.classList.add("invisible");
        appState.remainingTries--;
    }
    render(appState);
});

$("#rulesBtn").on("click", function (e) {
    appState.showRules = !appState.showRules;
    render(appState);
});

$("#startBtn").on("click", function (e) {
    startGame();
});


