(() => {
  // Open mode for copied NT_9 apps: no login redirect.
  function applyProtectedImages() {
    document.querySelectorAll("img[data-protected-src]").forEach((img) => {
      if (img.getAttribute("src")) return;
      const src = img.getAttribute("data-protected-src");
      if (src) img.setAttribute("src", src);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyProtectedImages);
  } else {
    applyProtectedImages();
  }

  window.ntLogout = function ntLogout() {
    window.location.replace("index.html");
  };
})();
