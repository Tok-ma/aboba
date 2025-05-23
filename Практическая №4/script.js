const board = document.getElementById("board");
const statusDiv = document.getElementById("status");
const banner = document.getElementById("winner-banner");
const size = 8;
let currentPlayer = "red";
let selected = null;
let state = [];

function createBoard() {
  board.innerHTML = "";
  state = [];

  for (let row = 0; row < size; row++) {
    state[row] = [];
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("div");
      const isDark = (row + col) % 2 === 1;
      cell.className = `cell ${isDark ? "dark" : "light"}`;
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener("click", () => onCellClick(row, col));
      board.appendChild(cell);
      state[row][col] = null;

      if (isDark && row < 3) placePiece(row, col, "black");
      if (isDark && row > 4) placePiece(row, col, "red");
    }
  }
}

function placePiece(row, col, color, isKing = false) {
  const piece = document.createElement("div");
  piece.className = `piece ${color}`;
  if (isKing) piece.classList.add("king");
  state[row][col] = { color, king: isKing, element: piece };
  const cell = getCell(row, col);
  cell.appendChild(piece);
}

function getCell(row, col) {
  return board.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
}

function onCellClick(row, col) {
  const cellData = state[row][col];

  if (selected && isMoveValid(selected.row, selected.col, row, col)) {
    movePiece(selected.row, selected.col, row, col);
    selected = null;
    clearHighlights();
    switchPlayer();
    return;
  }

  if (cellData && cellData.color === currentPlayer) {
    selected = { row, col };
    showValidMoves(row, col);
  }
}

function isMoveValid(fromRow, fromCol, toRow, toCol) {
  const piece = state[fromRow][fromCol];
  if (!piece || state[toRow][toCol]) return false;

  const dx = toCol - fromCol;
  const dy = toRow - fromRow;

  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  const dirX = dx / absDx || 0;
  const dirY = dy / absDy || 0;

  if (absDx !== absDy) return false; // must be diagonal

  // King logic
  if (piece.king) {
    let captured = null;
    for (let i = 1; i < absDx; i++) {
      const r = fromRow + dirY * i;
      const c = fromCol + dirX * i;
      const between = state[r][c];
      if (between) {
        if (between.color === piece.color) return false;
        if (captured) return false;
        captured = { row: r, col: c };
      }
    }
    return true;
  }

  const direction = piece.color === "red" ? -1 : 1;
  if (absDx === 1 && dy === direction) return true;

  if (absDx === 2 && dy === direction * 2) {
    const midRow = (fromRow + toRow) / 2;
    const midCol = (fromCol + toCol) / 2;
    const midPiece = state[midRow][midCol];
    return midPiece && midPiece.color !== piece.color;
  }

  return false;
}

function movePiece(fromRow, fromCol, toRow, toCol) {
  const piece = state[fromRow][fromCol];
  state[fromRow][fromCol] = null;
  state[toRow][toCol] = piece;

  const cell = getCell(toRow, toCol);
  cell.appendChild(piece.element);

  const dx = toCol - fromCol;
  const dy = toRow - fromRow;
  const absDx = Math.abs(dx);
  const dirX = dx / absDx || 0;
  const dirY = dy / absDx || 0;

  for (let i = 1; i < absDx; i++) {
    const r = fromRow + dirY * i;
    const c = fromCol + dirX * i;
    const between = state[r][c];
    if (between && between.color !== piece.color) {
      between.element.style.opacity = "0";
      setTimeout(() => {
        getCell(r, c).removeChild(between.element);
      }, 300);
      state[r][c] = null;
      break;
    }
  }

  if ((piece.color === "red" && toRow === 0) || (piece.color === "black" && toRow === 7)) {
    piece.king = true;
    piece.element.classList.add("king");
  }

  checkWinner();
}

function showValidMoves(row, col) {
  clearHighlights();
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (isMoveValid(row, col, r, c)) {
        getCell(r, c).classList.add("highlight");
      }
    }
  }
}

function clearHighlights() {
  document.querySelectorAll(".cell.highlight").forEach(cell => {
    cell.classList.remove("highlight");
  });
}

function switchPlayer() {
  currentPlayer = currentPlayer === "red" ? "black" : "red";
  statusDiv.textContent = `${capitalize(currentPlayer)}'s turn`;
}

function hasValidMoves(color) {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const p = state[r][c];
      if (p && p.color === color) {
        for (let r2 = 0; r2 < size; r2++) {
          for (let c2 = 0; c2 < size; c2++) {
            if (isMoveValid(r, c, r2, c2)) return true;
          }
        }
      }
    }
  }
  return false;
}

function checkWinner() {
  const reds = [].concat(...state).filter(p => p && p.color === "red").length;
  const blacks = [].concat(...state).filter(p => p && p.color === "black").length;

  if (reds === 0 || !hasValidMoves("red")) return endGame("Black wins!");
  if (blacks === 0 || !hasValidMoves("black")) return endGame("Red wins!");
}

function endGame(message) {
  statusDiv.textContent = message;
  banner.textContent = message;
  banner.classList.remove("hidden");
  board.style.pointerEvents = "none";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

createBoard();