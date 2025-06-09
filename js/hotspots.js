// Helper function to calculate total stock across all locations
function getTotalStock(stockObj) {
    if (typeof stockObj === 'object' && stockObj !== null) {
        return Object.values(stockObj).reduce((total, stock) => total + stock, 0);
    }
    return stockObj || 0;
}

// Produktdata for hotspots - komplet information til produktkort
const hotspots = [
    {
        id: 'product1',
        // Position relativt til billedets center (i procent af billeddimensioner)
        x: -32,  // 32% til venstre for center
        y: 0,    // På center højde
        productId: 'textured-vase',
        title: 'Blå riflet prinsessekande',
        shortDescription: 'Royal Copenhagen',
        brand: 'Royal Copenhagen',
        fullDescription: 'Smuk kande fra Royal Copenhagens klassiske serie. Den riflede overflade og de karakteristiske blå mønstre gør denne kande til et tidløst stykke dansk design. Perfekt til både hverdag og fest.',
        specifications: {
            'Varenummer': 'UF-00116',
            'Kapacitet': '55 cl.',
            'Materiale': 'Porcelæn',
            'Vaskemaskine': 'Ja'
        },
        price: 279,
        currency: 'DKK',
        discount: '-50%',
        stock: {
            'Fisketorvet Mall': 12,
            'Fields': 15,
            'Frederiksberg Centret': 8,
            'Lyngby Storcenter': 6
        },
        stockUnit: 'stk',
        image: 'img/products/blue-riflet-vase.webp',
        // Mobile-specifikke koordinater for panning inden i billedet
        mobile: {
            backgroundPosition: '18% 50%',  // Viser venstre side af billedet
            backgroundSize: '450%'          // Zoom ind for at se detaljer
        }
    },
    {
        id: 'product2',
        x: -5,   // 5% til venstre for center
        y: -18,  // 18% over center
        productId: 'brown-glass-bowl',
        title: 'Brune Glasskåle',
        shortDescription: 'Elegant glassæt (3 stk)',
        brand: 'Mondæl glas',
        fullDescription: 'Elegant sæt af brune glasskåle i forskellige størrelser. Perfekt til servering af salater, snacks eller som dekorative elementer. Det varme, jordnære design passer til både moderne og klassiske interiører.',
        specifications: {
            'Varenummer': 'MG-2041',
            'Størrelse': '3 skåle - 12, 16, 20 cm',
            'Materiale': 'Brunt glas',
            'Vaskemaskine': 'Nej'
        },
        price: 189,
        currency: 'DKK',
        discount: '-35%',
        stock: {
            'Fisketorvet Mall': 8,
            'Fields': 7,
            'Frederiksberg Centret': 5,
            'Lyngby Storcenter': 3
        },
        stockUnit: 'sæt',
        image: 'img/products/brown-glass-bowls.webp',
        mobile: {
            backgroundPosition: '40% 30%',  // Øverste center del
            backgroundSize: '450%'
        }
    },
    {
        id: 'product3',
        x: 26,   // 26% til højre for center
        y: -10,  // 10% over center
        productId: 'white-candles',
        title: 'Hvide Stearinlys',
        shortDescription: 'Klassiske koniske lys (6 stk)',
        brand: 'Lyngby Porcelæn',
        fullDescription: 'Klassiske hvide koniske stearinlys i premium kvalitet. Perfekt til at skabe hyggeligt lys i hjemmet. Brænder jævnt og langvarigt uden at dryppe.',
        specifications: {
            'Varenummer': 'LP-0067',
            'Antal': '6 stk',
            'Materiale': 'Stearin',
            'Brændtid': 'Ca. 8 timer pr. lys'
        },
        price: 45,
        currency: 'DKK',
        discount: null,
        stock: {
            'Fisketorvet Mall': 20,
            'Fields': 18,
            'Frederiksberg Centret': 15,
            'Lyngby Storcenter': 14
        },
        stockUnit: 'stk',
        image: 'img/products/white-candles.webp',
        mobile: {
            backgroundPosition: '82% 80%',  // Højre side, let ned
            backgroundSize: '450%'
        }
    },
    {
        id: 'product4',
        x: -15,  // 15% til venstre for center
        y: 19,   // 19% under center
        productId: 'center-glass-bowl',
        title: 'Glas Centerskål',
        shortDescription: 'House Doctor i klar glas',
        brand: 'House Doctor',
        fullDescription: 'Elegant glasskål i klart glas fra House Doctor. Perfekt som centerelement på spisebordet eller til servering af frugt og salater. Det minimalistische design passer til enhver indretningsstil.',
        specifications: {
            'Varenummer': 'HD-3891',
            'Diameter': '28 cm',
            'Materiale': 'Klart glas',
            'Vaskemaskine': 'Ja'
        },
        price: 298,
        currency: 'DKK',
        discount: '-42%',
        stock: {
            'Fisketorvet Mall': 4,
            'Fields': 6,
            'Frederiksberg Centret': 3,
            'Lyngby Storcenter': 2
        },
        stockUnit: 'stk',
        image: 'img/products/glass-center-bowl.webp',
        mobile: {
            backgroundPosition: '34% 80%',  // Venstre side, nederst
            backgroundSize: '400%'
        }
    },
    {
        id: 'product5',
        x: 15,   // 15% til højre for center
        y: 25,   // 25% under center
        productId: 'right-glass-bowl',
        title: 'Dekorativ Skål',
        shortDescription: 'Speedtsberg i røget glas',
        brand: 'Speedtsberg',
        fullDescription: 'Smuk dekorativ skål i røget glas fra Speedtsberg. Den varme, røgede farve giver en sofistikeret følelse til enhver indretning. Perfekt til både praktisk brug og som dekoration.',
        specifications: {
            'Varenummer': 'SB-1247',
            'Diameter': '24 cm',
            'Materiale': 'Røget glas',
            'Vaskemaskine': 'Ja'
        },
        price: 156,
        currency: 'DKK',
        discount: '-28%',
        stock: {
            'Fisketorvet Mall': 3,
            'Fields': 2,
            'Frederiksberg Centret': 2,
            'Lyngby Storcenter': 1
        },
        stockUnit: 'stk',
        image: 'img/products/decorative-glass-bowl.webp',
        mobile: {
            backgroundPosition: '68% 90%',  // Højre side, nederst
            backgroundSize: '500%'
        }
    }
];

class ProductShowcase {
    constructor() {
        this.container = document.querySelector('.product-showcase');
        this.hotspotElements = [];
        this.isMobile = false;
        this.currentIndex = 0;
        this.touchStartX = 0;
        this.touchStartY = 0;
        
        this.init();
    }

    init() {
        this.checkScreenSize();
        this.setupEventHandlers();
        
        if (this.isMobile) {
            this.initMobileMode();
        } else {
            this.initDesktopMode();
        }
        
        // Håndter vindue resize
        window.addEventListener('resize', () => {
            this.checkScreenSize();
            if (this.isMobile) {
                this.initMobileMode();
            } else {
                this.initDesktopMode();
            }
        });
    }

    checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
    }

    setupEventHandlers() {
        // Touch/swipe events for mobile
        this.container.addEventListener('touchstart', (e) => {
            if (this.isMobile) {
                this.handleTouchStart(e);
            }
        });
        
        this.container.addEventListener('touchmove', (e) => {
            if (this.isMobile) {
                e.preventDefault(); // Forhindrer scrolling
            }
        });
        
        this.container.addEventListener('touchend', (e) => {
            if (this.isMobile) {
                this.handleTouchEnd(e);
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isMobile) {
                if (e.key === 'ArrowLeft') {
                    this.previousProduct();
                } else if (e.key === 'ArrowRight') {
                    this.nextProduct();
                } else if (e.key === 'Escape') {
                    this.resetView();
                }
            }
        });
    }

    initMobileMode() {
        this.clearHotspots();
        this.createMobileControls();
        this.showProductInfo();
        // Start med første produkt
        setTimeout(() => {
            this.panToProduct();
        }, 100);
    }

    initDesktopMode() {
        this.clearMobileControls();
        this.resetView();
        this.createHotspots();
        this.positionHotspots();
    }

    // === MOBILE FUNCTIONALITY ===
    
    createMobileControls() {
        // Fjern eksisterende controls
        this.clearMobileControls();
        
        // Opret navigation pile
        const leftArrow = document.createElement('button');
        leftArrow.className = 'mobile-nav mobile-nav--left';
        leftArrow.setAttribute('aria-label', 'Forrige produkt');
        leftArrow.innerHTML = '<i class="hgi hgi-stroke hgi-arrow-left-02"></i>';
        leftArrow.addEventListener('click', () => this.previousProduct());
        
        const rightArrow = document.createElement('button');
        rightArrow.className = 'mobile-nav mobile-nav--right';
        rightArrow.setAttribute('aria-label', 'Næste produkt');
        rightArrow.innerHTML = '<i class="hgi hgi-stroke hgi-arrow-right-02"></i>';
        rightArrow.addEventListener('click', () => this.nextProduct());
        
        // Opret produktinfo overlay
        const productInfo = document.createElement('div');
        productInfo.className = 'mobile-product-info';
        
        // Opret indikator dots
        const indicators = document.createElement('div');
        indicators.className = 'mobile-indicators';
        
        hotspots.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `mobile-indicator ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Gå til produkt ${index + 1}`);
            dot.addEventListener('click', () => this.goToProduct(index));
            indicators.appendChild(dot);
        });
        
        this.container.appendChild(leftArrow);
        this.container.appendChild(rightArrow);
        this.container.appendChild(productInfo);
        this.container.appendChild(indicators);
        
        // Gem referencer
        this.mobileControls = {
            leftArrow,
            rightArrow,
            productInfo,
            indicators
        };
    }

    clearMobileControls() {
        const controls = this.container.querySelectorAll('.mobile-nav, .mobile-product-info, .mobile-indicators');
        controls.forEach(control => control.remove());
    }

    showProductInfo() {
        const productInfo = this.container.querySelector('.mobile-product-info');
        if (!productInfo) return;
        
        const currentProduct = hotspots[this.currentIndex];
        const discountHtml = currentProduct.discount ? `<span class="discount">${currentProduct.discount}</span>` : '';
        
        productInfo.innerHTML = `
            <div class="product-info-content">
                <h3>${currentProduct.title}</h3>
                <p>${currentProduct.shortDescription}</p>
                <div class="product-price-mobile">
                    <span class="price">${currentProduct.price}</span>
                    <span class="currency">${currentProduct.currency}</span>
                    ${discountHtml}
                </div>
                <div class="product-stock-mobile">${getTotalStock(currentProduct.stock)} ${currentProduct.stockUnit} på lager</div>
                <div class="product-counter">${this.currentIndex + 1} / ${hotspots.length}</div>
            </div>
        `;
    }

    updateIndicators() {
        const indicators = this.container.querySelectorAll('.mobile-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    panToProduct() {
        const currentProduct = hotspots[this.currentIndex];
        const mobile = currentProduct.mobile;
        
        // Pan ved at ændre background-position og background-size
        this.container.style.backgroundPosition = mobile.backgroundPosition;
        this.container.style.backgroundSize = mobile.backgroundSize;
        this.container.style.transition = 'background-position 0.8s cubic-bezier(0.4, 0, 0.2, 1), background-size 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    resetView() {
        // Nulstil til standard visning
        this.container.style.backgroundPosition = 'center';
        this.container.style.backgroundSize = 'cover';
        this.container.style.transition = 'background-position 0.6s cubic-bezier(0.4, 0, 0.2, 1), background-size 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    nextProduct() {
        this.currentIndex = (this.currentIndex + 1) % hotspots.length;
        this.updateMobileView();
    }

    previousProduct() {
        this.currentIndex = (this.currentIndex - 1 + hotspots.length) % hotspots.length;
        this.updateMobileView();
    }

    goToProduct(index) {
        this.currentIndex = index;
        this.updateMobileView();
    }

    updateMobileView() {
        this.showProductInfo();
        this.updateIndicators();
        this.panToProduct();
    }

    // Touch/swipe handlers
    handleTouchStart(e) {
        const touch = e.touches[0];
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
    }

    handleTouchEnd(e) {
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - this.touchStartX;
        const deltaY = touch.clientY - this.touchStartY;
        
        // Tjek om det er en vandret swipe (større end lodret)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                this.previousProduct(); // Swipe til højre = forrige
            } else {
                this.nextProduct(); // Swipe til venstre = næste
            }
        }
    }

    // === DESKTOP HOTSPOT FUNCTIONALITY ===

    createHotspots() {
        this.clearHotspots();
        
        hotspots.forEach(hotspot => {
            const element = document.createElement('button');
            element.className = 'product-hotspot';
            element.setAttribute('data-product', hotspot.productId);
            element.setAttribute('aria-label', `Se ${hotspot.title}`);
            element.innerHTML = '<i class="hgi hgi-stroke hgi-search-add" aria-hidden="true"></i>';
            
            // Tilføj click event listener
            element.addEventListener('click', () => {
                this.handleHotspotClick(hotspot);
            });

            this.container.appendChild(element);
            this.hotspotElements.push({
                element,
                config: hotspot
            });
        });
    }

    clearHotspots() {
        this.hotspotElements.forEach(({ element }) => {
            element.remove();
        });
        this.hotspotElements = [];
    }

    positionHotspots() {
        const containerRect = this.container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;

        // Beregn de faktiske viste billeddimensioner
        const imageAspectRatio = 16 / 9; // Juster dette til dit billedes faktiske formatforhold
        const containerAspectRatio = containerWidth / containerHeight;

        let imageWidth, imageHeight, imageLeft, imageTop;

        if (containerAspectRatio > imageAspectRatio) {
            // Container er bredere end billedet - billedet er begrænset af højden
            imageHeight = containerHeight;
            imageWidth = imageHeight * imageAspectRatio;
            imageLeft = (containerWidth - imageWidth) / 2;
            imageTop = 0;
        } else {
            // Container er højere end billedet - billedet er begrænset af bredden
            imageWidth = containerWidth;
            imageHeight = imageWidth / imageAspectRatio;
            imageLeft = 0;
            imageTop = (containerHeight - imageHeight) / 2;
        }

        // Beregn centerpunkt for det viste billede
        const imageCenterX = imageLeft + imageWidth / 2;
        const imageCenterY = imageTop + imageHeight / 2;

        // Positioner hver hotspot
        this.hotspotElements.forEach(({ element, config }) => {
            const hotspotX = imageCenterX + (config.x / 100) * imageWidth;
            const hotspotY = imageCenterY + (config.y / 100) * imageHeight;

            element.style.left = hotspotX + 'px';
            element.style.top = hotspotY + 'px';
        });
        
        // Luk eksisterende produktkort når hotspots flyttes
        this.closeProductCard();
    }

    handleHotspotClick(hotspot) {
        // Fjern eksisterende produktkort
        this.closeProductCard();
        
        // Opret nyt produktkort
        this.showProductCard(hotspot);
    }

    showProductCard(product) {
        const card = document.createElement('div');
        card.className = 'hotspot-product-card';
        card.setAttribute('data-product-id', product.productId);
        
        const discountHtml = product.discount ? `<span class="discount">${product.discount}</span>` : '';
        
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <div class="card-dots">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
            <div class="card-content">
                <div class="card-tag">
                    <i class="hgi hgi-stroke hgi-package-process"></i>
                    ${getTotalStock(product.stock)} ${product.stockUnit}
                </div>
                <div class="card-info">
                    <h3>${product.title}</h3>
                    <p>${product.shortDescription}</p>
                </div>
                <div class="card-price">
                    <span class="price">${product.price}</span>
                    <span class="currency">${product.currency}</span>
                    ${discountHtml}
                </div>
                <div class="product-actions">
                    <button class="btn-primary product-btn">Gå til varen <i class="hgi hgi-stroke hgi-arrow-right-02"></i></button>
                    <button class="btn-icon btn-primary"><i class="hgi hgi-stroke hgi-shopping-basket-add-01"></i></button>
                </div>
            </div>
            <button class="card-close" aria-label="Luk produktkort">
                <i class="hgi hgi-stroke hgi-cancel-01"></i>
            </button>
        `;
        
        // Find hotspot position
        const hotspotElement = this.hotspotElements.find(h => h.config.productId === product.productId)?.element;
        if (!hotspotElement) return;
        
        // Positioner kortet ved siden af hotspot
        this.positionProductCard(card, hotspotElement);
        
        // Tilføj til DOM
        this.container.appendChild(card);
        
        // Tilføj event listeners
        const closeBtn = card.querySelector('.card-close');
        closeBtn.addEventListener('click', () => this.closeProductCard());
        
        const productBtn = card.querySelector('.product-btn');
        productBtn.addEventListener('click', () => this.openProductOverlay(product));
        
        // Luk kort ved klik udenfor
        setTimeout(() => {
            document.addEventListener('click', this.handleOutsideClick.bind(this));
        }, 100);
        
        // Animation
        requestAnimationFrame(() => {
            card.classList.add('show');
        });
    }

    positionProductCard(card, hotspotElement) {
        const hotspotRect = hotspotElement.getBoundingClientRect();
        const containerRect = this.container.getBoundingClientRect();
        const cardWidth = 300; // Fast bredde for kortet
        const cardHeight = 400; // Estimeret højde
        
        // Start med position til højre for hotspot
        let left = hotspotRect.right - containerRect.left + 20;
        let top = hotspotRect.top - containerRect.top - (cardHeight / 2) + (hotspotRect.height / 2);
        
        // Tjek om kortet går uden for højre kant
        if (left + cardWidth > containerRect.width) {
            // Placér til venstre for hotspot i stedet
            left = hotspotRect.left - containerRect.left - cardWidth - 20;
        }
        
        // Tjek om kortet går uden for top/bund
        if (top < 20) {
            top = 20;
        } else if (top + cardHeight > containerRect.height - 20) {
            top = containerRect.height - cardHeight - 20;
        }
        
        card.style.left = `${left}px`;
        card.style.top = `${top}px`;
    }

    closeProductCard() {
        const existingCard = this.container.querySelector('.hotspot-product-card');
        if (existingCard) {
            existingCard.classList.add('hide');
            setTimeout(() => {
                existingCard.remove();
            }, 300);
        }
        document.removeEventListener('click', this.handleOutsideClick.bind(this));
    }

    handleOutsideClick(e) {
        const card = this.container.querySelector('.hotspot-product-card');
        const clickedHotspot = e.target.closest('.product-hotspot');
        
        if (card && !card.contains(e.target) && !clickedHotspot) {
            this.closeProductCard();
        }
    }

    openProductOverlay(product) {
        // Close any existing card first
        this.closeProductCard();
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'product-overlay';
        
        const discountHtml = product.discount ? `<span class="overlay-discount">${product.discount}</span>` : '';
        const locations = Object.keys(product.stock);
        const firstLocation = locations[0];
        const firstLocationStock = product.stock[firstLocation];
        
        // Create specifications HTML
        let specificationsHtml = '';
        if (product.specifications) {
            Object.entries(product.specifications).forEach(([key, value]) => {
                specificationsHtml += `
                    <div class="spec-row">
                        <span class="spec-label">${key}</span>
                        <span class="spec-value">${value}</span>
                    </div>
                `;
            });
        }
        
        overlay.innerHTML = `
            <div class="overlay-content">
                <button class="overlay-close" aria-label="Luk">
                    <i class="hgi hgi-stroke hgi-cancel-01"></i>
                </button>
                
                <div class="overlay-main">
                    <div class="overlay-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    
                    <div class="overlay-details">
                        <div class="overlay-brand">
                            <i class="hgi hgi-stroke hgi-building-06"></i>
                            ${product.brand || product.shortDescription}
                        </div>
                        
                        <h1 class="overlay-title">${product.title}</h1>
                        
                        <div class="overlay-price">
                            <span class="overlay-price-amount">${product.price}</span>
                            <span class="overlay-currency">${product.currency}</span>
                            ${discountHtml}
                        </div>
                        
                        <p class="overlay-description">${product.fullDescription || product.shortDescription}</p>
                        
                                                 <div class="overlay-store-selection">
                             <label for="store-select">Vælg butik for reservation:</label>
                             <div class="custom-dropdown">
                                 <button class="dropdown-button" type="button">
                                     <span class="selected-location">${firstLocation}</span>
                                     <span class="dropdown-arrow">
                                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/>
                                         </svg>
                                     </span>
                                 </button>
                                 <div class="dropdown-menu">
                                     ${locations.map((location, index) => {
                                         const stock = product.stock[location];
                                         const stockLevel = stock > 10 ? 'high' : stock > 5 ? 'medium' : stock > 0 ? 'low' : 'none';
                                         const isSelected = index === 0 ? 'selected' : '';
                                         return `
                                             <div class="dropdown-option ${isSelected}" data-value="${location}">
                                                 <span class="option-location">${location}</span>
                                                 <span class="option-stock">
                                                     <span class="stock-indicator ${stockLevel}"></span>
                                                     <span>${stock}</span>
                                                 </span>
                                             </div>
                                         `;
                                     }).join('')}
                                 </div>
                             </div>
                         </div>
                        
                        <div class="overlay-actions">
                            <button class="overlay-reserve-btn">
                                Reservér i butik
                                <i class="hgi hgi-stroke hgi-arrow-right-02"></i>
                            </button>
                            <button class="overlay-wishlist-btn" aria-label="Tilføj til ønskeliste">
                                <i class="hgi hgi-stroke hgi-favourite"></i>
                            </button>
                        </div>
                        
                                                 <div class="overlay-specifications">
                             ${specificationsHtml}
                         </div>
                     </div>
                 </div>
             </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Add event listeners
        const closeBtn = overlay.querySelector('.overlay-close');
        closeBtn.addEventListener('click', () => this.closeProductOverlay());
        
        // Custom dropdown functionality
        const dropdownButton = overlay.querySelector('.dropdown-button');
        const dropdownMenu = overlay.querySelector('.dropdown-menu');
        const selectedLocationSpan = overlay.querySelector('.selected-location');
        const dropdownOptions = overlay.querySelectorAll('.dropdown-option');
        
        dropdownButton.addEventListener('click', () => {
            const isOpen = dropdownButton.classList.contains('open');
            if (isOpen) {
                dropdownButton.classList.remove('open');
                dropdownMenu.classList.remove('open');
            } else {
                dropdownButton.classList.add('open');
                dropdownMenu.classList.add('open');
            }
        });
        
        dropdownOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedValue = option.dataset.value;
                const locationName = option.querySelector('.option-location').textContent;
                
                // Update selected location
                selectedLocationSpan.textContent = locationName;
                
                // Remove selected class from all options
                dropdownOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                option.classList.add('selected');
                
                // Close dropdown
                dropdownButton.classList.remove('open');
                dropdownMenu.classList.remove('open');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!overlay.querySelector('.custom-dropdown').contains(e.target)) {
                dropdownButton.classList.remove('open');
                dropdownMenu.classList.remove('open');
            }
        });
        
        // Close on overlay background click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeProductOverlay();
            }
        });
        
        // Animate in
        requestAnimationFrame(() => {
            overlay.classList.add('show');
        });
    }

    closeProductOverlay() {
        const overlay = document.querySelector('.product-overlay');
        if (overlay) {
            overlay.classList.add('hide');
            setTimeout(() => {
                overlay.remove();
            }, 300);
        }
    }

    // Metode til at tilføje ny hotspot dynamisk
    addHotspot(config) {
        hotspots.push(config);
        
        if (!this.isMobile) {
            const element = document.createElement('button');
            element.className = 'product-hotspot';
            element.setAttribute('data-product', config.productId);
            element.setAttribute('aria-label', `Se ${config.title}`);
            element.innerHTML = '<i class="hgi hgi-stroke hgi-search-add" aria-hidden="true"></i>';
            
            element.addEventListener('click', () => {
                this.handleHotspotClick(config);
            });

            this.container.appendChild(element);
            this.hotspotElements.push({
                element,
                config
            });

            this.positionHotspots();
        } else {
            this.createMobileControls();
        }
    }

    // Metode til at fjerne hotspot
    removeHotspot(productId) {
        const index = this.hotspotElements.findIndex(
            item => item.config.productId === productId
        );
        
        if (index !== -1) {
            this.hotspotElements[index].element.remove();
            this.hotspotElements.splice(index, 1);
        }
        
        const configIndex = hotspots.findIndex(
            hotspot => hotspot.productId === productId
        );
        if (configIndex !== -1) {
            hotspots.splice(configIndex, 1);
        }
        
        if (this.isMobile) {
            this.createMobileControls();
        }
    }
}

// Initialiser produktvisning når DOM er indlæst
document.addEventListener('DOMContentLoaded', () => {
    window.productShowcase = new ProductShowcase();
});

// Eksempel på brug til at tilføje/fjerne hotspots:
// window.productShowcase.addHotspot({
//     id: 'product6',
//     x: 15,
//     y: 10,
//     productId: 'nyt-produkt',
//     title: 'Nyt Produkt',
//     description: 'Beskrivelse af det nye produkt',
//     mobile: {
//         backgroundPosition: '80% 20%',
//         backgroundSize: '160%'
//     }
// });
// 
// window.productShowcase.removeHotspot('nyt-produkt'); 