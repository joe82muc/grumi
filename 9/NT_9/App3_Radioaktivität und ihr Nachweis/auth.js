(() => {
  const AUTH_KEY = "nt_auth_v1";
  const LOGIN_PAGE = "login.html";
  const VALID_USERNAME = "NT2026";
  const VALID_PASSWORD = "schule123";

  function isLoginPage() {
    return /login\.html$/i.test(window.location.pathname);
  }

  function isAuthenticated() {
    try {
      return window.sessionStorage.getItem(AUTH_KEY) === "1";
    } catch (error) {
      return false;
    }
  }

  function getNextTarget() {
    const params = new URLSearchParams(window.location.search);
    const next = params.get("next");
    if (!next) return "index.html";

    const cleaned = next.replace(/^\/+/, "");
    if (!/^[a-zA-Z0-9._\-\/]+(\.html)?([?#].*)?$/.test(cleaned)) return "index.html";
    if (!cleaned.endsWith(".html") && !cleaned.includes(".html?")) return "index.html";

    return cleaned;
  }

  function redirectToLogin() {
    const file = window.location.pathname.split("/").pop() || "index.html";
    const next = encodeURIComponent(file + window.location.search + window.location.hash);
    window.location.replace(`${LOGIN_PAGE}?next=${next}`);
  }

  function applyProtectedImages() {
    if (!isAuthenticated()) return;

    document.querySelectorAll("img[data-protected-src]").forEach((img) => {
      if (img.getAttribute("src")) return;
      const src = img.getAttribute("data-protected-src");
      if (src) img.setAttribute("src", src);
    });
  }

  function setupLoginPage() {
    const form = document.getElementById("loginForm");
    const userInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorBox = document.getElementById("loginError");
    const nextTarget = getNextTarget();

    if (isAuthenticated()) {
      window.location.replace(nextTarget);
      return;
    }

    if (!form || !userInput || !passwordInput || !errorBox) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = userInput.value.trim();
      const password = passwordInput.value;

      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        try {
          window.sessionStorage.setItem(AUTH_KEY, "1");
        } catch (error) {
          // ignore storage errors
        }
        window.location.replace(nextTarget);
        return;
      }

      errorBox.textContent = "Benutzername oder Passwort ist falsch.";
      passwordInput.value = "";
      passwordInput.focus();
    });
  }

  if (!isLoginPage() && !isAuthenticated()) {
    redirectToLogin();
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      applyProtectedImages();
      if (isLoginPage()) setupLoginPage();
    });
  } else {
    applyProtectedImages();
    if (isLoginPage()) setupLoginPage();
  }

  window.ntLogout = function ntLogout() {
    try {
      window.sessionStorage.removeItem(AUTH_KEY);
    } catch (error) {
      // ignore storage errors
    }
    window.location.replace(LOGIN_PAGE);
  };
})();

