//Initializes variables
let comp;
let player;
let playerWins = 0;
let computerWins = 0;
let winFlag = 'false';

//Creates elements with reference links
const container = document.querySelector('#container');
const results = document.querySelector('#results');
const runningScore = document.querySelector('#runningScore');
const winnerMessage = document.querySelector('#winnerMessage');

//Creates elements
var choices = document.createElement("choices");
var roundResults = document.createElement("roundResults");
var roundScore = document.createElement("roundScore");
var winner = document.createElement("winner");

//Allows the creation of a random full number integer
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

//Creates the button selection, and takes the text for the button and logs it as the player option.
const buttons = document.querySelectorAll('.playerOption')
buttons.forEach(button => {
    button.addEventListener('click', function(event){
        console.log(event.target.textContent);
        player = event.target.textContent;
        playRound();
    });
});



//Chooses a choice for the computer
function getComputerChoice () {
    let x = getRandomInt(3);

    if (x == 0) {
        comp = "Rock";
    } else if (x == 1) {
        comp = "Paper";
    } else if (x == 2) {
        comp = "Scissors";
        }
    return comp;
}

//Function for a single round
function playRound() {

    //calls getComputerChoice at the end of the round to compare to player choice
    getComputerChoice();


    //Prints out each of the choices
    choices.classList.add('choices');
    choices.textContent = 'You have chosen ' + player + ' and the Computer has chosen ' + comp + '!';
    container.appendChild(choices);
 


    //Prints out if there is a tie
    if (player == comp) {
        roundResults.classList.add('roundResults');
        roundResults.textContent = 'You and the computer have tied with '+ player + '!';
        results.appendChild(roundResults);
    }

    //Prints if the player wins with Rock
    if (player == "Rock" && comp == "Scissors") {
        roundResults.classList.add('roundResults');
        roundResults.textContent = 'You won!';
        results.appendChild(roundResults);
        playerWins++;
    }

    //Prints if the player loses with Rock
    if (player == "Rock" && comp == "Paper") {
        roundResults.classList.add('roundResults');
        roundResults.textContent = 'The Computer has won!';
        results.appendChild(roundResults);
        computerWins++;
    }

    //Prints if the player wins with Paper
    if (player == "Paper" && comp == "Rock") {
        roundResults.classList.add('roundResults');
        roundResults.textContent = 'You won!';
        results.appendChild(roundResults);
        playerWins++;
    }

    //Prints if the player loses with Paper
    if (player == "Paper" && comp == "Scissors") {
        roundResults.classList.add('roundResults');
        roundResults.textContent = 'The Computer has won!';
        results.appendChild(roundResults);
        computerWins++;
    }

    //Prints if the player wins with Scissors
    if (player == "Scissors" && comp == "Paper") {
        roundResults.classList.add('roundResults');
        roundResults.textContent = 'You won!';
        results.appendChild(roundResults);
        playerWins++;
    }

    //Prints if the player loses with Scissors
    if (player == "Scissors" && comp == "Rock") {
        roundResults.classList.add('roundResults');
        roundResults.textContent = 'The Computer has won!';
        results.appendChild(roundResults);
        computerWins++;
    }

    roundScore.classList.add('roundScore');
    roundScore.textContent = 'You have ' + playerWins + ' points and the Computer has ' + computerWins + " points!";
    runningScore.appendChild(roundScore);

    winner.classList.add('winner');

    if (playerWins === 5 && winFlag === 'false') {
        winner.textContent = '👑You have been crowned winner after five wins!👑';
        winnerMessage.appendChild(winner);
        winFlag = 'true';
    }

    if (computerWins === 5 && winFlag === 'false') {
        winner.textContent = '👑The Computer has been crowned winner after five wins!👑';
        winnerMessage.appendChild(winner);
        winFlag = 'true';
    }
    

    return player, getComputerChoice;
  }






