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
    const randomIdx = Math.floor(Math.random() * wordsList.length);
    randomWord = wordsList[randomIdx].split('');
    guess = randomWord.map(ltr => ltr === ' ' ? ' ' : '_');
    gameStatus = null;
    render();
}

function render() {
  renderMessage()
  // imageEl.src = `${IMAGES[wrongGuesses.length]}`;
  secretEl.textContent = guess.join('')
  renderBtn()
}

function renderMessage() {
  if (gameStatus === 'W') {
      msgEl.textContent = `Yay, you did it! Santa is on his way bacl to the North Pole!`;
  } else if (gameStatus === 'L') {
      msgEl.textContent = `Oh no, the word is ${randomWord.join('')} keep trying.  Mrs. Clause is still waiting!`;
  } else {
      msgEl.textContent = `${maxWrong - wrongGuesses.length + 1} Wrong guesses remain, try again!`
  }
}
function renderBtn() {
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
  playBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function handleChoice(event) {
  const ltr = event.target.textContent
  console.log(ltr)
  if (
    gameStatus ||
    !letterBtn.includes(event.target) ||
    wrongGuesses.includes(ltr) ||
    guess.includes(ltr)  
  ) return;

  if (randomWord.includes(ltr)) {
    //correct guess
    randomWord.forEach(function(char,idx) {
      if (char === ltr) guess[idx] = ltr 
    });
  } else {
    wrongGuesses.push(ltr)
    
  }
  gameStatus = getGameStatus()
  render();
}  

function getGameStatus() {
  if (!guess.includes('_')) return 'W';
  //if wrong guesses.length is > maxWrongGuesses return 'L'
  if (wrongGuesses.length > maxWrong) return 'L';
  return null;
}
 
