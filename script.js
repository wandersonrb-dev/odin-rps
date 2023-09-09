
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