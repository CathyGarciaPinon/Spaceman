/*----- constants -----*/
Alphabet board / grid
Background colors / (woods theme)
Title of game

/*----- state variables -----*/
How many guesses have been made.
How many remaining guesses are left.
Hint / phrase

/*----- cached elements  -----*/
Message "Winner" or "Try Again" announcement if player wins or loses.
Hint phrases (at least 5 for 5 different games)

/*----- event listeners -----*/
listener for play now button
listener for clicking the alphabet board
listener when clicking the reset button

/*----- functions -----*/
When the player clicks on play now button, a hint phrase will appear on the top left corner.  
Each time the player choses a correct letter the letter will be placed in the letter space.
When an incorrect letter is chosen, the piece of the bear falls off and the remaining guesses on the to p left corner will decrease.
After 5 unsuccessful guesses, the banner across the top will say "Sorry try again!".  If the player guesses all the letters correcty, the banner will say "Winner!". 