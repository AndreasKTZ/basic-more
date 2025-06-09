// Produktdata for forskellige sektioner
const productData = {
    recommendations: {
        header: {
            badgeIcon: "hgi-magic-wand-01",
            badgeText: "Anbefalet til dig",
            title: "Fund vi tror, du vil elske", 
            description: "Vi har samlet nogle fund, der føles som dig. Ting der matcher din stil, din stemning – eller bare det, du ville vælge, hvis du ikke skulle vælge selv."
        },
        products: [
            {
                id: "beosound-a1",
                image: "img/products/beosound-a1.webp",
                alt: "Beosound A1 2nd Gen",
                tag: {
                    icon: "hgi-package-open",
                    text: "Restparti"
                },
                title: "Beosound A1 2nd Gen",
                description: "Bang & Olufsen højtaler",
                price: 1400,
                currency: "DKK",
                discount: "-41%"
            },
            {
                id: "blender",
                image: "img/products/blender.webp",
                alt: "Blender",
                tag: {
                    icon: "hgi-hot-price",
                    text: "Populær"
                },
                title: "Blender",
                description: "Alsidig blender (1.5 L)",
                price: 247,
                currency: "DKK"
            },
            {
                id: "ismaskine",
                image: "img/products/ismaskine.webp",
                alt: "Gelato Ismaskine",
                tag: {
                    icon: "hgi-package-open",
                    text: "Restparti"
                },
                title: "Gelato Ismaskine",
                description: "TooA Milano Premium",
                price: 998,
                currency: "DKK",
                discount: "-71%"
            },
            {
                id: "plaid",
                image: "img/products/plaid.webp",
                alt: "Plaid m. vaffelm.",
                tag: {
                    icon: "hgi-package-open",
                    text: "Restparti"
                },
                title: "Plaid m. vaffelmønster",
                description: "Speedtsbergs i mørkeblå",
                price: 227,
                currency: "DKK"
            },
            {
                id: "plaid",
                image: "img/products/plaid.webp",
                alt: "Plaid m. vaffelm.",
                tag: {
                    icon: "hgi-package-open",
                    text: "Restparti"
                },
                title: "Plaid m. vaffelmønster",
                description: "Speedtsbergs i mørkeblå",
                price: 227,
                currency: "DKK"
            },
            {
                id: "plaid",
                image: "img/products/plaid.webp",
                alt: "Plaid m. vaffelm.",
                tag: {
                    icon: "hgi-package-open",
                    text: "Restparti"
                },
                title: "Plaid m. vaffelmønster",
                description: "Speedtsbergs i mørkeblå",
                price: 227,
                currency: "DKK"
            },
            {
                id: "plaid",
                image: "img/products/plaid.webp",
                alt: "Plaid m. vaffelm.",
                tag: {
                    icon: "hgi-package-open",
                    text: "Restparti"
                },
                title: "Plaid m. vaffelmønster",
                description: "Speedtsbergs i mørkeblå",
                price: 227,
                currency: "DKK"
            },
            {
                id: "fad",
                image: "img/products/fad.webp",
                alt: "Rundt keramikfad ALISON",
                tag: {
                    icon: "hgi-recycle-03",
                    text: "2. sort."
                },
                title: "Rundt keramikfad ALISON",
                description: "i Grå (Ø20,8x8,4cm)",
                price: 38,
                currency: "DKK"
            }
        ]
    },
    summerTheme: {
        header: {
            badgeIcon: "hgi-thermometer-warm",
            badgeText: "Udvalgt tema",
            title: "Sommerstemning i hvert hjørne",
            description: "Vi har samlet et udvalg af fund, der føles som sol på huden og luft i rummet. Til dage, hvor alt gerne må være lidt nemmere – og lidt pænere."
        },
        products: [
            {
                id: "duftlys-earthbound",
                image: "img/products/meraki.webp",
                alt: "Duftlys Earthbound",
                tag: {
                    icon: "hgi-package-open",
                    text: "Restparti"
                },
                title: "Duftlys Earthbound",
                description: "Meraki i grøn (6,5x7cm)",
                price: 56,
                currency: "DKK",
                discount: "-53%"
            },
            {
                id: "vandglas-aleksi",
                image: "img/products/aleksi.webp",
                alt: "Vandglas Aleksi",
                tag: {
                    icon: "hgi-package-process",
                    text: "Få på lager"
                },
                title: "Vandglas Aleksi",
                description: "Sæt består af 6 glas",
                price: 78,
                currency: "DKK"
            },
            {
                id: "vase-bobler",
                image: "img/products/boblevase.webp",
                alt: "Vase m. bobler",
                tag: {
                    icon: "hgi-package-process",
                    text: "Få på lager"
                },
                title: "Vase m. bobler",
                description: "Speedtsberg i Dark Rose",
                price: 97,
                currency: "DKK"
            },
            {
                id: "koleboks",
                image: "img/products/polarbox.webp",
                alt: "Køleboks",
                tag: {
                    icon: "hgi-package-open",
                    text: "Restparti"
                },
                title: "Køleboks",
                description: "Polarbox i aqua (20 L)",
                price: 227,
                currency: "DKK",
                discount: "-38%"
            },
            {
                id: "quilt-blomster",
                image: "img/products/quilt.webp",
                alt: "Quilt m. blomster",
                tag: {
                    icon: "hgi-package-open",
                    text: "Restparti"
                },
                title: "Quilt m. blomster",
                description: "i Rosa/Hvid (130x170cm)",
                price: 200,
                currency: "DKK"
            }
        ]
    }
};

// Opret produktkort HTML
function createProductCard(product) {
    const discountHtml = product.discount ? `<span class="discount">${product.discount}</span>` : '';
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.alt}">
                <div class="product-dots">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
            <div class="product-content">
                <div class="product-tag">
                    <i class="hgi hgi-stroke ${product.tag.icon}"></i>
                    ${product.tag.text}
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                </div>
                <div class="product-price">
                    <span class="price">${product.price}</span>
                    <span class="currency">${product.currency}</span>
                    ${discountHtml}
                </div>
                <div class="product-actions">
                    <button class="btn-primary product-btn">Gå til varen <i class="hgi hgi-stroke hgi-arrow-right-02"></i></button>
                    <button class="btn-icon btn-primary"><i class="hgi hgi-stroke hgi-shopping-basket-add-01"></i></button>
                </div>
            </div>
        </div>
    `;
}

// Opret sektion header HTML
function createSectionHeader(headerData) {
    return `
        <div class="badge product-header-tag">
            <i class="hgi hgi-stroke ${headerData.badgeIcon}"></i>
            ${headerData.badgeText}
        </div>
        <h2>${headerData.title}</h2>
        <p>${headerData.description}</p>
    `;
}

// Udfyld en produktsektion
function populateProductSection(sectionId, sectionData) {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    if (!section) return;

    // Opdater header content
    const headerContentContainer = section.querySelector('.product-header-content');
    if (headerContentContainer) {
        headerContentContainer.innerHTML = createSectionHeader(sectionData.header);
    }

    // Opdater produkter
    const productsContainer = section.querySelector('.product-scroll');
    if (productsContainer) {
        productsContainer.innerHTML = sectionData.products.map(createProductCard).join('');
    }
}

// Produktnavigation funktionalitet
function setupProductNavigation(sectionId) {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    if (!section) return;

    const scrollContainer = section.querySelector('.product-scroll');
    const prevBtn = section.querySelector('.product-nav-prev');
    const nextBtn = section.querySelector('.product-nav-next');
    
    if (!scrollContainer || !prevBtn || !nextBtn) return;

    // Beregn scroll afstand baseret på faktisk kortbredde
    function getScrollDistance() {
        const firstCard = scrollContainer.querySelector('.product-card');
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const gap = 20; // Mellemrum mellem kort
            return cardWidth + gap;
        }
        return 300; // Fallback værdi
    }

    // Opdater knaptilstande
    function updateButtonStates() {
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        prevBtn.disabled = scrollLeft <= 0;
        nextBtn.disabled = scrollLeft >= maxScrollLeft - 1; // -1 for afrundingsfejl
    }

    // Scroll funktioner
    function scrollPrev() {
        scrollContainer.scrollBy({
            left: -getScrollDistance(),
            behavior: 'smooth'
        });
    }

    function scrollNext() {
        scrollContainer.scrollBy({
            left: getScrollDistance(),
            behavior: 'smooth'
        });
    }

    // Event listeners
    prevBtn.addEventListener('click', scrollPrev);
    nextBtn.addEventListener('click', scrollNext);
    scrollContainer.addEventListener('scroll', updateButtonStates);

    // Indledende knaptilstand
    updateButtonStates();

    // Opdater knaptilstande ved vinduesændring
    window.addEventListener('resize', updateButtonStates);
}

// Initialiser alle produktsektioner
function initializeProductSections() {
    populateProductSection('recommendations', productData.recommendations);
    populateProductSection('summer-theme', productData.summerTheme);
    
    // Opsæt navigation for hver sektion efter en lille forsinkelse for at sikre DOM er opdateret
    setTimeout(() => {
        setupProductNavigation('recommendations');
        setupProductNavigation('summer-theme');
    }, 100);
}

// Initialiser når DOM er indlæst
document.addEventListener('DOMContentLoaded', initializeProductSections); 