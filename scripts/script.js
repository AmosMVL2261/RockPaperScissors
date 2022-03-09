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