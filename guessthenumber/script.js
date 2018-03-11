let answer;
let counter;
let ruleCounter = 1;

function startGame() {
    document.getElementById("playground").classList.remove("hidden");
    document.getElementById("playground").classList.remove("avoid-clicks");

    //Randomisera fram ett tal
    answer = Math.floor(Math.random() * 10) + 1;
    counter = 1;
    //Skapar en array av listelementen
    let numberArray = document.getElementsByClassName("number");
    //Löper igenom list-elementen och lägger till en eventlistener på varje li-element
    for (let i = 0; i < numberArray.length; i++) {
        numberArray[i].addEventListener("click", pressedNumber);
        numberArray[i].classList.remove("invisible");
        numberArray[i].classList.remove("correctAnswer");
    }
}

//e is for event, kollar om siffran man trycker på är samma som answer
function pressedNumber(e) {

    if (answer === Number(e.target.innerHTML)) {
        window.location = "win.html";
    } else if (counter === 3) {
        e.target.classList.add("invisible");
        displayAnswer(answer);
        document.getElementById("playground").classList.add("avoid-clicks");
    } else {
        e.target.classList.add("invisible");
        counter++;
    }
}


function displayRules() {
    if (ruleCounter % 2 === 1) {
        document.getElementById("rules").classList.remove("hidden");
    } else {
        document.getElementById("rules").classList.add("hidden");
    }
    ruleCounter++;
}

function displayAnswer(answer) {
    let numberArray = document.getElementsByClassName("number");
    for (let i = 0; i < numberArray.length; i++) {
        if (Number(numberArray[i].innerHTML) === answer) {
            numberArray[i].classList.add("correctAnswer");
        }
    }
}



