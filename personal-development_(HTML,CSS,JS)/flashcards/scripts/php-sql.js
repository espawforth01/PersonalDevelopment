// Define flashcards data
const flashcards = [
    // Basic Questions
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    // Intermediate Questions
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    // Hard Questions
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    // Exam Style Questions
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    // Blank Template
    { question: "BLANK", answer: "BLANK" },
    // Add more flashcards here...
];

// Initialize variables
let currentCardIndex = 0;
let correctAnswers = 0;

// Get HTML elements
const flashcard = document.querySelector(".flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const flipButton = document.getElementById("flip-button");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

// Function to display current flashcard
function displayCurrentCard() {
    questionElement.textContent = flashcards[currentCardIndex].question;
    answerElement.textContent = flashcards[currentCardIndex].answer;
}

// Function to flip the flashcard
function flipCard() {
    flashcard.classList.toggle("flip");
}

// Function to check if answer is correct
function checkAnswer() {
    // Assuming the user has answered correctly for this example
    correctAnswers++;
    resultElement.textContent = `Correct! You have answered ${correctAnswers} out of ${flashcards.length} correctly.`;
}

// Function to go to the next flashcard
function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0;
    }
    displayCurrentCard();
    flashcard.classList.remove("flip");
}

// Event listeners
flipButton .addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);

// Display the first flashcard
displayCurrentCard();