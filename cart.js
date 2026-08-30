/**
 * NEW SITARA — Full-Page Shopping Bag Controller (cart.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initCartPage();
});

let appliedPromoCode = null;
let lastPlacedOrder = null;

function initCartPage() {
  renderLanguageDropdown();
  renderCurrencyDropdown();
  renderDesktopCategories();
  renderCartPage();
  updateNavBadges();
  
  if (window.lucide) window.lucide.createIcons();
}

function renderDesktopCategories() {
  const navLeft = document.getElementById('desktopNavLinks');
  if (!navLeft) return;

  const categories = DataStore.getCategories();
  const products = DataStore.getProducts();

  navLeft.innerHTML = `
    <a href="/store" class="nav-link-btn">Shop</a>
    
    <div class="nav-dropdown-wrap" id="navCategoryDropdownWrap">
      <button type="button" class="nav-link-btn nav-dropdown-btn" onclick="toggleNavCategoryDropdown(event)">
        <span>Categories</span>
        <i data-lucide="chevron-down" class="nav-chevron"></i>
      </button>
      <div class="nav-category-dropdown" id="navCategoryDropdown">
        <div class="nav-dropdown-head">Collections</div>
        ${categories
          .map((c) => {
            const count = products.filter((p) => p.category === (c.slug || c.id)).length;
            return `
            <a href="/store?cat=${c.slug || c.id}" class="nav-cat-item">
              <span class="nav-cat-name">${c.name}</span>
              <span class="nav-cat-count">${count}</span>
            </a>
          `;
          })
          .join('')}
      </div>
    </div>

    <a href="/store#lookbook" class="nav-link-btn">Lookbook</a>
  `;
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

document.addEventListener('click', (e) => {
  if (!e.target.closest('#navCategoryDropdownWrap')) {
    closeNavCategoryDropdown();
  }
});

function renderCartPage() {
  const cart = DataStore.getCart();
  const products = DataStore.getProducts();
  const container = document.getElementById('cartLayoutContainer');
  const countEl = document.getElementById('cartPageCount');
  
  const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  if (countEl) countEl.textContent = `(${totalCount} ${totalCount === 1 ? 'item' : 'items'})`;

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon-wrap">
          <i data-lucide="shopping-bag" style="width: 40px; height: 40px;"></i>
        </div>
        <h3>Your Shopping Bag is Empty</h3>
        <p>You have not added any atelier pieces to your bag yet. Explore our latest drops, outerwear, and streetwear.</p>
        <a href="/store" class="btn btn-dark" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2rem; border-radius: 999px; font-weight: 700; text-decoration: none;">
          <span>Explore Atelier Catalog</span>
          <i data-lucide="arrow-right"></i>
        </a>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let subtotal = 0;
  const itemsHtml = cart
    .map((item) => {
      const prod = products.find((p) => p.id === item.id);
      if (!prod) return '';

      const lineTotal = prod.price * item.quantity;
      subtotal += lineTotal;
      const formattedUnitPrice = DataStore.formatPrice(prod.price, true);
      const formattedLineTotal = DataStore.formatPrice(lineTotal, true);

      return `
      <div class="cart-page-item-row">
        <div class="item-info-col">
          <a href="/product.html?id=${prod.id}">
            <img src="${prod.imageFront}" alt="${prod.name}" class="item-thumbnail">
          </a>
          <div class="item-details">
            <span class="item-category-tag">${prod.categoryName || prod.category}</span>
            <a href="/product.html?id=${prod.id}" class="item-name-title">${prod.name}</a>
            <span class="item-size-pill">Size: <strong class="item-size-val">${item.size}</strong></span>
          </div>
        </div>

        <div class="item-unit-price-col">
          ${formattedUnitPrice}
        </div>

        <div class="item-qty-stepper-col">
          <div class="page-qty-stepper">
            <button type="button" class="page-qty-btn" onclick="updateItemQty('${item.id}', '${item.size}', -1)">−</button>
            <span class="page-qty-val">${item.quantity}</span>
            <button type="button" class="page-qty-btn" onclick="updateItemQty('${item.id}', '${item.size}', 1)">+</button>
          </div>
        </div>

        <div class="item-line-total-col">
          ${formattedLineTotal}
        </div>

        <div>
          <button type="button" class="item-remove-btn" onclick="removeItem('${item.id}', '${item.size}')" title="Remove piece">
            <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
          </button>
        </div>
      </div>
    `;
    })
    .join('');

  const activePromo = DataStore.validatePromo(appliedPromoCode || '');
  let discountUSD = 0;
  if (activePromo) {
    discountUSD = (subtotal * activePromo.discount) / 100;
  }
  const isFree = subtotal >= 150;
  const shipping = subtotal === 0 ? 0 : isFree ? 0 : 15;
  const grandTotal = Math.max(0, subtotal - discountUSD + shipping);

  const progress = Math.min(100, Math.round((subtotal / 150) * 100));
  const shippingMsg = isFree
    ? '✨ Unlocked FREE Worldwide Express Delivery!'
    : `Add ${DataStore.formatPrice(150 - subtotal, true)} for FREE Worldwide Express Shipping`;

  container.innerHTML = `
    <!-- Free Shipping Goal Banner -->
    <div class="cart-shipping-banner">
      <div class="shipping-banner-text">
        <span>${shippingMsg}</span>
        <span>${progress}%</span>
      </div>
      <div class="shipping-banner-track">
        <div class="shipping-banner-fill" style="width: ${progress}%;"></div>
      </div>
    </div>

    <div class="cart-layout-grid">
      <!-- Left Column: Items Table -->
      <div class="cart-items-pane">
        <div class="cart-table-head">
          <div>Product Details</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div class="col-total">Total</div>
          <div></div>
        </div>

        <div class="cart-items-list">
          ${itemsHtml}
        </div>

        <div class="cart-actions-bottom-row">
          <a href="/store" class="btn-cart-continue">
            <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
            <span>Continue Shopping</span>
          </a>
          <button type="button" class="btn-cart-clear" onclick="clearFullBag()">
            Clear Shopping Bag
          </button>
        </div>
      </div>

      <!-- Right Column: Sticky Summary Card -->
      <div class="cart-summary-pane">
        <div class="cart-summary-card">
          <h3 class="cart-summary-title">Order Summary</h3>

          <!-- Promo Box -->
          <div class="cart-page-promo-group">
            <input type="text" id="cartPagePromoInput" placeholder="Promo code (e.g. SITARA15)" value="${appliedPromoCode || ''}">
            <button type="button" onclick="applyPromoCode()">Apply</button>
          </div>

          <!-- Price Math Breakdown -->
          <div class="cart-page-math-breakdown">
            <div class="cart-page-math-line">
              <span>Subtotal</span>
              <span>${DataStore.formatPrice(subtotal, true)}</span>
            </div>
            ${
              discountUSD > 0
                ? `<div class="cart-page-math-line discount-line">
                    <span>Discount (${activePromo.discount}% OFF)</span>
                    <span>-${DataStore.formatPrice(discountUSD, true)}</span>
                  </div>`
                : ''
            }
            <div class="cart-page-math-line">
              <span>Worldwide Shipping</span>
              <span>${isFree ? 'FREE' : DataStore.formatPrice(shipping, true)}</span>
            </div>
            <div class="cart-page-math-line total-line">
              <span>Total Due</span>
              <span>${DataStore.formatPrice(grandTotal, true)} ${DataStore.getActiveCurrency().code}</span>
            </div>
          </div>

          <!-- Checkout CTA Button -->
          <button type="button" class="btn-cart-checkout-main" onclick="openCheckoutModal()">
            <span>Proceed to Secure Card Checkout</span>
            <i data-lucide="arrow-right"></i>
          </button>

          <!-- Trust Badges -->
          <div class="cart-trust-checklist">
            <div class="trust-check-item">
              <i data-lucide="shield-check"></i>
              <span>256-Bit SSL Bank-Grade Encrypted Checkout</span>
            </div>
            <div class="trust-check-item">
              <i data-lucide="credit-card"></i>
              <span>Card Payments Only (Visa, Mastercard, AMEX)</span>
            </div>
            <div class="trust-check-item">
              <i data-lucide="truck"></i>
              <span>Express Dispatch within 24h with Live Tracking</span>
            </div>
            <div class="trust-check-item">
              <i data-lucide="refresh-cw"></i>
              <span>14-Day Complimentary Exchange Guarantee</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function updateItemQty(id, size, delta) {
  DataStore.updateCartQty(id, size, delta);
  updateNavBadges();
  renderCartPage();
}

function removeItem(id, size) {
  DataStore.removeFromCart(id, size);
  updateNavBadges();
  renderCartPage();
  showToast('Removed piece from shopping bag.');
}

function clearFullBag() {
  if (confirm('Are you sure you want to clear your shopping bag?')) {
    DataStore.clearCart();
    updateNavBadges();
    renderCartPage();
    showToast('Shopping bag cleared.');
  }
}

function applyPromoCode() {
  const inp = document.getElementById('cartPagePromoInput');
  const code = inp?.value.trim();
  if (!code) return;

  const promo = DataStore.validatePromo(code);
  if (promo) {
    appliedPromoCode = promo.code;
    renderCartPage();
    showToast(`Promo "${promo.code}" applied: ${promo.discount}% OFF!`);
  } else {
    showToast('Invalid or expired promo code. Try SITARA15');
  }
}

function updateNavBadges() {
  const cart = DataStore.getCart();
  const count = cart.reduce((sum, i) => sum + i.quantity, 0);
  const badge = document.getElementById('cartCountBadge');
  if (badge) badge.textContent = count;
  const mobBadge = document.getElementById('mobCartBadge');
  if (mobBadge) mobBadge.textContent = count;
}

// ==========================================================================
// FULL CHECKOUT & RECEIPT MODAL
// ==========================================================================
function openCheckoutModal() {
  const cart = DataStore.getCart();
  const products = DataStore.getProducts();

  if (cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  // Render mini items in checkout summary
  const miniList = document.getElementById('chkItemsList');
  if (miniList) {
    miniList.innerHTML = cart
      .map((item) => {
        const prod = products.find((p) => p.id === item.id);
        if (!prod) return '';
        const lineTotal = prod.price * item.quantity;
        return `
        <div class="chk-item-row">
          <img src="${prod.imageFront}" alt="${prod.name}" class="chk-item-img">
          <div class="chk-item-details">
            <div class="chk-item-title">${prod.name}</div>
            <div class="chk-item-meta">Size: ${item.size} • Qty: ${item.quantity}</div>
          </div>
          <div class="chk-item-price">${DataStore.formatPrice(lineTotal, true)}</div>
        </div>
      `;
      })
      .join('');
  }

  let subtotal = 0;
  cart.forEach((item) => {
    const prod = products.find((p) => p.id === item.id);
    if (prod) subtotal += prod.price * item.quantity;
  });

  const activePromo = DataStore.validatePromo(appliedPromoCode || '');
  let discountUSD = 0;
  if (activePromo) {
    discountUSD = (subtotal * activePromo.discount) / 100;
  }
  const isFree = subtotal >= 150;
  const shipping = isFree ? 0 : 15;
  const grandTotal = Math.max(0, subtotal - discountUSD + shipping);

  document.getElementById('chkSubtotalVal').textContent = DataStore.formatPrice(subtotal, true);
  
  const discRow = document.getElementById('chkDiscountRow');
  const discVal = document.getElementById('chkDiscountVal');
  if (discountUSD > 0) {
    discRow.style.display = 'flex';
    discVal.textContent = `-${DataStore.formatPrice(discountUSD, true)}`;
  } else {
    discRow.style.display = 'none';
  }

  document.getElementById('chkShippingVal').textContent = isFree ? 'FREE' : DataStore.formatPrice(shipping, true);
  document.getElementById('chkTotalVal').textContent = `${DataStore.formatPrice(grandTotal, true)} ${DataStore.getActiveCurrency().code}`;

  populateCountryDropdown();
  setupCardFormatters();
  loadBankDetailsIntoCheckout();
  selectPayOption('hbl');

  document.getElementById('checkoutModal')?.classList.add('open');
  document.getElementById('checkoutBackdrop')?.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
}

let selectedPaymentType = 'hbl';

function selectPayOption(type) {
  selectedPaymentType = type;
  const optHbl = document.getElementById('optHblTransfer');
  const optCard = document.getElementById('optCardPayment');
  const hblBox = document.getElementById('hblPaymentDetailsBox');
  const cardBox = document.getElementById('cardPaymentDetailsBox');
  const txInput = document.getElementById('chkHblTxRef');
  const cardInput = document.getElementById('chkCardNumber');
  const cardExp = document.getElementById('chkCardExpiry');
  const cardCvc = document.getElementById('chkCardCvc');
  const cardName = document.getElementById('chkCardName');

  if (type === 'hbl') {
    if (optHbl) {
      optHbl.style.borderColor = '#111827';
      optHbl.style.background = '#FAF8F5';
      const rad = optHbl.querySelector('input[type="radio"]');
      if (rad) rad.checked = true;
    }
    if (optCard) {
      optCard.style.borderColor = '#E5E7EB';
      optCard.style.background = '#FFFFFF';
    }
    if (hblBox) hblBox.style.display = 'block';
    if (cardBox) cardBox.style.display = 'none';

    if (txInput) txInput.required = true;
    if (cardInput) cardInput.required = false;
    if (cardExp) cardExp.required = false;
    if (cardCvc) cardCvc.required = false;
    if (cardName) cardName.required = false;
  } else {
    if (optCard) {
      optCard.style.borderColor = '#111827';
      optCard.style.background = '#FAF8F5';
      const rad = optCard.querySelector('input[type="radio"]');
      if (rad) rad.checked = true;
    }
    if (optHbl) {
      optHbl.style.borderColor = '#E5E7EB';
      optHbl.style.background = '#FFFFFF';
    }
    if (hblBox) hblBox.style.display = 'none';
    if (cardBox) {
      cardBox.style.display = 'grid';
    }

    if (txInput) txInput.required = false;
    if (cardInput) cardInput.required = true;
    if (cardExp) cardExp.required = true;
    if (cardCvc) cardCvc.required = true;
    if (cardName) cardName.required = true;
  }
  if (window.lucide) window.lucide.createIcons();
}

function copyBankField(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent.trim();
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied to clipboard: ${text}`);
  }).catch(() => {
    showToast(`Copied: ${text}`);
  });
}

function loadBankDetailsIntoCheckout() {
  const bank = DataStore.getBankSettings();
  const titleEl = document.getElementById('hblDisplayTitle');
  const accEl = document.getElementById('hblDisplayAccount');
  const ibanEl = document.getElementById('hblDisplayIban');
  const raastEl = document.getElementById('hblDisplayRaast');

  if (titleEl) titleEl.textContent = bank.accountTitle || 'NEW SITARA ATELIER';
  if (accEl) accEl.textContent = bank.accountNumber || '00427991829103';
  if (ibanEl) ibanEl.textContent = bank.iban || 'PK36HABB0000427991829103';
  if (raastEl) raastEl.textContent = bank.raastId || '03001234567';
}

function setupCardFormatters() {
  const cardInput = document.getElementById('chkCardNumber');
  if (cardInput && !cardInput.dataset.formatted) {
    cardInput.dataset.formatted = 'true';
    cardInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      val = val.replace(/(.{4})/g, '$1 ').trim();
      e.target.value = val;
    });
  }

  const expInput = document.getElementById('chkCardExpiry');
  if (expInput && !expInput.dataset.formatted) {
    expInput.dataset.formatted = 'true';
    expInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (val.length >= 3) {
        val = `${val.substring(0, 2)}/${val.substring(2)}`;
      }
      e.target.value = val;
    });
  }
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('open');
  document.getElementById('checkoutBackdrop')?.classList.remove('open');
  document.body.style.overflow = '';
}

function handlePlaceOrder(e) {
  e.preventDefault();

  const cart = DataStore.getCart();
  const products = DataStore.getProducts();
  if (cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  let subtotal = 0;
  const items = cart.map((item) => {
    const prod = products.find((p) => p.id === item.id);
    const price = prod ? prod.price : 0;
    subtotal += price * item.quantity;
    return {
      id: item.id,
      name: prod ? prod.name : 'Luxury Apparel Piece',
      size: item.size,
      qty: item.quantity,
      price: price,
      image: prod ? prod.imageFront : ''
    };
  });

  const activePromo = DataStore.validatePromo(appliedPromoCode || '');
  let discountUSD = 0;
  if (activePromo) {
    discountUSD = (subtotal * activePromo.discount) / 100;
  }
  const isFree = subtotal >= 150;
  const shipping = isFree ? 0 : 15;
  const grandTotal = Math.round(Math.max(0, subtotal - discountUSD + shipping));

  const isHbl = selectedPaymentType === 'hbl';
  const txRef = isHbl ? (document.getElementById('chkHblTxRef')?.value.trim() || 'HBL-TRANSFER') : 'CARD-DIRECT';

  const fullName = document.getElementById('chkFullName')?.value.trim();
  const email = document.getElementById('chkEmail')?.value.trim();
  const phone = document.getElementById('chkPhone')?.value.trim();
  const street = document.getElementById('chkStreet')?.value.trim();
  const city = document.getElementById('chkCity')?.value.trim();
  const state = document.getElementById('chkState')?.value.trim() || '';
  const postalCode = document.getElementById('chkPostal')?.value.trim() || '';
  const country = document.getElementById('chkCountry')?.value || 'United States';

  if (!fullName || fullName.length < 2) {
    showToast('Please enter your full name.');
    return;
  }
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address.');
    return;
  }
  if (!street || street.length < 3) {
    showToast('Please enter a valid delivery address.');
    return;
  }

  const orderData = {
    customer: {
      fullName,
      email,
      phone,
      street,
      apartment: document.getElementById('chkApartment')?.value.trim() || '',
      city,
      state,
      postalCode,
      country
    },
    items: items,
    subtotal: subtotal,
    discount: discountUSD,
    shipping: shipping,
    total: grandTotal,
    currency: DataStore.getActiveCurrency().code,
    paymentMethod: isHbl ? 'HBL Direct Bank Transfer / Raast' : 'Credit / Debit Card (Visa, Mastercard, AMEX)',
    transactionRef: txRef,
    paymentStatus: isHbl ? 'Pending Verification' : 'Paid (Card)'
  };

  const createdOrder = DataStore.addOrder(orderData);
  lastPlacedOrder = createdOrder;

  // Clear Bag
  DataStore.clearCart();
  updateNavBadges();
  renderCartPage();

  // Close Checkout Modal & Open Order Receipt Modal
  closeCheckoutModal();
  openOrderReceiptModal(createdOrder);
}

function openOrderReceiptModal(order) {
  const trkIdEl = document.getElementById('receiptTrackingId');
  if (trkIdEl) trkIdEl.textContent = order.trackingId;

  const trackLink = document.getElementById('btnTrackShipmentLink');
  if (trackLink) trackLink.href = `/track?id=${order.trackingId}`;

  document.getElementById('receiptModal')?.classList.add('open');
  document.getElementById('receiptBackdrop')?.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
}

function copyReceiptTrackingId() {
  if (!lastPlacedOrder) return;
  navigator.clipboard.writeText(lastPlacedOrder.trackingId);
  showToast(`Tracking ID ${lastPlacedOrder.trackingId} copied to clipboard!`);
}

function closeReceiptModalAndShop() {
  document.getElementById('receiptModal')?.classList.remove('open');
  document.getElementById('receiptBackdrop')?.classList.remove('open');
  document.body.style.overflow = '';
  window.location.href = '/store';
}

// Multi-Country
function populateCountryDropdown() {
  const select = document.getElementById('chkCountry');
  if (!select) return;

  const countries = DataStore.getCountries();
  const currentVal = select.value;
  select.innerHTML = countries
    .map(
      (c) => `
    <option value="${c.name}" data-code="${c.code}" data-prefix="${c.phonePrefix}" data-currency="${c.currency}" ${currentVal === c.name || (!currentVal && c.code === 'US') ? 'selected' : ''}>
      ${c.name} (${c.phonePrefix})
    </option>
  `
    )
    .join('');
}

function handleCountryChange(e) {
  const selectedName = e.target.value;
  const country = DataStore.getCountryByName(selectedName);
  if (country) {
    const phoneInput = document.getElementById('chkPhone');
    if (phoneInput && (!phoneInput.value || phoneInput.value.startsWith('+'))) {
      phoneInput.placeholder = `${country.phonePrefix} 000-0000`;
      phoneInput.value = `${country.phonePrefix} `;
    }
  }
}

// Multi-Currency
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
  const langWrap = document.getElementById('langPickerWrap');
  if (langWrap) langWrap.classList.remove('open');
}

function selectCurrency(code, e) {
  if (e) e.stopPropagation();
  DataStore.setActiveCurrency(code);
  const wrap = document.getElementById('currencyPickerWrap');
  if (wrap) wrap.classList.remove('open');

  renderCurrencyDropdown();
  renderCartPage();
  showToast(`Currency changed to ${code} (${DataStore.getActiveCurrency().symbol})`);
}

// Multi-Language
function renderLanguageDropdown() {
  const languages = DataStore.getLanguages();
  const activeLang = DataStore.getActiveLanguage();

  const codeEl = document.getElementById('activeLangCode');
  const dropdown = document.getElementById('langDropdown');

  if (codeEl) codeEl.textContent = activeLang.code.toUpperCase();

  if (dropdown) {
    dropdown.innerHTML = Object.values(languages)
      .map(
        (l) => `
        <button type="button" class="lang-opt-btn ${l.code === activeLang.code ? 'active' : ''}" onclick="selectLanguage('${l.code}', event)">
          <span class="lang-opt-native">${l.nativeName}</span>
          <span class="lang-opt-code">${l.code.toUpperCase()}</span>
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
  const curWrap = document.getElementById('currencyPickerWrap');
  if (curWrap) curWrap.classList.remove('open');
}

function selectLanguage(code, e) {
  if (e) e.stopPropagation();
  DataStore.setActiveLanguage(code);
  const wrap = document.getElementById('langPickerWrap');
  if (wrap) wrap.classList.remove('open');

  renderLanguageDropdown();
  renderCartPage();
  showToast(`Language set to ${DataStore.getActiveLanguage().name}`);
}

function showToast(msg) {
  const hub = document.getElementById('toastHub');
  if (!hub) return;

  const toast = document.createElement('div');
  toast.className = 'store-toast';
  toast.innerHTML = `<span>✦</span> <span>${msg}</span>`;
  hub.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Global click outside to close dropdowns
window.addEventListener('click', () => {
  document.getElementById('currencyPickerWrap')?.classList.remove('open');
  document.getElementById('langPickerWrap')?.classList.remove('open');
});
