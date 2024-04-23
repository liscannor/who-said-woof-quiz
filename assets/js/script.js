const nameInput = document.getElementById("name");
const startQuizBtn = document.getElementById('start-quiz-btn');
const nextQuestionBtn = document.getElementById('next-btn');
const exitBtn = document.getElementById('exit-btn');
const playAgainBtn = document.getElementById('play-again-btn');

const questions = [
    {
        image: 'assets/images/corgi.webp',
        correctAnswer: 'Corgi'
    },
    {
        image: 'assets/images/pit-bull.webp',
        correctAnswer: 'Pit Bull'
    },
    {
        image: 'assets/images/beagle.webp',
        correctAnswer: 'Beagle'
    },
    {
        image: 'assets/images/boxer.webp',
        correctAnswer: 'Boxer'
    },
    {
        image: 'assets/images/bichon-frise.webp',
        correctAnswer: 'Bichon-frise'
    },
    {
        image: 'assets/images/retriever.webp',
        correctAnswer: 'Retriever'  
    },
    {
        image: 'assets/images/husky.webp',
        correctAnswer: 'Husky'  
    },
    {
        image: 'assets/images/spitz.webp',
        correctAnswer: 'Spitz'  
    },
    {
        image: 'assets/images/german-shepherd-dog.webp',
        correctAnswer: 'Germ.-shepherd'  
    },
    {
        image: 'assets/images/chow-chow.webp',
        correctAnswer: 'Chow-chow'  
    }
];

let answers = [];
let username = null;
let currentQuestion = 0;
let currentAnswer = null;
let correctAnswers = 0;

// Create array for random answers
for (let question of questions) {
    answers.push(question.correctAnswer);
}

function nextQuestion() {
    if (currentAnswer === null) {
        alert('Please select your answer!');
    } else {
        processAnswer();
    }
}

function startQuiz() {
    // Checks has been text entered to name-input, if not - displays an alert
    if (nameInput.value !== '') {
        username = nameInput.value;
        nameInput.value = '';

        // Log execution
        console.log('User name: ' + username);    
        showScreen('quiz-area');
    } else {
        alert('Please enter your name!');
    }
}

function resetQuiz() {
    // reset values
    username = null;
    currentQuestion = 0;
    currentAnswer = null;
    correctAnswers = 0;

    // show start screen
    shuffle(questions);
    displayScore();
    showScreen('start-quiz');
}

function playAgain() {
    currentQuestion = 0;
    currentAnswer = null;
    correctAnswers = 0;

    displayScore(); 
    showScreen('quiz-area');
}

function generateResult() {
    document.getElementById('username-result').innerText = username;
}

function displayScore() {
    const placeholders = document.getElementsByClassName('score-digits');

    for (let placeholder of placeholders) {
        placeholder.innerText = correctAnswers;
    }
}

function processAnswer() {
    // validate selected answer
    if (currentAnswer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
        console.log('Its correct answer');
    } else {
        console.log('Its wrong answer');
    }

    displayScore();

    if (currentQuestion === questions.length - 1) {
        showScreen('result');
        return;
    }

    currentQuestion++;
    generateQuizQuestion();
}

function generateQuizQuestion() {
    // reset previously choosed answer
    currentAnswer = null;

    // display quiz image
    document.getElementById('question').innerHTML = '<img src="' + questions[currentQuestion].image + '" class="w-100" />';
    
    // Get random 3 answers for question, exclude correct one 
    // Source for array clone: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const answersCopy = [...answers];
    answersCopy.splice(answersCopy.indexOf(correctAnswer), 1);
    shuffle(answersCopy);

    // Compose array of 3 wrong answers and 1 correct answers
    const selectedAnswers = [
        answersCopy[0],
        answersCopy[1],
        answersCopy[2],
        questions[currentQuestion].correctAnswer
    ];

    shuffle(selectedAnswers);

    // display buttons
    document.getElementById('answers').innerHTML = '';

    for (let answer of selectedAnswers) {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-secondary', 'answer');
        button.innerText = answer;
        button.addEventListener('click', function() {
            currentAnswer = answer;    
            
            const buttons = document.getElementsByClassName('answer');
            for (let button of buttons) {
                button.classList.remove('btn-warning');
            }

            button.classList.add('btn-warning');

            // Log execution
            console.log('User selected answer: ', answer);  
        });
        document.getElementById('answers').appendChild(button);
    }
}

function generateScreen(screenId) {
    if (screenId === 'quiz-area') {
        generateQuizQuestion();
    }

    if (screenId === 'result') {
        generateResult();
    }
}

function showScreen(screenId)
{
    // Hide all screens
    for (let screen of document.getElementsByClassName('screen')) {
        if (!screen.classList.contains("d-none")) {
            screen.classList.add("d-none")
        }
    }

    // Display specified screen
    document.getElementById(screenId).classList.remove("d-none");

    generateScreen(screenId);

    // Log execution
    console.log('Show screen: ', screenId);
}

// Attach listeners

// Exit from quiz
exitBtn.addEventListener('click', resetQuiz); 

// Replay quiz
playAgainBtn.addEventListener('click', playAgain); 

// Quiz entry point
startQuizBtn.addEventListener('click', startQuiz); 

// Process answer
nextQuestionBtn.addEventListener('click', nextQuestion); 

// Toggle audio
audioBtn.addEventListener('click', toggleAudio); 

// Shuffle questions, init things
resetQuiz();







  