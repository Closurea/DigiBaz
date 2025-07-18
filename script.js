// Fake product data
const productsData = [
    {
        name: "سامسونگ Galaxy A54",
        price: "12,500,000",
        originalPrice: "14,000,000",
        emoji: "📱"
    },
    {
        name: "آیفون 13 پرو",
        price: "32,000,000",
        originalPrice: "35,000,000",
        emoji: "📱"
    },
    {
        name: "شیائومی Redmi Note 12",
        price: "8,900,000",
        originalPrice: "10,200,000",
        emoji: "📱"
    },
    {
        name: "هواوی P50 Pro",
        price: "18,500,000",
        originalPrice: "21,000,000",
        emoji: "📱"
    },
    {
        name: "وان پلاس 11",
        price: "22,300,000",
        originalPrice: "25,000,000",
        emoji: "📱"
    },
    {
        name: "گوگل Pixel 7",
        price: "19,800,000",
        originalPrice: "22,500,000",
        emoji: "📱"
    },
    {
        name: "سامسونگ Galaxy S23",
        price: "28,000,000",
        originalPrice: "31,000,000",
        emoji: "📱"
    },
    {
        name: "شیائومی 13 Pro",
        price: "24,500,000",
        originalPrice: "27,000,000",
        emoji: "📱"
    },
    {
        name: "آیفون 14",
        price: "38,000,000",
        originalPrice: "42,000,000",
        emoji: "📱"
    },
    {
        name: "نوکیا G50",
        price: "6,200,000",
        originalPrice: "7,500,000",
        emoji: "📱"
    },
    {
        name: "هونر 90",
        price: "15,800,000",
        originalPrice: "18,000,000",
        emoji: "📱"
    },
    {
        name: "اوپو Find X5",
        price: "21,700,000",
        originalPrice: "24,500,000",
        emoji: "📱"
    },
    {
        name: "ویوو V27",
        price: "16,900,000",
        originalPrice: "19,200,000",
        emoji: "📱"
    },
    {
        name: "ریلمی GT3",
        price: "13,400,000",
        originalPrice: "15,600,000",
        emoji: "📱"
    },
    {
        name: "موتورولا Edge 40",
        price: "17,300,000",
        originalPrice: "19,800,000",
        emoji: "📱"
    }
];

// State management
let currentProductIndex = 0;
let clickCount = 0;
const maxClicks = 2;
const productsPerLoad = 6;

// DOM elements
const productsContainer = document.getElementById('products-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// Function to create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price} تومان</div>
            <div class="product-original-price">${product.originalPrice} تومان</div>
        </div>
    `;
}

// Function to load products
function loadProducts() {
    const fragment = document.createDocumentFragment();
    const endIndex = Math.min(currentProductIndex + productsPerLoad, productsData.length);
    
    for (let i = currentProductIndex; i < endIndex; i++) {
        const productElement = document.createElement('div');
        productElement.innerHTML = createProductCard(productsData[i]);
        fragment.appendChild(productElement.firstElementChild);
    }
    
    productsContainer.appendChild(fragment);
    currentProductIndex = endIndex;
    
    // Add loading animation delay
    const newCards = productsContainer.querySelectorAll('.product-card');
    newCards.forEach((card, index) => {
        if (index >= currentProductIndex - productsPerLoad) {
            card.style.animationDelay = `${(index - (currentProductIndex - productsPerLoad)) * 0.1}s`;
        }
    });
}

// Function to handle load more button click
function handleLoadMore() {
    // Show loading state
    loadMoreBtn.classList.add('loading');
    loadMoreBtn.textContent = 'در حال بارگیری...';
    loadMoreBtn.disabled = true;
    
    // Simulate loading delay
    setTimeout(() => {
        loadProducts();
        clickCount++;
        
        // Remove loading state
        loadMoreBtn.classList.remove('loading');
        loadMoreBtn.disabled = false;
        
        // Check if we've reached max clicks or run out of products
        if (clickCount >= maxClicks || currentProductIndex >= productsData.length) {
            loadMoreBtn.textContent = 'همه محصولات نمایش داده شد';
            loadMoreBtn.disabled = true;
            loadMoreBtn.style.background = '#a0aec0';
        } else {
            loadMoreBtn.textContent = 'بارگیری محصولات بیشتر';
        }
    }, 1500); // 1.5 second delay to simulate loading
}

// Function to initialize the page
function initializePage() {
    // Load initial products
    loadProducts();
    
    // Add event listener to load more button
    loadMoreBtn.addEventListener('click', handleLoadMore);
    
    // Add smooth scrolling for better UX
    loadMoreBtn.addEventListener('click', () => {
        setTimeout(() => {
            const lastProduct = productsContainer.lastElementChild;
            if (lastProduct) {
                lastProduct.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }, 1600);
    });
}

// Enhanced phone comparison images
function setupPhoneImages() {
    const phoneImages = document.querySelectorAll('.phone-img');
    phoneImages.forEach((img, index) => {
        img.onerror = function() {
            // Create a placeholder with gradient background
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 120px;
                height: 200px;
                background: ${index === 0 ? 
                    'linear-gradient(135deg, #4ECDC4, #44A08D)' : 
                    'linear-gradient(135deg, #FFD93D, #FF6B6B)'};
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 48px;
                font-weight: bold;
                margin: 0 auto;
            `;
            placeholder.textContent = index === 0 ? '📱' : '📱';
            this.parentNode.replaceChild(placeholder, this);
        };
    });
}

// Navigation functionality
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
        });
    });
}

// Search functionality (placeholder)
function setupSearch() {
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', () => {
        alert('جستجو در حال توسعه است');
    });
}

// Notification functionality (placeholder)
function setupNotifications() {
    const notificationBadge = document.querySelector('.notification-badge');
    notificationBadge.addEventListener('click', () => {
        const badge = document.querySelector('.badge');
        badge.textContent = '0';
        badge.style.display = 'none';
        alert('اعلان‌ها خوانده شد');
    });
}

// Menu functionality (placeholder)
function setupMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', () => {
        alert('منو در حال توسعه است');
    });
}

// Price update animation
function animatePrice() {
    const priceValue = document.querySelector('.price-value');
    const prices = ['23,000,000', '24,500,000', '22,800,000', '25,200,000'];
    let currentIndex = 0;
    
    setInterval(() => {
        priceValue.style.opacity = '0.5';
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % prices.length;
            priceValue.textContent = prices[currentIndex];
            priceValue.style.opacity = '1';
        }, 300);
    }, 10000); // Change price every 10 seconds
}

// Add loading states for better UX
function addLoadingStates() {
    // Add loading class to body when page loads
    document.body.classList.add('loading');
    
    // Remove loading class after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 500);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    setupPhoneImages();
    setupNavigation();
    setupSearch();
    setupNotifications();
    setupMenu();
    animatePrice();
    addLoadingStates();
    
    // Add some interaction feedback
    console.log('دیجی بازار - سایت مقایسه موبایل بارگذاری شد ✅');
    console.log(`تعداد محصولات موجود: ${productsData.length}`);
    console.log(`محصولات در هر بار بارگیری: ${productsPerLoad}`);
    console.log(`حداکثر تعداد کلیک "بارگیری بیشتر": ${maxClicks}`);
});

// Add some Easter eggs for developers
window.addEventListener('keydown', (e) => {
    // Konami code: ↑↑↓↓←→←→BA
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        console.log('🎉 حالت توسعه‌دهنده فعال شد!');
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 2000);
    }
});

// Export functions for potential future use
window.digibazApp = {
    loadProducts,
    handleLoadMore,
    productsData,
    currentProductIndex,
    clickCount
};