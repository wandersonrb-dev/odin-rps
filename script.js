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

function showRoundWinner(playerSelection, computerSelection) {
    const roundWinner = findWinner(playerSelection, computerSelection);
    // If the round has no winner it's a tie.
    if (!roundWinner) return "It's a tie, play another round!";
    if (roundWinner === 'player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function showWinner(winner) {
    const message = document.querySelector('.display-message p');
    switch(winner) {
        case 'player':
            message.textContent = 'Congratulations! You have won the game!';
            break;
        case 'computer':
            message.textContent = 'The Computer have won the game!';
    }
}

function updateScoreBoard(winner) {
    if (!winner) return;
    const MAX_SCORE = 5;
    let playerScoreBox = document.querySelector('.player-score');
    let computerScoreBox = document.querySelector('.cpu-score');

    if (winner === 'player'){
        let currentPlayerScore = parseInt(playerScoreBox.textContent) 
        playerScoreBox.textContent = ++currentPlayerScore;
        if (currentPlayerScore === MAX_SCORE) {
            declareWinner(winner);
            return;
        }
    } else {
        let currentComputerScore = parseInt(computerScoreBox.textContent);
        computerScoreBox.textContent = ++currentComputerScore;
        if (currentComputerScore === MAX_SCORE) {
            declareWinner(winner);
            return;
        }
    }

}

function declareWinner(winner) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.removeEventListener('click', playRound);
    });
    toogleGameOptions();
    showWinner(winner);
}

function playRound() {
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();
    const displayMessage = document.querySelector('.display-message p');
    removeBorders();
    if (playerChoice === computerChoice) 
    {
        addDoubleBorders(playerChoice);
    } else {
        addBorder(playerChoice, 'purple');
        addBorder(computerChoice, 'red');
    }

    displayMessage.textContent = showRoundWinner(playerChoice, computerChoice);
    updateScoreBoard(findWinner(playerChoice, computerChoice));
}

function resetGame() {
    const scoreBoxes = document.querySelectorAll('.score-box');
    const displayMessage = document.querySelector('.display-message p');
    const options = document.querySelectorAll('.option');
    scoreBoxes.forEach(box => box.textContent = 0);
    displayMessage.textContent = 'Choose between Rock, Paper and Scissors!';
    options.forEach(option => option.addEventListener('click', playRound));
    removeBorders();
    toogleGameOptions();
}

function addBorder(option, color) {
    document.querySelector(`#${option}`).classList.add(`${color}`);
}

function addDoubleBorders(option) {
    document.querySelector(`#${option}`).classList.add(`double-border`);
}

function removeBorders() {
    const options = document.querySelectorAll('.option')
    options.forEach(option => {
        option.classList.remove('purple', 'red', 'double-border');
    });
}

function toogleGameOptions() {
    const options = document.querySelectorAll('.option')
    options.forEach(option => {
        option.classList.toggle('disabled');
    });
}

const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', playRound);
});

const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', resetGame);

