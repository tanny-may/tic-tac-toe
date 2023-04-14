let players = ['X', 'O'];
let activePlayer = 0;
let board;

function startGame() {
  board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ];
  renderBoard(board);
}

function switchPlayer() {
  activePlayer = (activePlayer + 1) % 2;
}

function checkWin() {
  for (let i = 0; i < board.length; i++) {
    // в цкиле проверяем каждую строку
    if (board[i].every((element) => element === players[activePlayer])) {
      return true;
    }
    
    // формируем и проверяем столбец для текущего индекса в цикле
    let col = []
    for (let j = 0; j < board.length; j++) {
      col.push(board[j][i])
    }
    if (col.every((element) => element === players[activePlayer])) {
      return true;
    }
  }

  // формируем и проверяем две диагонали
  let diagonal = []
  let reversedDiagonal = []
  for (let i = 0; i < board.length; i++) {
    diagonal.push(board[i][i])
    reversedDiagonal.push(board[i][board.length - 1 - i])
  }
  if (diagonal.every((element) => element === players[activePlayer]) 
      || reversedDiagonal.every((element) => element === players[activePlayer])) {
    return true;
  }

  return false;
}


function click(rowNum, colNum) {
  board[rowNum][colNum] = players[activePlayer];
  renderBoard(board);
  
  if (checkWin()) {
    showWinner(activePlayer);
    return;
  }

  switchPlayer();
}
