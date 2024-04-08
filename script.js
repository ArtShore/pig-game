'use strict';

// Elements that i need are listed and grabbed from the DOM below
const playerZeroSect = document.querySelector('.player--0');
const playerOneSect = document.querySelector('.player--1');
const pZeroOverallScore = document.querySelector('#score--0');
const pOneOverallScore = document.querySelector('#score--1');
const pZeroCurrentScore = document.querySelector('#current--0');
const pOneCurrentScore = document.querySelector('#current--1');
const overallScores = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const theDice = document.querySelector('.dice');

const dices = {
  // This objects contain the address for different dice rolls
  1: './dice-1.png',
  2: './dice-2.png',
  3: './dice-3.png',
  4: './dice-4.png',
  5: './dice-5.png',
  6: './dice-6.png',
};
let randomDiceNum;

// const rollTheDice = function () {
//   randomDiceNum = Math.floor(Math.random() * (7 - 1) + 1);
//   return randomDiceNum;
// };
// rollTheDice();
// console.log(dices[randomDiceNum]);
// theDice.setAttribute('src', dices[randomDiceNum]);
// console.log(theDice.src);

const switchPlayer = function () {
  if (playerZeroSect.classList.contains('player--active')) {
    pZeroCurrentScore.textContent = 0;
    playerZeroSect.classList.remove('player--active');
    playerOneSect.classList.add('player--active');
  } else {
    pOneCurrentScore.textContent = 0;
    playerOneSect.classList.remove('player--active');
    playerZeroSect.classList.add('player--active');
  }
};

const diceDisplay = function (value) {
  // This function sets the display for the dice's picture
  theDice.style.display = value;
};
const resetGame = function () {
  // Function resets the game when the "New Game" button is clicked
  if (playerOneSect.classList.contains('player--active')) {
    playerOneSect.classList.remove('player--active');
    playerZeroSect.classList.add('player--active');
  }
  diceDisplay('none');
  overallScores.textContent = '0';
  currentScores.textContent = '0';
};

const diceBtnFunc = function () {
  // This function defines the roll dice button
  randomDiceNum = Math.floor(Math.random() * (7 - 1) + 1);
  theDice.setAttribute('src', dices[randomDiceNum]);
  diceDisplay('inline-block');
  if (playerZeroSect.classList.contains('player--active')) {
    pZeroCurrentScore.textContent =
      +pZeroCurrentScore.textContent + randomDiceNum;
  } else {
    pOneCurrentScore.textContent =
      +pOneCurrentScore.textContent + randomDiceNum;
  }
  if (randomDiceNum === 1) {
    switchPlayer();
  }
};

newGameBtn.addEventListener('click', resetGame);
rollDiceBtn.addEventListener('click', diceBtnFunc);
