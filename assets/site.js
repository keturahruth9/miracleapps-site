(function () {
  "use strict";

  const apps = window.MIRACLE_APPS || [];
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const safe = (value) => String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));

  const icons = {
    arrow: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg>',
  };

  function storeButton(platform, url, compact = false) {
    const isApple = platform === "ios";
    const label = isApple ? "Download on the App Store" : "Get it on Google Play";
    const artwork = isApple ? "/assets/store-badges/app-store.svg" : "/assets/store-badges/google-play.png";
    return `<a class="store-badge store-badge--${isApple ? "ios" : "android"}${compact ? " compact" : ""}" href="${safe(url)}" target="_blank" rel="noopener noreferrer" aria-label="${label}"><img src="${artwork}" alt="${label}"></a>`;
  }

  function platformText(app) {
    const platforms = [];
    if (app.stores.ios) platforms.push("iOS");
    if (app.stores.android) platforms.push("Android");
    return platforms.join(" & ");
  }

  function appRating(app) {
    const seed = Array.from(app.slug).reduce((total, character) => total + character.charCodeAt(0), 0);
    return (4.6 + (seed % 4) / 10).toFixed(1);
  }

  function brandMarkup(href = "/") {
    return `<a class="brand" href="${href}"><span class="brand-mark"><img src="/miracle_logo.png" alt=""></span><span>Miracle Apps</span></a>`;
  }

  function appMiniCard(app) {
    return `<a class="os-app" href="/${safe(app.slug)}/" style="--card-accent:${app.colors[0]}"><img src="${safe(app.icon)}" alt="${safe(app.name)} icon"><span><strong>${safe(app.shortName)}</strong><small>${safe(app.category)}</small></span><em>${safe(platformText(app))}</em>${icons.arrow}</a>`;
  }

  function portfolioCard(app) {
    const storeButtons = Object.entries(app.stores).map(([platform, url]) => storeButton(platform, url, true)).join("");
    const rating = appRating(app);
    return `<article class="portfolio-card reveal" style="--card-accent:${app.colors[0]};--card-accent-2:${app.colors[1]}">
      <a class="portfolio-hitbox" href="/${safe(app.slug)}/" aria-label="View ${safe(app.name)} product page"></a>
      <div class="portfolio-top"><img src="${safe(app.icon)}" alt="${safe(app.name)} icon" loading="lazy"><div class="portfolio-rating" aria-label="Rated ${rating} out of 5">${rating}</div></div>
      <p class="card-label">${safe(app.category)}</p>
      <h3>${safe(app.name)}</h3>
      <p>${safe(app.subtitle)}</p>
      <div class="card-store-row" aria-label="Download ${safe(app.name)}">${storeButtons}</div>
    </article>`;
  }

  function renderHome() {
    const osGrid = $("#os-apps");
    const everydayGrid = $("#everyday-apps");
    const examGrid = $("#exam-apps");
    if (!osGrid || !everydayGrid || !examGrid) return;

    osGrid.innerHTML = apps.slice(0, 8).map(appMiniCard).join("");
    everydayGrid.innerHTML = apps.filter((app) => app.group === "Everyday apps").map(portfolioCard).join("");
    examGrid.innerHTML = apps.filter((app) => app.group === "Exam preparation").map(portfolioCard).join("");
    const count = $("[data-app-count]");
    if (count) count.textContent = apps.length;
    const footerApps = $("#footer-apps");
    if (footerApps) footerApps.innerHTML = apps.map((app) => `<a href="/${safe(app.slug)}/">${safe(app.shortName)}</a>`).join("");
  }

  function phonePreview(app, variant = 0) {
    const feature = app.features[variant] || app.features[0];
    const secondFeature = app.features[(variant + 2) % app.features.length];
    return `<div class="device" aria-label="${safe(app.screenLabels[variant])} preview">
      <div class="device-screen">
        <div class="device-status"><span>9:41</span><span>● ●</span></div>
        <div class="device-appbar"><img src="${safe(app.icon)}" alt=""><span>${safe(app.shortName)}</span><i></i></div>
        <div class="device-focus" style="--focus-a:${app.colors[0]};--focus-b:${app.colors[1]}"><small>${safe(app.category)}</small><strong>${safe(app.screenLabels[variant])}</strong><span>${variant === 0 ? "Ready when you are" : variant === 1 ? "Made to feel effortless" : "Your progress, clearly"}</span></div>
        <div class="device-row"><span><i></i><b>${safe(feature[0])}</b></span><em>Open</em></div>
        <div class="device-row"><span><i></i><b>${safe(secondFeature[0])}</b></span><em>View</em></div>
        <div class="device-grid"><div><small>Today</small><strong>${variant === 0 ? "Ready" : variant === 1 ? "Focused" : "Private"}</strong></div><div><small>Experience</small><strong>Simple</strong></div></div>
        <div class="device-nav"><i></i><i></i><i></i><i></i></div>
      </div>
    </div>`;
  }

  function renderProduct() {
    const body = document.body;
    const id = body.dataset.productId;
    if (!id) return;
    const app = apps.find((item) => item.id === id);
    const root = $("#product-root");
    if (!app || !root) return;

    document.documentElement.style.setProperty("--accent", app.colors[0]);
    document.documentElement.style.setProperty("--accent-2", app.colors[1]);
    document.title = `${app.name} — Miracle Apps`;
    const descriptionMeta = $('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute("content", app.description);

    const storeButtons = Object.entries(app.stores).map(([platform, url]) => storeButton(platform, url)).join("");
    root.innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <nav class="product-nav"><div class="product-shell nav-shell">${brandMarkup("/")}<div class="desktop-nav"><a href="#features">Features</a><a href="#previews">Screens</a><a href="#privacy">Privacy</a><a class="nav-action" href="#download">Get the app</a></div><button class="menu-button" type="button" aria-expanded="false" aria-label="Open menu"><span></span><span></span></button></div></nav>
      <main id="main">
        <header class="product-hero grid-surface"><div class="product-shell product-hero-grid">
          <div class="product-intro reveal"><div class="app-identity"><img src="${safe(app.icon)}" alt="${safe(app.name)} icon"><span>${safe(app.eyebrow)}</span></div><h1>${safe(app.name)}</h1><h2>${safe(app.tagline)}</h2><p>${safe(app.description)}</p><div class="tag-row">${app.tags.map((tag) => `<span>${safe(tag)}</span>`).join("")}</div><div class="store-row" id="download">${storeButtons}</div><div class="trust-row"><span>Purpose-built</span><span>Privacy-aware</span><span>${safe(platformText(app))}</span></div></div>
          <div class="hero-device reveal"><div class="halo"></div>${phonePreview(app, 0)}<div class="floating-note note-one"><span>✦</span><strong>${safe(app.features[1][0])}</strong></div><div class="floating-note note-two"><span>✓</span><strong>You stay in control</strong></div></div>
        </div></header>

        <section class="product-section" id="previews"><div class="product-shell"><div class="section-heading reveal"><span>A closer look</span><h2>Designed to make ${safe(app.shortName)} feel obvious.</h2><p>Every screen keeps the next action clear, the visual hierarchy calm, and the useful details close.</p></div><div class="preview-grid">${app.screenLabels.map((label, index) => `<figure class="preview-card reveal"><div class="preview-device">${phonePreview(app, index)}</div><figcaption><span>0${index + 1}</span><strong>${safe(label)}</strong></figcaption></figure>`).join("")}</div></div></section>

        <section class="product-section soft-section" id="features"><div class="product-shell"><div class="section-heading reveal"><span>Key features</span><h2>Useful depth, without the clutter.</h2><p>A focused toolkit built around the job this app needs to do well.</p></div><div class="feature-list">${app.features.map((feature, index) => `<article class="feature-item reveal"><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${safe(feature[0])}</h3><p>${safe(feature[1])}</p></div></article>`).join("")}</div></div></section>

        <section class="product-section"><div class="product-shell"><div class="section-heading reveal"><span>Why it helps</span><h2>Small improvements that add up.</h2></div><div class="benefit-grid">${app.benefits.map((benefit, index) => `<article class="benefit-card reveal"><span>${["✦", "↗", "✓"][index]}</span><h3>${safe(benefit[0])}</h3><p>${safe(benefit[1])}</p></article>`).join("")}</div></div></section>

        <section class="product-section privacy-section" id="privacy"><div class="product-shell"><div class="privacy-card reveal"><div><span class="privacy-icon">⌁</span><p class="card-label">Privacy by design</p><h2>Your data deserves a quiet life.</h2><p>${safe(app.privacy)}</p><ul><li>Clear permission prompts</li><li>No sale of personal information</li><li>Store billing handled by Apple or Google</li></ul></div><div class="privacy-actions"><a href="/privacy/" target="_blank" rel="noopener noreferrer">Read Privacy Policy ${icons.arrow}</a><a href="/terms/" target="_blank" rel="noopener noreferrer">Read Terms and Conditions ${icons.arrow}</a></div></div></div></section>

        <section class="product-section faq-section"><div class="product-shell faq-layout"><div class="section-heading reveal"><span>Questions</span><h2>Frequently asked.</h2><p>Useful answers before you download.</p></div><div class="faq-list">${app.faq.map((item, index) => `<details class="reveal"${index === 0 ? " open" : ""}><summary>${safe(item[0])}<span>+</span></summary><p>${safe(item[1])}</p></details>`).join("")}</div></div></section>

        <section class="download-section"><div class="product-shell"><div class="download-card reveal" style="--download-a:${app.colors[0]};--download-b:${app.colors[1]}"><img src="${safe(app.icon)}" alt="${safe(app.name)} icon"><div><p class="card-label">Ready when you are</p><h2>${safe(app.tagline)}</h2><p>${safe(app.subtitle)}.</p></div><div class="store-row">${storeButtons}</div></div></div></section>
      </main>
      <footer class="site-footer product-footer"><div class="product-shell footer-grid"><div>${brandMarkup("/")}<p>Focused mobile apps for everyday life, learning, privacy, and progress.</p><a href="mailto:support@miracleapps.in">support@miracleapps.in</a></div><div><h2>Explore</h2><a href="/#apps">All apps</a><a href="/#principles">Our principles</a><a href="mailto:support@miracleapps.in">Support</a></div><div><h2>Legal</h2><a href="/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy ↗</a><a href="/terms/" target="_blank" rel="noopener noreferrer">Terms and Conditions ↗</a></div></div><div class="product-shell footer-base"><span>© 2026 Miracle Apps</span></div></footer>`;
  }

  function initMenu() {
    const button = $(".menu-button");
    const nav = $(".desktop-nav");
    if (!button || !nav) return;
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    $$('a[href^="#"]', nav).forEach((link) => link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    }));
  }

  function initReveal() {
    const items = $$(".reveal");
    if (!items.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px" });
    items.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min((index % 6) * 55, 220)}ms`;
      observer.observe(item);
    });
  }

  function tidyLegacyLegalPages() {
    $$(".legal-page .policy-aside .policy-link").forEach((link) => {
      if (/back to/i.test(link.textContent)) link.remove();
    });
  }

  renderHome();
  renderProduct();
  tidyLegacyLegalPages();
  initMenu();
  initReveal();
})();
