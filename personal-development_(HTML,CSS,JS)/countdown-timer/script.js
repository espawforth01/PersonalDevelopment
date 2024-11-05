let countdown;
let totalTime = 0;
let isPaused = false;

// Create an audio element for the sound effect
const endSound = new Audio('alarm.mp3');

document.getElementById('start-button').addEventListener('click', function() {
    if (isPaused) return; // Prevent starting if paused

    let minutes = parseInt(document.getElementById('minutes').value) || 0;
    let seconds = parseInt(document.getElementById('seconds').value) || 0;
    totalTime = minutes * 60 + seconds;

    const timerDisplay = document.getElementById('timer-display');

    countdown = setInterval(function() {
        if (totalTime <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
            endSound.play(); // Play the sound effect
            return;
        }

        totalTime--;
        const displayMinutes = Math.floor(totalTime / 60);
        const displaySeconds = totalTime % 60;

        timerDisplay.textContent = 
            (displayMinutes < 10 ? '0' + displayMinutes : displayMinutes) + ':' + 
            (displaySeconds < 10 ? '0' + displaySeconds : displaySeconds);
    }, 1000);
});

document.getElementById('pause-button').addEventListener('click', function() {
    if (countdown) {
        clearInterval(countdown);
        isPaused = true;
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    clearInterval(countdown);
    totalTime = 0;
    isPaused = false;
    document.getElementById('timer-display').textContent = "00:00";
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
});