// Play the game

const Game = require("./game");
// Play the game
function playGame(game) {
    const currentPlayer = game.players[game.turn % 2];
    
    // Hardcoded moves for Player 1 and Player 2
    const moves = [0, 4, 1, 3, 2]; // Adjust the moves as desired
    
    if (game.turn < moves.length) {
      const position = moves[game.turn];
      game.board.cells[position].mark = currentPlayer.symbol;
      game.board.showBoard();
      game.turn++;
    
      // Analyze game result
      game.board.analyzeResult();
      if (!game.isGameActive) {
        console.log("Game over!");
      } else {
        // Continue playing if the game is still active
        setTimeout(() => playGame(game), 1000); // Delay between moves (1 second in this example)
      }
    }
  }
  
  // Create a game
  const game = Game.addGame("Player 1", "X", "Player 2", "O");
  
  // Start playing the game
  playGame(game);
  