let score1 = 0;
let score2 = 0;
let gameState = "not started";

const scoreOne = document.querySelector("#score1");
const scoreTwo = document.querySelector("#score2");

greet = document.querySelector("#greeting");
greet.textContent = "Are yoy ready for battle? The world needs You!"

startButton = document.querySelector("#restart");
startButton.addEventListener("click", game);

rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", playRound);

paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", playRound);

scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", playRound);

scoreOne.textContent = `Score: ${score1}`;
scoreTwo.textContent = `Score: ${score2}`;

game()

function getComputerChoice() {
    let randNum = parseInt(Math.random()*3);
    const playOptions = ["rock", "paper", "scissors"]
    return playOptions[randNum];
}

function playRound(e) {
    
    if (gameState == "Playing") {
        playerSelection = `${this.id}`;
        this.classList.add("changed");
        this.classList.add("played");
        const otherTimeout = setTimeout(resetClass, 800);
        
        computerSelection = getComputerChoice()
        const computerPlay = document.querySelector(`.computer > #${computerSelection}`)
        computerPlay.classList.add("played");

        console.log(playerSelection)
        console.log(computerSelection)
        let result;

        if (playerSelection === computerSelection) {result = "It's a tie.";}

        else if (playerSelection == "rock" && computerSelection == "paper") {
            score2 +=1;
            scoreTwo.classList.add("changed");
            result = `You lose!, ${computerSelection} beats ${playerSelection}.`;}
        
        else if (playerSelection == "rock" && computerSelection == "scissors") {
            score1 +=1;
            scoreOne.classList.add("changed");
            result = `You win!, ${computerSelection} looses to ${playerSelection}.`;}
            
        else if (playerSelection == "paper" && computerSelection == "scissors") {
            score2 +=1;
            scoreTwo.classList.add("changed");
            result = `You lose!, ${computerSelection} beats ${playerSelection}.`;
            }

        else if (playerSelection == "paper" && computerSelection == "rock") {
            score1 +=1;
            scoreOne.classList.add("changed");
            result = `You win!, ${computerSelection} looses to ${playerSelection}.`;
            }

        else if (playerSelection == "scissors" && computerSelection == "rock") {
            score2 +=1;
            scoreTwo.classList.add("changed");
            result = `You lose!, ${computerSelection} beats ${playerSelection}.`;
            }

        else if (playerSelection == "scissors" && computerSelection == "paper") {
            score1 +=1;
            scoreOne.classList.add("changed");
            result = `You win!, ${computerSelection} looses to ${playerSelection}.`;
            }
                
        else {result = "I don't know what is going on :-(";}
        
        scoreOne.textContent = `Score: ${score1}`;
        scoreTwo.textContent = `Score: ${score2}`;
        
        const myTimeout = setTimeout(resetClass, 500);
        
        if (score1 == 5 || score2 == 5) {
            endGame();
        }

        comment = document.querySelector("#commentary");
        comment.textContent = `${result}`;
        comment.classList.add("changed");  
        console.log(`the result is ${result}`);
        
        return result;
}
}

function resetClass() {
    scoreOne.classList.remove("changed");
    scoreTwo.classList.remove("changed");
    comment.classList.remove("changed");

    scoreOne.classList.remove("played");
    scoreTwo.classList.remove("played");
    comment.classList.remove("played");
    
    theButtons = document.querySelectorAll("button");
    theButtons.forEach(element => {
        element.classList.remove("changed");
        element.classList.remove("played");
    });

}


function game() {
    console.log("game started");
    score1=0;
    score2=0;
    gameState = "Playing";
    greet = document.querySelector("#greeting");
    greet.textContent = "May the force be with you.";
    greet.style = "background-color: yellow;"
    console.log(`you have ${score1} points`)

    scoreOne.textContent = `Score: ${score1}`;    
    scoreTwo.textContent = `Score: ${score2}`;
    document.querySelector("*").style = "background-color: yellow;";

    comment = document.querySelector("#commentary");
    comment.textContent = " ";
}

function endGame() {
    if (score1 == 5) {
        gameState = "Happy"
        greet = document.querySelector("#greeting");
        greet.textContent = "You are awesome :-)"
        greet.style = "background-color: cyan;"
        document.querySelector("*").style = "background-color: cyan;";
        }
    else {
        gameState = "Sad"
        greet = document.querySelector("#greeting");
        greet.textContent = "Looser!"
        greet.style = "background-color: Black;"
        document.querySelector("*").style = "background-color: black;";
    }
}

