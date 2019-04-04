let selectedAnswer = document.getElementsByClassName('radioButton').valueOf();
const correctAnswer = document.getElementById('correctAnswer').addEventListener('click', function() {});

checkAnswer = function() {
    if (selectedAnswer !== correctAnswer) {
        document.write('Sorry, that is incorrect.')
    } else {
        document.write('Great job!')
    }
    };

// checkAnswer = function() {
// if (selectedAnswer === correctAnswer) {
//     document.write('Great job!')
// } else {
//     document.write('Sorry, that is incorrect.')
// }
// };





