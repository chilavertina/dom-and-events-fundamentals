'use strict';

//selektovanje elemenata
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //getElementById je samo drugi nacin selekcije elementa (ista svrha kao i querySelector)
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--new');
const btnNew = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//funkcionalnost za bacanje kocke
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice; //currentScore = currentScore + dice;
    current0El.textContent = currentScore;
  } else {
  }
});
