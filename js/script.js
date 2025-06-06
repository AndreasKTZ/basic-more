// Nedtælling
function initCountdown() {
    // Indstil måldato her (ÅÅÅÅ, MM-1, DD, TT, MM, SS)
    // Bemærk: Måned er 0-indekseret (0 = januar, 11 = december)
    const targetDate = new Date(2025, 5, 10, 23, 59, 59); // 10. juni 2025 kl. 23:59:59
    
    const timerElement = document.querySelector('.timer');
    
    if (!timerElement) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
        
        // Hvis nedtællingen er færdig
        if (distance < 0) {
            timerElement.textContent = "00:00:00:00";
            return;
        }
        
        // Beregn tidsenheder
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Formatér med førende nuller
        const formattedDays = String(days).padStart(2, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        
        // Opdater timer-displayet
        timerElement.textContent = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        
        // Opdater store countdown elementer hvis de findes
        const daysLarge = document.getElementById('days-large');
        const hoursLarge = document.getElementById('hours-large');
        const minutesLarge = document.getElementById('minutes-large');
        const secondsLarge = document.getElementById('seconds-large');
        
        if (daysLarge) daysLarge.textContent = formattedDays;
        if (hoursLarge) hoursLarge.textContent = formattedHours;
        if (minutesLarge) minutesLarge.textContent = formattedMinutes;
        if (secondsLarge) secondsLarge.textContent = formattedSeconds;
    }
    
    // Opdater med det samme
    updateCountdown();
    
    // Opdater hvert sekund
    setInterval(updateCountdown, 1000);
}

// Topbar beskeder
function initTopbarMessages() {
    const messages = [
        "Gratis levering ved køb over 299,-",
        "Kun 2 dage tilbage af ugens fund",
        "Nyt parti af designermøbler ankommet",
        "Besøg vores nye butik i Ballerup"
    ];
    
    let currentIndex = 0;
    let autoInterval;
    
    const barContent = document.querySelector('.bar-content');
    const leftButton = document.querySelector('.bar-control.left');
    const rightButton = document.querySelector('.bar-control.right');
    
    if (!barContent) return;
    
    function updateMessage() {
        barContent.textContent = messages[currentIndex];
    }
    
    function nextMessage() {
        currentIndex = (currentIndex + 1) % messages.length;
        updateMessage();
    }
    
    function prevMessage() {
        currentIndex = (currentIndex - 1 + messages.length) % messages.length;
        updateMessage();
    }
    
    function startAutoRotation() {
        stopAutoRotation();
        autoInterval = setInterval(nextMessage, 10000); // 10 sekunder
    }
    
    function stopAutoRotation() {
        if (autoInterval) {
            clearInterval(autoInterval);
            autoInterval = null;
        }
    }
    
    function restartAutoRotation() {
        stopAutoRotation();
        setTimeout(startAutoRotation, 2000); // Genstart efter 2 sekunder
    }
    
    // Event listeners for knapper
    if (leftButton) {
        leftButton.addEventListener('click', () => {
            prevMessage();
            restartAutoRotation();
        });
    }
    
    if (rightButton) {
        rightButton.addEventListener('click', () => {
            nextMessage();
            restartAutoRotation();
        });
    }
    
    // Initialiser
    updateMessage();
    startAutoRotation();
    
    // Pause automatisk rotation når musen er over topbar
    const topbar = document.querySelector('.topbar');
    if (topbar) {
        topbar.addEventListener('mouseenter', stopAutoRotation);
        topbar.addEventListener('mouseleave', startAutoRotation);
    }
}

// Initialiser når DOM er indlæst
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initTopbarMessages();
});
