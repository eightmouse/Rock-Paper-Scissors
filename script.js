// playRound:
//   player submits choice
//   computer randomly chooses
//   comparison happens
//   score is updated
//   round number is updated
//   HTML is updated, displaying win/draw
//   **Before the round ends, check if the game is over...

//Game starts here!
function game(Rock, Paper, Scissors) {
    //This is the algorithm that randomly generates a choice for the CPU
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

    //Rounds variables are stored here
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return ("It's a draw, good one :)");
        } else if (( playerSelection === "Rock") && (computerSelection === "Scissors")) {
            return ("You won, Rock beats Scissors :)");
        } else if (( playerSelection === "Rock") && (computerSelection === "Paper")) {
            return ("You lost, Paper beats Rock :)");
        } else if (( playerSelection === "Paper") && (computerSelection === "Rock")) {
            return ("You won, Paper beats Rock :)=");
        } else if (( playerSelection === "Paper") && (computerSelection === "Scissors")) {
            return ("You lost, Scissors beats Paper :)");
        } else if (( playerSelection === "Scissors") && (computerSelection === "Rock")) {
            return ("You lost, Rock beats Scissors :)!");
        } else if (( playerSelection === "Scissors") && (computerSelection === "Paper")) {
            return ("You won, Scissors beats paper :)");
        }
    }

    //User prompt and computer choices are stored here
    let playerSelection = prompt("Choose wisely!");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

}

//This loops the game 5 times
for (let i = 0; i <= 5; i++) {
    game();
}