// ==========================================================================
// NEW SITARA INTERPRIZES — 2026 MODERN E-COMMERCE ENGINE
// ==========================================================================

const PRODUCTS_STORE = [
  // --- FOOTWEAR & SNEAKERS ---
  {
    id: 'ns-shoe-1',
    name: 'Atelier Minimal Low-Top Sneaker',
    category: 'shoes',
    categoryName: 'Footwear',
    price: 220,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Handcrafted in Italy from full-grain calfskin leather with Margom rubber cupsole and gold foil NS insignia on tongue.',
    specs: '✦ 100% Full-Grain Italian Calfskin • Margom Rubber Cupsole • Waxed Cotton Laces',
    sizes: ['40', '41', '42', '43', '44', '45']
  },
  {
    id: 'ns-shoe-2',
    name: 'Obsidian Chunky Technical Runner',
    category: 'shoes',
    categoryName: 'Footwear',
    price: 280,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Multi-layered suede and breathable nylon mesh upper with exaggerated sculpted EVA midsole and Vibram traction outsole.',
    specs: '✦ Italian Suede & Ballistic Mesh • Vibram Rubber Outsole • Cushion Ortholite Footbed',
    sizes: ['41', '42', '43', '44', '45']
  },
  {
    id: 'ns-shoe-3',
    name: 'Suede Chelsea Boot in Tobacco',
    category: 'shoes',
    categoryName: 'Footwear',
    price: 360,
    tag: 'Limited Edition',
    imageFront: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Blake-stitched ankle Chelsea boot crafted from water-resistant calf suede with tonal elastic side gussets and pull tabs.',
    specs: '✦ Premium Suede Calfskin • Leather Stacked Heel • Goodyear Welted',
    sizes: ['40', '41', '42', '43', '44']
  },
  {
    id: 'ns-shoe-4',
    name: 'Lug-Sole Derby Shoe Noir',
    category: 'shoes',
    categoryName: 'Footwear',
    price: 310,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'High-shine brushed calf leather derby with exaggerated commando lug sole and hand-stitched welt.',
    specs: '✦ Brushed Box Calf Leather • Commando Rubber Lug Sole • Waxed Laces',
    sizes: ['41', '42', '43', '44', '45']
  },

  // --- HOODIES & TOPS ---
  {
    id: 'ns-top-1',
    name: 'Obsidian 520GSM Loopback Hoodie',
    category: 'tops',
    categoryName: 'Hoodies & Tops',
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
    id: 'ns-top-2',
    name: 'Monogram Heavyweight Boxy Tee',
    category: 'tops',
    categoryName: 'Hoodies & Tops',
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
    id: 'ns-top-3',
    name: 'Cashmere-Blend Minimal Knit',
    category: 'tops',
    categoryName: 'Hoodies & Tops',
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
    id: 'ns-top-4',
    name: 'Vintage Washed Graphic Tour Tee',
    category: 'tops',
    categoryName: 'Hoodies & Tops',
    price: 110,
    tag: 'Selling Fast',
    imageFront: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Sun-faded distressed wash with hand-screenprinted New Sitara typography and cracked ink patina.',
    specs: '✦ 280 GSM Single Jersey • Hand-Distressed Collars • Boxy Dropped Fit',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-top-5',
    name: 'Heavy French Terry Crewneck',
    category: 'tops',
    categoryName: 'Hoodies & Tops',
    price: 165,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop'
    ],
    description: '480 GSM loopback cotton crewneck featuring ribbed side gussets and flatlock seam construction.',
    specs: '✦ 100% Organic Heavyweight Cotton • Flatlock Stitching • Made in Portugal',
    sizes: ['S', 'M', 'L', 'XL']
  },

  // --- PANTS & DENIM ---
  {
    id: 'ns-bot-1',
    name: 'Pleated Wide-Leg Wool Trouser',
    category: 'bottoms',
    categoryName: 'Pants & Denim',
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
    id: 'ns-bot-2',
    name: 'Modular Relaxed Cargo Trouser',
    category: 'bottoms',
    categoryName: 'Pants & Denim',
    price: 210,
    tag: 'Selling Fast',
    imageFront: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Heavy cotton ripstop trousers featuring bellowed cargo pockets with concealed magnetic closures and adjustable drawstring ankles.',
    specs: '✦ 100% Military-grade Cotton Ripstop • Magnetic Pocket Fasteners',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: 'ns-bot-3',
    name: '14oz Japanese Selvedge Raw Denim',
    category: 'bottoms',
    categoryName: 'Pants & Denim',
    price: 225,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Woven on vintage shuttle looms in Okayama, Japan. 14oz red-line selvedge with custom engraved copper rivets and embossed leather patch.',
    specs: '✦ 100% Kurabo Japanese Cotton • Red-line Selvedge ID • Straight Relaxed Leg',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: 'ns-bot-4',
    name: 'Tailored Flare Slack in Noir',
    category: 'bottoms',
    categoryName: 'Pants & Denim',
    price: 195,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Flattering split-hem bootcut trousers constructed with subtle elastane stretch for all-day comfort.',
    specs: '✦ 96% Tropical Wool, 4% Elastane • Hidden Zip Hem Splits',
    sizes: ['30', '32', '34', '36']
  },

  // --- JACKETS & OUTERWEAR ---
  {
    id: 'ns-out-1',
    name: 'Atelier Double-Breasted Trench',
    category: 'outerwear',
    categoryName: 'Jackets & Coats',
    price: 340,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Crafted from Italian storm-resistant gabardine with structured drop shoulders and custom engraved New Sitara gold horn buttons.',
    specs: '✦ 100% Water-repellent Cotton Gabardine • Cupro Silk Lining • Made in Portugal',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-out-2',
    name: 'Architectural Cropped Bomber',
    category: 'outerwear',
    categoryName: 'Jackets & Coats',
    price: 395,
    tag: 'Exclusive Drop',
    imageFront: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Structured technical nylon with PrimaLoft insulation, two-way heavy matte gold zipper, and storm flap detailing.',
    specs: '✦ Italian Technical Nylon • PrimaLoft Gold Insulation • Ribbed Wool Cuffs',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-out-3',
    name: 'Overcoat in Melton Wool Noir',
    category: 'outerwear',
    categoryName: 'Jackets & Coats',
    price: 460,
    tag: 'Archival Piece',
    imageFront: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Full-length tailored coat constructed from 800 GSM heavy Melton wool. Peak lapels, deep central vent, and internal passport pocket.',
    specs: '✦ 100% Heavyweight Melton Wool • Cupro Satin Lining • Made in Italy',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-out-4',
    name: 'Insulated Matte Technical Puffer',
    category: 'outerwear',
    categoryName: 'Jackets & Coats',
    price: 380,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=800&auto=format&fit=crop'
    ],
    description: '700-fill responsible goose down jacket with waterproof storm zippers and detachable hood.',
    specs: '✦ 700-Fill Goose Down • Matte Ripstop Shell • Storm Zip Placket',
    sizes: ['S', 'M', 'L', 'XL']
  },

  // --- ACCESSORIES & LEATHER ---
  {
    id: 'ns-acc-1',
    name: 'Full-Grain Leather Weekender Duffle',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 380,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Generous 45L travel duffle crafted from vegetable-tanned full-grain leather with solid brass hardware.',
    specs: '✦ 100% Vegetable-Tanned Italian Leather • Solid Brass Hardware • YKK Excella Zips',
    sizes: ['One Size']
  },
  {
    id: 'ns-acc-2',
    name: 'Monogram Engraved Cardholder',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 85,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Slimline 4-slot cardholder in pebble grain calfskin with central note compartment and gold foil stamp.',
    specs: '✦ Pebble Grain Calfskin • RFID Shielding • Hand-painted Edges',
    sizes: ['One Size']
  },
  {
    id: 'ns-acc-3',
    name: 'Cuban Link Chain with NS Emblem',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 190,
    tag: 'Limited Edition',
    imageFront: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop'
    ],
    description: '8mm custom diamond-cut curb chain finished in 18k champagne gold plating with custom clasp lock.',
    specs: '✦ 316L Stainless Steel Base • 18K Champagne Gold Dip • Micro-etched Clasp',
    sizes: ['50cm', '55cm']
  },
  {
    id: 'ns-acc-4',
    name: 'Structured Atelier Cotton Twill Cap',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 65,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop'
    ],
    description: '6-panel structured cap in heavy Japanese cotton twill with antique brass buckle and 3D embroidered NS emblem.',
    specs: '✦ 100% Japanese Cotton Twill • Antique Brass Buckle Closure',
    sizes: ['Adjustable']
  }
];

const DEPT_TITLES = {
  all: { headline: 'Inaugural Collection', subtitle: 'Elevated footwear, heavyweight loopback cottons, and architectural tailoring.' },
  shoes: { headline: 'Footwear & Sneakers', subtitle: 'Handcrafted Italian leather sneakers, chunky Vibram runners, and Goodyear welted boots.' },
  tops: { headline: 'Hoodies & Tops', subtitle: '520 GSM loopback French terry, cashmere-blend knits, and boxy monogram tees.' },
  bottoms: { headline: 'Pants & Denim', subtitle: 'Japanese selvedge raw denim, pleated virgin wool trousers, and modular cargo pants.' },
  outerwear: { headline: 'Jackets & Coats', subtitle: 'Storm-resistant trenches, technical cropped bombers, and Melton wool overcoats.' },
  accessories: { headline: 'Accessories & Leather', subtitle: 'Vegetable-tanned leather duffles, pebble grain cardholders, and 18k gold jewelry.' }
};

// Global Store State
let currentDept = 'all';
let currentQuickTag = 'all';
let currentSort = 'featured';
let currentMaxPrice = 600;
let currentSize = 'all';
let searchQuery = '';
let gridCols = 4;
let cart = JSON.parse(localStorage.getItem('ns_cart') || '[]');
let promoDiscount = 0;
let modalProduct = null;
let modalSelectedSize = '';

document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  updateCartBadge();
  renderCart();

  if (window.lucide) window.lucide.createIcons();
});

// Grid Renderer
function renderGrid() {
  const feed = document.getElementById('productsFeed');
  const countEl = document.getElementById('headerProductCount');
  if (!feed) return;

  let items = PRODUCTS_STORE.filter((p) => {
    // Dept match
    const deptMatch = currentDept === 'all' || p.category === currentDept;

    // Quick Tag match
    const tagMatch = currentQuickTag === 'all' || p.tag.toLowerCase().includes(currentQuickTag.toLowerCase());

    // Price match
    const priceMatch = p.price <= currentMaxPrice;

    // Size match
    const sizeMatch = currentSize === 'all' || p.sizes.includes(currentSize) || p.sizes.includes('One Size') || p.sizes.includes('Adjustable');

    // Search query match
    const queryMatch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.categoryName.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery);

    return deptMatch && tagMatch && priceMatch && sizeMatch && queryMatch;
  });

  // Sort
  if (currentSort === 'price-asc') {
    items.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    items.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name-asc') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (countEl) countEl.textContent = `${items.length} Items Available`;

  if (items.length === 0) {
    feed.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 1rem; color: var(--text-muted);">
        <i data-lucide="search-x" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--text-main);"></i>
        <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-main);">No matching pieces found</h3>
        <p style="margin-top: 0.5rem; font-size: 0.88rem;">Try clearing your search keyword, adjusting your price limit, or selecting another department.</p>
        <button class="btn btn-dark" onclick="resetFilters()" style="margin-top: 1.5rem;">Reset All Filters</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  feed.innerHTML = items
    .map(
      (product) => `
    <div class="feed-product-card" data-id="${product.id}">
      <div class="card-media-box">
        <span class="card-micro-tag">${product.tag}</span>
        <img src="${product.imageFront}" alt="${product.name}" class="card-primary-img" loading="lazy">
        <img src="${product.imageBack}" alt="${product.name} back view" class="card-alt-img" loading="lazy">

        <div class="card-hover-drawer">
          <button class="quick-view-action-btn" onclick="openQuickViewModal('${product.id}')">Quick View</button>
          <div class="size-pill-selector-row">
            ${product.sizes.map((s) => `<button class="size-chip-btn" onclick="quickAdd('${product.id}', '${s}')">${s}</button>`).join('')}
          </div>
        </div>
      </div>

      <div class="card-content-pane">
        <span class="card-category-label">${product.categoryName}</span>
        <h4 class="card-title-text" onclick="openQuickViewModal('${product.id}')">${product.name}</h4>
        
        <div class="card-price-bottom">
          <span class="card-price-val">$${product.price}.00</span>
          <span class="card-stock-dot">● In Stock</span>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

// Department Selector
function selectDepartment(dept, btnEl) {
  currentDept = dept;

  // Sync nav pills
  document.querySelectorAll('.nav-dept-btn, .mob-dept-pill').forEach((btn) => {
    if (btn.dataset.dept === dept) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  // Sync drawer radio
  const radio = document.querySelector(`input[name="drawer_dept"][value="${dept}"]`);
  if (radio) radio.checked = true;

  // Sync editorial headline & subtitle
  const info = DEPT_TITLES[dept] || DEPT_TITLES.all;
  document.getElementById('sectionHeadline').textContent = info.headline;
  document.getElementById('sectionSubtitle').textContent = info.subtitle;

  renderGrid();
}

function handleDrawerDeptChange(dept) {
  selectDepartment(dept);
}

// Quick Tags
function setQuickTag(tag, pillEl) {
  currentQuickTag = tag;
  document.querySelectorAll('.quick-pill').forEach((p) => p.classList.remove('active'));
  if (pillEl) pillEl.classList.add('active');
  renderGrid();
}

// Sorting
function handleSortChange(e) {
  currentSort = e.target.value;
  renderGrid();
}

// Grid Column Switcher
function setGridColumns(cols, btnEl) {
  gridCols = cols;
  const feed = document.getElementById('productsFeed');
  if (!feed) return;

  feed.className = `products-grid-feed cols-${cols}`;
  document.querySelectorAll('.view-toggle-btn').forEach((b) => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

// Search
function handleSearch(e) {
  searchQuery = e.target.value.trim().toLowerCase();
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = searchQuery ? 'flex' : 'none';
  renderGrid();
}

function clearLiveSearch() {
  const input = document.getElementById('liveSearchInput');
  if (input) input.value = '';
  searchQuery = '';
  document.getElementById('searchClearBtn').style.display = 'none';
  renderGrid();
}

// Filter Drawer
function openFilterDrawer() {
  document.getElementById('filterDrawer').classList.add('open');
  document.getElementById('filterBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFilterDrawer() {
  document.getElementById('filterDrawer').classList.remove('open');
  document.getElementById('filterBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function handleDrawerPrice(e) {
  currentMaxPrice = parseInt(e.target.value, 10);
  document.getElementById('drawerPriceLabel').textContent = `$${currentMaxPrice}`;
  checkActiveFilterDot();
  renderGrid();
}

function setDrawerSize(size, btnEl) {
  currentSize = size;
  document.querySelectorAll('#drawerSizePills .size-btn').forEach((b) => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  checkActiveFilterDot();
  renderGrid();
}

function checkActiveFilterDot() {
  const isFiltered = currentMaxPrice < 600 || currentSize !== 'all' || currentDept !== 'all';
  const dot = document.getElementById('filterActiveDot');
  if (dot) dot.style.display = isFiltered ? 'inline-block' : 'none';
}

function resetFilters() {
  currentDept = 'all';
  currentQuickTag = 'all';
  currentSort = 'featured';
  currentMaxPrice = 600;
  currentSize = 'all';
  searchQuery = '';

  const searchInput = document.getElementById('liveSearchInput');
  if (searchInput) searchInput.value = '';
  const priceSlider = document.getElementById('drawerPriceSlider');
  if (priceSlider) priceSlider.value = 600;
  document.getElementById('drawerPriceLabel').textContent = '$600';
  document.getElementById('sortSelect').value = 'featured';

  document.querySelectorAll('#drawerSizePills .size-btn').forEach((b, i) => {
    if (i === 0) b.classList.add('active');
    else b.classList.remove('active');
  });

  document.querySelectorAll('.quick-pill').forEach((p, i) => {
    if (i === 0) p.classList.add('active');
    else p.classList.remove('active');
  });

  selectDepartment('all');
  checkActiveFilterDot();
  closeFilterDrawer();
}

// Quick View Modal
function openQuickViewModal(productId) {
  const product = PRODUCTS_STORE.find((p) => p.id === productId);
  if (!product) return;

  modalProduct = product;
  modalSelectedSize = product.sizes[0];

  const modal = document.getElementById('quickModalCard');
  const backdrop = document.getElementById('quickViewBackdrop');
  const body = document.getElementById('quickModalBody');

  body.innerHTML = `
    <div class="modal-gallery-box">
      <img src="${product.gallery[0]}" alt="${product.name}" class="modal-hero-img" id="modalHeroImg">
      <div class="modal-thumb-strip">
        ${product.gallery
          .map(
            (img, index) => `
          <img src="${img}" alt="Thumbnail ${index + 1}" class="modal-thumb-item ${index === 0 ? 'active' : ''}" onclick="setModalHero('${img}', this)">
        `
          )
          .join('')}
      </div>
    </div>

    <div class="modal-details-pane">
      <span class="modal-dept-kicker">${product.categoryName} • ${product.tag}</span>
      <h2 class="modal-product-name">${product.name}</h2>
      <div class="modal-price-tag">$${product.price}.00 USD</div>
      <p class="modal-desc-body">${product.description}</p>

      <div class="modal-size-block">
        <div class="size-head-line">
          <span>SELECT SIZE</span>
          <span style="color: var(--gold-accent); cursor: pointer;" onclick="showToast('True to size standard tailored cut.')">Size Guide ↗</span>
        </div>
        <div class="modal-sizes-flex">
          ${product.sizes
            .map(
              (s, i) => `
            <button class="modal-size-pill ${i === 0 ? 'active' : ''}" onclick="setModalSizeOption('${s}', this)">${s}</button>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="modal-specs-box">
        <strong>Atelier Specifications:</strong><br>
        ${product.specs}
      </div>

      <button class="btn btn-dark btn-block" onclick="addModalItemToBag()">
        Add to Bag — $${product.price}.00
      </button>
    </div>
  `;

  modal.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
}

function setModalHero(src, thumbEl) {
  const imgEl = document.getElementById('modalHeroImg');
  if (imgEl) imgEl.src = src;
  document.querySelectorAll('.modal-thumb-item').forEach((t) => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function setModalSizeOption(size, pillEl) {
  modalSelectedSize = size;
  document.querySelectorAll('.modal-size-pill').forEach((p) => p.classList.remove('active'));
  if (pillEl) pillEl.classList.add('active');
}

function addModalItemToBag() {
  if (!modalProduct) return;
  addToCart(modalProduct.id, modalSelectedSize);
  closeQuickView();
  openCartDrawer();
}

function closeQuickView() {
  document.getElementById('quickModalCard').classList.remove('open');
  document.getElementById('quickViewBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// Shopping Bag Engine
function quickAdd(productId, size) {
  addToCart(productId, size);
  openCartDrawer();
}

function addToCart(productId, size) {
  const product = PRODUCTS_STORE.find((p) => p.id === productId);
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
  showToast('Item removed from bag.');
}

function saveCart() {
  localStorage.setItem('ns_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartCountBadge');
  const countText = document.getElementById('cartTotalItemsText');

  if (badge) badge.textContent = count;
  if (countText) countText.textContent = `(${count})`;
}

function renderCart() {
  const feed = document.getElementById('cartItemsFeed');
  if (!feed) return;

  if (cart.length === 0) {
    feed.innerHTML = `
      <div style="margin: auto; text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="shopping-bag" style="width: 48px; height: 48px; margin-bottom: 0.75rem; opacity: 0.3;"></i>
        <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">Your bag is empty</h4>
        <p style="font-size: 0.85rem; margin-top: 0.35rem;">Explore footwear, hoodies, pants, and jackets to add pieces.</p>
      </div>
    `;
    updatePricing(0);
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  feed.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-thumb">
      <div class="cart-meta">
        <h4 class="cart-name">${item.name}</h4>
        <span class="cart-var">Size: ${item.size} • ${item.categoryName}</span>
        <div class="cart-actions-line">
          <div class="qty-stepper">
            <button class="qty-step-btn" onclick="updateCartQty('${item.id}', '${item.size}', -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-step-btn" onclick="updateCartQty('${item.id}', '${item.size}', 1)">+</button>
          </div>
          <span class="cart-row-price">$${item.price * item.qty}.00</span>
          <button class="cart-del-btn" onclick="removeFromCart('${item.id}', '${item.size}')">Remove</button>
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
  const subtotalEl = document.getElementById('mathSubtotal');
  const discountRow = document.getElementById('mathDiscountRow');
  const discountEl = document.getElementById('mathDiscount');
  const shippingEl = document.getElementById('mathShipping');
  const totalEl = document.getElementById('mathTotal');
  const milestoneText = document.getElementById('shippingMilestoneText');
  const milestoneFill = document.getElementById('shippingMilestoneFill');

  const threshold = 150;
  const isFreeShipping = subtotal >= threshold;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : 15;

  if (milestoneFill && milestoneText) {
    if (subtotal === 0) {
      milestoneFill.style.width = '0%';
      milestoneText.textContent = `Add $${threshold} for Free Worldwide Shipping`;
    } else if (isFreeShipping) {
      milestoneFill.style.width = '100%';
      milestoneText.textContent = `✦ You've Unlocked Free Worldwide Express Shipping!`;
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min(100, (subtotal / threshold) * 100);
      milestoneFill.style.width = `${pct}%`;
      milestoneText.textContent = `Add $${remaining}.00 more for Free Worldwide Shipping`;
    }
  }

  const discountAmount = subtotal * promoDiscount;

  if (promoDiscount > 0) {
    if (discountRow) discountRow.style.display = 'flex';
    if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;
}

function applyPromo() {
  const input = document.getElementById('cartPromoInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();

  if (code === 'SITARA15' || code === 'VIP15') {
    promoDiscount = 0.15;
    showToast('Promo applied: 15% off your order!');
    renderCart();
  } else if (code === '') {
    showToast('Please enter a promo code.');
  } else {
    showToast('Invalid promo code. Try SITARA15');
  }
}

function openCartDrawer() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function triggerCheckout(method) {
  if (cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  if (method === 'whatsapp') {
    const orderItems = cart.map((i) => `• ${i.name} (Size: ${i.size}, Qty: ${i.qty}) - $${i.price * i.qty}`).join('%0A');
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const text = `Hello New Sitara Concierge! I would like to place an order:%0A%0A${orderItems}%0A%0AEstimated Total: $${subtotal}.00 USD%0APlease provide delivery and payment details.`;

    window.open(`https://wa.me/?text=${text}`, '_blank');
    showToast('Opening WhatsApp with your order...');
  } else {
    showToast('🔒 Initiating 256-bit encrypted checkout...');
    setTimeout(() => {
      alert('New Sitara Checkout Gateway:\n\nThank you for choosing New Sitara Interprizes.\nYour multi-department order is ready to process with Stripe & Cards!');
    }, 800);
  }
}

function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById('newsInput');
  if (input && input.value) {
    showToast('Welcome to the New Sitara Inner Circle. Check your inbox!');
    input.value = '';
  }
  return false;
}

function toggleMobileMenu() {
  openFilterDrawer();
}

function showToast(message) {
  const hub = document.getElementById('toastHub');
  if (!hub) return;

  const toast = document.createElement('div');
  toast.className = 'toast-bubble';
  toast.innerHTML = `<span>✦</span> <span>${message}</span>`;
  hub.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
