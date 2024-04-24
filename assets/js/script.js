const nameInput = document.getElementById("name");
const startQuizBtn = document.getElementById('start-quiz-btn');
const nextQuestionBtn = document.getElementById('next-btn');
const exitBtn = document.getElementById('exit-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const audioBtn = document.getElementById('volume-btn');
const audioFail = new Audio("assets/sounds/fail.wav");
const audioSuccess = new Audio("assets/sounds/success.wav");
const audioStart = new Audio("assets/sounds/start.wav");
const audioFinal = new Audio("assets/sounds/background.mp3");
audioFinal.volume = 0.4;

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
let playAudio = true;

// Create array for random answers
for (let question of questions) {
    answers.push(question.correctAnswer);
}

function toggleAudio() {
    if (playAudio) {
        playAudio = false;
        audioBtn.children[0].classList.remove('fa-volume-high');
        audioBtn.children[0].classList.add('fa-volume-xmark');
    } else {
        playAudio = true;
        audioBtn.children[0].classList.remove('fa-volume-xmark');
        audioBtn.children[0].classList.add('fa-volume-high');
    }

    audioFail.volume = playAudio ? 1 : 0;
    audioSuccess.volume = playAudio ? 1 : 0;
    audioStart.volume = playAudio ? 1 : 0;
    audioFinal.volume = playAudio ? 0.4 : 0;
}

function stopFinalAudio() {
    audioFinal.pause();
    audioFinal.currentTime = 0;
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
        audioStart.play();
        showScreen('quiz-area');
    } else {
        alert('Please enter your name!');
    }
}

function resetQuiz() {
    // reset final audio
    stopFinalAudio();

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

    stopFinalAudio();
    displayScore(); 
    audioStart.play();
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
        audioSuccess.play();
        console.log('Its correct answer');
    } else {
        audioFail.play();
        console.log('Its wrong answer');
    }

    displayScore();

    if (currentQuestion === questions.length - 1) {
        showScreen('result');
        audioFinal.play();
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
            screen.classList.add("d-none");
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







  