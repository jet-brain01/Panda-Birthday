document.getElementById('submit').addEventListener('click', function() {
    const answerInput = document.getElementById('answer');
    const answer = answerInput.value.trim().toLowerCase(); // Trim and convert to lowercase
    const correctAnswers = ['jaan', 'jalkukre']; // Ensure correct answers are in lowercase
    const lock = document.getElementById('lock');
    const unlock = document.getElementById('unlock');

    if (correctAnswers.includes(answer)) {
        lock.style.display = 'none'; // Hide lock image
        unlock.style.display = 'block'; // Show unlock image
        // Add a delay to show unlock image before redirecting
        setTimeout(() => {
            window.location.href = 'gallery.html'; // Redirect after the delay
        }, 100); // Delay before redirecting (ensure it's longer than animation)
    } else {
        answerInput.classList.add('shake'); // Add shake effect for wrong answer
        // Optionally, remove the shake class after the animation ends
        setTimeout(() => {
            answerInput.classList.remove('shake');
        }, 500); // Time matches the duration of the shake animation
    }
});
