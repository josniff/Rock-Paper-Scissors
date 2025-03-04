// console.log("Hello, World!");

// getComputerChoice should randomly return the string value "rock", "paper", or "scissors"
// math.random returns a number greater than or equal to 0 but less than one

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
 if (computerChoice === 1) {
    return "Rock";
} else if (computerChoice === 2) {
    return "Paper";
} else {
    return "Scissors";
}
}


console.log(getComputerChoice());