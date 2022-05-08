//Number of games won 
let userVictories=0;
let computerVictories=0;

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
    //Record
    const playerNumWins = document.querySelector("#playerWins");
    const compNumWins = document.querySelector("#computerWins");
    if(player === computer) {
        return "Tie";
    } else if (player === "rock" && computer === "scissors") {
        userVictories+=1;
        playerNumWins.textContent=userVictories.toString();
        return "Player Wins";
    } else if (player === "scissors" && computer === "paper") {
        userVictories+=1;
        playerNumWins.textContent=userVictories.toString();
        return "Player wins";
    } else if (player === "paper" && computer === "rock") {
        userVictories+=1;
        playerNumWins.textContent=userVictories.toString();
        return "Player wins";
    } else {
        computerVictories+=1;
        compNumWins.textContent=computerVictories.toString();
        return "Computer Wins";
    }
}

//Messages
function message(playerSelection){
    //Logic
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    //Last play
    const lastResultPlayer = document.querySelector("#playerSelection");
    const lastResultComp = document.querySelector("#computerSelection");
    const winner = document.querySelector("#winner");
    //Write the options selected
    lastResultComp.textContent=computerSelection.toString();
    lastResultPlayer.textContent=playerSelection.toString();
    winner.textContent=result.toString();
    //End of the games
    if(computerVictories===5){
        window.alert("Computer win all games");
    }else if(userVictories===5){
        window.alert("Player win all games");
    }
}

//Button Calls
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener("click",()=>message("Rock"));
buttonPaper.addEventListener("click",()=>message("Paper"));
buttonScissors.addEventListener("click",()=>message("Scissors"));