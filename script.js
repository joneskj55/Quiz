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

//test