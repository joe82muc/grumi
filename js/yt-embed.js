/* Datenschutzfreundliche YouTube-Einbettung.
   Erst beim Klick auf eine .yt-facade passiert etwas (kein Google-Kontakt vorher).

   Wichtig: Wird die Seite als lokale Datei geöffnet (file://), schlägt das
   Einbetten von YouTube fehl ("Fehler 153 / Konfiguration des Videoplayers"),
   weil der iframe keinen gültigen Web-Origin hat. Deshalb:
     - file://      -> Video in neuem Tab öffnen
     - http(s)://   -> Video eingebettet laden (youtube-nocookie.com)

   Per Event-Delegation auf document, damit es auch in dynamisch gerenderten
   Tipp-Bereichen (Quali-Seiten) funktioniert. */
(function () {
  var isFile = location.protocol === "file:";

  function activate(btn) {
    var id = btn.getAttribute("data-yt");
    if (!id) return;

    if (isFile) {
      // Lokale Datei: Einbetten geht nicht -> in neuem Tab öffnen.
      window.open("https://www.youtube.com/watch?v=" + encodeURIComponent(id), "_blank", "noopener");
      return;
    }

    var title = btn.getAttribute("data-title") || "YouTube-Video";
    var wrap = btn.closest(".yt-embed") || btn.parentElement;
    if (!wrap) return;

    var frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?rel=0&autoplay=1";
    frame.title = title;
    frame.loading = "lazy";
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");

    wrap.classList.add("loaded");
    wrap.textContent = "";
    wrap.appendChild(frame);
  }

  document.addEventListener("click", function (event) {
    var btn = event.target.closest ? event.target.closest(".yt-facade") : null;
    if (!btn) return;
    event.preventDefault();
    activate(btn);
  });
})();
