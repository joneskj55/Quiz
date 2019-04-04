function checkAnswer() {
    const selectedAnswer = document.getElementsByClassName('radioButton').value;
    const correctAnswer = document.getElementById('correctAnswer');

    if (selectedAnswer !== correctAnswer) {
        document.write('Sorry, that is incorrect.')
    } else {
        document.write('Great job!')
    }
    }

// checkAnswer = function() {
// if (selectedAnswer === correctAnswer) {
//     document.write('Great job!')
// } else {
//     document.write('Sorry, that is incorrect.')
// }
// };





