/** 
 *      JavaScript Structure
 * 
 *  game{object} - stores game state
 * 
 *  newGame()
 * 
 *  addturn()
 * 
 *  showTurns()
 * 
 *  lightsOn()
 * 
 *  playerTurn()
 * 
 *  showScore()
 * 
*/


let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
    // showTurn();
}

function showScore() {
    document.getElementById("score").innerText = game.score
}

module.exports = { game, newGame, showScore, addTurn };