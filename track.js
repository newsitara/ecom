// ==========================================================================
// NEW SITARA — ORDER TRACKING CONTROLLER
// ==========================================================================

let currentTrackedOrder = null;

document.addEventListener('DOMContentLoaded', () => {
  initTrackingPage();
});

function initTrackingPage() {
  if (window.lucide) window.lucide.createIcons();

  // Auto-search from URL param e.g. /track?id=NS-TRK-84920
  const urlParams = new URLSearchParams(window.location.search);
  const trackIdParam = urlParams.get('id') || urlParams.get('tracking') || urlParams.get('order');

  if (trackIdParam) {
    const input = document.getElementById('trackInput');
    if (input) input.value = trackIdParam;
    performTrackLookup(trackIdParam);
  }
}

function handleTrackSearch(e) {
  e.preventDefault();
  const query = document.getElementById('trackInput').value.trim();
  if (!query) return;
  performTrackLookup(query);
}

function performTrackLookup(query) {
  const order = DataStore.trackOrder(query);

  const zeroHint = document.getElementById('trackZeroHint');
  const card = document.getElementById('orderStatusCard');

  if (!order) {
    if (zeroHint) {
      zeroHint.style.display = 'block';
      zeroHint.innerHTML = `
        <div class="hint-icon" style="color: #EF4444;"><i data-lucide="alert-circle"></i></div>
        <h3 style="color: #EF4444;">Shipment Not Found</h3>
        <p>No active order found for <code>${query}</code>. Please double-check your Tracking ID (e.g. <code>NS-TRK-XXXXX</code>) or the email address used at checkout.</p>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
    if (card) card.style.display = 'none';
    return;
  }

  currentTrackedOrder = order;

  if (zeroHint) zeroHint.style.display = 'none';
  if (card) {
    card.style.display = 'block';
    renderOrderStatus(order);
  }
}

function renderOrderStatus(order) {
  // Header details
  document.getElementById('resTrackingId').textContent = order.trackingId || order.id;
  document.getElementById('resOrderDate').textContent = `Placed on ${order.date || 'Aug 22, 2026'} at ${order.time || '12:00 PM'}`;
  
  const statusBadge = document.getElementById('resStatusBadge');
  const courierPill = document.getElementById('resCourierPill');

  if (statusBadge) {
    statusBadge.textContent = order.status;
    if (order.status === 'Delivered') {
      statusBadge.className = 'live-status-pill status-green';
    } else {
      statusBadge.className = 'live-status-pill';
    }
  }

  if (courierPill) {
    courierPill.textContent = `${order.courier?.name || 'DHL Express'} • Ref: ${order.courier?.trackingRef || order.id}`;
  }

  // Update Stepper Timeline
  updateStepper(order.status, order.courier);

  // Render Garment Items List
  const itemsContainer = document.getElementById('resItemsList');
  if (itemsContainer) {
    itemsContainer.innerHTML = (order.items || [])
      .map(
        (item) => `
      <div class="order-item-card">
        <img src="${item.image || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop'}" alt="${item.name}" class="order-item-img">
        <div class="order-item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-meta">Size: <strong>${item.size}</strong> • Qty: ${item.qty}</div>
        </div>
        <div class="item-price-tag">${DataStore.formatPrice(item.price * item.qty)}</div>
      </div>
    `
      )
      .join('');
  }

  // Render Address Box
  const addrBox = document.getElementById('resAddressBox');
  if (addrBox) {
    const c = order.customer || {};
    addrBox.innerHTML = `
      <strong>${c.fullName || 'VIP Client'}</strong><br>
      ${c.street || 'Address on file'}${c.apartment ? ', ' + c.apartment : ''}<br>
      ${c.city ? c.city + ', ' : ''}${c.state ? c.state + ' ' : ''}${c.postalCode || ''}<br>
      ${c.country || 'United States'}<br>
      <span style="font-size:0.75rem; color:#888;">Phone: ${c.phone || 'N/A'} • Email: ${c.email || 'N/A'}</span>
    `;
  }

  // Render Financials
  document.getElementById('resPayMethod').textContent = order.paymentMethod || 'Stripe Card';
  document.getElementById('resShipMethod').textContent = order.shipping === 0 ? 'Complimentary Express (Free)' : `${DataStore.formatPrice(order.shipping)} Express`;
  document.getElementById('resGrandTotal').textContent = DataStore.formatPrice(order.total, true);

  if (window.lucide) window.lucide.createIcons();
}

function updateStepper(status, courier) {
  const fill = document.getElementById('stepperFillBar');
  const n1 = document.getElementById('stepNode1');
  const n2 = document.getElementById('stepNode2');
  const n3 = document.getElementById('stepNode3');
  const n4 = document.getElementById('stepNode4');

  // Reset
  [n1, n2, n3, n4].forEach((n) => {
    if (n) n.className = 'step-node';
  });

  const step3Courier = document.getElementById('step3Courier');
  if (step3Courier && courier?.name) {
    step3Courier.textContent = courier.name.split(' ')[0] + ' In Transit';
  }

  if (status === 'Pending' || status === 'Processing') {
    if (fill) fill.style.width = '33%';
    if (n1) n1.className = 'step-node completed';
    if (n2) n2.className = 'step-node active';
  } else if (status === 'Shipped' || status === 'In Transit') {
    if (fill) fill.style.width = '66%';
    if (n1) n1.className = 'step-node completed';
    if (n2) n2.className = 'step-node completed';
    if (n3) n3.className = 'step-node active';
  } else if (status === 'Delivered') {
    if (fill) fill.style.width = '100%';
    if (n1) n1.className = 'step-node completed';
    if (n2) n2.className = 'step-node completed';
    if (n3) n3.className = 'step-node completed';
    if (n4) n4.className = 'step-node completed';
  } else {
    // Default fallback
    if (fill) fill.style.width = '33%';
    if (n1) n1.className = 'step-node completed';
    if (n2) n2.className = 'step-node active';
  }
}

function contactConcierge() {
  if (!currentTrackedOrder) {
    window.open('https://wa.me/?text=Hello%20New%20Sitara%20Concierge,%20I%20need%20assistance%20with%20an%20order.', '_blank');
    return;
  }

  const msg = `Hello New Sitara Concierge! I am inquiring about my Order: ${currentTrackedOrder.trackingId} (Customer: ${currentTrackedOrder.customer?.fullName || 'Client'}).`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}
