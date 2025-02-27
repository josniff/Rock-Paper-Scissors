console.log("Hello, World!");

// getComputerChoice should randomly return the string value "rock", "paper", or "scissors"
// math.random returns a number greater than or equal to 0 but less than one
//  

function getComputerChoice() {
 return Math.floor(Math.random() * 3 + 1);
} if (getComputerChoice() === 1) {
    console.log("Rock");
} else if (getComputerChoice() === 2) {
    console.log("Paper");
} else if (getComputerChoice() === 3) {
    console.log("Scissors");
}
