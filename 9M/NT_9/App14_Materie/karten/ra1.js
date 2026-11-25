/* Lernkarten zum Modul „Radioaktivität: überall – und wie man sie nachweist“ (NT 9, Radioaktivität 1, Modul-id ra-nachweis).
   Trainer: 8M/NT/karten.js. Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("ra-nachweis", [
  { id: "k1", art: "begriff", v: "Was ist Umgebungsstrahlung?", h: "Natürliche radioaktive Strahlung, die es überall und jederzeit gibt. Wir können sie nicht sehen, hören, riechen oder fühlen." },
  { id: "k2", art: "begriff", v: "Nenne die drei Quellen der natürlichen Strahlung.", h: "Bodenstrahlung (aus Böden und Gesteinen), Höhenstrahlung (aus dem Weltraum) und Eigenstrahlung (aus dem eigenen Körper)." },
  { id: "k3", art: "ursache", v: "Warum ist die Höhenstrahlung auf einem hohen Berg stärker als im Tal?", h: "Die Atmosphäre schwächt die Strahlung aus dem Weltraum ab. Je höher man ist, desto weniger Luft ist darüber." },
  { id: "k4", art: "ursache", v: "Warum strahlt der Boden im Bayerischen Wald stärker als in Norddeutschland?", h: "Dort liegen alte Gesteine wie Granit. Sie enthalten winzige Mengen radioaktiver Stoffe. Im Norden liegen vor allem Sand und Lehm." },
  { id: "k5", art: "anwendung", v: "Wo erzeugt der Mensch radioaktive Strahlung (künstliche Radioaktivität)?", h: "Vor allem in Kernkraftwerken und in der Medizin, zum Beispiel beim Röntgen und bei der Strahlentherapie." },
  { id: "k6", art: "versuch", v: "Wer entdeckte die radioaktive Strahlung – wann und wie?", h: "Henri Becquerel, 1896 in Paris. Uranerz schwärzte eine lichtdicht verpackte Fotoplatte – ganz ohne Sonnenlicht. Es war ein Zufall." },
  { id: "k7", art: "bild", v: "Was zeigt diese Skizze von Becquerels Versuch?",
    bild: '<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ra1pf" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 Z" fill="#15212b"/></marker><radialGradient id="ra1fl"><stop offset="0" stop-color="#151515"/><stop offset=".7" stop-color="#262626" stop-opacity=".85"/><stop offset="1" stop-color="#262626" stop-opacity="0"/></radialGradient></defs>' +
      '<rect x="10" y="22" width="110" height="70" rx="3" fill="#1f2226"/><path d="M38 58 Q36 42 54 38 Q72 32 84 44 Q94 56 86 68 Q72 80 52 76 Q38 72 38 58 Z" fill="#4b5248" stroke="#2c312a" stroke-width="2"/>' +
      '<g fill="#e8d44d"><circle cx="54" cy="52" r="2"/><circle cx="70" cy="46" r="2"/><circle cx="76" cy="64" r="2"/></g>' +
      '<path d="M130 57 H166" stroke="#15212b" stroke-width="2" marker-end="url(#ra1pf)"/><text x="148" y="48" text-anchor="middle" font-family="Arial" font-size="10" font-weight="700" fill="#15212b">Tage</text>' +
      '<rect x="176" y="22" width="110" height="70" rx="3" fill="#eef2ec" stroke="#8a9a8f" stroke-width="2"/><ellipse cx="231" cy="57" rx="30" ry="22" fill="url(#ra1fl)"/>' +
      '<g font-family="Arial" font-size="11" font-weight="700" fill="#15212b" text-anchor="middle"><text x="65" y="106">vorher</text><text x="231" y="106">nachher</text></g></svg>',
    h: "Links: Uranerz liegt auf einer Fotoplatte in schwarzem Papier. Rechts: Nach Tagen im Dunkeln ist die Platte dort geschwärzt, wo das Erz lag. Uran sendet von selbst eine unsichtbare Strahlung aus." },
  { id: "k8", art: "begriff", v: "Mit welchen drei Geräten weist man radioaktive Strahlung nach?", h: "Fotoplatte oder Fotopapier (wird geschwärzt), Nebelkammer (Nebelspuren) und Geiger-Müller-Zähler (zählt die Teilchen)." },
  { id: "k9", art: "versuch", v: "Was sieht man in der Nebelkammer – ohne und mit Magnet?", h: "Jedes Strahlungsteilchen hinterlässt eine Nebelspur. Mit Magnet bleiben manche Spuren fast gerade, andere werden gekrümmt: Es gibt verschiedene Strahlungsarten." },
  { id: "k10", art: "bild", v: "Wie funktioniert der Geiger-Müller-Zähler?",
    bild: '<svg viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M6 54 Q4 36 18 32 Q30 28 38 40 Q42 50 36 58 Z" fill="#6b7b63" stroke="#3f4a3a" stroke-width="2"/>' +
      '<path d="M44 46 H70" stroke="#b8720a" stroke-width="2.5" stroke-dasharray="4 3"/>' +
      '<rect x="76" y="32" width="110" height="28" rx="9" fill="#dbe7f0" stroke="#566674" stroke-width="2"/><rect x="73" y="35" width="6" height="22" rx="2" fill="#e74c3c"/><line x1="88" y1="46" x2="182" y2="46" stroke="#c0392b" stroke-width="1.8"/>' +
      '<path d="M186 46 H204 V22 H216 M204 46 V68 H216" fill="none" stroke="#c0392b" stroke-width="2"/>' +
      '<rect x="216" y="8" width="56" height="28" rx="4" fill="#33414d"/><rect x="221" y="13" width="46" height="18" rx="2" fill="#d7f2d0"/><text x="262" y="27" text-anchor="end" font-family="Arial" font-size="12" font-weight="700" fill="#15212b">21</text>' +
      '<polygon points="216,60 224,60 234,52 234,82 224,74 216,74" fill="#9aa7b2" stroke="#33414d" stroke-width="1.5"/><path d="M240 60 q5 7 0 14 M246 56 q8 11 0 22" fill="none" stroke="#33414d" stroke-width="1.5"/></svg>',
    h: "Ein Teilchen kommt durch das dünne Fenster ins Zählrohr (Rohr mit Gas). Dort entsteht ein kurzer Stromstoß – ein Impuls. Der Zähler zählt ihn mit, der Lautsprecher klickt (knackt)." },
  { id: "k11", art: "begriff", v: "Was ist die Zählrate?", h: "Die Anzahl der Impulse (Stromstöße), die der Zähler in einer Minute zählt." },
  { id: "k12", art: "begriff", v: "Was ist die Nullrate – und woher kommt sie?", h: "Die Zählrate ohne Probe, etwa 20 Impulse pro Minute. Sie kommt von der natürlichen Umgebungsstrahlung." },
  { id: "k13", art: "formel", v: "Vor einem Glühstrumpf zählt der Zähler 280 Impulse pro Minute, die Nullrate ist 20. Wie viel Strahlung kommt vom Glühstrumpf?", h: "Zählrate − Nullrate = 280 − 20 = 260 Impulse pro Minute." },
  { id: "k14", art: "fehler", v: "Jonas sagt: „Ohne Probe muss der Zähler 0 anzeigen – sonst ist er kaputt.“ Stimmt das?", h: "Nein. Auch ohne Probe zählt er etwa 20 Impulse pro Minute. Das ist die Nullrate durch die Umgebungsstrahlung." }
]);
