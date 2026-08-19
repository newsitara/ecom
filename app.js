// ==========================================================================
// SITARA STUDIO — MINIMAL COMING SOON LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

function handleSubscribe(event) {
  event.preventDefault();
  const input = document.getElementById('emailInput');
  const email = input.value.trim();

  if (!email) return false;

  const submitBtn = document.getElementById('submitBtn');
  const form = document.getElementById('subscribeForm');
  const successMessage = document.getElementById('successMessage');

  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.7';

  setTimeout(() => {
    form.style.display = 'none';
    successMessage.style.display = 'flex';
    showToast('You have been added to the private access list.');
  }, 400);

  return false;
}

function showNotice(event, platform) {
  event.preventDefault();
  showToast(`Sitara ${platform} will be unveiled with the official launch.`);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
