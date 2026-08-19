// ==========================================================================
// SITARA ATELIER — HIGH-END LUXURY CONSOLE LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLuxuryConsole();
  initProgressIncrement();
  updateYear();
});

const flagshipTasks = [
  "INITIALIZING FLAGSHIP STOREFRONT",
  "CURATING READY-TO-WEAR ARCHIVES",
  "SYNCHRONIZING PRIVATE SALON PROTOCOLS",
  "CALIBRATING HAUTE COUTURE SHOWROOM",
  "FINALIZING INAUGURAL RUNWAY LOOKS",
  "GLOBAL LAUNCH SEQUENCE IMMINENT"
];

function initLuxuryConsole() {
  const taskEl = document.getElementById('consoleTask');
  if (!taskEl) return;

  let index = 0;

  setInterval(() => {
    index = (index + 1) % flagshipTasks.length;
    taskEl.style.opacity = '0';

    setTimeout(() => {
      taskEl.textContent = flagshipTasks[index];
      taskEl.style.opacity = '1';
    }, 400);
  }, 4500);
}

function initProgressIncrement() {
  const barEl = document.getElementById('consoleBar');
  const percentEl = document.getElementById('consolePercent');
  if (!barEl || !percentEl) return;

  let currentVal = 88;

  setInterval(() => {
    if (currentVal < 98) {
      currentVal += 1;
    } else {
      currentVal = 97;
    }

    barEl.style.width = `${currentVal}%`;
    percentEl.textContent = `${currentVal}%`;
  }, 5000);
}

function showNotice(event, type) {
  event.preventDefault();
  showToast(`SITARA ${type.toUpperCase()} // UNVEILING AT OFFICIAL INAUGURATION`);
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
