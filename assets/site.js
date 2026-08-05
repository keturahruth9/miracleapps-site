(function () {
  "use strict";

  const apps = (window.MIRACLE_APPS || []).filter((app) => !app.hidden);
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const safe = (value) => String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));

  const icons = {
    arrow: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg>',
  };

  function mobileStoreUrl(platform, url) {
    const userAgent = navigator.userAgent || "";
    const platformHint = navigator.platform || "";
    const isIOS = /iPad|iPhone|iPod/i.test(`${userAgent} ${platformHint}`) || (/Macintosh|MacIntel/i.test(`${userAgent} ${platformHint}`) && navigator.maxTouchPoints > 1);
    if (platform === "ios" && isIOS) {
      const appId = url.match(/id(\d+)/)?.[1];
      return appId ? `itms-apps://itunes.apple.com/app/id${appId}` : url;
    }
    if (!/Instagram|FBAN|FBAV|FB_IAB/i.test(userAgent)) return url;
    const isAndroid = /Android/i.test(userAgent);
    if (platform === "android" && isAndroid) {
      const packageName = url.match(/[?&]id=([^&]+)/)?.[1];
      return packageName
        ? `intent://details?id=${packageName}#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${encodeURIComponent(url)};end`
        : url;
    }
    return url;
  }

  function storeButton(platform, url, compact = false, directNavigation = false) {
    const isApple = platform === "ios";
    const label = isApple ? "Download on the App Store" : "Get it on Google Play";
    const artwork = isApple ? "/assets/store-badges/app-store.svg" : "/assets/store-badges/google-play.png";
    const navigation = directNavigation ? "" : ' target="_blank" rel="noopener noreferrer"';
    const destination = directNavigation ? mobileStoreUrl(platform, url) : url;
    return `<a class="store-badge store-badge--${isApple ? "ios" : "android"}${compact ? " compact" : ""}${directNavigation ? " store-badge--direct" : ""}" href="${safe(destination)}"${navigation} data-store-platform="${platform}" aria-label="${label}"><img src="${artwork}" alt="${label}"></a>`;
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
    return `<a class="brand" href="${href}"><span class="brand-mark"><img src="/miracle_logo.png?v=transparent-1" alt=""></span><span>Miracle Apps</span></a>`;
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
    const themeColorMeta = $('meta[name="theme-color"]');
    if (themeColorMeta) themeColorMeta.setAttribute("content", app.colors[0]);

    const storeButtons = Object.entries(app.stores).map(([platform, url]) => {
      const useDirectNavigation = app.id === "cleanup_ai_photo_cleaner";
      return storeButton(platform, url, false, useDirectNavigation);
    }).join("");
    const realScreenshots = Array.isArray(app.appStoreScreenshots) ? app.appStoreScreenshots : [];
    const heroScreenshot = realScreenshots[app.heroScreenshotIndex ?? 1] || realScreenshots[0];
    const heroPreview = realScreenshots.length
      ? `<div class="hero-device hero-real-preview reveal"><div class="halo"></div><div class="hero-real-frame"><img src="${safe(heroScreenshot.src)}" alt="${safe(app.name)} store preview: ${safe(heroScreenshot.label)}"></div></div>`
      : `<div class="hero-device reveal"><div class="halo"></div>${phonePreview(app, 0)}<div class="floating-note note-one"><span>✦</span><strong>${safe(app.features[1][0])}</strong></div><div class="floating-note note-two"><span>✓</span><strong>You stay in control</strong></div></div>`;
    const screenGallery = realScreenshots.length
      ? `<div class="appstore-preview-grid" style="--preview-count:${realScreenshots.length}">${realScreenshots.map((screenshot) => `<figure class="appstore-preview-card reveal"><img src="${safe(screenshot.src)}" alt="${safe(app.name)} store preview: ${safe(screenshot.label)}" loading="lazy"><figcaption><strong>${safe(screenshot.label)}</strong></figcaption></figure>`).join("")}</div>`
      : `<div class="preview-grid">${app.screenLabels.map((label, index) => `<figure class="preview-card reveal"><div class="preview-device">${phonePreview(app, index)}</div><figcaption><span>0${index + 1}</span><strong>${safe(label)}</strong></figcaption></figure>`).join("")}</div>`;
    const screenHeading = `<div class="section-heading product-preview-heading reveal"><h2>${safe(app.previewHeading || `See ${app.shortName} in action.`)}</h2><p>${safe(app.previewDescription || "Every screen keeps the next action clear and the useful details close.")}</p></div>`;
    root.innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <main id="main">
        <header class="product-hero grid-surface"><div class="product-shell product-hero-grid">
          <div class="product-intro reveal"><div class="app-identity"><img src="${safe(app.icon)}" alt="${safe(app.name)} icon"><span>${safe(app.eyebrow)}</span></div><h1>${safe(app.name)}</h1><h2>${safe(app.tagline)}</h2><p>${safe(app.description)}</p><div class="tag-row">${app.tags.map((tag) => `<span>${safe(tag)}</span>`).join("")}</div><div class="store-row" id="download">${storeButtons}</div><div class="trust-row"><span>Purpose-built</span><span>Privacy-aware</span><span>${safe(platformText(app))}</span></div></div>
          ${heroPreview}
        </div></header>

        <section class="product-section" id="previews"><div class="product-shell">${screenHeading}${screenGallery}</div></section>

        <section class="download-section"><div class="product-shell"><div class="download-card reveal" style="--download-a:${app.colors[0]};--download-b:${app.colors[1]}"><img src="${safe(app.icon)}" alt="${safe(app.name)} icon"><div><p class="card-label">Ready when you are</p><h2>${safe(app.tagline)}</h2><p>${safe(app.subtitle)}.</p></div><div class="store-row">${storeButtons}</div></div></div></section>
      </main>
      <footer class="site-footer product-footer"><div class="product-shell footer-grid"><div>${brandMarkup("/")}<a href="mailto:support@miracleapps.in">support@miracleapps.in</a></div><div><h2>Explore</h2><a href="/#apps">All apps</a><a href="/#principles">Our principles</a><a href="mailto:support@miracleapps.in">Support</a></div><div><h2>Legal</h2><a href="/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy ↗</a><a href="/terms/" target="_blank" rel="noopener noreferrer">Terms and Conditions ↗</a></div></div><div class="product-shell footer-base"><span>© 2026 Miracle Apps</span></div></footer>`;
  }

  function initMenu() {
    const button = $(".menu-button");
    const nav = $(".desktop-nav, .home-links");
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
