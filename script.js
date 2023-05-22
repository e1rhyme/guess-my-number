'use strict';

// GUESS THE NUMBER GAME
let secretNumber = Math.trunc(Math.random() * 20) + 1,
  score = 20,
  highScore = 0;
// message = document.querySelector('.message');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button click event
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there's no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 💣 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again button click event
document.querySelector('.again').addEventListener('click', () => {
  // Reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  // Set a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset/ hide secret number
  document.querySelector('.number').textContent = '?';
  // Reset game background
  document.querySelector('body').style.backgroundColor = '#222';
  // Resize hidden number boxsize
  document.querySelector('.number').style.width = '15rem';
  // Clear the input field
  document.querySelector('.guess').value = '';
  // Set the default message
  displayMessage('Start guessing...');
});
