// ==========================================================================
// NEW SITARA INTERPRIZES — MOBILE-FIRST MAISON CATALOG ENGINE
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
    description: 'Relaxed drop-shoulder silhouette in chalk white with rib knit hems and raglan sleeve construction.',
    specs: '✦ 480 GSM Cotton • Raglan Sleeves • Ribbed Cuffs',
    sizes: ['S', 'M', 'L', 'XL']
  },

  // --- PANTS & DENIM ---
  {
    id: 'ns-bottom-1',
    name: '14oz Okayama Selvedge Denim',
    category: 'bottoms',
    categoryName: 'Pants & Denim',
    price: 240,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Woven on vintage shuttle looms in Kojima, Japan. Red-line selvedge ID, custom copper donut buttons, and relaxed straight drape.',
    specs: '✦ 14oz Japanese Selvedge Cotton • Button Fly • Raw Indigo Finish',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: 'ns-bottom-2',
    name: 'Architectural Pleated Trouser',
    category: 'bottoms',
    categoryName: 'Pants & Denim',
    price: 210,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Double front pleats with a wide flowing leg cut from Italian virgin tropical wool blend with hidden waist adjusters.',
    specs: '✦ 60% Wool, 40% Viscose • Double Pleated • Internal Hook Closure',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: 'ns-bottom-3',
    name: 'Heavyweight Utility Cargo Trouser',
    category: 'bottoms',
    categoryName: 'Pants & Denim',
    price: 195,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Heavy cotton ripstop with gusseted dual 3D cargo pockets, reinforced articulated knee panels, and cinch hems.',
    specs: '✦ 340 GSM Cotton Ripstop • Cobra-style Buckles • Adjustable Hem Cords',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-bottom-4',
    name: 'Relaxed Tailored Lounge Pant',
    category: 'bottoms',
    categoryName: 'Pants & Denim',
    price: 155,
    tag: 'Selling Fast',
    imageFront: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Encased elastic drawstring waistband with pin-tuck center crease for casual comfort with elevated tailoring.',
    specs: '✦ Compact Interlock Cotton Knit • Metal-tipped Drawcords',
    sizes: ['S', 'M', 'L', 'XL']
  },

  // --- OUTERWEAR & JACKETS ---
  {
    id: 'ns-outer-1',
    name: 'Double-Breasted Cashmere Trench',
    category: 'outerwear',
    categoryName: 'Jackets & Coats',
    price: 490,
    tag: 'Signature Drop',
    imageFront: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Full-length architectural wool coat with horn buttons, storm flap, and removable self-tie waist belt.',
    specs: '✦ 80% Virgin Wool, 20% Cashmere • Horn Buttons • Cupro Lining',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-outer-2',
    name: 'Bomber Jacket in Matte Nappa Leather',
    category: 'outerwear',
    categoryName: 'Jackets & Coats',
    price: 450,
    tag: 'Limited Edition',
    imageFront: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Supple lambskin nappa leather bomber featuring 2-way RiRi zip closure and wool rib knit collar and cuffs.',
    specs: '✦ 100% Full-Grain Lambskin • RiRi Swiss Hardware • Satin Bemberg Interior',
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 'ns-outer-3',
    name: 'Technical Waterproof Shell Jacket',
    category: 'outerwear',
    categoryName: 'Jackets & Coats',
    price: 290,
    tag: 'New Drop',
    imageFront: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop'
    ],
    description: '3-layer laminated waterproof nylon with fully taped interior seams, magnetic storm flap, and FIDLOCK cord adjusters.',
    specs: '✦ 20,000mm Waterproof Membrane • Taped Seams • FIDLOCK Magnetic Snaps',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ns-outer-4',
    name: 'Overdyed Heavy Denim Trucker',
    category: 'outerwear',
    categoryName: 'Jackets & Coats',
    price: 220,
    tag: 'Bestseller',
    imageFront: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Boxy cropped type-3 trucker jacket in deep mineral wash with custom branded shank buttons.',
    specs: '✦ 13.5oz Cotton Denim • Branded Metal Hardware • Drop Shoulder Cut',
    sizes: ['S', 'M', 'L', 'XL']
  },

  // --- ACCESSORIES & LEATHER ---
  {
    id: 'ns-acc-1',
    name: 'Atelier Leather Weekend Duffle',
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

  const setT = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setT('countAll', total);
  setT('countShoes', shoes);
  setT('countTops', tops);
  setT('countBottoms', bottoms);
  setT('countOuterwear', outerwear);
  setT('countAccessories', accessories);

  setT('mobCountAll', total);
  setT('mobCountShoes', shoes);
  setT('mobCountTops', tops);
  setT('mobCountBottoms', bottoms);
  setT('mobCountOuterwear', outerwear);
  setT('mobCountAccessories', accessories);
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
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--slate);">
        <i data-lucide="sparkles" style="width: 44px; height: 44px; margin-bottom: 1rem; color: var(--gold-accent);"></i>
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--noir);">No matching pieces</h3>
        <p style="margin-top: 0.5rem; font-size: 0.85rem;">Try selecting another category or clearing search.</p>
        <button class="btn btn-black" onclick="filterByDept('all')" style="margin-top: 1.25rem; border-radius: 999px;">View All</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  grid.innerHTML = items
    .map(
      (p) => `
    <div class="maison-card" data-id="${p.id}">
      <div class="card-media" onclick="openProductModal('${p.id}')">
        <span class="card-tag-pill">${p.tag}</span>
        <img src="${p.imageFront}" alt="${p.name}" class="card-img-front" loading="lazy">
        <img src="${p.imageBack}" alt="${p.name} alternate view" class="card-img-back" loading="lazy">

        <!-- Mobile Tap Add -->
        <button class="card-mob-quick-add" onclick="event.stopPropagation(); openProductModal('${p.id}')" aria-label="Add ${p.name}">
          <i data-lucide="plus"></i>
        </button>

        <!-- Desktop Hover Strip -->
        <div class="card-hover-actions">
          <button class="btn-quick-view" onclick="event.stopPropagation(); openProductModal('${p.id}')">Quick View</button>
          <div class="card-size-strip">
            ${p.sizes.map((s) => `<button class="size-add-btn" onclick="event.stopPropagation(); quickAddToBag('${p.id}', '${s}')">${s}</button>`).join('')}
          </div>
        </div>
      </div>

      <div class="card-info">
        <span class="card-cat">${p.categoryName}</span>
        <h4 class="card-title" onclick="openProductModal('${p.id}')">${p.name}</h4>
        
        <div class="card-bottom-row">
          <span class="card-price">$${p.price}.00</span>
          <span class="card-stock">● In Stock</span>
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

  // Sync desktop pills
  document.querySelectorAll('.dept-pill').forEach((pill) => {
    if (pill.dataset.dept === dept) pill.classList.add('active');
    else pill.classList.remove('active');
  });

  // Sync mobile drawer links
  document.querySelectorAll('.mob-nav-link').forEach((link) => {
    link.classList.remove('active');
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

function toggleMobileGrid(cols, btnEl) {
  const grid = document.getElementById('maisonGrid');
  if (!grid) return;

  grid.className = `maison-product-grid grid-${cols}`;
  document.querySelectorAll('.view-btn').forEach((b) => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

// Mobile Nav Drawer Toggle
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

// Mobile Search Bar Toggle
function toggleMobileSearchBar(forceOpen) {
  const bar = document.getElementById('mobileSearchBar');
  if (!bar) return;

  if (forceOpen === undefined) {
    bar.classList.toggle('open');
  } else if (forceOpen) {
    bar.classList.add('open');
    const inp = document.getElementById('mobileSearchInput');
    if (inp) inp.focus();
  } else {
    bar.classList.remove('open');
  }
}

function handleMobileSearch(e) {
  searchKeyword = e.target.value.trim().toLowerCase();
  renderMaisonGrid();
  scrollToSection('catalogSection');
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
        Add to Bag — $${product.price}.00
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
  const mobTabBadge = document.getElementById('mobTabBadge');

  if (badge) badge.textContent = count;
  if (countTxt) countTxt.textContent = `(${count})`;
  if (mobTabBadge) mobTabBadge.textContent = count;
}

function renderCartFeed() {
  const feed = document.getElementById('cartItemsFeed');
  if (!feed) return;

  if (cartItems.length === 0) {
    feed.innerHTML = `
      <div style="margin: auto; text-align: center; color: var(--slate); padding: 3.5rem 1rem;">
        <i data-lucide="shopping-bag" style="width: 44px; height: 44px; margin-bottom: 0.75rem; opacity: 0.25;"></i>
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--noir);">Your bag is empty</h4>
        <p style="font-size: 0.8rem; margin-top: 0.35rem;">Discover our latest pieces across all departments.</p>
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
      msgEl.textContent = `Add $${threshold} for Free Worldwide Express`;
    } else if (isFree) {
      barEl.style.width = '100%';
      msgEl.textContent = `✦ You've Unlocked Free Worldwide Express Shipping!`;
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min(100, (subtotal / threshold) * 100);
      barEl.style.width = `${pct}%`;
      msgEl.textContent = `Add $${remaining}.00 more for Free Worldwide Express`;
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
