/* Modul 6 – IP-Adressen in Binär
   Stunde 6 der Präsentation „Netzwerke verstehen“, Folien 34–40 */
(function () {
  const tabelle = (bits, farbe) => '<table><tr>' + Training.W8.map(w => '<th style="text-align:center">' + w + '</th>').join('') + '</tr><tr>' +
    bits.split('').map(b => '<td style="text-align:center;font-weight:800' + (b === '1' && farbe ? ';background:#e6f6f4;color:#0c5f66' : '') + '">' + b + '</td>').join('') + '</tr></table>';

  Training.start({
    nr: 6,
    titel: 'IP-Adressen in Binär',
    folien: [34, 40],
    intro: 'Computer rechnen nur mit 0 und 1. Hier übst du, IP-Blöcke von Dezimal in Binär umzuwandeln und zurück – Schritt für Schritt, mit Tipps, wenn du hängst.',
    ziele: [
      'den Stellenwert der acht Bits erklären.',
      'Dezimalblöcke in Binärzahlen umwandeln.',
      'Binärblöcke wieder dezimal lesen.'
    ],
    merkMin: 3,
    merk: [
      { t: 'Die acht Stellenwerte · Folie 35',
        html: tabelle('11000000', true) +
              '<p><b>1</b> bedeutet: Diese Zahl zählt mit. <b>0</b> bedeutet: Sie zählt nicht mit.</p>' +
              '<p>Beispiel: 128 + 64 = 192 → <b>11000000</b></p>' +
              '<p class="merksatz">Jeder IP-Block hat immer 8 Stellen.</p>' },
      { t: 'Dezimal → Binär: So rechnest du',
        html: '<p>Beginne links bei 128. Passt der Stellenwert in deine Zahl? <b>Ja</b> → 1 schreiben und abziehen. <b>Nein</b> → 0 schreiben. Dann weiter nach rechts.</p>' +
              '<p>Beispiel <b>100</b>: 128 passt nicht → 0 · 64 passt → 1, Rest 36 · 32 passt → 1, Rest 4 · 16 → 0 · 8 → 0 · 4 passt → 1, Rest 0 · 2 → 0 · 1 → 0</p>' +
              '<p>Ergebnis: 100 = <b>01100100</b></p>' },
      { t: 'Binär → Dezimal · Folie 39',
        html: tabelle('10101000', true) +
              '<p>Addiere die Stellenwerte, unter denen eine 1 steht:</p>' +
              '<p>10101000 = 128 + 32 + 8 = <b>168</b></p>' +
              '<p>Die größte Zahl mit 8 Bit ist 11111111 = 255. Deshalb geht jeder IP-Block nur von 0 bis 255.</p>' }
    ],
    teile: [
      /* ---------- A ---------- */
      { kurz: 'Stellenwerte', titel: 'Verstehen: Die acht Stellenwerte', min: 4, folien: 35,
        aufgaben: [
          { typ: 'luecken', q: 'Fülle die Lücken aus.',
            saetze: [
              { t: 'Die Stellenwerte: 128 · 64 · {} · 16 · 8 · {} · 2 · 1', a: ['32', '4'], breite: '60px' },
              { t: 'Jeder Stellenwert ist das {} des Stellenwerts rechts daneben.', a: 'Doppelte|zweifache|2-fache|Zweifache|doppelt' },
              { t: 'Eine 1 bedeutet: Diese Zahl {} mit.', a: 'zählt|zaehlt' },
              { t: 'Jeder IP-Block hat immer {} Stellen.', a: '8|acht', breite: '60px' }
            ] },
          { typ: 'wahl', q: 'Welches ist die größte Zahl, die man mit 8 Bit schreiben kann?',
            opts: ['128', '200', '255', '256'], ok: 2,
            why: '11111111 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255.' },
          { typ: 'wahl', q: 'Welche Zahl ist 00000000?',
            opts: ['0', '1', '8', '128'], ok: 0,
            why: 'Keine Stelle zählt mit – also 0.' },
          { typ: 'wahl', q: 'Wo steht der größte Stellenwert?',
            opts: ['ganz rechts (1)', 'in der Mitte', 'ganz links (128)', 'das ist jedes Mal anders'], ok: 2,
            why: 'Die Stellenwerte werden von links nach rechts immer halb so groß.' }
        ] },

      /* ---------- B ---------- */
      { kurz: 'Dezimal → Binär', titel: 'Rechnen: Dezimal → Binär', min: 11, folien: [35, 36],
        hinweis: 'Die ersten drei Zahlen sind zum Warmwerden. Wenn du hängst, hilft dir der Tipp-Knopf Schritt für Schritt.',
        aufgaben: [
          { typ: 'bin', zahlen: [128, 10, 192] },
          { typ: 'bin', q: 'Jetzt etwas schwerer. Wandle jede Zahl in acht Bit um.', zahlen: [65, 77, 170, 200, 99, 255] }
        ] },

      /* ---------- C ---------- */
      { kurz: 'Binär → Dezimal', titel: 'Rechnen: Binär → Dezimal', min: 8, folien: [38, 39],
        aufgaben: [
          { typ: 'dez', bins: ['00000101', '00100000', '10000001', '00110011'] },
          { typ: 'dez', q: 'Und noch vier – jetzt mit mehr Einsen.', bins: ['11110000', '01111111', '10011001', '00001111'] }
        ] },

      /* ---------- D ---------- */
      { kurz: 'Fehler finden', titel: 'Prüfen: Wo steckt der Fehler?', min: 5, folien: [35, 39],
        aufgaben: [
          { typ: 'wahl', q: 'Mia schreibt: 30 = 11110. Was stimmt nicht?',
            opts: ['Der Wert ist falsch, 11110 ist 31.',
                   'Es fehlen Stellen: Jeder IP-Block hat 8 Stellen, also 00011110.',
                   'Man kann 30 gar nicht umwandeln.',
                   'Eine Binärzahl muss immer mit 1 anfangen.'],
            ok: 1, why: '16 + 8 + 4 + 2 = 30 stimmt zwar, aber ein IP-Block hat immer 8 Stellen: 00011110.' },
          { typ: 'wahl', q: 'Tom rechnet: 148 = 10010110. Stimmt das?',
            opts: ['Ja, das ist richtig.',
                   'Nein, 148 passt nicht in 8 Bit.',
                   'Nein: 10010110 = 128 + 16 + 4 + 2 = 150. Richtig ist 10010100.',
                   'Nein, richtig ist 11010100.'],
            ok: 2, why: '148 = 128 + 16 + 4 → 10010100.' },
          { typ: 'wahl', q: 'Lea liest 01000001 als 130. Was hat sie falsch gemacht?',
            opts: ['Nichts, 130 stimmt.',
                   'Sie hat die 128 vergessen.',
                   'Sie hätte noch 8 dazuzählen müssen.',
                   'Sie hat von rechts gelesen und die Stellenwerte vertauscht. Richtig: 64 + 1 = 65.'],
            ok: 3, why: 'Der Stellenwert 128 steht immer ganz links.' },
          { typ: 'wahl', q: 'Welche Zahl kann KEIN Block einer IP-Adresse sein?',
            opts: ['0', '127', '255', '256'], ok: 3,
            why: '256 bräuchte 9 Bit. Mit 8 Bit geht es nur bis 255.' },
          { typ: 'wahl', q: 'Welche Binärzahl ist 192?',
            opts: ['11000000', '10000011', '11100000', '00000011'], ok: 0,
            why: '128 + 64 = 192 → 11000000 (Folie 35).' }
        ] },

      /* ---------- E ---------- */
      { kurz: 'Ganze Adressen', titel: 'Anwenden: Ganze IP-Adressen umwandeln', min: 9, folien: [36, 37],
        hinweis: 'Jeder Block wird einzeln umgewandelt. Schreibe jeden Binärblock mit genau 8 Stellen.',
        aufgaben: [
          { typ: 'ip', richtung: 'bin', ip: '192.168.2.10',
            q: 'Das ist die Adresse von PC 1 aus Filius (Stunde 5). Wandle sie in Binär um.' },
          { typ: 'ip', richtung: 'dez', bin: '11000000.10101000.00000001.00001100',
            q: 'Wandle diese Adresse in Dezimalschreibweise um.' },
          { typ: 'wahl', q: 'Die Adresse aus Aufgabe 2 kommt in „Mein Schulnetz“ (Folie 8) vor. Welches Gerät hat sie?',
            opts: ['der Laptop (192.168.1.10)', 'das Handy (192.168.1.11)', 'der Drucker (192.168.1.12)', 'der Server (192.168.1.13)'],
            ok: 2, why: '11000000.10101000.00000001.00001100 = 192.168.1.12 – der Drucker.' },
          { typ: 'ip', richtung: 'bin', ip: '213.148.129.30',
            q: 'Die Übung von Folie 36: Setze 213.148.129.30 aus vier Binärblöcken zusammen. Versuche es zuerst, ohne in die Folien zu schauen!' }
        ] },

      /* ---------- F ---------- */
      { kurz: 'Exit Ticket', titel: 'Exit Ticket: Drei Fragen zum Schluss', min: 5, folien: 40,
        hinweis: 'Diese drei Fragen stehen am Ende der Präsentation. Sie wiederholen die Stunden 2, 4 und 6 – kurz und knapp.',
        aufgaben: [
          { typ: 'frei', q: 'Was macht ein Switch besser als ein Hub?', zeilen: 3,
            punkte: [
              { t: 'Der Hub schickt die Daten an alle (verteilt blind).', k: ['alle', 'blind', 'jeden', 'jedem'] },
              { t: 'Der Switch schickt sie gezielt nur an den richtigen Empfänger.', k: ['gezielt', 'richtig', 'nur an', 'nur zu', 'nur den', 'nur dem', 'bestimmt', 'port', 'empfaenger'] }
            ],
            muster: 'Der Switch leitet die Daten gezielt an den richtigen Port weiter, also nur an das Gerät, für das sie bestimmt sind. Der Hub verteilt blind an alle Geräte.' },
          { typ: 'frei', q: 'Warum werden Dateien in Pakete zerlegt?', zeilen: 3,
            punkte: [
              { t: 'Die Pakete können verschiedene Wege nehmen – ist ein Weg gestört, nehmen sie einen anderen.', k: ['weg', 'route', 'gestoert', 'stoerung', 'ausfall', 'faellt'] },
              { t: 'Dadurch bleibt die Verbindung stabiler; die Nummer hilft beim Zusammensetzen.', k: ['stabil', 'nummer', 'zusammen', 'reihenfolge', 'sortier'] }
            ],
            muster: 'Die Pakete können verschiedene Wege nehmen. Wenn ein Weg gestört ist, nutzt das Netzwerk einen anderen – dadurch bleibt die Verbindung stabiler. Mit der Nummer werden die Pakete am Ziel wieder richtig zusammengesetzt.' },
          { typ: 'luecken', q: 'Welcher Dezimalzahl entspricht 10101000?',
            saetze: [{ t: '10101000 = {}', a: '168', breite: '80px' }] }
        ] }
    ]
  });
})();
