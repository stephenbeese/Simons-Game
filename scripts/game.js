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



module.exports = { game };