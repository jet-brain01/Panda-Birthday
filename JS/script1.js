// script1.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const balloonImages = ['Items/b1.png', 'Items/b2.png', 'Items/b3.png', 'Items/b4.png', 'Items/b5.png', 'Items/b6.png', 'Items/b7.png', 'Items/b8.png', 'Item/b9.png', 'Items/b10.png'];

    function createBalloon(index) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundImage = `url('${balloonImages[index]}')`;

        // Randomize starting position and movement
        const startX = Math.random() * 100;
        const startY = Math.random() * 100 + 100; // Start further below the viewport
        const endX = Math.random() * 100;
        const endY = -Math.random() * 300 - 100; // Move further up from the viewport

        balloon.style.left = `${startX}%`;
        balloon.style.bottom = `${startY}px`;
        balloon.style.transform = `translateX(${startX - 50}%)`; // Adjust starting horizontal position
        balloon.style.animationDuration = `${Math.random() * 6 + 6}s`; // Randomize speed between 6s and 12s

        // Set keyframes dynamically for each balloon
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = `
            @keyframes float${index} {
                0% {
                    transform: translateY(${startY}px) translateX(${startX - 50}%);
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(${endY}px) translateX(${endX - 50}%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styleSheet);

        balloon.style.animationName = `float${index}`;

        container.appendChild(balloon);
    }

    for (let i = 0; i < 30; i++) {
        createBalloon(i % balloonImages.length);
    }
});
