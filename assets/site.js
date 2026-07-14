/* ═══════════════════════════════════════════════════
   MIRACLE APPS — Adaptive Scrolling Showcase Engine
   ═══════════════════════════════════════════════════ */

const nav = document.querySelector('.nav');
const reveals = [...document.querySelectorAll('.reveal')];
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

/* ─── Scrolling Adaptive Color & Active Link Observer ─── */
if (!reduceMotion && 'IntersectionObserver' in window) {
  const appSections = document.querySelectorAll('.app-section');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -40% 0px',
    threshold: 0.1
  };

  const updateActiveSection = (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const target = entry.target;
      const bg = target.getAttribute('data-bg');
      const accent = target.getAttribute('data-accent');
      const sectionId = target.getAttribute('id');

      // Update body CSS variables
      document.documentElement.style.setProperty('--bg-color', bg);
      document.documentElement.style.setProperty('--accent-muted', accent);
      document.documentElement.style.setProperty('--accent-glow', `${accent}12`);

      // Update navbar links
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // Trigger stat counter animations inside this section
      animateCounters(target);
    });
  };

  const sectionObserver = new IntersectionObserver(updateActiveSection, observerOptions);
  appSections.forEach(section => sectionObserver.observe(section));

  // Reset to default color when hero is in view
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.documentElement.style.setProperty('--bg-color', '#020205');
        document.documentElement.style.setProperty('--accent-muted', '#475569');
        document.documentElement.style.setProperty('--accent-glow', 'rgba(71, 85, 105, 0.12)');
        navLinks.forEach(link => link.classList.remove('active'));
      });
    }, {
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0.1
    });
    heroObserver.observe(heroSection);
  }
}

/* ─── Animated stat counters function ─── */
const animateCounters = (parent) => {
  const elements = parent.querySelectorAll('.hud-tile strong:not(.animated)');
  elements.forEach(el => {
    el.classList.add('animated');
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
  });
};

/* ─── Parallax scroll offset on hero ─── */
if (!reduceMotion) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
          heroSection.style.setProperty('--scroll-offset', `${scrolled * 0.15}px`);
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}
