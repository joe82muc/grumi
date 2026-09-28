/* Modul 3 – Netze haben eine Form
   Stunde 3 der Präsentation „Netzwerke verstehen“, Folien 13–23 */
(function () {
  const T = Training.topo;
  const FORMEN = ['Ring', 'Bus', 'Stern', 'Vermascht'];
  const mini = (art, n, name) => '<div>' + T(art, n, { mini: true, w: 120, h: 96, r: 34, alt: name }) + name + '</div>';
  const OHNE = 'Netzwerk-Skizze ohne Beschriftung';

  Training.start({
    nr: 3,
    titel: 'Netze haben eine Form',
    folien: [13, 23],
    intro: 'Ring, Bus, Stern oder vermascht: Jede Form hat Stärken und Schwachstellen. Hier übst du, die Formen zu erkennen, sie zu vergleichen und eine passende auszuwählen.',
    ziele: [
      'Ring, Bus, Stern und vermaschte Netze erkennen.',
      'Stärken und Schwachstellen vergleichen.',
      'eine passende Topologie für ein Beispiel auswählen.'
    ],
    merkMin: 3,
    merk: [
      { t: 'Netzwerktopologien · Folien 14–19',
        html: '<p>Die <b>Topologie</b> beschreibt die Form des Netzwerks.</p>' +
              '<div class="mini-topos">' + mini('ring', 5, 'Ring') + mini('bus', 4, 'Bus') + mini('stern', 5, 'Stern') + mini('masche', 5, 'Vermascht') + '</div>' +
              '<ul><li><b>Ring:</b> Die Daten laufen im Kreis von Gerät zu Gerät.</li>' +
              '<li><b>Bus:</b> Alle Geräte hängen an einem gemeinsamen Kabel. An beiden Enden sitzt ein Abschlusswiderstand.</li>' +
              '<li><b>Stern:</b> Jedes Gerät hat eine eigene Verbindung zum zentralen Gerät, z. B. einem Switch.</li>' +
              '<li><b>Vermascht:</b> Jedes Gerät ist direkt mit jedem anderen verbunden.</li></ul>' },
      { t: 'Topologien vergleichen · Folie 20',
        html: '<table><tr><th></th><th>Stärke</th><th>Schwachstelle</th></tr>' +
              '<tr><th>Ring</th><td>geordnet, kaum Kollisionen</td><td>ein Ausfall kann viel stören</td></tr>' +
              '<tr><th>Bus</th><td>einfacher Aufbau</td><td>Hauptkabel ist kritische Stelle</td></tr>' +
              '<tr><th>Stern</th><td>einzelne Kabel dürfen ausfallen</td><td>Switch oder Hub ist zentral</td></tr>' +
              '<tr><th>Vermascht</th><td>sehr ausfallsicher</td><td>teuer und unübersichtlich</td></tr></table>' },
      { t: 'Netz für den Computerraum · Folien 21–23',
        html: '<p>Für 16 PCs und einen Drucker wird der <b>Stern</b> empfohlen: zuverlässig und stabil, einfach zu erweitern, einfache Fehlersuche, ein Kabelausfall betrifft nur einen PC. Standard in Schulen und Büros.</p>' +
              '<p><b>Schwachstelle:</b> Der zentrale Switch ist ein „Single Point of Failure“. Fällt er aus, sind alle Geräte nicht mehr erreichbar.</p>' +
              '<p><b>Gegenmaßnahme:</b> einen Ersatz-Switch bereithalten, um ihn schnell austauschen zu können.</p>' }
    ],
    teile: [
      /* ---------- A ---------- */
      { kurz: 'Formen erkennen', titel: 'Erkennen: Welche Form hat das Netz?', min: 5, folien: 14,
        hinweis: 'Die Skizzen sind absichtlich anders gezeichnet als in der Präsentation. Achte nur darauf, wie die Geräte verbunden sind.',
        aufgaben: [
          { typ: 'wahl', q: 'Welche Topologie ist das?', svg: T('ring', 6, { alt: OHNE }), opts: FORMEN, ok: 0,
            why: 'Jedes Gerät hat genau zwei Nachbarn, zusammen bilden sie einen geschlossenen Kreis.' },
          { typ: 'wahl', q: 'Welche Topologie ist das?', svg: T('bus', 5, { wechsel: true, alt: OHNE }), opts: FORMEN, ok: 1,
            why: 'Alle Geräte hängen an einem gemeinsamen Kabel mit zwei Enden.' },
          { typ: 'wahl', q: 'Welche Topologie ist das?', svg: T('stern', 5, { alt: OHNE }), opts: FORMEN, ok: 2,
            why: 'Jedes Gerät hat ein eigenes Kabel zum zentralen Gerät in der Mitte.' },
          { typ: 'wahl', q: 'Welche Topologie ist das?', svg: T('masche', 4, { phase: -45, alt: OHNE }), opts: FORMEN, ok: 3,
            why: 'Jedes Gerät ist direkt mit jedem anderen verbunden – auch über die Diagonalen.' },
          { typ: 'wahl', q: 'Welche Topologie ist das?', svg: T('bus', 4, { alt: OHNE }), opts: FORMEN, ok: 1,
            why: 'Ein durchgehendes Hauptkabel, an dem alle Geräte hängen.' },
          { typ: 'wahl', q: 'Welche Topologie ist das?', svg: T('masche', 5, { alt: OHNE }), opts: FORMEN, ok: 3,
            why: 'Von jedem Gerät führt eine Leitung zu jedem anderen Gerät.' },
          { typ: 'wahl', q: 'Welche Topologie ist das?', svg: T('stern', 7, { alt: OHNE }), opts: FORMEN, ok: 2,
            why: 'Alle Leitungen laufen am zentralen Gerät zusammen.' },
          { typ: 'wahl', q: 'Vorsicht, knifflig: Welche Topologie ist das?', svg: T('ring', 4, { phase: -45, alt: OHNE }), opts: FORMEN, ok: 0,
            why: 'Die vier Geräte bilden einen geschlossenen Kreis (hier eckig gezeichnet). Beim vermaschten Netz gäbe es zusätzlich die beiden Diagonalen.' }
        ] },

      /* ---------- B ---------- */
      { kurz: 'Lückentext', titel: 'Wiederholen: Lückentext', min: 5, folien: [14, 20],
        aufgaben: [
          { typ: 'luecken',
            q: 'Setze die passenden Wörter ein. Zwei Wörter im Wortspeicher bleiben übrig.',
            bank: ['jedem', 'Kreis', 'Form', 'teuer', 'Switch', 'gemeinsamen', 'Hauptkabel', 'zentralen', 'ausfallsicher', 'Abschlusswiderstand', 'Router', 'Drucker'],
            saetze: [
              { t: 'Die Topologie beschreibt die {} eines Netzwerks.', a: 'Form' },
              { t: 'Im Ring laufen die Daten im {} von Gerät zu Gerät.', a: 'Kreis' },
              { t: 'Beim Bus hängen alle Geräte an einem {} Kabel.', a: 'gemeinsamen' },
              { t: 'An beiden Enden des Bus-Kabels sitzt ein {}.', a: 'Abschlusswiderstand|Abschlusswiderstaende|Terminierung' },
              { t: 'Beim Bus ist das {} die kritische Stelle.', a: 'Hauptkabel' },
              { t: 'Beim Stern hat jedes Gerät eine eigene Verbindung zum {} Gerät.', a: 'zentralen' },
              { t: 'Das zentrale Gerät im Stern ist zum Beispiel ein {}.', a: 'Switch|Hub' },
              { t: 'Im vermaschten Netz ist jedes Gerät direkt mit {} anderen verbunden.', a: 'jedem' },
              { t: 'Das vermaschte Netz ist sehr {}, weil es mehrere Wege gibt.', a: 'ausfallsicher' },
              { t: 'Dafür ist es {} und unübersichtlich.', a: 'teuer' }
            ] }
        ] },

      /* ---------- C ---------- */
      { kurz: 'Stärken und Schwächen', titel: 'Vergleichen: Welche Topologie ist gemeint?', min: 6, folien: 20,
        aufgaben: [
          { typ: 'kategorien', q: 'Zu welcher Topologie passt die Aussage?',
            kats: FORMEN,
            items: [
              { t: 'geordnet, kaum Kollisionen', k: 'Ring', why: 'Stärke des Rings.' },
              { t: 'ein Ausfall kann viel stören', k: 'Ring', why: 'Schwachstelle des Rings.' },
              { t: 'einfacher Aufbau', k: 'Bus', why: 'Stärke des Busses.' },
              { t: 'das Hauptkabel ist die kritische Stelle', k: 'Bus', why: 'Schwachstelle des Busses.' },
              { t: 'einzelne Kabel dürfen ausfallen', k: 'Stern', why: 'Stärke des Sterns.' },
              { t: 'Switch oder Hub ist zentral', k: 'Stern', why: 'Schwachstelle des Sterns.' },
              { t: 'sehr ausfallsicher', k: 'Vermascht', why: 'Stärke des vermaschten Netzes.' },
              { t: 'teuer und unübersichtlich', k: 'Vermascht', why: 'Schwachstelle des vermaschten Netzes.' },
              { t: 'An beiden Enden sitzt ein Abschlusswiderstand.', k: 'Bus', why: 'Die Enden des gemeinsamen Kabels werden abgeschlossen (Terminierung).' },
              { t: 'Standard in Schulen und Büros', k: 'Stern', why: 'Siehe Folie 22.' },
              { t: 'Die Daten laufen z. B. im Uhrzeigersinn von Gerät zu Gerät.', k: 'Ring', why: 'Siehe Folie 16.' },
              { t: 'Zwischen zwei Geräten gibt es mehrere Wege.', k: 'Vermascht', why: 'Deshalb ist es so ausfallsicher.' }
            ] }
        ] },

      /* ---------- D ---------- */
      { kurz: 'Kabelbruch', titel: 'Anwenden: Was passiert bei einem Kabelbruch?', min: 7, folien: [16, 19],
        hinweis: 'Das rote Kreuz zeigt die Stelle, an der das Kabel gebrochen ist.',
        aufgaben: [
          { typ: 'wahl', q: 'Im Ring ist das Kabel zwischen PC 3 und PC 4 gebrochen. Was passiert?',
            bild: '../bilder/training/ring-stoerung.png', alt: 'Vier PCs im Kreis verbunden, zwischen PC 3 und PC 4 ist ein Kabelbruch markiert.', cap: 'Folie 16 · Ring mit Problemstelle',
            opts: ['Nur PC 4 ist betroffen.',
                   'Der Ring ist unterbrochen – die Kommunikation zwischen den Geräten funktioniert nicht mehr.',
                   'Nichts, die Daten laufen über den Switch.',
                   'Nur der Drucker fällt aus.'],
            ok: 1, why: 'Im Ring laufen die Daten im Kreis. Ist er unterbrochen, kommen sie nicht mehr durch.' },
          { typ: 'wahl', q: 'Im Bus ist das Hauptkabel zwischen PC 2 und PC 3 gebrochen. Was passiert?',
            bild: '../bilder/training/bus-stoerung.png', alt: 'Drei PCs und ein Drucker an einem gemeinsamen Kabel, zwischen PC 2 und PC 3 ist ein Kabelbruch markiert.', cap: 'Folie 17 · Bus mit Problemstelle',
            opts: ['Nur PC 2 ist betroffen.',
                   'Nichts, jedes Gerät hat ein eigenes Kabel.',
                   'Alle Geräte hinter der Bruchstelle, also PC 3 und der Drucker, können nicht mehr kommunizieren.',
                   'Die Daten laufen einfach im Kreis weiter.'],
            ok: 2, why: 'Das gemeinsame Kabel ist unterbrochen. Alles dahinter ist abgeschnitten.' },
          { typ: 'wahl', q: 'Im Stern ist das Kabel von PC 3 zum Switch gebrochen. Was passiert?',
            bild: '../bilder/training/stern-stoerung.png', alt: 'Drei PCs und ein Drucker mit eigenen Kabeln an einem Switch, das Kabel von PC 3 ist gebrochen.', cap: 'Folie 18 · Stern mit Problemstelle',
            opts: ['Das ganze Netzwerk fällt aus.',
                   'PC 3 und der Drucker fallen aus.',
                   'Der Switch schaltet sich ab.',
                   'Nur PC 3 hat keine Verbindung mehr. Die anderen arbeiten weiter.'],
            ok: 3, why: 'PC 1, PC 2 und der Drucker haben eigene Kabel zum Switch.' },
          { typ: 'wahl', q: 'Im vermaschten Netz ist die Verbindung zwischen PC 1 und PC 4 gebrochen. Kann PC 1 trotzdem Daten an PC 4 schicken?',
            bild: '../bilder/training/vermascht-stoerung.png', alt: 'Vier PCs, jeder mit jedem verbunden. Die Diagonale zwischen PC 1 und PC 4 ist gebrochen.', cap: 'Folie 19 · Vermaschtes Netz mit Problemstelle',
            opts: ['Ja, zum Beispiel über PC 2: PC 1 → PC 2 → PC 4.',
                   'Nein, PC 4 ist jetzt abgeschnitten.',
                   'Nur, wenn man einen Switch einbaut.',
                   'Nein, das ganze Netz fällt aus.'],
            ok: 0, why: 'Es gibt mehrere Wege zwischen den Geräten. Darum ist das vermaschte Netz so ausfallsicher.' },
          { typ: 'wahl', q: 'Welche Stelle ist im Stern die gefährlichste?',
            opts: ['das Kabel zum Drucker', 'das Kabel von PC 1', 'der zentrale Switch', 'der Bildschirm von PC 2'],
            ok: 2, why: 'Fällt der Switch aus, ist kein Gerät mehr erreichbar.' },
          { typ: 'wahl', q: 'In welcher Topologie richtet ein einzelner Kabelbruch den kleinsten Schaden an?',
            opts: FORMEN, ok: 3,
            why: 'Im vermaschten Netz gibt es andere Wege – kein Gerät verliert die Verbindung. Im Stern verliert immerhin ein Gerät die Verbindung.' }
        ] },

      /* ---------- E ---------- */
      { kurz: 'Kabel zählen', titel: 'Anwenden: Warum ist vermascht so teuer?', min: 4, folien: [19, 20],
        aufgaben: [
          { typ: 'figur', svg: T('masche', 4, { phase: -45, labels: true, alt: 'Vier PCs, jeder ist direkt mit jedem anderen verbunden.' }),
            cap: 'Ein vermaschtes Netz mit 4 PCs' },
          { typ: 'wahl', q: 'Zähle: Wie viele Kabel braucht ein vermaschtes Netz mit 4 PCs?',
            opts: ['3', '4', '6', '8'], ok: 2,
            why: 'PC1–PC2, PC1–PC3, PC1–PC4, PC2–PC3, PC2–PC4, PC3–PC4: 6 Kabel.' },
          { typ: 'wahl', q: 'Und wie viele Kabel braucht ein Stern mit 4 PCs und einem Switch?',
            opts: ['3', '4', '6', '8'], ok: 1,
            why: 'Jeder PC braucht genau ein Kabel zum Switch: 4 Kabel.' },
          { typ: 'figur', svg: T('masche', 5, { labels: true, alt: 'Fünf PCs, jeder ist direkt mit jedem anderen verbunden.' }),
            cap: 'Ein fünfter PC kommt dazu' },
          { typ: 'wahl', q: 'Ein fünfter PC kommt dazu. Wie viele Kabel braucht das vermaschte Netz jetzt?',
            opts: ['5', '8', '10', '12'], ok: 2,
            why: 'Der neue PC braucht 4 neue Kabel zu allen anderen: 6 + 4 = 10. Im Stern wären es nur 5.' },
          { typ: 'wahl', q: 'Was erklären diese Zahlen?',
            opts: ['Warum der Bus so ausfallsicher ist.',
                   'Warum ein vermaschtes Netz teuer und unübersichtlich ist.',
                   'Warum der Ring keinen Abschlusswiderstand braucht.',
                   'Warum der Stern keinen Switch braucht.'],
            ok: 1, why: 'Mit jedem neuen Gerät kommen viele Kabel dazu.' }
        ] },

      /* ---------- F ---------- */
      { kurz: 'Computerraum', titel: 'Entscheiden: Ein Netz für den Computerraum', min: 7, folien: [21, 23],
        hinweis: 'Im Computerraum stehen 16 PCs und ein Netzwerkdrucker. So könnte das Netz aussehen:',
        aufgaben: [
          { typ: 'figur', bild: '../bilder/training/computerraum.png',
            alt: 'Plan: 16 PCs, ein Netzwerkdrucker und ein Router sind jeweils mit einem eigenen Kabel an einen Switch angeschlossen. Der Router führt ins Internet.',
            cap: 'Folie 22 · Netzwerk für 16 PCs und 1 Drucker' },
          { typ: 'wahl', q: 'Welche Topologie zeigt der Plan?', opts: FORMEN, ok: 2,
            why: 'Jedes Gerät hat ein eigenes Kabel zum zentralen Switch.' },
          { typ: 'kategorien', q: 'Warum ist der Stern hier eine gute Wahl? Stimmt die Begründung?',
            kats: ['stimmt', 'stimmt nicht'],
            items: [
              { t: 'Er ist zuverlässig und stabil.', k: 'stimmt' },
              { t: 'Er lässt sich einfach um weitere PCs erweitern.', k: 'stimmt' },
              { t: 'Die Fehlersuche ist einfach.', k: 'stimmt' },
              { t: 'Ein Kabelausfall betrifft nur einen PC.', k: 'stimmt' },
              { t: 'Er braucht gar kein zentrales Gerät.', k: 'stimmt nicht', why: 'Der Switch ist das zentrale Gerät.' },
              { t: 'Jeder PC ist direkt mit jedem anderen PC verbunden.', k: 'stimmt nicht', why: 'Das wäre ein vermaschtes Netz.' }
            ] },
          { typ: 'wahl', q: 'Wie viele Geräte müssen am Switch angeschlossen werden?',
            opts: ['16', '17', '18', '24'], ok: 2,
            why: '16 PCs + 1 Drucker + 1 Router = 18 Anschlüsse. Ein Switch mit 16 Ports reicht also nicht. Mit 24 Ports bleibt noch Platz für weitere Geräte.' },
          { typ: 'wahl', q: 'Ein Kabel zu PC 7 ist kaputt. Was passiert?',
            opts: ['Alle PCs fallen aus.', 'PC 1 bis PC 8 fallen aus.', 'Nur PC 7 hat keine Verbindung mehr.', 'Nur der Drucker fällt aus.'],
            ok: 2, why: 'Im Stern hat jeder PC sein eigenes Kabel.' },
          { typ: 'wahl', q: 'Was ist die Schwachstelle dieser Lösung?',
            opts: ['Die Kabel sind zu kurz.',
                   'Der Drucker bremst das Netz aus.',
                   'Es sind zu viele PCs für einen Stern.',
                   'Der zentrale Switch: Fällt er aus, sind alle 16 PCs und der Drucker nicht mehr erreichbar.'],
            ok: 3, why: 'Man nennt das „Single Point of Failure“ – ein einzelner Punkt, an dem alles hängt.' },
          { typ: 'wahl', q: 'Welche Gegenmaßnahme passt?',
            opts: ['Einen Ersatz-Switch bereithalten, um ihn schnell austauschen zu können.',
                   'Alle PCs an ein gemeinsames Kabel hängen.',
                   'Den Router weglassen.',
                   'Jeden Tag alle Kabel neu einstecken.'],
            ok: 0, why: 'Folie 23: Ersatzgerät bereithalten, Redundanz einplanen.' }
        ] },

      /* ---------- G ---------- */
      { kurz: 'Erklären', titel: 'Erklären wie in der Probe', min: 8,
        hinweis: 'Schreibe zuerst selbst eine Antwort in ganzen Sätzen, dann vergleiche mit der Musterlösung.',
        aufgaben: [
          { typ: 'frei', q: 'Im Computerraum stehen 16 PCs und ein Drucker. Welche Topologie wählst du? Begründe mit zwei Argumenten.',
            punkte: [
              { t: 'Du wählst die Stern-Topologie.', k: ['stern'] },
              { t: 'Zwei Argumente, z. B. zuverlässig, leicht erweiterbar, einfache Fehlersuche, ein Kabelausfall betrifft nur einen PC.',
                k: ['zuverlaessig', 'stabil', 'erweiter', 'fehlersuche', 'fehler finden', 'standard', 'eigenes kabel', 'eigene kabel', 'eigene verbindung', 'nur einen', 'nur ein ', 'nur der', 'nur dieser', 'einzeln'], mind: 2 }
            ],
            muster: 'Ich wähle die Stern-Topologie. Jeder PC bekommt ein eigenes Kabel zum zentralen Switch. Fällt ein Kabel aus, betrifft das nur diesen einen PC. Außerdem ist die Fehlersuche einfach und man kann das Netz leicht um weitere PCs erweitern.' },
          { typ: 'frei', q: 'Nenne eine Schwachstelle der Stern-Topologie und eine passende Gegenmaßnahme.',
            punkte: [
              { t: 'Schwachstelle: das zentrale Gerät (Switch).', k: ['switch', '\\bhub', 'zentral', 'mitte'] },
              { t: 'Fällt es aus, ist kein Gerät mehr erreichbar.', k: ['faellt', 'ausfall', 'kaputt', 'defekt', 'alle', 'keiner', 'kein geraet', 'nicht mehr'] },
              { t: 'Gegenmaßnahme: einen Ersatz-Switch bereithalten.', k: ['ersatz', 'reserve', 'zweite', 'redundan', 'austausch', 'backup'] }
            ],
            muster: 'Die Schwachstelle ist der zentrale Switch. Fällt er aus, sind alle Geräte nicht mehr erreichbar („Single Point of Failure“). Gegenmaßnahme: Man hält einen Ersatz-Switch bereit, um den defekten schnell austauschen zu können.' },
          { typ: 'frei', q: 'Vergleiche Bus und Stern: Was passiert jeweils, wenn ein Kabel bricht?',
            zeilen: 5,
            punkte: [
              { t: 'Bus: Das gemeinsame Hauptkabel ist unterbrochen.', k: ['hauptkabel', 'gemeinsam', 'unterbrochen'] },
              { t: 'Bus: Alle Geräte hinter der Bruchstelle können nicht mehr kommunizieren.', k: ['hinter', 'dahinter', 'mehrere geraete', 'viele', 'alle geraete'] },
              { t: 'Stern: Nur das eine Gerät mit dem kaputten Kabel ist betroffen.', k: ['nur ein', 'nur das', 'nur der', 'nur dieser', 'nur diese', 'einzeln', 'eigenes kabel', 'die anderen'] }
            ],
            muster: 'Beim Bus hängen alle Geräte an einem gemeinsamen Hauptkabel. Bricht es, können alle Geräte hinter der Bruchstelle nicht mehr kommunizieren. Beim Stern hat jedes Gerät ein eigenes Kabel zum Switch. Bricht eines, ist nur dieses eine Gerät betroffen – die anderen arbeiten weiter.' }
        ] }
    ]
  });
})();
