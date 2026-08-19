// ==========================================================================
// NEW SITARA INTERPRIZES — COMING SOON
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initOrganicBokeh();
  initSubtleProgressBar();
  initMouseParallax();
  updateYear();
});

// 1. Organic, subtle, randomly clustered background particles/stars
function initOrganicBokeh() {
  const canvas = document.getElementById('bokehCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const motesCount = 42;
  const motes = [];

  // Naturally distributed particle clusters with varying depth & soft opacity
  for (let i = 0; i < motesCount; i++) {
    motes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() > 0.85 ? Math.random() * 2 + 1 : Math.random() * 1.2 + 0.4,
      alpha: Math.random() * 0.25 + 0.05,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: -Math.random() * 0.2 - 0.05,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    motes.forEach((mote) => {
      mote.x += mote.speedX;
      mote.y += mote.speedY;
      mote.phase += mote.twinkleSpeed;

      const currentAlpha = Math.max(0.02, Math.min(0.3, mote.alpha + Math.sin(mote.phase) * 0.08));

      if (mote.y < -10) mote.y = height + 10;
      if (mote.x < -10) mote.x = width + 10;
      if (mote.x > width + 10) mote.x = -10;

      ctx.save();
      ctx.beginPath();
      ctx.arc(mote.x, mote.y, mote.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
      ctx.shadowBlur = mote.radius > 1.5 ? 6 : 2;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

// 2. Subtle Progress Bar Initialization (No percentage counters)
function initSubtleProgressBar() {
  const progressBar = document.getElementById('progressBar');
  if (!progressBar) return;

  setTimeout(() => {
    progressBar.style.width = '42%';
  }, 400);
}

// 3. Subtle Mouse Parallax Depth
function initMouseParallax() {
  const orb1 = document.getElementById('orb1');
  const orb2 = document.getElementById('orb2');
  const orb3 = document.getElementById('orb3');

  window.addEventListener('mousemove', (e) => {
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;

    if (orb1) orb1.style.transform = `translate(${xRatio * -20}px, ${yRatio * -20}px)`;
    if (orb2) orb2.style.transform = `translate(${xRatio * 18}px, ${yRatio * -18}px)`;
    if (orb3) orb3.style.transform = `translate(${xRatio * -10}px, ${yRatio * 10}px)`;
  });
}

// 4. Social Links Toast
function fakeNotice(event, platform) {
  event.preventDefault();
  showToast(`New Sitara ${platform} will be live with our launch.`);
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

// 5. Footer Year
function updateYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
