window.onload = function() {
    const movingText = document.getElementById('moving-text');
    let position = window.innerWidth; // Start the text off-screen to the right

    function moveText() {
        position--; // Move the text to the left
        if (position < -movingText.offsetWidth) { // Reset position when the text is out of view
            position = window.innerWidth;
        }
        movingText.style.left = position + 'px'; // Apply new position to the text
        requestAnimationFrame(moveText); // Continuously call the moveText function for smooth animation
    }

    moveText(); // Start the animation
};
