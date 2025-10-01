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

const results = document.querySelector("container");
const list = document.querySelector("ul");

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

const listItem = document.createElement("li");
const span = document.createElement("span")
listItem.appendChild(span);
// plays one round, and displays the winner based on the humanChoice
function playRound(humanChoice, computerChoice) {

   if (humanChoice === "rock" && computerChoice === "scissors") {
        span.textContent = ("You win! Rock beats scissors.");
        list.appendChild(listItem);
        return humanScore++;
    } 
    
    else if (humanChoice === "paper" && computerChoice === "rock") {
        span.textContent = ("You win! Paper beats rock.");
        list.appendChild(listItem);
        return humanScore++;
    } 
    
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        span.textContent = ("You win! Scissors beats paper.");
        list.appendChild(listItem);
        return humanScore++;
    } 
    
    else if (humanChoice === "rock" && computerChoice === "paper") {
        span.textyContent = ("You lose! Paper beats rock.");
        list.appendChild(listItem);
        return computerScore++;
    } 
    
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        span.textContent = ("You lose! Scissors beats paper.");
        list.appendChild(listItem);
        return computerScore++;
    } 
    
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        span.textContent = ("You lose! Rock beats scissors");
        list.appendChild(listItem);
        return computerScore++;
    } 
    
    else {
        span.textContent = ("It's a tie!");
    }

} 
// each of these buttons stores both the computerChoice (randomly generated) and humanChoice (button dependant) in variables, then executes the playRound function with those choices.
rockBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = 'rock';
    playRound(humanChoice, computerChoice);
    // const listItem = document.createElement("li");
    // const span = document.createElement("span");
    // // append the span as a child of the list item
    // listItem.appendChild(span);
    // // set the text content of the span...
    // span.textContent = (humanChoice);
    // results.appendChild(listItem);
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
    
// oneRound stores the humanChoice and computerChoice in variables, calls the playround function with the variables
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

