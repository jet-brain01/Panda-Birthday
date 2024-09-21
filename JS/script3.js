document.addEventListener('DOMContentLoaded', () => {
    let currentSound = null; // Track the currently playing sound

    function stopCurrentSound() {
        if (currentSound) {
            currentSound.pause(); // Stop the current sound
            currentSound.currentTime = 0; // Reset the playback time
        }
    }

    function playSound(id) {
        stopCurrentSound(); // Stop any currently playing sound

        const sound = document.getElementById(id);
        if (sound) {
            console.log(`Playing sound: ${id}`);
            sound.play();
            currentSound = sound; // Update the currently playing sound
        } else {
            console.log(`No sound found with id: ${id}`);
        }
    }

    function setupColorBox(id, soundId) {
        const colorBox = document.getElementById(id);
        if (colorBox) {
            colorBox.addEventListener('click', function() {
                this.style.backgroundColor = getRandomColor();
                playSound(soundId);
            });
        } else {
            console.log(`No color box found with id: ${id}`);
        }
    }

    function setupPageTransitions() {
        // Stop sound on page flip
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                stopCurrentSound(); // Stop sound when switching pages
            });
        });
    }
;
    setupColorBox('color-box-page2', 'sound2');
    setupColorBox('color-box-page3', 'sound3');
    setupColorBox('color-box-page4', 'sound4');
    setupPageTransitions(); // Set up page transition handlers

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
  