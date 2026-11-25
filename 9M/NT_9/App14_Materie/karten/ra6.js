/* Lernkarten zum Modul „Radioaktivität in Medizin und Technik“ (NT 9, Radioaktivität 6, Modul-id ra-anwendung). Trainer: 8M/NT/karten.js.
   Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("ra-anwendung", [
  { id: "k1", art: "begriff", v: "Was ist ein Szintigramm?", h: "Ein Bild, das zeigt, wie sich ein radioaktiver Stoff in einem Organ verteilt hat. Eine Gammakamera misst die Strahlung, ein Computer macht daraus das Bild." },
  { id: "k2", art: "ursache", v: "Warum sammelt sich radioaktives Iod in der Schilddrüse?", h: "Die Schilddrüse braucht Iod für ihre Hormone und holt es aus dem Blut. Radioaktives Iod verhält sich chemisch genau wie normales Iod." },
  { id: "k3", art: "bild", v: "Was zeigt dieses Szintigramm der Schilddrüse?",
    bild: '<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="4" width="160" height="112" rx="8" fill="#0c1420"/>' +
      '<g fill="#f2c94c"><ellipse cx="132" cy="58" rx="17" ry="38" transform="rotate(-12 132 58)"/><ellipse cx="168" cy="58" rx="17" ry="38" transform="rotate(12 168 58)"/><rect x="138" y="72" width="24" height="16" rx="6"/></g>' +
      '<circle cx="126" cy="72" r="10" fill="#0c1420"/></svg>',
    h: "Eine Stelle bleibt dunkel: Dort nimmt das Gewebe kaum Iod auf. Es ist wahrscheinlich krank – die Ärztin untersucht die Stelle genauer." },
  { id: "k4", art: "ursache", v: "Warum nimmt man für ein Szintigramm einen Stoff mit kurzer Halbwertszeit?", h: "Er zerfällt schnell (Iod-123: Hälfte nach etwa 13 Stunden). Nach wenigen Tagen ist fast nichts mehr übrig – der Körper ist nur kurz belastet." },
  { id: "k5", art: "begriff", v: "Was ist eine Strahlentherapie?", h: "Die Bestrahlung von Krebsgeschwüren (Tumoren) mit energiereicher Strahlung. Sie soll die Krebszellen zerstören und das gesunde Gewebe möglichst schonen." },
  { id: "k6", art: "ursache", v: "Warum schadet die Strahlung Krebszellen besonders?", h: "Krebszellen teilen sich sehr schnell. Dadurch sind sie besonders empfindlich gegen Strahlung und werden zerstört." },
  { id: "k7", art: "bild", v: "Warum kommen die Strahlen aus fünf Richtungen?",
    bild: '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg"><ellipse cx="150" cy="65" rx="92" ry="54" fill="#fbe3d3" stroke="#c89a7a" stroke-width="2"/>' +
      '<g stroke="#f2a33a" stroke-width="16" opacity=".35"><line x1="150" y1="2" x2="150" y2="128"/><line x1="62" y1="36" x2="238" y2="94"/><line x1="238" y1="36" x2="62" y2="94"/><line x1="113.6" y1="14.8" x2="186.4" y2="115.2"/><line x1="186.4" y1="14.8" x2="113.6" y2="115.2"/></g>' +
      '<circle cx="150" cy="65" r="11" fill="#8e3b8a"/></svg>',
    h: "Jeder Strahl ist schwach. Nur im Tumor (lila) treffen sich alle – dort ist die Dosis hoch. Das gesunde Gewebe bekommt nur wenig ab." },
  { id: "k8", art: "fehler", v: "Stimmt das? „Die Strahlentherapie hat kein Risiko.“", h: "Falsch. Auch gesundes Gewebe bekommt etwas Strahlung ab, und Strahlung kann selbst Krebs auslösen. Deshalb wird die Strahlenmenge genau berechnet." },
  { id: "k9", art: "anwendung", v: "Wie findet man ein Leck in einer Gasleitung unter der Straße?", h: "Man gibt dem Erdgas radioaktives Xenon bei. Am Leck tritt es aus. Mit dem Geiger-Müller-Zähler geht man die Straße ab – wo die Zählrate am höchsten ist, liegt das Leck. Nur dort wird gegraben." },
  { id: "k10", art: "anwendung", v: "Wie findet man einen Riss oder eine Gasblase in einer Schweißnaht?", h: "Man durchstrahlt die Naht mit γ-Strahlung, dahinter liegt ein Film. Wo Metall fehlt (Riss, Gasblase), kommt mehr Strahlung durch – dort ist eine dunkle Stelle. Das Teil bleibt heil." },
  { id: "k11", art: "vergleich", v: "Röntgen, CT, Szintigramm, MRT – welche Untersuchung arbeitet ohne ionisierende Strahlung?", h: "Das MRT (Kernspintomographie). Es nutzt ein starkes Magnetfeld und Radiowellen. Röntgen, CT und Szintigramm arbeiten mit ionisierender Strahlung." },
  { id: "k12", art: "begriff", v: "Nach welcher Regel setzt man Strahlung in Medizin und Technik ein?", h: "Nur, wenn der Nutzen größer ist als das Risiko – und dann so wenig Strahlung wie möglich." },
  { id: "k13", art: "begriff", v: "Wie schützt man sich vor Strahlung? Nenne drei Regeln.", h: "Abstand halten · abschirmen (zum Beispiel mit Blei) · nur kurz in der Nähe bleiben." },
  { id: "k14", art: "transfer", v: "Warum kann man für ein Szintigramm keinen α-Strahler nehmen?", h: "α-Strahlung kommt nicht durch die Haut nach außen – die Gammakamera könnte sie nicht messen. Und im Körper würde sie das Gewebe besonders stark schädigen." }
]);
