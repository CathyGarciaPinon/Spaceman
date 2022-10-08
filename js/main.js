  /*----- constants -----*/
const wordList = ['DASHER', 'DANCER', 'PRANCER', 'VIXEN', 'COMET', 'CUPID', 'DONNER', 'BLITZEN', 'RUDOLPH']; //word library
const AUDIO = new Audio('')

  /*----- state variables -----*/
let attempts; // the remaining attempts left out of 6
let bored; //each reindeer will disapear after each wrong answer
let letterInput; //Chosen letter by player


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/
  init();


  function init() {


  }

function getRandomWord() {
  const rndoWord = Math.floor(Math.random() * wordList.lenth);
  return wordList[rndoWord];
}



