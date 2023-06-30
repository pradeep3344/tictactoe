const Cell = require("./cell");

class Board {
  constructor(cells) {
    this.cells = cells;
    this.isGameActive = true; // Add isGameActive flag
  }

  static newBoard() {
    let cells = [];
    for (let i = 0; i < 9; ++i) {
      cells.push(Cell.newCell("?"));
    }
    return new Board(cells);
  }

  showBoard() {
    console.log("-------------");
    console.log(`| ${this.cells[0].mark} | ${this.cells[1].mark} | ${this.cells[2].mark} |`);
    console.log("-------------");
    console.log(`| ${this.cells[3].mark} | ${this.cells[4].mark} | ${this.cells[5].mark} |`);
    console.log("-------------");
    console.log(`| ${this.cells[6].mark} | ${this.cells[7].mark} | ${this.cells[8].mark} |`);
    console.log("-------------");
  }

  analyzeResult() {
    // Add your code to analyze the game result here

    // Check if the game is over
    // Update the isGameActive flag accordingly
    // For example, you can check for winning combinations or a draw
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.cells[a].mark !== "?" &&
        this.cells[a].mark === this.cells[b].mark &&
        this.cells[a].mark === this.cells[c].mark
      ) {
        this.isGameActive = false;
        return;
      }
    }

    const isBoardFull = this.cells.every(cell => cell.isMarked());
    if (isBoardFull) {
      this.isGameActive = false;
    }
  }
}

module.exports = Board;
