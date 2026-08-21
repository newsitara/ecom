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

document.addEventListener('DOMContentLoaded', () => {
  initStore();
});

function initStore() {
  renderCategoryNavigation();
  renderCategoryPortals();
  renderFilterPills();
  renderFooterCategories();
  renderProductsGrid();
  updateCartBadge();
  renderCartFeed();

  if (window.lucide) window.lucide.createIcons();
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================================================
// 1. DYNAMIC CATEGORY NAVIGATION & PORTALS
// ==========================================================================
function renderCategoryNavigation() {
  const categories = DataStore.getCategories();
  const products = DataStore.getProducts();

  // Desktop Left Nav Links
  const desktopNav = document.getElementById('desktopNavLinks');
  if (desktopNav) {
    desktopNav.innerHTML = `
      <button class="nav-link-btn ${activeCategory === 'all' ? 'active' : ''}" onclick="filterByCategory('all')">Collection</button>
      ${categories
        .slice(0, 5)
        .map(
          (c) => `
        <button class="nav-link-btn ${activeCategory === (c.slug || c.id) ? 'active' : ''}" onclick="filterByCategory('${c.slug || c.id}')">${c.name.split('&')[0].trim()}</button>
      `
        )
        .join('')}
    `;
  }

  // Mobile Drawer Links
  const mobLinks = document.getElementById('mobDrawerLinks');
  if (mobLinks) {
    mobLinks.innerHTML = `
      <button class="mob-category-btn ${activeCategory === 'all' ? 'active' : ''}" onclick="filterByCategory('all'); toggleMobileMenu(false);">
        <span>All Collection</span>
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
}

function renderCategoryPortals() {
  const categories = DataStore.getCategories();
  const products = DataStore.getProducts();
  const row = document.getElementById('categoriesRow');
  if (!row) return;

  row.innerHTML = categories
    .map((c) => {
      const count = products.filter((p) => p.category === (c.slug || c.id)).length;
      return `
      <div class="category-card" onclick="filterByCategory('${c.slug || c.id}')">
        <img src="${c.image}" alt="${c.name}" class="cat-bg-image" loading="lazy">
        <div class="cat-card-overlay">
          <span class="cat-count-text">${count} Pieces</span>
          <h3 class="cat-title-text">${c.name}</h3>
          <span class="cat-link-text">Explore Department →</span>
        </div>
      </div>
    `;
    })
    .join('');
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
// 2. PRODUCT CATALOG GRID & FILTERING
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

    return catMatch && searchMatch;
  });

  // Sort
  if (activeSort === 'price-asc') {
    items.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    items.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'name-asc') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 1rem; color: var(--text-muted);">
        <i data-lucide="sparkles" style="width: 44px; height: 44px; margin-bottom: 1rem; color: var(--accent-blue);"></i>
        <h3 style="font-family: var(--font-display); font-size: 1.6rem; color: var(--text-main); font-weight:800;">No pieces found in this category</h3>
        <p style="margin-top: 0.5rem; font-size: 0.85rem;">Try clearing your search or exploring our other apparel divisions.</p>
        <button class="btn btn-dark" onclick="filterByCategory('all')" style="margin-top: 1.25rem; border-radius: 999px;">View All Collection</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  grid.innerHTML = items
    .map(
      (p) => `
    <div class="store-card" data-id="${p.id}">
      <div class="card-media" onclick="openProductModal('${p.id}')">
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
        <img src="${p.imageFront}" alt="${p.name}" class="card-img-front" loading="lazy">
        <img src="${p.imageBack || p.imageFront}" alt="${p.name} alternate view" class="card-img-back" loading="lazy">

        <!-- Mobile Floating Plus Action -->
        <button class="card-mob-btn" onclick="event.stopPropagation(); openProductModal('${p.id}')" aria-label="Quick View ${p.name}">
          <i data-lucide="plus"></i>
        </button>

        <!-- Desktop Hover Quick Strip -->
        <div class="card-hover-drawer">
          <button class="btn-card-quick" onclick="event.stopPropagation(); openProductModal('${p.id}')">Quick View</button>
          <div class="card-sizes-row">
            ${(Array.isArray(p.sizes) ? p.sizes : [p.sizes])
              .map((s) => `<button class="size-pill-btn" onclick="event.stopPropagation(); quickAddFromCard('${p.id}', '${s}')">${s}</button>`)
              .join('')}
          </div>
        </div>
      </div>

      <div class="card-content">
        <span class="card-category-label">${p.categoryName || p.category}</span>
        <h4 class="card-heading" onclick="openProductModal('${p.id}')">${p.name}</h4>
        
        <div class="card-meta-row">
          <span class="card-price-tag">$${p.price}.00</span>
          <span class="card-stock-tag">● In Stock</span>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function filterByCategory(catSlug, btnEl) {
  activeCategory = catSlug;

  // Sync pills
  document.querySelectorAll('.filter-pill').forEach((pill) => {
    if (pill.dataset.cat === catSlug) pill.classList.add('active');
    else pill.classList.remove('active');
  });

  // Sync desktop left links
  renderCategoryNavigation();
  renderProductsGrid();
  scrollToSection('catalogSection');
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
// 3. PRODUCT DETAIL MODAL
// ==========================================================================
function openProductModal(productId) {
  const products = DataStore.getProducts();
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  modalActiveProduct = product;
  const sizes = Array.isArray(product.sizes) ? product.sizes : [product.sizes];
  modalSelectedSize = sizes[0] || 'One Size';

  const modal = document.getElementById('productModal');
  const backdrop = document.getElementById('modalBackdrop');
  const body = document.getElementById('modalGridBody');

  const gallery = [product.imageFront, product.imageBack].filter(Boolean);

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
      <span class="modal-cat-tag">${product.categoryName || product.category}</span>
      <h2 class="modal-title">${product.name}</h2>
      <div class="modal-price">$${product.price}.00 USD</div>
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
            <button class="size-chip-btn ${i === 0 ? 'active' : ''}" onclick="selectModalSize('${s}', this)">${s}</button>
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

      <button class="btn btn-dark btn-block" onclick="addModalItemToCart()">
        Add to Shopping Bag — $${product.price}.00
      </button>
    </div>
  `;

  modal.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
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
// 4. SHOPPING BAG ENGINE
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
  const mobBadge = document.getElementById('mobBagBadge');

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
          <span class="cart-item-price">$${item.price * item.qty}.00</span>
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
      meterMsg.textContent = `Add $${threshold} for Free Worldwide Express`;
    } else if (isFree) {
      meterFill.style.width = '100%';
      meterMsg.textContent = `✦ You've Unlocked Free Worldwide Express Shipping!`;
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min(100, (subtotal / threshold) * 100);
      meterFill.style.width = `${pct}%`;
      meterMsg.textContent = `Add $${remaining}.00 more for Free Worldwide Express`;
    }
  }

  const discountAmount = subtotal * activePromoDiscount;

  if (activePromoDiscount > 0) {
    if (discRow) discRow.style.display = 'flex';
    if (discEl) discEl.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    if (discRow) discRow.style.display = 'none';
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  if (subEl) subEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shipEl) shipEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)} USD`;
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
// 5. FULL CHECKOUT FLOW & TRACKING GENERATION
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
        <div class="chk-item-price">$${i.price * i.qty}.00</div>
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

  document.getElementById('chkSubtotalVal').textContent = `$${subtotal.toFixed(2)}`;
  
  const discRow = document.getElementById('chkDiscountRow');
  const discVal = document.getElementById('chkDiscountVal');
  if (activePromoDiscount > 0) {
    discRow.style.display = 'flex';
    discVal.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    discRow.style.display = 'none';
  }

  document.getElementById('chkShippingVal').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  document.getElementById('chkTotalVal').textContent = `$${grandTotal.toFixed(2)} USD`;

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
  const itemsText = (o.items || []).map((i) => `• ${i.name} (Size: ${i.size}, Qty: ${i.qty})`).join('%0A');
  const trackUrl = `https://www.newsitara.com/track?id=${o.trackingId}`;

  const msg = `*NEW SITARA ORDER RECEIPT*%0A%0A*Tracking ID:* ${o.trackingId}%0A*Customer:* ${o.customer?.fullName || 'Client'}%0A*Total:* $${o.total}.00 USD%0A*Payment:* ${o.paymentMethod}%0A%0A*Garments:*%0A${itemsText}%0A%0A*Track Shipment Live:*%0A${trackUrl}`;

  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function closeReceiptModalAndShop() {
  document.getElementById('receiptModal').classList.remove('open');
  document.getElementById('receiptBackdrop').classList.remove('open');
  document.body.style.overflow = '';
  scrollToSection('catalogSection');
}

function executeQuickWhatsApp() {
  openCheckoutModal();
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
