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
        questionOne: 'What is the name of the NBA franchise that is located in Toronto?',
        answers: ['Celtics', 'Grizzlies', 'Raptors', 'Timberwolves'],
        correctAnswer: 'Raptors'
    },
    {
        questionTwo: 'Who is the best NBA player of all time?',
        answers: ['Michael Jordan', 'Magic Johnson', 'LeBron James', 'Kareem Abdul-Jabbar'],
        correctAnswer: 'Michael Jordan'
    },
    {
        questionThree: 'What is the name of the NBA franchise that is located in Toronto?',
        answers: ['Celtics', 'Grizzlies', 'Raptors', 'Timberwolves'],
        correctAnswer: 'Raptors'
    },
    {
        questionFour: 'What is the name of the NBA franchise that is located in Toronto?',
        answers: ['Celtics', 'Grizzlies', 'Raptors', 'Timberwolves'],
        correctAnswer: 'Raptors'
    },
    {
        questionFive: 'What is the name of the NBA franchise that is located in Toronto?',
        answers: ['Celtics', 'Grizzlies', 'Raptors', 'Timberwolves'],
        correctAnswer: 'Raptors'
    }
];

const view = {
    displayQuestions: function () {

    }
};

