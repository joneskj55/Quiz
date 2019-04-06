function checkAnswer() {
    const correctAnswer = document.getElementById('correctAnswer');
    const selectedAnswer = document.getElementsByClassName('radioButton').checked;

    if (selectedAnswer === correctAnswer) {
        document.getElementById('result').innerHTML = 'Great job!';
    } else {
        document.getElementById('result').innerHTML = 'Sorry, that is incorrect.';
    }
}

