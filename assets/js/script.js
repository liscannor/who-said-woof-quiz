const nameInput = document.getElementById("name");
const startQuizBtn = document.getElementById('start-quiz-btn');


let username = null;



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
