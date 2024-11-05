// ROCK, PAPER, SCISSORS
const gameContainer = document.getElementById('game-container');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultText = document.getElementById('result');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  };
};

rockButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('rock', computerChoice);
  resultText.textContent = `You chose rock. Computer chose ${computerChoice}. ${result}`;
});

paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('paper', computerChoice);
  resultText.textContent = `You chose paper. Computer chose ${computerChoice}. ${result}`;
});

scissorsButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('scissors', computerChoice);
  resultText.textContent = `You chose scissors. Computer chose ${computerChoice}. ${result}`;
});


//HANGMAN

// Add an array of words for the computer to choose from
const wordList = ["hello", "world", "javascript", " coding", "challenge"];

// Function to get a random word from the word list
function getRandomWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

// Initialize the word to guess with a random word from the word list
let wordToGuess = getRandomWord();

// Initialize the number of guesses remaining
let guessesRemaining = 6;

// Initialize the hangman word display with underscores
let hangmanWord = "_ ".repeat(wordToGuess.length);

document.getElementById("hangman-word").textContent = hangmanWord;
document.getElementById("hangman-guesses").textContent = `Guesses: ${guessesRemaining}`;

document.getElementById("hangman-submit").addEventListener("click", () => {
  const userGuess = document.getElementById("hangman-input").value.toLowerCase();
  document.getElementById("hangman-input").value = "";

  if (wordToGuess.includes(userGuess)) {
    // Update the word display with the correct guess
    const wordArray = wordToGuess.split("");
    const hangmanWordArray = hangmanWord.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === userGuess) {
        hangmanWordArray[i] = userGuess;
      }
    }
    hangmanWord = hangmanWordArray.join(" ");
    document.getElementById("hangman-word").textContent = hangmanWord;
  } else {
    // Decrement guesses remaining
    guessesRemaining--;
    document.getElementById("hangman-guesses").textContent = `Guesses: ${guessesRemaining}`;
  }

  if (guessesRemaining === 0) {
    // Game over, display a message
    document.getElementById("hangman-word").textContent = `Game Over! The word was ${wordToGuess}.`;
  }

  // Check if the user has won
  if (!hangmanWord.includes("_")) {
    document.getElementById("hangman-word").textContent = `Congratulations! You won! The word was ${wordToGuess}.`;
  }
});

// Add a "New Game" button
const newGameButton = document.getElementById("new-game");
newGameButton.addEventListener("click", () => {
  // Reset the game state
  wordToGuess = getRandomWord();
  guessesRemaining = 6;
  hangmanWord = "_ ".repeat(wordToGuess.length);

  // Update the display
  document.getElementById("hangman-word").textContent = hangmanWord;
  document.getElementById("hangman-guesses").textContent = `Guesses: ${guessesRemaining}`;
  document.getElementById("hangman-input").value = "";
});


//QUIZ
