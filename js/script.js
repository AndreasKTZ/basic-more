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
    }
    
    // Opdater med det samme
    updateCountdown();
    
    // Opdater hvert sekund
    setInterval(updateCountdown, 1000);
}

// Initialiser når DOM er indlæst
document.addEventListener('DOMContentLoaded', initCountdown);
