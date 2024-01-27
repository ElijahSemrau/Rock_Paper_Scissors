//Initializes variables
let comp;
let player;
let playerWins = 0;
let computerWins = 0;

//Allows the creation of a random full number integerRock
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

//Requests, validates, and returns the player choice
function getPlayerChoice() {
    player = prompt("Choose an option: Rock, Paper, or Scissors:")
    player = player[0].toUpperCase() + player.slice(1).toLowerCase();

    while (player !== "Rock" && player !== "Scissors" && player !== "Paper") {
        player = prompt("Invalid choice. Choose an option: Rock, Paper, or Scissors:");
        player = player[0].toUpperCase() + player.slice(1).toLowerCase();
    }

    return player;
}



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
    getPlayerChoice();
    getComputerChoice();

    //Prints out each of the choices
    console.log("Player has chosen", player);
    console.log("Computer has chosen", comp);

    //Prints out if there is a tie
    if (player == comp) {
        console.log("The player and the computer have tied with", player);
    }

    //Prints if the player wins with Rock
    if (player == "Rock" && comp == "Scissors") {
        console.log("The player has won!");
        playerWins++;
    }

    //Prints if the player loses with Rock
    if (player == "Rock" && comp == "Paper") {
        console.log("The computer has won!");
        computerWins++;
    }

    //Prints if the player wins with Paper
    if (player == "Paper" && comp == "Rock") {
        console.log("The player has won!");
        playerWins++;
    }

    //Prints if the player loses with Paper
    if (player == "Paper" && comp == "Scissors") {
        console.log("The computer has won!");
        computerWins++;
    }

    //Prints if the player wins with Scissors
    if (player == "Scissors" && comp == "Paper") {
        console.log("The player has won!");
        playerWins++;
    }

    //Prints if the player loses with Scissors
    if (player == "Scissors" && comp == "Rock") {
        console.log("The computer has won!");
        computerWins++;
    }

    console.log("The player has", playerWins,"points and the computer has", computerWins,"points.")

    return getPlayerChoice, getComputerChoice;
  }

  //Function to play the game and print win/loss records
  function game(){

    //Loops for 5 rounds
    for(let i = 0; i < 5; i++ ){
        playRound();
        //If there is a tie, redoes the round
        if (player == comp){
            i--;
        }
    }

    if (playerWins > computerWins) {
        console.log("The player has won", playerWins,"-",computerWins,"!");
    }

    if (playerWins < computerWins) {
        console.log("The computer has won", computerWins,"-",playerWins,"!");
    }
  }

  //Starts the game
  game();





