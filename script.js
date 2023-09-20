function getComputerChoice() {
    const gameOptions = ['rock', 'paper', 'scissors'];
    return gameOptions[getRandomNumber(3)];
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

function getPlayerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    let playerChoice;
    while(!options.includes(playerChoice)) {
        playerChoice = prompt("Rock, Paper or Scissors? ");
        // Exit the function if the player press the cancel button or press enter without type anything.
        if (!playerChoice) return null;
        playerChoice = playerChoice.toLocaleLowerCase();
    }

    return playerChoice;
}

function showWinner(scoreboard) {

    console.log(`\t\t Player ${scoreboard['player']} - ${scoreboard['computer']} Computer`);

    if (scoreboard['player'] > scoreboard['computer']) {
        console.log('###### Congratulations! You have won the game! ######')
    } else if (scoreboard['player'] < scoreboard['computer']) {
        console.log('###### The Computer have won the game ######');
    } else {
        console.log('###### The game has ended in a tie ######')
    }
}

const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', (e) => {
        const playerChoice = option.id;
        const computerChoice = getComputerChoice();
    });
});