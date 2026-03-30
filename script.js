// Countdown Timer Functionality
const weddingDate = new Date('2026-10-02T00:00:00Z');

function updateCountdown() {
    const now = new Date();
    const timeRemaining = weddingDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'The wedding has started!';
    }
}

const timer = setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();