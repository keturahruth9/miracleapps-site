const root = document.documentElement;
const nav = document.querySelector('.nav');
const reveals = [...document.querySelectorAll('.reveal')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

root.classList.add('has-js');

reveals.forEach((element, index) => {
  element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 45}ms`);
});

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08,
  });

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('visible'));
}

const updateNav = () => {
  nav?.classList.toggle('is-scrolled', window.scrollY > 10);
};

updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

document.querySelectorAll('.nav-links a[href]').forEach((link) => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

  const target = new URL(href, window.location.href);
  if (!target.hash && target.pathname === window.location.pathname) {
    link.setAttribute('aria-current', 'page');
  }
});
