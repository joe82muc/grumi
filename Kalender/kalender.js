(function (global) {
  "use strict";
  var D = global.GrumiKalenderDaten, SESSION = "grumi-kalender-lehrkraft";
  function esc(v) { return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) { return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]; }); }
  function icon(n) { return '<i data-lucide="' + n + '" aria-hidden="true"></i>'; }
  function btn(n, title, id) { return '<button type="button" class="gk-icon" title="' + esc(title) + '" aria-label="' + esc(title) + '" data-action="' + id + '">' + icon(n) + '</button>'; }
  function today() { return new Intl.DateTimeFormat("sv-SE", { timeZone:"Europe/Berlin" }).format(new Date()); }
  function labelDate(s, long) { return new Date(s + "T12:00:00Z").toLocaleDateString("de-DE", long ? { weekday:"long", day:"numeric", month:"long" } : { day:"2-digit", month:"2-digit", year:"numeric" }); }
  function getSession() { try { var s = JSON.parse(sessionStorage.getItem(SESSION)); return s && s.ablauf > Date.now() ? s : null; } catch (_) { return null; } }
  function putSession(s) { try { if (s) sessionStorage.setItem(SESSION, JSON.stringify(s)); else sessionStorage.removeItem(SESSION); } catch (_) {} }
  function mount(el, opts) {
    opts = opts || {}; el.classList.add("gk");
    var api = opts.api !== undefined ? opts.api : /^(localhost|127\.0\.0\.1)$/.test(location.hostname) || /onrender\.com$/.test(location.hostname) ? "" : "https://englisch-9.onrender.com";
    var pupil = Boolean(opts.code), session = getSession(), account = null, events = [], teachers = [], classes = [], storage = "", preview = false;
    var tag = today(); if (tag < D.von || tag > D.bis) tag = D.von;
    var month = tag.slice(0, 7), selected = tag, view = "monat", filterClass = opts.klasse || "", filterTeacher = "", search = "", stopped = false, loading = false;
    var poll;
    function $(s) { return el.querySelector(s); }
    function icons() { if (global.lucide) global.lucide.createIcons({ root:el }); }
    function message(text, error) { var box = $("[data-message]"); if (box) { box.textContent = text || ""; box.className = "gk-message" + (error ? " gk-error" : ""); } }
    async function post(route, body, admin) {
      var headers = { "Content-Type":"application/json" };
      if (!admin && !pupil && session) headers.Authorization = "Bearer " + session.token;
      var r;
      try { r = await fetch(api + "/api/kalender/" + route, { method:"POST", headers:headers, body:JSON.stringify(body || {}), signal:AbortSignal.timeout(75000) }); }
      catch (_) { throw new Error("Keine Verbindung zum Kalender-Server. Bitte erneut versuchen."); }
      var d; try { d = await r.json(); } catch (_) { throw new Error("Der Kalender ist auf diesem Server noch nicht verfügbar."); }
      if (!r.ok || !d.ok) {
        var e = new Error(d.error || "Der Kalender ist auf diesem Server noch nicht verfügbar."); e.status = r.status; throw e;
      }
      return d;
    }
    function dialog(title, body) {
      var old = $("dialog"); if (old) { old.close(); old.remove(); }
      var node = document.createElement("dialog");
      node.innerHTML = '<div class="gk-dialog-head"><h2>' + esc(title) + '</h2><button type="button" class="gk-icon" data-close title="Schließen" aria-label="Schließen">' + icon("x") + '</button></div>' + body;
      el.appendChild(node); node.querySelector("[data-close]").onclick = function () { node.close(); };
      node.addEventListener("close", function () { node.remove(); }); icons(); node.showModal(); return node;
    }
    function modalMessage(node, text, err) {
      var b = node.querySelector("[data-modal-message]"); b.textContent = text;
      b.className = "gk-message" + (err ? " gk-error" : "");
    }
    function login(error) {
      account = null;
      el.innerHTML = '<div class="gk-top"><div><h1>Probenkalender</h1><p class="gk-muted">Schuljahr 2026/2027 · Kollegium</p></div><button type="button" data-accounts>' + icon("users") + 'Zugänge</button></div>' +
        '<form class="gk-login"><h2>Lehrkraft-Anmeldung</h2><label>Benutzername<input name="benutzer" autocomplete="username" maxlength="40" required></label><label>Passwort<input type="password" name="passwort" autocomplete="current-password" maxlength="128" required></label><div data-message class="gk-message" role="status"></div><button class="gk-primary" type="submit">' + icon("log-in") + 'Anmelden</button></form>';
      icons(); message(error, Boolean(error)); $("[data-accounts]").onclick = accountsDialog;
      $("form").onsubmit = async function (ev) {
        ev.preventDefault(); var form = ev.currentTarget, button = form.querySelector("button"); button.disabled = true; message("Anmeldung wird geprüft …");
        try { var d = await post("anmelden", Object.fromEntries(new FormData(form))); session = d; putSession(d); await load(); }
        catch (e) { message(e.message, true); button.disabled = false; }
      };
    }
    function filtered() {
      return events.filter(function (e) { return (!filterClass || e.klasse === filterClass) && (!filterTeacher || e.lehrerId === filterTeacher) && (!search || [e.fach,e.titel,e.klasse,e.lehrer,e.hinweis].join(" ").toLowerCase().includes(search.toLowerCase())); });
    }
    function header() {
      var months = [];
      for (var i=0; i<12; i++) { var m = new Date(Date.UTC(2026,8+i,1)); months.push([m.toISOString().slice(0,7),m.toLocaleDateString("de-DE", { month:"long",year:"numeric",timeZone:"UTC" })]); }
      el.innerHTML = '<div class="gk-top"><div><h1>' + (pupil ? 'Proben · Klasse ' + esc(filterClass) : 'Probenkalender') + '</h1><p class="gk-muted">2026/2027 · ' + esc(pupil ? "Bayern" : account.name) + '</p></div><div class="gk-actions">' +
        (pupil ? '' : btn("key-round","Passwort ändern","password") + '<button type="button" data-accounts>' + icon("users") + 'Zugänge</button>' + btn("log-out","Abmelden","logout")) + '</div></div>' +
        '<div data-message class="gk-message" role="status"></div>' +
        (preview ? '<div class="gk-message gk-warning">Lokale Vorschau · keine Verbindung zu den echten Klassendaten.</div>' : '') +
        (!pupil && storage === "datei" ? '<div class="gk-message gk-warning">Datei-Speicher: Auf Render gehen Termine und Zugänge ohne Datenbank oder persistenten Datenträger beim Neustart verloren.</div>' : '') +
        '<div class="gk-toolbar">' + btn("chevron-left","Voriger Monat","prev") + '<select class="gk-month" aria-label="Monat">' + months.map(function (m) { return '<option value="' + m[0] + '"' + (m[0]===month?' selected':'') + '>' + m[1] + '</option>'; }).join("") + '</select>' + btn("chevron-right","Nächster Monat","next") + btn("calendar-days","Heute","today") +
        '<div class="gk-segments"><button type="button" data-view="monat" aria-label="Monatsansicht" title="Monatsansicht" aria-pressed="' + (view==="monat") + '">' + icon("calendar") + '</button><button type="button" data-view="liste" aria-label="Listenansicht" title="Listenansicht" aria-pressed="' + (view==="liste") + '">' + icon("list") + '</button></div><span class="gk-spacer"></span>' +
        btn("refresh-cw","Neu laden","reload") + btn("download","TXT exportieren","export") +
        (pupil ? '' : '<button type="button" data-action="import">' + icon("upload") + 'Import</button><button type="button" class="gk-primary" data-action="new">' + icon("plus") + 'Probe</button>') + '</div>' +
        '<div class="gk-filters">' + (pupil ? '' : '<label>Klasse<select data-filter="class"><option value="">Alle Klassen</option>' + classes.map(function (k) { return '<option' + (k===filterClass?' selected':'') + '>' + esc(k) + '</option>'; }).join("") + '</select></label><label>Lehrkraft<select data-filter="teacher"><option value="">Alle Lehrkräfte</option>' + teachers.map(function (t) { return '<option value="' + esc(t.id) + '"' + (t.id===filterTeacher?' selected':'') + '>' + esc(t.name) + '</option>'; }).join("") + '</select></label>') +
        '<label>Suche<input type="search" data-search placeholder="Fach oder Titel" value="' + esc(search) + '"></label></div><div data-content></div>' +
        '<div class="gk-legend"><span>Ferien</span><span class="gk-l-holiday">Feiertag</span><span class="gk-l-free">Unterrichtsfrei</span>' + (pupil ? '' : '<span class="gk-l-own">Eigene Probe</span><span class="gk-l-other">Kollegium</span>') + '</div><p class="gk-source">Unterhaching · <a href="https://www.km.bayern.de/termine/ferien-und-feiertage" target="_blank" rel="noopener">Ferientermine Bayern</a> · <a href="https://www.gesetze-bayern.de/Content/Document/BayFTG/true" target="_blank" rel="noopener">Feiertage</a></p>';
      if (!pupil) $("[data-accounts]").onclick = accountsDialog;
      $(".gk-month").onchange = function (ev) { month = ev.target.value; selected = month + "-01"; draw(); };
      el.querySelectorAll("[data-filter]").forEach(function (n) { n.onchange = function () { if (n.dataset.filter==="class") filterClass=n.value; else filterTeacher=n.value; draw(); }; });
      $("[data-search]").oninput = function (ev) { search=ev.target.value; draw(); };
      el.querySelectorAll("[data-view]").forEach(function (n) { n.onclick = function () { view=n.dataset.view; el.querySelectorAll("[data-view]").forEach(function (b) { b.setAttribute("aria-pressed",b===n); }); draw(); }; });
      el.querySelectorAll("[data-action]").forEach(function (n) { n.onclick = function () { action(n.dataset.action); }; });
      draw(); icons();
    }
    function draw() {
      var all = filtered(), content = $("[data-content]"); if (!content) return;
      $(".gk-month").value = month;
      $("[data-action=prev]").disabled = month==="2026-09"; $("[data-action=next]").disabled = month==="2027-08";
      var h="";
      if (view==="liste") {
        var list = all.filter(function (e) { return e.datum.slice(0,7)===month; });
        h = '<p class="gk-muted" style="margin-bottom:10px">' + list.length + ' Probe(n)</p><table class="gk-list"><thead><tr><th>Datum</th><th>Probe</th><th>Details</th></tr></thead><tbody>' + list.map(function (e) {
          return '<tr><td>' + esc(labelDate(e.datum)) + '<br><small>' + esc(e.stunde) + '</small></td><td><span class="gk-tag">' + esc(e.klasse) + '</span> <b>' + esc(e.fach) + '</b><br>' + esc(e.titel) + '<br><small class="gk-muted">' + esc(e.lehrer) + '</small></td><td>' + btn("eye","Termin ansehen", "unused").replace('data-action="unused"','data-event="'+esc(e.id)+'"') + '</td></tr>';
        }).join("") + '</tbody></table>' + (!list.length?'<p class="gk-empty">Keine Proben in diesem Monat.</p>':'');
      } else {
        var start=month+"-01", wd=new Date(start+"T12:00:00Z").getUTCDay(), first=D.plus(start,-((wd+6)%7));
        var last=new Date(Date.UTC(Number(month.slice(0,4)),Number(month.slice(5,7)),0)).getUTCDate();
        var cells=Math.ceil((((wd+6)%7)+last)/7)*7;
        h='<div class="gk-layout"><div class="gk-board"><div class="gk-weekdays">'+["Mo","Di","Mi","Do","Fr","Sa","So"].map(function (n) { return '<span>'+n+'</span>'; }).join("")+'</div><div class="gk-grid">';
        for (var i=0;i<cells;i++) {
          var day=D.plus(first,i), marks=D.markierungen(day), es=all.filter(function (e) { return e.datum===day; });
          h+='<div class="gk-cell'+(i%7>=5?' gk-weekend':'')+(day.slice(0,7)!==month?' gk-out':'')+(day===selected?' gk-selected':'')+marks.map(function (m) { return ' gk-'+m.art; }).join("")+'" data-day-cell="'+day+'">'+
            '<button type="button" class="gk-day'+(day===today()?' gk-today':'')+'" data-day="'+day+'" aria-pressed="'+(day===selected)+'" aria-label="'+esc(labelDate(day,true)+(marks.length?', '+marks.map(function (m) { return m.name; }).join(", "):'')+', '+es.length+' Proben')+'">'+Number(day.slice(8))+'</button>'+marks.map(function (m) { return '<span class="gk-holiday">'+esc(m.name)+'</span>'; }).join("")+
            es.slice(0,2).map(function (e) { return '<button type="button" class="gk-event'+(account&&e.lehrerId===account.id?' gk-own':'')+'" data-event="'+esc(e.id)+'" title="'+esc(e.klasse+' · '+e.fach+' · '+e.titel+' · '+e.lehrer)+'"><strong>'+esc(e.klasse+' · '+e.fach)+'</strong>'+esc(e.stunde||e.titel)+'</button>'; }).join("")+
            (es.length>2?'<button type="button" class="gk-more" data-day="'+day+'">+'+(es.length-2)+' weitere</button>':'')+(es.length?'<span class="gk-mobile-dot" aria-hidden="true">'+es.length+' '+(es.length===1?'Probe':'Proben')+'</span>':'')+'</div>';
        }
        h+='</div></div><aside class="gk-aside"><h2>'+esc(labelDate(selected,true))+'</h2>'+D.markierungen(selected).map(function (m) { return '<p class="gk-message gk-warning">'+esc(m.name)+'</p>'; }).join("");
        var onday=all.filter(function (e) { return e.datum===selected; });
        h+=onday.map(function (e) { return '<article class="gk-entry"><span class="gk-tag">'+esc(e.klasse)+'</span><h3>'+esc(e.fach)+'</h3><p>'+esc(e.titel)+'</p><p class="gk-muted">'+esc([e.stunde,e.lehrer].filter(Boolean).join(' · '))+'</p><button type="button" data-event="'+esc(e.id)+'">'+icon(account&&e.lehrerId===account.id?'pencil':'eye')+(account&&e.lehrerId===account.id?'Bearbeiten':'Details')+'</button></article>'; }).join("")+
          (!onday.length?'<p class="gk-empty">Keine Proben'+(filterClass?' in '+esc(filterClass):'')+'.</p>':'')+(!pupil&&selected>=D.von&&selected<=D.bis?'<button type="button" data-new-day class="gk-primary" style="margin-top:15px">'+icon('plus')+'Probe eintragen</button>':'')+'</aside></div>';
      }
      content.innerHTML=h;
      content.querySelectorAll("[data-day]").forEach(function (n) { n.onclick=function () { selected=n.dataset.day; draw(); }; });
      content.querySelectorAll("[data-day-cell]").forEach(function (n) { n.onclick=function (ev) { if (ev.target===n) { selected=n.dataset.dayCell; draw(); } }; });
      content.querySelectorAll("[data-event]").forEach(function (n) { n.onclick=function () { eventDialog(events.find(function (e) { return e.id===n.dataset.event; })); }; });
      if ($("[data-new-day]")) $("[data-new-day]").onclick=function () { eventDialog(); }; icons();
    }
    async function load(silent) {
      if (loading || stopped || !el.isConnected) return; loading=true;
      if (pupil && opts.sessionValid && !opts.sessionValid()) { stop(); el.innerHTML=''; if (opts.onExpired) opts.onExpired(); return; }
      try {
        var d=await post(pupil?'klasse':'liste',pupil?{code:opts.code}:{});
        if (stopped || !el.isConnected) return;
        events=d.eintraege; storage=d.speicher; preview=d.vorschau;
        if (pupil) filterClass=d.klasse; else { account=d.konto; teachers=d.lehrer; classes=d.klassen; if (filterClass&&!classes.includes(filterClass)) classes.push(filterClass); }
        if (!silent || !$("[data-content]")) header(); else if (!$("dialog")) draw();
      } catch(e) {
        if (e.status===401&&!pupil) { session=null; putSession(null); login(e.message); }
        else if (e.status===401&&pupil&&opts.onExpired) { stop(); el.innerHTML=''; opts.onExpired(); }
        else { if (!$("[data-message]")) el.innerHTML='<div data-message class="gk-message" role="status"></div><button type="button" data-retry>'+icon('refresh-cw')+'Erneut laden</button>'; message(e.message,true); if ($("[data-retry]")) $("[data-retry]").onclick=function () { load(); }; }
      } finally { loading=false; }
    }
    function action(a) {
      if (a==='new') eventDialog();
      if (a==='import') importDialog();
      if (a==='password') passwordDialog();
      if (a==='reload') load();
      if (a==='export') exportTxt();
      if (a==='prev'||a==='next') { var d=new Date(month+'-15T12:00:00Z'); d.setUTCMonth(d.getUTCMonth()+(a==='prev'?-1:1)); month=d.toISOString().slice(0,7); selected=month+'-01'; draw(); }
      if (a==='today') { selected=today(); if (selected<D.von||selected>D.bis) selected=D.von; month=selected.slice(0,7); draw(); }
      if (a==='logout') { post('abmelden').catch(function () {}).finally(function () { session=null; putSession(null); login(); }); }
    }
    function eventDialog(old) {
      var own=!pupil&&(!old||old.lehrerId===account.id);
      if (!own) {
        dialog('Probe · '+old.klasse,'<h3>'+esc(old.fach+' · '+old.titel)+'</h3><p style="margin-top:12px">'+esc(labelDate(old.datum))+' · '+esc(old.stunde||'Ganztägig')+'</p><p class="gk-muted">'+esc(old.lehrer)+'</p><p style="white-space:pre-line;margin-top:16px;overflow-wrap:anywhere">'+esc(old.hinweis)+'</p>'); return;
      }
      var e=old||{datum:selected,klasse:filterClass,fach:'',titel:'',stunde:'',hinweis:''};
      var node=dialog(old?'Probe bearbeiten':'Probe eintragen','<form><div class="gk-form-grid"><label>Datum<input name="datum" type="date" required min="'+D.von+'" max="'+D.bis+'" value="'+esc(e.datum)+'"></label><label>Klasse<input name="klasse" list="gk-klassen" required maxlength="12" placeholder="7aM" value="'+esc(e.klasse)+'"></label><label>Fach<input name="fach" list="gk-faecher" required maxlength="80" value="'+esc(e.fach)+'"></label><label>Stunde / Zeit<input name="stunde" maxlength="80" placeholder="z. B. 1.–2. Stunde" value="'+esc(e.stunde)+'"></label><label class="gk-wide">Titel<input name="titel" required maxlength="160" value="'+esc(e.titel)+'"></label><label class="gk-wide">Hinweis für die Klasse<textarea name="hinweis" maxlength="2000">'+esc(e.hinweis)+'</textarea></label></div><datalist id="gk-klassen">'+classes.map(function (k) { return '<option>'+esc(k)+'</option>'; }).join('')+'</datalist><datalist id="gk-faecher">'+['Deutsch','Mathematik','Englisch','Natur und Technik','GPG','Wirtschaft und Beruf','Informatik','Ethik','Religion','Sport','Musik','Kunst','Technik','Soziales','Werken'].map(function (f) { return '<option>'+esc(f)+'</option>'; }).join('')+'</datalist><div data-warnings class="gk-message gk-warning" hidden></div><label class="gk-check" data-confirm-wrap hidden><input type="checkbox" name="bestaetigt">Termin-Hinweise geprüft; trotzdem eintragen.</label><div data-modal-message class="gk-message" role="status"></div><div class="gk-form-actions">'+(old?'<button type="button" class="gk-danger" data-delete>'+icon('trash-2')+'Löschen</button>':'')+'<button type="submit" class="gk-primary">'+icon('check')+'Speichern</button></div></form>');
      var form=node.querySelector('form'), confirm=form.elements.bestaetigt, warnings=[];
      function check() {
        var data=Object.fromEntries(new FormData(form)); data.klasse=D.klasse(data.klasse); data.id=old&&old.id;
        warnings=D.datumOk(data.datum)?D.warnungen(data,events):[];
        node.querySelector('[data-warnings]').textContent=warnings.join('\n'); node.querySelector('[data-warnings]').hidden=!warnings.length;
        node.querySelector('[data-confirm-wrap]').hidden=!warnings.length; confirm.required=Boolean(warnings.length); confirm.checked=false;
      }
      form.addEventListener('input',function (ev) { if (['datum','klasse'].includes(ev.target.name)) check(); }); check();
      form.onsubmit=async function (ev) {
        ev.preventDefault(); var data=Object.fromEntries(new FormData(form)); data.bestaetigt=confirm.checked; if (old) { data.id=old.id; data.version=old.version; }
        var button=form.querySelector('[type=submit]'); button.disabled=true;
        try { await post('speichern',data); selected=data.datum; month=data.datum.slice(0,7); node.close(); await load(); message('Probe gespeichert.'); }
        catch(err) { modalMessage(node,err.message,true); button.disabled=false; }
      };
      if (old) node.querySelector('[data-delete]').onclick=async function () {
        if (!global.confirm('Probe „'+old.titel+'“ wirklich löschen?')) return;
        try { await post('loeschen',{id:old.id,version:old.version}); node.close(); await load(); message('Probe gelöscht.'); } catch(err) { modalMessage(node,err.message,true); }
      };
    }
    function importDialog() {
      var node=dialog('Termine importieren','<input type="file" data-file accept=".txt,.csv,.ics,text/plain,text/calendar" aria-label="TXT, CSV oder ICS auswählen"><p class="gk-source"><a href="Kalender/import-vorlage.txt" download>TXT-Vorlage</a></p><div data-modal-message class="gk-message" role="status"></div><div data-import-preview></div>');
      node.querySelector('[data-file]').onchange=async function (ev) {
        var file=ev.target.files[0]; if (!file) return;
        try {
          if (file.size>1000000) throw new Error('Die Datei darf höchstens 1 MB enthalten.');
          var rows=global.GrumiKalenderImport.parse(global.GrumiKalenderImport.decode(await file.arrayBuffer()),file.name), seen=new Set(events.map(D.finger));
          rows.forEach(function (r) { if (!r.fehler&&seen.has(D.finger(r.eintrag))) r.fehler='Bereits im Kalender'; });
          node.querySelector('[data-import-preview]').innerHTML='<div class="gk-import-scroll">'+rows.map(function (r,i) {
            var e=r.eintrag, warnings=D.datumOk(e.datum)?D.warnungen(e,events.concat(rows.filter(function (x) { return x!==r&&!x.fehler; }).map(function (x,j) { return {...x.eintrag,id:'import-'+j}; }))):[];
            // This source file contains provisional scheduling notes; surface them before committing.
            if (/vorläufig|nicht erkennbar|ungeklärt/i.test(e.titel+' '+e.hinweis)) warnings.push('Vorläufige Angaben in der Quelldatei');
            return '<div class="gk-import-row"><label><input type="checkbox" data-row="'+i+'"'+(!r.fehler?' checked':' disabled')+'><span>'+esc(e.datum+' · '+(e.klasse||'?')+' · '+e.fach)+'<small>'+esc(e.titel+(e.stunde?' · '+e.stunde:''))+'</small><small class="'+(r.fehler?'gk-danger':'gk-muted')+'">'+esc(r.fehler||warnings.join(' · '))+'</small></span></label></div>';
          }).join('')+'</div><label class="gk-check"><input type="checkbox" data-import-confirm>Auswahl, Klassen und Hinweise geprüft. Ausgewählte Termine werden unter meinem Namen eingetragen.</label><div class="gk-form-actions"><button type="button" class="gk-primary" data-do-import disabled>'+icon('upload')+'Importieren</button></div>';
          var go=node.querySelector('[data-do-import]'), agree=node.querySelector('[data-import-confirm]');
          function update() { go.disabled=!agree.checked||!node.querySelector('[data-row]:checked'); }
          agree.onchange=update; node.querySelectorAll('[data-row]').forEach(function (n) { n.onchange=update; }); icons();
          modalMessage(node,rows.length+' Termine erkannt · '+rows.filter(function (r) { return !r.fehler; }).length+' importierbar');
          go.onclick=async function () {
            go.disabled=true;
            var chosen=Array.from(node.querySelectorAll('[data-row]:checked')).map(function (n) { return rows[Number(n.dataset.row)].eintrag; });
            try { var result=await post('import',{eintraege:chosen,bestaetigt:true}); node.close(); await load(); message(result.anzahl+' Termine importiert · '+result.doppelt+' Duplikate übersprungen.'); }
            catch(err) { modalMessage(node,err.message,true); update(); }
          };
        } catch(err) { node.querySelector('[data-import-preview]').innerHTML=''; modalMessage(node,err.message,true); }
      };
    }
    function exportTxt() {
      var rows=filtered().map(function (e) { return { Datum:e.datum,Klasse:e.klasse,Fach:e.fach,Titel:e.titel,Stunde:e.stunde,Hinweis:e.hinweis }; });
      var raw=global.Papa.unparse({fields:['Datum','Klasse','Fach','Titel','Stunde','Hinweis'],data:rows.map(function (e) { return Object.values(e); })},{delimiter:';',escapeFormulae:true});
      var u=URL.createObjectURL(new Blob(['\uFEFF'+raw],{type:'text/plain;charset=utf-8'})), a=document.createElement('a'); a.href=u; a.download='GRUMI_Proben_2026-2027'+(filterClass?'_'+filterClass:'')+'.txt'; a.click(); setTimeout(function () { URL.revokeObjectURL(u); },5000);
    }
    function passwordDialog() {
      var node=dialog('Passwort ändern','<form><label>Bisheriges Passwort<input type="password" name="alt" autocomplete="current-password" required maxlength="128"></label><label style="margin-top:14px">Neues Passwort<input type="password" name="neu" autocomplete="new-password" required minlength="8" maxlength="128"></label><div data-modal-message class="gk-message" role="status"></div><div class="gk-form-actions"><button class="gk-primary" type="submit">'+icon('check')+'Ändern</button></div></form>');
      node.querySelector('form').onsubmit=async function (ev) { ev.preventDefault(); try { await post('passwort',Object.fromEntries(new FormData(ev.currentTarget))); node.close(); session=null; putSession(null); login('Passwort geändert. Bitte erneut anmelden.'); } catch(e) { modalMessage(node,e.message,true); } };
    }
    function accountsDialog() {
      var password=opts.adminPassword||'', konten=[];
      var node=dialog('Lehrkraft-Zugänge','<form data-admin-login><label>Verwaltungs-Passwort<input type="password" name="password" autocomplete="current-password" required maxlength="200"></label><button type="submit" style="margin-top:12px">'+icon('unlock')+'Öffnen</button></form><div data-modal-message class="gk-message" role="status"></div><div data-account-content></div>');
      async function list() {
        var d=await post('admin/liste',{password:password},true); konten=d.konten; node.querySelector('[data-admin-login]').hidden=true;
        node.querySelector('[data-account-content]').innerHTML=konten.map(function (k) { return '<div class="gk-account-row"><div><b>'+esc(k.name)+'</b><br><small>'+esc(k.id)+' · '+(k.aktiv?'aktiv':'deaktiviert')+'</small></div><button type="button" class="gk-icon" data-edit-account="'+esc(k.id)+'" title="Zugang bearbeiten" aria-label="Zugang bearbeiten">'+icon('pencil')+'</button></div>'; }).join('')+
          '<form class="gk-account-form"><h3 data-form-title>Neuer Zugang</h3><div class="gk-form-grid" style="margin-top:12px"><label>Benutzername<input name="benutzer" required pattern="[a-z0-9][a-z0-9._-]{2,39}" maxlength="40" autocomplete="off"></label><label>Anzeigename<input name="name" required maxlength="80" autocomplete="off"></label><label class="gk-wide">Passwort<input type="password" name="passwort" required minlength="8" maxlength="128" autocomplete="new-password"></label></div><label class="gk-check"><input type="checkbox" name="aktiv" checked>Zugang aktiv</label><div class="gk-form-actions"><button type="button" data-new-account>'+icon('plus')+'Neuer Zugang</button><button class="gk-primary" type="submit">'+icon('check')+'Speichern</button></div></form>';
        var form=node.querySelector('.gk-account-form'), old=null;
        node.querySelectorAll('[data-edit-account]').forEach(function (b) { b.onclick=function () {
          old=konten.find(function (k) { return k.id===b.dataset.editAccount; }); form.elements.benutzer.value=old.id; form.elements.benutzer.readOnly=true; form.elements.name.value=old.name; form.elements.passwort.value=''; form.elements.passwort.required=false; form.elements.passwort.placeholder='Leer = unverändert'; form.elements.aktiv.checked=old.aktiv; node.querySelector('[data-form-title]').textContent='Zugang bearbeiten';
        }; });
        node.querySelector('[data-new-account]').onclick=function () { old=null; form.reset(); form.elements.benutzer.readOnly=false; form.elements.passwort.required=true; form.elements.passwort.placeholder=''; node.querySelector('[data-form-title]').textContent='Neuer Zugang'; };
        form.onsubmit=async function (ev) {
          ev.preventDefault(); var body=Object.fromEntries(new FormData(form)); body.aktiv=form.elements.aktiv.checked; body.password=password; if (old) body.version=old.version;
          var b=form.querySelector('[type=submit]'); b.disabled=true;
          try { await post('admin/speichern',body,true); await list(); modalMessage(node,'Zugang gespeichert.'); } catch(e) { modalMessage(node,e.message,true); b.disabled=false; }
        }; icons();
      }
      node.querySelector('[data-admin-login]').onsubmit=async function (ev) { ev.preventDefault(); password=ev.currentTarget.elements.password.value; try { await list(); modalMessage(node,''); } catch(e) { modalMessage(node,e.message,true); } };
      if (password) list().catch(function (e) { modalMessage(node,e.message,true); });
    }
    function visible() { if (!document.hidden&&(pupil||account)) load(true); }
    if (pupil||session) { el.innerHTML='<div data-message class="gk-message" role="status">Kalender wird geladen …</div>'; load(); } else login();
    document.addEventListener('visibilitychange',visible);
    poll=setInterval(function () { if (!el.isConnected) { stop(); return; } visible(); },60000);
    function stop() { stopped=true; clearInterval(poll); document.removeEventListener('visibilitychange',visible); }
    return { stop:stop };
  }
  global.GrumiKalender = { mount:mount };
})(window);
