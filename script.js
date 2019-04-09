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

// exploring idea of placing all questions in object
let questionOne = {
    question: 'What does NBA stand for?',
    correctAnswer: 'National Basketball Association',
    wrongOne: 'National Basketball Agency',
    wrongTwo: 'Nationwide Basketball Association',
    wrongThree: 'Nationwide Basketball Agency '
}