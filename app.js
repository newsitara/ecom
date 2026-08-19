// ==========================================================================
// SITARA — CINEMATIC UNDER CONSTRUCTION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initCinematicBokeh();
  initProgressTick();
  initMouseParallax();
  updateYear();
});

// 1. Organic Floating Dust & Light Bokeh Motes
function initCinematicBokeh() {
  const canvas = document.getElementById('bokehCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const motesCount = 35;
  const motes = [];

  for (let i = 0; i < motesCount; i++) {
    motes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      alpha: Math.random() * 0.35 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      pulse: Math.random() * 0.02 + 0.005
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    motes.forEach((mote) => {
      mote.x += mote.speedX;
      mote.y += mote.speedY;
      mote.alpha += Math.sin(Date.now() * mote.pulse) * 0.003;

      if (mote.y < -10) mote.y = height + 10;
      if (mote.x < -10) mote.x = width + 10;
      if (mote.x > width + 10) mote.x = -10;

      ctx.save();
      ctx.beginPath();
      ctx.arc(mote.x, mote.y, mote.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.05, Math.min(0.4, mote.alpha))})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

// 2. Smooth Numerical Progress Tick-Up Animation
function initProgressTick() {
  const progressBar = document.getElementById('progressBar');
  const percentText = document.getElementById('currentPercentText');
  if (!progressBar || !percentText) return;

  const target = 84;
  let current = 0;

  setTimeout(() => {
    progressBar.style.width = `${target}%`;

    const interval = setInterval(() => {
      current += 2;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      percentText.textContent = `${current}%`;
    }, 35);
  }, 400);
}

// 3. Subtle Mouse Parallax Depth Effect
function initMouseParallax() {
  const orb1 = document.getElementById('orb1');
  const orb2 = document.getElementById('orb2');
  const orb3 = document.getElementById('orb3');

  window.addEventListener('mousemove', (e) => {
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;

    if (orb1) orb1.style.transform = `translate(${xRatio * -30}px, ${yRatio * -30}px)`;
    if (orb2) orb2.style.transform = `translate(${xRatio * 25}px, ${yRatio * 25}px)`;
    if (orb3) orb3.style.transform = `translate(${xRatio * -15}px, ${yRatio * 15}px)`;
  });
}

// 4. Action Button & Email Drawer Logic
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
  const banner = document.getElementById('successBanner');

  if (!input || !input.value.trim()) return false;

  drawer.style.display = 'none';
  if (banner) banner.style.display = 'flex';

  showToast('You will be notified once the store launches.');
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
