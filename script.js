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
        question: 'Who coached the Chicago Bulls in 1993?',
        answers: ['Pat Riley', 'Phil Jackson', 'Tyron Lue', 'Greg Popovich'],
        correctAnswer: 'Phil Jackson'
    },
    {
        question: 'Who is the NBA all-time leader in assists?',
        answers: ['Jason Kidd', 'Mark Jackson', 'Steve Nash', 'John Stockton'],
        correctAnswer: 'John Stockton'
    },
    {
        question: 'Which NBA player has the most championship rings?',
        answers: ['Bill Russell', 'Kareem Abdul-Jabbar', 'Michael Jordan', 'Magic Johnson'],
        correctAnswer: 'Bill Russell'
    }
];

// get random question
const keys = Object.keys(quiz);
const randomIndex = keys[Math.floor(Math.random() * keys.length)];
const item = quiz[randomIndex];
const randomQuestion = item.question;

// get values starting point (not complete)
const values = Object.values(quiz);
console.log(values[0]);

function displayQuestion() {
    document.getElementById('question').innerHTML = randomQuestion;
    // display corresponding answers to random question
}

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

