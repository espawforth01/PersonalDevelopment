let questions = [
    {
        question: "What is the purpose of the 'alt' attribute in an HTML 'img' tag?",
        options: ["To specify the image source", "To provide a text description of the image for accessibility purposes", "To set the image width and height", "To add a hyperlink to the image"],
        answer: 1
    },
    {
        question: "What is the difference between the 'margin' and 'padding' properties in CSS?",
        options: ["'Margin' is used to add space between elements, while 'padding' is used to add space between an element's content and its border", "'Margin' is used to add space between an element's content and its border, while 'padding' is used to add space between elements", "'Margin' and 'padding' are interchangeable terms", "'Margin' is used for horizontal spacing, while 'padding' is used for vertical spacing"],
        answer: 0
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["To refer to the global object", "To refer to the current function being executed", "To refer to the object that a method belongs to", "To refer to the DOM element that triggered an event"],
        answer: 2
    },
    {
        question: "What is the primary purpose of HTTPS (Hypertext Transfer Protocol Secure)?",
        options: ["To compress data transmitted between the client and server", "To encrypt data transmitted between the client and server", "To cache frequently requested resources", "To redirect users to a different URL"],
        answer: 1
    },
    {
        question: "What is the purpose of using media queries in CSS?",
        options: ["To apply different styles based on the user's screen resolution", "o apply different styles based on the user's device type (e.g. desktop, mobile, tablet)", "To apply different styles based on the user's browser type", "To apply different styles based on the user's screen orientation (e.g. portrait, landscape)"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question").innerHTML = questions[currentQuestion].question;
document.getElementById("option1").innerHTML = questions[currentQuestion].options[0];
document.getElementById("option2").innerHTML = questions[currentQuestion].options[1];
document.getElementById("option3").innerHTML = questions[currentQuestion].options[2];
document.getElementById("option4").innerHTML = questions[currentQuestion].options[3];

document.getElementById("submit").addEventListener("click", checkAnswer);
document.getElementById("next").addEventListener("click", nextQuestion);

function checkAnswer() {
    let userAnswer = document.querySelector("button.option.active");
    if (userAnswer) {
        let correctAnswer = questions[currentQuestion].answer;
        if (userAnswer.id === `option${correctAnswer + 1}`) {
            score++;
            userAnswer.classList.add("correct");
        } else {
            userAnswer.classList.add("incorrect");
        }
        document.getElementById("result").innerHTML = `You answered ${userAnswer.innerHTML}.`;
        document.getElementById("score").innerHTML = `Your current score is ${score} out of ${currentQuestion + 1}.`;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        document.getElementById("question").innerHTML = "Quiz finished!";
        document.getElementById("options").style.display = "none";
        document.getElementById("submit").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("result").innerHTML = `Your final score is ${score} out of ${questions.length}.`;
    } else {
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        document.getElementById("option1").innerHTML = questions[currentQuestion].options[0];
        document.getElementById("option2").innerHTML = questions[currentQuestion].options[1];
        document.getElementById("option3").innerHTML = questions[currentQuestion].options[2];
        document.getElementById("option4").innerHTML = questions[currentQuestion].options[3];
        document.querySelectorAll("button .option").forEach((option) => {
            option.classList.remove("correct", "incorrect", "active");
        });
    }
}

document.querySelectorAll("button.option").forEach((option) => {
    option.addEventListener("click", () => {
        document.querySelectorAll("button.option").forEach((otherOption) => {
            otherOption.classList.remove("active");
        });
        option.classList.add("active");
    });
});