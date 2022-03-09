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
    console.log("Player selection: "+player+"\nComputer selection: "+computer);
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
  
//Game rounds
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
     }
}

