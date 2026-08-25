// ==========================================================================
// NEW SITARA — STOREFRONT & CHECKOUT ENGINE
// ==========================================================================

let activeCategory = 'all';
let activeSort = 'featured';
let searchKeyword = '';
let cartItems = JSON.parse(localStorage.getItem('sitara_cart') || '[]');
let activePromoDiscount = 0;
let modalActiveProduct = null;
let modalSelectedSize = '';
let lastPlacedOrder = null;

// Advanced Filtering & Reviews State
let activeSizeFilter = 'all';
let activeMaxPrice = 800;
let activeInStockOnly = false;
let selectedReviewRating = 5;
let activeModalTab = 'details';

document.addEventListener('DOMContentLoaded', () => {
  initStore();
});

function initStore() {
  renderCurrencyDropdown();
  renderCategoryNavigation();
  renderCategoryPillStrip();
  renderHomeDepartmentShelves();
  renderFilterPills();
  renderFooterCategories();
  startFlashCountdown();

  // Check URL category query
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');
  if (initialCategory && initialCategory !== 'home') {
    filterByCategory(initialCategory, null, false);
  } else {
    filterByCategory('home', null, false);
  }

  updateCartBadge();
  renderCartFeed();
  updateWishlistBadge();

  // Browser back/forward button support
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category') || 'home';
    filterByCategory(cat, null, false);
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    const wrap = document.getElementById('currencyPickerWrap');
    if (wrap && !wrap.contains(e.target)) {
      wrap.classList.remove('open');
    }
    const catWrap = document.getElementById('navCategoryDropdownWrap');
    if (catWrap && !catWrap.contains(e.target)) {
      catWrap.classList.remove('open');
    }
  });

  if (window.lucide) window.lucide.createIcons();
}

function renderCategoryPillStrip() {
  const container = document.getElementById('categoryPillStrip');
  if (!container) return;

  const categories = DataStore.getCategories();
  const products = DataStore.getProducts();

  let pillsHTML = `
    <button type="button" class="quick-pill ${activeCategory === 'home' ? 'active' : ''}" onclick="filterByCategory('home')">
      <span>Home</span>
    </button>
    <button type="button" class="quick-pill ${activeCategory === 'all' ? 'active' : ''}" onclick="filterByCategory('all')">
      <span>All Drops (${products.length})</span>
    </button>
  `;

  categories.forEach((c) => {
    const count = products.filter((p) => p.category === (c.slug || c.id)).length;
    pillsHTML += `
      <button type="button" class="quick-pill ${activeCategory === (c.slug || c.id) ? 'active' : ''}" onclick="filterByCategory('${c.slug || c.id}')">
        <span>${c.name.split('&')[0].trim()} (${count})</span>
      </button>
    `;
  });

  container.innerHTML = pillsHTML;
}

let flashTimerInterval = null;
function startFlashCountdown() {
  if (flashTimerInterval) return;
  let secondsLeft = 8 * 3600 + 42 * 60 + 19;
  flashTimerInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) secondsLeft = 12 * 3600;
    const h = Math.floor(secondsLeft / 3600);
    const m = Math.floor((secondsLeft % 3600) / 60);
    const s = secondsLeft % 60;
    const hEl = document.getElementById('timerHours');
    const mEl = document.getElementById('timerMinutes');
    const sEl = document.getElementById('timerSeconds');
    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================================================
// 1. MULTI-CURRENCY ENGINE
// ==========================================================================
function renderCurrencyDropdown() {
  const currencies = DataStore.getCurrencies();
  const active = DataStore.getActiveCurrency();

  const codeEl = document.getElementById('activeCurrencyCode');
  const dropdown = document.getElementById('currencyDropdown');

  if (codeEl) codeEl.textContent = active.code;

  if (dropdown) {
    dropdown.innerHTML = Object.values(currencies)
      .map(
        (c) => `
        <button type="button" class="currency-opt-btn ${c.code === active.code ? 'active' : ''}" onclick="selectCurrency('${c.code}', event)">
          <div class="currency-opt-left">
            <span class="currency-symbol-pill">${c.symbol.trim()}</span>
            <span class="currency-code-bold">${c.code}</span>
          </div>
          <span class="currency-rate-sub">${c.name}</span>
        </button>
      `
      )
      .join('');
  }
}

function toggleCurrencyDropdown(e) {
  if (e) e.stopPropagation();
  const wrap = document.getElementById('currencyPickerWrap');
  if (wrap) wrap.classList.toggle('open');
}

function selectCurrency(code, e) {
  if (e) e.stopPropagation();
  DataStore.setActiveCurrency(code);
  const wrap = document.getElementById('currencyPickerWrap');
  if (wrap) wrap.classList.remove('open');

  renderCurrencyDropdown();
  renderHomeDepartmentShelves();
  renderProductsGrid();
  renderCartFeed();
  if (document.getElementById('storeWishlistDrawer')?.classList.contains('open')) {
    renderWishlistFeed();
  }
  if (modalActiveProduct && document.getElementById('productModal')?.classList.contains('open')) {
    openProductModal(modalActiveProduct.id);
  }

  showToast(`Currency changed to ${code}`);
}

// ==========================================================================
// 1. DYNAMIC CATEGORY NAVIGATION & DROPDOWNS
// ==========================================================================
function renderCategoryNavigation() {
  const categories = DataStore.getCategories();
  const products = DataStore.getProducts();

  // Desktop Left Nav Links
  const desktopNav = document.getElementById('desktopNavLinks');
  if (desktopNav) {
    desktopNav.innerHTML = `
      <button class="nav-link-btn ${activeCategory === 'home' ? 'active' : ''}" onclick="filterByCategory('home')">Home</button>
      
      <div class="nav-dropdown-wrap" id="navCategoryDropdownWrap">
        <button type="button" class="nav-link-btn nav-dropdown-btn ${activeCategory !== 'home' && activeCategory !== 'all' ? 'active' : ''}" onclick="toggleNavCategoryDropdown(event)">
          <span>Categories</span>
          <i data-lucide="chevron-down" class="nav-chevron"></i>
        </button>
        <div class="nav-category-dropdown" id="navCategoryDropdown">
          <div class="nav-dropdown-head">Shop by Category</div>
          ${categories
            .map((c) => {
              const count = products.filter((p) => p.category === (c.slug || c.id)).length;
              return `
              <a href="javascript:void(0)" class="nav-cat-item ${activeCategory === (c.slug || c.id) ? 'active' : ''}" onclick="filterByCategory('${c.slug || c.id}'); closeNavCategoryDropdown();">
                <span class="nav-cat-name">${c.name}</span>
                <span class="nav-cat-count">${count} items</span>
              </a>
            `;
            })
            .join('')}
          <div class="nav-dropdown-divider"></div>
          <a href="javascript:void(0)" class="nav-cat-item ${activeCategory === 'all' ? 'active' : ''}" onclick="filterByCategory('all'); closeNavCategoryDropdown();">
            <span class="nav-cat-name" style="font-weight: 800;">View All Archive</span>
            <span class="nav-cat-count">${products.length} items</span>
          </a>
        </div>
      </div>

      <button class="nav-link-btn ${activeCategory === 'all' ? 'active' : ''}" onclick="filterByCategory('all')">All Archive</button>
      <a href="/track" class="nav-link-btn">Track Order</a>
    `;
  }

  // Mobile Drawer Links
  const mobLinks = document.getElementById('mobDrawerLinks');
  if (mobLinks) {
    mobLinks.innerHTML = `
      <button class="mob-category-btn ${activeCategory === 'home' ? 'active' : ''}" onclick="filterByCategory('home'); toggleMobileMenu(false);">
        <span>Home Storefront</span>
      </button>
      <button class="mob-category-btn ${activeCategory === 'all' ? 'active' : ''}" onclick="filterByCategory('all'); toggleMobileMenu(false);">
        <span>All Collections</span>
        <span class="mob-count-badge">${products.length}</span>
      </button>
      ${categories
        .map((c) => {
          const count = products.filter((p) => p.category === (c.slug || c.id)).length;
          return `
          <button class="mob-category-btn ${activeCategory === (c.slug || c.id) ? 'active' : ''}" onclick="filterByCategory('${c.slug || c.id}'); toggleMobileMenu(false);">
            <span>${c.name}</span>
            <span class="mob-count-badge">${count}</span>
          </button>
        `;
        })
        .join('')}
    `;
  }

  if (window.lucide) window.lucide.createIcons();
}

function toggleNavCategoryDropdown(e) {
  if (e) e.stopPropagation();
  const wrap = document.getElementById('navCategoryDropdownWrap');
  if (wrap) wrap.classList.toggle('open');
}

function closeNavCategoryDropdown() {
  const wrap = document.getElementById('navCategoryDropdownWrap');
  if (wrap) wrap.classList.remove('open');
}

function renderCategoryPortals() {
  // Category cards removed from homepage per user request (moved to top header dropdown)
}

function renderHomeDepartmentShelves() {
  const container = document.getElementById('homeDepartmentShelves');
  if (!container) return;

  const categories = DataStore.getCategories();
  const products = DataStore.getProducts();

  // 1. Inaugural Drop: Most Wanted Shelf
  const mostWanted = products.slice(0, 4);

  let shelvesHTML = `
    <section class="department-shelf-section">
      <div class="shelf-header">
        <div class="shelf-title-col">
          <span class="shelf-eyebrow">INAUGURAL RELEASE</span>
          <h2 class="shelf-heading">Signature Essentials</h2>
        </div>
        <button type="button" class="btn-shelf-viewall" onclick="filterByCategory('all')">
          <span>Shop Complete Archive (${products.length})</span>
          <i data-lucide="arrow-right"></i>
        </button>
      </div>

      <div class="products-grid grid-4">
        ${mostWanted.map((p) => renderCardMarkup(p)).join('')}
      </div>
    </section>
  `;

  // 2. Curated Shelves for Each Category
  categories.forEach((cat) => {
    const catProds = products.filter((p) => p.category === (cat.slug || cat.id));
    if (catProds.length === 0) return;

    shelvesHTML += `
      <section class="department-shelf-section">
        <div class="shelf-header">
          <div class="shelf-title-col">
            <span class="shelf-eyebrow">DEPARTMENT COLLECTION</span>
            <h2 class="shelf-heading">${cat.name}</h2>
            <p class="shelf-desc">${cat.description || ''}</p>
          </div>
          <button type="button" class="btn-shelf-viewall" onclick="filterByCategory('${cat.slug || cat.id}')">
            <span>Explore All ${cat.name.split('&')[0].trim()} (${catProds.length})</span>
            <i data-lucide="arrow-right"></i>
          </button>
        </div>

        <div class="products-grid grid-4">
          ${catProds.slice(0, 4).map((p) => renderCardMarkup(p)).join('')}
        </div>
      </section>
    `;
  });

  container.innerHTML = shelvesHTML;
  if (window.lucide) window.lucide.createIcons();
}

function renderCardMarkup(p) {
  const isSaved = DataStore.isInWishlist(p.id);
  const rating = DataStore.getProductRating(p.id);
  const stars = '★'.repeat(Math.round(rating.average));
  const formattedPrice = DataStore.formatPrice(p.price, true);

  return `
    <article class="store-card" data-id="${p.id}" onclick="window.location.href='/product.html?id=${p.id}'">
      <div class="card-media">
        <img src="${p.imageFront}" alt="${p.name}" class="card-img-front" loading="lazy">
        ${p.imageBack ? `<img src="${p.imageBack}" alt="${p.name} back" class="card-img-back" loading="lazy">` : ''}
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
        
        <button type="button" class="card-wishlist-btn ${isSaved ? 'active' : ''}" onclick="event.stopPropagation(); handleCardWishlistToggle('${p.id}', this)" aria-label="Save to Wishlist">
          <i data-lucide="heart"></i>
        </button>

        <div class="card-hover-drawer desktop-only">
          <button class="btn-card-quick" onclick="event.stopPropagation(); window.location.href='/product.html?id=${p.id}'">
            View Details
          </button>
        </div>
      </div>

      <div class="card-content">
        <span class="card-category-label">${p.categoryName || p.category}</span>
        <h3 class="card-heading">${p.name}</h3>
        
        <div class="card-rating-row">
          <span class="card-rating-stars">${stars}</span>
          <span class="card-rating-count">(${rating.count})</span>
        </div>

        <div class="card-price-row">
          <span class="card-price-tag">${formattedPrice}</span>
          <button type="button" class="btn-mob-add-pill mobile-only" onclick="event.stopPropagation(); window.location.href='/product.html?id=${p.id}'">
            <span>View</span>
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderFilterPills() {
  const categories = DataStore.getCategories();
  const products = DataStore.getProducts();
  const row = document.getElementById('filterPillsRow');
  if (!row) return;

  row.innerHTML = `
    <button class="filter-pill ${activeCategory === 'all' ? 'active' : ''}" data-cat="all" onclick="filterByCategory('all', this)">
      All (${products.length})
    </button>
    ${categories
      .map((c) => {
        const count = products.filter((p) => p.category === (c.slug || c.id)).length;
        const catKey = c.slug || c.id;
        return `
        <button class="filter-pill ${activeCategory === catKey ? 'active' : ''}" data-cat="${catKey}" onclick="filterByCategory('${catKey}', this)">
          ${c.name.split('&')[0].trim()} (${count})
        </button>
      `;
      })
      .join('')}
  `;
}

function renderFooterCategories() {
  const categories = DataStore.getCategories();
  const list = document.getElementById('footerCategoriesList');
  if (!list) return;

  list.innerHTML = categories
    .map(
      (c) => `
    <a href="#catalogSection" onclick="filterByCategory('${c.slug || c.id}')">${c.name}</a>
  `
    )
    .join('');
}

// ==========================================================================
// 3. PRODUCT CATALOG GRID & ADVANCED FILTERING
// ==========================================================================
function renderProductsGrid() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const products = DataStore.getProducts();

  let items = products.filter((p) => {
    const catMatch = activeCategory === 'all' || p.category === activeCategory;
    const searchMatch =
      searchKeyword === '' ||
      p.name.toLowerCase().includes(searchKeyword) ||
      (p.categoryName && p.categoryName.toLowerCase().includes(searchKeyword)) ||
      (p.description && p.description.toLowerCase().includes(searchKeyword));

    const priceMatch = (p.price || 0) <= activeMaxPrice;

    const sizesArr = Array.isArray(p.sizes) ? p.sizes : [p.sizes];
    const sizeMatch = activeSizeFilter === 'all' || sizesArr.includes(activeSizeFilter);

    const stockMatch = !activeInStockOnly || p.inStock;

    return catMatch && searchMatch && priceMatch && sizeMatch && stockMatch;
  });

  // Sort
  if (activeSort === 'price-asc') {
    items.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    items.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'rating-desc') {
    items.sort((a, b) => {
      const rA = DataStore.getProductRating(a.id).average;
      const rB = DataStore.getProductRating(b.id).average;
      return rB - rA;
    });
  } else if (activeSort === 'name-asc') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Update filter count badge
  let activeFilterCount = 0;
  if (activeSizeFilter !== 'all') activeFilterCount++;
  if (activeMaxPrice < 800) activeFilterCount++;
  if (activeInStockOnly) activeFilterCount++;

  const countBadge = document.getElementById('filterCountBadge');
  if (countBadge) {
    if (activeFilterCount > 0) {
      countBadge.style.display = 'inline-block';
      countBadge.textContent = activeFilterCount;
    } else {
      countBadge.style.display = 'none';
    }
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 1rem; color: var(--text-muted);">
        <i data-lucide="sparkles" style="width: 44px; height: 44px; margin-bottom: 1rem; color: var(--accent-blue);"></i>
        <h3 style="font-family: var(--font-display); font-size: 1.6rem; color: var(--text-main); font-weight:800;">No matching pieces found</h3>
        <p style="margin-top: 0.5rem; font-size: 0.85rem;">Try resetting your filters or exploring our other apparel divisions.</p>
        <button class="btn btn-dark" onclick="resetAdvancedFilters()" style="margin-top: 1.25rem; border-radius: 999px;">Reset Filters & Show All</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  grid.innerHTML = items
    .map((p) => {
      const isSaved = DataStore.isInWishlist(p.id);
      const rating = DataStore.getProductRating(p.id);
      const stars = '★'.repeat(Math.round(rating.average)) + '☆'.repeat(5 - Math.round(rating.average));
      const formattedPrice = DataStore.formatPrice(p.price);

      return `
      <div class="store-card" data-id="${p.id}">
        <div class="card-media" onclick="window.location.href='/product.html?id=${p.id}'">
          ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
          
          <!-- Wishlist Heart Button -->
          <button type="button" class="card-wishlist-btn ${isSaved ? 'active' : ''}" onclick="event.stopPropagation(); handleCardWishlistToggle('${p.id}', this)" aria-label="Save to Wishlist">
            <i data-lucide="heart"></i>
          </button>

          <img src="${p.imageFront}" alt="${p.name}" class="card-img-front" loading="lazy">
          <img src="${p.imageBack || p.imageFront}" alt="${p.name} alternate view" class="card-img-back" loading="lazy">

          <!-- Mobile Floating Action -->
          <button class="card-mob-btn" onclick="event.stopPropagation(); window.location.href='/product.html?id=${p.id}'" aria-label="View Details ${p.name}">
            <i data-lucide="arrow-up-right"></i>
          </button>

          <!-- Desktop Hover Quick Strip -->
          <div class="card-hover-drawer">
            <button class="btn-card-quick" onclick="event.stopPropagation(); window.location.href='/product.html?id=${p.id}'">View Details ↗</button>
            <div class="card-sizes-row">
              ${(Array.isArray(p.sizes) ? p.sizes : [p.sizes])
                .map((s) => `<button class="size-pill-btn" onclick="event.stopPropagation(); quickAddFromCard('${p.id}', '${s}')">${s}</button>`)
                .join('')}
            </div>
          </div>
        </div>

        <div class="card-content" onclick="window.location.href='/product.html?id=${p.id}'">
          <span class="card-category-label">${p.categoryName || p.category}</span>
          <h4 class="card-heading">${p.name}</h4>
          
          <div class="card-rating-row" onclick="event.stopPropagation(); window.location.href='/product.html?id=${p.id}#reviewsSection'">
            <span class="card-rating-stars">${stars}</span>
            <span class="card-rating-count">${rating.average.toFixed(1)} (${rating.count || 'New'})</span>
          </div>

          <div class="card-meta-row" style="margin-top: 0.35rem;">
            <span class="card-price-tag">${formattedPrice}</span>
            <span class="card-stock-tag" style="color: ${p.inStock ? 'var(--accent-green)' : '#EF4444'};">
              ● ${p.inStock ? 'In Stock' : 'Pre-order'}
            </span>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================================================
// 4. ADVANCED FILTER & REFINE CONTROLS
// ==========================================================================
function toggleAdvancedFilterPanel() {
  const panel = document.getElementById('advancedFilterPanel');
  const btn = document.getElementById('filterToggleBtn');
  if (!panel) return;

  panel.classList.toggle('open');
  if (btn) btn.classList.toggle('active');
}

function handlePriceRangeChange(val) {
  activeMaxPrice = parseInt(val, 10);
  const display = document.getElementById('filterPriceDisplay');
  if (display) {
    display.textContent = DataStore.formatPrice(activeMaxPrice);
  }
  renderProductsGrid();
}

function handleSizeFilter(size, btnEl) {
  activeSizeFilter = size;
  document.querySelectorAll('.size-filter-chips .size-chip-btn').forEach((b) => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderProductsGrid();
}

function handleStockFilterChange(inStockOnly) {
  activeInStockOnly = inStockOnly;
  renderProductsGrid();
}

function resetAdvancedFilters() {
  activeCategory = 'all';
  activeSizeFilter = 'all';
  activeMaxPrice = 800;
  activeInStockOnly = false;
  searchKeyword = '';

  const slider = document.getElementById('priceRangeSlider');
  if (slider) slider.value = 800;
  const priceDisp = document.getElementById('filterPriceDisplay');
  if (priceDisp) priceDisp.textContent = DataStore.formatPrice(800);

  const stockChk = document.getElementById('chkInStockOnly');
  if (stockChk) stockChk.checked = false;

  document.querySelectorAll('.size-filter-chips .size-chip-btn').forEach((b) => {
    if (b.dataset.size === 'all') b.classList.add('active');
    else b.classList.remove('active');
  });

  const searchInp = document.getElementById('storeSearchInput');
  if (searchInp) searchInp.value = '';

  renderFilterPills();
  renderCategoryNavigation();
  renderProductsGrid();
  showToast('Filters reset to default.');
}

// ==========================================================================
// 5. WISHLIST / SAVED ITEMS SYSTEM
// ==========================================================================
function handleCardWishlistToggle(productId, btnEl) {
  const isNowSaved = DataStore.toggleWishlist(productId);
  const products = DataStore.getProducts();
  const prod = products.find((p) => p.id === productId);

  if (btnEl) {
    if (isNowSaved) {
      btnEl.classList.add('active');
    } else {
      btnEl.classList.remove('active');
    }
  }

  updateWishlistBadge();
  if (isNowSaved) {
    showToast(`Saved "${prod?.name || 'Item'}" to your Wishlist.`);
  } else {
    showToast(`Removed "${prod?.name || 'Item'}" from Wishlist.`);
  }

  if (document.getElementById('storeWishlistDrawer')?.classList.contains('open')) {
    renderWishlistFeed();
  }
}

function toggleWishlistDrawer(open) {
  const drawer = document.getElementById('storeWishlistDrawer');
  const backdrop = document.getElementById('wishlistBackdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    renderWishlistFeed();
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function updateWishlistBadge() {
  const wishlist = DataStore.getWishlist();
  const badge = document.getElementById('wishlistCountBadge');
  const mobBadge = document.getElementById('mobWishlistBadge');
  const textCount = document.getElementById('wishlistItemCountText');

  if (badge) badge.textContent = wishlist.length;
  if (mobBadge) mobBadge.textContent = wishlist.length;
  if (textCount) textCount.textContent = `(${wishlist.length})`;
}

function renderWishlistFeed() {
  const container = document.getElementById('wishlistItemsContainer');
  if (!container) return;

  const wishlist = DataStore.getWishlist();
  const products = DataStore.getProducts();
  const savedProds = products.filter((p) => wishlist.includes(p.id));

  if (savedProds.length === 0) {
    container.innerHTML = `
      <div style="margin: auto; text-align: center; color: var(--text-muted); padding: 3.5rem 1rem;">
        <i data-lucide="heart" style="width: 44px; height: 44px; margin-bottom: 0.75rem; color: #EF4444; opacity: 0.35;"></i>
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main);">No saved pieces yet</h4>
        <p style="font-size: 0.82rem; margin-top: 0.35rem;">Click the heart icon on any piece to save it for later.</p>
        <button class="btn btn-dark" onclick="toggleWishlistDrawer(false); scrollToSection('catalogSection')" style="margin-top: 1.25rem; border-radius: 999px; font-size: 0.75rem;">
          Explore Collection ↗
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = savedProds
    .map((p) => {
      const formattedPrice = DataStore.formatPrice(p.price);
      const firstSize = (Array.isArray(p.sizes) ? p.sizes[0] : p.sizes) || 'M';

      return `
      <div class="wishlist-item-row">
        <img src="${p.imageFront}" alt="${p.name}" class="wishlist-item-img">
        <div class="wishlist-item-info">
          <h4 class="wishlist-item-title">${p.name}</h4>
          <span class="wishlist-item-cat">${p.categoryName || p.category}</span>
          <span class="wishlist-item-price">${formattedPrice}</span>
        </div>
        <div class="wishlist-item-actions">
          <button type="button" class="btn-wishlist-move" onclick="moveWishlistItemToBag('${p.id}', '${firstSize}')">
            <i data-lucide="shopping-bag"></i>
            <span>Move to Bag</span>
          </button>
          <button type="button" class="btn-wishlist-del" onclick="handleCardWishlistToggle('${p.id}')">
            Remove
          </button>
        </div>
      </div>
    `;
    })
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function moveWishlistItemToBag(productId, size) {
  addItemToBag(productId, size);
  DataStore.toggleWishlist(productId);
  updateWishlistBadge();
  renderWishlistFeed();
  renderProductsGrid();
}

function moveAllWishlistToBag() {
  const wishlist = DataStore.getWishlist();
  const products = DataStore.getProducts();

  wishlist.forEach((id) => {
    const p = products.find((x) => x.id === id);
    if (p) {
      const size = (Array.isArray(p.sizes) ? p.sizes[0] : p.sizes) || 'M';
      addItemToBag(p.id, size);
    }
  });

  DataStore.clearWishlist();
  updateWishlistBadge();
  toggleWishlistDrawer(false);
  toggleCartDrawer(true);
  renderProductsGrid();
  showToast('All saved pieces moved to your shopping bag.');
}

function clearAllWishlist() {
  DataStore.clearWishlist();
  updateWishlistBadge();
  renderWishlistFeed();
  renderProductsGrid();
  showToast('Wishlist cleared.');
}

function filterByCategory(catSlug, btnEl, pushState = true) {
  activeCategory = catSlug || 'home';
  const isHome = activeCategory === 'home';

  const homeWrap = document.getElementById('homePageWrapper');
  const catalogSec = document.getElementById('catalogSection');

  if (isHome) {
    if (homeWrap) homeWrap.style.display = 'block';
    if (catalogSec) catalogSec.style.display = 'none';
    if (pushState) {
      window.history.pushState({}, '', '/store');
    }
  } else {
    if (homeWrap) homeWrap.style.display = 'none';
    if (catalogSec) catalogSec.style.display = 'block';

    const categories = DataStore.getCategories();
    const products = DataStore.getProducts();
    const currentCat = categories.find((c) => (c.slug || c.id) === activeCategory);

    const breadcrumbName = document.getElementById('collectionBreadcrumbName');
    const mainHeading = document.getElementById('collectionMainHeading');
    const subtext = document.getElementById('collectionSubtext');
    const tagLabel = document.getElementById('collectionTagLabel');

    if (activeCategory === 'all') {
      if (breadcrumbName) breadcrumbName.textContent = 'All Collections';
      if (mainHeading) mainHeading.textContent = 'All Ready-to-Wear Pieces';
      if (subtext) subtext.textContent = `Showing all ${products.length} bespoke pieces across all departments.`;
      if (tagLabel) tagLabel.textContent = 'COMPLETE ARCHIVE';
    } else if (currentCat) {
      const count = products.filter((p) => p.category === activeCategory).length;
      if (breadcrumbName) breadcrumbName.textContent = currentCat.name;
      if (mainHeading) mainHeading.textContent = currentCat.name;
      if (subtext) subtext.textContent = `${currentCat.description || 'Curated departmental collection.'} (${count} Pieces)`;
      if (tagLabel) tagLabel.textContent = 'DEPARTMENT COLLECTION';
    }

    if (pushState) {
      window.history.pushState({}, '', `/store?category=${activeCategory}`);
    }

    // Sync pills
    document.querySelectorAll('.filter-pill').forEach((pill) => {
      if (pill.dataset.cat === activeCategory) pill.classList.add('active');
      else pill.classList.remove('active');
    });

    renderProductsGrid();
  }

  // Sync navigation & quick pill strip
  renderCategoryNavigation();
  renderCategoryPillStrip();
}

function handleSort(e) {
  activeSort = e.target.value;
  renderProductsGrid();
}

function setCatalogGrid(cols, btnEl) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.className = `products-grid grid-${cols}`;
  document.querySelectorAll('.grid-btn').forEach((b) => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

// Search
function handleSearch(e) {
  searchKeyword = e.target.value.trim().toLowerCase();
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = searchKeyword ? 'flex' : 'none';
  renderProductsGrid();
}

function handleMobileSearch(e) {
  searchKeyword = e.target.value.trim().toLowerCase();
  renderProductsGrid();
  scrollToSection('catalogSection');
}

function clearSearch() {
  const inp = document.getElementById('storeSearchInput');
  if (inp) inp.value = '';
  searchKeyword = '';
  document.getElementById('searchClearBtn').style.display = 'none';
  renderProductsGrid();
}

function toggleMobileSearchBar(forceOpen) {
  const strip = document.getElementById('mobileSearchStrip');
  if (!strip) return;

  if (forceOpen === undefined) {
    strip.classList.toggle('open');
  } else if (forceOpen) {
    strip.classList.add('open');
    const inp = document.getElementById('mobileSearchInput');
    if (inp) inp.focus();
  } else {
    strip.classList.remove('open');
  }
}

function toggleMobileMenu(open) {
  const drawer = document.getElementById('mobNavDrawer');
  const backdrop = document.getElementById('mobNavBackdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 6. PRODUCT DETAIL MODAL & REVIEWS SYSTEM
// ==========================================================================
function openProductModal(productId) {
  const products = DataStore.getProducts();
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  modalActiveProduct = product;
  const sizes = Array.isArray(product.sizes) ? product.sizes : [product.sizes];
  modalSelectedSize = sizes[0] || 'One Size';
  activeModalTab = 'details';

  const modal = document.getElementById('productModal');
  const backdrop = document.getElementById('modalBackdrop');
  const body = document.getElementById('modalGridBody');

  const gallery = [product.imageFront, product.imageBack].filter(Boolean);
  const ratingData = DataStore.getProductRating(product.id);
  const stars = '★'.repeat(Math.round(ratingData.average)) + '☆'.repeat(5 - Math.round(ratingData.average));
  const isSaved = DataStore.isInWishlist(product.id);
  const formattedPrice = DataStore.formatPrice(product.price, true);

  body.innerHTML = `
    <div class="modal-media-pane">
      <img src="${product.imageFront}" alt="${product.name}" class="modal-main-image" id="modalMainImg">
      <div class="modal-thumbs-row">
        ${gallery
          .map(
            (img, index) => `
          <img src="${img}" alt="Thumb" class="modal-thumb ${index === 0 ? 'active' : ''}" onclick="setModalImage('${img}', this)">
        `
          )
          .join('')}
      </div>
    </div>

    <div class="modal-details-pane">
      
      <!-- Tab Header -->
      <div class="modal-tabs-header">
        <button type="button" class="modal-tab-nav-btn ${activeModalTab === 'details' ? 'active' : ''}" id="tabBtnDetails" onclick="switchModalTab('details')">
          Garment Details
        </button>
        <button type="button" class="modal-tab-nav-btn ${activeModalTab === 'reviews' ? 'active' : ''}" id="tabBtnReviews" onclick="switchModalTab('reviews')">
          Reviews (${ratingData.count})
        </button>
      </div>

      <!-- TAB 1: DETAILS -->
      <div class="modal-tab-content ${activeModalTab === 'details' ? 'active' : ''}" id="modalTabDetails">
        <span class="modal-cat-tag">${product.categoryName || product.category}</span>
        <h2 class="modal-title">${product.name}</h2>
        
        <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.25rem 0 0.75rem 0; cursor: pointer;" onclick="switchModalTab('reviews')">
          <span style="color: #F59E0B; font-size: 0.9rem;">${stars}</span>
          <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 700;">${ratingData.average.toFixed(1)} (${ratingData.count} Verified Reviews)</span>
        </div>

        <div class="modal-price" id="modalProductPriceDisplay">${formattedPrice}</div>
        <p class="modal-description">${product.description || ''}</p>

        <div class="modal-sizes-box">
          <div class="size-pick-label">
            <span>SELECT SIZE</span>
            <span style="color: var(--accent-blue); cursor: pointer;" onclick="showToast('Cut in tailored relaxed streetwear fit.')">Size Guide ↗</span>
          </div>
          <div class="modal-chips-row">
            ${sizes
              .map(
                (s, i) => `
              <button type="button" class="size-chip-btn ${i === 0 ? 'active' : ''}" onclick="selectModalSize('${s}', this)">${s}</button>
            `
              )
              .join('')}
          </div>
        </div>

        ${
          product.specs
            ? `
          <div class="modal-specs-box">
            <strong>Garment Specifications:</strong><br>
            ${product.specs}
          </div>
        `
            : ''
        }

        <div class="modal-actions-dual">
          <button class="btn btn-dark btn-block" onclick="addModalItemToCart()">
            Add to Shopping Bag
          </button>
          
          <button type="button" class="btn-modal-wishlist ${isSaved ? 'active' : ''}" id="modalWishlistBtn" onclick="handleModalWishlistToggle('${product.id}')" title="Save to Wishlist">
            <i data-lucide="heart"></i>
          </button>

          <button type="button" class="btn-modal-wa" onclick="buySingleViaWhatsApp('${product.id}')" title="Buy via WhatsApp">
            <i data-lucide="message-circle"></i>
            <span>WhatsApp Buy</span>
          </button>
        </div>
      </div>

      <!-- TAB 2: REVIEWS -->
      <div class="modal-tab-content ${activeModalTab === 'reviews' ? 'active' : ''}" id="modalTabReviews">
        <div class="modal-reviews-wrap">
          
          <!-- Rating Summary -->
          <div class="reviews-score-summary">
            <div class="big-rating-num">${ratingData.average.toFixed(1)}</div>
            <div class="score-stars-col">
              <span class="score-stars">${stars}</span>
              <span class="score-count-text">Based on ${ratingData.count} Atelier Collector Reviews</span>
            </div>
            <button type="button" class="btn-open-review-form" onclick="toggleWriteReviewForm()">+ Write Review</button>
          </div>

          <!-- Write Review Collapsible Box -->
          <form class="write-review-form-card" id="writeReviewCard" style="display:none;" onsubmit="handleSubmitReview(event, '${product.id}')">
            <div class="filter-group-title">Write Customer Review</div>
            
            <div class="star-rating-selector" id="starRatingSelector">
              <span class="star-rate-icon active" data-val="1" onclick="setReviewStar(1)">★</span>
              <span class="star-rate-icon active" data-val="2" onclick="setReviewStar(2)">★</span>
              <span class="star-rate-icon active" data-val="3" onclick="setReviewStar(3)">★</span>
              <span class="star-rate-icon active" data-val="4" onclick="setReviewStar(4)">★</span>
              <span class="star-rate-icon active" data-val="5" onclick="setReviewStar(5)">★</span>
            </div>

            <div class="review-input-row">
              <input type="text" id="revAuthor" class="form-input" placeholder="Your Name" required>
              <input type="text" id="revTitle" class="form-input" placeholder="Review Title (e.g. Perfect Fit)" required>
            </div>

            <textarea id="revComment" class="form-input" rows="3" placeholder="Share your experience regarding fabric weight, fit, and craftsmanship..." required></textarea>

            <button type="submit" class="btn btn-dark" style="padding: 0.5rem; font-size: 0.78rem;">Submit Verified Review</button>
          </form>

          <!-- Customer Reviews List -->
          <div class="reviews-list-container">
            ${
              ratingData.reviews.length === 0
                ? `<p style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 2rem 0;">Be the first collector to review this piece!</p>`
                : ratingData.reviews
                    .map(
                      (r) => `
                  <div class="review-card-item">
                    <div class="review-head-row">
                      <span class="review-author-name">
                        ${r.author}
                        <span class="verified-badge"><i data-lucide="check-circle-2" style="width: 12px; height:12px;"></i> Verified Collector</span>
                      </span>
                      <span class="review-date-text">${r.date}</span>
                    </div>
                    <div style="color: #F59E0B; font-size: 0.8rem;">${'★'.repeat(r.rating || 5)}${'☆'.repeat(5 - (r.rating || 5))}</div>
                    <h5 class="review-headline">${r.title}</h5>
                    <p class="review-body-comment">${r.comment}</p>
                  </div>
                `
                    )
                    .join('')
            }
          </div>

        </div>
      </div>

    </div>
  `;

  modal.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
}

function switchModalTab(tabId) {
  activeModalTab = tabId;

  document.querySelectorAll('.modal-tab-nav-btn').forEach((b) => b.classList.remove('active'));
  document.querySelectorAll('.modal-tab-content').forEach((c) => c.classList.remove('active'));

  if (tabId === 'details') {
    document.getElementById('tabBtnDetails')?.classList.add('active');
    document.getElementById('modalTabDetails')?.classList.add('active');
  } else {
    document.getElementById('tabBtnReviews')?.classList.add('active');
    document.getElementById('modalTabReviews')?.classList.add('active');
  }
}

function toggleWriteReviewForm() {
  const f = document.getElementById('writeReviewCard');
  if (f) {
    f.style.display = f.style.display === 'none' ? 'flex' : 'none';
  }
}

function setReviewStar(val) {
  selectedReviewRating = val;
  const stars = document.querySelectorAll('#starRatingSelector .star-rate-icon');
  stars.forEach((s) => {
    const v = parseInt(s.dataset.val, 10);
    if (v <= val) s.classList.add('active');
    else s.classList.remove('active');
  });
}

function handleSubmitReview(e, productId) {
  e.preventDefault();
  const author = document.getElementById('revAuthor')?.value.trim();
  const title = document.getElementById('revTitle')?.value.trim();
  const comment = document.getElementById('revComment')?.value.trim();

  if (!author || !comment) return;

  DataStore.addReview(productId, {
    author: author,
    title: title,
    rating: selectedReviewRating,
    comment: comment
  });

  showToast('Thank you! Your verified review has been published.');
  openProductModal(productId);
  switchModalTab('reviews');
  renderProductsGrid();
}

function handleModalWishlistToggle(productId) {
  const isNowSaved = DataStore.toggleWishlist(productId);
  const btn = document.getElementById('modalWishlistBtn');
  if (btn) {
    if (isNowSaved) btn.classList.add('active');
    else btn.classList.remove('active');
  }
  updateWishlistBadge();
  renderProductsGrid();
  showToast(isNowSaved ? 'Saved to Wishlist' : 'Removed from Wishlist');
}

function buySingleViaWhatsApp(productId) {
  const products = DataStore.getProducts();
  const prod = products.find((p) => p.id === productId);
  if (!prod) return;

  const size = modalSelectedSize || 'M';
  const price = DataStore.formatPrice(prod.price, true);

  const msg = `*NEW SITARA — IMMEDIATE ORDER INQUIRY*%0A%0A*Piece:* ${prod.name}%0A*Size:* ${size}%0A*Price:* ${price}%0A*Category:* ${prod.categoryName || prod.category}%0A%0AI would like to purchase this piece. Please confirm availability & dispatch instructions.`;
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function setModalImage(src, thumbEl) {
  const main = document.getElementById('modalMainImg');
  if (main) main.src = src;
  document.querySelectorAll('.modal-thumb').forEach((t) => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function selectModalSize(size, chipEl) {
  modalSelectedSize = size;
  document.querySelectorAll('.size-chip-btn').forEach((c) => c.classList.remove('active'));
  if (chipEl) chipEl.classList.add('active');
}

function addModalItemToCart() {
  if (!modalActiveProduct) return;
  addItemToBag(modalActiveProduct.id, modalSelectedSize);
  closeProductModal();
  toggleCartDrawer(true);
}

function quickAddFromCard(productId, size) {
  addItemToBag(productId, size);
  toggleCartDrawer(true);
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// 7. SHOPPING BAG ENGINE
// ==========================================================================
function addItemToBag(productId, size) {
  const products = DataStore.getProducts();
  const prod = products.find((p) => p.id === productId);
  if (!prod) return;

  const existing = cartItems.find((i) => i.id === productId && i.size === size);

  if (existing) {
    existing.qty += 1;
  } else {
    cartItems.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.imageFront,
      size: size,
      categoryName: prod.categoryName || prod.category,
      qty: 1
    });
  }

  saveCart();
  renderCartFeed();
  updateCartBadge();
  showToast(`Added ${prod.name} (${size}) to bag.`);
}

function updateCartQty(productId, size, delta) {
  const idx = cartItems.findIndex((i) => i.id === productId && i.size === size);
  if (idx === -1) return;

  cartItems[idx].qty += delta;

  if (cartItems[idx].qty <= 0) {
    cartItems.splice(idx, 1);
  }

  saveCart();
  renderCartFeed();
  updateCartBadge();
}

function removeCartItem(productId, size) {
  cartItems = cartItems.filter((i) => !(i.id === productId && i.size === size));
  saveCart();
  renderCartFeed();
  updateCartBadge();
  showToast('Item removed.');
}

function saveCart() {
  localStorage.setItem('sitara_cart', JSON.stringify(cartItems));
}

function updateCartBadge() {
  const count = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById('cartCountBadge');
  const countTxt = document.getElementById('cartItemCountText');
  const mobBadge = document.getElementById('mobCartBadge');

  if (badge) badge.textContent = count;
  if (countTxt) countTxt.textContent = `(${count})`;
  if (mobBadge) mobBadge.textContent = count;
}

function renderCartFeed() {
  const container = document.getElementById('cartItemsContainer');
  if (!container) return;

  if (cartItems.length === 0) {
    container.innerHTML = `
      <div style="margin: auto; text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="shopping-bag" style="width: 44px; height: 44px; margin-bottom: 0.75rem; opacity: 0.3;"></i>
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main);">Your bag is empty</h4>
        <p style="font-size: 0.82rem; margin-top: 0.35rem;">Explore apparel, footwear, and accessories to add pieces.</p>
      </div>
    `;
    updatePricing(0);
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = cartItems
    .map(
      (item) => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-meta">Size: ${item.size} • ${item.categoryName}</span>
        <div class="cart-item-bottom">
          <div class="stepper-box">
            <button class="stepper-btn" onclick="updateCartQty('${item.id}', '${item.size}', -1)">-</button>
            <span class="stepper-val">${item.qty}</span>
            <button class="stepper-btn" onclick="updateCartQty('${item.id}', '${item.size}', 1)">+</button>
          </div>
          <span class="cart-item-price">${DataStore.formatPrice(item.price * item.qty)}</span>
          <button class="remove-btn" onclick="removeCartItem('${item.id}', '${item.size}')">Remove</button>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  updatePricing(subtotal);

  if (window.lucide) window.lucide.createIcons();
}

function updatePricing(subtotal) {
  const subEl = document.getElementById('cartSubtotalVal');
  const discRow = document.getElementById('cartDiscountLine');
  const discEl = document.getElementById('cartDiscountVal');
  const shipEl = document.getElementById('cartShippingVal');
  const totalEl = document.getElementById('cartGrandTotalVal');
  const meterMsg = document.getElementById('shippingMeterMessage');
  const meterFill = document.getElementById('shippingMeterFill');

  const threshold = 150;
  const isFree = subtotal >= threshold;
  const shipping = subtotal === 0 ? 0 : isFree ? 0 : 15;

  if (meterFill && meterMsg) {
    if (subtotal === 0) {
      meterFill.style.width = '0%';
      meterMsg.textContent = `Add ${DataStore.formatPrice(threshold)} for Free Worldwide Express`;
    } else if (isFree) {
      meterFill.style.width = '100%';
      meterMsg.textContent = `✦ You've Unlocked Free Worldwide Express Shipping!`;
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min(100, (subtotal / threshold) * 100);
      meterFill.style.width = `${pct}%`;
      meterMsg.textContent = `Add ${DataStore.formatPrice(remaining)} more for Free Worldwide Express`;
    }
  }

  const discountAmount = subtotal * activePromoDiscount;

  if (activePromoDiscount > 0) {
    if (discRow) discRow.style.display = 'flex';
    if (discEl) discEl.textContent = `-${DataStore.formatPrice(discountAmount)}`;
  } else {
    if (discRow) discRow.style.display = 'none';
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  if (subEl) subEl.textContent = DataStore.formatPrice(subtotal);
  if (shipEl) shipEl.textContent = shipping === 0 ? 'FREE' : DataStore.formatPrice(shipping);
  if (totalEl) totalEl.textContent = DataStore.formatPrice(grandTotal, true);
}

function applyPromoCode() {
  const inp = document.getElementById('cartPromoInput');
  if (!inp) return;

  const code = inp.value.trim().toUpperCase();
  const promos = DataStore.getPromos();
  const found = promos.find((p) => p.code.toUpperCase() === code && p.active);

  if (found) {
    activePromoDiscount = found.discount / 100;
    found.usageCount = (found.usageCount || 0) + 1;
    DataStore.savePromo(found);

    showToast(`Promo code applied: ${found.discount}% OFF!`);
    renderCartFeed();
  } else if (code === '') {
    showToast('Please enter a promo code.');
  } else {
    showToast('Invalid or expired promo code. Try SITARA15');
  }
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('storeCart');
  const backdrop = document.getElementById('cartBackdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 8. FULL CHECKOUT FLOW & TRACKING GENERATION
// ==========================================================================
function openCheckoutModal() {
  if (cartItems.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  toggleCartDrawer(false);

  // Render mini items
  const miniList = document.getElementById('chkItemsList');
  if (miniList) {
    miniList.innerHTML = cartItems
      .map(
        (i) => `
      <div class="chk-item-row">
        <img src="${i.image}" alt="${i.name}" class="chk-item-img">
        <div class="chk-item-details">
          <div class="chk-item-title">${i.name}</div>
          <div class="chk-item-meta">Size: ${i.size} • Qty: ${i.qty}</div>
        </div>
        <div class="chk-item-price">${DataStore.formatPrice(i.price * i.qty)}</div>
      </div>
    `
      )
      .join('');
  }

  // Calculate totals
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discountAmount = subtotal * activePromoDiscount;
  const isFree = subtotal >= 150;
  const shipping = isFree ? 0 : 15;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  document.getElementById('chkSubtotalVal').textContent = DataStore.formatPrice(subtotal);
  
  const discRow = document.getElementById('chkDiscountRow');
  const discVal = document.getElementById('chkDiscountVal');
  if (activePromoDiscount > 0) {
    discRow.style.display = 'flex';
    discVal.textContent = `-${DataStore.formatPrice(discountAmount)}`;
  } else {
    discRow.style.display = 'none';
  }

  document.getElementById('chkShippingVal').textContent = shipping === 0 ? 'FREE' : DataStore.formatPrice(shipping);
  document.getElementById('chkTotalVal').textContent = DataStore.formatPrice(grandTotal, true);

  document.getElementById('checkoutModal').classList.add('open');
  document.getElementById('checkoutBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.getElementById('checkoutBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function handlePlaceOrder(e) {
  e.preventDefault();

  if (cartItems.length === 0) {
    showToast('Your bag is empty.');
    return;
  }

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discountAmount = subtotal * activePromoDiscount;
  const isFree = subtotal >= 150;
  const shipping = isFree ? 0 : 15;
  const grandTotal = Math.round(Math.max(0, subtotal - discountAmount + shipping));

  const selectedPayEl = document.querySelector('input[name="payMethod"]:checked');
  const paymentMethod = selectedPayEl ? selectedPayEl.value : 'Stripe Card';

  const orderData = {
    fullName: document.getElementById('chkFullName').value.trim(),
    email: document.getElementById('chkEmail').value.trim(),
    phone: document.getElementById('chkPhone').value.trim(),
    street: document.getElementById('chkStreet').value.trim(),
    apartment: document.getElementById('chkApartment').value.trim(),
    city: document.getElementById('chkCity').value.trim(),
    state: document.getElementById('chkState').value.trim(),
    postalCode: document.getElementById('chkPostal').value.trim(),
    country: document.getElementById('chkCountry').value,
    items: [...cartItems],
    subtotal: subtotal,
    discount: discountAmount,
    shipping: shipping,
    total: grandTotal,
    paymentMethod: paymentMethod
  };

  // Submit order to DataStore (Generates unique Tracking ID)
  const createdOrder = DataStore.addOrder(orderData);
  lastPlacedOrder = createdOrder;

  // Clear Bag
  cartItems = [];
  saveCart();
  renderCartFeed();
  updateCartBadge();

  // Close Checkout Modal & Open Order Receipt
  closeCheckoutModal();
  openOrderReceiptModal(createdOrder);
}

function openOrderReceiptModal(order) {
  document.getElementById('receiptTrackingId').textContent = order.trackingId;
  document.getElementById('btnTrackShipmentLink').href = `/track?id=${order.trackingId}`;

  document.getElementById('receiptModal').classList.add('open');
  document.getElementById('receiptBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
}

function copyReceiptTrackingId() {
  if (!lastPlacedOrder) return;
  navigator.clipboard.writeText(lastPlacedOrder.trackingId);
  showToast(`Tracking ID ${lastPlacedOrder.trackingId} copied to clipboard!`);
}

function sendOrderReceiptToWhatsApp() {
  if (!lastPlacedOrder) return;

  const o = lastPlacedOrder;
  const formattedTotal = DataStore.formatPrice(o.total, true);
  const itemsText = (o.items || []).map((i) => `• ${i.name} (Size: ${i.size}, Qty: ${i.qty})`).join('%0A');
  const trackUrl = `${window.location.origin}/track?id=${o.trackingId}`;

  const msg = `*NEW SITARA ORDER CONFIRMATION*%0A%0A*Tracking ID:* ${o.trackingId}%0A*Customer:* ${o.customer?.fullName || 'Client'}%0A*Total:* ${formattedTotal}%0A*Payment Method:* ${o.paymentMethod}%0A%0A*Items Ordered:*%0A${itemsText}%0A%0A*Track Shipment Live:*%0A${trackUrl}`;

  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function closeReceiptModalAndShop() {
  document.getElementById('receiptModal').classList.remove('open');
  document.getElementById('receiptBackdrop').classList.remove('open');
  document.body.style.overflow = '';
  scrollToSection('catalogSection');
}

function executeQuickWhatsApp() {
  if (cartItems.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discountAmount = subtotal * activePromoDiscount;
  const isFree = subtotal >= 150;
  const shipping = isFree ? 0 : 15;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);
  const formattedTotal = DataStore.formatPrice(grandTotal, true);

  const itemsText = cartItems.map((i) => `• ${i.name} (Size: ${i.size}, Qty: ${i.qty})`).join('%0A');
  const msg = `*NEW SITARA — WHATSAPP EXPRESS ORDER*%0A%0A*Items in Bag:*%0A${itemsText}%0A%0A*Estimated Total:* ${formattedTotal}%0A%0APlease assist me in completing this order via WhatsApp Concierge.`;

  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function handleSubscribe(e) {
  e.preventDefault();
  const inp = document.getElementById('subscribeInput');
  if (inp && inp.value) {
    showToast('Welcome to the New Sitara Inner Circle.');
    inp.value = '';
  }
  return false;
}

function showToast(message) {
  const hub = document.getElementById('storeToastHub');
  if (!hub) return;

  const t = document.createElement('div');
  t.className = 'store-toast';
  t.innerHTML = `<span>✦</span> <span>${message}</span>`;
  hub.appendChild(t);

  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(10px)';
    setTimeout(() => t.remove(), 250);
  }, 3000);
}
