// ==========================================================================
// NEW SITARA — ADMIN DASHBOARD CONTROLLER
// ==========================================================================

let activeAdminTab = 'overview';

document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
});

function initDashboard() {
  renderOverview();
  renderProductsTable();
  renderCategoriesGrid();
  renderOrdersTable();
  renderPromosTable();
  populateCategoryDropdowns();
  updateSidebarCounts();

  if (window.lucide) window.lucide.createIcons();
}

function switchTab(tabId) {
  activeAdminTab = tabId;

  document.querySelectorAll('.tab-pane').forEach((pane) => {
    pane.classList.remove('active');
  });

  const activePane = document.getElementById(`tab-${tabId}`);
  if (activePane) activePane.classList.add('active');

  document.querySelectorAll('.nav-item').forEach((item) => {
    if (item.dataset.tab === tabId) item.classList.add('active');
    else item.classList.remove('active');
  });

  toggleSidebar(false);

  // Refresh tab data
  if (tabId === 'overview') renderOverview();
  else if (tabId === 'products') renderProductsTable();
  else if (tabId === 'categories') renderCategoriesGrid();
  else if (tabId === 'orders') renderOrdersTable();
  else if (tabId === 'promos') renderPromosTable();

  if (window.lucide) window.lucide.createIcons();
}

function updateSidebarCounts() {
  const prods = DataStore.getProducts();
  const cats = DataStore.getCategories();
  const orders = DataStore.getOrders();

  const setT = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setT('sidebarProductCount', prods.length);
  setT('sidebarCategoryCount', cats.length);
  setT('sidebarOrderCount', orders.length);
}

function toggleSidebar(open) {
  const sidebar = document.getElementById('adminSidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (!sidebar || !backdrop) return;

  if (open) {
    sidebar.classList.add('open');
    backdrop.classList.add('open');
  } else {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

// ==========================================================================
// 1. OVERVIEW TAB
// ==========================================================================
function renderOverview() {
  const prods = DataStore.getProducts();
  const cats = DataStore.getCategories();
  const orders = DataStore.getOrders();

  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);

  const revEl = document.getElementById('kpiRevenue');
  const prodEl = document.getElementById('kpiProducts');
  const catEl = document.getElementById('kpiCategories');
  const ordEl = document.getElementById('kpiOrders');

  if (revEl) revEl.textContent = `$${totalRevenue.toLocaleString('en-US')}.00`;
  if (prodEl) prodEl.textContent = prods.length;
  if (catEl) catEl.textContent = cats.length;
  if (ordEl) ordEl.textContent = orders.length;

  // Recent Orders
  const ordersBody = document.getElementById('dashRecentOrdersTable');
  if (ordersBody) {
    const recent = orders.slice(0, 5);
    if (recent.length === 0) {
      ordersBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 2rem;">No orders yet.</td></tr>`;
    } else {
      ordersBody.innerHTML = recent
        .map(
          (o) => `
        <tr>
          <td><strong style="color: #FFF;">${o.id}</strong></td>
          <td>${o.customer}<br><span style="font-size:0.7rem; color:#666;">${o.email || ''}</span></td>
          <td>${o.date}</td>
          <td><strong>$${o.total}.00</strong></td>
          <td><span class="status-pill ${getStatusClass(o.status)}">${o.status}</span></td>
        </tr>
      `
        )
        .join('');
    }
  }

  // Category Breakdown
  const catList = document.getElementById('dashCategoryList');
  if (catList) {
    catList.innerHTML = cats
      .map((c) => {
        const count = prods.filter((p) => p.category === c.slug || p.category === c.id).length;
        return `
        <div class="cat-stat-row">
          <span>${c.name}</span>
          <span class="cat-stat-badge">${count} pieces</span>
        </div>
      `;
      })
      .join('');
  }
}

function getStatusClass(status) {
  switch (status) {
    case 'Delivered':
    case 'Completed':
      return 'status-green';
    case 'Processing':
    case 'Shipped':
      return 'status-blue';
    default:
      return 'status-yellow';
  }
}

function refreshDashboard() {
  initDashboard();
  showAdminToast('Dashboard data refreshed.');
}

// ==========================================================================
// 2. PRODUCTS MANAGER
// ==========================================================================
function populateCategoryDropdowns() {
  const cats = DataStore.getCategories();

  // Modal Category select
  const modalSelect = document.getElementById('prodCategory');
  if (modalSelect) {
    modalSelect.innerHTML = cats.map((c) => `<option value="${c.slug || c.id}">${c.name}</option>`).join('');
  }

  // Table Filter Category select
  const filterSelect = document.getElementById('productCategoryFilter');
  if (filterSelect) {
    filterSelect.innerHTML = `<option value="all">All Categories</option>` + cats.map((c) => `<option value="${c.slug || c.id}">${c.name}</option>`).join('');
  }
}

function renderProductsTable() {
  const prods = DataStore.getProducts();
  const search = (document.getElementById('productFilterInput')?.value || '').trim().toLowerCase();
  const catFilter = document.getElementById('productCategoryFilter')?.value || 'all';

  let filtered = prods.filter((p) => {
    const matchSearch =
      search === '' || p.name.toLowerCase().includes(search) || (p.tag && p.tag.toLowerCase().includes(search)) || p.categoryName.toLowerCase().includes(search);
    const matchCat = catFilter === 'all' || p.category === catFilter;
    return matchSearch && matchCat;
  });

  const tbody = document.getElementById('productsTableBody');
  if (!tbody) return;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 3rem; color: var(--admin-text-muted);">No products match your filter.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map(
      (p) => `
    <tr>
      <td>
        <img src="${p.imageFront}" alt="${p.name}" class="table-prod-img" loading="lazy">
      </td>
      <td>
        <div class="table-prod-title">${p.name}</div>
        <div class="table-prod-id">ID: ${p.id}</div>
      </td>
      <td>${p.categoryName || p.category}</td>
      <td><strong>$${p.price}.00</strong></td>
      <td><span style="font-size:0.75rem; color:#AAA;">${Array.isArray(p.sizes) ? p.sizes.join(', ') : p.sizes}</span></td>
      <td>${p.tag ? `<span class="badge-tag">${p.tag}</span>` : '—'}</td>
      <td><span class="status-pill status-green">● In Stock</span></td>
      <td>
        <div class="table-actions">
          <button class="action-btn" title="Edit Product" onclick="openEditProductModal('${p.id}')">
            <i data-lucide="pencil"></i>
          </button>
          <button class="action-btn delete-btn" title="Delete Product" onclick="confirmDeleteProduct('${p.id}')">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </td>
    </tr>
  `
    )
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function filterProductsTable() {
  renderProductsTable();
}

// Product Modal Handlers
function openNewProductModal() {
  document.getElementById('productForm').reset();
  document.getElementById('editProductId').value = '';
  document.getElementById('productModalTitle').textContent = 'Add New Apparel Piece';
  document.getElementById('btnSaveProduct').textContent = 'Save Product';
  document.getElementById('frontPreview').style.display = 'none';
  document.getElementById('backPreview').style.display = 'none';

  populateCategoryDropdowns();

  document.getElementById('productModal').classList.add('open');
  document.getElementById('productModalBackdrop').classList.add('open');
}

function openEditProductModal(productId) {
  const prods = DataStore.getProducts();
  const prod = prods.find((p) => p.id === productId);
  if (!prod) return;

  populateCategoryDropdowns();

  document.getElementById('editProductId').value = prod.id;
  document.getElementById('prodName').value = prod.name;
  document.getElementById('prodPrice').value = prod.price;
  document.getElementById('prodCategory').value = prod.category;
  document.getElementById('prodTag').value = prod.tag || '';
  document.getElementById('prodImgFront').value = prod.imageFront;
  document.getElementById('prodImgBack').value = prod.imageBack || '';
  document.getElementById('prodSizes').value = Array.isArray(prod.sizes) ? prod.sizes.join(', ') : prod.sizes;
  document.getElementById('prodSpecs').value = prod.specs || '';
  document.getElementById('prodDesc').value = prod.description || '';

  previewImage('frontPreview', prod.imageFront);
  if (prod.imageBack) previewImage('backPreview', prod.imageBack);

  document.getElementById('productModalTitle').textContent = 'Edit Product';
  document.getElementById('btnSaveProduct').textContent = 'Update Product';

  document.getElementById('productModal').classList.add('open');
  document.getElementById('productModalBackdrop').classList.add('open');
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('productModalBackdrop').classList.remove('open');
}

function handleSaveProduct(e) {
  e.preventDefault();

  const editId = document.getElementById('editProductId').value;
  const cats = DataStore.getCategories();
  const selectedCatSlug = document.getElementById('prodCategory').value;
  const catObj = cats.find((c) => (c.slug || c.id) === selectedCatSlug);

  const rawSizes = document.getElementById('prodSizes').value;
  const sizesArray = rawSizes
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const productData = {
    id: editId || undefined,
    name: document.getElementById('prodName').value.trim(),
    category: selectedCatSlug,
    categoryName: catObj ? catObj.name : selectedCatSlug,
    price: parseFloat(document.getElementById('prodPrice').value) || 0,
    tag: document.getElementById('prodTag').value.trim() || 'New Drop',
    imageFront: document.getElementById('prodImgFront').value.trim(),
    imageBack: document.getElementById('prodImgBack').value.trim() || document.getElementById('prodImgFront').value.trim(),
    sizes: sizesArray.length > 0 ? sizesArray : ['One Size'],
    specs: document.getElementById('prodSpecs').value.trim() || '✦ Tailored High-Density Garment Construction',
    description: document.getElementById('prodDesc').value.trim(),
    inStock: true
  };

  DataStore.saveProduct(productData);
  closeProductModal();
  renderProductsTable();
  renderOverview();
  updateSidebarCounts();

  showAdminToast(editId ? `Product updated: ${productData.name}` : `New product added: ${productData.name}`);
}

function confirmDeleteProduct(productId) {
  const prods = DataStore.getProducts();
  const p = prods.find((x) => x.id === productId);
  if (!p) return;

  if (confirm(`Are you sure you want to delete "${p.name}"?`)) {
    DataStore.deleteProduct(productId);
    renderProductsTable();
    renderOverview();
    updateSidebarCounts();
    showAdminToast(`Product deleted: ${p.name}`);
  }
}

// ==========================================================================
// 3. CATEGORIES MANAGER
// ==========================================================================
function renderCategoriesGrid() {
  const cats = DataStore.getCategories();
  const prods = DataStore.getProducts();
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  grid.innerHTML = cats
    .map((c) => {
      const count = prods.filter((p) => p.category === c.slug || p.category === c.id).length;
      return `
      <div class="category-admin-card">
        <div class="cat-card-media">
          <img src="${c.image}" alt="${c.name}" class="cat-card-img" loading="lazy">
          <span class="cat-card-badge">${count} Products</span>
        </div>
        <div class="cat-card-body">
          <h3 class="cat-card-title">${c.name}</h3>
          <p class="cat-card-desc">${c.description || 'No description provided.'}</p>
          <div class="cat-card-actions">
            <button class="btn btn-sm btn-outline flex-1" onclick="openEditCategoryModal('${c.id}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="confirmDeleteCategory('${c.id}')"><i data-lucide="trash-2"></i></button>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function openNewCategoryModal() {
  document.getElementById('categoryForm').reset();
  document.getElementById('editCategoryId').value = '';
  document.getElementById('categoryModalTitle').textContent = 'Add Category';
  document.getElementById('catPreview').style.display = 'none';

  document.getElementById('categoryModal').classList.add('open');
  document.getElementById('categoryModalBackdrop').classList.add('open');
}

function openEditCategoryModal(catId) {
  const cats = DataStore.getCategories();
  const cat = cats.find((c) => c.id === catId);
  if (!cat) return;

  document.getElementById('editCategoryId').value = cat.id;
  document.getElementById('catName').value = cat.name;
  document.getElementById('catDesc').value = cat.description || '';
  document.getElementById('catImage').value = cat.image;

  previewImage('catPreview', cat.image);

  document.getElementById('categoryModalTitle').textContent = 'Edit Category';
  document.getElementById('categoryModal').classList.add('open');
  document.getElementById('categoryModalBackdrop').classList.add('open');
}

function closeCategoryModal() {
  document.getElementById('categoryModal').classList.remove('open');
  document.getElementById('categoryModalBackdrop').classList.remove('open');
}

function handleSaveCategory(e) {
  e.preventDefault();

  const editId = document.getElementById('editCategoryId').value;
  const name = document.getElementById('catName').value.trim();
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const catData = {
    id: editId || slug,
    name: name,
    slug: slug,
    description: document.getElementById('catDesc').value.trim(),
    image: document.getElementById('catImage').value.trim()
  };

  DataStore.saveCategory(catData);
  closeCategoryModal();
  renderCategoriesGrid();
  populateCategoryDropdowns();
  renderOverview();
  updateSidebarCounts();

  showAdminToast(`Category saved: ${catData.name}`);
}

function confirmDeleteCategory(catId) {
  const cats = DataStore.getCategories();
  const cat = cats.find((c) => c.id === catId);
  if (!cat) return;

  if (confirm(`Delete category "${cat.name}"? Existing products in this category will remain.`)) {
    DataStore.deleteCategory(catId);
    renderCategoriesGrid();
    populateCategoryDropdowns();
    renderOverview();
    updateSidebarCounts();
    showAdminToast(`Category deleted: ${cat.name}`);
  }
}

// ==========================================================================
// 4. ORDERS HUB
// ==========================================================================
function renderOrdersTable() {
  const orders = DataStore.getOrders();
  const tbody = document.getElementById('ordersTableBody');
  if (!tbody) return;

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 3rem;">No customer orders found.</td></tr>`;
    return;
  }

  tbody.innerHTML = orders
    .map(
      (o) => `
    <tr>
      <td><strong style="color:#FFF;">${o.id}</strong></td>
      <td>
        <div style="font-weight:700; color:#FFF;">${o.customer}</div>
        <div style="font-size:0.72rem; color:#777;">${o.email || 'N/A'}</div>
      </td>
      <td>${o.date}</td>
      <td>
        <div style="font-size:0.75rem; color:#CCC;">
          ${(o.items || []).map((i) => `• ${i.name} (${i.size} × ${i.qty})`).join('<br>')}
        </div>
      </td>
      <td><span style="font-size:0.75rem; color:#AAA;">${o.paymentMethod || 'Stripe'}</span></td>
      <td><strong style="font-size:0.95rem; color:#FFF;">$${o.total}.00</strong></td>
      <td><span class="status-pill ${getStatusClass(o.status)}">${o.status}</span></td>
      <td>
        <select class="admin-select" style="padding:0.25rem 0.5rem; font-size:0.75rem;" onchange="handleOrderStatusChange('${o.id}', this.value)">
          <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
          <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
          <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
          <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>
      </td>
    </tr>
  `
    )
    .join('');
}

function handleOrderStatusChange(orderId, newStatus) {
  DataStore.updateOrderStatus(orderId, newStatus);
  renderOrdersTable();
  renderOverview();
  showAdminToast(`Order ${orderId} marked as ${newStatus}.`);
}

// ==========================================================================
// 5. PROMO CODES
// ==========================================================================
function renderPromosTable() {
  const promos = DataStore.getPromos();
  const tbody = document.getElementById('promosTableBody');
  if (!tbody) return;

  if (promos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 2rem;">No promo codes created.</td></tr>`;
    return;
  }

  tbody.innerHTML = promos
    .map(
      (p) => `
    <tr>
      <td><strong style="color: #60A5FA; letter-spacing:0.05em;">${p.code}</strong></td>
      <td><strong>${p.discount}% OFF</strong></td>
      <td><span class="status-pill ${p.active ? 'status-green' : 'status-yellow'}">${p.active ? 'Active' : 'Disabled'}</span></td>
      <td>${p.usageCount || 0} times</td>
      <td style="text-align: right;">
        <button class="action-btn delete-btn" style="display:inline-flex;" onclick="confirmDeletePromo('${p.code}')" title="Delete Promo">
          <i data-lucide="trash-2"></i>
        </button>
      </td>
    </tr>
  `
    )
    .join('');

  if (window.lucide) window.lucide.createIcons();
}

function openNewPromoModal() {
  document.getElementById('promoForm').reset();
  document.getElementById('promoModal').classList.add('open');
  document.getElementById('promoModalBackdrop').classList.add('open');
}

function closePromoModal() {
  document.getElementById('promoModal').classList.remove('open');
  document.getElementById('promoModalBackdrop').classList.remove('open');
}

function handleSavePromo(e) {
  e.preventDefault();
  const code = document.getElementById('promoCode').value.trim().toUpperCase();
  const discount = parseInt(document.getElementById('promoDiscount').value) || 10;

  DataStore.savePromo({ code, discount, active: true, usageCount: 0 });
  closePromoModal();
  renderPromosTable();
  showAdminToast(`Promo code created: ${code} (${discount}% OFF)`);
}

function confirmDeletePromo(code) {
  if (confirm(`Delete promo code "${code}"?`)) {
    DataStore.deletePromo(code);
    renderPromosTable();
    showAdminToast(`Promo code deleted: ${code}`);
  }
}

// ==========================================================================
// 6. SETTINGS & UTILITIES
// ==========================================================================
function confirmResetDefaults() {
  if (confirm('Reset entire catalog to default sample pieces? Any custom pieces created will be overwritten.')) {
    DataStore.resetAllDefaults();
    initDashboard();
    showAdminToast('Catalog reset to full default collection!');
  }
}

function exportDataJson() {
  const backup = {
    categories: DataStore.getCategories(),
    products: DataStore.getProducts(),
    orders: DataStore.getOrders(),
    promos: DataStore.getPromos(),
    exportedAt: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `newsitara-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showAdminToast('Backup JSON file downloaded.');
}

function handleGlobalSearch(e) {
  const query = e.target.value.trim().toLowerCase();
  if (query === '') return;

  // Jump to products tab and filter
  if (activeAdminTab !== 'products') {
    switchTab('products');
  }
  const prodFilter = document.getElementById('productFilterInput');
  if (prodFilter) {
    prodFilter.value = query;
    filterProductsTable();
  }
}

function previewImage(containerId, url) {
  const box = document.getElementById(containerId);
  if (!box) return;

  if (url && url.startsWith('http')) {
    box.style.backgroundImage = `url('${url}')`;
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
}

function showAdminToast(msg) {
  const hub = document.getElementById('adminToastHub');
  if (!hub) return;

  const t = document.createElement('div');
  t.className = 'admin-toast';
  t.innerHTML = `<span>✦</span> <span>${msg}</span>`;
  hub.appendChild(t);

  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(8px)';
    setTimeout(() => t.remove(), 250);
  }, 3000);
}
