// ==========================================================================
// SITARA — UNDER CONSTRUCTION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  animateProgressBar();
  updateYear();
});

// Animate progress bar fill to 78%
function animateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  if (!progressBar) return;

  setTimeout(() => {
    progressBar.style.width = '78%';
  }, 300);
}

// Toggle Email Notify Input Drawer
function toggleNotifyModal() {
  const btn = document.getElementById('notifyBtn');
  const drawer = document.getElementById('emailDrawer');
  const input = document.getElementById('notifyEmail');

  if (!drawer || !btn) return;

  btn.style.display = 'none';
  drawer.style.display = 'block';
  if (input) input.focus();
}

function handleNotify(event) {
  event.preventDefault();
  const input = document.getElementById('notifyEmail');
  const drawer = document.getElementById('emailDrawer');
  const btn = document.getElementById('notifyBtn');

  if (!input || !input.value.trim()) return false;

  drawer.style.display = 'none';
  btn.style.display = 'block';
  btn.textContent = 'Subscribed ✓';
  btn.style.background = '#48738a';

  showToast('You will be notified once the site launches.');
  return false;
}

function fakeNotice(event, platform) {
  event.preventDefault();
  showToast(`SITARA ${platform} will be live with our launch.`);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3500);
}

function updateYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
