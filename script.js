// Extended fake product data with categories
const allProductsData = [
    // Mobile Phones
    {
        name: "سامسونگ Galaxy A54",
        price: "12,500,000",
        originalPrice: "14,000,000",
        emoji: "📱",
        category: "mobile",
        categoryName: "گوشی موبایل",
        keywords: ["سامسونگ", "گلکسی", "موبایل", "گوشی", "samsung", "galaxy"]
    },
    {
        name: "آیفون 13 پرو",
        price: "32,000,000",
        originalPrice: "35,000,000",
        emoji: "📱",
        category: "mobile",
        categoryName: "گوشی موبایل",
        keywords: ["آیفون", "اپل", "موبایل", "گوشی", "iphone", "apple"]
    },
    {
        name: "شیائومی Redmi Note 12",
        price: "8,900,000",
        originalPrice: "10,200,000",
        emoji: "📱",
        category: "mobile",
        categoryName: "گوشی موبایل",
        keywords: ["شیائومی", "ردمی", "موبایل", "گوشی", "xiaomi", "redmi"]
    },
    {
        name: "هواوی P50 Pro",
        price: "18,500,000",
        originalPrice: "21,000,000",
        emoji: "📱",
        category: "mobile",
        categoryName: "گوشی موبایل",
        keywords: ["هواوی", "موبایل", "گوشی", "huawei"]
    },
    {
        name: "وان پلاس 11",
        price: "22,300,000",
        originalPrice: "25,000,000",
        emoji: "📱",
        category: "mobile",
        categoryName: "گوشی موبایل",
        keywords: ["وان پلاس", "موبایل", "گوشی", "oneplus"]
    },
    {
        name: "گوگل Pixel 7",
        price: "19,800,000",
        originalPrice: "22,500,000",
        emoji: "📱",
        category: "mobile",
        categoryName: "گوشی موبایل",
        keywords: ["گوگل", "پیکسل", "موبایل", "گوشی", "google", "pixel"]
    },
    
    // Tablets
    {
        name: "آیپد پرو 12.9 اینچ",
        price: "45,000,000",
        originalPrice: "48,000,000",
        emoji: "📱",
        category: "tablet",
        categoryName: "تبلت",
        keywords: ["آیپد", "اپل", "تبلت", "ipad", "apple", "پرو"]
    },
    {
        name: "سامسونگ Galaxy Tab S9",
        price: "28,500,000",
        originalPrice: "32,000,000",
        emoji: "📱",
        category: "tablet",
        categoryName: "تبلت",
        keywords: ["سامسونگ", "گلکسی", "تب", "تبلت", "samsung", "galaxy", "tab"]
    },
    {
        name: "شیائومی Pad 5",
        price: "15,200,000",
        originalPrice: "17,500,000",
        emoji: "📱",
        category: "tablet",
        categoryName: "تبلت",
        keywords: ["شیائومی", "پد", "تبلت", "xiaomi", "pad"]
    },
    {
        name: "هواوی MatePad Pro",
        price: "22,800,000",
        originalPrice: "25,500,000",
        emoji: "📱",
        category: "tablet",
        categoryName: "تبلت",
        keywords: ["هواوی", "میت پد", "تبلت", "huawei", "matepad"]
    },
    
    // Laptops
    {
        name: "مک بوک پرو 14 اینچ",
        price: "85,000,000",
        originalPrice: "92,000,000",
        emoji: "💻",
        category: "laptop",
        categoryName: "لپتاپ",
        keywords: ["مک بوک", "اپل", "لپتاپ", "macbook", "apple", "پرو"]
    },
    {
        name: "ایسوس ROG Strix G15",
        price: "55,000,000",
        originalPrice: "62,000,000",
        emoji: "💻",
        category: "laptop",
        categoryName: "لپتاپ",
        keywords: ["ایسوس", "راگ", "گیمینگ", "لپتاپ", "asus", "rog", "strix"]
    },
    {
        name: "لنوو ThinkPad X1",
        price: "65,000,000",
        originalPrice: "72,000,000",
        emoji: "💻",
        category: "laptop",
        categoryName: "لپتاپ",
        keywords: ["لنوو", "تینک پد", "لپتاپ", "lenovo", "thinkpad"]
    },
    {
        name: "HP Pavilion 15",
        price: "35,000,000",
        originalPrice: "40,000,000",
        emoji: "💻",
        category: "laptop",
        categoryName: "لپتاپ",
        keywords: ["اچ پی", "پاویلیون", "لپتاپ", "hp", "pavilion"]
    },
    {
        name: "دل Inspiron 16",
        price: "42,000,000",
        originalPrice: "48,000,000",
        emoji: "💻",
        category: "laptop",
        categoryName: "لپتاپ",
        keywords: ["دل", "اینسپایرون", "لپتاپ", "dell", "inspiron"]
    },
    
    // Smart Watches
    {
        name: "اپل واچ سری 9",
        price: "18,500,000",
        originalPrice: "21,000,000",
        emoji: "⌚",
        category: "smartwatch",
        categoryName: "ساعت هوشمند",
        keywords: ["اپل واچ", "ساعت", "هوشمند", "apple", "watch"]
    },
    {
        name: "سامسونگ Galaxy Watch 6",
        price: "12,800,000",
        originalPrice: "15,200,000",
        emoji: "⌚",
        category: "smartwatch",
        categoryName: "ساعت هوشمند",
        keywords: ["سامسونگ", "گلکسی واچ", "ساعت", "هوشمند", "samsung", "galaxy", "watch"]
    },
    {
        name: "شیائومی Watch 2 Pro",
        price: "8,500,000",
        originalPrice: "10,000,000",
        emoji: "⌚",
        category: "smartwatch",
        categoryName: "ساعت هوشمند",
        keywords: ["شیائومی", "واچ", "ساعت", "هوشمند", "xiaomi", "watch"]
    },
    {
        name: "هواوی Watch GT 4",
        price: "9,200,000",
        originalPrice: "11,500,000",
        emoji: "⌚",
        category: "smartwatch",
        categoryName: "ساعت هوشمند",
        keywords: ["هواوی", "واچ", "ساعت", "هوشمند", "huawei", "watch"]
    },
    
    // Speakers
    {
        name: "ایرپاد پرو نسل 2",
        price: "12,000,000",
        originalPrice: "14,500,000",
        emoji: "🔊",
        category: "speaker",
        categoryName: "اسپیکر و هدفون",
        keywords: ["ایرپاد", "اپل", "هدفون", "بی سیم", "airpods", "apple"]
    },
    {
        name: "سونی WH-1000XM5",
        price: "16,800,000",
        originalPrice: "19,500,000",
        emoji: "🔊",
        category: "speaker",
        categoryName: "اسپیکر و هدفون",
        keywords: ["سونی", "هدفون", "بی سیم", "sony"]
    },
    {
        name: "بوز SoundLink Revolve",
        price: "8,900,000",
        originalPrice: "11,200,000",
        emoji: "🔊",
        category: "speaker",
        categoryName: "اسپیکر و هدفون",
        keywords: ["بوز", "اسپیکر", "بلوتوث", "bose", "soundlink"]
    },
    {
        name: "JBL Charge 5",
        price: "6,500,000",
        originalPrice: "8,000,000",
        emoji: "🔊",
        category: "speaker",
        categoryName: "اسپیکر و هدفون",
        keywords: ["جی بی ال", "اسپیکر", "بلوتوث", "jbl", "charge"]
    },
    {
        name: "سامسونگ Galaxy Buds Pro",
        price: "7,800,000",
        originalPrice: "9,500,000",
        emoji: "🔊",
        category: "speaker",
        categoryName: "اسپیکر و هدفون",
        keywords: ["سامسونگ", "گلکسی بادز", "هدفون", "بی سیم", "samsung", "galaxy", "buds"]
    }
];

// Mobile products for the main page (filtered)
const productsData = allProductsData.filter(product => product.category === 'mobile');

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
    
    // Get current products data (could be filtered)
    const currentProducts = window.currentProductsData || productsData;
    
    // Simulate loading delay
    setTimeout(() => {
        if (window.currentProductsData) {
            // Load filtered products
            loadFilteredProducts(currentProducts);
        } else {
            // Load regular products
            loadProducts();
        }
        clickCount++;
        
        // Remove loading state
        loadMoreBtn.classList.remove('loading');
        loadMoreBtn.disabled = false;
        
        // Check if we've reached max clicks or run out of products
        if (clickCount >= maxClicks || currentProductIndex >= currentProducts.length) {
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

// Search functionality
function setupSearch() {
    const searchToggle = document.getElementById('search-toggle');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchOverlay = document.getElementById('search-overlay');
    const mainSearchInput = document.getElementById('main-search-input');
    const mainSearchResults = document.getElementById('main-search-results');
    const searchClose = document.getElementById('search-close');
    const suggestionTags = document.querySelectorAll('.suggestion-tag');

    // Toggle header search bar
    searchToggle.addEventListener('click', () => {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Open full search overlay
    searchInput.addEventListener('focus', () => {
        searchOverlay.classList.add('active');
        mainSearchInput.focus();
        searchBar.classList.remove('active');
    });

    // Close search overlay
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        mainSearchInput.value = '';
        mainSearchResults.innerHTML = '';
    });

    // Close overlay when clicking outside
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });

    // Search function
    function performSearch(query) {
        if (query.length < 2) {
            mainSearchResults.innerHTML = '';
            return;
        }

        const filteredProducts = allProductsData.filter(product => {
            const searchTerm = query.toLowerCase();
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm)) ||
                   product.categoryName.toLowerCase().includes(searchTerm);
        });

        displaySearchResults(filteredProducts);
    }

    // Display search results
    function displaySearchResults(products) {
        if (products.length === 0) {
            mainSearchResults.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; color: white; padding: 40px;">
                    <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
                    <div style="font-size: 18px; margin-bottom: 8px;">محصولی یافت نشد</div>
                    <div style="font-size: 14px; opacity: 0.7;">کلمه کلیدی دیگری امتحان کنید</div>
                </div>
            `;
            return;
        }

        const resultsHTML = products.slice(0, 12).map(product => `
            <div class="main-search-result-item" onclick="selectProduct('${product.name}')">
                <div class="main-search-result-icon">${product.emoji}</div>
                <div class="main-search-result-info">
                    <div class="main-search-result-name">${product.name}</div>
                    <div class="main-search-result-category">${product.categoryName}</div>
                    <div class="main-search-result-price">${product.price} تومان</div>
                </div>
            </div>
        `).join('');

        mainSearchResults.innerHTML = resultsHTML;
    }

    // Handle product selection
    window.selectProduct = function(productName) {
        searchOverlay.classList.remove('active');
        mainSearchInput.value = '';
        mainSearchResults.innerHTML = '';
        alert(`محصول "${productName}" انتخاب شد!`);
    };

    // Main search input event
    mainSearchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    // Suggestion tags functionality
    suggestionTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const query = tag.textContent;
            mainSearchInput.value = query;
            performSearch(query);
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            searchOverlay.classList.add('active');
            mainSearchInput.focus();
        }
        if (e.key === 'Escape') {
            searchOverlay.classList.remove('active');
            searchBar.classList.remove('active');
        }
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

// Mega Menu functionality
function setupMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const megaMenu = document.getElementById('mega-menu');
    const menuClose = document.getElementById('menu-close');
    const menuCategories = document.querySelectorAll('.menu-category');

    // Open mega menu
    menuToggle.addEventListener('click', () => {
        megaMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close mega menu
    menuClose.addEventListener('click', () => {
        megaMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close menu when clicking outside
    megaMenu.addEventListener('click', (e) => {
        if (e.target === megaMenu) {
            megaMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Handle category clicks
    menuCategories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryType = category.getAttribute('data-category');
            const categoryTitle = category.querySelector('.category-title').textContent;
            
            // Close menu
            megaMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Filter and display products by category
            filterProductsByCategory(categoryType, categoryTitle);
        });
    });

    // Keyboard shortcuts for menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            megaMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Filter products by category
function filterProductsByCategory(categoryType, categoryTitle) {
    const filteredProducts = allProductsData.filter(product => product.category === categoryType);
    
    if (filteredProducts.length === 0) {
        alert(`محصولی در دسته "${categoryTitle}" یافت نشد`);
        return;
    }

    // Update page title and filter button
    const filterBtn = document.querySelector('.filter-btn');
    filterBtn.textContent = `${categoryTitle} - ${filteredProducts.length} محصول`;
    
    // Clear current products
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    // Reset state
    currentProductIndex = 0;
    clickCount = 0;
    
    // Update products data temporarily
    const originalProductsData = window.currentProductsData || productsData;
    window.currentProductsData = filteredProducts;
    
    // Load filtered products
    loadFilteredProducts(filteredProducts);
    
    // Update load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    loadMoreBtn.textContent = 'بارگیری محصولات بیشتر';
    loadMoreBtn.disabled = false;
    loadMoreBtn.style.background = '';
    
    // Show success message
    showNotification(`${filteredProducts.length} محصول از دسته "${categoryTitle}" یافت شد`);
}

// Load filtered products
function loadFilteredProducts(products) {
    const fragment = document.createDocumentFragment();
    const endIndex = Math.min(currentProductIndex + productsPerLoad, products.length);
    
    for (let i = currentProductIndex; i < endIndex; i++) {
        const productElement = document.createElement('div');
        productElement.innerHTML = createProductCard(products[i]);
        fragment.appendChild(productElement.firstElementChild);
    }
    
    const productsContainer = document.getElementById('products-container');
    productsContainer.appendChild(fragment);
    currentProductIndex = endIndex;
    
    // Add loading animation delay
    const newCards = productsContainer.querySelectorAll('.product-card');
    newCards.forEach((card, index) => {
        if (index >= currentProductIndex - productsPerLoad) {
            card.style.animationDelay = `${(index - (currentProductIndex - productsPerLoad)) * 0.1}s`;
        }
    });
    
    // Update load more button state
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (currentProductIndex >= products.length) {
        loadMoreBtn.textContent = 'همه محصولات نمایش داده شد';
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.background = '#a0aec0';
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        font-family: 'Vazir', Arial, sans-serif;
        font-size: 14px;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

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