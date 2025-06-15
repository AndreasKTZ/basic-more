// Hero Slides Data
const heroSlides = [
    {
        id: 'weekly-deal',
        badge: {
            icon: 'hgi-timer-02',
            text: 'Ugens fund'
        },
        heading: 'Skab stemning med denne uges helt særlige fund',
        description: 'Denne uge har vi samlet helt særlige varer til dig. Alt fra smukke vaser til elegante lysestager. Perfekt til at skabe hygge i hjemmet.',
        ctaText: 'Gå på opdagelse',
        ctaIcon: 'hgi-arrow-right-02',
        ctaLink: 'weekly.html',
        subText: 'OBS! Kun ganske få tilbage.',
        subIcon: 'hgi-alert-circle',
        backgroundImage: 'img/slides/weekly.png',
        overlay: false,
        alignment: 'left'
    },
    {
        id: 'inspiration',
        badge: {
            icon: 'hgi-idea',
            text: 'Mere stil. Mindre fyld.'
        },
        heading: 'Stilhed, varme og materialer med karakter',
        description: 'Vi har samlet inspiration til et hjem med ro i farverne og dybde i overfladerne. Naturtoner, træ og taktile detaljer gør rummet levende.',
        ctaText: 'Se udvalget',
        ctaIcon: 'hgi-arrow-right-02',
        ctaLink: '#',
        subText: '',
        subIcon: '',
        backgroundImage: 'img/slides/inspiration.jpg',
        overlay: true,
        alignment: 'center'
    },
    {
        id: 'summer-sale',
        badge: {
            icon: 'hgi-sun-01',
            text: 'Sommerkollektion'
        },
        heading: 'Bring sommerstemningen ind i hjemmet',
        description: 'Shop vores sommerkollektion med fantastiske priser på alt fra møbler til lys og små detaljer.',
        ctaText: 'Shop nu',
        ctaIcon: 'hgi-arrow-right-02',
        ctaLink: '#',
        subText: 'Sælger snart ud!',
        subIcon: 'hgi-alert-circle',
        backgroundImage: 'img/slides/outdoor-space.jpg',
        overlay: true,
        alignment: 'center'
    }
];

class HeroSlider {
    constructor() {
        this.currentSlideIndex = 0;
        this.slides = heroSlides;
        this.autoSlideInterval = null;
        this.slideInterval = 8000; // 8 sekunder
        this.isTransitioning = false;
        
        this.heroElement = document.querySelector('.hero');
        this.container = document.querySelector('.hero .container');
        
        if (!this.heroElement || !this.container) {
            console.error('Hero elements not found');
            return;
        }
        
        this.init();
    }
    
    init() {
        try {
            this.createSliderStructure();
            this.createSlideIndicators();
            this.showSlide(0);
            this.startAutoSlide();
            this.setupEventListeners();
        } catch (error) {
            console.error('Hero slider initialization failed:', error);
        }
    }
    
    createSliderStructure() {
        // Gem eksisterende indhold struktur og opdater den
        const existingCountdown = this.container.querySelector('.hero-countdown');
        const existingContent = this.container.querySelector('.hero-content');
        const existingCta = this.container.querySelector('.hero-cta');
        
        // Hvis eksisterende struktur ikke passer, opret den
        if (!existingCountdown || !existingContent || !existingCta) {
            this.container.innerHTML = `
                <div class="hero-slide-content">
                    <div class="hero-countdown"></div>
                    <div class="hero-content">
                        <h1></h1>
                        <p></p>
                    </div>
                    <div class="hero-cta">
                        <a href="#" class="cta-button btn-primary">
                            <span class="cta-text"></span>
                            <i class="cta-icon"></i>
                        </a>
                        <span class="hero-cta-text">
                            <i class="sub-icon"></i>
                            <span class="sub-text"></span>
                        </span>
                    </div>
                </div>
            `;
        } else {
            // Indpak eksisterende indhold i slide content wrapper
            const slideContent = document.createElement('div');
            slideContent.className = 'hero-slide-content';
            slideContent.appendChild(existingCountdown);
            slideContent.appendChild(existingContent);
            slideContent.appendChild(existingCta);
            this.container.appendChild(slideContent);
        }
        
        // Tilføj navigation
        const navigation = document.createElement('div');
        navigation.className = 'hero-navigation';
        navigation.innerHTML = `
            <button class="hero-nav-btn hero-prev" aria-label="Forrige slide">
                <i class="hgi hgi-stroke hgi-arrow-left-02"></i>
            </button>
            <button class="hero-nav-btn hero-next" aria-label="Næste slide">
                <i class="hgi hgi-stroke hgi-arrow-right-02"></i>
            </button>
        `;
        this.container.appendChild(navigation);
        
        // Tilføj overlay div
        const overlay = document.createElement('div');
        overlay.className = 'hero-overlay';
        this.heroElement.appendChild(overlay);
    }
    
    createSlideIndicators() {
        const indicators = document.createElement('div');
        indicators.className = 'hero-indicators';
        
        // Opret forrige pil
        const prevArrow = document.createElement('button');
        prevArrow.className = 'hero-indicator-nav prev';
        prevArrow.innerHTML = '<i class="hgi hgi-stroke hgi-arrow-left-01"></i>';
        prevArrow.setAttribute('aria-label', 'Forrige slide');
        prevArrow.addEventListener('click', () => this.previousSlide());
        
        // Opret næste pil
        const nextArrow = document.createElement('button');
        nextArrow.className = 'hero-indicator-nav next';
        nextArrow.innerHTML = '<i class="hgi hgi-stroke hgi-arrow-right-01"></i>';
        nextArrow.setAttribute('aria-label', 'Næste slide');
        nextArrow.addEventListener('click', () => this.nextSlide());
        
        // Opret indikator prikker
        this.slides.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = `hero-indicator ${index === 0 ? 'active' : ''}`;
            indicator.setAttribute('aria-label', `Gå til slide ${index + 1}`);
            indicator.addEventListener('click', () => this.goToSlide(index));
            indicators.appendChild(indicator);
        });
        
        // Tilføj pile til indikator container
        indicators.appendChild(prevArrow);
        indicators.appendChild(nextArrow);
        
        this.heroElement.appendChild(indicators);
        this.indicators = indicators.querySelectorAll('.hero-indicator');
    }
    
    setupEventListeners() {
        // Pause auto-slide ved hover
        this.heroElement.addEventListener('mouseenter', () => this.pauseAutoSlide());
        this.heroElement.addEventListener('mouseleave', () => this.startAutoSlide());
        
        // Touch/swipe understøttelse
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.heroElement.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.heroElement.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide(); // Swipe venstre - næste slide
            } else {
                this.previousSlide(); // Swipe højre - forrige slide
            }
        }
    }
    
    showSlide(index, direction = 'next') {
        if (this.isTransitioning) return;
        

        this.isTransitioning = true;
        const slide = this.slides[index];
        
        // Opdater alignment class
        this.heroElement.className = `hero hero-${slide.alignment}`;
        
        // Opdater baggrundsbillede
        this.heroElement.style.backgroundImage = `url(${slide.backgroundImage})`;
        
        // Opdater overlay
        const overlay = this.heroElement.querySelector('.hero-overlay');
        if (overlay) {
            if (slide.overlay) {
                overlay.style.background = 'rgba(0, 0, 0, 0.5)';
            } else {
                overlay.style.background = 'transparent';
            }
        }
        
        // Opdater indhold med animation
        const slideContent = this.container.querySelector('.hero-slide-content');
        if (slideContent) {
            if (index === 0) {
                // For første slide, bare opdater indhold uden animation
                this.updateSlideContent(slide);
                this.isTransitioning = false;
            } else {
                slideContent.style.opacity = '0';
                slideContent.style.transform = direction === 'next' ? 'translateX(30px)' : 'translateX(-30px)';
                
                setTimeout(() => {
                    this.updateSlideContent(slide);
                    slideContent.style.opacity = '1';
                    slideContent.style.transform = 'translateX(0)';
                    this.isTransitioning = false;
                }, 300);
            }
        } else {
            this.updateSlideContent(slide);
            this.isTransitioning = false;
        }
        
        // Opdater indikatorer
        this.updateIndicators(index);
        
        this.currentSlideIndex = index;
    }
    
    updateSlideContent(slide) {
        // Opdater badge/countdown
        const countdown = this.container.querySelector('.hero-countdown');
        if (countdown) {
            if (slide.badge) {
                countdown.innerHTML = `
                    <i class="hgi hgi-stroke ${slide.badge.icon}"></i>
                    ${slide.badge.text} ${slide.id === 'weekly-deal' ? '– <span class="timer">00:00:00:00</span>' : ''}
                `;
                countdown.style.display = 'flex';
            } else {
                countdown.style.display = 'none';
            }
        }
        
        // Opdater overskrift og beskrivelse
        const heading = this.container.querySelector('h1');
        const description = this.container.querySelector('.hero-content p');
        if (heading) heading.textContent = slide.heading;
        if (description) description.textContent = slide.description;
        
        // Opdater CTA knap - brug eksisterende struktur
        const ctaButton = this.container.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.href = slide.ctaLink;
            // Opdater knap tekst og ikon
            ctaButton.innerHTML = `${slide.ctaText} <i class="hgi hgi-stroke ${slide.ctaIcon}"></i>`;
        }
        
        // Opdater undertekst - brug eksisterende struktur
        const heroCtaText = this.container.querySelector('.hero-cta-text');
        if (heroCtaText) {
            if (slide.subText) {
                heroCtaText.innerHTML = `<i class="hgi hgi-stroke ${slide.subIcon}"></i>${slide.subText}`;
                heroCtaText.style.display = 'flex';
            } else {
                heroCtaText.style.display = 'none';
            }
        }
        
        // Genstart timer hvis det er weekly deal slide
        if (slide.id === 'weekly-deal') {
            this.initCountdownTimer();
        }
    }
    
    updateIndicators(activeIndex) {
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === activeIndex);
        });
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlideIndex + 1) % this.slides.length;
        this.showSlide(nextIndex, 'next');
        this.restartAutoSlide();
    }
    
    previousSlide() {
        const prevIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex, 'prev');
        this.restartAutoSlide();
    }
    
    goToSlide(index) {
        if (index !== this.currentSlideIndex) {
            const direction = index > this.currentSlideIndex ? 'next' : 'prev';
            this.showSlide(index, direction);
            this.restartAutoSlide();
        }
    }
    
    startAutoSlide() {
        this.pauseAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideInterval);
    }
    
    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    restartAutoSlide() {
        this.pauseAutoSlide();
        setTimeout(() => {
            this.startAutoSlide();
        }, 100);
    }
    
    initCountdownTimer() {
        // Initialize countdown timer for weekly deal (reuse existing timer logic)
        const timerElement = this.container.querySelector('.timer');
        if (timerElement && typeof initCountdown === 'function') {
            initCountdown();
        }
    }
}

// Initialize hero slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure other scripts have loaded
    setTimeout(() => {
        window.heroSlider = new HeroSlider();
    }, 100);
}); 