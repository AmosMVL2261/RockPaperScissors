//Computer random choose
function computerPlay() {
    let random = getRandomNumber();    
    if(random>=0 && random<1){
        return "Rock";
    }else if (random>=1 && random<2) {
        return "Paper";
    } else if(random>=2 && random<3) {
        return "Scissors";
    }
    return "Error: Cannot get a random number";
}

//Return a random number used for the computer choose
function getRandomNumber(){
    let min = 0;
    let max = 3;
    return (Math.random()*(max -min)+min);
}

//Game functionality
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if(player === computer) {
        return "Tie";
    } else if (player === "rock" && computer === "scissors") {
        return "Player Wins";
    } else if (player === "scissors" && computer === "paper") {
        return "Player wins";
    } else if (player === "paper" && computer === "rock") {
        return "Player wins";
    } else {
        return "Computer Wins";
    }
}

//Messages
function message(playerSelection){
    const resultsArea = document.querySelector("#answers");

    const result = document.createElement("p");
    result.classList.add("resultMessage");
    result.setAttribute('style', 'white-space: pre;');
    //Round play
    const computerSelection = computerPlay();
    let mensaje = "Your election: "+playerSelection+"\r\n"+"Computer election: "+computerSelection+"\r\n";
    result.textContent = mensaje+playRound(playerSelection, computerSelection);

    resultsArea.appendChild(result);
}



//Rounds logic
let round=0;
function selection(playerSelection){
    if(round<=5){
        message(playerSelection);
    }else{
        console.log("Invalid input");
    }

}


function prueba(){
    window.alert("You selected rock");
}

//Button Calls
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener("click",()=>selection("rock"));
buttonPaper.addEventListener("click",()=>selection("paper"));
buttonScissors.addEventListener("click",()=>selection("scissors"));