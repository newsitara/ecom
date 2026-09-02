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
  const feedbackPane = document.getElementById('trackFeedbackPane');
  const card = document.getElementById('orderStatusCard');

  if (card) card.style.display = 'none';
  if (feedbackPane) {
    feedbackPane.innerHTML = `
      <div style="max-width:640px; margin:1.5rem auto; background:#FFFFFF; border:1px solid rgba(0,0,0,0.08); border-radius:16px; padding:2rem; box-shadow:0 4px 20px rgba(0,0,0,0.04); display:flex; flex-direction:column; gap:1.2rem;">
        <div class="skeleton" style="height:28px; width:40%; border-radius:6px;"></div>
        <div class="skeleton" style="height:18px; width:65%; border-radius:4px;"></div>
        <div class="skeleton" style="height:100px; width:100%; border-radius:12px;"></div>
      </div>
    `;
    feedbackPane.style.display = 'block';
  }

  setTimeout(() => {
    const order = DataStore.trackOrder(query);
    if (!order) {
      if (feedbackPane) {
        feedbackPane.innerHTML = `
          <div style="max-width:640px; margin:1.5rem auto; background:#FFFFFF; border:1px solid rgba(239,68,68,0.2); border-radius:16px; padding:2.5rem 1.5rem; text-align:center; box-shadow:0 4px 20px rgba(0,0,0,0.04);">
            <div style="width:48px; height:48px; border-radius:50%; background:rgba(239,68,68,0.1); color:#EF4444; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
              <i data-lucide="alert-circle" style="width:24px; height:24px;"></i>
            </div>
            <h3 style="font-size:1.15rem; font-weight:800; color:#111827; margin-bottom:0.4rem;">Shipment Not Found</h3>
            <p style="font-size:0.88rem; color:#6B7280; line-height:1.6; max-width:460px; margin:0 auto;">
              No active order found for <strong style="color:#111827;">"${query}"</strong>. Please double-check your Tracking ID (e.g. <code>NS-TRK-XXXXX</code>) or the email address used during checkout.
            </p>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
      return;
    }

    currentTrackedOrder = order;
    if (feedbackPane) feedbackPane.style.display = 'none';
    if (card) {
      card.style.display = 'block';
      renderOrderStatus(order);
    }
  }, 250);
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
  document.getElementById('resPayMethod').textContent = order.paymentMethod || 'Credit / Debit Card (Visa, Mastercard)';
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
  const subject = currentTrackedOrder ? `Order Inquiry: ${currentTrackedOrder.trackingId}` : 'New Sitara Client Support';
  window.location.href = `mailto:concierge@newsitara.com?subject=${encodeURIComponent(subject)}`;
}
