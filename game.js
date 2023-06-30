const Board = require("./board");
const Player = require("./player");

class Game {
  constructor(players, board) {
    this.players = players;
    this.board = board;
    this.turn = 0;
    this.isGameActive = true;
  }

  static addGame(playerName1, symbol1, playerName2, symbol2) {
    if (typeof playerName1 !== "string" || typeof playerName1 !== "string") {
      throw new Error("Player name should be a string");
    }

    if (typeof symbol1 !== "string" || typeof symbol1 !== "string") {
      throw new Error("Player symbol should be a string");
    }

    let players = [
      Player.addPlayer(playerName1, symbol1),
      Player.addPlayer(playerName2, symbol2),
    ];
    let board = Board.newBoard();
    return new Game(players, board);
  }
}

module.exports = Game;
