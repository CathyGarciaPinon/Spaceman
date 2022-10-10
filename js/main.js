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
let randomWord; // array of characters for random words
let wrongGuesses; // array of characters that are incorrect
let guess; //current guessed letters
let gameStatus; //Null(game in progress), W (win), L (lose)

  /*----- stored/ cached elements  -----*/
const msgEl = document.getElementsByClassName('message');
const playBtn = document.getElementById('play');
const livesLeft = document.getElementsByClassName('attempts');
const letterBtn = [...document.querySelectorAll('article > button')]
const secretEl = document.getElementsByClassName('secretWord');



  /*----- event listeners -----*/
playBtn.addEventListener('click', initialize);



  /*----- functions -----*/
initialize();

function initialize() {
    wrongGuesses = [];
    const randomIdx = Math.floor(Math.random() * wordsList.length);
    randomWord = wordsList[randomIdx].split('');
    guess = randomWord.map(ltr => ltr === ' ' ? ' ' : '_');
    gameStatus = null;
    render();
}

function render() {
  secretEl.textContent = guess.join('')
}

 
