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
const disableGame = function (bool) {
  rollDiceBtn.disabled = bool;
  holdScoreBtn.disabled = bool;
};
const diceDisplay = function (value) {
  // This function sets the display for the dice's picture
  theDice.style.display = value;
};
const resetGame = function () {
  // Function resets the game when the "New Game" button is clicked
  document.querySelector('.player--active').classList.remove('player--winner');
  if (playerOneSect.classList.contains('player--active')) {
    playerOneSect.classList.remove('player--active');
    playerZeroSect.classList.add('player--active');
  }
  diceDisplay('none');
  for (let i = 0; i < overallScores.length; i++) {
    // console.log(overallScores[i]);
    overallScores[i].textContent = '0';
    currentScores[i].textContent = '0';
  }
  disableGame(false);
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
const playerWon = function (player) {
  player.classList.add('player--winner');
  disableGame(true);
  for (let i = 0; i < currentScores.length; i++) {
    currentScores[i].textContent = '0';
  }
};

const holdBtnFunc = function () {
  if (playerZeroSect.classList.contains('player--active')) {
    pZeroOverallScore.textContent =
      +pZeroOverallScore.textContent + +pZeroCurrentScore.textContent;
    +pZeroOverallScore.textContent >= 100
      ? playerWon(document.querySelector('.player--active'))
      : switchPlayer();
  } else {
    pOneOverallScore.textContent =
      +pOneOverallScore.textContent + +pOneCurrentScore.textContent;
    +pOneOverallScore.textContent >= 100
      ? playerWon(document.querySelector('.player--active'))
      : switchPlayer();
  }
};

newGameBtn.addEventListener('click', resetGame);
rollDiceBtn.addEventListener('click', diceBtnFunc);
holdScoreBtn.addEventListener('click', holdBtnFunc);
