(function () {
  const AUTH_BASE = "https://englisch-9.onrender.com";
  const ROOT_URL = "https://joe82muc.github.io/grumi/";
  const TOKEN_KEY = "grumi_site_token";

  function isRootPage() {
    const path = window.location.pathname || "";
    return path === "/grumi/" || path === "/grumi/index.html" || path === "/" || /\/index\.html$/i.test(path) && /\/grumi\/$/i.test(path.replace(/index\.html$/i, ""));
  }

  async function verifyToken(token) {
    const response = await fetch(`${AUTH_BASE}/api/site/verify`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.ok;
  }

  async function guard() {
    if (isRootPage()) return;

    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      window.location.replace(ROOT_URL);
      return;
    }

    try {
      const ok = await verifyToken(token);
      if (!ok) {
        localStorage.removeItem(TOKEN_KEY);
        window.location.replace(ROOT_URL);
      }
    } catch (_error) {
      localStorage.removeItem(TOKEN_KEY);
      window.location.replace(ROOT_URL);
    }
  }

  guard();
})();
