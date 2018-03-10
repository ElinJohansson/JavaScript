window.onload = function(){
    document.getElementById("button").addEventListener("click", startGame());
}

function startGame(){
        let isCorrect = false;
        let counter = 1;
        let newGame = true;

        while(newGame){
            let answer = Math.floor(Math.random()*10)+1;
            while(!isCorrect){
              let guess = parseInt(prompt("Enter your guess:"));
                 if(guess === answer){
                    alert("Correct!");
                    isCorrect = true;
                    counter = 0;
                } else if(counter === 3){
                    alert("You failed to guess the correct number. The correct number was "+answer);
                    break;
                } else {
                    counter++;
                }
            }  
            counter = 1;
            newGame = confirm("New game?");
        }
    
}


