//Tic Tac Toe Game
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const player1 = "X";
const player2 = "O";

let player1Moves = [];
let player2Moves = [];
let isPlayer1Turn = true;
let isGameOver = false;

const checkWinner = (playerMoves) => {
  for (let i = 0; i < win.length; i++) {
    if (win[i].every((val) => playerMoves.includes(val))) {
      return true;
    }
  }
  return false;
};

const checkDraw = () => {
  return player1Moves.length + player2Moves.length === 9;
};

const resetGame = () => {
  player1Moves = [];
  player2Moves = [];
  isPlayer1Turn = true;
  isGameOver = false;
};

const move = (index, cell) => {
  if (isGameOver || cell.textContent !== "") return;

  const currentPlayer = isPlayer1Turn ? player1 : player2;
  const currentMoves = isPlayer1Turn ? player1Moves : player2Moves;

  if (!currentMoves.includes(index)) {
    currentMoves.push(index);
    cell.textContent = currentPlayer;

    if (checkWinner(currentMoves)) {
      isGameOver = true;
      displayMessage(`${currentPlayer} wins!`);
    } else if (checkDraw()) {
      isGameOver = true;
      displayMessage("It's a draw!");
    } else {
      isPlayer1Turn = !isPlayer1Turn;
    }
  }
};

//create cells 3*3
const board = document.querySelector(".board");

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => move(i, cell));
  board.appendChild(cell);
}

//reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  resetGame();
});

//display winner or draw
const message = document.querySelector("#message");

const displayMessage = (msg) => {
  message.textContent = msg;
};
