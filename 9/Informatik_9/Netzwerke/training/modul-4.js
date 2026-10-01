/* Modul 4 – Wer leitet Daten weiter?
   Stunde 4 der Präsentation „Netzwerke verstehen“, Folien 24–27 */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const GERAETE = ['Repeater', 'Hub', 'Bridge', 'Switch'];

  /* ---------- Rollenspiel „Hub oder Switch?“ als Simulation (Folien 26–27) ---------- */
  function hubSwitchSim(block) {
    const box = block.querySelector('.sim');
    const POS = { 1: { x: 90, y: 62 }, 2: { x: 470, y: 62 }, 3: { x: 90, y: 222 }, 4: { x: 470, y: 222 } };
    const MITTE = { x: 280, y: 142 };
    let modus = 'hub', laeuft = false;
    const opt = sel => [1, 2, 3, 4].map(i => '<option value="' + i + '"' + (i === sel ? ' selected' : '') + '>PC ' + i + '</option>').join('');
    box.innerHTML =
      '<div class="sim-ctrl">' +
        '<div><span style="display:block;font-size:.82rem;font-weight:800;color:var(--muted);margin-bottom:3px">Gerät in der Mitte</span>' +
        '<span class="seg" role="group" aria-label="Gerät in der Mitte"><button type="button" data-m="hub" aria-pressed="true">Hub</button><button type="button" data-m="switch" aria-pressed="false">Switch</button></span></div>' +
        '<label>Absender<select data-s>' + opt(1) + '</select></label>' +
        '<label>Empfänger<select data-e>' + opt(3) + '</select></label>' +
        '<button type="button" class="btn btn-main" data-go>Nachricht senden</button>' +
      '</div><div data-bild></div>' +
      '<p class="sim-status" aria-live="polite">Wähle Hub oder Switch, Absender und Empfänger. Dann klicke auf „Nachricht senden“.</p>';
    const bild = box.querySelector('[data-bild]');
    const status = t => { box.querySelector('.sim-status').textContent = t; };
    let punkte = null;

    function zeichne(z) {
      z = z || {};
      const knoten = [{ id: 'm', typ: 'switch', x: MITTE.x, y: MITTE.y, label: modus === 'hub' ? 'Hub' : 'Switch' }];
      [1, 2, 3, 4].forEach(i => {
        const k = { id: 'p' + i, typ: 'pc', x: POS[i].x, y: POS[i].y, label: 'PC ' + i };
        if (i === z.sender) k.sub = 'sendet';
        else if (z.ziele && i === z.empf) { k.sub = 'Empfänger'; k.badge = 'ok'; }
        else if (z.ziele && z.ziele.includes(i)) k.sub = 'hört mit';
        knoten.push(k);
      });
      bild.innerHTML = Training.netz({
        w: 560, h: 290, knoten, kanten: [1, 2, 3, 4].map(i => ['m', 'p' + i]),
        alt: 'Vier PCs sind mit einem ' + (modus === 'hub' ? 'Hub' : 'Switch') + ' in der Mitte verbunden.'
      });
      punkte = document.createElementNS(NS, 'g');
      bild.querySelector('svg').append(punkte);
    }
    function fahre(von, nach, ms) {
      return new Promise(fertig => {
        const c = document.createElementNS(NS, 'circle');
        c.setAttribute('r', '9');
        c.setAttribute('fill', '#f2b705');
        c.setAttribute('stroke', '#7a5600');
        c.setAttribute('stroke-width', '2');
        punkte.append(c);
        const t0 = performance.now();
        const dauer = reduced ? 0 : ms;
        function schritt(t) {
          const p = dauer ? Math.min(1, (t - t0) / dauer) : 1;
          c.setAttribute('cx', von.x + (nach.x - von.x) * p);
          c.setAttribute('cy', von.y + (nach.y - von.y) * p);
          if (p < 1) requestAnimationFrame(schritt);
          else { c.remove(); fertig(); }
        }
        requestAnimationFrame(schritt);
      });
    }
    async function senden() {
      if (laeuft) return;
      const s = +box.querySelector('[data-s]').value, e = +box.querySelector('[data-e]').value;
      if (s === e) { status('Absender und Empfänger müssen verschiedene PCs sein.'); return; }
      laeuft = true;
      box.querySelector('[data-go]').disabled = true;
      zeichne({ sender: s });
      status('PC ' + s + ' schickt eine Nachricht an PC ' + e + ' …');
      await fahre(POS[s], MITTE, 700);
      const ziele = modus === 'hub' ? [1, 2, 3, 4].filter(i => i !== s) : [e];
      await Promise.all(ziele.map(z => fahre(MITTE, POS[z], 700)));
      zeichne({ sender: s, empf: e, ziele });
      status(modus === 'hub'
        ? 'Der Hub verteilt blind: PC ' + ziele.join(', PC ') + ' bekommen die Nachricht. Gemeint war nur PC ' + e + '.'
        : 'Der Switch verteilt gezielt: Nur PC ' + e + ' bekommt die Nachricht. Die anderen können weiterarbeiten.');
      laeuft = false;
      box.querySelector('[data-go]').disabled = false;
    }
    box.querySelector('.seg').addEventListener('click', ev => {
      const b = ev.target.closest('button[data-m]');
      if (!b || laeuft) return;
      modus = b.dataset.m;
      box.querySelectorAll('.seg button').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
      zeichne();
      status('Gerät in der Mitte: ' + (modus === 'hub' ? 'Hub' : 'Switch') + '. Klicke auf „Nachricht senden“.');
    });
    box.querySelector('[data-go]').addEventListener('click', senden);
    zeichne();
  }

  /* ---------- Stern-Netz für die Fehlersuche ---------- */
  function sternFall(badges, alt) {
    const pos = [[100, 60], [460, 60], [100, 215], [460, 215]];
    const knoten = [{ id: 'm', typ: 'switch', x: 280, y: 138, label: 'Switch' }];
    pos.forEach((p, i) => knoten.push({ id: 'p' + i, typ: 'pc', x: p[0], y: p[1], label: 'PC ' + (i + 1), badge: badges[i] }));
    return Training.netz({ w: 560, h: 280, knoten, kanten: [0, 1, 2, 3].map(i => ['m', 'p' + i]), alt });
  }

  Training.start({
    nr: 4,
    titel: 'Wer leitet Daten weiter?',
    folien: [24, 27],
    intro: 'Repeater, Hub, Bridge und Switch – vier Geräte, vier Aufgaben. Hier übst du, sie zu unterscheiden, spielst das Hub-oder-Switch-Rollenspiel am Bildschirm nach und suchst Fehler im Netz.',
    ziele: [
      'Repeater, Hub, Bridge und Switch unterscheiden.',
      'den Weg einer Nachricht am Switch erklären.',
      'eine einfache Netzstörung eingrenzen.'
    ],
    merkMin: 3,
    merk: [
      { t: 'Netzwerkgeräte · Folie 25',
        html: '<table><tr><th>Repeater</th><td>verstärkt ein Signal und verlängert die Reichweite</td></tr>' +
              '<tr><th>Hub</th><td>sendet ein Signal an alle angeschlossenen Geräte weiter</td></tr>' +
              '<tr><th>Bridge</th><td>verbindet zwei Netzbereiche und filtert Datenpakete</td></tr>' +
              '<tr><th>Switch</th><td>leitet Daten gezielt an den richtigen Port weiter</td></tr></table>' +
              '<p class="merksatz">Merke: Hub verteilt blind. Switch verteilt gezielt.</p>' +
              '<p>Ein <b>Port</b> ist ein Anschluss am Gerät, in den ein Netzwerkkabel gesteckt wird.</p>' },
      { t: 'Hub oder Switch? · Folie 26',
        html: '<p><b>Hub:</b> Eine Person ruft eine Nachricht laut in den Raum. Alle hören sie, auch wenn nur eine Person gemeint ist.</p>' +
              '<p><b>Switch:</b> Die Nachricht geht direkt an den richtigen Platz. Die anderen können weiterarbeiten.</p>' },
      { t: 'Hub oder Switch? Spielt es nach · Folie 27',
      html: '<p>So spielt ihr den Unterschied in der Klasse nach:</p>' +
            '<ol><li>Rollen verteilen: vier PCs, ein Hub oder Switch und eine Person, die beobachtet.</li>' +
            '<li>Dieselbe Nachricht zuerst mit dem <b>Hub</b> schicken, dann mit dem <b>Switch</b>.</li>' +
            '<li>Notieren, wer die Nachricht jeweils bekommt und wer warten muss.</li></ol>' +
            '<p class="merksatz">Ergebnis in einem Satz: Der Hub schickt an alle, der Switch nur an den richtigen Empfänger.</p>' },
    { t: 'Eine Störung eingrenzen',
        html: '<p>Frage dich zuerst: <b>Ist nur ein Gerät betroffen oder sind es alle?</b></p>' +
              '<ul><li>Nur ein Gerät: meistens dessen Kabel oder Anschluss.</li>' +
              '<li>Alle Geräte: meistens das zentrale Gerät, z. B. der Switch.</li>' +
              '<li>Signal kommt am Ende eines langen Kabels zu schwach an: Repeater.</li></ul>' }
    ],
    teile: [
      /* ---------- A ---------- */
      { kurz: 'Lückentext', titel: 'Wiederholen: Lückentext', min: 5, folien: 25,
        aufgaben: [
          { typ: 'luecken',
            q: 'Setze die passenden Wörter ein. Zwei Wörter im Wortspeicher bleiben übrig.',
            bank: ['Port', 'blind', 'Repeater', 'alle', 'Hub', 'Switch', 'Reichweite', 'gezielt', 'Bridge', 'Router', 'Kabel'],
            saetze: [
              { t: 'Ein {} verstärkt ein Signal.', a: 'Repeater' },
              { t: 'Dadurch verlängert er die {}.', a: 'Reichweite' },
              { t: 'Ein Hub sendet ein Signal an {} angeschlossenen Geräte weiter.', a: 'alle' },
              { t: 'Eine {} verbindet zwei Netzbereiche und filtert Datenpakete.', a: 'Bridge' },
              { t: 'Ein {} leitet Daten gezielt an den richtigen Port weiter.', a: 'Switch' },
              { t: 'Ein {} ist ein Anschluss am Gerät, in den das Netzwerkkabel gesteckt wird.', a: 'Port' },
              { t: 'Merke: Der Hub verteilt {}.', a: 'blind' },
              { t: 'Der Switch verteilt {}.', a: 'gezielt' },
              { t: 'Beim {} hören alle die Nachricht, auch wenn nur einer gemeint ist.', a: 'Hub' }
            ] }
        ] },

      /* ---------- B ---------- */
      { kurz: 'Gerät und Aufgabe', titel: 'Zuordnen: Gerät und Aufgabe', min: 4, folien: [25, 26],
        aufgaben: [
          { typ: 'zuordnen', q: 'Was macht welches Gerät?',
            paare: [
              ['Repeater', 'verstärkt ein Signal und verlängert die Reichweite'],
              ['Hub', 'sendet ein Signal an alle angeschlossenen Geräte weiter'],
              ['Bridge', 'verbindet zwei Netzbereiche und filtert Datenpakete'],
              ['Switch', 'leitet Daten gezielt an den richtigen Port weiter']
            ] },
          { typ: 'zuordnen', q: 'Vergleiche aus dem Alltag: Welches Gerät passt zu welchem Bild?',
            paare: [
              ['Jemand ruft eine Nachricht laut in den Raum. Alle hören sie.', 'Hub'],
              ['Die Nachricht wird direkt an den richtigen Platz gebracht. Die anderen arbeiten weiter.', 'Switch'],
              ['In der Mitte eines langen Flurs ruft jemand die Nachricht noch einmal laut, damit sie hinten ankommt.', 'Repeater'],
              ['An der Tür zwischen zwei Räumen werden nur Zettel durchgereicht, die für den anderen Raum bestimmt sind.', 'Bridge']
            ] }
        ] },

      /* ---------- C ---------- */
      { kurz: 'Welches Gerät?', titel: 'Anwenden: Welches Gerät brauchst du?', min: 5, folien: 25,
        aufgaben: [
          { typ: 'kategorien', q: 'Welches Gerät passt zur Situation?',
            kats: GERAETE,
            items: [
              { t: 'Das Kabel zur Turnhalle ist sehr lang. Hinten kommt das Signal zu schwach an.', k: 'Repeater', why: 'Er verstärkt das Signal.' },
              { t: 'Die Nachricht von PC 1 soll nur bei PC 3 ankommen. Die anderen sollen ungestört weiterarbeiten.', k: 'Switch', why: 'Er verteilt gezielt.' },
              { t: 'Das Netz der Verwaltung und das Netz im Lehrerzimmer sollen verbunden werden. Dabei sollen die Datenpakete gefiltert werden.', k: 'Bridge', why: 'Sie verbindet zwei Netzbereiche und filtert.' },
              { t: 'Ein altes Gerät schickt jede Nachricht einfach an alle Rechner.', k: 'Hub', why: 'Er verteilt blind.' },
              { t: 'Im Computerraum sollen 16 PCs gezielt Daten austauschen.', k: 'Switch', why: 'Standard im Stern-Netz.' },
              { t: 'Im Garten ist das WLAN-Signal zu schwach. Es soll weiter reichen.', k: 'Repeater', why: 'Er verlängert die Reichweite.' },
              { t: 'Es verteilt blind.', k: 'Hub' },
              { t: 'Es verteilt gezielt.', k: 'Switch' },
              { t: 'Es verbindet zwei Netzbereiche.', k: 'Bridge' },
              { t: 'Es verstärkt das Signal.', k: 'Repeater' }
            ] }
        ] },

      /* ---------- D ---------- */
      { kurz: 'Rollenspiel', titel: 'Spielt es nach: Hub oder Switch?', min: 9, folien: [26, 27],
        hinweis: 'Im Unterricht habt ihr das als Rollenspiel gemacht. Hier spielst du es am Bildschirm nach. Probiere beide Geräte aus und beantworte dann die Fragen.',
        aufgaben: [
          { typ: 'figur', html: '<div class="sim"></div>', cap: 'Simulation: Wer bekommt die Nachricht?', init: hubSwitchSim },
          { typ: 'mehrfach', q: 'Stelle „Hub“ ein. PC 1 schickt eine Nachricht an PC 3. Wer bekommt die Nachricht?',
            opts: ['PC 2', 'PC 3', 'PC 4'], ok: [0, 1, 2],
            why: 'Der Hub verteilt blind an alle angeschlossenen Geräte. Gemeint war nur PC 3.' },
          { typ: 'mehrfach', q: 'Stelle „Switch“ ein. PC 1 schickt wieder an PC 3. Wer bekommt die Nachricht jetzt?',
            opts: ['PC 2', 'PC 3', 'PC 4'], ok: [1],
            why: 'Der Switch leitet die Nachricht gezielt an den Port von PC 3 weiter.' },
          { typ: 'wahl', q: 'Mit Hub: PC 1 sendet gerade. PC 2 möchte gleichzeitig an PC 4 senden. Was passiert?',
            opts: ['PC 2 kann ohne Probleme gleichzeitig senden.',
                   'PC 2 muss warten, weil die Nachricht von PC 1 gerade bei allen ankommt.',
                   'PC 4 bekommt beide Nachrichten sauber sortiert.',
                   'Der Hub schickt die Nachricht von PC 2 ins Internet.'],
            ok: 1, why: 'Wie im Klassenraum: Wenn einer laut ruft und ein Zweiter gleichzeitig ruft, versteht man nichts mehr. Also muss er warten.' },
          { typ: 'wahl', q: 'Und mit Switch?',
            opts: ['PC 2 muss auch warten.',
                   'Die Nachricht von PC 2 geht an alle.',
                   'PC 2 kann gleichzeitig an PC 4 senden, weil der Switch die Nachrichten gezielt verteilt.',
                   'Der Switch schaltet PC 2 ab.'],
            ok: 2, why: 'Folie 26: Die Nachricht geht direkt an den richtigen Platz. Die anderen können weiterarbeiten.' },
          { typ: 'wahl', q: 'Warum ist ein Switch in einem großen Netz, z. B. mit 16 PCs, viel besser als ein Hub?',
            opts: ['Ein Hub hat keine Anschlüsse für Kabel.',
                   'Ein Switch braucht keinen Strom.',
                   'Beim Hub würden alle 16 PCs jede Nachricht bekommen – das Netz wird voll und langsam.',
                   'Beim Switch braucht man keine Kabel.'],
            ok: 2, why: 'Je mehr Geräte, desto mehr stört das blinde Verteilen.' },
          { typ: 'wahl', q: 'Welchen Satz schreibst du als Ergebnis des Rollenspiels auf (Folie 27)?',
            opts: ['Hub und Switch machen genau dasselbe.',
                   'Der Switch verteilt an alle, der Hub gezielt.',
                   'Der Hub verstärkt nur das Signal.',
                   'Der Hub verteilt blind an alle, der Switch gezielt an den richtigen Empfänger.'],
            ok: 3, why: 'Merke: Hub verteilt blind. Switch verteilt gezielt.' }
        ] },

      /* ---------- E ---------- */
      { kurz: 'Fehlersuche', titel: 'Fehlersuche: Die Störung eingrenzen', min: 7,
        hinweis: 'Grüner Haken = das Gerät erreicht die anderen. Rotes Kreuz = das Gerät erreicht niemanden.',
        aufgaben: [
          { typ: 'wahl', q: 'PC 3 erreicht keinen anderen Rechner. PC 1, PC 2 und PC 4 erreichen sich gegenseitig. Wo liegt der Fehler am wahrscheinlichsten?',
            svg: sternFall(['ok', 'ok', 'fehler', 'ok'], 'Stern-Netz mit Switch: PC 1, PC 2 und PC 4 haben einen grünen Haken, PC 3 ein rotes Kreuz.'),
            opts: ['am Switch', 'am Kabel oder Anschluss von PC 3', 'an allen Kabeln', 'am Router'],
            ok: 1, why: 'Nur ein Gerät ist betroffen. Der Switch funktioniert, sonst hätten auch die anderen ein Problem.' },
          { typ: 'wahl', q: 'Kein Rechner erreicht einen anderen. Alle Kabel sind richtig eingesteckt. Was prüfst du?',
            svg: sternFall(['fehler', 'fehler', 'fehler', 'fehler'], 'Stern-Netz mit Switch: Alle vier PCs haben ein rotes Kreuz.'),
            opts: ['das Kabel von PC 1', 'die Bildschirme', 'den Switch – hat er Strom, leuchten seine Lämpchen?', 'die Tastaturen'],
            ok: 2, why: 'Sind alle betroffen, liegt der Fehler meistens am zentralen Gerät.' },
          { typ: 'wahl', q: 'PC 4 steht am Ende eines sehr langen Kabels. Die Verbindung bricht immer wieder ab, weil das Signal zu schwach ankommt. Was hilft?',
            opts: ['ein Repeater', 'ein zweiter Drucker', 'ein Hub statt des Switches', 'ein neuer Bildschirm'],
            ok: 0, why: 'Der Repeater verstärkt das Signal und verlängert die Reichweite.' },
          { typ: 'wahl', q: 'In einem Netz mit Hub wird es sehr langsam, sobald viele gleichzeitig senden. Was hilft?',
            opts: ['einen zweiten Hub dazustecken', 'den Hub durch einen Switch ersetzen', 'die PCs öfter neu starten', 'das Kabel zum Drucker abziehen'],
            ok: 1, why: 'Der Switch verteilt gezielt. Die anderen müssen nicht mithören und warten.' },
          { typ: 'ordnen', q: 'Bringe die Fehlersuche in eine sinnvolle Reihenfolge.',
            schritte: [
              'Feststellen, welche Geräte betroffen sind.',
              'Kabel und Anschluss (Port) prüfen.',
              'Den Fehler beheben, z. B. ein anderes Kabel einstecken.',
              'Noch einmal testen, ob die Verbindung klappt.'
            ],
            why: 'Erst eingrenzen, dann prüfen, dann beheben – und zum Schluss immer testen.' }
        ] },

      /* ---------- F ---------- */
      { kurz: 'Richtig oder falsch?', titel: 'Verstehen: Richtig oder falsch?', min: 3, folien: [25, 26],
        aufgaben: [
          { typ: 'kategorien', q: 'Stimmt die Aussage?',
            kats: ['richtig', 'falsch'],
            items: [
              { t: 'Ein Repeater verstärkt das Signal.', k: 'richtig' },
              { t: 'Ein Hub schickt die Nachricht nur an den richtigen Empfänger.', k: 'falsch', why: 'Das macht der Switch. Der Hub verteilt blind an alle.' },
              { t: 'Eine Bridge verbindet zwei Netzbereiche.', k: 'richtig' },
              { t: 'Ein Switch leitet Daten gezielt an den richtigen Port weiter.', k: 'richtig' },
              { t: 'Ein Repeater filtert Datenpakete.', k: 'falsch', why: 'Filtern tut die Bridge. Der Repeater verstärkt nur.' },
              { t: 'Beim Switch können die anderen Geräte weiterarbeiten, während eine Nachricht unterwegs ist.', k: 'richtig' }
            ] }
        ] },

      /* ---------- G ---------- */
      { kurz: 'Erklären', titel: 'Erklären wie in der Probe', min: 9,
        hinweis: 'Schreibe zuerst selbst eine Antwort in ganzen Sätzen, dann vergleiche mit der Musterlösung.',
        aufgaben: [
          { typ: 'frei', q: 'Erkläre den Unterschied zwischen einem Hub und einem Switch.',
            punkte: [
              { t: 'Der Hub schickt die Daten an alle angeschlossenen Geräte (verteilt blind).', k: ['alle', 'blind', 'jeden', 'jedem'] },
              { t: 'Der Switch schickt die Daten gezielt nur an den richtigen Empfänger bzw. Port.', k: ['gezielt', 'richtig', 'nur an', 'nur zu', 'nur den', 'nur dem', 'bestimmt', 'port', 'empfaenger'] }
            ],
            muster: 'Ein Hub sendet eine Nachricht an alle angeschlossenen Geräte weiter – er verteilt blind, auch wenn nur ein Gerät gemeint ist. Ein Switch leitet die Nachricht gezielt nur an den richtigen Port weiter, also nur an das Gerät, für das sie bestimmt ist. Die anderen können weiterarbeiten.' },
          { typ: 'frei', q: 'Erkläre mit dem Beispiel aus dem Klassenraum (Folie 26), wie ein Hub arbeitet und warum ein Switch besser ist.',
            punkte: [
              { t: 'Hub: wie wenn jemand eine Nachricht laut in den Raum ruft.', k: ['ruf', 'laut', 'schrei'] },
              { t: 'Alle hören sie, obwohl nur eine Person gemeint ist.', k: ['alle', 'jeder', 'gemeint'] },
              { t: 'Switch: Die Nachricht geht direkt an den richtigen Platz, die anderen können weiterarbeiten.', k: ['direkt', 'richtigen platz', 'gezielt', 'weiterarbeiten', 'weiter arbeiten', 'ungestoert', 'nicht gestoert'] }
            ],
            muster: 'Ein Hub ist wie eine Person, die eine Nachricht laut in den Raum ruft: Alle hören sie, auch wenn nur eine Person gemeint ist, und die anderen werden gestört. Beim Switch wird die Nachricht direkt an den richtigen Platz gebracht. Die anderen bekommen nichts mit und können weiterarbeiten.' },
          { typ: 'frei', q: 'Nur PC 3 hat keine Verbindung, alle anderen schon. Beschreibe, wie du den Fehler eingrenzt und behebst.',
            zeilen: 5,
            punkte: [
              { t: 'Nur ein Gerät ist betroffen – der Switch funktioniert also.', k: ['nur', 'switch funktioniert', 'switch geht', 'nicht am switch', 'nicht der switch', 'die anderen', 'andere pcs'] },
              { t: 'Kabel und Anschluss von PC 3 prüfen.', k: ['kabel', 'anschluss', 'stecker', 'port', 'eingesteckt'] },
              { t: 'Den Fehler beheben und noch einmal testen.', k: ['test', 'nochmal', 'noch einmal', 'erneut', 'austausch', 'neues kabel', 'anderes kabel', 'ping', 'wechsel'] }
            ],
            muster: 'Da nur PC 3 betroffen ist, funktioniert der Switch – sonst hätten auch die anderen PCs keine Verbindung. Ich prüfe deshalb das Kabel und den Anschluss von PC 3: Ist das Kabel richtig eingesteckt oder beschädigt? Ich stecke es neu ein oder nehme ein anderes Kabel und teste dann noch einmal.' }
        ] }
    ]
  });
})();
