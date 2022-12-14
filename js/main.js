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

const IMAGES = [
 "img/reindeersleigh/SANTAANDREINDEER-0.png",
 "img/reindeersleigh/SANTAANDREINDEER-1.png",
 "img/reindeersleigh/SANTAANDREINDEER-2.png",
 "img/reindeersleigh/SANTAANDREINDEER-3.png",
 "img/reindeersleigh/SANTAANDREINDEER-4.png",
 "img/reindeersleigh/SANTAANDREINDEER-5.png",
 "img/reindeersleigh/SANTAANDREINDEER-6.png",
];

// const AUDIO = new Audio('')

  /*----- state variables -----*/
let randomWord; // array of characters for random words
let wrongGuesses; // array of characters that are incorrect
let guess; //current guessed letters
let gameStatus; //Null(game in progress), W (win), L (lose)



  /*----- stored/ cached elements  -----*/
const imageEl = document.querySelector('img'); //Images of reindeer disappearing.
const msgEl = document.querySelector('.message'); //Message that appears if they win or lose
const playBtn = document.getElementById('play'); //The play button
const livesLeft = document.querySelector('.attempts'); // How many guesses are left
const letterBtn = [...document.querySelectorAll('article > button')] //My alphabet buttons
const secretEl = document.querySelector('.secretWord'); //the secret word section with lines



  /*----- event listeners -----*/
playBtn.addEventListener('click', initialize); //The play button will generate a new random word
document.querySelector('article').addEventListener('click', handleChoice); 


  /*----- functions -----*/
initialize();

function initialize() { 
    wrongGuesses = [];
    const randomIdx = Math.floor(Math.random() * wordsList.length); //A new word is generated from the wordsList.
    randomWord = wordsList[randomIdx].split('');// The letters in the generated word is split
    guess = randomWord.map(ltr => ltr === ' ' ? ' ' : '_'); //Each letter is placed on a underscore space. 
    gameStatus = null;
    render();
}

function render() {
  renderMessage()
  imageEl.src = `${IMAGES[wrongGuesses.length]}`; //Pulls a new image everytime a wrong guess is made
  secretEl.textContent = guess.join('')
  renderBtn()
}

function renderMessage() { //A message is rendered depending on the game status.
  if (gameStatus === 'W') {
      msgEl.textContent = `Yay, you did it! Santa is on his way back to the North Pole!`;
  } else if (gameStatus === 'L') {
      msgEl.textContent = `Oh no, the word is ${randomWord.join('')} keep trying.  Mrs. Clause is still waiting!`;
  } else {
      msgEl.textContent = `${maxWrong - wrongGuesses.length} Wrong guesses remain, try again!`
  }
}
function renderBtn() { //When a player guesses a letter and clicks on the corresponding button for the letter. 
  letterBtn.forEach(function(btn){
    const ltr = btn.textContent;
    //if wrong guesses includes our letter add class name of wrong
    if (wrongGuesses.includes(ltr)) {
      btn.className = 'wrong';
    } else if (guess.includes(ltr)) {
      btn.className = 'correct';
    } else {
      btn.className = '';
    }
  })
  playBtn.style.visibility = gameStatus ? 'visible' : 'hidden'; //The play button is either visible or hidden depending on the game status
}

function handleChoice(event) { // this function is the letter choice the player picks
  const ltr = event.target.textContent
  if (
    gameStatus || 
    !letterBtn.includes(event.target) || //this IF statement is if the incorrect button is is chosen
    wrongGuesses.includes(ltr) ||
    guess.includes(ltr) 
  ) return;

  if (randomWord.includes(ltr)) { //correct guess
    randomWord.forEach(function(char,idx) {
      if (char === ltr) guess[idx] = ltr 
    });
  } else {
    wrongGuesses.push(ltr)
    
  }
  gameStatus = getGameStatus()
  render();
}  

function getGameStatus() { //
  if (!guess.includes('_')) return 'W';
  if (wrongGuesses.length === maxWrong) return 'L';
  return null;
}


 
