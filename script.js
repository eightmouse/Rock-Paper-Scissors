

function game(Rock, Paper, Scissors) {

    function getComputerChoice() {
        const choices = Math.random()
            if ( choices <= 0.1) {
                return "Rock"; 
            } else if (choices > 0.1 && choices <= 0.3) {
                return "Paper";
            } else if ( choices > 0.3) {
                return "Scissors"
            }
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return ("It's a draw, good one :)");
        } else if (( playerSelection === "Rock") && (computerSelection === "Scissors")) {
            return ("You won, Rock beats Scissors!");
        } else if (( playerSelection === "Rock") && (computerSelection === "Paper")) {
            return ("You lost, nice try tho :P");
        } else if (( playerSelection === "Paper") && (computerSelection === "Rock")) {
            return ("You won, damn you're good!");
        } else if (( playerSelection === "Paper") && (computerSelection === "Scissors")) {
            return ("You lost, better luck next time?");
        } else if (( playerSelection === "Scissors") && (computerSelection === "Rock")) {
            return ("You lost, hehe!");
        } else if (( playerSelection === "Scissors") && (computerSelection === "Paper")) {
            return ("You won, GG!");
        }
    }

    let playerSelection = prompt("Choose wisely!");
    // if (playerSelection === "Rock", "Paper", "Scissors") {
    // } else (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

// let start = game();
console.log(game());