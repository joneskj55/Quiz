function checkAnswer() {
    const selectedAnswer = document.getElementsByClassName('radioButton').checked;
    const correctAnswer = document.getElementById('correctAnswer');

    if (selectedAnswer === correctAnswer) {
        document.write('Great Job!')
    } else {
        document.write('Sorry, that is incorrect')
    }
}





