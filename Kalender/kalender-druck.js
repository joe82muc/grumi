(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(require("./kalender-daten"));
  else root.GrumiKalenderDruck = factory(root.GrumiKalenderDaten);
})(typeof window === "object" ? window : globalThis, function (D) {
  "use strict";
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]; }); }
  function monate(monat, ganzesJahr) {
    if (!/^\d{4}-\d{2}$/.test(monat) || !D.datumOk(monat+"-01") || monat < D.von.slice(0,7) || monat > D.bis.slice(0,7)) throw new Error("Ungültiger Druckmonat.");
    if (!ganzesJahr) return [monat];
    return Array.from({length:12}, function (_, i) { return new Date(Date.UTC(2026,8+i,1)).toISOString().slice(0,7); });
  }
  function eigene(konto, eintraege) {
    if (!konto || typeof konto.id !== "string" || !konto.id) throw new Error("Bitte als Lehrkraft anmelden.");
    return eintraege.filter(function (e) { return e.lehrerId === konto.id && D.datumOk(e.datum) && e.datum >= D.von && e.datum <= D.bis; })
      .slice().sort(function (a,b) { return a.datum.localeCompare(b.datum) || a.klasse.localeCompare(b.klasse,"de",{numeric:true}) || a.fach.localeCompare(b.fach,"de") || (a.stunde||"").localeCompare(b.stunde||"","de",{numeric:true}); });
  }
  function render(konto, eintraege, monat, ganzesJahr) {
    var alle = eigene(konto,eintraege), tage = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];
    return monate(monat,ganzesJahr).map(function (m) {
      var liste = alle.filter(function (e) { return e.datum.slice(0,7) === m; }), klassen = [...new Set(liste.map(function (e) { return e.klasse; }))];
      var erster = m+"-01", wt = new Date(erster+"T12:00:00Z").getUTCDay(), offset = (wt+6)%7, start = D.plus(erster,-offset);
      var anzahlTage = new Date(Date.UTC(Number(m.slice(0,4)),Number(m.slice(5,7)),0)).getUTCDate(), zeilen = Math.ceil((offset+anzahlTage)/7);
      var titel = new Date(erster+"T12:00:00Z").toLocaleDateString("de-DE",{month:"long",year:"numeric",timeZone:"UTC"});
      var h = '<section class="gkp-month" data-print-month="'+m+'"><header class="gkp-header"><div><h1>'+esc(titel)+'</h1><p>GRUMI · Probenkalender 2026/2027</p></div><div class="gkp-person"><strong>'+esc(konto.name)+'</strong><p>Alle eigenen Klassen · '+liste.length+' Probe(n)</p></div></header>' +
        '<p class="gkp-classes">Klassen: '+esc(klassen.length ? klassen.join(" · ") : "Keine eigenen Termine in diesem Monat")+'</p><table class="gkp-calendar"><thead><tr>'+tage.map(function (t) { return '<th scope="col">'+t+'</th>'; }).join("")+'</tr></thead><tbody>';
      for (var row=0;row<zeilen;row++) {
        h+='<tr>';
        for (var col=0;col<7;col++) {
          var datum = D.plus(start,row*7+col), imMonat = datum.slice(0,7) === m;
          var marks = imMonat ? D.markierungen(datum) : [], es = imMonat ? liste.filter(function (e) { return e.datum === datum; }) : [];
          h+='<td class="'+(!imMonat?'gkp-out ':col>=5?'gkp-weekend ':'')+marks.map(function (x) { return 'gkp-'+x.art; }).join(' ')+'"><div class="gkp-day"><time datetime="'+datum+'">'+Number(datum.slice(8))+'</time>'+marks.map(function (x) { return '<span class="gkp-mark">'+esc(x.name)+'</span>'; }).join('')+
            es.map(function (e) { return '<article class="gkp-event" data-print-event="'+esc(e.id)+'"><strong>'+esc(e.klasse+' · '+e.fach)+'</strong><span>'+esc(e.titel)+'</span>'+(e.stunde?'<small>'+esc(e.stunde)+'</small>':'')+'</article>'; }).join('')+'</div></td>';
        }
        h+='</tr>';
      }
      return h+'</tbody></table><footer class="gkp-footer"><span>Ferien</span><span class="gkp-legend-holiday">Feiertag</span><span class="gkp-legend-free">Unterrichtsfrei</span><span class="gkp-place">Bayern · Unterhaching</span></footer></section>';
    }).join("");
  }
  return { eigene:eigene, monate:monate, render:render };
});
