/* Modul 5 – Adressen und Filius
   Stunde 5 der Präsentation „Netzwerke verstehen“, Folien 28–33 */
(function () {
  const N = Training.netz;

  /* Einstellungen zweier Rechner wie im Filius-Fenster */
  function cfg(pcs) {
    return '<div class="cfg">' + pcs.map(p =>
      '<div><b>' + p.name + '</b>IP-Adresse: <code>' + p.ip + '</code><br>Netzmaske: <code>' + p.maske + '</code></div>').join('') + '</div>';
  }
  const M24 = '255.255.255.0';

  /* Filius-Netz: zwei Rechner an einem Switch */
  function filiusNetz(o) {
    o = o || {};
    const kanten = [['s', 'a']];
    if (!o.ohneKabel2) kanten.push(['s', 'b']);
    return N({
      w: 560, h: 190,
      knoten: [
        { id: 'a', typ: 'pc', x: 90, y: 80, label: 'PC 1', sub: o.ip1 || '' },
        { id: 's', typ: 'switch', x: 280, y: 80, label: 'Switch' },
        { id: 'b', typ: 'pc', x: 470, y: 80, label: 'PC 2', sub: o.ip2 || '' }
      ],
      kanten, alt: o.alt
    });
  }

  /* Eigene Adresse für PC 2 prüfen */
  function pruefeIpPc2(v) {
    const m = v.replace(/\s/g, '').match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
    if (!m) return 'Eine IP-Adresse hat vier Zahlen, getrennt durch Punkte.';
    const z = m.slice(1).map(Number);
    if (z.some(n => n > 255)) return 'Jeder Block darf höchstens 255 sein.';
    if (z[0] !== 192 || z[1] !== 168 || z[2] !== 2) return 'Der Netzteil muss wie bei PC 1 lauten: 192.168.2.';
    if (z[3] === 10) return 'Diese Adresse hat schon PC 1. Jede Adresse darf es nur einmal geben.';
    if (z[3] === 0 || z[3] === 255) return 'Die 0 und die 255 im letzten Block sind für das Netz selbst reserviert. Nimm eine andere Zahl.';
    return true;
  }

  Training.start({
    nr: 5,
    titel: 'Adressen und Filius',
    folien: [28, 33],
    intro: 'Damit ein Paket ankommt, braucht jedes Gerät eine Adresse. Hier übst du, IP-Adressen zu lesen, und wie du in Filius ein Netz baust – und was du tust, wenn der Ping nicht klappt.',
    ziele: [
      'den Zweck einer IP-Adresse erklären.',
      'vier Blöcke einer IPv4-Adresse lesen.',
      'zwei Rechner in Filius verbinden und testen.'
    ],
    merkMin: 3,
    merk: [
      { t: 'IP-Adresse · Folie 30',
        html: '<p>Die IP-Adresse ist <b>wie eine Postadresse</b>: Ohne Adresse weiß das Paket nicht, wohin es soll. Die IP-Adresse identifiziert ein Gerät im Netzwerk.</p>' +
              '<ul><li><b>Lokal:</b> Adressen der Geräte im eigenen Netz, z. B. Handy 192.168.2.10, Laptop 192.168.2.11.</li>' +
              '<li><b>Öffentlich:</b> die Adresse nach außen ins Internet, z. B. 203.0.113.7. Die hat der Router.</li></ul>' },
      { t: 'Aufbau einer IP-Adresse · Folie 31',
        html: '<p>IPv4 nutzt <b>vier Blöcke mit je 8 Bit</b>, getrennt durch Punkte: <b>192.168.2.100</b>. Jeder Block ist eine Zahl von 0 bis 255.</p>' +
              '<p>Bei der Netzmaske <b>255.255.255.0</b> (kurz /24) gehören die <b>ersten drei Blöcke</b> zum Netz (<b>Netzteil</b>: 192.168.2). Der <b>letzte Block</b> benennt das Gerät (<b>Geräteteil</b>: 100).</p>' +
              '<p>Geräte im selben Netz haben den gleichen Netzteil, aber einen anderen Geräteteil.</p>' },
      { t: 'Filius · Folien 29, 32 und 33',
        html: '<ol><li>Zwei Computer und einen Switch auf die Arbeitsfläche setzen.</li><li>Beide Computer mit dem Switch verbinden.</li>' +
              '<li>IP-Adressen eintragen: 192.168.2.10 und 192.168.2.11, jeweils mit 255.255.255.0.</li><li>Mit einem <b>Ping</b> testen und die Datei speichern.</li></ol>' +
              '<p>Ein <b>Ping</b> ist ein kurzer Test: Ein Rechner schickt ein kleines Paket an einen anderen und wartet auf die Antwort.</p>' +
              '<p><b>Wenn der Ping nicht klappt:</b> 1. Kabel und Switch-Verbindung prüfen. 2. IP-Adressen vergleichen: Sind sie verschieden? 3. Netzmaske prüfen und noch einmal testen.</p>' }
    ],
    teile: [
      /* ---------- A ---------- */
      { kurz: 'Lückentext', titel: 'Wiederholen: Lückentext', min: 5, folien: [30, 31],
        aufgaben: [
          { typ: 'luecken',
            q: 'Setze die passenden Wörter ein. Zwei Wörter im Wortspeicher bleiben übrig.',
            bank: ['Ping', 'vier', 'Netzteil', 'Router', 'Adresse', '8', 'öffentliche', 'Gerät', 'Punkte', 'Geräteteil', 'Switch', 'Kabel'],
            saetze: [
              { t: 'Die IP-Adresse identifiziert ein {} im Netzwerk.', a: 'Gerät|Computer|Rechner' },
              { t: 'Ohne {} weiß ein Paket nicht, wohin es soll.', a: 'Adresse|IP-Adresse' },
              { t: 'Eine IPv4-Adresse besteht aus {} Blöcken.', a: 'vier|4' },
              { t: 'Jeder Block hat {} Bit.', a: '8|acht' },
              { t: 'Die Blöcke werden durch {} getrennt.', a: 'Punkte|Punkt' },
              { t: 'Bei der Netzmaske 255.255.255.0 bilden die ersten drei Blöcke den {}.', a: 'Netzteil' },
              { t: 'Der letzte Block ist der {}. Er benennt das Gerät.', a: 'Geräteteil|Geraeteteil|Gerätteil' },
              { t: 'Die Adresse nach außen ins Internet nennt man {} IP-Adresse.', a: 'öffentliche|oeffentliche' },
              { t: 'Diese öffentliche Adresse hat der {}.', a: 'Router' },
              { t: 'Mit einem {} testest du in Filius, ob die Verbindung klappt.', a: 'Ping' }
            ] }
        ] },

      /* ---------- B ---------- */
      { kurz: 'Blöcke lesen', titel: 'Lesen: Netzteil und Geräteteil', min: 4, folien: 31,
        hinweis: 'In allen Aufgaben ist die Netzmaske 255.255.255.0.',
        aufgaben: [
          { typ: 'wahl', q: 'Adresse 192.168.2.100: Welcher Teil ist der Geräteteil?',
            opts: ['192', '192.168', '192.168.2', '100'], ok: 3,
            why: 'Der letzte Block benennt das Gerät.' },
          { typ: 'wahl', q: 'Und welcher Teil ist der Netzteil?',
            opts: ['168.2.100', '192.168.2', '100', '192'], ok: 1,
            why: 'Bei /24 gehören die ersten drei Blöcke zum Netz.' },
          { typ: 'luecken', q: 'Schreibe die Antwort in die Lücke.',
            saetze: [
              { t: 'Adresse 172.16.5.40 → Netzteil: {}', a: '172.16.5', breite: '120px' },
              { t: 'Adresse 10.0.0.25 → Geräteteil: {}', a: '25', breite: '70px' },
              { t: 'Der Server aus „Mein Schulnetz“ hat 192.168.1.13 → Geräteteil: {}', a: '13', breite: '70px' },
              { t: 'Adresse 203.0.113.7 → Wie viele Blöcke hat sie? {}', a: '4|vier', breite: '70px' }
            ] }
        ] },

      /* ---------- C ---------- */
      { kurz: 'Gleiches Netz?', titel: 'Anwenden: Sind die Geräte im gleichen Netz?', min: 5, folien: 31,
        hinweis: 'Die Netzmaske ist immer 255.255.255.0. Vergleiche die ersten drei Blöcke.',
        aufgaben: [
          { typ: 'kategorien', q: 'Gleiches Netz oder anderes Netz?',
            kats: ['gleiches Netz', 'anderes Netz'],
            items: [
              { t: '192.168.2.10 und 192.168.2.11', k: 'gleiches Netz', why: 'Netzteil 192.168.2 ist gleich.' },
              { t: '192.168.2.10 und 192.168.3.10', k: 'anderes Netz', why: 'Der dritte Block ist verschieden (2 und 3).' },
              { t: '10.0.0.5 und 10.0.0.200', k: 'gleiches Netz', why: 'Netzteil 10.0.0 ist gleich.' },
              { t: '192.168.1.20 und 192.168.2.20', k: 'anderes Netz', why: 'Der dritte Block ist verschieden – auch wenn der letzte gleich ist.' },
              { t: '172.16.5.1 und 172.16.5.254', k: 'gleiches Netz', why: 'Netzteil 172.16.5 ist gleich.' },
              { t: '192.168.2.10 und 192.169.2.10', k: 'anderes Netz', why: 'Schon der zweite Block ist verschieden (168 und 169).' },
              { t: '192.168.0.7 und 192.168.0.70', k: 'gleiches Netz', why: 'Nur der Geräteteil ist verschieden – genau so soll es sein.' },
              { t: '10.1.1.1 und 10.1.2.1', k: 'anderes Netz', why: 'Der dritte Block ist verschieden (1 und 2).' }
            ] }
        ] },

      /* ---------- D ---------- */
      { kurz: 'Gültig?', titel: 'Prüfen: Ist das eine gültige IP-Adresse?', min: 4, folien: 31,
        hinweis: 'Eine IPv4-Adresse hat genau vier Blöcke. Jeder Block ist eine Zahl von 0 bis 255.',
        aufgaben: [
          { typ: 'kategorien', q: 'Gültig oder ungültig?',
            kats: ['gültig', 'ungültig'],
            items: [
              { t: '192.168.2.10', k: 'gültig', why: 'Vier Blöcke, alle zwischen 0 und 255.' },
              { t: '192.168.2', k: 'ungültig', why: 'Nur drei Blöcke.' },
              { t: '192.168.300.1', k: 'ungültig', why: '300 ist zu groß. Mit 8 Bit geht es nur bis 255.' },
              { t: '10.0.0.1', k: 'gültig', why: 'Vier Blöcke, alle zwischen 0 und 255.' },
              { t: '192.168.2.10.5', k: 'ungültig', why: 'Fünf Blöcke sind einer zu viel.' },
              { t: '203.0.113.7', k: 'gültig', why: 'Das ist die öffentliche Adresse von Folie 30.' },
              { t: '192.168.2.256', k: 'ungültig', why: '256 ist zu groß.' },
              { t: '172.16.254.1', k: 'gültig', why: 'Vier Blöcke, alle zwischen 0 und 255.' }
            ] }
        ] },

      /* ---------- E ---------- */
      { kurz: 'Lokal oder öffentlich', titel: 'Verstehen: Lokal oder öffentlich?', min: 3, folien: 30,
        aufgaben: [
          { typ: 'figur',
            svg: N({
              w: 560, h: 270,
              rahmen: [{ x: 16, y: 16, w: 216, h: 238, label: 'Eigenes Netz' }],
              knoten: [
                { id: 'h', typ: 'handy', x: 120, y: 78, label: 'Handy', sub: '192.168.2.10' },
                { id: 'l', typ: 'pc', x: 120, y: 180, label: 'Laptop', sub: '192.168.2.11' },
                { id: 'r', typ: 'router', x: 320, y: 140, label: 'Router' },
                { id: 'i', typ: 'wolke', x: 482, y: 140, label: 'Internet' }
              ],
              kanten: [['h', 'r'], ['l', 'r'], ['r', 'i']],
              texte: [{ x: 402, y: 118, t: '203.0.113.7', size: 13, fill: '#0f4c81' }],
              alt: 'Handy (192.168.2.10) und Laptop (192.168.2.11) im eigenen Netz sind mit einem Router verbunden. Der Router ist mit dem Internet verbunden, an dieser Verbindung steht 203.0.113.7.'
            }),
            cap: 'Nach Folie 30 · IP-Adresse' },
          { typ: 'wahl', q: 'Welche Adresse ist die öffentliche IP-Adresse?',
            opts: ['192.168.2.10', '192.168.2.11', '203.0.113.7', '255.255.255.0'], ok: 2,
            why: 'Sie steht an der Verbindung vom Router ins Internet – die Adresse nach außen.' },
          { typ: 'wahl', q: 'Wofür gilt eine lokale IP-Adresse wie 192.168.2.10?',
            opts: ['für das ganze Internet', 'für Geräte im eigenen Netz', 'nur für den Router', 'für Drucker in anderen Ländern'], ok: 1,
            why: 'Lokal = Geräte im eigenen Netz.' },
          { typ: 'wahl', q: 'Welches Gerät verbindet das eigene Netz mit dem Internet?',
            opts: ['das Handy', 'der Laptop', 'der Switch', 'der Router'], ok: 3,
            why: 'Der Router führt nach außen ins Internet.' }
        ] },

      /* ---------- F ---------- */
      { kurz: 'Netz in Filius', titel: 'Filius: So baust du das Netz', min: 7, folien: [29, 32],
        aufgaben: [
          { typ: 'ordnen', q: 'Bringe die Arbeitsschritte in Filius in die richtige Reihenfolge.',
            schritte: [
              'Zwei Computer und einen Switch auf die Arbeitsfläche setzen.',
              'Beide Computer mit dem Switch verbinden.',
              'IP-Adressen und Netzmaske eintragen.',
              'Mit einem Ping die Verbindung testen.',
              'Die Filius-Datei speichern.'
            ],
            why: 'Geräte platzieren → Kabel verbinden → Adressen eintragen → testen → speichern.' },
          { typ: 'figur',
            svg: filiusNetz({ ip1: '192.168.2.10', ip2: '? ? ?', alt: 'PC 1 mit der Adresse 192.168.2.10 und PC 2 ohne Adresse sind an einem Switch angeschlossen.' }),
            cap: 'Dein Netz in Filius' },
          { typ: 'luecken', q: 'PC 1 hat die Adresse 192.168.2.10 mit der Netzmaske 255.255.255.0. Trage passende Werte für PC 2 ein.',
            saetze: [
              { t: 'IP-Adresse von PC 2: {}', a: { check: pruefeIpPc2, loesung: '192.168.2.11 (oder eine andere freie Adresse von 192.168.2.1 bis 192.168.2.254)' }, breite: '170px' },
              { t: 'Netzmaske von PC 2: {}', a: '255.255.255.0|/24', breite: '170px' }
            ] },
          { typ: 'wahl', q: 'Der Ping von PC 1 an PC 2 klappt. Was bedeutet das?',
            opts: ['Die Datei wurde gespeichert.', 'Der Rechner ist schneller geworden.', 'Die beiden Rechner können sich gegenseitig erreichen.', 'Die IP-Adresse wurde gelöscht.'],
            ok: 2, why: 'PC 1 hat ein kleines Paket geschickt und eine Antwort von PC 2 bekommen.' }
        ] },

      /* ---------- G ---------- */
      { kurz: 'Ping-Fehler', titel: 'Fehlersuche: Der Ping klappt nicht', min: 6, folien: 33,
        hinweis: 'In jedem Fall ist genau ein Fehler versteckt. Vergleiche die Einstellungen genau.',
        aufgaben: [
          { typ: 'wahl', q: 'Fall 1: Beide Rechner hängen am Switch. Was ist der Fehler?',
            html: cfg([{ name: 'PC 1', ip: '192.168.2.10', maske: M24 }, { name: 'PC 2', ip: '192.168.2.10', maske: M24 }]),
            opts: ['Die Netzmaske ist falsch.', 'Beide Rechner haben dieselbe IP-Adresse.', 'Die Rechner sind in verschiedenen Netzen.', 'Es fehlt ein Drucker.'],
            ok: 1, why: 'Jede Adresse darf es im Netz nur einmal geben. Ändere PC 2 z. B. auf 192.168.2.11.' },
          { typ: 'wahl', q: 'Fall 2: Beide Rechner hängen am Switch. Was ist der Fehler?',
            html: cfg([{ name: 'PC 1', ip: '192.168.2.10', maske: M24 }, { name: 'PC 2', ip: '192.168.3.11', maske: M24 }]),
            opts: ['Beide haben dieselbe Adresse.', 'Die Adresse von PC 2 ist zu lang.', 'Der Switch ist zu klein.', 'Die Rechner sind in verschiedenen Netzen: Der dritte Block ist verschieden.'],
            ok: 3, why: 'Bei /24 müssen die ersten drei Blöcke gleich sein. Ändere PC 2 auf 192.168.2.11.' },
          { typ: 'wahl', q: 'Fall 3: Die Adressen stimmen (192.168.2.10 und 192.168.2.11, beide 255.255.255.0). Was ist der Fehler?',
            svg: filiusNetz({ ip1: '192.168.2.10', ip2: '192.168.2.11', ohneKabel2: true, alt: 'PC 1 ist mit dem Switch verbunden, PC 2 hat kein Kabel zum Switch.' }),
            opts: ['PC 2 ist nicht mit dem Switch verbunden – das Kabel fehlt.', 'Die IP-Adressen sind gleich.', 'Die Netzmaske ist falsch.', 'Der Switch braucht eine IP-Adresse.'],
            ok: 0, why: 'Schritt 1 der Fehlersuche: Kabel und Switch-Verbindung prüfen.' },
          { typ: 'wahl', q: 'Fall 4: Beide Rechner hängen am Switch. Was ist der Fehler?',
            html: cfg([{ name: 'PC 1', ip: '192.168.2.10', maske: M24 }, { name: 'PC 2', ip: '192.168.2.11', maske: '225.255.255.0' }]),
            opts: ['Beide haben dieselbe Adresse.', 'Die Rechner sind in verschiedenen Netzen.', 'Bei PC 2 ist die Netzmaske falsch eingetippt: 225 statt 255.', 'Das Kabel fehlt.'],
            ok: 2, why: 'Schritt 3 der Fehlersuche: Netzmaske prüfen – dann noch einmal testen.' },
          { typ: 'ordnen', q: 'Fehlersuche wie ein Netzwerk-Profi (Folie 33): In welcher Reihenfolge gehst du vor?',
            schritte: ['Kabel und Switch-Verbindung prüfen.', 'IP-Adressen vergleichen: Sind sie verschieden?', 'Die Netzmaske prüfen.', 'Noch einmal testen.'],
            why: 'Erst das Einfachste (Kabel), dann die Adressen, dann die Netzmaske – und immer neu testen.' }
        ] },

      /* ---------- H ---------- */
      { kurz: 'Erklären', titel: 'Erklären wie in der Probe', min: 8,
        hinweis: 'Schreibe zuerst selbst eine Antwort in ganzen Sätzen, dann vergleiche mit der Musterlösung.',
        aufgaben: [
          { typ: 'frei', q: 'Welche Aufgabe hat eine IP-Adresse? Erkläre auch mit einem Vergleich aus dem Alltag.',
            min: 2,
            punkte: [
              { t: 'Sie identifiziert ein Gerät, macht es eindeutig erreichbar.', k: ['identifi', 'eindeutig', 'erkenn', 'erreich', 'finden', 'gefunden'] },
              { t: 'Pakete wissen dadurch, wohin sie sollen.', k: ['paket', 'wohin', '\\bziel', 'ankomm', 'ankommt'] },
              { t: 'Ein Vergleich, z. B. mit einer Postadresse oder Hausnummer.', k: ['post', 'brief', 'hausnummer', 'strasse', 'anschrift', 'telefonnummer', 'wohnadresse', 'hausadresse'] }
            ],
            muster: 'Die IP-Adresse identifiziert ein Gerät im Netzwerk, damit es eindeutig gefunden werden kann. Ohne Adresse wüsste ein Paket nicht, wohin es soll. Das ist wie bei einer Postadresse: Ein Brief kommt nur an, wenn die Adresse stimmt.' },
          { typ: 'frei', q: 'Der Ping zwischen zwei Rechnern in Filius funktioniert nicht. Beschreibe, wie du den Fehler suchst.',
            zeilen: 5, min: 2,
            punkte: [
              { t: 'Kabel und Switch-Verbindung prüfen.', k: ['kabel', 'verbind', 'switch', 'steck'] },
              { t: 'IP-Adressen vergleichen: verschieden und im gleichen Netz?', k: ['\\bip', 'adresse', 'verschieden', 'gleich', 'doppelt'] },
              { t: 'Netzmaske prüfen und noch einmal testen.', k: ['netzmaske', 'maske', 'test', 'nochmal', 'noch einmal', 'erneut'] }
            ],
            muster: 'Zuerst prüfe ich die Kabel und die Verbindung zum Switch. Dann vergleiche ich die IP-Adressen: Sind sie verschieden und haben sie den gleichen Netzteil? Danach prüfe ich die Netzmaske und teste noch einmal mit einem Ping.' },
          { typ: 'frei', q: 'Erkläre an der Adresse 192.168.2.100 mit der Netzmaske 255.255.255.0, welcher Teil das Netz und welcher das Gerät benennt.',
            min: 2,
            punkte: [
              { t: '192.168.2 – die ersten drei Blöcke – ist der Netzteil.', k: ['ersten drei', 'drei bloecke', 'netzteil', '192\\.168\\.2\\b(?!\\.)'] },
              { t: '100 – der letzte Block – ist der Geräteteil.', k: ['letzte', 'geraeteteil', 'geraet', '\\b100\\b'] },
              { t: 'Das legt die Netzmaske 255.255.255.0 (/24) fest.', k: ['255', 'maske', '/24'] }
            ],
            muster: 'Bei der Netzmaske 255.255.255.0 (/24) gehören die ersten drei Blöcke zum Netz: 192.168.2 ist der Netzteil. Der letzte Block, die 100, ist der Geräteteil. Er benennt das einzelne Gerät in diesem Netz.' }
        ] }
    ]
  });
})();
