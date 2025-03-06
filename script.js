// console.log("Hello, World!");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
 if (computerChoice === 1) {
    return "rock";
} else if (computerChoice === 2) {
    return "paper";
} else {
    return "scissors";
}
}


// console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else if (humanChoice === null) {
        return;
    } else {
        return "Invalid Choice";
    }
}

// console.log(getHumanChoice());



function playround(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        return humanScore++;
    } 
    
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        return humanScore++;
    } 
    
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        return humanScore++;
    } 
    
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        return computerScore++;
    } 
    
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log('You lose! Scissors beats paper.');
        return computerScore++;
    } 
    
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors");
        return computerScore++;
    } 
    
    else {
        console.log("It's a tie!");
    }

    } 

    let humanScore = 0
    let computerScore = 0

function playGame() {
    

    function oneRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playround(humanSelection, computerSelection);
        console.log("You have "  + humanScore + " points.");
        console.log("Your opponent has " + computerScore + " points.");
    }
    oneRound();
    oneRound();
    oneRound();
    oneRound();
    oneRound();

    if (humanScore > computerScore) {
        alert("You win! Good job.");
    } else {
        alert("You lose! Try again.");
    }
}

playGame();

