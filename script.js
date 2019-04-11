function checkAnswer() {
    const correctAnswer = document.getElementById('correctAnswer').value;
    const selectedAnswer = $('input[type="radio"][name="teamName"]:checked').val();

    if (selectedAnswer === correctAnswer) {
        document.getElementById('result').innerHTML = 'Great job!';
        console.log(correctAnswer + ' ' + selectedAnswer);
    } else {
        document.getElementById('result').innerHTML = 'Sorry, that is incorrect.';
        console.log(correctAnswer + ' ' + selectedAnswer);
    }
}

const quiz = [
    {
        question: 'What is the name of the NBA franchise that is located in Toronto?',
        answers: ['Celtics', 'Grizzlies', 'Raptors', 'Timberwolves'],
        correctAnswer: 'Raptors'
    },
    {
        question: 'Who is the best NBA player of all time?',
        answers: ['Michael Jordan', 'Magic Johnson', 'LeBron James', 'Kareem Abdul-Jabbar'],
        correctAnswer: 'Michael Jordan'
    },
    {
        question: 'What is the name of the NBA franchise that is located in Toronto?',
        answers: ['Celtics', 'Grizzlies', 'Raptors', 'Timberwolves'],
        correctAnswer: 'Raptors'
    },
    {
        question: 'What is the name of the NBA franchise that is located in Toronto?',
        answers: ['Celtics', 'Grizzlies', 'Raptors', 'Timberwolves'],
        correctAnswer: 'Raptors'
    },
    {
        question: 'What is the name of the NBA franchise that is located in Toronto?',
        answers: ['Celtics', 'Grizzlies', 'Raptors', 'Timberwolves'],
        correctAnswer: 'Raptors'
    }
];

const view = {
    displayQuestions: function () {
        const questionP = document.querySelector('p');
        quiz.question.innerHTML = '';
    }
};

