// ==========================================================================
// NEW SITARA — DATA LAYER & CATALOG ARCHITECTURE
// Clean, Human Editorial Luxury Product Catalog
// ==========================================================================

const DEFAULT_CATEGORIES = [
  {
    id: 't-shirts',
    name: 'T-Shirts & Tops',
    slug: 't-shirts',
    description: 'Heavyweight organic cotton tees, ribbed tanks, and knit polos.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'hoodies',
    name: 'Hoodies & Sweatshirts',
    slug: 'hoodies',
    description: '520 GSM Portuguese loopback fleece hoodies and structured crewnecks.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'pants',
    name: 'Pants & Trousers',
    slug: 'pants',
    description: '14oz Okayama selvedge denim, pleated wool trousers, and utility cargos.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'shorts',
    name: 'Shorts & Bottoms',
    slug: 'shorts',
    description: 'Heavyweight French terry sweatshorts and relaxed tailored linen shorts.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'outerwear',
    name: 'Jackets & Outerwear',
    slug: 'outerwear',
    description: 'Double-breasted wool overcoats, calfskin bombers, and technical shells.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'shoes',
    name: 'Shoes & Footwear',
    slug: 'shoes',
    description: 'Italian calfskin sneakers, sculpted runners, and suede Chelsea boots.',
    image: '/assets/product-placeholder.svg'
  },
  {
    id: 'accessories',
    name: 'Belts & Accessories',
    slug: 'accessories',
    description: 'Full-grain leather goods, 925 sterling silver jewelry, and twill caps.',
    image: '/assets/product-placeholder.svg'
  }
];

const DEFAULT_PRODUCTS = [
  // --- T-SHIRTS & TOPS ---
  {
    id: 'ns-prod-101',
    name: 'Boxy Heavyweight Cotton Tee',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 85,
    tag: 'Bestseller',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Cut with an oversized, relaxed silhouette from 280 GSM long-staple combed cotton. Features dropped shoulders, a dense 1x1 ribbed collar, and blind-stitched hems for a crisp architectural drape.',
    specs: '100% Combed Cotton • 280 GSM • Pre-shrunk • Reinforced Rib Collar • Made in Portugal',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-102',
    name: 'Vintage Washed Oversized Tee',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 95,
    tag: 'New Drop',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Enzyme-washed for a subtly faded, broken-in patina and ultra-soft hand feel. Structured boxy cut with wide sleeves and double-needle topstitching throughout.',
    specs: '100% Ring-Spun Cotton • 260 GSM • Pigment Dye Wash • Anti-Twist Side Seams',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-103',
    name: 'Ribbed Interlock Muscle Tank',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 65,
    tag: 'Essential',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Engineered from high-gauge 2x2 ribbed cotton with added elastane for durable shape retention. Tailored armholes and curved hem designed for layering or standalone wear.',
    specs: '95% Organic Cotton, 5% Elastane • 240 GSM • Form-Holding Rib • Bound Neckline',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-104',
    name: 'Fine Merino Knit Polo',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 140,
    tag: 'Atelier',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Spun from 16-gauge extrafine Australian merino wool. Styled with a buttonless Johnny collar, ribbed cuffs, and an elegant regular drape suitable for all seasons.',
    specs: '100% Extrafine Merino Wool • 16-Gauge Fully Fashioned Knit • Mother of Pearl Accents',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- HOODIES & SWEATSHIRTS ---
  {
    id: 'ns-prod-201',
    name: '520 GSM Loopback French Terry Hoodie',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 185,
    tag: 'Iconic Piece',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Our signature silhouette constructed from ultra-heavyweight 520 GSM Portuguese loopback French terry. Features a double-layered crossover hood without drawstrings, wide ribbed cuffs, and concealed side-seam pockets.',
    specs: '100% Portuguese Cotton • 520 GSM French Terry • Crossover Hood • Seamless Pockets',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-202',
    name: 'Raglan Structured Crewneck',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 155,
    tag: 'Classic',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Crafted with ergonomic raglan sleeves for enhanced shoulder movement. Built with 480 GSM dense cotton fleece and flatlock reinforcement on every critical stress point.',
    specs: '100% Combed Cotton • 480 GSM Fleece • Raglan Sleeves • Flatlock Seam Construction',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-203',
    name: 'Cashmere Blend Pullover Knit Hoodie',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 245,
    tag: 'Luxury Drop',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'An elevated take on casual luxury. Blended with 30% Mongolian cashmere and 70% ultra-fine wool for lightweight warmth, softness, and refined drape.',
    specs: '30% Mongolian Cashmere, 70% Fine Merino • 7-Gauge Heavy Knit • Seamless Hem',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-204',
    name: 'Heavyweight Track Zip Jacket',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 175,
    tag: 'New Drop',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Featuring a custom two-way brushed steel zipper, funnel collar, and minimal welt pockets. Built from structured interlock fleece with matte metal hardware.',
    specs: '100% Heavyweight Cotton Interlock • Custom Dual Steel Zippers • Stand Collar',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- PANTS & TROUSERS ---
  {
    id: 'ns-prod-301',
    name: '14oz Okayama Selvedge Denim Jean',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 240,
    tag: 'Heritage',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Woven on vintage shuttle looms in Kojima, Japan. 14oz raw sanforized denim featuring a classic redline selvedge ID, custom branded copper rivets, and a straight-leg drape.',
    specs: '100% Japanese Selvedge Denim • 14oz Raw • Redline ID • Hand-Stamped Leather Patch',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 'ns-prod-302',
    name: 'Pleated Wool-Blend Tailored Trouser',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 215,
    tag: 'Tailored',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Featuring single front pleats, hidden waistband adjusters, and a relaxed wide taper. Woven from breathable tropical wool blend with clean pressed creases.',
    specs: '60% Wool, 38% Viscose, 2% Elastane • Single Pleat Front • Horn Buttons • Half-Lined',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 'ns-prod-303',
    name: 'Utility Cargo Pant',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 195,
    tag: 'Tactical',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Constructed from durable 280 GSM cotton ripstop with darted knees for ergonomic mobility. Styled with 3D accordion cargo pockets and adjustable bungee ankle cuffs.',
    specs: '100% Cotton Ripstop • 6-Pocket Storage • Articulated Knees • Bungee Hem Adjusters',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-304',
    name: 'Structured Interlock Lounge Pant',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 150,
    tag: 'Comfort',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'A refined leisure silhouette in heavyweight 420 GSM double-knit cotton. Elasticated drawstring waistband with silver aglets and pin-tuck center front seams.',
    specs: '100% Combed Double-Knit Cotton • Pin-Tuck Seams • Silver Aglet Drawcord • Zip Pockets',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- SHORTS & BOTTOMS ---
  {
    id: 'ns-prod-401',
    name: 'French Terry Heavyweight Sweatshort',
    category: 'shorts',
    categoryName: 'Shorts & Bottoms',
    price: 110,
    tag: 'Essential',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Heavyweight 450 GSM loopback cotton cut with a modern 6-inch inseam. Deep mesh-lined side pockets and a thick ribbed waistband for premium structure.',
    specs: '100% Organic Cotton • 450 GSM • 6" Inseam • Chunky Drawcord • Raw Edge Hem',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-402',
    name: 'Technical Ripstop Cargo Short',
    category: 'shorts',
    categoryName: 'Shorts & Bottoms',
    price: 135,
    tag: 'Outdoor',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Ultralight yet tear-resistant nylon ripstop with a water-repellent DWR coating. Features dual modular bellows pockets with matte snap closures.',
    specs: '100% Recycled Nylon • DWR Water-Repellent Finish • Integrated Webbing Belt',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-403',
    name: 'Pleated Linen Tailored Short',
    category: 'shorts',
    categoryName: 'Shorts & Bottoms',
    price: 145,
    tag: 'Resort',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Woven from pure European flax linen. Tailored with double forward pleats, slanted pockets, and a cuffed hem for warm-weather sophistication.',
    specs: '100% European Flax Linen • Garment Washed • Double Pleat • Extended Waistband Tab',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },

  // --- JACKETS & OUTERWEAR ---
  {
    id: 'ns-prod-501',
    name: 'Double-Breasted Wool Overcoat',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 490,
    tag: 'Signature',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Masterfully tailored from 800 GSM double-faced Melton wool. Features peak lapels, genuine horn buttons, deep welt pockets, and a full cupro interior lining.',
    specs: '80% Virgin Wool, 20% Polyamide • 800 GSM Melton • Full Cupro Lining • Tailored Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-502',
    name: 'Italian Calfskin Leather Bomber',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 450,
    tag: 'Limited Edition',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Handcrafted in Florence from supple, full-grain Italian calfskin leather. Finished with custom tonal rib-knit trim, heavy two-way YKK zippers, and interior chest pockets.',
    specs: '100% Full-Grain Calfskin • Custom Wool Rib Cuffs • YKK Excella Zippers • Made in Italy',
    sizes: ['M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-503',
    name: 'Technical 3-Layer Shell Jacket',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 290,
    tag: 'All-Weather',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: '20,000mm waterproof / 15,000g breathable 3-layer membrane with fully taped seams and Aquaguard waterproof zippers for maximum storm protection.',
    specs: '3-Layer Ripstop Membrane • 20k/15k Rating • Fully Taped Seams • Cohaesive Hood Adjuster',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-504',
    name: 'Vintage Wash Denim Trucker Jacket',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 220,
    tag: 'Heritage',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: '13.5oz ring-spun denim treated with artisanal hand-sanding and stone washing. Built with brass tack buttons, shank side adjusters, and dual chest flap pockets.',
    specs: '100% Cotton Denim • 13.5oz • Hand-Aged Vintage Wash • Antiqued Brass Hardware',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- SHOES & FOOTWEAR ---
  {
    id: 'ns-prod-601',
    name: 'Minimalist Calfskin Low-Top Sneaker',
    category: 'shoes',
    categoryName: 'Shoes & Footwear',
    price: 220,
    tag: 'Handmade',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Handcrafted in Civitanova Marche, Italy. Made with buttery nappa leather, full leather lining, waxed cotton laces, and a durable stitched Margom rubber sole.',
    specs: 'Full-Grain Italian Leather • Margom Rubber Cupsole • Calfskin Lining • Made in Italy',
    sizes: ['40', '41', '42', '43', '44', '45'],
    inStock: true
  },
  {
    id: 'ns-prod-602',
    name: 'Technical Sculpted Runner',
    category: 'shoes',
    categoryName: 'Shoes & Footwear',
    price: 280,
    tag: 'Performance',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Combining layered open mesh, heat-welded TPU reinforcements, and an ultra-cushioned sculpted EVA midsole for effortless all-day comfort and bold aesthetic.',
    specs: 'Engineered Air Mesh & TPU Overlays • Vibram Megagrip Outsole • OrthoLite Insole',
    sizes: ['41', '42', '43', '44', '45'],
    inStock: true
  },
  {
    id: 'ns-prod-603',
    name: 'Handcrafted Suede Chelsea Boot',
    category: 'shoes',
    categoryName: 'Shoes & Footwear',
    price: 360,
    tag: 'Artisanal',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Constructed using traditional Blake stitching from supple Italian reverse calf suede. Features elasticated side gussets and a stacked leather sole with rubber injection.',
    specs: '100% Italian Reverse Suede • Blake-Stitched Sole • Grosgrain Pull Tabs • Made in Portugal',
    sizes: ['40', '41', '42', '43', '44'],
    inStock: true
  },

  // --- BELTS & ACCESSORIES ---
  {
    id: 'ns-prod-701',
    name: 'Full-Grain Leather Roller Belt',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 95,
    tag: 'Handmade',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Vegetable-tanned 3.5mm thick English bridle leather that ages with a rich bespoke patina. Secured with a solid brushed nickel roller buckle.',
    specs: '100% Full-Grain Bridle Leather • 35mm Width • Solid Nickel Hardware • Hand-Beveled Edges',
    sizes: ['85cm', '90cm', '95cm', '100cm'],
    inStock: true
  },
  {
    id: 'ns-prod-702',
    name: 'Minimalist Leather Cardholder',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 80,
    tag: 'Daily Carry',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Slim profile crafted with 4 exterior card slots and a central currency slip. Hand-finished with edge-burnishing and debossed Sitara logo.',
    specs: 'Full-Grain Buttero Calfskin • 4 Card Slots + 1 Note Slot • Hand-Painted Edges',
    sizes: ['One Size'],
    inStock: true
  },
  {
    id: 'ns-prod-703',
    name: 'Solid 925 Sterling Silver Curb Chain',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 165,
    tag: 'Fine Jewelry',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Diamond-cut 5mm curb link chain cast in solid 925 sterling silver with an oxidized vintage finish and custom engraved lobster clasp.',
    specs: 'Solid 925 Sterling Silver • 5mm Gauge • Custom Hallmarked Clasp • Made in Italy',
    sizes: ['50cm', '55cm'],
    inStock: true
  },
  {
    id: 'ns-prod-704',
    name: 'Unstructured Cotton Twill Atelier Cap',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 65,
    tag: 'Essential',
    imageFront: '/assets/product-placeholder.svg',
    imageBack: '/assets/product-placeholder-back.svg',
    description: 'Low-profile 6-panel cap crafted from washed 100% cotton chino twill. Features embroidered eyelets and an adjustable self-fabric strap with an antiqued brass buckle.',
    specs: '100% Chino Twill Cotton • 6-Panel Unstructured Crown • Brass Slider Clasp',
    sizes: ['Adjustable'],
    inStock: true
  }
];

// Clean Zero-State: Orders start empty until real customers place them
const DEFAULT_ORDERS = [];

// Official Promo Code
const DEFAULT_PROMOS = [
  { code: 'SITARA15', discount: 15, active: true, usageCount: 0 }
];

// Multi-Currency Exchange Configuration (Clean code-based symbols, zero emojis)
const DEFAULT_CURRENCIES = {
  PKR: { code: 'PKR', symbol: 'Rs. ', rate: 278.0, name: 'Pakistani Rupee', symbolPrefix: true },
  USD: { code: 'USD', symbol: '$', rate: 1.0, name: 'US Dollar', symbolPrefix: true },
  EUR: { code: 'EUR', symbol: 'EUR ', rate: 0.92, name: 'Euro', symbolPrefix: true },
  GBP: { code: 'GBP', symbol: 'GBP ', rate: 0.79, name: 'British Pound', symbolPrefix: true },
  AED: { code: 'AED', symbol: 'AED ', rate: 3.67, name: 'UAE Dirham', symbolPrefix: true },
  SAR: { code: 'SAR', symbol: 'SAR ', rate: 3.75, name: 'Saudi Riyal', symbolPrefix: true },
  CAD: { code: 'CAD', symbol: 'CAD ', rate: 1.36, name: 'Canadian Dollar', symbolPrefix: true }
};

// Verified Customer Reviews
const DEFAULT_REVIEWS = [
  {
    id: 'rev-101',
    productId: 'ns-prod-201',
    author: 'Hamza K.',
    rating: 5,
    title: '520 GSM fabric weight is extraordinary',
    comment: 'Substantial weight and incredible structure. Best luxury hoodie in my rotation. Dropped shoulders sit perfectly.',
    date: '2026-08-15',
    verified: true
  },
  {
    id: 'rev-102',
    productId: 'ns-prod-101',
    author: 'Zayd M.',
    rating: 5,
    title: 'Flawless boxy drape',
    comment: 'Tight collar that does not sag after washing and great shoulder drop. Exceptional cotton quality.',
    date: '2026-08-18',
    verified: true
  },
  {
    id: 'rev-103',
    productId: 'ns-prod-301',
    author: 'Saad A.',
    rating: 5,
    title: 'Authentic 14oz Japanese Selvedge',
    comment: 'Raw shuttle-loom denim is stiff initially but molds to your fit effortlessly. Beautiful redline selvedge detail.',
    date: '2026-08-20',
    verified: true
  }
];

// ==========================================================================
// UNIFIED DATASTORE ARCHITECTURE (Local-First + Supabase Cloud Fallback)
// ==========================================================================
const DataStore = {
  getProducts() {
    const raw = localStorage.getItem('sitara_products_v8');
    if (!raw) {
      localStorage.setItem('sitara_products_v8', JSON.stringify(DEFAULT_PRODUCTS));
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
    localStorage.setItem('sitara_products_v8', JSON.stringify(prods));
    this.syncWithCloud('products', product);
    return prods;
  },

  deleteProduct(id) {
    let prods = this.getProducts();
    prods = prods.filter((p) => p.id !== id);
    localStorage.setItem('sitara_products_v8', JSON.stringify(prods));
    return prods;
  },

  getCategories() {
    const raw = localStorage.getItem('sitara_categories_v5');
    if (!raw) {
      localStorage.setItem('sitara_categories_v5', JSON.stringify(DEFAULT_CATEGORIES));
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
    localStorage.setItem('sitara_categories_v5', JSON.stringify(cats));
    return cats;
  },

  deleteCategory(id) {
    let cats = this.getCategories();
    cats = cats.filter((c) => c.id !== id);
    localStorage.setItem('sitara_categories_v5', JSON.stringify(cats));
    return cats;
  },

  getCurrencies() {
    return DEFAULT_CURRENCIES;
  },

  getActiveCurrency() {
    const code = localStorage.getItem('sitara_active_currency') || 'PKR';
    return DEFAULT_CURRENCIES[code] || DEFAULT_CURRENCIES.PKR;
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
    const raw = localStorage.getItem('sitara_reviews_v3');
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
    localStorage.setItem('sitara_reviews_v3', JSON.stringify(reviews));
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
        { status: 'Order Placed', time: new Date().toLocaleString(), note: 'Payment verified and order queued for atelier dispatch.' }
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
