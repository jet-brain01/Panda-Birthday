document.addEventListener("DOMContentLoaded", function() {
    const bulbs = [
        { id: 'bulb1', messageId: 'message1' },
        { id: 'bulb2', messageId: 'message2' },
        { id: 'bulb3', messageId: 'message3' },
        { id: 'bulb4', messageId: 'message4' },
        { id: 'bulb5', messageId: 'message5' },
        { id: 'bulb6', messageId: 'message6' },
        { id: 'bulb7', messageId: 'message7' },
        { id: 'bulb8', messageId: 'message8' }
    ];

    let currentMessageIndex = 0;

    bulbs.forEach((bulb, index) => {
        const bulbElement = document.getElementById(bulb.id);
        const messageElement = document.getElementById(bulb.messageId);

        bulbElement.addEventListener('click', function() {
            if (currentMessageIndex === index) {  // Ensure bulbs are clicked in order
                messageElement.style.display = 'block';
                messageElement.style.opacity = '0';  // Start with hidden opacity
                setTimeout(() => {
                    messageElement.style.opacity = '1';  // Fade in the message
                }, 50);
                currentMessageIndex++;
                if (currentMessageIndex === bulbs.length) {
                    launchConfetti();  // Launch confetti when the last message is revealed
                }
            }
        });
    });

    // Confetti effect
    function launchConfetti() {
        const confettiSettings = { target: 'confetti-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
});
