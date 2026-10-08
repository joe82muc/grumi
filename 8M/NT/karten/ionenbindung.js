/* Lernkarten zum Modul „Alkalimetalle, Halogene und die Ionenbindung“ (NT 8). Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
(function(){
  // kleines Schalenmodell als SVG-Text für die Bildkarten (Elektronen je Schale: 2 | 8 | 7 …)
  var RAD = [24, 44, 64], SL = {1: [0], 2: [0, 4], 7: [0, 1, 2, 3, 5, 6, 7], 8: [0, 1, 2, 3, 4, 5, 6, 7]};
  function atom(sh, sym, leer){
    var s = '<svg viewBox="-80 -80 160 160" xmlns="http://www.w3.org/2000/svg">';
    sh.forEach(function (n, k) { s += '<circle r="' + RAD[k] + '" fill="none" stroke="#9fb3c8" stroke-width="1.5"/>'; });
    s += '<circle r="14" fill="#4a5a8a"/><text y="4" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">' + sym + "</text>";
    sh.forEach(function (n, k) {
      var sl = k === 0 ? [2, 6] : (SL[n] || []);
      sl.forEach(function (q) { var a = Math.PI / 4 * q; s += '<circle cx="' + (RAD[k] * Math.cos(a)).toFixed(1) + '" cy="' + (RAD[k] * Math.sin(a)).toFixed(1) + '" r="4.5" fill="#2f6fdb" stroke="#fff" stroke-width="1"/>'; });
    });
    if (leer) s += '<circle cx="' + (-RAD[sh.length - 1]) + '" cy="0" r="5.5" fill="none" stroke="#2f6fdb" stroke-width="1.5" stroke-dasharray="3 2"/>';
    return s + "</svg>";
  }
  var gitter = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">';
  for (var x = -2; x <= 2; x++) for (var y = -1; y <= 1; y++) {
    var na = (x + y) % 2 === 0;
    gitter += '<circle cx="' + (100 + x * 34) + '" cy="' + (60 + y * 34) + '" r="' + (na ? 9 : 14) + '" fill="' + (na ? "#6b7fd7" : "#2fa86b") + '"/><text x="' + (100 + x * 34) + '" y="' + (65 + y * 34) + '" text-anchor="middle" font-size="' + (na ? 13 : 16) + '" font-weight="800" fill="#fff">' + (na ? "+" : "−") + "</text>";
  }
  gitter += "</svg>";

  NT8Karten.satz("ionenbindung", [
    { id: "k1", art: "begriff", v: "Was sind Alkalimetalle?", h: "Weiche, silbrig glänzende, sehr reaktionsfreudige Metalle der 1. Hauptgruppe, zum Beispiel Lithium und Natrium. Sie haben 1 Außenelektron." },
    { id: "k2", art: "begriff", v: "Was sind Halogene?", h: "Giftige, sehr reaktionsfreudige Nichtmetalle der 7. Hauptgruppe, zum Beispiel Fluor und Chlor. Sie haben 7 Außenelektronen." },
    { id: "k3", art: "versuch", v: "Lehrerversuch: Wie sieht die frische Schnittfläche von Natrium aus?", h: "Silbrig glänzend. An der Luft läuft sie schnell an und wird matt grau." },
    { id: "k4", art: "anwendung", v: "Warum bewahrt man Natrium unter Paraffinöl auf?", h: "Es reagiert schnell mit Luft und Wasser. Das Öl hält beides fern." },
    { id: "k5", art: "versuch", v: "Lehrerversuch: Lithium und Natrium kommen ins Wasser. Was ist der Unterschied?", h: "Beide reagieren, Natrium aber heftiger als Lithium. Natrium schmilzt dabei zu einer Kugel." },
    { id: "k6", art: "begriff", v: "Was besagt die Edelgasregel?", h: "Atome streben eine volle Außenschale an wie die Edelgase. Dazu geben sie Elektronen ab oder nehmen welche auf." },
    { id: "k7", art: "ursache", v: "Warum reagieren Edelgase kaum?", h: "Sie haben schon eine volle Außenschale: Helium 2, Neon und Argon 8 Außenelektronen." },
    { id: "k8", art: "bild", v: "Was macht dieses Atom, um eine volle Außenschale zu bekommen?", bild: atom([2, 8, 1], "Na"),
      h: "Natrium (2 | 8 | 1) gibt sein Außenelektron ab. Es wird zum Na⁺-Ion (2 | 8)." },
    { id: "k9", art: "bild", v: "Was macht dieses Atom? Der gestrichelte Kreis zeigt den freien Platz.", bild: atom([2, 8, 7], "Cl", true),
      h: "Chlor (2 | 8 | 7) nimmt 1 Elektron auf. Es wird zum Cl⁻-Ion (2 | 8 | 8)." },
    { id: "k10", art: "ursache", v: "Was passiert bei der Reaktion von Natrium mit Chlor?", h: "Jedes Natrium-Atom gibt ein Elektron an ein Chlor-Atom ab. Es entstehen Na⁺ und Cl⁻." },
    { id: "k11", art: "begriff", v: "Was ist die Ionenbindung?", h: "Die Anziehung zwischen positiven und negativen Ionen. Sie hält die Ionen im Kristall zusammen." },
    { id: "k12", art: "bild", v: "Was zeigt das Bild, und warum sind Salzkristalle würfelförmig?", bild: gitter,
      h: "Ein Ionengitter: Na⁺ und Cl⁻ wechseln sich regelmäßig ab. Die regelmäßige Anordnung ergibt die Würfelform." },
    { id: "k13", art: "vergleich", v: "Natrium und Chlor gegen Natriumchlorid: Was ist der Unterschied?", h: "Natrium ist ein gefährliches Metall, Chlor ein giftiges Gas, Natriumchlorid harmloses Speisesalz. Die Eigenschaften sind völlig anders." },
    { id: "k14", art: "transfer", v: "Warum ist Speisesalz ungefährlich, obwohl es aus Natrium und Chlor entsteht?", h: "Es ist ein neuer Stoff aus Ionen mit voller Außenschale – nicht mehr aus reaktionsfreudigen Atomen." },
    { id: "k15", art: "fehler", v: "Finde den Fehler: „Chlor ist ein weiches, silbriges Metall.“", h: "Falsch. Chlor ist ein giftiges, gelbgrünes Gas. Das weiche Metall ist Natrium." },
    { id: "k16", art: "formel", v: "Stelle die Formelgleichung für Natrium + Chlor auf. Chlor kommt als Cl₂ vor.", h: "2 Na + Cl₂ → 2 NaCl", m: true },
    { id: "k17", art: "begriff", v: "Kation oder Anion? Na⁺ und Cl⁻", h: "Na⁺ ist ein Kation (positives Ion), Cl⁻ ist ein Anion (negatives Ion).", m: true },
    { id: "k18", art: "ursache", v: "Warum reagiert Natrium heftiger als Lithium?", h: "Beim Natrium ist das Außenelektron weiter vom Kern entfernt und wird leichter abgegeben.", m: true }
  ]);
})();
