/* Lernkarten zum Modul „Mikrofon und Lautsprecher“ (NT 9, Kommunikationstechnik 1, Modul-id kt-mikrofon). Trainer: 8M/NT/karten.js.
   Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("kt-mikrofon", [
  { id: "k1", art: "begriff", v: "Was macht ein Mikrofon?", h: "Es wandelt Schall (Schallwellen) in ein elektrisches Signal um – in eine Wechselspannung." },
  { id: "k2", art: "begriff", v: "Aus welchen drei Teilen besteht ein Mikrofon vor allem?", h: "Aus einer Membran, einer Spule und einem Dauermagneten." },
  { id: "k3", art: "bild", v: "Wie arbeitet ein Mikrofon? Beschreibe die Schritte.",
    bild: '<svg viewBox="0 0 300 92" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#1f6aa5" stroke-width="2.5" stroke-linecap="round"><path d="M14 30 Q20 46 14 62"/><path d="M24 24 Q32 46 24 68"/></g>' +
      '<rect x="40" y="14" width="196" height="64" rx="14" fill="#eef3f7" stroke="#566674" stroke-width="2"/><path d="M58 22 Q53 46 58 70" fill="none" stroke="#5d6d7e" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="128" y="32" width="38" height="28" fill="#d64541"/><rect x="166" y="32" width="38" height="28" fill="#2e8b57"/>' +
      '<g fill="#c87533" stroke="#8a4b1c" stroke-width="1"><rect x="80" y="26" width="5" height="40" rx="2"/><rect x="88" y="26" width="5" height="40" rx="2"/><rect x="96" y="26" width="5" height="40" rx="2"/><rect x="104" y="26" width="5" height="40" rx="2"/><rect x="112" y="26" width="5" height="40" rx="2"/><rect x="120" y="26" width="5" height="40" rx="2"/><rect x="128" y="26" width="5" height="40" rx="2"/></g>' +
      '<path d="M58 34 H80 M58 58 H80" stroke="#8a99a6" stroke-width="2"/><path d="M236 46 H254" stroke="#15212b" stroke-width="2"/><path d="M254 46 q6 -14 12 0 t12 0 t12 0" fill="none" stroke="#1b8a4b" stroke-width="2.5"/>' +
      '<g font-family="Arial" font-size="12" font-weight="700" fill="#fff" text-anchor="middle"><text x="147" y="51">N</text><text x="185" y="51">S</text></g>' +
      '<g font-family="Arial" font-size="10" font-weight="700" fill="#566674" text-anchor="middle"><text x="17" y="88">Schall</text><text x="58" y="88">Membran</text><text x="104" y="88">Spule</text><text x="166" y="88">Dauermagnet</text><text x="272" y="88">Spannung</text></g></svg>',
    h: "Schallwellen treffen auf die Membran → die Membran schwingt → die Spule ist fest mit ihr verbunden und schwingt im Magnetfeld des Dauermagneten → in der Spule wird eine Wechselspannung induziert → sie geht zum Verstärker." },
  { id: "k4", art: "begriff", v: "Was bedeutet „Induktion“?", h: "Bewegt sich eine Spule in einem Magnetfeld, entsteht in ihr eine elektrische Spannung. Man sagt: Die Spannung wird induziert." },
  { id: "k5", art: "begriff", v: "Was macht ein Lautsprecher?", h: "Er wandelt elektrische Signale (Wechselspannung) in hörbaren Schall um – genau umgekehrt wie ein Mikrofon." },
  { id: "k6", art: "ursache", v: "Wie entsteht im Lautsprecher aus Strom Schall?", h: "Der Strom macht die Spule zum Elektromagneten. Ihre Pole wechseln ständig. Der Dauermagnet zieht sie an und stößt sie ab → Spule und fest verbundene Membran schwingen → die Luft schwingt mit: Schallwellen." },
  { id: "k7", art: "versuch", v: "Ein Lautsprecher wird kurz an eine Batterie angeschlossen. Was passiert – und was, wenn man die Pole vertauscht?", h: "Die Membran springt nach vorn, es knackt. Mit vertauschten Polen springt sie nach hinten." },
  { id: "k8", art: "versuch", v: "Was passiert, wenn man einen Lautsprecher an eine Wechselspannung mit 50 Hz anschließt?", h: "Die Membran schwingt 50-mal in jeder Sekunde vor und zurück. Man hört einen tiefen Brummton." },
  { id: "k9", art: "begriff", v: "Wozu braucht man einen Verstärker?", h: "Das Signal eines Mikrofons ist sehr schwach. Der Verstärker macht es stärker, damit der Lautsprecher laut genug ist." },
  { id: "k10", art: "anwendung", v: "Woraus besteht ein Megafon?", h: "Aus einem Mikrofon, einem Verstärker und einem Lautsprecher in einem tragbaren Gerät (mit Batterie)." },
  { id: "k11", art: "anwendung", v: "Wie arbeitet ein Telefon?", h: "Die Sprechkapsel (Mikrofon) wandelt Schall in Stromschwankungen um, die Hörkapsel (Lautsprecher) macht daraus wieder Schall. Früher lief das Signal durch Kabel, heute meist über Funk." },
  { id: "k12", art: "begriff", v: "Was taten Johann Philipp Reis (1861) und Alexander Graham Bell (1876)?", h: "Reis baute wohl als Erster einen Apparat, der Töne elektrisch an einen anderen Ort übertrug – man verstand aber kaum etwas. Bell baute einen ähnlichen Apparat, ließ ihn patentieren und baute die ersten Telefonverbindungen auf." },
  { id: "k13", art: "vergleich", v: "Woran erkennst du an der Kurve eines Tons, ob er laut oder leise, hoch oder tief ist?", h: "Laut: großer Ausschlag, leise: kleiner Ausschlag. Hoch: viele Schwingungen pro Sekunde (hohe Frequenz), tief: wenige." },
  { id: "k14", art: "transfer", v: "Beim Sportfest spricht die Lehrerin ins Megafon. Was passiert mit ihrer Stimme?", h: "Das Mikrofon wandelt den Schall in eine Wechselspannung um. Der Verstärker macht das Signal stärker. Der Lautsprecher macht daraus wieder Schall – viel lauter als die Stimme allein." }
]);
