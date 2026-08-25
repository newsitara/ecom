// ==========================================================================
// NEW SITARA — PRODUCT DETAIL PAGE CONTROLLER
// ==========================================================================

let currentProduct = null;
let selectedSize = 'M';
let currentQty = 1;
let currentReviewStar = 5;

document.addEventListener('DOMContentLoaded', () => {
  initPDP();
});

function initPDP() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'ns-prod-101';

  const products = DataStore.getProducts();
  currentProduct = products.find((p) => p.id === productId) || products[0];

  if (!currentProduct) {
    window.location.href = '/store';
    return;
  }

  const sizes = Array.isArray(currentProduct.sizes) ? currentProduct.sizes : [currentProduct.sizes];
  selectedSize = sizes[0] || 'M';

  renderLanguageDropdown();
  renderCurrencyDropdown();
  populateCountryDropdown();
  renderProductDetails();
  updateCartBadge();
  renderCartFeed();
  updateWishlistBadge();
  renderRelatedProducts();

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    const currWrap = document.getElementById('currencyPickerWrap');
    if (currWrap && !currWrap.contains(e.target)) {
      currWrap.classList.remove('open');
    }
    const langWrap = document.getElementById('langPickerWrap');
    if (langWrap && !langWrap.contains(e.target)) {
      langWrap.classList.remove('open');
    }
  });

  if (window.lucide) window.lucide.createIcons();
}

function renderProductDetails() {
  if (!currentProduct) return;

  // Title & Head Meta
  document.title = `${currentProduct.name} — NEW SITARA`;
  document.getElementById('breadcrumbCategory').textContent = currentProduct.categoryName || currentProduct.category;
  document.getElementById('breadcrumbTitle').textContent = currentProduct.name;

  document.getElementById('pdpDeptTag').textContent = `NEW SITARA • ${currentProduct.categoryName || currentProduct.category}`;
  document.getElementById('pdpProductTitle').textContent = currentProduct.name;
  
  if (currentProduct.tag) {
    const tagEl = document.getElementById('pdpTagBadge');
    if (tagEl) {
      tagEl.textContent = currentProduct.tag;
      tagEl.style.display = 'block';
    }
  }

  // Price & Currency
  const formattedPrice = DataStore.formatPrice(currentProduct.price, true);
  document.getElementById('pdpPriceAmount').textContent = formattedPrice;
  document.getElementById('pdpMobPriceDisplay').textContent = formattedPrice;

  // Stock
  const stockEl = document.getElementById('pdpStockStatus');
  if (stockEl) {
    if (currentProduct.inStock) {
      stockEl.textContent = 'In Stock • Ready for Atelier Dispatch';
      stockEl.style.color = 'var(--accent-green)';
    } else {
      stockEl.textContent = 'Limited Atelier Run • Made to Order';
      stockEl.style.color = '#F59E0B';
    }
  }

  // Description & Specs
  document.getElementById('pdpDescriptionText').textContent = currentProduct.description || 'Crafted with bespoke materials and meticulous attention to detail.';
  document.getElementById('pdpSpecsContent').innerHTML = `
    <strong>Garment Construction:</strong><br>
    ${currentProduct.specs || '✦ 100% Luxury Atelier Grade Materials • Hand Inspected'}
  `;

  // Gallery & Thumbs
  const mainImg = document.getElementById('pdpMainImage');
  mainImg.src = currentProduct.imageFront;
  mainImg.alt = currentProduct.name;

  const gallery = [currentProduct.imageFront, currentProduct.imageBack].filter(Boolean);
  const thumbsStrip = document.getElementById('pdpThumbsStrip');
  if (thumbsStrip) {
    thumbsStrip.innerHTML = gallery
      .map(
        (img, idx) => `
      <div class="pdp-thumb-item ${idx === 0 ? 'active' : ''}" onclick="setPdpMainImage('${img}', this)">
        <img src="${img}" alt="Angle ${idx + 1}" loading="lazy">
      </div>
    `
      )
      .join('');
  }

  // Sizing Chips
  const sizes = Array.isArray(currentProduct.sizes) ? currentProduct.sizes : [currentProduct.sizes];
  const chipsRow = document.getElementById('pdpSizeChipsRow');
  if (chipsRow) {
    chipsRow.innerHTML = sizes
      .map(
        (s, idx) => `
      <button type="button" class="pdp-size-chip ${s === selectedSize ? 'active' : ''}" onclick="selectPdpSize('${s}', this)">
        ${s}
      </button>
    `
      )
      .join('');
  }
  document.getElementById('pdpSelectedSizeLabel').textContent = selectedSize;
  document.getElementById('pdpMobSelectedSize').textContent = selectedSize;

  // Wishlist Button State
  const isSaved = DataStore.isInWishlist(currentProduct.id);
  const wishBtn = document.getElementById('pdpWishlistToggleBtn');
  if (wishBtn) {
    if (isSaved) wishBtn.classList.add('active');
    else wishBtn.classList.remove('active');
  }

  // Rating & Reviews
  renderPdpReviews();
}

function setPdpMainImage(src, thumbEl) {
  const mainImg = document.getElementById('pdpMainImage');
  if (mainImg) mainImg.src = src;

  document.querySelectorAll('.pdp-thumb-item').forEach((t) => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function selectPdpSize(size, chipEl) {
  selectedSize = size;
  document.getElementById('pdpSelectedSizeLabel').textContent = size;
  document.getElementById('pdpMobSelectedSize').textContent = size;

  document.querySelectorAll('.pdp-size-chip').forEach((c) => c.classList.remove('active'));
  if (chipEl) chipEl.classList.add('active');
}

function adjustPdpQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('pdpQtyValue').textContent = currentQty;
}

function addCurrentProductToCart() {
  if (!currentProduct) return;
  DataStore.addToCart(currentProduct.id, selectedSize, currentQty);
  updateCartBadge();
  renderCartFeed();
  toggleCartDrawer(true);
  showToast(`Added ${currentQty}x ${currentProduct.name} (${selectedSize}) to Bag.`);
}

function togglePdpWishlist() {
  if (!currentProduct) return;
  const isSaved = DataStore.toggleWishlist(currentProduct.id);
  const wishBtn = document.getElementById('pdpWishlistToggleBtn');
  if (wishBtn) {
    if (isSaved) wishBtn.classList.add('active');
    else wishBtn.classList.remove('active');
  }
  updateWishlistBadge();
  if (isSaved) {
    showToast(`Saved "${currentProduct.name}" to your Wishlist.`);
  } else {
    showToast(`Removed "${currentProduct.name}" from Wishlist.`);
  }
}

function buyNowCurrentProduct() {
  if (!currentProduct) return;
  DataStore.addToCart(currentProduct.id, selectedSize, currentQty);
  updateCartBadge();
  renderCartFeed();
  openCheckoutModal();
}

// Reviews Subsystem
function renderPdpReviews() {
  if (!currentProduct) return;
  const ratingData = DataStore.getProductRating(currentProduct.id);
  const reviews = DataStore.getReviews(currentProduct.id);

  const stars = '★'.repeat(Math.round(ratingData.average)) + '☆'.repeat(5 - Math.round(ratingData.average));

  document.getElementById('pdpStarsDisplay').textContent = stars;
  document.getElementById('pdpReviewsCountDisplay').textContent = `${ratingData.average.toFixed(1)} (${ratingData.count} Reviews)`;

  document.getElementById('pdpBigRatingScore').textContent = ratingData.average.toFixed(1);
  document.getElementById('pdpOverviewStars').textContent = stars;
  document.getElementById('pdpOverviewCount').textContent = `Based on ${ratingData.count} Atelier Collector Reviews`;

  const feed = document.getElementById('pdpReviewsFeed');
  if (feed) {
    if (reviews.length === 0) {
      feed.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          <p>No customer reviews yet. Be the first to share your thoughts on this atelier piece!</p>
        </div>
      `;
    } else {
      feed.innerHTML = reviews
        .map(
          (r) => `
        <div class="pdp-review-card">
          <div class="rev-header">
            <div>
              <span class="rev-author">${r.author || 'Anonymous'}</span>
              ${r.verified ? '<span class="rev-verified"> • Verified Buyer</span>' : ''}
            </div>
            <span style="color:#F59E0B; font-size: 0.85rem;">${'★'.repeat(r.rating || 5)}</span>
          </div>
          <div class="rev-title">${r.title || 'Review'}</div>
          <div class="rev-comment">${r.comment || ''}</div>
        </div>
      `
        )
        .join('');
    }
  }
}

function scrollToReviews() {
  document.getElementById('reviewsSection')?.scrollIntoView({ behavior: 'smooth' });
}

function togglePdpReviewForm(show) {
  const form = document.getElementById('pdpReviewFormCard');
  if (!form) return;
  if (show === undefined) {
    form.style.display = form.style.display === 'none' ? 'flex' : 'none';
  } else {
    form.style.display = show ? 'flex' : 'none';
  }
}

function setPdpReviewStar(val) {
  currentReviewStar = val;
  const icons = document.querySelectorAll('#pdpStarSelector .star-rate-icon');
  icons.forEach((icon) => {
    const starVal = Number(icon.dataset.val);
    if (starVal <= val) icon.classList.add('active');
    else icon.classList.remove('active');
  });
}

function handlePdpSubmitReview(e) {
  e.preventDefault();
  if (!currentProduct) return;

  const author = document.getElementById('pdpRevAuthor').value.trim();
  const title = document.getElementById('pdpRevTitle').value.trim();
  const comment = document.getElementById('pdpRevComment').value.trim();

  DataStore.addReview({
    productId: currentProduct.id,
    author,
    rating: currentReviewStar,
    title,
    comment
  });

  togglePdpReviewForm(false);
  renderPdpReviews();
  showToast('Thank you! Your verified review has been published.');
}

// Related Products
function renderRelatedProducts() {
  if (!currentProduct) return;
  const products = DataStore.getProducts();
  const related = products.filter((p) => p.id !== currentProduct.id).slice(0, 4);

  const grid = document.getElementById('pdpRelatedGrid');
  if (!grid) return;

  grid.innerHTML = related
    .map((product) => {
      const formattedPrice = DataStore.formatPrice(product.price, true);
      const isSaved = DataStore.isInWishlist(product.id);
      const ratingData = DataStore.getProductRating(product.id);
      const stars = '★'.repeat(Math.round(ratingData.average)) + '☆'.repeat(5 - Math.round(ratingData.average));

      return `
      <article class="store-card" data-id="${product.id}">
        <div class="card-media" onclick="window.location.href='/product.html?id=${product.id}'">
          <img src="${product.imageFront}" alt="${product.name}" class="card-img-front" loading="lazy">
          ${product.imageBack ? `<img src="${product.imageBack}" alt="${product.name} back" class="card-img-back" loading="lazy">` : ''}
          ${product.tag ? `<span class="card-tag">${product.tag}</span>` : ''}
          
          <button type="button" class="card-wishlist-btn ${isSaved ? 'active' : ''}" onclick="event.stopPropagation(); handleRelatedWishlistToggle('${product.id}', this)">
            <i data-lucide="heart"></i>
          </button>
        </div>

        <div class="card-content" onclick="window.location.href='/product.html?id=${product.id}'">
          <span class="card-category-label">${product.categoryName || product.category}</span>
          <h3 class="card-heading">${product.name}</h3>
          
          <div class="card-rating-row">
            <span class="card-rating-stars">${stars}</span>
            <span class="card-rating-count">(${ratingData.count})</span>
          </div>

          <div class="card-price-row">
            <span class="card-price-tag">${formattedPrice}</span>
            ${product.inStock ? '<span class="card-stock-pill">Ready to Ship</span>' : '<span class="card-stock-pill soldout">Made to Order</span>'}
          </div>
        </div>
      </article>
    `;
    })
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function handleRelatedWishlistToggle(id, btnEl) {
  const isSaved = DataStore.toggleWishlist(id);
  if (btnEl) {
    if (isSaved) btnEl.classList.add('active');
    else btnEl.classList.remove('active');
  }
  updateWishlistBadge();
  showToast(isSaved ? 'Saved to Wishlist.' : 'Removed from Wishlist.');
}

// Multi-Language & Multi-Currency Subsystem
function renderLanguageDropdown() {
  const languages = DataStore.getLanguages();
  const active = DataStore.getActiveLanguage();

  const codeEl = document.getElementById('activeLangCode');
  const dropdown = document.getElementById('langDropdown');

  if (codeEl) codeEl.textContent = active.code.toUpperCase();

  if (dropdown) {
    dropdown.innerHTML = languages
      .map(
        (l) => `
        <button type="button" class="lang-opt-btn ${l.code === active.code ? 'active' : ''}" onclick="selectLanguage('${l.code}', event)">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="lang-code-pill">${l.code.toUpperCase()}</span>
            <span>${l.native}</span>
          </div>
          <span class="lang-native-sub">${l.name}</span>
        </button>
      `
      )
      .join('');
  }
}

function toggleLangDropdown(e) {
  if (e) e.stopPropagation();
  const wrap = document.getElementById('langPickerWrap');
  if (wrap) wrap.classList.toggle('open');
  const currWrap = document.getElementById('currencyPickerWrap');
  if (currWrap) currWrap.classList.remove('open');
}

function selectLanguage(code, e) {
  if (e) e.stopPropagation();
  DataStore.setActiveLanguage(code);
  const wrap = document.getElementById('langPickerWrap');
  if (wrap) wrap.classList.remove('open');

  renderLanguageDropdown();
  renderProductDetails();
  renderRelatedProducts();
  renderCartFeed();
  showToast(`Language: ${DataStore.getActiveLanguage().name}`);
}

function populateCountryDropdown() {
  const select = document.getElementById('chkCountry');
  if (!select) return;
  const countries = DataStore.getCountries();
  const currentVal = select.value;
  select.innerHTML = countries.map(c => `<option value="${c.name}" ${currentVal === c.name || (!currentVal && c.code === 'US') ? 'selected' : ''}>${c.name} (${c.phone})</option>`).join('');
}

function handleCountryChange(e) {
  const selectedName = e.target.value;
  const country = DataStore.getCountryByName(selectedName);
  if (country) {
    const phoneInput = document.getElementById('chkPhone');
    if (phoneInput && (!phoneInput.value || phoneInput.value.startsWith('+'))) {
      phoneInput.placeholder = `${country.phone} 000-0000`;
      phoneInput.value = `${country.phone} `;
    }
  }
}

function renderCurrencyDropdown() {
  const currencies = DataStore.getCurrencies();
  const active = DataStore.getActiveCurrency();

  const flagEl = document.getElementById('activeCurrencyFlag');
  const codeEl = document.getElementById('activeCurrencyCode');
  const dropdown = document.getElementById('currencyDropdown');

  if (flagEl) flagEl.textContent = active.symbol ? active.symbol.trim() : '$';
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
  const langWrap = document.getElementById('langPickerWrap');
  if (langWrap) langWrap.classList.remove('open');
}

function selectCurrency(code, e) {
  if (e) e.stopPropagation();
  DataStore.setActiveCurrency(code);
  const wrap = document.getElementById('currencyPickerWrap');
  if (wrap) wrap.classList.remove('open');

  renderCurrencyDropdown();
  renderProductDetails();
  renderRelatedProducts();
  renderCartFeed();
  showToast(`Currency changed to ${code} (${DataStore.getActiveCurrency().symbol})`);
}

// Cart, Wishlist, Checkout & Modal Helpers
function updateCartBadge() {
  const cart = DataStore.getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartCountBadge');
  if (badge) badge.textContent = count;
  const drawerCount = document.getElementById('cartDrawerCount');
  if (drawerCount) drawerCount.textContent = `(${count} items)`;
}

function renderCartFeed() {
  const cart = DataStore.getCart();
  const products = DataStore.getProducts();
  const container = document.getElementById('cartItemsContainer');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted);">
        <i data-lucide="shopping-bag" style="width: 48px; height: 48px; opacity: 0.3; margin-bottom: 0.75rem;"></i>
        <h4>Your Bag is Empty</h4>
        <p style="font-size: 0.8rem; margin-top: 0.35rem;">Explore our inaugural collection to add pieces.</p>
      </div>
    `;
    updateCartTotals(0);
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let subtotal = 0;
  container.innerHTML = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return '';

      const lineTotal = product.price * item.quantity;
      subtotal += lineTotal;
      const formattedLineTotal = DataStore.formatPrice(lineTotal, true);

      return `
      <div class="cart-item-row">
        <img src="${product.imageFront}" alt="${product.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${product.name}</h4>
          <span class="cart-item-meta">Size: ${item.size} • ${DataStore.formatPrice(product.price, true)}</span>
          <div class="cart-item-stepper">
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', '${item.size}', -1)">−</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', '${item.size}', 1)">+</button>
            <span style="margin-left:auto; font-weight:800; font-size:0.85rem;">${formattedLineTotal}</span>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  updateCartTotals(subtotal);
  if (window.lucide) window.lucide.createIcons();
}

function updateCartTotals(subtotalUSD) {
  const activePromo = DataStore.validatePromo(appliedPromoCode || '');
  let discountUSD = 0;
  if (activePromo) {
    discountUSD = (subtotalUSD * activePromo.discount) / 100;
  }
  const totalUSD = Math.max(0, subtotalUSD - discountUSD);

  const subEl = document.getElementById('cartSubtotal');
  if (subEl) subEl.textContent = DataStore.formatPrice(subtotalUSD, true);

  const discRow = document.getElementById('cartDiscountRow');
  const discEl = document.getElementById('cartDiscount');
  if (discRow && discEl) {
    if (discountUSD > 0) {
      discRow.style.display = 'flex';
      discEl.textContent = `-${DataStore.formatPrice(discountUSD, true)}`;
    } else {
      discRow.style.display = 'none';
    }
  }

  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = DataStore.formatPrice(totalUSD, true);

  const modalTotal = document.getElementById('chkModalTotal');
  if (modalTotal) modalTotal.textContent = DataStore.formatPrice(totalUSD, true);

  // Free shipping meter
  const meterFill = document.getElementById('meterBarFill');
  const meterStatus = document.getElementById('meterStatus');
  const meterPercent = document.getElementById('meterPercent');
  if (meterFill && meterStatus && meterPercent) {
    const progress = Math.min(100, Math.round((subtotalUSD / 150) * 100));
    meterFill.style.width = `${progress}%`;
    meterPercent.textContent = `${progress}%`;
    if (subtotalUSD >= 150) {
      meterStatus.textContent = 'You unlocked FREE Worldwide Express Delivery!';
    } else {
      const remaining = 150 - subtotalUSD;
      meterStatus.textContent = `Add ${DataStore.formatPrice(remaining, true)} for FREE express shipping`;
    }
  }
}

let appliedPromoCode = null;
function handleApplyPromo() {
  const input = document.getElementById('promoCodeInput');
  const code = input?.value.trim();
  if (!code) return;

  const promo = DataStore.validatePromo(code);
  if (promo) {
    appliedPromoCode = promo.code;
    const badge = document.getElementById('promoAppliedBadge');
    document.getElementById('promoCodeLabel').textContent = promo.code;
    document.getElementById('promoDiscountLabel').textContent = promo.discount;
    if (badge) badge.style.display = 'flex';
    input.value = '';
    renderCartFeed();
    showToast(`Promo "${promo.code}" applied: ${promo.discount}% OFF!`);
  } else {
    showToast('Invalid or expired promo code.');
  }
}

function handleRemovePromo() {
  appliedPromoCode = null;
  const badge = document.getElementById('promoAppliedBadge');
  if (badge) badge.style.display = 'none';
  renderCartFeed();
  showToast('Promo code removed.');
}

function updateCartQty(productId, size, delta) {
  DataStore.updateCartQty(productId, size, delta);
  updateCartBadge();
  renderCartFeed();
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('storeCartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    renderCartFeed();
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
  const list = DataStore.getWishlist();
  const badge = document.getElementById('wishlistCountBadge');
  if (badge) badge.textContent = list.length;
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

function renderWishlistFeed() {
  const wishlist = DataStore.getWishlist();
  const products = DataStore.getProducts();
  const container = document.getElementById('wishlistItemsContainer');
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted);">
        <i data-lucide="heart" style="width: 48px; height: 48px; opacity: 0.3; margin-bottom: 0.75rem;"></i>
        <h4>No Saved Pieces</h4>
        <p style="font-size: 0.8rem; margin-top: 0.35rem;">Tap the heart icon on any piece to save it here.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = wishlist
    .map((id) => {
      const product = products.find((p) => p.id === id);
      if (!product) return '';
      const sizes = Array.isArray(product.sizes) ? product.sizes : [product.sizes];

      return `
      <div class="wishlist-item-row">
        <img src="${product.imageFront}" alt="${product.name}" class="wishlist-item-img">
        <div class="wishlist-item-info">
          <span class="wishlist-item-cat">${product.categoryName || product.category}</span>
          <h4 class="wishlist-item-title">${product.name}</h4>
          <span class="wishlist-item-price">${DataStore.formatPrice(product.price, true)}</span>
        </div>
        <div class="wishlist-item-actions">
          <button class="btn-wishlist-move" onclick="DataStore.addToCart('${product.id}', '${sizes[0]}', 1); updateCartBadge(); renderCartFeed(); toggleCartDrawer(true);">
            + Add Bag
          </button>
          <button class="btn-wishlist-del" onclick="DataStore.toggleWishlist('${product.id}'); updateWishlistBadge(); renderWishlistFeed();">Remove</button>
        </div>
      </div>
    `;
    })
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function toggleMobileMenu(open) {
  const drawer = document.getElementById('mobNavDrawer');
  const backdrop = document.getElementById('mobNavBackdrop');
  if (drawer && backdrop) {
    if (open) {
      drawer.classList.add('open');
      backdrop.classList.add('open');
    } else {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
    }
  }
}

function openSizeGuideModal() {
  document.getElementById('sizeGuideModal')?.classList.add('open');
  document.getElementById('sizeGuideBackdrop')?.classList.add('open');
}

function closeSizeGuideModal() {
  document.getElementById('sizeGuideModal')?.classList.remove('open');
  document.getElementById('sizeGuideBackdrop')?.classList.remove('open');
}

function openCheckoutModal() {
  toggleCartDrawer(false);
  document.getElementById('checkoutModal')?.classList.add('open');
  document.getElementById('checkoutBackdrop')?.classList.add('open');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('open');
  document.getElementById('checkoutBackdrop')?.classList.remove('open');
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('chkName').value.trim();
  const email = document.getElementById('chkEmail').value.trim();
  const phone = document.getElementById('chkPhone').value.trim();
  const address = document.getElementById('chkAddress').value.trim();
  const city = document.getElementById('chkCity').value.trim();
  const country = document.getElementById('chkCountry').value;

  const cart = DataStore.getCart();
  if (cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  const newOrder = DataStore.createOrder({
    customer: { name, email, phone },
    shippingAddress: { address, city, country },
    items: cart,
    paymentMethod: 'Credit / Debit Card (Visa, Mastercard, AMEX)',
    currency: DataStore.getActiveCurrency().code
  });

  closeCheckoutModal();
  updateCartBadge();
  renderCartFeed();

  showToast(`Order Placed! Tracking ID: ${newOrder.trackingId}`);
  setTimeout(() => {
    window.location.href = `/track.html?id=${newOrder.trackingId}`;
  }, 1500);
}

function showToast(msg) {
  const hub = document.getElementById('toastHub');
  if (!hub) return;

  const toast = document.createElement('div');
  toast.className = 'store-toast';
  toast.innerHTML = `<span>${msg}</span>`;
  hub.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
