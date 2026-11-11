(function () {
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

  if (!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(function (item) { observer.observe(item); });
})();
