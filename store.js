// ==========================================================================
// NEW SITARA INTERPRIZES — HIGH-FASHION MAISON CATALOG ENGINE
// ==========================================================================

const MAISON_CATALOG = [
  // --- FOOTWEAR & SNEAKERS ---
  {
    id: 'ns-shoe-1',
    name: 'Atelier Minimal Low-Top Sneaker',
    category: 'shoes',
    categoryName: 'Footwear & Sneakers',
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
    categoryName: 'Footwear & Sneakers',
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
    categoryName: 'Footwear & Sneakers',
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
    categoryName: 'Footwear & Sneakers',
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
    categoryName: 'Hoodies & Knits',
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
    categoryName: 'Hoodies & Knits',
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
    categoryName: 'Hoodies & Knits',
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
    categoryName: 'Hoodies & Knits',
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
    categoryName: 'Hoodies & Knits',
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
    categoryName: 'Leather & Goods',
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
    categoryName: 'Leather & Goods',
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
    categoryName: 'Leather & Goods',
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
    categoryName: 'Leather & Goods',
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

// App State
let activeDept = 'all';
let activeTag = 'all';
let activeSort = 'featured';
let searchKeyword = '';
let cartItems = JSON.parse(localStorage.getItem('ns_cart') || '[]');
let promoPercent = 0;
let modalProduct = null;
let modalSize = '';

document.addEventListener('DOMContentLoaded', () => {
  renderMaisonGrid();
  updatePillCounts();
  updateCartBadge();
  renderCartFeed();

  if (window.lucide) window.lucide.createIcons();
});

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function updatePillCounts() {
  const total = MAISON_CATALOG.length;
  const shoes = MAISON_CATALOG.filter((p) => p.category === 'shoes').length;
  const tops = MAISON_CATALOG.filter((p) => p.category === 'tops').length;
  const bottoms = MAISON_CATALOG.filter((p) => p.category === 'bottoms').length;
  const outerwear = MAISON_CATALOG.filter((p) => p.category === 'outerwear').length;
  const accessories = MAISON_CATALOG.filter((p) => p.category === 'accessories').length;

  document.getElementById('countAll').textContent = total;
  document.getElementById('countShoes').textContent = shoes;
  document.getElementById('countTops').textContent = tops;
  document.getElementById('countBottoms').textContent = bottoms;
  document.getElementById('countOuterwear').textContent = outerwear;
  document.getElementById('countAccessories').textContent = accessories;
}

function renderMaisonGrid() {
  const grid = document.getElementById('maisonGrid');
  if (!grid) return;

  let items = MAISON_CATALOG.filter((p) => {
    const deptMatch = activeDept === 'all' || p.category === activeDept;
    const tagMatch = activeTag === 'all' || p.tag.toLowerCase().includes(activeTag.toLowerCase());
    const searchMatch =
      searchKeyword === '' ||
      p.name.toLowerCase().includes(searchKeyword) ||
      p.categoryName.toLowerCase().includes(searchKeyword) ||
      p.description.toLowerCase().includes(searchKeyword);

    return deptMatch && tagMatch && searchMatch;
  });

  // Sorting
  if (activeSort === 'price-asc') {
    items.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    items.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'name-asc') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 6rem 1rem; color: var(--slate);">
        <i data-lucide="sparkles" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--gold-accent);"></i>
        <h3 style="font-family: var(--font-serif); font-size: 2rem; color: var(--noir);">No matching pieces in this view</h3>
        <p style="margin-top: 0.5rem; font-size: 0.9rem;">Try clearing your search term or selecting another department.</p>
        <button class="btn btn-black" onclick="filterByDept('all')" style="margin-top: 1.5rem; border-radius: 999px;">View All Pieces</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  grid.innerHTML = items
    .map(
      (p) => `
    <div class="maison-card" data-id="${p.id}">
      <div class="card-media">
        <span class="card-tag-pill">${p.tag}</span>
        <img src="${p.imageFront}" alt="${p.name}" class="card-img-front" loading="lazy">
        <img src="${p.imageBack}" alt="${p.name} alternate view" class="card-img-back" loading="lazy">

        <div class="card-hover-actions">
          <button class="btn-quick-view" onclick="openProductModal('${p.id}')">Quick View</button>
          <div class="card-size-strip">
            ${p.sizes.map((s) => `<button class="size-add-btn" onclick="quickAddToBag('${p.id}', '${s}')">${s}</button>`).join('')}
          </div>
        </div>
      </div>

      <div class="card-info">
        <span class="card-cat">${p.categoryName}</span>
        <h4 class="card-title" onclick="openProductModal('${p.id}')">${p.name}</h4>
        
        <div class="card-bottom-row">
          <span class="card-price">$${p.price}.00</span>
          <span class="card-stock">● Available</span>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function filterByDept(dept, btnEl) {
  activeDept = dept;

  // Sync pill active state
  document.querySelectorAll('.dept-pill').forEach((pill) => {
    if (pill.dataset.dept === dept) pill.classList.add('active');
    else pill.classList.remove('active');
  });

  renderMaisonGrid();
  scrollToSection('catalogSection');
}

function handleTagFilter(e) {
  activeTag = e.target.value;
  renderMaisonGrid();
}

function handleSort(e) {
  activeSort = e.target.value;
  renderMaisonGrid();
}

function setGridColumns(cols, btnEl) {
  const grid = document.getElementById('maisonGrid');
  if (!grid) return;

  grid.className = `maison-product-grid grid-${cols}`;
  document.querySelectorAll('.view-btn').forEach((b) => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

function handleSearch(e) {
  searchKeyword = e.target.value.trim().toLowerCase();
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = searchKeyword ? 'flex' : 'none';
  renderMaisonGrid();
}

function clearSearch() {
  const input = document.getElementById('liveSearchInput');
  if (input) input.value = '';
  searchKeyword = '';
  document.getElementById('searchClearBtn').style.display = 'none';
  renderMaisonGrid();
}

// Quick View Modal
function openProductModal(productId) {
  const product = MAISON_CATALOG.find((p) => p.id === productId);
  if (!product) return;

  modalProduct = product;
  modalSize = product.sizes[0];

  const modal = document.getElementById('productModal');
  const backdrop = document.getElementById('modalBackdrop');
  const body = document.getElementById('modalSplitBody');

  body.innerHTML = `
    <div class="modal-gallery-pane">
      <img src="${product.gallery[0]}" alt="${product.name}" class="modal-featured-img" id="modalFeaturedImg">
      <div class="modal-thumbs-row">
        ${product.gallery
          .map(
            (img, index) => `
          <img src="${img}" alt="Thumb" class="modal-thumb-btn ${index === 0 ? 'active' : ''}" onclick="setModalMainImg('${img}', this)">
        `
          )
          .join('')}
      </div>
    </div>

    <div class="modal-info-pane">
      <span class="modal-tag-label">${product.categoryName} • ${product.tag}</span>
      <h2 class="modal-product-title">${product.name}</h2>
      <div class="modal-price-val">$${product.price}.00 USD</div>
      <p class="modal-desc-text">${product.description}</p>

      <div class="modal-sizes-group">
        <div class="size-header">
          <span>SELECT SIZE</span>
          <span style="color: var(--gold-accent); cursor: pointer;" onclick="showToast('True to tailored streetwear proportions.')">Size Guide ↗</span>
        </div>
        <div class="modal-sizes-row">
          ${product.sizes
            .map(
              (s, i) => `
            <button class="modal-size-chip ${i === 0 ? 'active' : ''}" onclick="setModalSize('${s}', this)">${s}</button>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="modal-craft-box">
        <strong>Atelier Specifications:</strong><br>
        ${product.specs}
      </div>

      <button class="btn btn-black btn-block" onclick="addModalItemToCart()">
        Add to Shopping Bag — $${product.price}.00
      </button>
    </div>
  `;

  modal.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) window.lucide.createIcons();
}

function setModalMainImg(src, thumbEl) {
  const img = document.getElementById('modalFeaturedImg');
  if (img) img.src = src;
  document.querySelectorAll('.modal-thumb-btn').forEach((t) => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function setModalSize(size, chipEl) {
  modalSize = size;
  document.querySelectorAll('.modal-size-chip').forEach((c) => c.classList.remove('active'));
  if (chipEl) chipEl.classList.add('active');
}

function addModalItemToCart() {
  if (!modalProduct) return;
  addToBag(modalProduct.id, modalSize);
  closeModal();
  toggleCartDrawer(true);
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// Shopping Bag Engine
function quickAddToBag(productId, size) {
  addToBag(productId, size);
  toggleCartDrawer(true);
}

function addToBag(productId, size) {
  const product = MAISON_CATALOG.find((p) => p.id === productId);
  if (!product) return;

  const existing = cartItems.find((i) => i.id === productId && i.size === size);

  if (existing) {
    existing.qty += 1;
  } else {
    cartItems.push({
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
  renderCartFeed();
  updateCartBadge();
  showToast(`Added ${product.name} (${size}) to your bag.`);
}

function updateItemQty(productId, size, delta) {
  const index = cartItems.findIndex((i) => i.id === productId && i.size === size);
  if (index === -1) return;

  cartItems[index].qty += delta;

  if (cartItems[index].qty <= 0) {
    cartItems.splice(index, 1);
  }

  saveCart();
  renderCartFeed();
  updateCartBadge();
}

function removeItem(productId, size) {
  cartItems = cartItems.filter((i) => !(i.id === productId && i.size === size));
  saveCart();
  renderCartFeed();
  updateCartBadge();
  showToast('Item removed from bag.');
}

function saveCart() {
  localStorage.setItem('ns_cart', JSON.stringify(cartItems));
}

function updateCartBadge() {
  const count = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartCountBadge');
  const countTxt = document.getElementById('cartItemBadgeCount');

  if (badge) badge.textContent = count;
  if (countTxt) countTxt.textContent = `(${count})`;
}

function renderCartFeed() {
  const feed = document.getElementById('cartItemsFeed');
  if (!feed) return;

  if (cartItems.length === 0) {
    feed.innerHTML = `
      <div style="margin: auto; text-align: center; color: var(--slate); padding: 4rem 1rem;">
        <i data-lucide="shopping-bag" style="width: 48px; height: 48px; margin-bottom: 0.75rem; opacity: 0.25;"></i>
        <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--noir);">Your bag is currently empty</h4>
        <p style="font-size: 0.85rem; margin-top: 0.35rem;">Explore footwear, hoodies, pants, and jackets to add pieces.</p>
      </div>
    `;
    updateCheckoutPricing(0);
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  feed.innerHTML = cartItems
    .map(
      (item) => `
    <div class="cart-row">
      <img src="${item.image}" alt="${item.name}" class="cart-row-img">
      <div class="cart-row-info">
        <h4 class="cart-row-title">${item.name}</h4>
        <span class="cart-row-spec">Size: ${item.size} • ${item.categoryName}</span>
        <div class="cart-row-bottom">
          <div class="qty-control-box">
            <button class="qty-btn" onclick="updateItemQty('${item.id}', '${item.size}', -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateItemQty('${item.id}', '${item.size}', 1)">+</button>
          </div>
          <span class="cart-row-price-tag">$${item.price * item.qty}.00</span>
          <button class="cart-remove-link" onclick="removeItem('${item.id}', '${item.size}')">Remove</button>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  updateCheckoutPricing(subtotal);

  if (window.lucide) window.lucide.createIcons();
}

function updateCheckoutPricing(subtotal) {
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscount');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const msgEl = document.getElementById('trackerMessage');
  const barEl = document.getElementById('trackerProgress');

  const threshold = 150;
  const isFree = subtotal >= threshold;
  const shippingCost = subtotal === 0 ? 0 : isFree ? 0 : 15;

  if (barEl && msgEl) {
    if (subtotal === 0) {
      barEl.style.width = '0%';
      msgEl.textContent = `Add $${threshold} for Free Worldwide Shipping`;
    } else if (isFree) {
      barEl.style.width = '100%';
      msgEl.textContent = `✦ You've Unlocked Free Worldwide Express Shipping!`;
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min(100, (subtotal / threshold) * 100);
      barEl.style.width = `${pct}%`;
      msgEl.textContent = `Add $${remaining}.00 more for Free Worldwide Shipping`;
    }
  }

  const discountAmount = subtotal * promoPercent;

  if (promoPercent > 0) {
    if (discountRow) discountRow.style.display = 'flex';
    if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)} USD`;
}

function applyPromo() {
  const input = document.getElementById('promoInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();

  if (code === 'SITARA15' || code === 'VIP15') {
    promoPercent = 0.15;
    showToast('Promo applied: 15% discount on all departments!');
    renderCartFeed();
  } else if (code === '') {
    showToast('Please enter a promo code.');
  } else {
    showToast('Invalid promo code. Try SITARA15');
  }
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('maisonCart');
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

function processCheckout(method) {
  if (cartItems.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  if (method === 'whatsapp') {
    const orderText = cartItems.map((i) => `• ${i.name} (${i.size}, Qty: ${i.qty}) - $${i.price * i.qty}`).join('%0A');
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const msg = `Hello New Sitara Concierge! I want to order:%0A%0A${orderText}%0A%0ASubtotal: $${subtotal}.00 USD%0APlease arrange delivery and payment.`;

    window.open(`https://wa.me/?text=${msg}`, '_blank');
    showToast('Opening WhatsApp with your multi-item order...');
  } else {
    showToast('🔒 Initiating 256-bit encrypted checkout...');
    setTimeout(() => {
      alert('New Sitara Checkout Gateway:\n\nThank you for choosing New Sitara Interprizes.\nYour multi-department order is ready to process with Stripe & Cards!');
    }, 800);
  }
}

function handleSubscribe(e) {
  e.preventDefault();
  const input = document.getElementById('subscribeEmail');
  if (input && input.value) {
    showToast('Welcome to the New Sitara Inner Circle.');
    input.value = '';
  }
  return false;
}

function showToast(message) {
  const hub = document.getElementById('toastHub');
  if (!hub) return;

  const toast = document.createElement('div');
  toast.className = 'toast-pill';
  toast.innerHTML = `<span>✦</span> <span>${message}</span>`;
  hub.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
