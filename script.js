// the questions used for quiz

const questions = [
    {
        question: "What acid is used in higher concentrations to clean concrete, industrial equipment, metal, and water?",
        answers: [
            { text: "Glycolic acid", correct: true },
            { text: "Sodium hydroxide lye", correct: false },
            { text: "White vinegar", correct: false },
            { text: "Soap", correct: false }
        ]
    },
    {
        question: "What is lamb meat called?",
        answers: [
            { text: "Veil", correct: false },
            { text: "Mutton", correct: true },
            { text: "Beef", correct: false },
            { text: "Steak", correct: false }
        ]
    },
    {
        question: "What is Dentophobia?",
        answers: [
            { text: "Fear of birds", correct: false },
            { text: "Fear of dinosaurs", correct: false },
            { text: "Fear of dentists", correct: true },
            { text: "Fear of driving", correct: false }
        ]
    },
    {
        question: "Cynicism Is a word that originated from which language?",
        answers: [
            { text: "Latin", correct: false },
            { text: "Italian", correct: false },
            { text: "Spanish", correct: false },
            { text: "Greek", correct: true }
        ]
    },
    {
        question: "Every minute you shed over how many dead skin cells?",
        answers: [
            { text: "30,000", correct: true },
            { text: "10,000", correct: false },
            { text: "76,000", correct: false },
            { text: "5,000", correct: false }
        ]
    }
];

// variables

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainer = document.getElementById('question-container');
const theQuestions = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

let currentScore = 0;
let score = 0;
let shuffledQuestions, currentQuestionIndex;

// starting the game

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    nextQuestion();
}

// write comment about managing set up of questions and visibility

function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    theQuestions.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    clearUp(document.body);
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// write comment about answers and button visibility after choosing an answer

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    settingStatus(document.body);
    Array.from(answerButtons.children).forEach(button => {
        settingStatus(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

// confirming whether answer is correct/incorrect and clearing up for the next question

function settingStatus(element, correct) {
    clearUp(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearUp(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

// will add these functions later on!

function score() {
    // add visible score function
}

function gameTimer() {
    // add visible timer with 15 sec countdown
}