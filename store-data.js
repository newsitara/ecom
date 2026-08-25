// ==========================================================================
// NEW SITARA — DATA LAYER & GLOBAL INTERNATIONAL ARCHITECTURE
// Multi-Currency, Multi-Language, International Shipping & Luxury Catalog
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

// Comprehensive Worldwide Currencies
const DEFAULT_CURRENCIES = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, name: 'US Dollar', symbolPrefix: true },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, name: 'Euro (Europe)', symbolPrefix: true },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, name: 'British Pound (UK)', symbolPrefix: true },
  AED: { code: 'AED', symbol: 'AED ', rate: 3.67, name: 'UAE Dirham (Dubai)', symbolPrefix: true },
  SAR: { code: 'SAR', symbol: 'SAR ', rate: 3.75, name: 'Saudi Riyal (KSA)', symbolPrefix: true },
  PKR: { code: 'PKR', symbol: 'Rs. ', rate: 278.0, name: 'Pakistani Rupee', symbolPrefix: true },
  CAD: { code: 'CAD', symbol: 'CA$ ', rate: 1.36, name: 'Canadian Dollar', symbolPrefix: true },
  AUD: { code: 'AUD', symbol: 'AU$ ', rate: 1.52, name: 'Australian Dollar', symbolPrefix: true },
  JPY: { code: 'JPY', symbol: '¥', rate: 154.0, name: 'Japanese Yen', symbolPrefix: true },
  CHF: { code: 'CHF', symbol: 'CHF ', rate: 0.90, name: 'Swiss Franc', symbolPrefix: true },
  SGD: { code: 'SGD', symbol: 'SG$ ', rate: 1.34, name: 'Singapore Dollar', symbolPrefix: true },
  QAR: { code: 'QAR', symbol: 'QAR ', rate: 3.64, name: 'Qatari Riyal', symbolPrefix: true },
  KWD: { code: 'KWD', symbol: 'KWD ', rate: 0.31, name: 'Kuwaiti Dinar', symbolPrefix: true },
  OMR: { code: 'OMR', symbol: 'OMR ', rate: 0.38, name: 'Omani Rial', symbolPrefix: true },
  BHD: { code: 'BHD', symbol: 'BHD ', rate: 0.38, name: 'Bahraini Dinar', symbolPrefix: true },
  INR: { code: 'INR', symbol: '₹', rate: 83.5, name: 'Indian Rupee', symbolPrefix: true },
  NZD: { code: 'NZD', symbol: 'NZ$ ', rate: 1.64, name: 'New Zealand Dollar', symbolPrefix: true },
  SEK: { code: 'SEK', symbol: 'kr ', rate: 10.6, name: 'Swedish Krona', symbolPrefix: false },
  NOK: { code: 'NOK', symbol: 'kr ', rate: 10.8, name: 'Norwegian Krone', symbolPrefix: false },
  DKK: { code: 'DKK', symbol: 'kr ', rate: 6.9, name: 'Danish Krone', symbolPrefix: false },
  ZAR: { code: 'ZAR', symbol: 'R ', rate: 18.2, name: 'South African Rand', symbolPrefix: true },
  TRY: { code: 'TRY', symbol: '₺', rate: 33.5, name: 'Turkish Lira', symbolPrefix: true },
  MYR: { code: 'MYR', symbol: 'RM ', rate: 4.45, name: 'Malaysian Ringgit', symbolPrefix: true }
};

// Global Supported Languages
const DEFAULT_LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', native: 'العربية', dir: 'rtl' },
  { code: 'fr', name: 'French', native: 'Français', dir: 'ltr' },
  { code: 'de', name: 'German', native: 'Deutsch', dir: 'ltr' },
  { code: 'es', name: 'Spanish', native: 'Español', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', native: 'اردو', dir: 'rtl' },
  { code: 'ja', name: 'Japanese', native: '日本語', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', native: '简体中文', dir: 'ltr' }
];

// International Dictionary for instant translation
const I18N_DICT = {
  en: {
    nav_home: "Home",
    nav_categories: "Categories",
    nav_lookbook: "Lookbook",
    nav_all_archive: "All Archive",
    nav_track: "Track Order",
    nav_shop_category: "Shop by Category",
    nav_all_collections: "All Collections",
    announcement_shipping: "FREE NATIONWIDE AND GLOBAL SHIPPING ON QUALIFYING ORDERS",
    announcement_promo: "USE PROMO CODE SITARA15 FOR 15% OFF",
    hero_season: "AUTUMN / WINTER 2026",
    hero_drop: "INAUGURAL DROP",
    hero_capsule: "INAUGURAL COLLECTION",
    hero_headline: "STRUCTURED SILHOUETTES.<br><span class=\"hero-highlight\">BESPOKE STREETWEAR.</span>",
    hero_subtext: "Engineered from 520 GSM Portuguese loopback fleece, vintage Japanese selvedge denim, and hand-finished bespoke tailoring for a permanent modern drape.",
    hero_shop_all: "Explore Inaugural Collection",
    hero_explore: "Heavyweight Hoodies",
    hero_primary_btn: "Explore Inaugural Collection",
    hero_outline_btn: "Heavyweight Hoodies",
    trust_delivery_title: "Complimentary Delivery",
    trust_delivery_desc: "On qualifying global orders",
    trust_ssl_title: "256-Bit SSL Encrypted",
    trust_ssl_desc: "Card payments only",
    trust_exchange_title: "14-Day Exchanges",
    trust_exchange_desc: "Complimentary returns",
    flash_tag: "FLASH DROP",
    flash_extra: "Extra 15% OFF with code",
    trust_shipping_title: "Free Nationwide Shipping",
    trust_shipping_desc: "On all qualifying orders",
    trust_card_title: "Secure Card Payment",
    trust_card_desc: "Visa, Mastercard & AMEX",
    trust_returns_title: "7-Day Easy Returns",
    trust_returns_desc: "Hassle-free size exchanges",
    trust_quality_title: "100% Authentic Quality",
    trust_quality_desc: "Direct atelier craftsmanship",
    reviews_header: "Loved by Customers Worldwide",
    reviews_tag: "VERIFIED CUSTOMER REVIEWS",
    verified_buyer: "Verified Buyer",
    shelf_most_wanted: "Signature Essentials",
    shelf_inaugural: "INAUGURAL RELEASE",
    shelf_explore: "Explore All",
    shelf_archive: "Shop Complete Collection",
    card_view_details: "View Details",
    card_ready_to_ship: "Ready to Ship",
    card_made_to_order: "Made to Order",
    bag_title: "Shopping Bag",
    bag_empty: "Your bag is empty",
    bag_subtotal: "Subtotal",
    bag_checkout: "Proceed to Secure Card Checkout",
    wishlist_title: "Saved Pieces",
    wishlist_empty: "No saved pieces yet",
    wishlist_move_all: "Move All In-Stock to Bag",
    wishlist_clear: "Clear Saved Items",
    chk_title: "Express International Checkout",
    chk_contact: "1. Contact Information",
    chk_shipping: "2. Shipping Destination",
    chk_payment: "3. Payment Method (Card Only)",
    chk_full_name: "Full Name *",
    chk_phone: "Phone Number (with Country Code) *",
    chk_email: "Email Address (For Tracking & Invoices) *",
    chk_street: "Street Address *",
    chk_apartment: "Apartment, Suite, Unit",
    chk_city: "City / Town *",
    chk_state: "State / Province / Region",
    chk_postal: "Postal / ZIP Code *",
    chk_country: "Country / Region *",
    chk_card_num: "Card Number",
    chk_card_exp: "Expiry Date",
    chk_card_cvc: "Security Code (CVC)",
    chk_card_name: "Name on Card",
    chk_place_order: "Complete Order & Get Tracking ID",
    chk_security: "By placing your order, you agree to New Sitara Terms & Conditions and receive an instant Tracking ID."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_categories: "التصنيفات",
    nav_lookbook: "لوك بوك",
    nav_all_archive: "جميع المجموعات",
    nav_track: "تتبع الطلب",
    nav_shop_category: "تسوق حسب الفئة",
    nav_all_collections: "جميع التشكيلات",
    announcement_shipping: "شحن مجاني دولي ومحلي للطلبات المؤهلة",
    announcement_promo: "استخدم الرمز SITARA15 لخصم 15%",
    hero_season: "خريف / شتاء 2026",
    hero_drop: "إصدار حصري",
    hero_capsule: "المجموعة الافتتاحية",
    hero_headline: "تصاميم مميزة ومبتكرة.<br><span class=\"hero-highlight\">أزياء راقية مصممة خصيصاً.</span>",
    hero_subtext: "مصنوعة من أقمشة الصوف البرتغالي عالي الكثافة والدنيم الياباني الأصيل مع خياطة راقية.",
    hero_shop_all: "استكشف المجموعة الافتتاحية",
    hero_explore: "الهوديات والسترات الفاخرة",
    hero_primary_btn: "استكشف المجموعة الافتتاحية",
    hero_outline_btn: "الهوديات والسترات الفاخرة",
    trust_delivery_title: "شحن مجاني دولي",
    trust_delivery_desc: "للطلبات المؤهلة حول العالم",
    trust_ssl_title: "دفع مشفر وآمن 256-Bit",
    trust_ssl_desc: "بطاقات الدفع المعتمدة فقط",
    trust_exchange_title: "استبدال مجاني خلال 14 يوماً",
    trust_exchange_desc: "خدمة إرجاع واستبدال سهلة",
    flash_tag: "عرض خاطف",
    flash_extra: "خصم إضافي 15% بالرمز",
    trust_shipping_title: "شحن مجاني دولي",
    trust_shipping_desc: "لجميع الطلبات المؤهلة",
    trust_card_title: "دفع آمن بالبطاقات",
    trust_card_desc: "فيزا، ماستركارد وأمريكان إكسبريس",
    trust_returns_title: "إرجاع سهل خلال 7 أيام",
    trust_returns_desc: "استبدال مقاسات بكل سهولة",
    trust_quality_title: "جودة أصلية 100%",
    trust_quality_desc: "حرفية وإتقان مباشر",
    reviews_header: "محبوب من قبل عملائنا حول العالم",
    reviews_tag: "آراء العملاء الموثقة",
    verified_buyer: "مشترٍ موثق",
    shelf_most_wanted: "القطع المميزة والأساسية",
    shelf_inaugural: "إصدار افتتاحي",
    shelf_explore: "استكشف الكل",
    shelf_archive: "تسوق التشكيلة الكاملة",
    card_view_details: "عرض التفاصيل",
    card_ready_to_ship: "جاهز للشحن",
    card_made_to_order: "حسب الطلب",
    bag_title: "حقيبة التسوق",
    bag_empty: "حقيبة التسوق فارغة",
    bag_subtotal: "المجموع الفرعي",
    bag_checkout: "إتمام الشراء الآمن بالبطاقة",
    wishlist_title: "القطع المحفوظة",
    wishlist_empty: "لا توجد قطع محفوظة بعد",
    wishlist_move_all: "نقل جميع المتوفر للحقيبة",
    wishlist_clear: "مسح العناصر المحفوظة",
    chk_title: "الدفع الدولي السريع",
    chk_contact: "1. معلومات الاتصال",
    chk_shipping: "2. وجهة الشحن",
    chk_payment: "3. طريقة الدفع (بطاقات فقط)",
    chk_full_name: "الاسم الكامل *",
    chk_phone: "رقم الهاتف (مع الرمز الدولي) *",
    chk_email: "البريد الإلكتروني *",
    chk_street: "عنوان الشارع *",
    chk_apartment: "الشقة / الجناح (اختياري)",
    chk_city: "المدينة *",
    chk_state: "الولاية / المقاطعة",
    chk_postal: "الرمز البريدي *",
    chk_country: "الدولة / المنطقة *",
    chk_card_num: "رقم البطاقة",
    chk_card_exp: "تاريخ الانتهاء",
    chk_card_cvc: "رمز الأمان (CVC)",
    chk_card_name: "الاسم على البطاقة",
    chk_place_order: "إتمام الطلب والحصول على رقم التتبع",
    chk_security: "بإتمام طلبك، فإنك توافق على الشروط وتستلم رقم تتبع فوري."
  },
  fr: {
    nav_home: "Accueil",
    nav_categories: "Catégories",
    nav_all_archive: "Toutes les Collections",
    nav_track: "Suivre la Commande",
    nav_shop_category: "Acheter par Catégorie",
    nav_all_collections: "Toutes les Pièces",
    announcement_shipping: "LIVRAISON INTERNATIONALE GRATUITE DÈS 150$",
    announcement_promo: "CODE SITARA15 POUR 15% DE RÉDUCTION",
    hero_capsule: "COLLECTION INAUGURALE",
    hero_headline: "VÊTEMENTS HAUT DE GAMME & ESSENTIELS SUR MESURE",
    hero_subtext: "Découvrez des coupes contemporaines, des cotons denses et un streetwear raffiné pour une élégance quotidienne.",
    hero_shop_all: "Voir Toutes les Pièces",
    hero_explore: "Explorer les Départements",
    flash_tag: "VENTE FLASH",
    flash_extra: "15% de réduction avec le code",
    trust_shipping_title: "Livraison Express Internationale",
    trust_shipping_desc: "Gratuite sur toutes commandes qualifiées",
    trust_card_title: "Paiement Sécurisé par Carte",
    trust_card_desc: "Visa, Mastercard & AMEX",
    trust_returns_title: "Retours Faciles 7 Jours",
    trust_returns_desc: "Échanges de taille sans tracas",
    trust_quality_title: "Qualité 100% Authentique",
    trust_quality_desc: "Confection artisanale directe",
    reviews_header: "Apprécié par nos clients dans le monde entier",
    reviews_tag: "AVIS CLIENTS VÉRIFIÉS",
    verified_buyer: "Acheteur Vérifié",
    shelf_most_wanted: "Essentiels Signatures",
    shelf_inaugural: "SORTIE INAUGURALE",
    shelf_explore: "Tout Explorer",
    shelf_archive: "Explorer l'Archive Complète",
    card_view_details: "Voir Détails",
    card_ready_to_ship: "Prêt à Expédier",
    card_made_to_order: "Sur Commande",
    bag_title: "Panier d'Achat",
    bag_empty: "Votre panier est vide",
    bag_subtotal: "Sous-total",
    bag_checkout: "Passer au Paiement Sécurisé par Carte",
    wishlist_title: "Pièces Sauvegardées",
    wishlist_empty: "Aucune pièce sauvegardée",
    wishlist_move_all: "Tout Ajouter au Panier",
    wishlist_clear: "Vider les Favoris",
    chk_title: "Paiement International Express",
    chk_contact: "1. Coordonnées",
    chk_shipping: "2. Adresse de Livraison",
    chk_payment: "3. Mode de Paiement (Carte Uniquement)",
    chk_full_name: "Nom Complet *",
    chk_phone: "Numéro de Téléphone *",
    chk_email: "Adresse Email *",
    chk_street: "Adresse *",
    chk_apartment: "Appartement, Bâtiment",
    chk_city: "Ville *",
    chk_state: "Région / Département",
    chk_postal: "Code Postal *",
    chk_country: "Pays / Région *",
    chk_card_num: "Numéro de Carte",
    chk_card_exp: "Date d'Expiration",
    chk_card_cvc: "Code CVC",
    chk_card_name: "Nom du Titulaire",
    chk_place_order: "Confirmer & Obtenir le Suivi",
    chk_security: "En passant commande, vous recevez un numéro de suivi immédiat."
  },
  de: {
    nav_home: "Startseite",
    nav_categories: "Kategorien",
    nav_all_archive: "Gesamtes Archiv",
    nav_track: "Bestellung Verfolgen",
    nav_shop_category: "Nach Kategorie Shoppen",
    nav_all_collections: "Alle Kollektionen",
    announcement_shipping: "KOSTENLOSER WELTWEITER VERSAND AB 150$",
    announcement_promo: "CODE SITARA15 FÜR 15% RABATT",
    hero_capsule: "ERÖFFNUNGSKOLLEKTION",
    hero_headline: "PREMIUM-KLEIDUNG & MASSGESCHNEIDERTE ESSENTIALS",
    hero_subtext: "Entdecken Sie moderne Silhouetten, schwere Stoffe und maßgeschneiderten Luxus für den Alltag.",
    hero_shop_all: "Alle Artikel Entdecken",
    hero_explore: "Kategorien Entdecken",
    flash_tag: "FLASH DROP",
    flash_extra: "Extra 15% Rabatt mit Code",
    trust_shipping_title: "Kostenloser Weltweiter Versand",
    trust_shipping_desc: "Auf alle qualifizierten Bestellungen",
    trust_card_title: "Sichere Kartenzahlung",
    trust_card_desc: "Visa, Mastercard & AMEX",
    trust_returns_title: "7 Tage Einfache Rückgabe",
    trust_returns_desc: "Kostenloser Größentausch",
    trust_quality_title: "100% Authentische Qualität",
    trust_quality_desc: "Direkte Atelier-Handwerkskunst",
    reviews_header: "Weltweit von Kunden geschätzt",
    reviews_tag: "VERIFIZIERTE KUNDENBEWERTUNGEN",
    verified_buyer: "Verifizierter Käufer",
    shelf_most_wanted: "Signatur-Essentials",
    shelf_inaugural: "ERÖFFNUNGS-RELEASE",
    shelf_explore: "Alle Anzeigen",
    shelf_archive: "Komplettes Archiv Durchsuchen",
    card_view_details: "Details Ansehen",
    card_ready_to_ship: "Versandbereit",
    card_made_to_order: "Auf Bestellung",
    bag_title: "Warenkorb",
    bag_empty: "Ihr Warenkorb ist leer",
    bag_subtotal: "Zwischensumme",
    bag_checkout: "Zur Sicheren Kartenzahlung",
    wishlist_title: "Gespeicherte Artikel",
    wishlist_empty: "Keine Artikel gespeichert",
    wishlist_move_all: "Alle in den Warenkorb",
    wishlist_clear: "Liste Leeren",
    chk_title: "Internationaler Express-Checkout",
    chk_contact: "1. Kontaktinformationen",
    chk_shipping: "2. Lieferadresse",
    chk_payment: "3. Zahlungsmethode (Nur Karte)",
    chk_full_name: "Vollständiger Name *",
    chk_phone: "Telefonnummer *",
    chk_email: "E-Mail-Adresse *",
    chk_street: "Straße & Hausnummer *",
    chk_apartment: "Wohnung, Zimmer (Optional)",
    chk_city: "Stadt *",
    chk_state: "Bundesland / Region",
    chk_postal: "Postleitzahl *",
    chk_country: "Land *",
    chk_card_num: "Kartennummer",
    chk_card_exp: "Gültig Bis",
    chk_card_cvc: "Sicherheitscode (CVC)",
    chk_card_name: "Karteninhaber",
    chk_place_order: "Bestellung Abschließen & Tracking Erhalten",
    chk_security: "Mit der Bestellung erhalten Sie sofort eine Tracking-ID."
  },
  es: {
    nav_home: "Inicio",
    nav_categories: "Categorías",
    nav_all_archive: "Todo el Archivo",
    nav_track: "Rastrear Pedido",
    nav_shop_category: "Comprar por Categoría",
    nav_all_collections: "Todas las Colecciones",
    announcement_shipping: "ENVÍO INTERNACIONAL GRATUITO EN PEDIDOS CALIFICADOS",
    announcement_promo: "USA EL CÓDIGO SITARA15 PARA 15% DE DESCUENTO",
    hero_capsule: "COLECCIÓN INAUGURAL",
    hero_headline: "ROPA PREMIUM Y ESENCIALES A MEDIDA",
    hero_subtext: "Descubre siluetas contemporáneas, tejidos densos y estilo streetwear diseñado para el lujo diario.",
    hero_shop_all: "Ver Todas las Piezas",
    hero_explore: "Explorar Departamentos",
    flash_tag: "OFERTA FLASH",
    flash_extra: "15% extra con el código",
    trust_shipping_title: "Envío Exprés Internacional",
    trust_shipping_desc: "En todos los pedidos elegibles",
    trust_card_title: "Pago Seguro con Tarjeta",
    trust_card_desc: "Visa, Mastercard y AMEX",
    trust_returns_title: "7 Días de Devolución Fácil",
    trust_returns_desc: "Cambios de talla sin problemas",
    trust_quality_title: "100% Calidad Auténtica",
    trust_quality_desc: "Artesanía directa de atelier",
    reviews_header: "Amado por clientes en todo el mundo",
    reviews_tag: "RESEÑAS VERIFICADAS",
    verified_buyer: "Comprador Verificado",
    shelf_most_wanted: "Esenciales Exclusivos",
    shelf_inaugural: "LANZAMIENTO INAUGURAL",
    shelf_explore: "Explorar Todo",
    shelf_archive: "Ver Archivo Completo",
    card_view_details: "Ver Detalles",
    card_ready_to_ship: "Listo para Enviar",
    card_made_to_order: "Bajo Pedido",
    bag_title: "Bolsa de Compras",
    bag_empty: "Tu bolsa está vacía",
    bag_subtotal: "Subtotal",
    bag_checkout: "Proceder al Pago Seguro con Tarjeta",
    wishlist_title: "Piezas Guardadas",
    wishlist_empty: "No hay piezas guardadas",
    wishlist_move_all: "Mover Todo a la Bolsa",
    wishlist_clear: "Vaciar Guardados",
    chk_title: "Checkout Internacional Exprés",
    chk_contact: "1. Datos de Contacto",
    chk_shipping: "2. Dirección de Envío",
    chk_payment: "3. Método de Pago (Solo Tarjeta)",
    chk_full_name: "Nombre Completo *",
    chk_phone: "Teléfono *",
    chk_email: "Correo Electrónico *",
    chk_street: "Dirección *",
    chk_apartment: "Apartamento / Piso",
    chk_city: "Ciudad *",
    chk_state: "Provincia / Estado",
    chk_postal: "Código Postal *",
    chk_country: "País / Región *",
    chk_card_num: "Número de Tarjeta",
    chk_card_exp: "Vencimiento",
    chk_card_cvc: "CVC",
    chk_card_name: "Nombre en la Tarjeta",
    chk_place_order: "Completar Pedido y Obtener Número de Rastreo",
    chk_security: "Al realizar tu pedido recibirás un ID de seguimiento al instante."
  },
  ur: {
    nav_home: "ہوم",
    nav_categories: "کیٹیگریز",
    nav_lookbook: "لوک بک",
    nav_all_archive: "تمام کولیکشن",
    nav_track: "آرڈر ٹریک کریں",
    nav_shop_category: "کیٹیگری کے مطابق خریدیں",
    nav_all_collections: "تمام ملبوسات",
    announcement_shipping: "مقررہ آرڈرز پر مفت ملک گیر اور بین الاقوامی ڈیلیوری",
    announcement_promo: "15% رعایت کے لیے کوڈ SITARA15 استعمال کریں",
    hero_season: "خزاں / سرما 2026",
    hero_drop: "افتتاحی ریلیز",
    hero_capsule: "افتتاحی کولیکشن",
    hero_headline: "پریمیم ملبوسات اور نفاست۔<br><span class=\"hero-highlight\">شاہکار اسٹریٹ ویئر۔</span>",
    hero_subtext: "شاندار اسٹریٹ ویئر ڈیزائن اور پائیدار پرتگالی کاٹن سے تیار کردہ شاہکار ملبوسات۔",
    hero_shop_all: "افتتاحی کولیکشن دیکھیں",
    hero_explore: "ہیوی ویٹ ہڈیز اور اوور ویئر",
    hero_primary_btn: "افتتاحی کولیکشن دیکھیں",
    hero_outline_btn: "ہیوی ویٹ ہڈیز اور اوور ویئر",
    trust_delivery_title: "مفت عالمی ڈیلیوری",
    trust_delivery_desc: "تمام اہل آرڈرز پر",
    trust_ssl_title: "256-بٹ محفوظ انکرپشن",
    trust_ssl_desc: "صرف کارڈ کے ذریعے ادائیگی",
    trust_exchange_title: "14 دن میں مفت تبدیلی",
    trust_exchange_desc: "آسان واپسی کی سہولت",
    flash_tag: "خصوصی آفر",
    flash_extra: "کوڈ کے ساتھ اضافی 15% رعایت",
    trust_shipping_title: "مفت ملک گیر ڈیلیوری",
    trust_shipping_desc: "تمام اہل آرڈرز پر",
    trust_card_title: "محفوظ کارڈ ادائیگی",
    trust_card_desc: "ویزا، ماسٹر کارڈ اور ایمکس",
    trust_returns_title: "7 دن میں آسان واپسی",
    trust_returns_desc: "سائز کی فوری تبدیلی",
    trust_quality_title: "100% اصل کوالٹی",
    trust_quality_desc: "خالص دستکاری اور تصدیق شدہ",
    reviews_header: "دنیا بھر کے صارفین کا پسندیدہ",
    reviews_tag: "تصدیق شدہ کسٹمر ریویوز",
    verified_buyer: "تصدیق شدہ خریدار",
    shelf_most_wanted: "دستخطی اور بنیادی ملبوسات",
    shelf_inaugural: "افتتاحی ریلیز",
    shelf_explore: "تمام دیکھیں",
    shelf_archive: "مکمل کولیکشن دیکھیں",
    card_view_details: "تفصیلات دیکھیں",
    card_ready_to_ship: "تیار برائے ڈیلیوری",
    card_made_to_order: "آرڈر پر تیار",
    bag_title: "شاپنگ بیگ",
    bag_empty: "آپ کا بیگ خالی ہے",
    bag_subtotal: "کل رقم",
    bag_checkout: "کارڈ کے ذریعے محفوظ ادائیگی کریں",
    wishlist_title: "پسندیدہ ملبوسات",
    wishlist_empty: "کوئی ملبوسات محفوظ نہیں ہیں",
    wishlist_move_all: "تمام بیگ میں شامل کریں",
    wishlist_clear: "لسٹ صاف کریں",
    chk_title: "بین الاقوامی ایکسپریس چیک آؤٹ",
    chk_contact: "1. رابطہ کی تفصیلات",
    chk_shipping: "2. ڈیلیوری ایڈریس",
    chk_payment: "3. طریقہ ادائیگی (صرف کارڈ)",
    chk_full_name: "مکمل نام *",
    chk_phone: "فون نمبر *",
    chk_email: "ای میل ایڈریس *",
    chk_street: "گلی کا پتہ *",
    chk_apartment: "فلیٹ / مکان نمبر",
    chk_city: "شہر *",
    chk_state: "صوبہ / علاقہ",
    chk_postal: "پوسٹل کوڈ *",
    chk_country: "ملک *",
    chk_card_num: "کارڈ نمبر",
    chk_card_exp: "میعاد ختم ہونے کی تاریخ",
    chk_card_cvc: "سی وی سی کوڈ",
    chk_card_name: "کارڈ پر درج نام",
    chk_place_order: "آرڈر مکمل کریں اور ٹریکنگ حاصل کریں",
    chk_security: "آرڈر کی تکمیل پر فوری ٹریکنگ آئی ڈی فراہم کی جائے گی۔"
  },
  ja: {
    nav_home: "ホーム",
    nav_categories: "カテゴリー",
    nav_all_archive: "すべてのアーカイブ",
    nav_track: "注文追跡",
    nav_shop_category: "カテゴリー別に見る",
    nav_all_collections: "全コレクション",
    announcement_shipping: "条件を満たす注文で世界中への送料無料",
    announcement_promo: "プロモコード SITARA15 で15%オフ",
    hero_capsule: "オープニングコレクション",
    hero_headline: "プレミアムアパレル＆ビスポークエッセンシャル",
    hero_subtext: "現代的なシルエット、上質なヘビーウェイト素材、洗練されたラグジュアリーストリートウェア。",
    hero_shop_all: "全アイテムを見る",
    hero_explore: "コレクションを探索",
    flash_tag: "フラッシュセール",
    flash_extra: "コードでさらに15%オフ",
    trust_shipping_title: "世界中への無料配送",
    trust_shipping_desc: "対象の全ご注文",
    trust_card_title: "安全なカード決済",
    trust_card_desc: "Visa、Mastercard、AMEX対応",
    trust_returns_title: "7日間の返品対応",
    trust_returns_desc: "スムーズなサイズ交換",
    trust_quality_title: "100% 本物の品質",
    trust_quality_desc: "アトリエ直結の職人技",
    reviews_header: "世界中の顧客に愛されています",
    reviews_tag: "確認済みカスタマーレビュー",
    verified_buyer: "認証済み購入者",
    shelf_most_wanted: "シグネチャー・エッセンシャル",
    shelf_inaugural: "特別リリース",
    shelf_explore: "すべて見る",
    shelf_archive: "全アーカイブを見る",
    card_view_details: "詳細を見る",
    card_ready_to_ship: "即日発送可能",
    card_made_to_order: "受注生産",
    bag_title: "ショッピングバッグ",
    bag_empty: "バッグは空です",
    bag_subtotal: "小計",
    bag_checkout: "安全なカード決済に進む",
    wishlist_title: "お気に入り",
    wishlist_empty: "お気に入りアイテムはありません",
    wishlist_move_all: "すべてバッグに追加",
    wishlist_clear: "お気に入りをクリア",
    chk_title: "インターナショナル・チェックアウト",
    chk_contact: "1. 連絡先情報",
    chk_shipping: "2. お届け先住所",
    chk_payment: "3. お支払い方法（カードのみ）",
    chk_full_name: "氏名 *",
    chk_phone: "電話番号 *",
    chk_email: "メールアドレス *",
    chk_street: "住所・番地 *",
    chk_apartment: "建物名・部屋番号",
    chk_city: "市区町村 *",
    chk_state: "都道府県",
    chk_postal: "郵便番号 *",
    chk_country: "国・地域 *",
    chk_card_num: "カード番号",
    chk_card_exp: "有効期限",
    chk_card_cvc: "セキュリティコード (CVC)",
    chk_card_name: "カード名義人",
    chk_place_order: "注文を確定して追跡番号を取得",
    chk_security: "ご注文完了後、すぐに追跡番号が発行されます。"
  },
  zh: {
    nav_home: "首页",
    nav_categories: "分类",
    nav_all_archive: "全部系列",
    nav_track: "追踪订单",
    nav_shop_category: "按品类浏览",
    nav_all_collections: "所有单品",
    announcement_shipping: "全球符合条件的订单享免费快递配送",
    announcement_promo: "输入优惠码 SITARA15 享首发 85 折",
    hero_capsule: "首发旗舰系列",
    hero_headline: "高端奢华服饰与定制日常单品",
    hero_subtext: "探索当代剪裁、重磅优质面料与专为日常奢华打造的高阶街头服饰。",
    hero_shop_all: "浏览全部单品",
    hero_explore: "探索各部门分类",
    flash_tag: "限时闪购",
    flash_extra: "使用优惠码享额外 85 折",
    trust_shipping_title: "全球免费快递",
    trust_shipping_desc: "适用于所有符合条件的订单",
    trust_card_title: "安全信用卡支付",
    trust_card_desc: "支持 Visa、Mastercard 与 AMEX",
    trust_returns_title: "7天无忧退换",
    trust_returns_desc: "尺码轻松调换",
    trust_quality_title: "100% 正品保障",
    trust_quality_desc: "工坊直供精湛手工匠造",
    reviews_header: "备受全球客户赞誉",
    reviews_tag: "真实客户评价",
    verified_buyer: "认证买家",
    shelf_most_wanted: "标志性核心单品",
    shelf_inaugural: "首发特别发布",
    shelf_explore: "查看全部",
    shelf_archive: "查看完整档案",
    card_view_details: "查看详情",
    card_ready_to_ship: "现货速发",
    card_made_to_order: "定制预定",
    bag_title: "购物袋",
    bag_empty: "您的购物袋为空",
    bag_subtotal: "小计",
    bag_checkout: "前往安全银行卡结账",
    wishlist_title: "收藏单品",
    wishlist_empty: "暂无收藏单品",
    wishlist_move_all: "将全部现货移至购物袋",
    wishlist_clear: "清空收藏夹",
    chk_title: "全球极速结账",
    chk_contact: "1. 联系方式",
    chk_shipping: "2. 配送地址",
    chk_payment: "3. 支付方式（仅限银行卡）",
    chk_full_name: "收件人姓名 *",
    chk_phone: "电话号码 *",
    chk_email: "电子邮箱 *",
    chk_street: "街道详细地址 *",
    chk_apartment: "公寓/单元/楼层",
    chk_city: "城市 *",
    chk_state: "省份 / 州",
    chk_postal: "邮政编码 *",
    chk_country: "国家 / 地区 *",
    chk_card_num: "银行卡号",
    chk_card_exp: "有效期 (月/年)",
    chk_card_cvc: "安全码 (CVC)",
    chk_card_name: "持卡人姓名",
    chk_place_order: "完成订单并获取追踪单号",
    chk_security: "提交订单后将立即为您生成官方物流追踪编号。"
  }
};

// Comprehensive list of World Countries with Phone Prefixes & Preferred Currencies
const DEFAULT_COUNTRIES = [
  { name: 'United States', code: 'US', phone: '+1', currency: 'USD' },
  { name: 'United Kingdom', code: 'GB', phone: '+44', currency: 'GBP' },
  { name: 'United Arab Emirates', code: 'AE', phone: '+971', currency: 'AED' },
  { name: 'Saudi Arabia', code: 'SA', phone: '+966', currency: 'SAR' },
  { name: 'Pakistan', code: 'PK', phone: '+92', currency: 'PKR' },
  { name: 'Canada', code: 'CA', phone: '+1', currency: 'CAD' },
  { name: 'Australia', code: 'AU', phone: '+61', currency: 'AUD' },
  { name: 'Germany', code: 'DE', phone: '+49', currency: 'EUR' },
  { name: 'France', code: 'FR', phone: '+33', currency: 'EUR' },
  { name: 'Italy', code: 'IT', phone: '+39', currency: 'EUR' },
  { name: 'Spain', code: 'ES', phone: '+34', currency: 'EUR' },
  { name: 'Netherlands', code: 'NL', phone: '+31', currency: 'EUR' },
  { name: 'Switzerland', code: 'CH', phone: '+41', currency: 'CHF' },
  { name: 'Japan', code: 'JP', phone: '+81', currency: 'JPY' },
  { name: 'Singapore', code: 'SG', phone: '+65', currency: 'SGD' },
  { name: 'Qatar', code: 'QA', phone: '+974', currency: 'QAR' },
  { name: 'Kuwait', code: 'KW', phone: '+965', currency: 'KWD' },
  { name: 'Oman', code: 'OM', phone: '+968', currency: 'OMR' },
  { name: 'Bahrain', code: 'BH', phone: '+973', currency: 'BHD' },
  { name: 'India', code: 'IN', phone: '+91', currency: 'INR' },
  { name: 'New Zealand', code: 'NZ', phone: '+64', currency: 'NZD' },
  { name: 'Sweden', code: 'SE', phone: '+46', currency: 'SEK' },
  { name: 'Norway', code: 'NO', phone: '+47', currency: 'NOK' },
  { name: 'Denmark', code: 'DK', phone: '+45', currency: 'DKK' },
  { name: 'Belgium', code: 'BE', phone: '+32', currency: 'EUR' },
  { name: 'Austria', code: 'AT', phone: '+43', currency: 'EUR' },
  { name: 'Ireland', code: 'IE', phone: '+353', currency: 'EUR' },
  { name: 'Portugal', code: 'PT', phone: '+351', currency: 'EUR' },
  { name: 'Turkey', code: 'TR', phone: '+90', currency: 'TRY' },
  { name: 'South Africa', code: 'ZA', phone: '+27', currency: 'ZAR' },
  { name: 'Malaysia', code: 'MY', phone: '+60', currency: 'MYR' },
  { name: 'Hong Kong', code: 'HK', phone: '+852', currency: 'USD' },
  { name: 'China', code: 'CN', phone: '+86', currency: 'USD' },
  { name: 'South Korea', code: 'KR', phone: '+82', currency: 'USD' },
  { name: 'Brazil', code: 'BR', phone: '+55', currency: 'USD' },
  { name: 'Mexico', code: 'MX', phone: '+52', currency: 'USD' },
  { name: 'Poland', code: 'PL', phone: '+48', currency: 'EUR' },
  { name: 'Greece', code: 'GR', phone: '+30', currency: 'EUR' },
  { name: 'Czech Republic', code: 'CZ', phone: '+420', currency: 'EUR' },
  { name: 'Finland', code: 'FI', phone: '+358', currency: 'EUR' },
  { name: 'Luxembourg', code: 'LU', phone: '+352', currency: 'EUR' },
  { name: 'Monaco', code: 'MC', phone: '+377', currency: 'EUR' },
  { name: 'Other Worldwide Destination', code: 'GLOBAL', phone: '+', currency: 'USD' }
];

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
    const code = localStorage.getItem('sitara_active_currency') || 'USD';
    return DEFAULT_CURRENCIES[code] || DEFAULT_CURRENCIES.USD;
  },

  setActiveCurrency(code) {
    if (DEFAULT_CURRENCIES[code]) {
      localStorage.setItem('sitara_active_currency', code);
    }
  },

  getLanguages() {
    return DEFAULT_LANGUAGES;
  },

  getActiveLanguage() {
    const code = localStorage.getItem('sitara_active_lang') || 'en';
    const found = DEFAULT_LANGUAGES.find((l) => l.code === code);
    return found || DEFAULT_LANGUAGES[0];
  },

  setActiveLanguage(code) {
    const found = DEFAULT_LANGUAGES.find((l) => l.code === code);
    if (found) {
      localStorage.setItem('sitara_active_lang', code);
      document.documentElement.lang = code;
      document.documentElement.dir = found.dir || 'ltr';
      if (found.dir === 'rtl') {
        document.body.classList.add('rtl-mode');
      } else {
        document.body.classList.remove('rtl-mode');
      }
    }
    return found || DEFAULT_LANGUAGES[0];
  },

  t(key, fallback = '') {
    const lang = this.getActiveLanguage().code;
    if (I18N_DICT[lang] && I18N_DICT[lang][key]) {
      return I18N_DICT[lang][key];
    }
    if (I18N_DICT.en && I18N_DICT.en[key]) {
      return I18N_DICT.en[key];
    }
    return fallback || key;
  },

  getCountries() {
    return DEFAULT_COUNTRIES;
  },

  getCountryByName(name) {
    return DEFAULT_COUNTRIES.find((c) => c.name.toLowerCase() === (name || '').toLowerCase()) || DEFAULT_COUNTRIES[0];
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
      status: 'Paid / Authorized',
      paymentMethod: orderData.paymentMethod || 'Credit / Debit Card (Visa, Mastercard, AMEX)',
      timeline: [
        { status: 'Payment Authorized', time: new Date().toLocaleString(), note: 'Card payment verified via 256-bit encrypted gateway.' },
        { status: 'Order Placed', time: new Date().toLocaleString(), note: 'Registered in New Sitara Atelier for international dispatch.' }
      ]
    };
    orders.unshift(newOrder);
    localStorage.setItem('sitara_orders_v2', JSON.stringify(orders));
    this.saveCart([]);
    this.syncWithCloud('orders', newOrder);
    return newOrder;
  },

  addOrder(orderData) {
    return this.createOrder(orderData);
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
