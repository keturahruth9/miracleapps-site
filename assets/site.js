/* ═══════════════════════════════════════════════════
   MIRACLE APPS — Enhanced Animations & Interactions
   ═══════════════════════════════════════════════════ */

const root = document.documentElement;
const nav = document.querySelector('.nav');
const reveals = [...document.querySelectorAll('.reveal')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

root.classList.add('has-js');

reveals.forEach((element, index) => {
  element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 60}ms`);
});

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -6% 0px',
    threshold: 0.06,
  });

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('visible'));
}

/* ─── Nav scroll effect ─── */

const updateNav = () => {
  nav?.classList.toggle('is-scrolled', window.scrollY > 10);
};

updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

/* ─── Active nav link ─── */

document.querySelectorAll('.nav-links a[href]').forEach((link) => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

  const target = new URL(href, window.location.href);
  if (!target.hash && target.pathname === window.location.pathname) {
    link.setAttribute('aria-current', 'page');
  }
});

/* ─── Animated stat counters ─── */

if (!reduceMotion && 'IntersectionObserver' in window) {
  const statTiles = document.querySelectorAll('.stat-tile strong');

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
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.2,
  });

  statTiles.forEach((tile) => counterObserver.observe(tile));
}

/* ─── Subtle parallax on gradient orbs ─── */

if (!reduceMotion) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const heroSection = document.querySelector('.hero, .app-hero');
        if (heroSection) {
          heroSection.style.setProperty('--scroll-offset', `${scrolled * 0.08}px`);
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}
