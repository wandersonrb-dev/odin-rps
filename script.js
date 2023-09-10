
function getComputerChoice() {
    switch (getRandomNumber(3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper'
        default:
            return 'scissors'
    }
}

// Return a random number between 0 up to no include upperBound 
function getRandomNumber(upperBound = 3) {
    return Math.floor(Math.random() * upperBound);
}

function findWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return null;

    switch(playerSelection) {
        case 'rock':
            return (computerSelection === 'scissors') ? 'player' : 'computer';
        case 'paper':
            return (computerSelection === 'rock') ? 'player' : 'computer';
        default:
            return (computerSelection === 'paper') ? 'player': 'computer';
    }
}

function playRound(playerSelection, computerSelection) {
    const roundWinner = findWinner(playerSelection, computerSelection);
    // If the round has no winner it's a tie.
    if (!roundWinner) return "It's a tie, play another round!";
    if (roundWinner === 'player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}