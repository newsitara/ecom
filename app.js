// ==========================================================================
// SITARA ATELIER - UNDER CONSTRUCTION INTERACTION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundStars();
  initCountdown();
  initClickParticles();
  initMascotInteraction();
  updateCurrentYear();
});

// 1. Generate Floating Ambient Stars in Background
function initBackgroundStars() {
  const container = document.getElementById('bgStars');
  if (!container) return;

  const starChars = ['✦', '✧', '★', '⋆', '•'];
  const starCount = 28;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'bg-star';
    star.textContent = starChars[Math.floor(Math.random() * starChars.length)];
    
    // Randomize initial positions & animation timings
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${8 + Math.random() * 12}s`;
    star.style.animationDelay = `-${Math.random() * 10}s`;
    star.style.fontSize = `${10 + Math.random() * 16}px`;
    
    // Vary colors subtly between gold, terracotta and soft sage
    const colors = ['#E9C46A', '#D96B43', '#8A9A86', '#F4A261'];
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(star);
  }
}

// 2. Countdown Timer
function initCountdown() {
  // Set launch date to 7 days, 14 hours from current moment
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  targetDate.setHours(targetDate.getHours() + 14);
  targetDate.setMinutes(targetDate.getMinutes() + 32);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (num) => String(num).padStart(2, '0');

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minsEl) minsEl.textContent = pad(minutes);
    if (secsEl) secsEl.textContent = pad(seconds);
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// 3. Interactive Sparkle Particles on Click
function initClickParticles() {
  const sparkSymbols = ['✦', '✧', '★', '✨', '💛', '🌸'];

  window.addEventListener('click', (e) => {
    // Avoid triggering if clicking on inputs or buttons directly to keep UI clean
    const tagName = e.target.tagName.toLowerCase();
    if (tagName === 'input' || tagName === 'button') return;

    createSparkleBurst(e.clientX, e.clientY);
  });
}

function createSparkleBurst(x, y) {
  const sparkSymbols = ['✦', '✧', '★', '✨', '•', '🏷️'];
  const colors = ['#D96B43', '#E9C46A', '#8A9A86', '#E76F51', '#211B18'];
  const count = 7;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('span');
    particle.className = 'click-particle';
    particle.textContent = sparkSymbols[Math.floor(Math.random() * sparkSymbols.length)];
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.color = colors[Math.floor(Math.random() * colors.length)];

    // Random trajectory angles
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
    const distance = 40 + Math.random() * 45;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const tr = (Math.random() - 0.5) * 120;

    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);
    particle.style.setProperty('--tr', `${tr}deg`);

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 900);
  }
}

// 4. Mascot Dance & Joy Click Interaction
function initMascotInteraction() {
  const container = document.getElementById('mascotContainer');
  if (!container) return;

  const compliments = [
    '✨ Sitara loves you!',
    '🎁 Packing your parcel with joy!',
    '🧵 Weaving the magic right now!',
    '✦ You found the secret sparkle!',
    '🌸 15% VIP discount awaits below!'
  ];

  let compIndex = 0;

  container.addEventListener('click', (e) => {
    const figure = container.querySelector('.mascot-figure');
    const bubbleText = container.querySelector('.mascot-bubble span');

    if (figure) {
      figure.classList.remove('mascot-dance');
      // Trigger reflow to restart animation
      void figure.offsetWidth;
      figure.classList.add('mascot-dance');
    }

    if (bubbleText) {
      bubbleText.textContent = compliments[compIndex % compliments.length];
      compIndex++;
    }

    // Trigger sweet confetti burst from the mascot position
    const rect = container.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { x: originX, y: originY },
        colors: ['#D96B43', '#E9C46A', '#8A9A86', '#F4A261', '#FAF6F0'],
        disableForReducedMotion: true
      });
    }
  });
}

// 5. Handle VIP Waitlist Subscription
function handleSubscribe(event) {
  event.preventDefault();
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value.trim();

  if (!email) return false;

  const submitBtn = document.getElementById('submitBtn');
  const waitlistForm = document.getElementById('waitlistForm');
  const vipTicket = document.getElementById('vipTicket');

  // Button loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span>Joining...</span> ⏳`;

  setTimeout(() => {
    // Hide form, reveal ticket
    waitlistForm.style.display = 'none';
    vipTicket.style.display = 'block';

    // Grand Confetti Blast
    if (typeof confetti === 'function') {
      // Multiple bursts for extra celebratory feel
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D96B43', '#E9C46A', '#8A9A86', '#E76F51', '#211B18']
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#D96B43', '#E9C46A']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#8A9A86', '#F4A261']
        });
      }, 250);
    }

    showToast(`✨ VIP invitation reserved for ${email}!`);
  }, 700);

  return false;
}

// 6. Copy Discount Code
function copyDiscountCode() {
  const codeEl = document.getElementById('discountCode');
  const code = codeEl ? codeEl.textContent : 'SITARA-MAGIC15';

  navigator.clipboard.writeText(code).then(() => {
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.textContent = 'Copied! ✨';
      copyBtn.style.background = '#8A9A86';
      copyBtn.style.color = '#FFF';
      setTimeout(() => {
        copyBtn.textContent = 'Copy 📋';
        copyBtn.style.background = '';
        copyBtn.style.color = '';
      }, 2000);
    }
    showToast('🏷️ Code copied: SITARA-MAGIC15');
  }).catch(() => {
    showToast('Code: SITARA-MAGIC15');
  });
}

// 7. Toast Notification Utility
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 8. Fake Social Link Toast
function fakeSocial(event, platform) {
  event.preventDefault();
  showToast(`✦ Sitara's ${platform} is being prepped! Launching alongside store.`);
}

// 9. Update Footer Year
function updateCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
