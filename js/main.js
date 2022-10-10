  /*----- constants -----*/
const wordsList = [
  'DASHER',
  'DANCER',
  'PRANCER',
  'VIXEN',
  'COMET',
  'CUPID',
  'DONNER',
  'BLITZEN',
  'RUDOLPH',
]; //word library

const maxWrong = 6;


// const AUDIO = new Audio('')

  /*----- state variables -----*/
let randomWord; 
let answer;
let wrongGuesses;
let playerGuess;


  /*----- stored/ cached elements  -----*/
const attemptsEl = document.getElementsById('attempts');
const playerGuess = document.getElementById('playerGuess');
const board = document.querySelectorAll('button');
const message = document.querySelector('h3');
console.log(keys[0.innerText])

  /*----- event listeners -----*/
// resetPlayAgainBtn.addEventListener('click', initialize);



  /*----- functions -----*/
// initialize();

// function initialize() {
//     const wordList 
// }

 




  // function renderMessage () {
  //   if ()
  // }