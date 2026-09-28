/* Modul 2 – So reisen Daten
   Stunde 2 der Präsentation „Netzwerke verstehen“, Folien 9–12 */
(function () {
  /* Paketkarten wie beim Paketpost-Spiel (Folie 12) */
  function pakete(liste) {
    return '<div class="pakete">' + liste.map(p =>
      '<div class="paket"><div class="p-kopf"><span>Paket ' + p.nr + '</span></div>' +
      '<div class="p-adr">Von: ' + p.von + ' · An: ' + p.an + '</div>' +
      '<div class="p-inh">„' + p.text + '“</div></div>').join('') + '</div>';
  }

  /* Netz mit mehreren Wegen von A nach B (wie Folie 11) */
  function wege(o) {
    o = o || {};
    const knoten = [
      { id: 'A', typ: 'pc', x: 60, y: 150, label: 'A' },
      { id: '1', typ: 'punkt', x: 200, y: 70, label: '1' },
      { id: '2', typ: 'punkt', x: 200, y: 230, label: '2' },
      { id: '3', typ: 'punkt', x: 360, y: 70, label: '3' },
      { id: '4', typ: 'punkt', x: 360, y: 230, label: '4' },
      { id: 'B', typ: 'pc', x: 500, y: 150, label: 'B' }
    ];
    const kanten = [['A', '1'], ['A', '2'], ['1', '3'], ['1', '4'], ['2', '4'], ['3', 'B'], ['4', 'B']];
    if (o.kaputt) kanten.forEach(k => { if (k[0] === o.kaputt[0] && k[1] === o.kaputt[1]) k[2] = { kaputt: true }; });
    if (o.aus) knoten.forEach(k => { if (k.id === o.aus) k.aus = true; });
    return Training.netz({ w: 560, h: 290, knoten, kanten, alt: o.alt });
  }

  Training.start({
    nr: 2,
    titel: 'So reisen Daten',
    folien: [9, 12],
    intro: 'Eine Datei reist nicht am Stück durchs Netz, sondern in vielen kleinen Paketen. Hier übst du, warum das so ist und wie die Pakete wieder zusammenfinden.',
    ziele: [
      'erklären, warum Dateien in Pakete geteilt werden.',
      'verschiedene Paketwege im Netz nachvollziehen.',
      'ankommende Pakete wieder richtig zusammensetzen.'
    ],
    merkMin: 3,
    merk: [
      { t: 'Daten reisen in Paketen · Folie 10',
        html: '<p>Eine Datei wird <b>zerlegt</b>, verschickt und am Ziel wieder <b>zusammengesetzt</b>.</p>' +
              '<p>Jedes Paket bekommt eine <b>Adresse</b> (Wohin soll es?) und eine <b>Nummer</b> (Welches Stück ist es?).</p>' +
              '<p>Am Ziel sortiert Computer B die Pakete und baut daraus wieder die Datei.</p>' },
      { t: 'Paketwege · Folie 11',
        html: '<p><b>Warum sortieren?</b> Pakete kommen nicht immer in der richtigen Reihenfolge an. Die Nummer hilft beim Zusammensetzen.</p>' +
              '<p><b>Warum das praktisch ist:</b> Wenn ein Weg gestört ist, kann das Netzwerk einen anderen Weg nutzen. Dadurch bleibt die Verbindung stabiler.</p>' },
      { t: 'Paketpost im Klassenraum · Folie 12',
        html: '<ol><li>Nachricht in vier nummerierte Teile teilen.</li><li>Auf jeden Teil Absender und Empfänger schreiben.</li>' +
              '<li>Teile über verschiedene Personen schicken – ein Paket wartet unterwegs.</li><li>Nachricht in der richtigen Reihenfolge zusammensetzen.</li></ol>' +
              '<p>Fehlt ein Paket, ist die Nachricht unvollständig. Es muss noch einmal geschickt werden.</p>' }
    ],
    teile: [
      /* ---------- A ---------- */
      { kurz: 'Lückentext', titel: 'Wiederholen: Lückentext', min: 6, folien: [10, 11],
        aufgaben: [
          { typ: 'luecken',
            q: 'Setze die passenden Wörter ein. Zwei Wörter im Wortspeicher bleiben übrig.',
            bank: ['Reihenfolge', 'Pakete', 'Empfänger', 'Nummer', 'stabiler', 'zusammengesetzt', 'Adresse', 'Weg', 'sortiert', 'Absender', 'Kabel', 'schneller'],
            saetze: [
              { t: 'Bevor eine Datei verschickt wird, wird sie in viele kleine {} zerlegt.', a: 'Pakete|Datenpakete' },
              { t: 'Jedes Paket bekommt eine {}, damit klar ist, wohin es soll.', a: 'Adresse|Zieladresse' },
              { t: 'Jedes Paket bekommt außerdem eine {}, damit man weiß, welches Stück es ist.', a: 'Nummer' },
              { t: 'Am Ziel {} Computer B die Pakete nach ihrer Nummer.', a: 'sortiert|ordnet' },
              { t: 'Danach wird aus den Paketen wieder die Datei {}.', a: 'zusammengesetzt|zusammengebaut' },
              { t: 'Pakete kommen nicht immer in der richtigen {} an.', a: 'Reihenfolge' },
              { t: 'Wenn ein Weg gestört ist, kann das Netzwerk einen anderen {} nutzen.', a: 'Weg' },
              { t: 'Dadurch bleibt die Verbindung {}.', a: 'stabiler|stabil' },
              { t: 'Beim Paketpost-Spiel steht auf jedem Teil der {} – also wer das Paket losgeschickt hat.', a: 'Absender' },
              { t: 'Außerdem steht dort der {} – also wer das Paket bekommen soll.', a: 'Empfänger|Empfaenger' }
            ] }
        ] },

      /* ---------- B ---------- */
      { kurz: 'Weg einer Datei', titel: 'Ordnen: Der Weg einer Datei', min: 3, folien: 10,
        aufgaben: [
          { typ: 'ordnen', q: 'Computer A schickt eine Datei an Computer B. Bringe die Schritte in die richtige Reihenfolge.',
            schritte: [
              'Computer A zerlegt die Datei in Pakete.',
              'Jedes Paket bekommt eine Adresse und eine Nummer.',
              'Die Pakete werden losgeschickt und nehmen verschiedene Wege.',
              'Die Pakete kommen bei Computer B an – manchmal durcheinander.',
              'Computer B sortiert die Pakete nach ihrer Nummer.',
              'Computer B setzt die Pakete wieder zur Datei zusammen.'
            ],
            why: 'Zerlegen → beschriften → verschicken → ankommen → sortieren → zusammensetzen.' }
        ] },

      /* ---------- C ---------- */
      { kurz: 'Richtig oder falsch?', titel: 'Verstehen: Richtig oder falsch?', min: 5, folien: [10, 11],
        aufgaben: [
          { typ: 'kategorien', q: 'Stimmt die Aussage?',
            kats: ['richtig', 'falsch'],
            items: [
              { t: 'Eine Datei wird immer als ein einziges großes Stück verschickt.', k: 'falsch', why: 'Sie wird in viele Pakete zerlegt.' },
              { t: 'Jedes Paket bekommt eine Adresse und eine Nummer.', k: 'richtig', why: 'So steht es auf Folie 10.' },
              { t: 'Alle Pakete einer Datei nehmen immer denselben Weg.', k: 'falsch', why: 'Die Pakete können verschiedene Wege nehmen.' },
              { t: 'Pakete können in einer anderen Reihenfolge ankommen, als sie losgeschickt wurden.', k: 'richtig', why: 'Deshalb braucht jedes Paket eine Nummer.' },
              { t: 'Die Nummer hilft dem Empfänger, die Datei richtig zusammenzusetzen.', k: 'richtig', why: 'Er sortiert die Pakete nach der Nummer.' },
              { t: 'Fällt ein Weg aus, ist die Verbindung sofort komplett kaputt.', k: 'falsch', why: 'Das Netzwerk kann einen anderen Weg nutzen.' },
              { t: 'Die Adresse sagt, wohin das Paket soll.', k: 'richtig', why: 'Ohne Adresse wüsste das Paket nicht, wohin.' },
              { t: 'Fehlt ein Paket, kann der Empfänger die Datei trotzdem vollständig lesen.', k: 'falsch', why: 'Dann fehlt ein Stück. Das Paket muss noch einmal geschickt werden.' },
              { t: 'Dateien werden zerlegt, damit man keine Adresse mehr braucht.', k: 'falsch', why: 'Im Gegenteil: Jedes einzelne Paket braucht eine Adresse.' },
              { t: 'Weil es mehrere Wege gibt, bleibt die Verbindung stabiler.', k: 'richtig', why: 'Ist ein Weg gestört, nehmen die Pakete einen anderen.' }
            ] }
        ] },

      /* ---------- D ---------- */
      { kurz: 'Paketpost', titel: 'Anwenden: Paketpost zusammensetzen', min: 7, folien: 12,
        aufgaben: [
          { typ: 'figur', text: '<b>Fall 1:</b> Tom schickt Lea eine Nachricht in vier Paketen. So kommen die Pakete bei Lea an:',
            html: pakete([
              { nr: '3 von 4', von: 'Tom', an: 'Lea', text: 'am Haupteingang' },
              { nr: '1 von 4', von: 'Tom', an: 'Lea', text: 'Treffen wir uns' },
              { nr: '4 von 4', von: 'Tom', an: 'Lea', text: 'der Schule?' },
              { nr: '2 von 4', von: 'Tom', an: 'Lea', text: 'morgen um acht' }
            ]), cap: 'Die Pakete in der Reihenfolge, in der sie ankommen' },
          { typ: 'ordnen', q: 'Setze Toms Nachricht wieder zusammen. Schau dafür auf die Nummern der Pakete oben.',
            schritte: ['„Treffen wir uns“', '„morgen um acht“', '„am Haupteingang“', '„der Schule?“'],
            start: [2, 0, 3, 1],
            why: 'Die Nachricht lautet: „Treffen wir uns morgen um acht am Haupteingang der Schule?“' },
          { typ: 'wahl', q: 'Woran erkennt Lea die richtige Reihenfolge?',
            opts: ['an der Länge der Texte', 'an der Nummer auf jedem Paket', 'am Absender', 'daran, welches Paket zuerst ankommt'],
            ok: 1, why: 'Die Nummer (z. B. „2 von 4“) zeigt, welches Stück es ist – egal, wann das Paket ankommt.' },
          { typ: 'figur', text: '<b>Fall 2:</b> Ali schickt Ben eine Nachricht. Bei Ben liegen jetzt diese Pakete:',
            html: pakete([
              { nr: '2 von 5', von: 'Ali', an: 'Ben', text: 'kommst du' },
              { nr: '5 von 5', von: 'Ali', an: 'Ben', text: 'mit?' },
              { nr: '3 von 4', von: 'Ali', an: 'Mia', text: 'die Hausaufgabe' },
              { nr: '1 von 5', von: 'Ali', an: 'Ben', text: 'Hallo Ben,' },
              { nr: '4 von 5', von: 'Ali', an: 'Ben', text: 'ins Kino' }
            ]), cap: 'Die Pakete bei Ben' },
          { typ: 'wahl', q: 'Ein Paket gehört gar nicht zu Bens Nachricht. Welches?',
            opts: ['das Paket „2 von 5“', 'das Paket „5 von 5“', 'das Paket „3 von 4“', 'das Paket „1 von 5“'],
            ok: 2, why: 'Auf diesem Paket steht ein anderer Empfänger: Mia. Die Adresse zeigt, wohin ein Paket gehört.' },
          { typ: 'wahl', q: 'Welches Paket fehlt bei Ben noch?',
            opts: ['Paket 1', 'Paket 3', 'Paket 5', 'Es fehlt keines.'],
            ok: 1, why: 'Ben hat die Pakete 1, 2, 4 und 5 von 5. Paket 3 fehlt.' },
          { typ: 'wahl', q: 'Was bedeutet das für Ben, solange Paket 3 fehlt?',
            opts: ['Ben kann die Nachricht trotzdem vollständig lesen.',
                   'Das ganze Netzwerk fällt aus.',
                   'Die Nachricht ist unvollständig. Das fehlende Paket muss noch einmal geschickt werden.',
                   'Ben bekommt stattdessen das Paket von Mia.'],
            ok: 2, why: 'Ohne Paket 3 fehlt ein Stück der Nachricht. Ben merkt das an der fehlenden Nummer.' }
        ] },

      /* ---------- E ---------- */
      { kurz: 'Paketwege', titel: 'Anwenden: Welchen Weg nimmt das Paket?', min: 8, folien: 11,
        hinweis: 'Ein Paket kann nur über Leitungen laufen, die im Bild eingezeichnet sind.',
        aufgaben: [
          { typ: 'figur', svg: wege({ alt: 'Netz mit Computer A links, Computer B rechts und den Stationen 1 bis 4 dazwischen. Leitungen: A–1, A–2, 1–3, 1–4, 2–4, 3–B und 4–B.' }),
            cap: 'Ein Netz mit mehreren Wegen von A nach B' },
          { typ: 'wahl', q: 'Welcher Weg führt von A nach B?',
            opts: ['A → 3 → B', 'A → 2 → 3 → B', 'A → 1 → 3 → B', 'A → B'],
            ok: 2, why: 'A–1, 1–3 und 3–B sind verbunden. Zwischen A und 3 oder 2 und 3 gibt es keine Leitung.' },
          { typ: 'mehrfach', q: 'Wähle alle Wege aus, die von A nach B möglich sind.',
            opts: ['A → 1 → 3 → B', 'A → 1 → 4 → B', 'A → 2 → 4 → B', 'A → 2 → 3 → B', 'A → 4 → B'],
            ok: [0, 1, 2], why: 'Zwischen 2 und 3 sowie zwischen A und 4 gibt es keine Leitung.' },
          { typ: 'figur', svg: wege({ kaputt: ['1', '3'], alt: 'Dasselbe Netz, die Leitung zwischen 1 und 3 ist mit einem roten Kreuz als gestört markiert.' }),
            cap: 'Störung: Die Leitung zwischen 1 und 3 ist unterbrochen.' },
          { typ: 'wahl', q: 'Die Leitung zwischen 1 und 3 ist gestört. Welcher Weg funktioniert trotzdem?',
            opts: ['A → 1 → 3 → B', 'A → 3 → B', 'Keiner – die Verbindung ist weg.', 'A → 2 → 4 → B'],
            ok: 3, why: 'Das Netzwerk nutzt einfach einen anderen Weg, zum Beispiel über 2 und 4 (oder über 1 und 4).' },
          { typ: 'figur', svg: wege({ aus: '4', alt: 'Dasselbe Netz, Station 4 ist ausgefallen und mit einem roten Kreuz markiert.' }),
            cap: 'Störung: Station 4 ist ausgefallen.' },
          { typ: 'wahl', q: 'Jetzt ist Station 4 ausgefallen. Welcher Weg bleibt übrig?',
            opts: ['A → 2 → 4 → B', 'A → 1 → 3 → B', 'A → 1 → 4 → B', 'A → 2 → B'],
            ok: 1, why: 'Alle Wege über 4 fallen weg. Übrig bleibt A → 1 → 3 → B.' },
          { typ: 'wahl', q: 'Was zeigen dir diese Aufgaben?',
            opts: ['Pakete brauchen immer genau einen festen Weg.',
                   'Weil es mehrere Wege gibt, bleibt die Verbindung auch bei einer Störung bestehen.',
                   'Je mehr Wege es gibt, desto öfter geht ein Paket verloren.',
                   'Eine einzige Störung legt immer das ganze Netz lahm.'],
            ok: 1, why: 'Folie 11: Wenn ein Weg gestört ist, kann das Netzwerk einen anderen Weg nutzen. Dadurch bleibt die Verbindung stabiler.' },
          { typ: 'wahl', q: 'Paket 1 nimmt einen kurzen Weg. Paket 2 muss unterwegs warten. Was kann passieren?',
            opts: ['Paket 2 kommt später an als Paket 3 – die Nummer hilft beim Sortieren.',
                   'Paket 2 geht auf jeden Fall verloren.',
                   'Paket 2 überholt alle anderen Pakete.',
                   'Die Datei wird dadurch kleiner.'],
            ok: 0, why: 'Genau das habt ihr beim Paketpost-Spiel gesehen: Ein wartendes Paket kommt zu spät, aber mit der Nummer lässt es sich richtig einsortieren.' }
        ] },

      /* ---------- F ---------- */
      { kurz: 'Fragen zum Anklicken', titel: 'Verstehen: Fragen zum Anklicken', min: 4, folien: [10, 11],
        aufgaben: [
          { typ: 'wahl', q: 'Warum bekommt jedes Paket eine Nummer?',
            opts: ['Damit das Paket schneller ist.',
                   'Damit der Empfänger die Pakete in die richtige Reihenfolge bringen kann.',
                   'Damit das Paket den kürzesten Weg findet.',
                   'Damit man weiß, wer das Paket geschickt hat.'],
            ok: 1, why: 'Die Nummer hilft beim Zusammensetzen.' },
          { typ: 'wahl', q: 'Warum bekommt jedes Paket eine Adresse?',
            opts: ['Damit es richtig sortiert wird.', 'Damit es kleiner wird.', 'Damit klar ist, wohin es soll.', 'Damit es nicht verloren geht.'],
            ok: 2, why: 'Ohne Adresse weiß ein Paket nicht, wohin es soll.' },
          { typ: 'wahl', q: 'Warum kommen Pakete manchmal durcheinander an?',
            opts: ['Weil der Empfänger sie falsch herum liest.',
                   'Weil jedes Paket eine andere Adresse hat.',
                   'Weil die Datei zu klein ist.',
                   'Weil sie verschiedene Wege nehmen und manche unterwegs warten müssen.'],
            ok: 3, why: 'Verschiedene Wege sind unterschiedlich schnell.' },
          { typ: 'wahl', q: 'Was ist der größte Vorteil, wenn eine Datei in Pakete zerlegt wird?',
            opts: ['Fällt ein Weg aus, können die Pakete einen anderen Weg nehmen.',
                   'Man braucht keinen Empfänger mehr.',
                   'Die Pakete kommen immer in der richtigen Reihenfolge an.',
                   'Man braucht kein Netzwerk mehr.'],
            ok: 0, why: 'Dadurch bleibt die Verbindung stabiler.' }
        ] },

      /* ---------- G ---------- */
      { kurz: 'Erklären', titel: 'Erklären wie in der Probe', min: 9,
        hinweis: 'Schreibe zuerst selbst eine Antwort in ganzen Sätzen, dann vergleiche mit der Musterlösung.',
        aufgaben: [
          { typ: 'frei', q: 'Warum werden Dateien vor dem Verschicken in Pakete zerlegt? Erkläre in zwei bis drei Sätzen.',
            min: 2,
            punkte: [
              { t: 'Die Pakete können verschiedene Wege nehmen.', k: ['weg', 'route', 'verschieden', 'unterschiedlich'] },
              { t: 'Ist ein Weg gestört, wird ein anderer genutzt – die Verbindung bleibt stabiler.', k: ['gestoert', 'stoerung', 'ausfall', 'faellt', 'kaputt', 'stabil', 'anderen weg', 'anderer weg'] },
              { t: 'Jedes Paket hat eine Nummer, damit die Datei am Ziel wieder zusammengesetzt werden kann.', k: ['nummer', 'reihenfolge', 'zusammen', 'sortier'] }
            ],
            muster: 'Die Pakete können verschiedene Wege durch das Netz nehmen. Wenn ein Weg gestört ist, nutzt das Netzwerk einfach einen anderen Weg – dadurch bleibt die Verbindung stabiler. Jedes Paket hat eine Nummer, damit die Datei am Ziel wieder richtig zusammengesetzt werden kann.' },
          { typ: 'frei', q: 'Die Teile einer Nachricht kommen durcheinander an. Erkläre, wie der Empfänger trotzdem die richtige Nachricht bekommt.',
            punkte: [
              { t: 'Auf jedem Teil steht eine Nummer.', k: ['nummer', 'nummeriert', 'zahl'] },
              { t: 'Der Empfänger sortiert die Teile nach dieser Nummer.', k: ['sortier', 'ordne', 'reihenfolge', 'der reihe'] },
              { t: 'Dann setzt er die Nachricht wieder zusammen.', k: ['zusammen'] }
            ],
            muster: 'Auf jedem Teil steht eine Nummer. Der Empfänger sortiert die Teile nach diesen Nummern und setzt sie dann in der richtigen Reihenfolge wieder zur Nachricht zusammen.' },
          { typ: 'frei', q: 'Unterwegs geht ein Paket verloren. Was passiert beim Empfänger – und was kann man tun?',
            punkte: [
              { t: 'Die Nachricht oder Datei ist unvollständig.', k: ['unvollstaendig', 'fehlt', 'luecke', 'nicht vollstaendig', 'nicht ganz', 'kaputt', 'nicht lesen', 'nicht richtig'] },
              { t: 'Der Empfänger merkt es an der fehlenden Nummer.', k: ['nummer', 'merkt', 'erkennt', 'bemerkt'] },
              { t: 'Das fehlende Paket muss noch einmal geschickt werden.', k: ['nochmal', 'noch einmal', 'erneut', 'neu ', 'nachschick', 'nachgeschickt', 'wiederhol', 'wieder schick', 'wieder gesendet', 'nochmals'] }
            ],
            muster: 'Dann ist die Nachricht unvollständig, weil ein Stück fehlt. Der Empfänger merkt das an der fehlenden Nummer. Das fehlende Paket muss noch einmal geschickt werden – wenn nötig über einen anderen Weg.' }
        ] }
    ]
  });
})();
