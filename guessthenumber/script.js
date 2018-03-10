let answer;
let counter;
let ruleCounter = 1;

function startGame() {
    document.getElementById("playground").classList.remove("hidden");
    document.getElementById("badResult").classList.add("hidden");
    
    //Randomisera fram ett tal
    answer = Math.floor(Math.random() * 10) + 1;
    counter = 1;
    //Skapar en array av listelementen
    let numberArray = document.getElementsByClassName("number");
    //Löper igenom list-elementen och lägger till en eventlistener på varje li-element
    for (let i = 0; i < numberArray.length; i++) {
        numberArray[i].addEventListener("click", pressedNumber);
        numberArray[i].classList.remove("invisible");
    }
}

//e is for event, kollar om siffran man trycker på är samma som answer
function pressedNumber(e) {
    console.log("You pressed", arguments);
    if (answer === Number(e.target.innerHTML)) {
        window.location = "win.html";
    } else if (counter === 3) {
        document.getElementById("playground").classList.add("hidden");
        document.getElementById("badResult").classList.remove("hidden");
    } else {
        e.target.classList.add("invisible");
        counter++;
    }
}

function displayRules(){
    if(ruleCounter%2 === 1){

        document.getElementById("rules").classList.remove("hidden");
    } else {
        document.getElementById("rules").classList.add("hidden");
    }
    ruleCounter++;
}


