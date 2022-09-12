'use strict';

//selektovanje elemenata
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //getElementById je samo drugi nacin selekcije elementa (ista svrha kao i querySelector)
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
