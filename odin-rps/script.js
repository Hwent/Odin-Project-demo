const result=document.querySelector("p");
const userscore=document.querySelector("#user-score");
const computerscore=document.querySelector("#computer-score");
let userScore=0;
let computerScore=0;
let round=0;
//arrow function playRound

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  round++;
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
      } else {
        userScore++;
        return "You win! Rock beats Scissors";
      }
    case "paper":
      if (computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper";
      } else {
        userScore++;
        return "You win! Paper beats Rock";
      }
    case "scissors":
      if (computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
      } else {
        userScore++;
        return "You win! Scissors beats Paper";
      }
    default:
      return "Invalid input";
  }
}

//computerPlay generation function
const computerPlay = () => {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const checkScore = () => {
  if (userScore === 5) {
    return "You win the game!";
  } else if (computerScore === 5) {
    return "You lose the game!";
  } else {
    return "Play another round";
  }
}


//click play button to play a round
const play = document.getElementById("play");
play.addEventListener("click", () => {
  let playerSelection = prompt("Choose rock, paper, or scissors");
  let computerSelection = computerPlay();
  let resultText = playRound(playerSelection, computerSelection)
  result.innerText = "Round "+round+ " " + resultText;
  userscore.textContent = userScore;
  computerscore.textContent = computerScore;
  play.textContent = checkScore();
});
