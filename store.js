// ==========================================================================
// NEW SITARA INTERPRIZES — 1-PAGE UNIFIED BOUTIQUE ENGINE
// ==========================================================================

const BOUTIQUE_DATA = [
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
    specs: '✦ 100% Water-repellent Cotton Gabardine • Cupro Silk Lining • Made in Portugal',
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
    specs: '✦ 100% Organic Heavyweight Cotton • Custom Gold Aglets • Relaxed Boxy Cut',
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
    specs: '✦ 85% Virgin Wool, 15% Mohair • Deep Slanted Pockets • Tailored Slouch',
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
    specs: '✦ 100% Combed Compact Cotton • Pre-shrunk & Enzyme Washed',
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
    description: 'Structured technical nylon with PrimaLoft insulation, two-way heavy matte gold zipper, and storm flap detailing.',
    specs: '✦ Italian Technical Nylon • PrimaLoft Gold Insulation • Ribbed Wool Cuffs',
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
    specs: '✦ 100% Military-grade Cotton Ripstop • Magnetic Pocket Fasteners',
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
    specs: '✦ 70% Extra-fine Merino, 30% Mongolian Cashmere • Seamless Construction',
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
    specs: '✦ 100% Heavyweight Melton Wool • Cupro Satin Lining • Made in Italy',
    sizes: ['S', 'M', 'L', 'XL']
  }
];

// State
let selectedProductId = BOUTIQUE_DATA[0].id;
let selectedSpotlightSize = BOUTIQUE_DATA[0].sizes[0];
let activeCategory = 'all';
let activeSort = 'featured';
let searchQuery = '';
let cart = JSON.parse(localStorage.getItem('ns_cart') || '[]');
let activePromoDiscount = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderSpotlightStage(BOUTIQUE_DATA[0]);
  renderBoutiqueGrid();
  updateCartBadge();
  renderCart();

  if (window.lucide) window.lucide.createIcons();
});

// ==========================================================================
// SPOTLIGHT MASTER STAGE
// ==========================================================================
function renderSpotlightStage(product) {
  selectedProductId = product.id;
  selectedSpotlightSize = product.sizes[0];

  const imgEl = document.getElementById('spotlightImg');
  const tagEl = document.getElementById('spotlightTag');
  const catEl = document.getElementById('spotlightCategory');
  const titleEl = document.getElementById('spotlightTitle');
  const priceEl = document.getElementById('spotlightPrice');
  const btnPriceEl = document.getElementById('spotlightBtnPrice');
  const descEl = document.getElementById('spotlightDesc');
  const specsEl = document.getElementById('spotlightSpecs');
  const sizeGroupEl = document.getElementById('spotlightSizeGroup');
  const thumbStrip = document.getElementById('spotlightThumbStrip');

  if (imgEl) imgEl.src = product.gallery[0];
  if (tagEl) tagEl.textContent = product.tag;
  if (catEl) catEl.textContent = product.categoryName.toUpperCase();
  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.textContent = `$${product.price}.00`;
  if (btnPriceEl) btnPriceEl.textContent = `$${product.price}.00`;
  if (descEl) descEl.textContent = product.description;
  if (specsEl) specsEl.innerHTML = product.specs.split('•').map((s) => `<span>${s.trim()}</span>`).join('');

  if (thumbStrip) {
    thumbStrip.innerHTML = product.gallery
      .map(
        (gImg, idx) => `
      <img src="${gImg}" alt="Thumb" class="spotlight-thumb ${idx === 0 ? 'active' : ''}" onclick="setSpotlightMainImg('${gImg}', this)">
    `
      )
      .join('');
  }

  if (sizeGroupEl) {
    sizeGroupEl.innerHTML = product.sizes
      .map(
        (size, idx) => `
      <button class="spotlight-size-pill ${idx === 0 ? 'active' : ''}" onclick="setSpotlightSize('${size}', this)">${size}</button>
    `
      )
      .join('');
  }

  // Highlight card in grid
  document.querySelectorAll('.boutique-card').forEach((card) => {
    if (card.dataset.id === product.id) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
}

function setSpotlightMainImg(src, thumbEl) {
  const imgEl = document.getElementById('spotlightImg');
  if (imgEl) imgEl.src = src;

  document.querySelectorAll('.spotlight-thumb').forEach((t) => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function setSpotlightSize(size, pillEl) {
  selectedSpotlightSize = size;
  document.querySelectorAll('.spotlight-size-pill').forEach((p) => p.classList.remove('active'));
  if (pillEl) pillEl.classList.add('active');
}

function addCurrentSpotlightToCart() {
  addToCart(selectedProductId, selectedSpotlightSize);
  toggleCartDrawer(true);
}

// ==========================================================================
// GRID RENDERER
// ==========================================================================
function renderBoutiqueGrid() {
  const grid = document.getElementById('boutiqueGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  let items = BOUTIQUE_DATA.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchQuery =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.categoryName.toLowerCase().includes(searchQuery);
    return matchCat && matchQuery;
  });

  if (activeSort === 'price-asc') {
    items.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    items.sort((a, b) => b.price - a.price);
  }

  if (countEl) {
    countEl.textContent = `Showing ${items.length} of ${BOUTIQUE_DATA.length} pieces`;
  }

  grid.innerHTML = items
    .map(
      (product) => `
    <div class="boutique-card ${product.id === selectedProductId ? 'selected' : ''}" data-id="${product.id}" onclick="selectProduct('${product.id}')">
      <div class="card-thumb-wrap">
        <span class="card-tag-badge">${product.tag}</span>
        <img src="${product.imageFront}" alt="${product.name}" class="card-img-front" loading="lazy">
        <img src="${product.imageBack}" alt="${product.name}" class="card-img-back" loading="lazy">

        <div class="card-quick-sizes" onclick="event.stopPropagation()">
          ${product.sizes.map((s) => `<button class="quick-size-chip" onclick="quickAdd('${product.id}', '${s}', event)">${s}</button>`).join('')}
        </div>
      </div>

      <div class="card-info-wrap">
        <span class="card-cat">${product.categoryName}</span>
        <h4 class="card-name">${product.name}</h4>
        <div class="card-price-line">
          <span class="card-price-num">$${product.price}.00</span>
          <span class="card-active-indicator">${product.id === selectedProductId ? '● Viewing' : 'View ↗'}</span>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function selectProduct(productId) {
  const prod = BOUTIQUE_DATA.find((p) => p.id === productId);
  if (prod) {
    renderSpotlightStage(prod);

    // On mobile, scroll spotlight into view
    if (window.innerWidth <= 900) {
      const stage = document.getElementById('spotlightStage');
      if (stage) stage.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function setBoutiqueCategory(cat, pillEl) {
  activeCategory = cat;
  document.querySelectorAll('.cat-pill').forEach((p) => p.classList.remove('active'));
  if (pillEl) pillEl.classList.add('active');
  renderBoutiqueGrid();
}

function handleBoutiqueSort(e) {
  activeSort = e.target.value;
  renderBoutiqueGrid();
}

function handleBoutiqueSearch(e) {
  searchQuery = e.target.value.trim().toLowerCase();
  renderBoutiqueGrid();
}

function quickAdd(productId, size, event) {
  event.stopPropagation();
  addToCart(productId, size);
  toggleCartDrawer(true);
}

// ==========================================================================
// CART & SHOPPING BAG
// ==========================================================================
function addToCart(productId, size) {
  const product = BOUTIQUE_DATA.find((p) => p.id === productId);
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
        <p>Select pieces from the collection on the right.</p>
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

  const threshold = 150;
  const isFreeShipping = subtotal >= threshold;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : 15;

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

function handleCheckout(method) {
  if (cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  if (method === 'whatsapp') {
    const orderItems = cart.map((i) => `• ${i.name} (Size: ${i.size}, Qty: ${i.qty}) - $${i.price * i.qty}`).join('%0A');
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const text = `Hello New Sitara Concierge! I would like to place an order:%0A%0A${orderItems}%0A%0AEstimated Total: $${subtotal}.00 USD%0APlease provide payment & delivery details.`;

    window.open(`https://wa.me/?text=${text}`, '_blank');
    showToast('Opening WhatsApp with your order summary...');
  } else {
    showToast('🔒 Initiating 256-bit encrypted checkout session...');
    setTimeout(() => {
      alert('New Sitara Checkout Gateway:\n\nThank you for choosing New Sitara Interprizes.\nOur payment integration will connect to your verified merchant account!');
    }, 800);
  }
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
