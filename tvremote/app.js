(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Same store-link behaviour as assets/site.js: open the native store app from iOS and from
  // Instagram/Facebook in-app browsers on Android, where web store links often dead-end.
  var ua = navigator.userAgent || "", hint = navigator.platform || "";
  var isIOS = /iPad|iPhone|iPod/i.test(ua + " " + hint) || (/Macintosh|MacIntel/i.test(ua + " " + hint) && navigator.maxTouchPoints > 1);
  var inApp = /Instagram|FBAN|FBAV|FB_IAB/i.test(ua);
  document.querySelectorAll("[data-store]").forEach(function (link) {
    var url = link.href;
    if (link.dataset.store === "ios" && isIOS) {
      link.href = "itms-apps://itunes.apple.com/app/id" + url.match(/id(\d+)/)[1];
    } else if (link.dataset.store === "android" && inApp && /Android/i.test(ua)) {
      link.href = "intent://details?id=" + url.match(/[?&]id=([^&]+)/)[1] + "#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=" + encodeURIComponent(url) + ";end";
    } else {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

  // ---- Section links use clean paths (/tvremote/connect), never hashes ----
  // Each path also exists as a tiny page that stores the section name and sends the visitor
  // here, so reloads and shared links work on a static host.
  var BASE = "/tvremote/", SECTIONS = ["features", "tvs", "connect", "help", "download"];
  function sectionOf(path) {
    var name = path.slice(BASE.length).replace(/\/$/, "");
    return path.indexOf(BASE) === 0 && SECTIONS.indexOf(name) !== -1 ? name : null;
  }
  function showSection(name, smooth) {
    // "instant" rather than "auto": the page sets smooth scrolling in CSS, which "auto" would follow.
    var behavior = smooth && !reduced ? "smooth" : "instant";
    if (name) document.getElementById(name).scrollIntoView({ behavior: behavior, block: "start" });
    else window.scrollTo({ top: 0, behavior: behavior });
  }
  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href]");
    var name = link && link.origin === location.origin && sectionOf(link.pathname);
    if (!name || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    history.pushState(null, "", BASE + name);
    showSection(name, true);
  });
  window.addEventListener("popstate", function () { showSection(sectionOf(location.pathname), false); });
  // Arriving from a section page, or from an old #hash link: show the section under its clean URL.
  var arrived = sessionStorage.getItem("tvremote-section") || location.hash.slice(1);
  sessionStorage.removeItem("tvremote-section");
  if (SECTIONS.indexOf(arrived) !== -1) {
    history.replaceState(null, "", BASE + arrived);
    window.addEventListener("load", function () { showSection(arrived, false); });
  }

  // ---- The demo: a remote, laid out like the app, that drives the TV on the page ----
  var stage = document.getElementById("demo");
  var tv = stage.querySelector(".tv");
  var tiles = Array.prototype.slice.call(tv.querySelectorAll(".tiles li"));
  var hud = tv.querySelector(".tv-hud");
  var status = document.getElementById("tv-status");
  var signal = stage.querySelector(".signal");
  var mic = stage.querySelector(".mic");
  var COLUMNS = 3, MAX_VOLUME = 20;
  var state = { on: false, view: "home", focus: 0, volume: 8, muted: false, playing: true, progress: 35, channel: 12 };
  var hudTimer, typeTimer;

  function render(message) {
    var tile = tiles[state.focus];
    tv.dataset.on = state.on;
    tv.dataset.view = state.view;
    tv.style.setProperty("--glow", state.view === "search" ? "#b47cff" : tile.style.getPropertyValue("--tile"));
    tiles.forEach(function (item, index) { item.classList.toggle("focus", index === state.focus); });
    tv.querySelector(".tv-app-name").textContent = tile.textContent;
    tv.querySelector(".tv-app-state").textContent = state.playing ? "Playing" : "Paused";
    tv.querySelector(".tv-progress").style.width = state.progress + "%";
    if (message) status.textContent = message;
  }

  // The banner in the TV's corner. With a level it shows a bar (volume); without, just the words.
  function toast(label, level) {
    hud.classList.toggle("plain", level === undefined);
    tv.querySelector(".tv-hud-label").textContent = label;
    tv.querySelector(".tv-volume").style.width = (level || 0) * 100 + "%";
    hud.classList.add("show");
    clearTimeout(hudTimer);
    hudTimer = setTimeout(function () { hud.classList.remove("show"); }, 1400);
    render(label);
  }

  function stopTyping() {
    clearInterval(typeTimer);
    mic.classList.remove("listening");
  }

  // Type and the microphone both end the same way: words appear in the TV's search box, then results.
  function search(query, spoken) {
    var box = tv.querySelector(".tv-query");
    stopTyping();
    state.view = "search";
    tv.dataset.results = "false";
    box.textContent = "";
    render(spoken ? "Listening" : "Typing");
    var finish = function () {
      stopTyping();
      box.textContent = query;
      tv.dataset.results = "true";
      status.textContent = "Searched for " + query;
    };
    if (reduced) return finish();
    mic.classList.toggle("listening", spoken);
    var typed = 0;
    typeTimer = setInterval(function () {
      typed += 1;
      box.textContent = query.slice(0, typed);
      if (typed === query.length) finish();
    }, 85);
  }

  function move(key) {
    if (state.view === "app") return seek(key === "right" ? 10 : key === "left" ? -10 : 0);
    if (state.view !== "home") return;
    var step = { left: -1, right: 1, up: -COLUMNS, down: COLUMNS }[key];
    var next = state.focus + step;
    // Left and right stop at the row's edge instead of wrapping to the next row.
    var sameRow = Math.abs(step) === COLUMNS || Math.floor(next / COLUMNS) === Math.floor(state.focus / COLUMNS);
    if (next >= 0 && next < tiles.length && sameRow) state.focus = next;
    render(tiles[state.focus].textContent + " selected");
  }

  function seek(amount) {
    state.progress = Math.max(0, Math.min(100, state.progress + amount));
    render(amount > 0 ? "Forward" : amount < 0 ? "Back" : "");
  }

  function setPlaying(playing) {
    state.playing = playing;
    render(playing ? "Playing" : "Paused");
  }

  function press(key) {
    if (!reduced) {
      signal.classList.remove("ping");
      void signal.offsetWidth; // restarts the animation
      signal.classList.add("ping");
    }
    if (key === "power") {
      stopTyping();
      state.on = !state.on;
      state.view = "home";
      return render(state.on ? "TV on" : "TV off");
    }
    if (!state.on) return render("The TV is off. Press power.");
    if (key !== "mic" && key !== "type") stopTyping();
    var playing = state.view === "app";
    if (key.indexOf("num") === 0) return toast("Channel " + key.slice(3));
    switch (key) {
      case "up": case "down": case "left": case "right": return move(key);
      case "ok":
        if (state.view === "home") { state.view = "app"; state.playing = true; state.progress = 35; return render(tiles[state.focus].textContent + " opened"); }
        if (playing) return setPlaying(!state.playing);
        return;
      case "back": case "home":
        state.view = "home";
        return render("Home");
      case "menu": return toast("Menu");
      case "source": return toast("Input: HDMI 1");
      case "volUp": case "volDown":
        state.muted = false;
        state.volume = Math.max(0, Math.min(MAX_VOLUME, state.volume + (key === "volUp" ? 1 : -1)));
        return toast("Volume " + state.volume, state.volume / MAX_VOLUME);
      case "mute":
        state.muted = !state.muted;
        return toast(state.muted ? "Muted" : "Sound on", state.muted ? 0 : state.volume / MAX_VOLUME);
      case "chUp": case "chDown":
        state.channel = Math.max(1, state.channel + (key === "chUp" ? 1 : -1));
        return toast("Channel " + state.channel);
      case "play": return playing ? setPlaying(true) : toast("Play");
      case "pause": return playing ? setPlaying(false) : toast("Pause");
      case "stop":
        if (!playing) return toast("Stop");
        state.progress = 0;
        return setPlaying(false);
      case "rewind": return playing ? seek(-10) : toast("Rewind");
      case "forward": return playing ? seek(10) : toast("Fast forward");
      case "red": case "green": case "yellow": case "blue":
        return toast(key.charAt(0).toUpperCase() + key.slice(1) + " key");
      case "type": return search("action movies", false);
      case "mic": return search("cooking recipes", true);
    }
  }

  stage.addEventListener("click", function (event) {
    var key = event.target.closest("[data-key]");
    if (key) press(key.dataset.key);
    var mode = event.target.closest("[data-mode]");
    if (!mode) return;
    stage.querySelectorAll("[data-mode]").forEach(function (button) { button.setAttribute("aria-pressed", String(button === mode)); });
    stage.querySelectorAll("[data-pad]").forEach(function (pad) { pad.hidden = pad.dataset.pad !== mode.dataset.mode; });
  });

  // Arrow keys drive the TV only while the demo has focus, so they still scroll the page elsewhere.
  var KEYS = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", Escape: "back", Backspace: "back" };
  stage.addEventListener("keydown", function (event) {
    var key = KEYS[event.key] || (event.key === "Enter" && event.target === stage ? "ok" : null);
    if (!key) return;
    event.preventDefault();
    press(key);
    var button = stage.querySelector('.key[data-key="' + key + '"]');
    if (button) {
      button.classList.add("pressed");
      setTimeout(function () { button.classList.remove("pressed"); }, 140);
    }
  });

  // Swipe pad: a short drag is a direction, a tap is OK.
  var pad = stage.querySelector(".swipe"), start = null;
  pad.addEventListener("pointerdown", function (event) {
    start = { x: event.clientX, y: event.clientY };
    pad.setPointerCapture(event.pointerId);
  });
  pad.addEventListener("pointerup", function (event) {
    if (!start) return;
    var dx = event.clientX - start.x, dy = event.clientY - start.y;
    start = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 14) return press("ok");
    press(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up"));
  });
  pad.addEventListener("pointercancel", function () { start = null; });

  // The page opens with the TV switching on.
  render();
  setTimeout(function () { state.on = true; render(); }, reduced ? 0 : 450);

  // ---- Supported TVs strip: the list is doubled so it can loop without a seam ----
  var track = document.querySelector(".scan");
  if (!reduced) {
    Array.prototype.slice.call(track.children).forEach(function (card) {
      var copy = card.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      track.appendChild(copy);
    });
    track.parentNode.classList.add("run");
  }

  // ---- Blocks ease into place the first time they scroll into view ----
  if (!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      entry.target.classList.add("in");
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".reveal").forEach(function (item) { observer.observe(item); });
})();
