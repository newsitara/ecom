// ==========================================================================
// NEW SITARA INTERPRIZES — E-COMMERCE ENGINE & CATALOG
// ==========================================================================

const PRODUCTS_DATA = [
  {
    id: 'ns-001',
    name: 'Atelier Double-Breasted Trench',
    category: 'outerwear',
    categoryName: 'Outerwear',
    price: 340,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Crafted from Italian storm-resistant gabardine with structured drop shoulders and custom engraved New Sitara gold horn buttons.',
    specs: 'Fabric: 100% Water-repellent Cotton Gabardine • Lining: Cupro Silk • Made in Portugal • Hand-finished edges',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-002',
    name: 'Obsidian 520GSM Loopback Hoodie',
    category: 'tops',
    categoryName: 'Tops & Knits',
    price: 185,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Ultra-heavyweight 520 GSM pre-shrunk French terry. Featuring a double-layered structured hood with subtle tonal NS monogram embroidery.',
    specs: 'Fabric: 100% Organic Heavyweight Cotton • Custom Gold Aglets • Ribbed Side Panels • Relaxed Boxy Fit',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-003',
    name: 'Pleated Wide-Leg Wool Trouser',
    category: 'bottoms',
    categoryName: 'Bottoms',
    price: 240,
    tag: 'Limited Edition',
    imageFront: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Architectural double-pleated silhouette tailored from virgin wool blend. Features a relaxed drape through the leg and adjustable waist tabs.',
    specs: 'Fabric: 85% Virgin Wool, 15% Mohair • Horn Button Fastening • Deep Slanted Pockets • Raw Hem Finishing',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: 'ns-004',
    name: 'Monogram Heavyweight Boxy Tee',
    category: 'tops',
    categoryName: 'Tops & Knits',
    price: 95,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'
    ],
    description: '300 GSM combed cotton jersey in washed charcoal black. High ribbed collar with embroidered gold NS emblem on chest.',
    specs: 'Fabric: 100% Combed Compact Cotton • Pre-shrunk & Enzyme Washed • Drop Shoulder Silhouette',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-005',
    name: 'Architectural Cropped Bomber',
    category: 'outerwear',
    categoryName: 'Outerwear',
    price: 395,
    tag: 'Exclusive Drop',
    imageFront: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Structured nylon shell with PrimaLoft insulation, two-way heavy matte gold zipper, and exaggerated storm flap detailing.',
    specs: 'Fabric: Italian Technical Nylon • PrimaLoft Gold Insulation • Ribbed Wool Cuffs • Heavyweight Hardware',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-006',
    name: 'Modular Relaxed Cargo Trouser',
    category: 'bottoms',
    categoryName: 'Bottoms',
    price: 210,
    tag: 'Selling Fast',
    imageFront: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Heavy cotton ripstop trousers featuring bellowed cargo pockets with concealed magnetic closures and adjustable drawstring ankles.',
    specs: 'Fabric: 100% Military-grade Cotton Ripstop • Magnetic Pocket Fasteners • Reinforced Knee Articulation',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: 'ns-007',
    name: 'Cashmere-Blend Minimal Knit',
    category: 'tops',
    categoryName: 'Tops & Knits',
    price: 260,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop'
    ],
    description: '7-gauge seamless knit in natural un-dyed oatmeal. Incredibly soft tactile hand-feel with relaxed drop sleeves.',
    specs: 'Fabric: 70% Extra-fine Merino, 30% Mongolian Cashmere • Seamless Tubular Construction • Hand Wash Only',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-008',
    name: 'Overcoat in Melton Wool Noir',
    category: 'outerwear',
    categoryName: 'Outerwear',
    price: 460,
    tag: 'Archival Piece',
    imageFront: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Full-length tailored coat constructed from 800 GSM heavy Melton wool. Peak lapels, deep central vent, and internal passport pocket.',
    specs: 'Fabric: 100% Heavyweight Melton Wool • Cupro Satin Lining • Hand-set Shoulder Pads • Made in Italy',
    sizes: ['S', 'M', 'L', 'XL']
  }
];

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
let currentCategory = 'all';
let currentSort = 'featured';
let cart = JSON.parse(localStorage.getItem('ns_cart') || '[]');
let activePromoDiscount = 0; // percentage e.g. 0.15 for 15%
let activeModalProduct = null;
let activeModalSize = 'M';

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
  renderCart();
  updateFooterYear();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// ==========================================================================
// CATALOG RENDER & FILTER ENGINE
// ==========================================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // Filter
  let list = PRODUCTS_DATA.filter((p) => {
    if (currentCategory === 'all') return true;
    return p.category === currentCategory;
  });

  // Sort
  if (currentSort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Update counts
  const countAll = document.getElementById('countAll');
  if (countAll) countAll.textContent = PRODUCTS_DATA.length;

  grid.innerHTML = list
    .map(
      (product) => `
    <div class="product-card" data-id="${product.id}">
      <div class="card-media-wrap">
        <span class="card-badge">${product.tag}</span>
        <img src="${product.imageFront}" alt="${product.name}" class="product-img product-img-front" loading="lazy">
        <img src="${product.imageBack}" alt="${product.name} alternate view" class="product-img product-img-back" loading="lazy">
        
        <div class="card-actions-overlay">
          <button class="btn-quickview" onclick="openQuickView('${product.id}')">Quick View</button>
          <div class="quick-sizes-bar">
            ${product.sizes.map((s) => `<button class="quick-size-btn" onclick="quickAddToCart('${product.id}', '${s}')">${s}</button>`).join('')}
          </div>
        </div>
      </div>

      <div class="card-details">
        <span class="card-category">${product.categoryName}</span>
        <h3 class="card-title" onclick="openQuickView('${product.id}')">${product.name}</h3>
        
        <div class="card-price-row">
          <span class="card-price">$${product.price}.00</span>
          <span class="card-stock-hint">● In Stock</span>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function filterCategory(category) {
  currentCategory = category;

  document.querySelectorAll('.filter-pill').forEach((pill) => {
    if (pill.dataset.category === category) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  renderProducts();

  // Smooth scroll to catalog if clicked from outside
  const catalog = document.getElementById('catalog');
  if (catalog && window.scrollY < catalog.offsetTop - 150) {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleSortChange(e) {
  currentSort = e.target.value;
  renderProducts();
}

// ==========================================================================
// QUICK VIEW MODAL
// ==========================================================================
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  activeModalProduct = product;
  activeModalSize = product.sizes[0];

  const modal = document.getElementById('quickViewModal');
  const overlay = document.getElementById('quickViewOverlay');
  const content = document.getElementById('modalProductContent');

  content.innerHTML = `
    <div class="modal-gallery-col">
      <img src="${product.gallery[0]}" alt="${product.name}" class="modal-main-img" id="modalMainImg">
      <div class="modal-thumbs">
        ${product.gallery
          .map(
            (img, index) => `
          <img src="${img}" alt="Thumbnail ${index + 1}" class="modal-thumb ${index === 0 ? 'active' : ''}" onclick="switchModalImage('${img}', this)">
        `
          )
          .join('')}
      </div>
    </div>

    <div class="modal-info-col">
      <span class="modal-cat">${product.categoryName} • ${product.tag}</span>
      <h2 class="modal-title">${product.name}</h2>
      <div class="modal-price">$${product.price}.00 USD</div>
      <p class="modal-desc">${product.description}</p>

      <div class="modal-size-section">
        <div class="size-header-row">
          <span>SELECT SIZE</span>
          <span class="size-guide-link" onclick="showToast('True to size tailored fit.')">Size Guide ↗</span>
        </div>
        <div class="size-pills-row">
          ${product.sizes
            .map(
              (s, i) => `
            <button class="size-pill ${i === 0 ? 'active' : ''}" onclick="selectModalSize('${s}', this)">${s}</button>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="modal-craft-specs">
        <strong>Atelier Specifications:</strong><br>
        ${product.specs}
      </div>

      <button class="btn btn-gold btn-block" onclick="addModalProductToBag()">
        Add to Shopping Bag — $${product.price}.00
      </button>
    </div>
  `;

  modal.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
}

function switchModalImage(src, thumbEl) {
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) mainImg.src = src;

  document.querySelectorAll('.modal-thumb').forEach((t) => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function selectModalSize(size, pillEl) {
  activeModalSize = size;
  document.querySelectorAll('.size-pill').forEach((p) => p.classList.remove('active'));
  if (pillEl) pillEl.classList.add('active');
}

function addModalProductToBag() {
  if (!activeModalProduct) return;
  addToCart(activeModalProduct.id, activeModalSize);
  closeQuickView();
  toggleCartDrawer(true);
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  const overlay = document.getElementById('quickViewOverlay');
  if (modal) modal.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// SHOPPING BAG & CART SYSTEM
// ==========================================================================
function quickAddToCart(productId, size) {
  addToCart(productId, size);
  toggleCartDrawer(true);
}

function addToCart(productId, size) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex((item) => item.id === productId && item.size === size);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageFront,
      size: size,
      categoryName: product.categoryName,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  updateCartBadge();
  showToast(`Added ${product.name} (${size}) to your bag.`);
}

function updateCartQty(productId, size, delta) {
  const itemIndex = cart.findIndex((i) => i.id === productId && i.size === size);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;

  if (cart[itemIndex].qty <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveCart();
  renderCart();
  updateCartBadge();
}

function removeFromCart(productId, size) {
  cart = cart.filter((i) => !(i.id === productId && i.size === size));
  saveCart();
  renderCart();
  updateCartBadge();
  showToast('Item removed from shopping bag.');
}

function saveCart() {
  localStorage.setItem('ns_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartCountBadge');
  const countText = document.getElementById('cartTotalItemsText');

  if (badge) badge.textContent = count;
  if (countText) countText.textContent = `(${count} ${count === 1 ? 'item' : 'items'})`;
}

function renderCart() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i data-lucide="shopping-bag"></i>
        <h4>Your bag is currently empty</h4>
        <p>Explore the inaugural drop and add pieces to your collection.</p>
      </div>
    `;
    updatePricing(0);
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-variant">Size: ${item.size} • ${item.categoryName}</span>
        <div class="cart-qty-row">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty('${item.id}', '${item.size}', -1)">-</button>
            <span class="qty-number">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.id}', '${item.size}', 1)">+</button>
          </div>
          <span class="cart-item-price">$${item.price * item.qty}.00</span>
          <button class="cart-remove-btn" onclick="removeFromCart('${item.id}', '${item.size}')">Remove</button>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  updatePricing(subtotal);

  if (window.lucide) window.lucide.createIcons();
}

function updatePricing(subtotal) {
  const subtotalEl = document.getElementById('cartSubtotalPrice');
  const discountRow = document.getElementById('discountRow');
  const discountEl = document.getElementById('cartDiscountPrice');
  const shippingEl = document.getElementById('cartShippingPrice');
  const totalEl = document.getElementById('cartTotalPrice');
  const shippingText = document.getElementById('shippingProgressText');
  const shippingBar = document.getElementById('shippingBarFill');

  // Free shipping threshold = $150
  const threshold = 150;
  const isFreeShipping = subtotal >= threshold;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : 15;

  // Free shipping progress bar
  if (shippingBar && shippingText) {
    if (subtotal === 0) {
      shippingBar.style.width = '0%';
      shippingText.textContent = `Add $${threshold} for Free Worldwide Shipping`;
    } else if (isFreeShipping) {
      shippingBar.style.width = '100%';
      shippingText.textContent = `✦ You've Unlocked Free Worldwide Express Shipping!`;
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min(100, (subtotal / threshold) * 100);
      shippingBar.style.width = `${pct}%`;
      shippingText.textContent = `Add $${remaining}.00 more for Free Worldwide Shipping`;
    }
  }

  // Discount
  const discountAmount = subtotal * activePromoDiscount;

  if (activePromoDiscount > 0) {
    if (discountRow) discountRow.style.display = 'flex';
    if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)} USD`;
}

function applyPromoCode() {
  const input = document.getElementById('promoInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();

  if (code === 'SITARA15' || code === 'VIP15') {
    activePromoDiscount = 0.15;
    showToast('Promo code applied: 15% discount!');
    renderCart();
  } else if (code === '') {
    showToast('Please enter a promo code.');
  } else {
    showToast('Invalid promo code. Try SITARA15');
  }
}

function toggleCartDrawer(forceOpen = false) {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (!drawer || !overlay) return;

  if (forceOpen || !drawer.classList.contains('open')) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// CHECKOUT HANDLERS
// ==========================================================================
function handleCheckout(method) {
  if (cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  if (method === 'whatsapp') {
    // Format WhatsApp Order Message
    const orderItems = cart.map((i) => `• ${i.name} (Size: ${i.size}, Qty: ${i.qty}) - $${i.price * i.qty}`).join('%0A');
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const text = `Hello New Sitara Concierge! I would like to place an order:%0A%0A${orderItems}%0A%0AEstimated Total: $${subtotal}.00 USD%0APlease provide payment & delivery details.`;

    window.open(`https://wa.me/?text=${text}`, '_blank');
    showToast('Opening WhatsApp with your order summary...');
  } else {
    // Stripe/Card simulated secure flow
    showToast('🔒 Initiating 256-bit encrypted checkout session...');
    setTimeout(() => {
      alert('New Sitara Checkout Gateway:\n\nThank you for choosing New Sitara Interprizes.\nOur payment integration will connect to your verified merchant account!');
    }, 800);
  }
}

// ==========================================================================
// GLOBAL SEARCH MODAL
// ==========================================================================
function openSearchModal() {
  const modal = document.getElementById('searchModal');
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('globalSearchInput');

  if (modal && overlay) {
    modal.classList.add('open');
    overlay.classList.add('open');
    if (input) {
      input.value = '';
      input.focus();
    }
  }
  handleLiveSearch({ target: { value: '' } });
}

function closeSearchModal() {
  const modal = document.getElementById('searchModal');
  const overlay = document.getElementById('searchOverlay');
  if (modal) modal.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

function handleLiveSearch(e) {
  const query = e.target.value.trim().toLowerCase();
  const box = document.getElementById('searchResultsBox');
  if (!box) return;

  const matches = PRODUCTS_DATA.filter((p) => {
    if (!query) return true;
    return p.name.toLowerCase().includes(query) || p.categoryName.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
  });

  if (matches.length === 0) {
    box.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; padding: 1rem 0;">No matching products found for "${query}".</p>`;
    return;
  }

  box.innerHTML = matches
    .map(
      (p) => `
    <div class="search-result-item" onclick="openQuickView('${p.id}'); closeSearchModal();">
      <img src="${p.imageFront}" alt="${p.name}" class="search-result-img">
      <div>
        <h4 style="font-size: 0.95rem; font-family: var(--font-serif);">${p.name}</h4>
        <span style="font-size: 0.72rem; color: var(--gold-primary);">$${p.price}.00 • ${p.categoryName}</span>
      </div>
    </div>
  `
    )
    .join('');
}

// ==========================================================================
// MOBILE MENU DRAWER
// ==========================================================================
function toggleMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  if (!drawer || !overlay) return;

  drawer.classList.toggle('open');
  overlay.classList.toggle('open');
}

// ==========================================================================
// NEWSLETTER & TOASTS
// ==========================================================================
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('newsEmail');
  if (email && email.value) {
    showToast('Welcome to the New Sitara Inner Circle. Check your inbox for private access.');
    email.value = '';
  }
  return false;
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.innerHTML = `<span>✦</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function updateFooterYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}
