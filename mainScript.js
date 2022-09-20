function getComputerChoice() {
    let randNum = parseInt(Math.random()*3);
    const playOptions = ["rock", "paper", "scissors"]
    return playOptions[randNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;

    if (playerSelection === computerSelection) {return "It's a tie.";}

    else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You lose!, ${computerSelection} beats ${playerSelection}.`;}
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return `You win!, ${computerSelection} looses to ${playerSelection}.`;}
        
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = `You lose!, ${computerSelection} beats ${playerSelection}.`;
        return result;}

    else if (playerSelection == "paper" && computerSelection == "rock") {
        result = `You win!, ${computerSelection} looses to ${playerSelection}.`;
        return result;}

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = `You lose!, ${computerSelection} beats ${playerSelection}.`;
        return result;}

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = `You win!, ${computerSelection} looses to ${playerSelection}.`;
        return result;}
            
    else {return "I don't know what is going on :-(";}
}

function game() {
    for (let i = 0; i <5; i++) {
        playerSelection = prompt("Juega!", "rock");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

    }
}

game();