/*Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls… 
Just call your playRound function 5 times in a row. 
Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.*/

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let roundWinner = "";

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = "It'sa tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      roundWinner = "You Lose! Paper beats Rock.";
      computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      roundWinner = "You win! Paper beats rock.";
      playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      roundWinner = "You win! Rock beats scissors.";
      playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      roundWinner = "You lose! Rock beats scissors.";
      computerScore++;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      roundWinner = "You lose! Scissors beat paper.";
      computerScore++;
      return computerScore;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      roundWinner = "You win! Scissors beat paper.";
      playerScore++;
    }
    console.log(roundWinner);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  function getComputerChoice(min, max) {
    min = 1;
    max = 3;
    let randomNum = Math.floor(Math.random() * max);
    switch (randomNum) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }

  const playerSelection = prompt("Choose your weapon.").toLowerCase();
  const computerSelection = getComputerChoice().toLowerCase();
  return playRound(playerSelection, computerSelection);
}

playGame();
