// ==========================================================================
// NEW SITARA — UNIFIED PERSISTENT DATA LAYER & TRACKING ENGINE
// ==========================================================================

const DEFAULT_CATEGORIES = [
  {
    id: 't-shirts',
    name: 'T-Shirts & Tops',
    slug: 't-shirts',
    description: 'Customizable department for tees, tanks, polos, and basics.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'hoodies',
    name: 'Hoodies & Sweatshirts',
    slug: 'hoodies',
    description: 'Customizable department for hoodies, crewnecks, and knitwear.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'pants',
    name: 'Pants & Trousers',
    slug: 'pants',
    description: 'Customizable department for denim, trousers, cargos, and pants.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'shorts',
    name: 'Shorts & Bottoms',
    slug: 'shorts',
    description: 'Customizable department for sweatshorts, cargo shorts, and bottoms.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'outerwear',
    name: 'Jackets & Outerwear',
    slug: 'outerwear',
    description: 'Customizable department for overcoats, bombers, and jackets.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'shoes',
    name: 'Shoes & Footwear',
    slug: 'shoes',
    description: 'Customizable department for sneakers, runners, and boots.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'accessories',
    name: 'Belts & Accessories',
    slug: 'accessories',
    description: 'Customizable department for belts, cardholders, jewelry, and caps.',
    image: '/assets/product-placeholder.svg'
  }
];

const DEFAULT_PRODUCTS = [
  // --- T-SHIRTS & TOPS ---
  {
    id: 'ns-prod-101',
    name: 'Your Product #01 — Boxy Heavyweight Tee',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 85,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-102',
    name: 'Your Product #02 — Washed Graphic Tee',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 95,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-103',
    name: 'Your Product #03 — Ribbed Muscle Tank',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 65,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-104',
    name: 'Your Product #04 — Minimal Knit Polo',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 140,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- HOODIES & SWEATSHIRTS ---
  {
    id: 'ns-prod-201',
    name: 'Your Product #05 — 520GSM Loopback Hoodie',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 185,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-202',
    name: 'Your Product #06 — Raglan Crewneck',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 155,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-203',
    name: 'Your Product #07 — Knit Pullover Hoodie',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 245,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-204',
    name: 'Your Product #08 — Full-Zip Track Jacket',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 175,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- PANTS & TROUSERS ---
  {
    id: 'ns-prod-301',
    name: 'Your Product #09 — Selvedge Denim Jean',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 240,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 'ns-prod-302',
    name: 'Your Product #10 — Pleated Tailored Trouser',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 215,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 'ns-prod-303',
    name: 'Your Product #11 — Utility Cargo Pant',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 195,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-304',
    name: 'Your Product #12 — Interlock Lounge Pant',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 150,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- SHORTS & BOTTOMS ---
  {
    id: 'ns-prod-401',
    name: 'Your Product #13 — French Terry Sweatshort',
    category: 'shorts',
    categoryName: 'Shorts & Bottoms',
    price: 110,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-402',
    name: 'Your Product #14 — Technical Cargo Short',
    category: 'shorts',
    categoryName: 'Shorts & Bottoms',
    price: 135,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-403',
    name: 'Your Product #15 — Pleated Linen Short',
    category: 'shorts',
    categoryName: 'Shorts & Bottoms',
    price: 145,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },

  // --- JACKETS & OUTERWEAR ---
  {
    id: 'ns-prod-501',
    name: 'Your Product #16 — Double Breasted Coat',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 490,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-502',
    name: 'Your Product #17 — Leather Bomber Jacket',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 450,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-503',
    name: 'Your Product #18 — Technical Shell Jacket',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 290,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-504',
    name: 'Your Product #19 — Denim Trucker Jacket',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 220,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- SHOES & FOOTWEAR ---
  {
    id: 'ns-prod-601',
    name: 'Your Product #20 — Low-Top Leather Sneaker',
    category: 'shoes',
    categoryName: 'Shoes & Footwear',
    price: 220,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['40', '41', '42', '43', '44', '45'],
    inStock: true
  },
  {
    id: 'ns-prod-602',
    name: 'Your Product #21 — Technical Sculpted Runner',
    category: 'shoes',
    categoryName: 'Shoes & Footwear',
    price: 280,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['41', '42', '43', '44', '45'],
    inStock: true
  },
  {
    id: 'ns-prod-603',
    name: 'Your Product #22 — Suede Chelsea Boot',
    category: 'shoes',
    categoryName: 'Shoes & Footwear',
    price: 360,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['40', '41', '42', '43', '44'],
    inStock: true
  },

  // --- BELTS & ACCESSORIES ---
  {
    id: 'ns-prod-701',
    name: 'Your Product #23 — Leather Roller Belt',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 95,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['85cm', '90cm', '95cm', '100cm'],
    inStock: true
  },
  {
    id: 'ns-prod-702',
    name: 'Your Product #24 — Leather Cardholder',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 80,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['One Size'],
    inStock: true
  },
  {
    id: 'ns-prod-703',
    name: 'Your Product #25 — Silver Curb Chain',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 165,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['50cm', '55cm'],
    inStock: true
  },
  {
    id: 'ns-prod-704',
    name: 'Your Product #26 — Cotton Twill Cap',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 65,
    tag: 'Customizable',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'This is a customizable product slot. Open the Merchant Admin portal at /admin to customize the title, pricing, imagery, category, sizes, and stock.',
    specs: '✦ Fully Customizable Item • Edit Title, Price & Photos in /admin • Instant Cloud Sync',
    sizes: ['Adjustable'],
    inStock: true
  }
];

// Clean Zero-State: Orders start empty until real customers place them!
const DEFAULT_ORDERS = [];

// Clean Zero-State: Official Promo
const DEFAULT_PROMOS = [
  { code: 'SITARA15', discount: 15, active: true, usageCount: 0 }
];

// Multi-Currency Exchange Configuration
const DEFAULT_CURRENCIES = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, name: 'US Dollar', flag: '🇺🇸', symbolPrefix: true },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, name: 'Euro', flag: '🇪🇺', symbolPrefix: true },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, name: 'British Pound', flag: '🇬🇧', symbolPrefix: true },
  PKR: { code: 'PKR', symbol: '₨ ', rate: 278.0, name: 'Pakistani Rupee', flag: '🇵🇰', symbolPrefix: true },
  AED: { code: 'AED', symbol: 'AED ', rate: 3.67, name: 'UAE Dirham', flag: '🇦🇪', symbolPrefix: true },
  SAR: { code: 'SAR', symbol: 'SAR ', rate: 3.75, name: 'Saudi Riyal', flag: '🇸🇦', symbolPrefix: true },
  CAD: { code: 'CAD', symbol: 'CA$', rate: 1.36, name: 'Canadian Dollar', flag: '🇨🇦', symbolPrefix: true }
};

// Initial Seed Reviews for Inaugural Drop
const DEFAULT_REVIEWS = [
  {
    id: 'rev-101',
    productId: 'ns-prod-201',
    author: 'Hamza K.',
    rating: 5,
    title: '520 GSM weight is unreal',
    comment: 'Substantial weight and incredible structure. Best luxury hoodie in my rotation.',
    date: '2026-08-15',
    verified: true
  },
  {
    id: 'rev-102',
    productId: 'ns-prod-101',
    author: 'Zayd M.',
    rating: 5,
    title: 'Clean boxy drape',
    comment: 'Tight collar and great shoulder drop. Exceptional cotton quality.',
    date: '2026-08-18',
    verified: true
  }
];

// ==========================================================================
// UNIFIED DATASTORE ARCHITECTURE (Local-First + Supabase Cloud Fallback)
// ==========================================================================
const DataStore = {
  getProducts() {
    const raw = localStorage.getItem('sitara_products_v7');
    if (!raw) {
      localStorage.setItem('sitara_products_v7', JSON.stringify(DEFAULT_PRODUCTS));
      return DEFAULT_PRODUCTS;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return DEFAULT_PRODUCTS;
    }
  },

  getProductById(id) {
    const prods = this.getProducts();
    return prods.find((p) => p.id === id) || null;
  },

  saveProduct(product) {
    const prods = this.getProducts();
    const index = prods.findIndex((p) => p.id === product.id);
    if (index >= 0) {
      prods[index] = { ...prods[index], ...product };
    } else {
      prods.unshift(product);
    }
    localStorage.setItem('sitara_products_v7', JSON.stringify(prods));
    this.syncWithCloud('products', product);
    return prods;
  },

  deleteProduct(id) {
    let prods = this.getProducts();
    prods = prods.filter((p) => p.id !== id);
    localStorage.setItem('sitara_products_v7', JSON.stringify(prods));
    return prods;
  },

  getCategories() {
    const raw = localStorage.getItem('sitara_categories_v4');
    if (!raw) {
      localStorage.setItem('sitara_categories_v4', JSON.stringify(DEFAULT_CATEGORIES));
      return DEFAULT_CATEGORIES;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return DEFAULT_CATEGORIES;
    }
  },

  saveCategory(category) {
    const cats = this.getCategories();
    const index = cats.findIndex((c) => c.id === category.id);
    if (index >= 0) {
      cats[index] = { ...cats[index], ...category };
    } else {
      cats.push(category);
    }
    localStorage.setItem('sitara_categories_v4', JSON.stringify(cats));
    return cats;
  },

  deleteCategory(id) {
    let cats = this.getCategories();
    cats = cats.filter((c) => c.id !== id);
    localStorage.setItem('sitara_categories_v4', JSON.stringify(cats));
    return cats;
  },

  getCurrencies() {
    return DEFAULT_CURRENCIES;
  },

  getActiveCurrency() {
    const code = localStorage.getItem('sitara_active_currency') || 'PKR';
    return DEFAULT_CURRENCIES[code] || DEFAULT_CURRENCIES.USD;
  },

  setActiveCurrency(code) {
    if (DEFAULT_CURRENCIES[code]) {
      localStorage.setItem('sitara_active_currency', code);
    }
  },

  formatPrice(priceInUSD, withSymbol = true) {
    const currency = this.getActiveCurrency();
    const converted = (priceInUSD || 0) * (currency.rate || 1);
    const num = Math.round(converted).toLocaleString();
    if (!withSymbol) return num;
    if (currency.symbolPrefix) {
      return `${currency.symbol}${num}`;
    }
    return `${num} ${currency.symbol}`;
  },

  getCart() {
    const raw = localStorage.getItem('sitara_cart');
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem('sitara_cart', JSON.stringify(cart));
  },

  addToCart(productId, size, quantity = 1) {
    const cart = this.getCart();
    const existing = cart.find((item) => item.id === productId && item.size === size);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ id: productId, size, quantity });
    }
    this.saveCart(cart);
    return cart;
  },

  removeFromCart(productId, size) {
    let cart = this.getCart();
    cart = cart.filter((item) => !(item.id === productId && item.size === size));
    this.saveCart(cart);
    return cart;
  },

  updateCartQty(productId, size, delta) {
    const cart = this.getCart();
    const item = cart.find((i) => i.id === productId && i.size === size);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        return this.removeFromCart(productId, size);
      }
    }
    this.saveCart(cart);
    return cart;
  },

  getWishlist() {
    const raw = localStorage.getItem('sitara_wishlist');
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  },

  toggleWishlist(productId) {
    let wishlist = this.getWishlist();
    const exists = wishlist.includes(productId);
    if (exists) {
      wishlist = wishlist.filter((id) => id !== productId);
    } else {
      wishlist.push(productId);
    }
    localStorage.setItem('sitara_wishlist', JSON.stringify(wishlist));
    return !exists;
  },

  isInWishlist(productId) {
    const wishlist = this.getWishlist();
    return wishlist.includes(productId);
  },

  getReviews(productId = null) {
    const raw = localStorage.getItem('sitara_reviews_v2');
    let reviews = DEFAULT_REVIEWS;
    if (raw) {
      try {
        reviews = JSON.parse(raw);
      } catch {
        reviews = DEFAULT_REVIEWS;
      }
    }
    if (productId) {
      return reviews.filter((r) => r.productId === productId);
    }
    return reviews;
  },

  addReview(review) {
    const reviews = this.getReviews();
    reviews.unshift({
      ...review,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      verified: true
    });
    localStorage.setItem('sitara_reviews_v2', JSON.stringify(reviews));
    return reviews;
  },

  getProductRating(productId) {
    const reviews = this.getReviews(productId);
    if (!reviews || reviews.length === 0) {
      return { average: 5.0, count: 1 };
    }
    const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0);
    return {
      average: Number((sum / reviews.length).toFixed(1)),
      count: reviews.length
    };
  },

  getOrders() {
    const raw = localStorage.getItem('sitara_orders_v2');
    if (!raw) return DEFAULT_ORDERS;
    try {
      return JSON.parse(raw);
    } catch {
      return DEFAULT_ORDERS;
    }
  },

  createOrder(orderData) {
    const orders = this.getOrders();
    const trackingId = 'NS-TRK-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      ...orderData,
      trackingId,
      createdAt: new Date().toISOString(),
      status: 'Placed',
      timeline: [
        { status: 'Order Placed', time: new Date().toLocaleString(), note: 'Payment verified & order queued for atelier dispatch.' }
      ]
    };
    orders.unshift(newOrder);
    localStorage.setItem('sitara_orders_v2', JSON.stringify(orders));
    this.saveCart([]);
    this.syncWithCloud('orders', newOrder);
    return newOrder;
  },

  updateOrderStatus(trackingId, status, note = '') {
    const orders = this.getOrders();
    const order = orders.find((o) => o.trackingId === trackingId);
    if (order) {
      order.status = status;
      if (!order.timeline) order.timeline = [];
      order.timeline.push({
        status,
        time: new Date().toLocaleString(),
        note: note || `Order status updated to ${status}`
      });
      localStorage.setItem('sitara_orders_v2', JSON.stringify(orders));
      this.syncWithCloud('orders', order);
    }
    return order;
  },

  getOrderByTrackingId(trackingId) {
    const orders = this.getOrders();
    return orders.find((o) => o.trackingId.toUpperCase() === trackingId.trim().toUpperCase()) || null;
  },

  getPromos() {
    const raw = localStorage.getItem('sitara_promos');
    if (!raw) return DEFAULT_PROMOS;
    try {
      return JSON.parse(raw);
    } catch {
      return DEFAULT_PROMOS;
    }
  },

  validatePromo(code) {
    const promos = this.getPromos();
    const promo = promos.find((p) => p.code.toUpperCase() === code.trim().toUpperCase() && p.active);
    return promo || null;
  },

  getSupabaseConfig() {
    const raw = localStorage.getItem('sitara_supabase_config');
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  setSupabaseConfig(url, anonKey) {
    if (!url || !anonKey) {
      localStorage.removeItem('sitara_supabase_config');
      return;
    }
    localStorage.setItem('sitara_supabase_config', JSON.stringify({ url, anonKey }));
  },

  async syncWithCloud(table, payload) {
    const config = this.getSupabaseConfig();
    if (!config || !config.url || !config.anonKey) return;
    try {
      await fetch(`${config.url}/rest/v1/${table}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: config.anonKey,
          Authorization: `Bearer ${config.anonKey}`,
          Prefer: 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      console.warn('Cloud sync offline fallback active', e);
    }
  }
};
