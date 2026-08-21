// ==========================================================================
// NEW SITARA — UNIFIED PERSISTENT DATA LAYER & TRACKING ENGINE
// ==========================================================================

const DEFAULT_CATEGORIES = [
  {
    id: 't-shirts',
    name: 'T-Shirts & Tops',
    slug: 't-shirts',
    description: 'Heavyweight graphic tees, minimal boxy cuts, and luxury cotton basics.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'hoodies',
    name: 'Hoodies & Sweatshirts',
    slug: 'hoodies',
    description: '520 GSM loopback French terry hoodies and structured crewnecks.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pants',
    name: 'Pants & Trousers',
    slug: 'pants',
    description: 'Japanese selvedge denim, double-pleated virgin wool trousers, and cargos.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'shorts',
    name: 'Shorts & Bottoms',
    slug: 'shorts',
    description: 'Heavyweight fleece sweatshorts, technical nylon cargo shorts, and tailored linen shorts.',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'outerwear',
    name: 'Jackets & Outerwear',
    slug: 'outerwear',
    description: 'Cashmere wool trench coats, lambskin bombers, and technical shells.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'shoes',
    name: 'Shoes & Footwear',
    slug: 'shoes',
    description: 'Italian calfskin minimal sneakers, chunky technical runners, and Chelsea boots.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'accessories',
    name: 'Belts & Accessories',
    slug: 'accessories',
    description: 'Italian leather belts, monogram cardholders, silver curb chains, and twill caps.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop'
  }
];

const DEFAULT_PRODUCTS = [
  // --- T-SHIRTS & TOPS ---
  {
    id: 'ns-prod-101',
    name: 'Studio Boxy Heavyweight Tee',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 85,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    description: 'Cut from 300 GSM combed organic cotton with a structured ribbed collar and clean drop-shoulder drape.',
    specs: '✦ 100% Combed Organic Cotton • 300 GSM • Pre-shrunk & Washed',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-102',
    name: 'Archival Washed Graphic Tour Tee',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 95,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    description: 'Vintage stone-washed single jersey tee with hand-distressed neckline and subtle cracked patina artwork.',
    specs: '✦ 280 GSM Single Jersey • Stone Distressed • Relaxed Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-103',
    name: 'Ribbed Minimal Muscle Tank',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 65,
    tag: 'Essential',
    imageFront: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    description: 'Wide 2x2 ribbed heavy stretch cotton tank top with tailored scoop neck and raw edge hem.',
    specs: '✦ 95% Cotton, 5% Elastane • 2x2 Rib Knit • Breathable Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-104',
    name: 'Merino Wool Minimal Knit Polo',
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    price: 140,
    tag: 'Signature',
    imageFront: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    description: 'Ultra-fine 16-gauge merino knit polo with open Johnny collar and ribbed micro cuffs.',
    specs: '✦ 100% Extra-fine Merino Wool • Seamless 16-Gauge Knit',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- HOODIES & SWEATSHIRTS ---
  {
    id: 'ns-prod-201',
    name: '520GSM Loopback Heavyweight Hoodie',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 185,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
    description: 'Constructed from heavy 520 GSM Portuguese organic French terry. Features a seamless double-layer hood with custom silver aglets.',
    specs: '✦ 520 GSM Loopback Terry • Double Layer Hood • Pre-shrunk',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-202',
    name: 'Chalk White Raglan Crewneck',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 155,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    description: 'Clean architectural raglan cut in unbleached chalk white with heavy 480 GSM cotton and blind stitched hem.',
    specs: '✦ 480 GSM Compact Fleece • Raglan Sleeve Cut • Heavy Rib Hem',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-203',
    name: 'Cashmere-Blend Relaxed Knit Hoodie',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 245,
    tag: 'Limited Edition',
    imageFront: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop',
    description: 'Plush 7-gauge knitted pullover hoodie combining extra-fine merino wool and pure Mongolian cashmere.',
    specs: '✦ 70% Merino Wool, 30% Cashmere • Ribbed Trims • Relaxed Drape',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-204',
    name: 'Heavyweight Full-Zip Track Jacket',
    category: 'hoodies',
    categoryName: 'Hoodies & Sweatshirts',
    price: 175,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    description: 'Boxy 2-way RiRi zip hoodie with funnel collar, deep kangaroo pockets, and high-density ribbed waistband.',
    specs: '✦ 500 GSM Brushed Fleece • 2-Way Metal Zip • Funnel Neckline',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- PANTS & TROUSERS ---
  {
    id: 'ns-prod-301',
    name: '14oz Okayama Japanese Selvedge Denim',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 240,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    description: 'Woven on vintage shuttle looms in Kojima, Japan. Red-line selvedge ticker, custom copper rivets, and a relaxed straight cut.',
    specs: '✦ 14oz Okayama Shuttle Looms • Solid Copper Hardware • Raw Indigo',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 'ns-prod-302',
    name: 'Architectural Pleated Virgin Wool Trouser',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 215,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    description: 'Double front pleats with a tailored flowing wide leg cut from Italian virgin wool blend with hidden side adjusters.',
    specs: '✦ 60% Virgin Wool, 40% Viscose • Double Pleats • Internal Hook Tab',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 'ns-prod-303',
    name: 'Articulated Utility Cargo Pant',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 195,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    description: 'Heavy 340 GSM cotton ripstop with gusseted dual 3D cargo pockets, reinforced knees, and drawcord hems.',
    specs: '✦ 340 GSM Cotton Ripstop • Cobra Buckle Straps • Adjustable Hems',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-304',
    name: 'Tailored Interlock Lounge Pant',
    category: 'pants',
    categoryName: 'Pants & Trousers',
    price: 150,
    tag: 'Essential',
    imageFront: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    description: 'Pin-tuck center front crease with encased elastic drawstring waist and premium metal-tipped cords.',
    specs: '✦ Compact Interlock Cotton Knit • Metal-tipped Drawcords',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- SHORTS & BOTTOMS ---
  {
    id: 'ns-prod-401',
    name: 'Heavyweight French Terry Sweatshort',
    category: 'shorts',
    categoryName: 'Shorts & Bottoms',
    price: 110,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
    description: 'Cut from 480 GSM loopback cotton with raw-cut hem finish, deep slant pockets, and thick custom drawstrings.',
    specs: '✦ 480 GSM Cotton Loopback • Raw Edge Hem • Thick Knit Waistband',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-402',
    name: 'Technical Nylon Cargo Short',
    category: 'shorts',
    categoryName: 'Shorts & Bottoms',
    price: 135,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop',
    description: 'Water-resistant crinkle taslan nylon with magnetic FIDLOCK pocket flaps and built-in webbing belt.',
    specs: '✦ Water-Repellent Nylon • FIDLOCK Magnetic Snaps • Integrated Belt',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-403',
    name: 'Tailored Linen-Cotton Pleated Short',
    category: 'shorts',
    categoryName: 'Shorts & Bottoms',
    price: 145,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
    description: 'Italian linen and organic cotton blend with single front pleats, 7-inch inseam, and tailored side tabs.',
    specs: '✦ 55% Italian Linen, 45% Cotton • 7-Inch Inseam • Horn Button Details',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },

  // --- JACKETS & OUTERWEAR ---
  {
    id: 'ns-prod-501',
    name: 'Cashmere-Wool Double Breasted Overcoat',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 490,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop',
    description: 'Architectural heavy overcoat tailored from Italian virgin wool and cashmere with cupro lining and horn buttons.',
    specs: '✦ 80% Virgin Wool, 20% Cashmere • Cupro Bemberg Lining • Horn Buttons',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-502',
    name: 'Supple Nappa Leather Bomber Jacket',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 450,
    tag: 'Limited Edition',
    imageFront: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    description: 'Ultra-soft Italian lambskin nappa with heavy wool rib knit collar, 2-way metal zip, and interior chest pockets.',
    specs: '✦ 100% Full-Grain Lambskin • RiRi Swiss Zip • Wool Rib Trims',
    sizes: ['M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-503',
    name: '3-Layer Technical Shell Jacket',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 290,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    description: '20,000mm waterproof breathable nylon membrane with fully taped internal seams and Cohaesive cord locks.',
    specs: '✦ 3-Layer Taped Waterproof Nylon • YKK AquaGuard Zips',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-prod-504',
    name: 'Overdyed Mineral Denim Trucker Jacket',
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    price: 220,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    description: 'Boxy cropped type-3 denim jacket with mineral enzyme wash and custom solid brass shank hardware.',
    specs: '✦ 13.5oz Cotton Denim • Solid Brass Shanks • Drop Shoulder Cut',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },

  // --- SHOES & FOOTWEAR ---
  {
    id: 'ns-prod-601',
    name: 'Minimal Italian Leather Low-Top Sneaker',
    category: 'shoes',
    categoryName: 'Shoes & Footwear',
    price: 220,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    description: 'Handcrafted in Civitanova Marche, Italy from full-grain calfskin with genuine Margom rubber cupsole.',
    specs: '✦ 100% Full-Grain Italian Calfskin • Margom Rubber Cupsole',
    sizes: ['40', '41', '42', '43', '44', '45'],
    inStock: true
  },
  {
    id: 'ns-prod-602',
    name: 'Obsidian Sculpted Technical Runner',
    category: 'shoes',
    categoryName: 'Shoes & Footwear',
    price: 280,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop',
    description: 'Multi-layer Italian suede and ballistic nylon mesh upper with exaggerated sculpted EVA midsole and Vibram outsole.',
    specs: '✦ Suede & Ballistic Mesh • Vibram Megagrip Sole • Ortholite Insole',
    sizes: ['41', '42', '43', '44', '45'],
    inStock: true
  },
  {
    id: 'ns-prod-603',
    name: 'Suede Chelsea Boot in Tobacco',
    category: 'shoes',
    categoryName: 'Shoes & Footwear',
    price: 360,
    tag: 'Limited Edition',
    imageFront: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    description: 'Goodyear-welted ankle Chelsea boot crafted from water-repellent calf suede with stacked leather heel.',
    specs: '✦ Premium Suede Calfskin • Stacked Leather Heel • Goodyear Welted',
    sizes: ['40', '41', '42', '43', '44'],
    inStock: true
  },

  // --- BELTS & ACCESSORIES ---
  {
    id: 'ns-prod-701',
    name: 'Full-Grain Leather Roller Buckle Belt',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 95,
    tag: 'Essential',
    imageFront: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop',
    description: '35mm wide vegetable-tanned bridle leather belt with solid brushed stainless steel roller buckle and beveled edges.',
    specs: '✦ 35mm Vegetable-Tanned Bridle Leather • Solid Steel Buckle',
    sizes: ['85cm', '90cm', '95cm', '100cm'],
    inStock: true
  },
  {
    id: 'ns-prod-702',
    name: 'Pebble Grain Leather Cardholder',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 80,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
    description: 'Ultra-slim 4-slot cardholder with central folded cash compartment and debossed New Sitara insignia.',
    specs: '✦ Pebble Grain Calfskin • RFID Protected • Hand-painted Edges',
    sizes: ['One Size'],
    inStock: true
  },
  {
    id: 'ns-prod-703',
    name: 'Diamond-Cut Silver Curb Chain',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 165,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop',
    description: '7mm precision diamond-cut bevel curb chain forged from 925 sterling silver with custom secure lobster lock.',
    specs: '✦ 925 Sterling Silver • 50cm Length • Anti-Tarnish Rhodium Finish',
    sizes: ['50cm', '55cm'],
    inStock: true
  },
  {
    id: 'ns-prod-704',
    name: 'Japanese Cotton Twill 6-Panel Cap',
    category: 'accessories',
    categoryName: 'Belts & Accessories',
    price: 65,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
    description: 'Structured 6-panel silhouette cut from heavy Japanese cotton twill with antique silver buckle adjuster.',
    specs: '✦ 100% Heavy Japanese Cotton Twill • Metal Buckle Strap',
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

// Data Layer Service API
const DataStore = {
  // --- CATEGORIES ---
  getCategories() {
    const raw = localStorage.getItem('sitara_categories_v3');
    if (!raw) {
      localStorage.setItem('sitara_categories_v3', JSON.stringify(DEFAULT_CATEGORIES));
      return DEFAULT_CATEGORIES;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return DEFAULT_CATEGORIES;
    }
  },

  saveCategory(cat) {
    const cats = this.getCategories();
    const idx = cats.findIndex((c) => c.id === cat.id);
    if (idx !== -1) {
      cats[idx] = { ...cats[idx], ...cat };
    } else {
      cat.id = cat.id || 'cat-' + Date.now();
      cats.push(cat);
    }
    localStorage.setItem('sitara_categories_v3', JSON.stringify(cats));
    this.syncWithCloud('categories', cats);
    return cats;
  },

  deleteCategory(catId) {
    let cats = this.getCategories();
    cats = cats.filter((c) => c.id !== catId);
    localStorage.setItem('sitara_categories_v3', JSON.stringify(cats));
    return cats;
  },

  // --- PRODUCTS ---
  getProducts() {
    const raw = localStorage.getItem('sitara_products_v3');
    if (!raw) {
      localStorage.setItem('sitara_products_v3', JSON.stringify(DEFAULT_PRODUCTS));
      return DEFAULT_PRODUCTS;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return DEFAULT_PRODUCTS;
    }
  },

  saveProduct(prod) {
    const prods = this.getProducts();
    const idx = prods.findIndex((p) => p.id === prod.id);
    if (idx !== -1) {
      prods[idx] = { ...prods[idx], ...prod };
    } else {
      prod.id = prod.id || 'ns-prod-' + Date.now();
      prods.unshift(prod);
    }
    localStorage.setItem('sitara_products_v3', JSON.stringify(prods));
    this.syncWithCloud('products', prods);
    return prods;
  },

  deleteProduct(prodId) {
    let prods = this.getProducts();
    prods = prods.filter((p) => p.id !== prodId);
    localStorage.setItem('sitara_products_v3', JSON.stringify(prods));
    return prods;
  },

  // --- ORDERS (With Full Customer Address & Tracking Generation) ---
  getOrders() {
    const raw = localStorage.getItem('sitara_orders_v3');
    if (!raw) {
      localStorage.setItem('sitara_orders_v3', JSON.stringify(DEFAULT_ORDERS));
      return DEFAULT_ORDERS;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return DEFAULT_ORDERS;
    }
  },

  addOrder(orderData) {
    const orders = this.getOrders();
    
    // Generate Unique Tracking ID (e.g. NS-TRK-74829)
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const trackingId = `NS-TRK-${randomDigits}`;

    const newOrder = {
      id: trackingId,
      trackingId: trackingId,
      createdAt: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      customer: {
        fullName: orderData.fullName || 'VIP Customer',
        email: orderData.email || '',
        phone: orderData.phone || '',
        street: orderData.street || '',
        apartment: orderData.apartment || '',
        city: orderData.city || '',
        state: orderData.state || '',
        postalCode: orderData.postalCode || '',
        country: orderData.country || 'United States'
      },
      items: orderData.items || [],
      subtotal: orderData.subtotal || 0,
      discount: orderData.discount || 0,
      shipping: orderData.shipping || 0,
      total: orderData.total || 0,
      status: 'Processing', // Steps: 'Processing' -> 'Tailoring & Prep' -> 'Shipped' -> 'Delivered'
      paymentMethod: orderData.paymentMethod || 'Card',
      courier: {
        name: orderData.courierName || 'DHL Express Worldwide',
        trackingRef: orderData.courierRef || `DHL-${randomDigits}`,
        estimatedDelivery: '3–5 Business Days'
      }
    };

    orders.unshift(newOrder);
    localStorage.setItem('sitara_orders_v3', JSON.stringify(orders));
    this.syncWithCloud('orders', orders);
    return newOrder;
  },

  trackOrder(query) {
    if (!query) return null;
    const cleanQuery = query.trim().toUpperCase();
    const orders = this.getOrders();

    return orders.find(
      (o) =>
        (o.id && o.id.toUpperCase() === cleanQuery) ||
        (o.trackingId && o.trackingId.toUpperCase() === cleanQuery) ||
        (o.customer && o.customer.email && o.customer.email.toUpperCase() === cleanQuery)
    );
  },

  updateOrderStatus(orderId, status) {
    const orders = this.getOrders();
    const ord = orders.find((o) => o.id === orderId);
    if (ord) {
      ord.status = status;
      localStorage.setItem('sitara_orders_v3', JSON.stringify(orders));
      this.syncWithCloud('orders', orders);
    }
    return orders;
  },

  updateCourierInfo(orderId, courierName, courierRef) {
    const orders = this.getOrders();
    const ord = orders.find((o) => o.id === orderId);
    if (ord) {
      ord.courier = {
        ...(ord.courier || {}),
        name: courierName || ord.courier?.name || 'Express Courier',
        trackingRef: courierRef || ord.courier?.trackingRef || 'N/A'
      };
      localStorage.setItem('sitara_orders_v3', JSON.stringify(orders));
      this.syncWithCloud('orders', orders);
    }
    return orders;
  },

  // --- PROMOS ---
  getPromos() {
    const raw = localStorage.getItem('sitara_promos_v3');
    if (!raw) {
      localStorage.setItem('sitara_promos_v3', JSON.stringify(DEFAULT_PROMOS));
      return DEFAULT_PROMOS;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return DEFAULT_PROMOS;
    }
  },

  savePromo(promo) {
    const promos = this.getPromos();
    const idx = promos.findIndex((p) => p.code.toUpperCase() === promo.code.toUpperCase());
    if (idx !== -1) {
      promos[idx] = { ...promos[idx], ...promo };
    } else {
      promos.unshift(promo);
    }
    localStorage.setItem('sitara_promos_v3', JSON.stringify(promos));
    return promos;
  },

  deletePromo(code) {
    let promos = this.getPromos();
    promos = promos.filter((p) => p.code.toUpperCase() !== code.toUpperCase());
    localStorage.setItem('sitara_promos_v3', JSON.stringify(promos));
    return promos;
  },

  // --- SUPABASE CLOUD SYNC CONNECTOR ---
  getCloudConfig() {
    return {
      url: localStorage.getItem('sitara_supabase_url') || '',
      key: localStorage.getItem('sitara_supabase_key') || ''
    };
  },

  saveCloudConfig(url, key) {
    localStorage.setItem('sitara_supabase_url', url.trim());
    localStorage.setItem('sitara_supabase_key', key.trim());
  },

  async syncWithCloud(table, data) {
    const { url, key } = this.getCloudConfig();
    if (!url || !key) return; // Local fallback mode

    try {
      await fetch(`${url}/rest/v1/${table}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': key,
          'Authorization': `Bearer ${key}`,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(data)
      });
    } catch (err) {
      console.warn('Cloud sync offline:', err);
    }
  },

  // --- SYSTEM RESET ---
  resetAllDefaults() {
    localStorage.setItem('sitara_categories_v3', JSON.stringify(DEFAULT_CATEGORIES));
    localStorage.setItem('sitara_products_v3', JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem('sitara_orders_v3', JSON.stringify(DEFAULT_ORDERS));
    localStorage.setItem('sitara_promos_v3', JSON.stringify(DEFAULT_PROMOS));
  }
};

// Export to window
if (typeof window !== 'undefined') {
  window.DataStore = DataStore;
}
