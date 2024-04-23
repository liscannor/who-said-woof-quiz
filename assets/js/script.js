const nameInput = document.getElementById("name");
const startQuizBtn = document.getElementById('start-quiz-btn');


let username = null;

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


function startQuiz() {
    // Checks has been text entered to name-input, if not - displays an alert
    if (nameInput.value !== '') {
        username = nameInput.value;
        nameInput.value = '';

        // Log execution
        console.log('User name: ' + username);    
    } else {
        alert('Please enter your name!');
    }
}


// Attach listeners


// Quiz entry point
startQuizBtn.addEventListener('click', startQuiz); 
