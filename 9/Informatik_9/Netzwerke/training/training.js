/* ============================================================
   Netzwerke – Training nach Stunden, Informatik 9
   Gemeinsame Logik für modul-1.html bis modul-6.html.
   Jede Modulseite lädt zuerst diese Datei und danach ihre
   Aufgaben (modul-N.js), die Training.start({...}) aufrufen.

   Aufgabentypen (Feld "typ"):
     luecken    Sätze mit Lücken {} – optional mit Wortspeicher (bank)
     wahl       genau eine Antwort anklicken
     mehrfach   alle passenden Antworten anklicken, dann prüfen
     kategorien jede Aussage einer Kategorie zuordnen
     zuordnen   Begriff und Erklärung per Auswahlliste verbinden
     ordnen     Schritte in die richtige Reihenfolge bringen
     bin        Dezimalzahl in 8 Bit umwandeln
     dez        8 Bit in eine Dezimalzahl umwandeln
     ip         ganze IP-Adresse umwandeln (richtung "bin" oder "dez")
     frei       eigene Erklärung schreiben, dann mit Kernpunkten
                und Musterlösung vergleichen (wie Teil B der Probe)
     figur      Bild oder Skizze ohne Bewertung

   Bei Lücken erlaubt "|" mehrere richtige Schreibweisen.
   Stichwörter bei "frei" sind reguläre Ausdrücke in Kleinschrift
   mit ae/oe/ue/ss statt Umlauten.
   ============================================================ */
(function () {
  'use strict';

  const PDF = '../netzwerke-praesentation.pdf';
  const SPEICHER = 'inf9-netz-training';
  const BUCHST = 'ABCDEFGHIJKL';
  const KLEIN = 'abcdefghijklmnopqrstuvwxyz';
  const W8 = [128, 64, 32, 16, 8, 4, 2, 1];
  const MODULE = 6;
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  function h(tag, attrs, html) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    if (html != null) e.innerHTML = html;
    return e;
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const strip = s => { const d = document.createElement('div'); d.innerHTML = s; return d.textContent; };

  /* Vergleich: Kleinschrift, Umlaute, Leerzeichen, Satzzeichen am Ende egal */
  function norm(s) {
    return String(s).toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[„“”"'‚‘’»«]/g, '')
      .replace(/\s+/g, ' ').replace(/[.,;:!?]+$/, '').trim();
  }
  /* für die Stichwortsuche zusätzlich ohne Bindestriche (W-LAN = WLAN) */
  const normText = s => ' ' + norm(s).replace(/-/g, '') + ' ';

  function mischen(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function mischenAnders(n) {
    const id = [...Array(n).keys()];
    if (n < 2) return id;
    let a;
    do { a = mischen(id); } while (a.every((v, i) => v === i));
    return a;
  }

  const toBin = n => Number(n).toString(2).padStart(8, '0');
  const summeText = bin => {
    const s = W8.filter((w, k) => bin[k] === '1');
    return s.length ? s.join(' + ') : '0';
  };
  const folienText = f => Array.isArray(f) && f.length > 1 && f[0] !== f[1] ? 'Folien ' + f[0] + '–' + f[1] : 'Folie ' + (Array.isArray(f) ? f[0] : f);
  const folienStart = f => Array.isArray(f) ? f[0] : f;

  const UHR = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  const FOLIE = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M12 17v3M8 20h8"/></svg>';

  /* ---------- Zustand ---------- */
  const S = { M: null, items: new Map(), teile: [] };
  const reg = id => S.items.set(id, { done: false, right: false });
  function mark(id, right) {
    S.items.set(id, { done: true, right: !!right });
    stand();
  }

  function speichern(done, right, total) {
    try {
      const alle = JSON.parse(localStorage.getItem(SPEICHER) || '{}') || {};
      const alt = alle[S.M.nr];
      const besser = !alt || alt.total !== total || right > alt.right || (right === alt.right && done > alt.done);
      if (besser) {
        alle[S.M.nr] = { right, done, total, zeit: Date.now() };
        localStorage.setItem(SPEICHER, JSON.stringify(alle));
      }
    } catch (e) { /* ohne Speicher geht es auch */ }
  }

  function stand() {
    let done = 0, right = 0;
    const total = S.items.size;
    const pro = S.M.teile.map(() => ({ d: 0, r: 0, t: 0 }));
    S.items.forEach((v, id) => {
      const p = pro[+id.slice(1, id.indexOf('-'))];
      p.t++;
      if (v.done) { p.d++; done++; }
      if (v.right) { p.r++; right++; }
    });
    $('#score-done').textContent = done;
    $('#score-total').textContent = total;
    $('#score-right').textContent = right;
    $('#score-fill').style.width = total ? (done / total * 100) + '%' : '0%';
    pro.forEach((p, ti) => {
      const s = $('[data-stand="' + ti + '"]');
      if (s) s.textContent = 'Teil ' + BUCHST[ti] + ': ' + p.d + ' von ' + p.t + ' gelöst · ' + p.r + ' richtig';
      const c = $('[data-plan="' + ti + '"]');
      if (c) c.textContent = p.d + '/' + p.t;
      const a = $('.plan-list a[href="#teil-' + BUCHST[ti] + '"]');
      if (a) a.classList.toggle('fertig', p.t > 0 && p.d === p.t);
    });
    const g = $('#gesamt');
    if (g) {
      const q = total ? right / total : 0;
      if (!done) { g.className = 'result mid'; g.textContent = 'Du hast noch keine Aufgabe gelöst.'; }
      else if (done < total) { g.className = 'result mid'; g.textContent = 'Bisher: ' + done + ' von ' + total + ' Aufgaben gelöst, davon ' + right + ' richtig. Es fehlen noch ' + (total - done) + '.'; }
      else {
        g.className = 'result ' + (q >= 0.8 ? 'good' : q >= 0.5 ? 'mid' : 'low');
        g.textContent = 'Alle ' + total + ' Aufgaben gelöst, ' + right + ' davon richtig. ' +
          (q >= 0.8 ? 'Sehr gut – diese Stunde sitzt!' : q >= 0.5 ? 'Ordentlich! Wiederhole die Teile mit roten Aufgaben noch einmal.' : 'Schau dir die Folien noch einmal an und beginne die Teile neu.');
      }
    }
    if (done) speichern(done, right, total);
  }

  /* ---------- Bausteine ---------- */
  function karte(nr, q, a) {
    const card = h('div', { class: 'task' });
    if (q != null) card.append(h('div', { class: 'task-q' }, (nr ? '<span class="task-no">' + nr + '</span>' : '') + '<span class="q-txt">' + q + '</span>'));
    if (a && a.hinweis) card.append(h('p', { class: 'task-hint' }, a.hinweis));
    if (a) card.insertAdjacentHTML('beforeend', figurHtml(a));
    return card;
  }
  function figurHtml(a) {
    if (!a.bild && !a.svg && !a.html) return '';
    const inner = a.bild ? '<img src="' + a.bild + '" alt="' + esc(a.alt || '') + '" loading="lazy">' : (a.svg || a.html);
    return '<figure class="figur">' + inner + (a.cap ? '<figcaption class="cap">' + a.cap + '</figcaption>' : '') + '</figure>';
  }
  const fb = () => h('div', { class: 'feedback', 'aria-live': 'polite' });
  function setFb(el, cls, html) { el.className = 'feedback show ' + cls; el.innerHTML = html; }
  function clearFb(el) { el.className = 'feedback'; el.innerHTML = ''; }
  function setCls(el, cls) { el.classList.remove('ok', 'bad'); if (cls) el.classList.add(cls); }
  function knopf(text, cls) { return h('button', { type: 'button', class: 'btn ' + (cls || 'btn-main') }, text); }
  const warum = a => a.why ? '<span class="solution">' + a.why + '</span>' : '';

  /* ---------- Aufgabentypen ---------- */
  const TYPEN = {};

  TYPEN.figur = function (a) {
    const d = h('div', { class: 'figur-block' });
    if (a.text) d.append(h('p', { class: 'hint' }, a.text));
    d.insertAdjacentHTML('beforeend', figurHtml(a));
    return d;
  };

  TYPEN.wahl = function (a, id, nr) {
    reg(id);
    const card = karte(nr, a.q, a);
    const lang = a.opts.some(o => strip(o).length > 26);
    const ch = h('div', { class: 'choices ' + (lang ? 'spalte' : 'kurz') });
    a.opts.forEach((o, k) => ch.append(h('button', { type: 'button', 'data-k': k }, o)));
    const f = fb();
    card.append(ch, f);
    ch.addEventListener('click', e => {
      const b = e.target.closest('button[data-k]');
      if (!b || card.dataset.fertig) return;
      card.dataset.fertig = '1';
      const ok = +b.dataset.k === a.ok;
      $$('button', ch).forEach(x => {
        x.disabled = true;
        if (+x.dataset.k === a.ok) x.classList.add(ok ? 'picked-ok' : 'reveal');
      });
      if (!ok) b.classList.add('picked-bad');
      card.classList.add(ok ? 'ok' : 'bad');
      setFb(f, ok ? 'ok' : 'bad', (ok ? 'Richtig! ' : 'Leider falsch. Richtig ist die grün gestrichelte Antwort. ') + warum(a));
      mark(id, ok);
    });
    return card;
  };

  TYPEN.mehrfach = function (a, id, nr) {
    reg(id);
    const card = karte(nr, a.q, a);
    card.append(h('p', { class: 'task-hint' }, 'Mehrere Antworten können richtig sein. Wähle alle passenden aus und klicke dann auf „Prüfen“.'));
    const lang = a.opts.some(o => strip(o).length > 26);
    const ch = h('div', { class: 'choices ' + (lang ? 'spalte' : 'kurz') });
    a.opts.forEach((o, k) => ch.append(h('button', { type: 'button', 'data-k': k, 'aria-pressed': 'false' }, o)));
    const act = h('div', { class: 'task-actions' });
    const pr = knopf('Prüfen');
    act.append(pr);
    const f = fb();
    card.append(ch, act, f);
    ch.addEventListener('click', e => {
      const b = e.target.closest('button[data-k]');
      if (!b || card.dataset.fertig) return;
      b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    });
    pr.addEventListener('click', () => {
      if (card.dataset.fertig) return;
      const gew = $$('button[data-k]', ch).filter(b => b.getAttribute('aria-pressed') === 'true').map(b => +b.dataset.k);
      if (!gew.length) { setFb(f, 'mid', 'Wähle zuerst mindestens eine Antwort aus.'); return; }
      card.dataset.fertig = '1';
      pr.disabled = true;
      const soll = new Set(a.ok);
      const ok = gew.length === soll.size && gew.every(k => soll.has(k));
      $$('button[data-k]', ch).forEach(b => {
        const k = +b.dataset.k, g = gew.includes(k);
        b.disabled = true;
        b.setAttribute('aria-pressed', 'false');
        if (g && soll.has(k)) b.classList.add('picked-ok');
        else if (g) b.classList.add('picked-bad');
        else if (soll.has(k)) b.classList.add('reveal');
      });
      card.classList.add(ok ? 'ok' : 'bad');
      setFb(f, ok ? 'ok' : 'bad',
        (ok ? 'Richtig! Du hast alle passenden Antworten gefunden. '
            : 'Noch nicht ganz. Grün = richtig gewählt, grün gestrichelt = vergessen, rot = passt nicht. ') + warum(a));
      mark(id, ok);
    });
    return card;
  };

  TYPEN.kategorien = function (a, id, nr) {
    const card = karte(nr, a.q, a);
    a.items.forEach((it, i) => {
      const iid = id + '-' + i;
      reg(iid);
      const row = h('div', { class: 'kat-row' });
      row.append(h('div', { class: 'k-txt' }, '<span class="k-nr">' + KLEIN[i] + ')</span><span>' + it.t + '</span>'));
      const ch = h('div', { class: 'choices kurz', role: 'group', 'aria-label': 'Antwort zu ' + KLEIN[i] + ')' });
      a.kats.forEach((k, ki) => ch.append(h('button', { type: 'button', 'data-k': ki }, k)));
      const f = fb();
      row.append(ch, f);
      ch.addEventListener('click', e => {
        const b = e.target.closest('button[data-k]');
        if (!b || row.dataset.fertig) return;
        row.dataset.fertig = '1';
        const soll = a.kats.indexOf(it.k);
        const ok = +b.dataset.k === soll;
        $$('button', ch).forEach(x => {
          x.disabled = true;
          if (+x.dataset.k === soll) x.classList.add(ok ? 'picked-ok' : 'reveal');
        });
        if (!ok) b.classList.add('picked-bad');
        row.classList.add(ok ? 'ok' : 'bad');
        setFb(f, ok ? 'ok' : 'bad', (ok ? 'Richtig. ' : 'Falsch – richtig ist: ' + it.k + '. ') + (it.why || ''));
        mark(iid, ok);
      });
      card.append(row);
    });
    return card;
  };

  function pruefeLuecke(def, val) {
    if (def && typeof def === 'object') {
      const r = def.check(val.trim());
      return r === true ? { ok: true } : { ok: false, msg: typeof r === 'string' ? r : '' };
    }
    return { ok: String(def).split('|').map(norm).includes(norm(val)) };
  }
  const loesungVon = def => def && typeof def === 'object' ? def.loesung : String(def).split('|')[0];
  function tippAnfang(def) {
    if (def && typeof def === 'object') return '';
    const w = String(def).split('|')[0];
    return w.length >= 4 && /^[a-zäöü]/i.test(w) ? ' Tipp: Das Wort beginnt mit „' + w[0] + '“.' : '';
  }

  TYPEN.luecken = function (a, id, nr) {
    const card = karte(nr, a.q || 'Fülle die Lücken aus.', a);
    let bank = null, aktiv = null;
    if (a.bank) {
      bank = h('div', { class: 'bank' });
      bank.append(h('span', { class: 'bank-label' }, 'Wortspeicher – tippe ein Wort an, dann landet es in der Lücke mit dem Cursor'));
      a.bank.forEach(w => bank.append(h('button', { type: 'button', 'data-w': w }, esc(w))));
      card.append(bank);
    }
    const gaps = [], rows = [];
    a.saetze.forEach((s, si) => {
      const row = h('div', { class: 'l-row' });
      const stuecke = s.t.split('{}');
      const defs = Array.isArray(s.a) ? s.a : [s.a];
      let html = '';
      stuecke.forEach((p, pi) => {
        html += p;
        if (pi < stuecke.length - 1) {
          html += '<input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Lücke ' +
            KLEIN[si] + (stuecke.length > 2 ? ' ' + (pi + 1) : '') + '"' + (s.breite ? ' style="width:' + s.breite + '"' : '') + '>';
        }
      });
      row.append(h('div', { class: 'task-q' }, '<span class="k-nr">' + KLEIN[si] + ')</span><span class="q-txt">' + html + '</span>'));
      const f = fb();
      row.append(f);
      $$('input', row).forEach((inp, gi) => {
        const gid = id + '-' + si + '-' + gi;
        reg(gid);
        gaps.push({ inp, def: defs[gi], id: gid, row, tries: 0, zustand: 'leer', msg: '' });
      });
      rows.push({ row, f });
      card.append(row);
    });
    const act = h('div', { class: 'task-actions' });
    const pr = knopf('Antworten prüfen');
    act.append(pr);
    const res = fb();
    card.append(act, res);

    function bankMarkieren() {
      if (!bank) return;
      const werte = gaps.map(g => norm(g.inp.value));
      $$('button[data-w]', bank).forEach(b => b.classList.toggle('used', werte.includes(norm(b.dataset.w))));
    }
    card.addEventListener('focusin', e => { if (e.target.matches('input')) aktiv = e.target; });
    card.addEventListener('input', e => {
      if (e.target.matches('input') && !e.target.readOnly) setCls(e.target, '');
      bankMarkieren();
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.matches('input')) { e.preventDefault(); pruefen(); }
    });
    if (bank) bank.addEventListener('click', e => {
      const b = e.target.closest('button[data-w]');
      if (!b) return;
      let ziel = aktiv && !aktiv.readOnly ? aktiv : null;
      if (!ziel) { const g = gaps.find(x => !x.inp.readOnly && !x.inp.value.trim()); ziel = g && g.inp; }
      if (!ziel) return;
      ziel.value = b.dataset.w;
      bankMarkieren();
      const next = gaps.find(x => !x.inp.readOnly && !x.inp.value.trim());
      (next ? next.inp : ziel).focus();
    });

    function pruefen() {
      let neu = 0;
      gaps.forEach(g => {
        if (g.zustand === 'richtig' || g.zustand === 'loesung') return;
        const val = g.inp.value;
        if (!val.trim()) return;
        neu++;
        const r = pruefeLuecke(g.def, val);
        g.tries++;
        if (r.ok) {
          g.zustand = 'richtig'; g.inp.readOnly = true; setCls(g.inp, 'ok'); mark(g.id, true);
        } else if (g.tries >= 2) {
          g.zustand = 'loesung'; g.inp.readOnly = true; setCls(g.inp, 'bad');
          g.msg = 'Lösung: <b>' + loesungVon(g.def) + '</b>';
          mark(g.id, false);
        } else {
          g.zustand = 'falsch'; setCls(g.inp, 'bad');
          g.msg = (r.msg ? r.msg + ' ' : 'Noch nicht richtig – versuche es noch einmal.') + tippAnfang(g.def);
        }
      });
      rows.forEach(({ row, f }) => {
        const gs = gaps.filter(g => g.row === row);
        if (gs.every(g => g.zustand === 'richtig')) {
          row.classList.add('ok'); setFb(f, 'ok', 'Richtig!');
          return;
        }
        const msgs = gs.filter(g => g.zustand === 'falsch' || g.zustand === 'loesung').map(g => g.msg);
        if (msgs.length) setFb(f, gs.some(g => g.zustand === 'loesung') ? 'bad' : 'mid', msgs.join(' '));
        else clearFb(f);
      });
      if (!neu && gaps.some(g => g.zustand === 'leer')) setFb(res, 'mid', 'Fülle zuerst mindestens eine Lücke aus.');
      else clearFb(res);
      if (gaps.every(g => g.zustand === 'richtig' || g.zustand === 'loesung')) {
        pr.disabled = true;
        card.classList.add(gaps.every(g => g.zustand === 'richtig') ? 'ok' : 'bad');
      }
      gaps.forEach(g => { if (g.zustand === 'falsch') g.zustand = 'offen'; });
    }
    pr.addEventListener('click', pruefen);
    return card;
  };

  TYPEN.zuordnen = function (a, id, nr) {
    const card = karte(nr, a.q || 'Ordne richtig zu.', a);
    const rechts = mischen(a.paare.map((p, i) => ({ t: strip(p[1]), i })));
    const rows = [];
    a.paare.forEach((p, i) => {
      const pid = id + '-' + i;
      reg(pid);
      const row = h('div', { class: 'z-row' });
      const sel = h('select', { 'aria-label': 'Passende Antwort für ' + strip(p[0]) });
      sel.innerHTML = '<option value="">– bitte wählen –</option>' + rechts.map(r => '<option value="' + r.i + '">' + esc(r.t) + '</option>').join('');
      const f = fb();
      row.append(h('div', { class: 'z-links' }, p[0]), sel, f);
      rows.push({ sel, f, i, pid, tries: 0, fertig: false, p });
      card.append(row);
    });
    const act = h('div', { class: 'task-actions' });
    const pr = knopf('Zuordnung prüfen');
    act.append(pr);
    const res = fb();
    card.append(act, res);
    card.addEventListener('change', e => {
      const r = rows.find(x => x.sel === e.target);
      if (r && !r.fertig) { setCls(r.sel, ''); clearFb(r.f); }
    });
    pr.addEventListener('click', () => {
      let neu = 0;
      rows.forEach(r => {
        if (r.fertig || r.sel.value === '') return;
        neu++;
        r.tries++;
        const ok = +r.sel.value === r.i;
        if (ok) {
          r.fertig = true; r.sel.disabled = true; setCls(r.sel, 'ok'); clearFb(r.f); mark(r.pid, true);
        } else if (r.tries >= 2) {
          r.fertig = true; r.sel.disabled = true; setCls(r.sel, 'bad');
          setFb(r.f, 'bad', 'Richtig wäre: <b>' + r.p[1] + '</b>');
          mark(r.pid, false);
        } else {
          setCls(r.sel, 'bad'); setFb(r.f, 'mid', 'Passt noch nicht – versuche es noch einmal.');
        }
      });
      if (!neu && rows.some(r => !r.fertig)) setFb(res, 'mid', 'Wähle zuerst bei mindestens einer Zeile etwas aus.');
      else clearFb(res);
      if (rows.every(r => r.fertig)) {
        pr.disabled = true;
        card.classList.add(rows.every(r => r.sel.classList.contains('ok')) ? 'ok' : 'bad');
      }
    });
    return card;
  };

  TYPEN.ordnen = function (a, id, nr) {
    reg(id);
    const card = karte(nr, a.q, a);
    card.append(h('p', { class: 'task-hint' }, 'Verschiebe die Schritte mit den Pfeilen. Dann klicke auf „Reihenfolge prüfen“.'));
    let order = a.start ? a.start.slice() : mischenAnders(a.schritte.length);
    let tries = 0, fertig = false;
    const ol = h('ol', { class: 'ordnen' });
    const act = h('div', { class: 'task-actions' });
    const pr = knopf('Reihenfolge prüfen');
    act.append(pr);
    const f = fb();
    card.append(ol, act, f);

    function zeichnen(markieren, fokus) {
      ol.innerHTML = '';
      order.forEach((si, pos) => {
        const li = h('li', null, '<span class="o-pos">' + (pos + 1) + '</span><span class="o-txt">' + a.schritte[si] + '</span>');
        if (markieren) li.classList.add(si === pos ? 'ok' : 'bad');
        if (!fertig) {
          const box = h('span', { class: 'o-btns' });
          const txt = strip(a.schritte[si]);
          const up = h('button', { type: 'button', 'aria-label': 'Nach oben: ' + txt }, '&uarr;');
          const dn = h('button', { type: 'button', 'aria-label': 'Nach unten: ' + txt }, '&darr;');
          up.disabled = pos === 0;
          dn.disabled = pos === order.length - 1;
          up.addEventListener('click', () => schieben(pos, -1));
          dn.addEventListener('click', () => schieben(pos, 1));
          box.append(up, dn);
          li.append(box);
        }
        ol.append(li);
      });
      if (fokus) {
        const li = ol.children[fokus.pos];
        const btns = li ? $$('button', li) : [];
        const b = btns[fokus.dir < 0 ? 0 : 1];
        (b && !b.disabled ? b : btns.find(x => !x.disabled) || pr).focus();
      }
    }
    function schieben(pos, dir) {
      const ziel = pos + dir;
      if (ziel < 0 || ziel >= order.length) return;
      [order[pos], order[ziel]] = [order[ziel], order[pos]];
      clearFb(f);
      zeichnen(false, { pos: ziel, dir });
    }
    pr.addEventListener('click', () => {
      if (fertig) return;
      tries++;
      const ok = order.every((si, pos) => si === pos);
      if (ok) {
        fertig = true; pr.disabled = true; zeichnen(true);
        card.classList.add('ok');
        setFb(f, 'ok', 'Richtig! Die Reihenfolge stimmt. ' + warum(a));
        mark(id, true);
      } else if (tries >= 2) {
        fertig = true; pr.disabled = true;
        order = order.map((_, i) => i);
        zeichnen(true);
        card.classList.add('bad');
        setFb(f, 'bad', 'Noch nicht richtig. So ist die richtige Reihenfolge. ' + warum(a));
        mark(id, false);
      } else {
        zeichnen(true);
        setFb(f, 'mid', 'Grüne Schritte stehen schon richtig. Verschiebe die roten und prüfe noch einmal.');
      }
    });
    zeichnen(false);
    return card;
  };

  function bitFilter(box, zeile) {
    /* Inhalt markieren, damit ein neues Zeichen das alte ersetzt */
    box.addEventListener('focusin', e => { if (e.target.matches('.bit input') && !e.target.readOnly) e.target.select(); });
    box.addEventListener('input', e => {
      const inp = e.target;
      if (!inp.matches('.bit input')) return;
      inp.value = inp.value.replace(/[^01]/g, '').slice(-1);
      setCls(inp, '');
      if (inp.value) {
        const alle = $$('.bit input', inp.closest(zeile));
        const next = alle[alle.indexOf(inp) + 1];
        if (next) next.focus();
      }
    });
    box.addEventListener('keydown', e => {
      const inp = e.target;
      if (!inp.matches('.bit input') || e.key !== 'Backspace' || inp.value) return;
      const alle = $$('.bit input', inp.closest(zeile));
      const prev = alle[alle.indexOf(inp) - 1];
      if (prev && !prev.readOnly) { prev.focus(); prev.value = ''; e.preventDefault(); }
    });
  }
  function schritteZuBin(z) {
    const out = [];
    let rest = z;
    W8.forEach(w => {
      if (w <= rest) { out.push('Passt ' + w + ' in ' + rest + '? <b>Ja</b> → 1, es bleiben ' + (rest - w) + '.'); rest -= w; }
      else out.push('Passt ' + w + ' in ' + rest + '? <b>Nein</b> → 0.');
    });
    return out;
  }

  TYPEN.bin = function (a, id, nr) {
    const card = karte(nr, a.q || 'Wandle jede Zahl in acht Bit um. Trage in jedes Feld eine 0 oder eine 1 ein.', a);
    const items = [];
    a.zahlen.forEach((z, i) => {
      const iid = id + '-' + i;
      reg(iid);
      const bin = toBin(z);
      const row = h('div', { class: 'bin-row' });
      row.innerHTML =
        '<div class="task-q"><span class="k-nr">' + KLEIN[i] + ')</span><span class="q-txt">Wandle <b>' + z + '</b> um.</span></div>' +
        '<div class="bits">' + W8.map(w => '<span class="bit"><span class="w">' + w + '</span><input type="text" inputmode="numeric" maxlength="1" autocomplete="off" aria-label="Stelle ' + w + ' bei der Zahl ' + z + '"></span>').join('') + '</div>';
      const tb = h('button', { type: 'button', class: 'btn btn-tipp' }, 'Tipp');
      const tipp = h('div', { class: 'tipp' });
      const f = fb();
      const zeile = h('div', { class: 'task-actions' });
      zeile.style.marginTop = '6px';
      zeile.append(tb);
      row.append(zeile, tipp, f);
      let stufe = 0;
      const schritte = schritteZuBin(z);
      tb.addEventListener('click', () => {
        stufe = Math.min(stufe + 1, 3);
        tipp.innerHTML = 'Beginne links beim größten Stellenwert:<ol>' + schritte.slice(0, stufe).map(s => '<li>' + s + '</li>').join('') + '</ol>' +
          (stufe >= 3 ? 'So machst du weiter bis zur 1.' : 'Klicke noch einmal für den nächsten Schritt.');
        tipp.classList.add('show');
        if (stufe >= 3) tb.disabled = true;
      });
      items.push({ row, bin, z, iid, tries: 0, fertig: false, f, tb });
      card.append(row);
    });
    bitFilter(card, '.bin-row');
    const act = h('div', { class: 'task-actions' });
    const pr = knopf('Antworten prüfen');
    act.append(pr);
    const res = fb();
    card.append(act, res);
    pr.addEventListener('click', () => {
      let neu = 0;
      items.forEach(it => {
        if (it.fertig) return;
        const inputs = $$('.bit input', it.row);
        if (inputs.every(x => x.value === '')) return;
        neu++;
        if (inputs.some(x => x.value === '')) { setFb(it.f, 'mid', 'Fülle alle 8 Felder aus – auch die Nullen.'); return; }
        it.tries++;
        const ok = inputs.map(x => x.value).join('') === it.bin;
        inputs.forEach((x, k) => setCls(x, x.value === it.bin[k] ? 'ok' : 'bad'));
        if (ok) {
          it.fertig = true;
          setFb(it.f, 'ok', 'Richtig! ' + summeText(it.bin) + ' = ' + it.z);
        } else if (it.tries >= 2) {
          it.fertig = true;
          setFb(it.f, 'bad', 'Noch nicht richtig. <span class="solution">Lösung: ' + it.bin + ' (' + summeText(it.bin) + ' = ' + it.z + ')</span>');
        } else {
          setFb(it.f, 'mid', 'Noch nicht richtig. Die roten Felder stimmen nicht – verbessere sie und prüfe noch einmal.');
        }
        if (it.fertig) {
          inputs.forEach(x => { x.readOnly = true; });
          it.tb.disabled = true;
          mark(it.iid, ok);
        }
      });
      if (!neu && items.some(it => !it.fertig)) setFb(res, 'mid', 'Rechne zuerst mindestens eine Zahl.');
      else clearFb(res);
      if (items.every(it => it.fertig)) pr.disabled = true;
    });
    return card;
  };

  TYPEN.dez = function (a, id, nr) {
    const card = karte(nr, a.q || 'Welche Dezimalzahl ist das? Addiere die Stellenwerte, unter denen eine 1 steht.', a);
    const items = [];
    a.bins.forEach((bin, i) => {
      const iid = id + '-' + i;
      reg(iid);
      const z = parseInt(bin, 2);
      const row = h('div', { class: 'bin-row' });
      row.innerHTML =
        '<div class="task-q"><span class="k-nr">' + KLEIN[i] + ')</span><span class="q-txt">Welche Zahl ist <b>' + bin + '</b>?</span></div>' +
        '<div class="bits">' + W8.map((w, k) => '<span class="bit"><span class="w">' + w + '</span><span class="b">' + bin[k] + '</span></span>').join('') + '</div>' +
        '<div class="task-q" style="margin-top:6px"><span class="q-txt">= <input type="text" inputmode="numeric" autocomplete="off" aria-label="Dezimalzahl zu ' + bin + '" style="min-width:0;width:90px"></span></div>';
      const tb = h('button', { type: 'button', class: 'btn btn-tipp' }, 'Tipp');
      const tipp = h('div', { class: 'tipp' });
      const f = fb();
      const zeile = h('div', { class: 'task-actions' });
      zeile.style.marginTop = '6px';
      zeile.append(tb);
      row.append(zeile, tipp, f);
      tb.addEventListener('click', () => {
        $$('.bit', row).forEach((b, k) => b.querySelector('.w').classList.toggle('an', bin[k] === '1'));
        tipp.innerHTML = 'Die grünen Stellenwerte zählen mit. Rechne: ' + summeText(bin) + ' = ?';
        tipp.classList.add('show');
        tb.disabled = true;
      });
      items.push({ row, z, bin, iid, tries: 0, fertig: false, f, tb, inp: $('input', row) });
      card.append(row);
    });
    const act = h('div', { class: 'task-actions' });
    const pr = knopf('Antworten prüfen');
    act.append(pr);
    const res = fb();
    card.append(act, res);
    function pruefen() {
      let neu = 0;
      items.forEach(it => {
        if (it.fertig || !it.inp.value.trim()) return;
        neu++;
        it.tries++;
        const ok = it.inp.value.trim() === String(it.z);
        setCls(it.inp, ok ? 'ok' : 'bad');
        if (ok) { it.fertig = true; setFb(it.f, 'ok', 'Richtig! ' + summeText(it.bin) + ' = ' + it.z); }
        else if (it.tries >= 2) { it.fertig = true; setFb(it.f, 'bad', 'Noch nicht richtig. <span class="solution">Lösung: ' + summeText(it.bin) + ' = ' + it.z + '</span>'); }
        else setFb(it.f, 'mid', 'Noch nicht richtig – rechne noch einmal nach.');
        if (it.fertig) { it.inp.readOnly = true; it.tb.disabled = true; mark(it.iid, ok); }
      });
      if (!neu && items.some(it => !it.fertig)) setFb(res, 'mid', 'Rechne zuerst mindestens eine Zahl.');
      else clearFb(res);
      if (items.every(it => it.fertig)) pr.disabled = true;
    }
    pr.addEventListener('click', pruefen);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('input')) { e.preventDefault(); pruefen(); } });
    return card;
  };

  TYPEN.ip = function (a, id, nr) {
    reg(id);
    const zuBin = a.richtung === 'bin';
    const soll = zuBin ? a.ip.split('.').map(n => toBin(+n)) : a.bin.split('.').map(b => String(parseInt(b, 2)));
    const zeigen = zuBin ? a.ip : a.bin;
    const card = karte(nr, a.q, a);
    card.append(h('div', { class: 'ip-show' }, zeigen));
    const box = h('div', { class: 'ip-in' + (zuBin ? '' : ' dez') });
    soll.forEach((_, i) => {
      if (i) box.append(h('span', { class: 'dot', 'aria-hidden': 'true' }, '.'));
      box.append(h('input', {
        type: 'text', inputmode: 'numeric', autocomplete: 'off', maxlength: zuBin ? '8' : '3',
        'aria-label': (i + 1) + '. Block', placeholder: zuBin ? '8 Stellen' : ''
      }));
    });
    const inputs = $$('input', box);
    if (zuBin) box.addEventListener('input', e => { e.target.value = e.target.value.replace(/[^01]/g, '').slice(0, 8); setCls(e.target, ''); });
    else box.addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3); setCls(e.target, ''); });
    const tipp = h('div', { class: 'tipp' }, zuBin
      ? 'Wandle jeden Block einzeln um, genau wie bei den Zahlen oben. Jeder Block hat genau 8 Stellen – vorne dürfen Nullen stehen.'
      : 'Rechne jeden Block einzeln aus: Addiere die Stellenwerte 128, 64, 32, 16, 8, 4, 2, 1, unter denen eine 1 steht.');
    const act = h('div', { class: 'task-actions' });
    const pr = knopf('Adresse prüfen');
    const tb = h('button', { type: 'button', class: 'btn btn-tipp' }, 'Tipp');
    act.append(pr, tb);
    const f = fb();
    card.append(box, act, tipp, f);
    tb.addEventListener('click', () => { tipp.classList.add('show'); tb.disabled = true; });
    let tries = 0, fertig = false;
    pr.addEventListener('click', () => {
      if (fertig) return;
      if (inputs.some(x => !x.value.trim())) { setFb(f, 'mid', 'Fülle zuerst alle vier Blöcke aus.'); return; }
      tries++;
      const oks = inputs.map((x, i) => x.value.trim() === soll[i]);
      inputs.forEach((x, i) => setCls(x, oks[i] ? 'ok' : 'bad'));
      const ok = oks.every(Boolean);
      const weg = zuBin
        ? a.ip.split('.').map((n, i) => n + ' = ' + soll[i] + ' (' + summeText(soll[i]) + ')')
        : a.bin.split('.').map((b, i) => b + ' = ' + summeText(b) + ' = ' + soll[i]);
      if (ok) {
        fertig = true;
        setFb(f, 'ok', 'Richtig! Ergebnis: <b>' + soll.join('.') + '</b>' + (a.why ? ' <span class="solution">' + a.why + '</span>' : ''));
      } else if (tries >= 2) {
        fertig = true;
        setFb(f, 'bad', 'Noch nicht richtig. <span class="solution">Lösung: <b>' + soll.join('.') + '</b><br>' + weg.join('<br>') + '</span>');
      } else {
        setFb(f, 'mid', 'Noch nicht richtig. Die roten Blöcke stimmen nicht – rechne sie noch einmal.');
      }
      if (fertig) {
        inputs.forEach(x => { x.readOnly = true; });
        pr.disabled = true;
        card.classList.add(ok ? 'ok' : 'bad');
        mark(id, ok);
      }
    });
    return card;
  };

  function zaehle(p, t) { return p.k.filter(k => new RegExp(k).test(t)).length; }

  TYPEN.frei = function (a, id, nr) {
    reg(id);
    const card = karte(nr, a.q, a);
    const ta = h('textarea', { rows: a.zeilen || 4, 'aria-label': 'Deine Antwort', placeholder: 'Schreibe hier in ganzen Sätzen …' });
    const act = h('div', { class: 'task-actions' });
    const pr = knopf('Mit der Musterlösung vergleichen');
    act.append(pr);
    const f = fb();
    const kern = h('div', { class: 'kern' });
    card.append(ta, act, f, kern);
    const min = a.min || a.punkte.length;
    function bewerten() {
      const n = $$('input[type="checkbox"]:checked', kern).length;
      const ok = n >= min;
      card.classList.toggle('ok', ok);
      const kf = $('[data-kern-fb]', kern);
      setFb(kf, ok ? 'ok' : 'mid', ok
        ? 'Stark! Deine Antwort enthält die wichtigen Punkte (' + n + ' von ' + a.punkte.length + ').'
        : 'Es fehlen noch Punkte (' + n + ' von ' + a.punkte.length + '). Ergänze deine Antwort mit Hilfe der Musterlösung' +
          (min < a.punkte.length ? ' – ' + min + ' Punkte reichen.' : '.'));
      mark(id, ok);
    }
    kern.addEventListener('change', bewerten);
    pr.addEventListener('click', () => {
      const txt = ta.value.trim();
      if (txt.split(/\s+/).filter(Boolean).length < 5) {
        setFb(f, 'mid', 'Schreibe zuerst deine eigene Antwort – mindestens einen ganzen Satz. Danach kannst du vergleichen.');
        return;
      }
      clearFb(f);
      const t = normText(txt);
      kern.innerHTML = '<h4>Das gehört in eine gute Antwort. Was davon steht in deiner?</h4>' +
        a.punkte.map((p, i) => '<label><input type="checkbox" data-i="' + i + '"' + (zaehle(p, t) >= (p.mind || 1) ? ' checked' : '') + '><span>' + p.t + '</span></label>').join('') +
        '<p class="klein">Die Häkchen setzt der Computer nach Stichwörtern. Lies selbst nach und korrigiere sie ehrlich.</p>' +
        '<div class="muster"><b>Musterlösung:</b> ' + a.muster + '</div>' +
        '<div data-kern-fb></div>';
      kern.classList.add('show');
      pr.textContent = 'Nach dem Verbessern neu vergleichen';
      bewerten();
    });
    return card;
  };

  /* ---------- Seite aufbauen ---------- */
  const gesamtMin = M => (M.merkMin || 0) + M.teile.reduce((s, t) => s + (t.min || 0), 0);

  function hero(M) {
    const [a, b] = M.folien;
    return h('section', { class: 'hero' },
      '<span class="code">Informatik 9 · Modul ' + M.nr + ' von ' + MODULE + '</span>' +
      '<h1>' + M.titel + '</h1>' +
      '<p class="sub">Stunde ' + M.nr + ' · Folien ' + a + '–' + b + ' · ca. ' + gesamtMin(M) + ' Minuten</p>' +
      '<p class="lead">' + M.intro + '</p>' +
      '<div class="hero-actions">' +
        '<a class="ppt-link" href="' + PDF + '#page=' + a + '" target="_blank" rel="noopener">Folien ' + a + '–' + b + ' öffnen</a>' +
        '<a class="ppt-link ghost" href="../netzwerke-training.html">Alle Module</a>' +
      '</div>');
  }

  function scoreBar() {
    return h('div', { class: 'score-bar' },
      '<span class="score-text">Gelöst: <b id="score-done">0</b> von <b id="score-total">0</b></span>' +
      '<span class="score-track" aria-hidden="true"><span id="score-fill"></span></span>' +
      '<span class="score-text">Richtig: <b id="score-right">0</b></span>');
  }

  function plan(M) {
    let html = '<h2 id="plan-h">Dein Plan für diese Stunde</h2>' +
      '<p>Arbeite von oben nach unten. Die Minuten sind Richtwerte – zusammen etwa eine Schulstunde.</p><ol class="plan-list">';
    html += '<li><a href="#merk"><span class="buchst">i</span><span class="p-txt"><span class="p-titel">Zuerst lesen</span><span class="p-meta">ca. ' + M.merkMin + ' Min.</span></span></a></li>';
    M.teile.forEach((t, ti) => {
      html += '<li><a href="#teil-' + BUCHST[ti] + '"><span class="buchst">' + BUCHST[ti] + '</span><span class="p-txt"><span class="p-titel">' + t.kurz + '</span>' +
        '<span class="p-meta">ca. ' + t.min + ' Min. · <span data-plan="' + ti + '">0/0</span></span></span></a></li>';
    });
    return h('section', { class: 'plan', 'aria-labelledby': 'plan-h' }, html + '</ol>');
  }

  function merkPanel(M) {
    let html = '<span class="sec-label">Zuerst lesen · ca. ' + M.merkMin + ' Min.</span>' +
      '<h2 id="merk-h">Heute kannst du …</h2><ul class="ziele">' +
      M.ziele.map((z, i) => '<li><span class="nr">' + (i + 1) + '</span><span>' + z + '</span></li>').join('') + '</ul>' +
      '<div class="merk-grid">' + M.merk.map(m => '<div class="memo"><h3>' + m.t + '</h3>' + m.html + '</div>').join('') + '</div>';
    return h('section', { class: 'panel', id: 'merk', 'aria-labelledby': 'merk-h' }, html);
  }

  function renderTeil(ti) {
    const t = S.M.teile[ti], sec = S.teile[ti], pre = 't' + ti + '-';
    Array.from(S.items.keys()).forEach(id => { if (id.startsWith(pre)) S.items.delete(id); });
    sec.innerHTML =
      '<span class="sec-label">Teil ' + BUCHST[ti] + '</span>' +
      '<h2 id="h-teil-' + ti + '">' + t.titel + '</h2>' +
      '<div class="teil-meta"><span class="pill">' + UHR + 'ca. ' + t.min + ' Min.</span>' +
      (t.folien ? '<a class="pill blau" href="' + PDF + '#page=' + folienStart(t.folien) + '" target="_blank" rel="noopener">' + FOLIE + folienText(t.folien) + '</a>' : '') + '</div>' +
      (t.hinweis ? '<p class="hint">' + t.hinweis + '</p>' : '');
    let nr = 0;
    t.aufgaben.forEach((a, ai) => {
      const R = TYPEN[a.typ];
      if (!R) { console.warn('Unbekannter Aufgabentyp:', a.typ); return; }
      const node = R(a, pre + ai, a.typ === 'figur' ? 0 : ++nr);
      sec.append(node);
      if (typeof a.init === 'function') a.init(node);
    });
    const fuss = h('div', { class: 'teil-fuss' }, '<span class="teil-stand" data-stand="' + ti + '"></span>');
    const reset = h('button', { type: 'button', class: 'btn btn-ghost' }, 'Teil ' + BUCHST[ti] + ' neu beginnen');
    reset.addEventListener('click', () => {
      renderTeil(ti);
      stand();
      sec.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });
    fuss.append(reset);
    sec.append(fuss);
  }

  function abschluss(M) {
    const sec = h('section', { class: 'panel', id: 'abschluss', 'aria-labelledby': 'abschluss-h' },
      '<span class="sec-label">Zum Schluss · 1 Min.</span>' +
      '<h2 id="abschluss-h">Wie sicher bist du jetzt?</h2>' +
      '<p class="hint">Schätze dich ehrlich ein. Das wird nicht bewertet.</p>');
    const tipp = h('p', { class: 'selbst-tipp' });
    M.ziele.forEach(z => {
      const row = h('div', { class: 'selbst-row' }, '<span style="font-weight:600">Ich kann ' + z + '</span>');
      const ch = h('div', { class: 'choices kurz', role: 'group', 'aria-label': 'Einschätzung' });
      [['s-gut', 'sicher'], ['s-fast', 'fast'], ['s-nein', 'noch nicht']].forEach(([c, t]) =>
        ch.append(h('button', { type: 'button', class: c, 'aria-pressed': 'false' }, t)));
      ch.addEventListener('click', e => {
        const b = e.target.closest('button');
        if (!b) return;
        $$('button', ch).forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
        const nein = $$('.s-nein[aria-pressed="true"]', sec).length;
        const [a1, b1] = M.folien;
        tipp.innerHTML = nein
          ? 'Tipp: Lies die <a href="' + PDF + '#page=' + a1 + '" target="_blank" rel="noopener">Folien ' + a1 + '–' + b1 + '</a> noch einmal und wiederhole die Teile mit roten Aufgaben.'
          : '';
      });
      row.append(ch);
      sec.append(row);
    });
    sec.append(tipp, h('div', { id: 'gesamt', class: 'result mid', role: 'status' }));
    const act = h('div', { class: 'task-actions' });
    const alles = h('button', { type: 'button', class: 'btn btn-ghost' }, 'Ganzes Modul neu beginnen');
    alles.addEventListener('click', () => {
      S.M.teile.forEach((_, ti) => renderTeil(ti));
      stand();
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
    act.append(alles);
    sec.append(act);
    return sec;
  }

  function modnav(M) {
    let html = M.nr > 1 ? '<a href="modul-' + (M.nr - 1) + '.html">&larr; Modul ' + (M.nr - 1) + '</a>' : '<span></span>';
    html += '<a href="../netzwerke-training.html">Alle Module</a>';
    html += M.nr < MODULE ? '<a class="weiter" href="modul-' + (M.nr + 1) + '.html">Weiter zu Modul ' + (M.nr + 1) + ' &rarr;</a>' : '<span></span>';
    return h('nav', { class: 'modnav', 'aria-label': 'Module' }, html);
  }

  function start(M) {
    S.M = M;
    S.items.clear();
    S.teile = [];
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.append(hero(M), scoreBar(), plan(M), merkPanel(M));
    M.teile.forEach((t, ti) => {
      const sec = h('section', { class: 'panel teil', id: 'teil-' + BUCHST[ti], 'aria-labelledby': 'h-teil-' + ti });
      app.append(sec);
      S.teile[ti] = sec;
      renderTeil(ti);
    });
    app.append(abschluss(M), modnav(M));
    stand();
  }

  /* ============================================================
     Skizzen als SVG: Netze, Topologien, Paketwege
     ============================================================ */
  const F = { kabel: '#2f80ed', dunkel: '#1f2a3d', blau: '#0f4c81', teal: '#0aa697', rot: '#d92d20', grau: '#98a2b3', text: '#101828', leise: '#5d6b84', gruen: '#15803d' };

  function kreuz(x, y, r) {
    r = r || 9;
    return '<g stroke="' + F.rot + '" stroke-width="4.5" stroke-linecap="round">' +
      '<line x1="' + (x - r) + '" y1="' + (y - r) + '" x2="' + (x + r) + '" y2="' + (y + r) + '"/>' +
      '<line x1="' + (x + r) + '" y1="' + (y - r) + '" x2="' + (x - r) + '" y2="' + (y + r) + '"/></g>';
  }
  function txt(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.anchor || 'middle') + '" font-size="' + (o.size || 14) +
      '" font-weight="' + (o.weight || 800) + '" fill="' + (o.fill || F.text) + '" font-family="Source Sans 3, system-ui, sans-serif">' + esc(s) + '</text>';
  }
  function rect(x, y, w, hh, o) {
    o = o || {};
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hh + '"' + (o.rx ? ' rx="' + o.rx + '"' : '') +
      ' fill="' + (o.fill || '#fff') + '"' + (o.stroke ? ' stroke="' + o.stroke + '" stroke-width="' + (o.sw || 2.5) + '"' : '') + '/>';
  }

  function knoten(k) {
    const x = k.x, y = k.y, typ = k.typ || 'pc';
    const farbe = k.aus ? F.grau : F.blau;
    let s = '', ly = y + 36;
    if (typ === 'pc') {
      s += rect(x - 21, y - 17, 42, 29, { rx: 4, stroke: farbe }) + rect(x - 16, y - 12, 32, 19, { rx: 2, fill: k.aus ? '#eef1f5' : '#dbe9fb' }) +
        rect(x - 3, y + 12, 6, 5, { fill: farbe }) + rect(x - 12, y + 16, 24, 4, { rx: 2, fill: farbe });
    } else if (typ === 'handy') {
      s += rect(x - 11, y - 19, 22, 36, { rx: 4, stroke: farbe }) + rect(x - 7, y - 14, 14, 24, { rx: 1, fill: '#dbe9fb' });
    } else if (typ === 'drucker') {
      s += rect(x - 12, y - 19, 24, 12, { stroke: farbe, sw: 2 }) + rect(x - 21, y - 8, 42, 20, { rx: 4, stroke: farbe }) + rect(x - 12, y + 5, 24, 9, { stroke: farbe, sw: 2 });
      ly = y + 32;
    } else if (typ === 'switch') {
      s += rect(x - 37, y - 12, 74, 24, { rx: 4, fill: k.aus ? F.grau : F.dunkel });
      for (let i = 0; i < 6; i++) s += rect(x - 30 + i * 10, y - 4, 7, 7, { fill: '#9fb3c8' });
      s += '<circle cx="' + (x + 30) + '" cy="' + y + '" r="2.5" fill="#34d399"/>';
      ly = y + 31;
    } else if (typ === 'router') {
      s += '<line x1="' + (x - 18) + '" y1="' + (y - 9) + '" x2="' + (x - 22) + '" y2="' + (y - 27) + '" stroke="' + F.dunkel + '" stroke-width="3" stroke-linecap="round"/>' +
        '<line x1="' + (x + 18) + '" y1="' + (y - 9) + '" x2="' + (x + 22) + '" y2="' + (y - 27) + '" stroke="' + F.dunkel + '" stroke-width="3" stroke-linecap="round"/>' +
        rect(x - 31, y - 10, 62, 22, { rx: 5, stroke: farbe });
      for (let i = 0; i < 3; i++) s += '<circle cx="' + (x + 6 + i * 8) + '" cy="' + (y + 1) + '" r="2.5" fill="' + F.teal + '"/>';
      ly = y + 31;
    } else if (typ === 'wolke') {
      s += '<ellipse cx="' + x + '" cy="' + y + '" rx="' + (k.rx || 58) + '" ry="30" fill="#eef5ff" stroke="' + F.kabel + '" stroke-width="2.5"/>' + txt(x, y + 5, k.label || '', { fill: F.blau, size: 15 });
    } else if (typ === 'punkt') {
      s += '<circle cx="' + x + '" cy="' + y + '" r="17" fill="' + (k.aus ? F.grau : (k.farbe || F.teal)) + '" stroke="#fff" stroke-width="3"/>' + txt(x, y + 5, k.label || '', { fill: '#fff', size: 14 });
    } else if (typ === 'dot') {
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (k.r || 9) + '" fill="' + (k.farbe || F.teal) + '"/>';
    } else if (typ === 'tap') {
      s += rect(x - 5, y - 5, 10, 10, { fill: F.dunkel });
    } else if (typ === 'term') {
      s += rect(x - 5, y - 11, 10, 22, { rx: 2, fill: F.dunkel });
    }
    if (k.label && !['punkt', 'wolke', 'dot', 'tap', 'term'].includes(typ)) {
      const yy = k.oben ? y - (typ === 'router' ? 34 : 26) : ly;
      s += txt(x, yy, k.label);
      if (k.sub) s += txt(x, k.oben ? yy - 16 : yy + 16, k.sub, { size: 12.5, weight: 700, fill: F.leise });
    } else if (k.sub) {
      s += txt(x, y + (typ === 'wolke' ? 48 : 36), k.sub, { size: 12.5, weight: 700, fill: F.leise });
    }
    if (k.aus) s += kreuz(x, y - 2, 13);
    if (k.badge === 'ok') {
      s += '<circle cx="' + (x + 23) + '" cy="' + (y - 18) + '" r="9" fill="' + F.gruen + '"/>' +
        '<path d="M' + (x + 19) + ' ' + (y - 18) + ' l3 3 l5 -6" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
    } else if (k.badge === 'fehler') {
      s += '<circle cx="' + (x + 23) + '" cy="' + (y - 18) + '" r="9" fill="' + F.rot + '"/>' +
        '<path d="M' + (x + 19.5) + ' ' + (y - 21.5) + ' l7 7 m0 -7 l-7 7" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>';
    }
    return '<g>' + s + '</g>';
  }

  function netz(spec) {
    const w = spec.w || 560, hh = spec.h || 300;
    const K = {};
    spec.knoten.forEach(k => { K[k.id] = k; });
    let s = '<svg class="netz-svg" viewBox="0 0 ' + w + ' ' + hh + '" role="img" aria-label="' + esc(spec.alt || 'Netzwerkskizze') + '" xmlns="http://www.w3.org/2000/svg">';
    (spec.rahmen || []).forEach(r => {
      s += '<rect x="' + r.x + '" y="' + r.y + '" width="' + r.w + '" height="' + r.h + '" rx="14" fill="' + (r.fill || '#f4f8fd') + '" stroke="#b9cbe3" stroke-width="2" stroke-dasharray="7 6"/>';
      if (r.label) s += txt(r.x + 12, r.y + 20, r.label, { anchor: 'start', size: 13, fill: F.blau });
    });
    (spec.kanten || []).forEach(e => {
      const A = K[e[0]], B = K[e[1]], o = e[2] || {};
      s += '<line x1="' + A.x + '" y1="' + A.y + '" x2="' + B.x + '" y2="' + B.y + '" stroke="' + (o.farbe || F.kabel) + '" stroke-width="' + (o.dicke || 4) +
        '" stroke-linecap="round"' + (o.gestrichelt ? ' stroke-dasharray="2 8"' : '') + (o.blass ? ' opacity=".3"' : '') + '/>';
      const p = o.pos != null ? o.pos : 0.5;
      const mx = Math.round(A.x + (B.x - A.x) * p), my = Math.round(A.y + (B.y - A.y) * p);
      if (o.kaputt) s += kreuz(mx, my, 10);
      if (o.label) {
        const bw = o.label.length * 7 + 14;
        s += rect(mx - bw / 2, my - 22 + (o.ldy || 0), bw, 19, { rx: 6, fill: '#fff', stroke: '#c9d6e8', sw: 1.5 }) + txt(mx, my - 8 + (o.ldy || 0), o.label, { size: 12, fill: F.blau });
      }
    });
    spec.knoten.forEach(k => { s += knoten(k); });
    (spec.texte || []).forEach(t => { s += txt(t.x, t.y, t.t, t); });
    return s + '</svg>';
  }

  /* Topologie-Skizzen ohne Beschriftung der Form (zum Erkennen) */
  function topo(art, n, o) {
    o = o || {};
    const w = o.w || 420, hh = o.h || 300, cx = w / 2, cy = hh / 2, r = o.r || 104;
    const knotenListe = [], kanten = [];
    const phase = o.phase != null ? o.phase : -90;
    const lbl = i => (o.labels ? 'PC ' + (i + 1) : '');
    const pcTyp = o.mini ? { typ: 'dot' } : { typ: 'pc' };
    const kreis = i => {
      const a = (phase + 360 * i / n) * Math.PI / 180;
      return { x: Math.round(cx + r * Math.cos(a)), y: Math.round(cy + r * Math.sin(a)) };
    };
    if (art === 'ring' || art === 'masche') {
      for (let i = 0; i < n; i++) knotenListe.push(Object.assign({ id: 'p' + i, label: lbl(i) }, pcTyp, kreis(i)));
      if (art === 'ring') for (let i = 0; i < n; i++) kanten.push(['p' + i, 'p' + ((i + 1) % n)]);
      else for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) kanten.push(['p' + i, 'p' + j]);
    } else if (art === 'stern') {
      knotenListe.push(o.mini ? { id: 'z', typ: 'dot', x: cx, y: cy, r: 13, farbe: F.blau } : { id: 'z', typ: 'switch', x: cx, y: cy, label: o.zentrum || '' });
      for (let i = 0; i < n; i++) {
        knotenListe.push(Object.assign({ id: 'p' + i, label: lbl(i) }, pcTyp, kreis(i)));
        kanten.push(['z', 'p' + i]);
      }
    } else if (art === 'bus') {
      const x0 = o.mini ? 14 : 34, x1 = w - x0, by = o.busY || cy, dy = o.mini ? r * 0.55 : 78;
      knotenListe.push({ id: 'tl', typ: o.mini ? 'dot' : 'term', x: x0, y: by, r: 4, farbe: F.dunkel }, { id: 'tr', typ: o.mini ? 'dot' : 'term', x: x1, y: by, r: 4, farbe: F.dunkel });
      let prev = 'tl';
      for (let i = 0; i < n; i++) {
        const x = Math.round(x0 + (x1 - x0) * (i + 1) / (n + 1));
        const oben = o.wechsel ? i % 2 === 0 : true;
        knotenListe.push({ id: 't' + i, typ: o.mini ? 'dot' : 'tap', x, y: by, r: 1 },
          Object.assign({ id: 'p' + i, label: lbl(i), x, y: Math.round(by + (oben ? -dy : dy)) }, pcTyp));
        kanten.push(['t' + i, 'p' + i]);
        kanten.push([prev, 't' + i, { dicke: o.mini ? 4 : 6 }]);
        prev = 't' + i;
      }
      kanten.push([prev, 'tr', { dicke: o.mini ? 4 : 6 }]);
    }
    (o.kaputt || []).forEach(([a, b]) => {
      const e = kanten.find(k => (k[0] === a && k[1] === b) || (k[0] === b && k[1] === a));
      if (e) e[2] = Object.assign({}, e[2], { kaputt: true });
    });
    (o.aus || []).forEach(id => { const k = knotenListe.find(x => x.id === id); if (k) k.aus = true; });
    return netz({ w, h: hh, knoten: knotenListe, kanten, alt: o.alt || 'Netzwerk-Skizze' });
  }

  window.Training = { start, netz, topo, kreuz, toBin, W8 };
})();
