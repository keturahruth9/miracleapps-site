/* ═══════════════════════════════════════════════════
   MIRACLE APPS — Interactive SPA Dashboard Engine
   ═══════════════════════════════════════════════════ */

const appStore = {
  "cleanupai": {
    name: "Cleanup AI",
    kicker: "Smart cleanup for busy phones",
    badge: "Phone Cleanup",
    desc: "Cleanup AI brings photo cleanup, video compression, Gmail cleanup, contact management, AI sorting, and private file protection into one focused mobile app.",
    accent: "#06b6d4",
    bg: "#060c18",
    stats: [
      { val: "8+", lbl: "cleanup tools in one app" },
      { val: "AI", lbl: "gallery sorting support" },
      { val: "Gmail", lbl: "optional inbox cleanup" },
      { val: "Private", lbl: "secret space for files" }
    ],
    features: [
      { title: "Duplicate photo cleanup", desc: "Find duplicate and similar photos quickly, then review them before deleting anything." },
      { title: "Video compression", desc: "Reduce large video file sizes to recover storage while keeping useful copies." },
      { title: "AI gallery sorting", desc: "Use smart categories to organize screenshots, blurry shots, receipts, and other clutter." },
      { title: "Gmail cleanup", desc: "Optional Gmail tools help review promotional, old, or bulky messages when you connect access." },
      { title: "Contacts manager", desc: "Clean duplicate or incomplete contacts so your address book stays usable." },
      { title: "Secret space", desc: "Keep selected private files behind an extra protected area inside the app." }
    ],
    screen: {
      pill: "On-device cleanup",
      title: "Cleanup Dashboard",
      cards: [
        { label: "Duplicate photos", desc: "Start here" },
        { label: "Video compression", desc: "Track progress" },
        { label: "AI gallery cleanup", desc: "Review loop" },
        { label: "Gmail cleaner", desc: "Pro tools" }
      ]
    },
    privacy: "/cleanupai/privacy/",
    terms: "/cleanupai/terms/"
  },
  "cma-part2": {
    name: "CMA Part 2",
    kicker: "Strategic Financial Management prep",
    badge: "Exam Prep",
    desc: "Practice the six CMA Part 2 domains with timed quizzes, readiness scoring, missed-question drills, saved questions, exam modes, and offline-first study tools.",
    accent: "#f59e0b",
    bg: "#120e08",
    stats: [
      { val: "6", lbl: "official-style core domains" },
      { val: "5", lbl: "quiz modes for different study goals" },
      { val: "3", lbl: "exam modes with or without explanations" },
      { val: "Offline", lbl: "study without needing internet" }
    ],
    features: [
      { title: "Timed practice", desc: "Built-in countdowns help you rehearse under pressure instead of only reading explanations." },
      { title: "Missed question drills", desc: "Wrong answers are collected into focused review so weak areas become your next study block." },
      { title: "Saved questions", desc: "Bookmark important questions and come back when you want targeted revision." },
      { title: "Readiness score", desc: "Track overall readiness, domain progress, completed tests, and answer accuracy." },
      { title: "Exam modes", desc: "Choose full support, no explanations, or exam-style mode based on how you want to practice." },
      { title: "Offline study", desc: "Questions, explanations, and progress are built for study sessions without constant connectivity." }
    ],
    screen: {
      pill: "6 core domains",
      title: "CMA Part 2 Prep",
      cards: [
        { label: "Timed quizzes", desc: "Start here" },
        { label: "Readiness score", desc: "Track progress" },
        { label: "Saved questions", desc: "Review loop" },
        { label: "Missed drills", desc: "Pro tools" }
      ]
    },
    privacy: "/cma-part2/privacy/",
    terms: "/cma-part2/terms/"
  },
  "aba": {
    name: "ABA Prep",
    kicker: "BCBA and ABA study companion",
    badge: "BCBA Study",
    desc: "Study BCBA content areas with domain quizzes, exam-style practice, readiness tracking, saved questions, missed question review, daily questions, and Pro study tools.",
    accent: "#04d4f0",
    bg: "#0b0f15",
    stats: [
      { val: "9", lbl: "weighted BCBA domains" },
      { val: "104", lbl: "topic-level practice areas" },
      { val: "175", lbl: "exam-weighted outline questions" },
      { val: "2500+", lbl: "practice questions with Pro" }
    ],
    features: [
      { title: "Domain quick quizzes", desc: "Practice across ABA and BCBA domains, then drill into topics when you need targeted review." },
      { title: "Three exam modes", desc: "Use full support with explanations, answer-only review, or exam-style mode." },
      { title: "Readiness score", desc: "Track completed topics, answer accuracy, correct answers, tests completed, and overall readiness." },
      { title: "Saved and missed questions", desc: "Save important questions and revisit mistakes automatically." },
      { title: "Today's question", desc: "Keep your study habit alive with one daily question." },
      { title: "Pro access", desc: "Unlock more questions, final tests, random quizzes, explanations, and ad-free study." }
    ],
    screen: {
      pill: "99% readiness goal",
      title: "ABA Prep",
      cards: [
        { label: "BCBA domains", desc: "Start here" },
        { label: "Readiness score", desc: "Track progress" },
        { label: "Daily question", desc: "Review loop" },
        { label: "Pro access", desc: "Pro tools" }
      ]
    },
    privacy: "/aba/privacy/",
    terms: "/aba/terms/"
  },
  "rbt": {
    name: "RBT Prep",
    kicker: "RBT Task List study companion",
    badge: "RBT Study",
    desc: "Use Task List domain quizzes, an 85-question final practice mode, readiness tracking, daily questions, saved questions, missed-question review, and Pro access.",
    accent: "#067593",
    bg: "#081216",
    stats: [
      { val: "6", lbl: "weighted RBT domains" },
      { val: "37", lbl: "topic-level practice areas" },
      { val: "85", lbl: "questions in final practice" },
      { val: "1000+", lbl: "practice questions with Pro" }
    ],
    features: [
      { title: "Task List practice", desc: "Practice by RBT domain and topic instead of guessing what to study next." },
      { title: "Three exam modes", desc: "Use explanations when learning, then switch to exam-style practice when ready." },
      { title: "Readiness score", desc: "Track tests completed, answer accuracy, correct answers, topic progress, and readiness." },
      { title: "Saved and missed questions", desc: "Save important questions and automatically revisit the ones you missed." },
      { title: "Today's question", desc: "Keep RBT concepts fresh with one daily question." },
      { title: "Pro access", desc: "Unlock final tests, random quizzes, explanations, review tools, and ad-free study." }
    ],
    screen: {
      pill: "85-question final",
      title: "RBT Prep",
      cards: [
        { label: "RBT domains", desc: "Start here" },
        { label: "Final test", desc: "Track progress" },
        { label: "Daily question", desc: "Review loop" },
        { label: "Readiness score", desc: "Pro tools" }
      ]
    },
    privacy: "/rbt/privacy/",
    terms: "/rbt/terms/"
  },
  "pmp": {
    name: "PMP Prep",
    kicker: "PMP knowledge-area study companion",
    badge: "Project Management Study",
    desc: "Study project management concepts with knowledge-area quizzes, practice sets, a 180-question final quiz, readiness tracking, saved questions, missed-question review, and daily questions.",
    accent: "#8b5cf6",
    bg: "#100b1a",
    stats: [
      { val: "10", lbl: "PMP knowledge areas" },
      { val: "20", lbl: "quiz files with 40 questions each" },
      { val: "180", lbl: "questions in final quiz mode" },
      { val: "2500+", lbl: "practice questions with Pro" }
    ],
    features: [
      { title: "Knowledge-area quizzes", desc: "Practice Integration, Scope, Time, Cost, Quality, Resource, Communications, Risk, Procurement, and Stakeholder topics." },
      { title: "Three exam modes", desc: "Use explanations while learning or switch into exam-style review when ready." },
      { title: "180-question final quiz", desc: "Test readiness with a randomized final quiz that mirrors a full-length practice session." },
      { title: "Saved and missed questions", desc: "Save important questions and revisit missed answers automatically." },
      { title: "Today's question", desc: "Keep PMP concepts active with one daily question." },
      { title: "Pro access", desc: "Unlock more questions, random quizzes, final quiz access, explanations, and ad-free study." }
    ],
    screen: {
      pill: "180-question final",
      title: "PMP Prep",
      cards: [
        { label: "Knowledge areas", desc: "Start here" },
        { label: "180-question final", desc: "Track progress" },
        { label: "Readiness score", desc: "Review loop" },
        { label: "Pro access", desc: "Pro tools" }
      ]
    },
    privacy: "/pmp/privacy/",
    terms: "/pmp/terms/"
  },
  "acsmcpt": {
    name: "ACSM-CPT Prep",
    kicker: "ACSM-CPT study companion",
    badge: "Personal Trainer Study",
    desc: "Prepare for the certified personal trainer exam with 10 question-set modules, a 200-question final test, readiness tracking, daily questions, saved questions, missed-question review, and flexible exam modes.",
    accent: "#29a0b1",
    bg: "#061114",
    stats: [
      { val: "10", lbl: "ACSM-CPT practice sets" },
      { val: "20+", lbl: "questions in each module quiz" },
      { val: "200", lbl: "questions in final practice" },
      { val: "Pro", lbl: "monthly or lifetime options" }
    ],
    features: [
      { title: "Question-set quizzes", desc: "Practice ACSM-CPT topics through 10 modules with progress saved across sessions." },
      { title: "Three exam modes", desc: "Use full support with explanations, answer-only review, or exam-style mode." },
      { title: "200-question final test", desc: "Take a randomized final practice test pulled from the ACSM-CPT question sets." },
      { title: "Saved and missed questions", desc: "Save important questions and automatically revisit missed ones." },
      { title: "Readiness and review", desc: "Use Stats and Review to see tests completed, answer accuracy, correct answers, and readiness." },
      { title: "Pro access", desc: "Unlock random quizzes, missed-question practice, saved-question practice, ad removal, and restore support." }
    ],
    screen: {
      pill: "200-question final",
      title: "ACSM-CPT Prep",
      cards: [
        { label: "10 practice sets", desc: "Start here" },
        { label: "200-question final", desc: "Track progress" },
        { label: "Daily question", desc: "Review loop" },
        { label: "Pro access", desc: "Pro tools" }
      ]
    },
    privacy: "/acsmcpt/privacy/",
    terms: "/acsmcpt/terms/"
  },
  "fmradio": {
    name: "FM Radio",
    kicker: "Global radio streaming",
    badge: "Global Radio",
    desc: "Stream live radio stations from around the world with search, nearby stations, globe discovery, charts, favorites, recents, Siri shortcuts, CarPlay, Shazam, and sleep timer.",
    accent: "#ff453a",
    bg: "#160808",
    stats: [
      { val: "134K+", lbl: "radio stations in the directory" },
      { val: "292", lbl: "countries represented" },
      { val: "966", lbl: "languages available" },
      { val: "CarPlay", lbl: "Siri, background audio, and road-friendly browsing" }
    ],
    features: [
      { title: "Global station directory", desc: "Browse a large radio directory with station names, countries, languages, genres, stream URLs, favicons, codec, and bitrate details." },
      { title: "Search and browse", desc: "Search stations, genres, and countries, then keep exploring through nearby stations, popular stations, countries, languages, and genre lists." },
      { title: "Globe discovery", desc: "Use the globe view to explore stations visually, move around the map, and jump into a random station when you want something new." },
      { title: "Charts", desc: "Listen through local and worldwide charts with genre and country filters for faster discovery." },
      { title: "Favorites, recents, and songs", desc: "Save favorite stations, revisit recently played stations, and use Shazam support to identify and save songs you hear." },
      { title: "CarPlay, Siri, and sleep timer", desc: "Listen in the background, control playback from Now Playing, browse from CarPlay, use Siri shortcuts, and set a sleep timer from 1 to 240 minutes." }
    ],
    screen: {
      pill: "134K+ stations",
      title: "FM Radio",
      cards: [
        { label: "Nearby stations", desc: "Local discovery" },
        { label: "Global search", desc: "Stations & genres" },
        { label: "CarPlay", desc: "Road-ready radio" },
        { label: "Sleep timer", desc: "Auto stop" }
      ]
    },
    privacy: "/fmradio/privacy/",
    terms: "/fmradio/terms/"
  },
  "vault": {
    name: "Secret Vault Pro",
    kicker: "Private vault utility",
    badge: "Private Vault",
    desc: "Protect private photos, videos, captured images, and browsing with a calculator-style lock, passcode, Face ID or Touch ID, local albums, CloudKit sync, and restore tools.",
    accent: "#f6c350",
    bg: "#0f100a",
    stats: [
      { val: "4-digit", lbl: "calculator-style passcode entry" },
      { val: "Face ID", lbl: "or Touch ID unlock support" },
      { val: "3", lbl: "vault media areas for photos, videos, and captures" },
      { val: "iCloud", lbl: "private CloudKit media sync support" }
    ],
    features: [
      { title: "Calculator-style lock", desc: "Use a numeric passcode entry flow that looks like a calculator-style unlock screen before entering the vault." },
      { title: "Face ID or Touch ID", desc: "Turn biometric unlock on or off from Settings when your device supports Apple biometric authentication." },
      { title: "Photo and video vaults", desc: "Import photos and videos into app storage, browse thumbnails, preview images, play videos, select items, delete items, or restore selected files to Photos." },
      { title: "Captured images", desc: "Keep camera-captured images in a separate vault area so they stay organized apart from imported photos." },
      { title: "Built-in browser", desc: "Open a web browser inside the app with back and forward controls, page title display, and loading feedback." },
      { title: "CloudKit media sync", desc: "Vault media can sync through Apple's private CloudKit database using a Keychain-backed vault identifier and device metadata." }
    ],
    screen: {
      pill: "Passcode lock",
      title: "Secret Vault Pro",
      cards: [
        { label: "Photos", desc: "Private album" },
        { label: "Videos", desc: "Secure storage" },
        { label: "Captured Images", desc: "Camera imports" },
        { label: "Browser", desc: "Private browsing" }
      ]
    },
    privacy: "/vault/privacy/",
    terms: "/vault/terms/"
  },
  "traslator": {
    name: "Traslate All",
    kicker: "Translation utility",
    badge: "Translation",
    desc: "Translate text, photos, camera scans, voice conversations, audio files, PDFs, documents, spreadsheets, presentations, and CSV files with history, sharing, offline mode, and Pro access.",
    accent: "#f97316",
    bg: "#180c06",
    stats: [
      { val: "204", lbl: "translation language entries" },
      { val: "66", lbl: "app interface localizations" },
      { val: "6", lbl: "supported file translation types" },
      { val: "8", lbl: "audio formats for transcription" }
    ],
    features: [
      { title: "Text translation", desc: "Type or paste text, choose source and target languages, translate, listen with text-to-speech, copy results, share results, and keep useful translations in history." },
      { title: "Photo and camera translation", desc: "Use the camera or pick an image from Photos. The app reads text from the image with OCR, translates it, and can create a translated image result." },
      { title: "Voice conversation translation", desc: "Speak into the microphone, convert speech to text, translate between two selected languages, and play translated speech when supported." },
      { title: "Audio transcription and translation", desc: "Choose audio files such as MP3, M4A, WAV, FLAC, OGG, MPEG, MPGA, or WEBM, then transcribe and translate the spoken content." },
      { title: "File translation", desc: "Translate PDFs, TXT files, DOCX documents, PPTX presentations, XLSX spreadsheets, and CSV files, then open or share the translated output." },
      { title: "Offline mode and Pro access", desc: "Download supported on-device translation models for offline use, manage settings, restore purchases, and unlock Pro features through in-app purchase." }
    ],
    screen: {
      pill: "204 languages",
      title: "Traslate All",
      cards: [
        { label: "Text", desc: "Type or paste" },
        { label: "Photos", desc: "OCR translate" },
        { label: "Files", desc: "PDF, DOCX, XLSX" },
        { label: "Voice", desc: "Speak & listen" }
      ]
    },
    privacy: "/traslator/privacy/",
    terms: "/traslator/terms/"
  }
};

/* ─── DOM Nodes ─── */
const workspace = document.querySelector('.workspace');
const wContent = document.querySelector('.workspace-content');
const wKicker = document.querySelector('.workspace-kicker');
const wBadge = document.querySelector('.workspace-badge');
const wTitle = document.querySelector('.workspace-title');
const wCopy = document.querySelector('.workspace-copy');
const wStatsGrid = document.querySelector('.hud-stats-grid');
const wFeaturesList = document.querySelector('.features-list');

const glassPhone = document.querySelector('.glass-phone');
const pPill = document.querySelector('.phone-pill');
const pTitle = document.querySelector('.phone-screen-title');
const pCardGrid = document.querySelector('.phone-screen-grid');

const btnPrivacy = document.querySelector('.btn-privacy');
const btnTerms = document.querySelector('.btn-terms');
const sidebarItems = document.querySelectorAll('.sidebar-menu .menu-item[data-app]');

/* ─── Switch Active App ─── */
const loadApp = (appId) => {
  const data = appStore[appId];
  if (!data) return;

  // Add exit transition classes
  wContent.classList.add('transitioning');
  glassPhone.classList.add('transitioning');

  setTimeout(() => {
    // 1. Update page CSS variables
    document.documentElement.style.setProperty('--bg-color', data.bg);
    document.documentElement.style.setProperty('--accent-muted', data.accent);
    document.documentElement.style.setProperty('--accent-glow', `${data.accent}12`);

    // 2. Load detail metrics
    wKicker.textContent = data.kicker;
    wBadge.textContent = data.badge;
    wTitle.textContent = data.name;
    wCopy.textContent = data.desc;

    // Stats Grid
    wStatsGrid.innerHTML = data.stats.map(s => `
      <div class="hud-tile">
        <strong>${s.val}</strong>
        <span>${s.lbl}</span>
      </div>
    `).join('');

    // Features List
    wFeaturesList.innerHTML = data.features.map(f => `
      <div class="feature-panel">
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    `).join('');

    // 3. Load preview mockups
    pPill.textContent = data.screen.pill;
    pTitle.textContent = data.screen.title;
    pCardGrid.innerHTML = data.screen.cards.map(c => `
      <div class="phone-screen-card">
        <strong>${c.label}</strong>
        <span>${c.desc}</span>
      </div>
    `).join('');

    // 4. Update download links
    btnPrivacy.href = data.privacy;
    btnTerms.href = data.terms;

    // Trigger stat counter animations
    animateCounters();

    // Remove transition classes
    wContent.classList.remove('transitioning');
    glassPhone.classList.remove('transitioning');
  }, 350);
};

/* ─── Counters count up trigger ─── */
const animateCounters = () => {
  const elements = wStatsGrid.querySelectorAll('.hud-tile strong');
  elements.forEach(el => {
    const text = el.textContent.trim();
    const match = text.match(/^([\d,]+)(\+?)$/);
    if (!match) return;

    const target = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2] || '';
    const duration = 1200;
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

/* ─── Sidebar Item Clicks ─── */
sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    const appId = item.getAttribute('data-app');
    if (item.classList.contains('active')) return;

    // Update active visual status
    document.querySelector('.sidebar-menu .menu-item.active')?.classList.remove('active');
    item.classList.add('active');

    loadApp(appId);
  });
});

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

// Initial default app load
loadApp('cleanupai');
