/* ═══════════════════════════════════════════════════
   MIRACLE APPS — Interactive Multi-Page JS Systems
   ═══════════════════════════════════════════════════ */

const nav = document.querySelector('.nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── Scroll listener for nav shrink ─── */
const updateNav = () => {
  nav?.classList.toggle('is-scrolled', window.scrollY > 10);
};
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

/* ─── HTML5 Background Canvas Particles ─── */
const canvas = document.getElementById('particles-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  const maxParticles = 40;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = Math.random() * 0.2 - 0.1;
      this.speedY = Math.random() * 0.2 - 0.1;
      this.alpha = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = '#94a3b8';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const init = () => {
    resize();
    window.addEventListener('resize', resize, { passive: true });
    
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }
  };

  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  };

  init();
  loop();
}

/* ─── Homepage App Cards Background Hover Transition ─── */
const productCards = document.querySelectorAll('.product-card');
if (productCards.length > 0) {
  productCards.forEach(card => {
    const bg = card.getAttribute('data-bg');
    const accent = card.getAttribute('data-accent');

    card.addEventListener('mouseenter', () => {
      document.documentElement.style.setProperty('--bg-color', bg);
      document.documentElement.style.setProperty('--accent-muted', accent);
      document.documentElement.style.setProperty('--accent-glow', `${accent}12`);
    });

    card.addEventListener('mouseleave', () => {
      // Reset to default deep obsidian background
      document.documentElement.style.setProperty('--bg-color', '#020205');
      document.documentElement.style.setProperty('--accent-muted', '#64748b');
      document.documentElement.style.setProperty('--accent-glow', 'rgba(71, 85, 105, 0.12)');
    });
  });
}

/* ─── App Pages Animated Stat Counters ─── */
if (!reduceMotion && 'IntersectionObserver' in window) {
  const statTiles = document.querySelectorAll('.hud-tile strong');

  const animateCounter = (el) => {
    const text = el.textContent.trim();
    const match = text.match(/^([\d,]+)(\+?)$/);
    if (!match) return;

    const target = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2] || '';
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(target * eased);

      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    el.textContent = '0' + suffix;
    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.2
  });

  statTiles.forEach(tile => counterObserver.observe(tile));
}
