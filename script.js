const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

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

// function getHumanChoice() {
//     let humanChoice = prompt("Rock, paper, or scissors?");
//     if (humanChoice === "rock") {
//         return "rock";
//     } else if (humanChoice === "paper") {
//         return "paper";
//     } else if (humanChoice === "scissors") {
//         return "scissors";
//     } else if (humanChoice === null) {
//         return;
//     } else {
//         return "Invalid Choice";
//     }
// }



// console.log(getHumanChoice());


// plays one round, and displays the winner based on the humanChoice
function playRound(humanChoice, computerChoice) {

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

rockBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = 'rock';
    playRound(humanChoice, computerChoice);
}); 

paperBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = 'paper';
    playRound(humanChoice, computerChoice);
});

scissorsBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = 'scissors';
    playRound(humanChoice, computerChoice);
});

    let humanScore = 0;
    let computerScore = 0;

// playGame defines the oneRound function, calls it five times, and compares the humanScore and computerScore variables.
function playGame() {
    
// oneRound defines the humanChoice and computerChoice in variables, calls the playround function with the variables
    function oneRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log("You have "  + humanScore + " points.");
        console.log("Your opponent has " + computerScore + " points.");
    }
    // oneRound();
    // oneRound();
    // oneRound();
    // oneRound();
    // oneRound();

    if (humanScore > computerScore) {
        alert("You win! Good job.");
    } else if (humanScore < computerScore) {
        alert("You lose! Try again.");
    } else {

    }
}

playGame();

