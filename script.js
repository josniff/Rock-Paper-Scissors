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

let humanScore = 0
let computerScore = 0

function playround(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
    } 
    
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
    } 
    
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
    } 
    
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
    } 
    
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log('You lose! Scissors beats paper.');
    } 
    
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors");
    } 
    
    else {
        console.log("It's a tie!");
    }

    } 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playround(humanSelection, computerSelection);

// console.log(playround()); 

