// ==========================================================================
// SITARA BOUTIQUE — DYNAMIC LOADING SCREEN LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initMessageTicker();
  initProgressSimulation();
  initCenterpieceClick();
  updateFooterYear();
});

// 1. Dynamic Status Message Ticker
const messages = [
  "Weaving exclusive silhouettes...",
  "Curating artisanal fabrics & textures...",
  "Stitching custom boutique tags...",
  "Polishing digital storefront & displays...",
  "Wrapping inaugural gift parcels...",
  "Opening the doors very soon ✨"
];

function initMessageTicker() {
  const tickerEl = document.getElementById('tickerMsg');
  if (!tickerEl) return;

  let index = 0;

  setInterval(() => {
    index = (index + 1) % messages.length;
    tickerEl.style.opacity = '0';
    tickerEl.style.transform = 'translateY(4px)';

    setTimeout(() => {
      tickerEl.textContent = messages[index];
      tickerEl.style.opacity = '1';
      tickerEl.style.transform = 'translateY(0)';
    }, 300);
  }, 3500);
}

// 2. Realistic Dynamic Progress Counter
function initProgressSimulation() {
  const progressBar = document.getElementById('progressBar');
  const percentEl = document.getElementById('progressPercent');
  if (!progressBar || !percentEl) return;

  let currentPercent = 82;

  setInterval(() => {
    if (currentPercent < 98) {
      // Random gentle step increments
      currentPercent += Math.floor(Math.random() * 2) + 1;
      if (currentPercent > 98) currentPercent = 98;
    } else {
      // Small breathe effect between 96-98%
      currentPercent = 96 + Math.floor(Math.random() * 3);
    }

    progressBar.style.width = `${currentPercent}%`;
    percentEl.textContent = `${currentPercent}%`;
  }, 4000);
}

// 3. Interactive Sparkle Particle Canvas
let particles = [];
let canvas, ctx;

function initParticleCanvas() {
  canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  ctx = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Trigger sparkles on click
  window.addEventListener('click', (e) => {
    spawnSparkles(e.clientX, e.clientY, 12);
  });

  // Gentle ambient loop
  requestAnimationFrame(renderParticles);
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function spawnSparkles(x, y, count = 10) {
  const colors = ['#E9C46A', '#D96B43', '#8A9A86', '#201B18', '#FAF6F0'];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.5 + Math.random() * 3.5;
    particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 2 + Math.random() * 3.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      life: 0.02 + Math.random() * 0.02,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.1
    });
  }
}

function renderParticles() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= p.life;
    p.rotation += p.rotSpeed;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    // Draw 4-point sparkle star
    ctx.fillStyle = p.color;
    ctx.beginPath();
    const s = p.size;
    ctx.moveTo(0, -s * 2);
    ctx.lineTo(s * 0.4, -s * 0.4);
    ctx.lineTo(s * 2, 0);
    ctx.lineTo(s * 0.4, s * 0.4);
    ctx.lineTo(0, s * 2);
    ctx.lineTo(-s * 0.4, s * 0.4);
    ctx.lineTo(-s * 2, 0);
    ctx.lineTo(-s * 0.4, -s * 0.4);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  requestAnimationFrame(renderParticles);
}

// 4. Centerpiece Click Interaction
function initCenterpieceClick() {
  const centerpiece = document.getElementById('centerpiece');
  if (!centerpiece) return;

  centerpiece.addEventListener('click', (e) => {
    const rect = centerpiece.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    spawnSparkles(cx, cy, 24);
    showToastText('✦ Sitara Atelier is crafting magic!');
  });
}

// 5. Toast Notifications
function showToast(event, platform) {
  event.preventDefault();
  showToastText(`✦ ${platform} will be unveiled alongside store launch.`);
}

function showToastText(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

// 6. Footer Year
function updateFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
