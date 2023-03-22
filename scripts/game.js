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
    choices: [],
};



module.exports = { game };