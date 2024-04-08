'use strict';

const playerZeroSect = document.querySelector('.player--0');
const playerOneSect = document.querySelector('.player--1');
const pZeroOverallScore = document.querySelector('#score--0');
const pOneOverallScore = document.querySelector('#score--1');
const pZeroCurrentScore = document.querySelector('#current--0');
const pOneCurrentScore = document.querySelector('#current--1');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const theDice = document.querySelector('.dice');

const resetGame = function () {
  if (playerOneSect.classList.contains('.player--active')) {
    playerOneSect.classList.remove('.player--active');
    playerZeroSect.classList.add('.player--active');
  }
  theDice.style.display = 'none';
  pZeroOverallScore.textContent = '0';
  pOneOverallScore.textContent = '0';
  pZeroCurrentScore.textContent = '0';
  pOneCurrentScore.textContent = '0';
};

newGameBtn.addEventListener('click', resetGame);
