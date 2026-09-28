/* Modul 1 – Netze in deinem Alltag
   Stunde 1 der Präsentation „Netzwerke verstehen“, Folien 1–8 */
Training.start({
  nr: 1,
  titel: 'Netze in deinem Alltag',
  folien: [1, 8],
  intro: 'Was ist ein Netzwerk – und wie groß kann es sein? Hier übst du alles aus der ersten Stunde: vom Klassenchat bis zum Internet.',
  ziele: [
    'ein Computernetzwerk mit eigenen Worten erklären.',
    'LAN, MAN, WAN und GAN an Beispielen unterscheiden.',
    'ein Netzwerk aus deiner Umgebung beschreiben.'
  ],
  merkMin: 3,
  merk: [
    { t: 'Computer-Netzwerk · Folie 4',
      html: '<p>Ein Netzwerk verbindet <b>mindestens zwei Geräte</b>, damit sie Informationen austauschen können: Nachrichten, Dateien, Webseiten oder Druckaufträge.</p>' +
            '<p>Beispiele aus deinem Alltag: Schul-WLAN, Klassenchat, Cloud-Dokument, Online-Spiel.</p>' },
    { t: 'Netzwerkgrößen · Folie 5',
      html: '<table><tr><th>LAN</th><td><b>lokal</b> – Klassenraum, Schule, Zuhause</td></tr>' +
            '<tr><th>MAN</th><td><b>Stadt</b> – mehrere Gebäude in einer Stadt</td></tr>' +
            '<tr><th>WAN</th><td><b>weit</b> – Filialen, Länder, Kontinente</td></tr>' +
            '<tr><th>GAN</th><td><b>global</b> – das Internet als Netz vieler Netze</td></tr></table>' +
            '<p class="merksatz">Merksatz: Je größer die Reichweite, desto mehr Technik und Organisation steckt dahinter.</p>' },
    { t: 'Mein Schulnetz · Folien 7–8',
      html: '<p>Laptop, Drucker und Server hängen mit einem <b>Kabel</b> am <b>Switch</b>, dem zentralen Gerät. Das Handy ist per <b>WLAN</b> (drahtlos) verbunden. Der <b>Router</b> stellt die Verbindung ins Internet her.</p>' +
            '<p>Weg einer Nachricht ins Internet: Laptop → Switch → Router → Internet.</p>' +
            '<p>Das Schulnetz ist ein <b>LAN</b>, weil alle Geräte räumlich nah beieinander im selben Gebäude stehen.</p>' }
  ],
  teile: [
    /* ---------- A ---------- */
    { kurz: 'Lückentext', titel: 'Wiederholen: Lückentext', min: 6, folien: [4, 5],
      aufgaben: [
        { typ: 'luecken',
          q: 'Setze die passenden Wörter ein. Du kannst tippen oder den Wortspeicher benutzen. Zwei Wörter bleiben übrig.',
          bank: ['Router', 'Stadt', 'zwei', 'Technik', 'WLAN', 'LAN', 'Netzen', 'global', 'Kontinente', 'Daten', 'Drucker', 'Kabel'],
          saetze: [
            { t: 'Ein Computernetzwerk verbindet mindestens {} Geräte.', a: 'zwei|2' },
            { t: 'Die Geräte im Netzwerk tauschen {} aus, zum Beispiel Nachrichten, Dateien oder Druckaufträge.', a: 'Daten|Informationen' },
            { t: 'Das Netzwerk in eurem Klassenraum oder bei dir zu Hause ist ein {}.', a: 'LAN' },
            { t: 'Ein MAN verbindet mehrere Gebäude in einer {}.', a: 'Stadt|Großstadt' },
            { t: 'Ein WAN reicht weit: über Filialen, Länder und {}.', a: 'Kontinente' },
            { t: 'Das Internet ist ein Netz aus vielen {}. Man nennt es GAN.', a: 'Netzen|Netzwerken' },
            { t: 'Das G in GAN steht für {} – also weltweit.', a: 'global|globales|Global Area Network' },
            { t: 'Merksatz: Je größer die Reichweite, desto mehr {} und Organisation steckt dahinter.', a: 'Technik' },
            { t: 'Das Handy im Schulnetz hat kein Kabel. Es ist drahtlos über {} verbunden.', a: 'WLAN|W-LAN' },
            { t: 'Der {} stellt die Verbindung vom Schulnetz ins Internet her.', a: 'Router' }
          ] }
      ] },

    /* ---------- B ---------- */
    { kurz: 'Netzwerk oder nicht?', titel: 'Verstehen: Netzwerk oder nicht?', min: 4, folien: 4,
      aufgaben: [
        { typ: 'kategorien',
          q: 'Entscheide bei jedem Beispiel: Tauschen hier mindestens zwei Geräte Daten aus?',
          kats: ['Netzwerk', 'kein Netzwerk'],
          items: [
            { t: 'Du schreibst mit deiner Freundin im Klassenchat.', k: 'Netzwerk', why: 'Zwei Handys tauschen Nachrichten aus.' },
            { t: 'Du druckst vom Laptop über das Schul-WLAN auf dem Drucker im Flur.', k: 'Netzwerk', why: 'Laptop und Drucker tauschen einen Druckauftrag aus.' },
            { t: 'Du rechnest eine Aufgabe mit dem Taschenrechner aus.', k: 'kein Netzwerk', why: 'Der Taschenrechner ist mit keinem anderen Gerät verbunden.' },
            { t: 'Drei Mitschüler bearbeiten gleichzeitig dasselbe Cloud-Dokument.', k: 'Netzwerk', why: 'Mehrere Geräte tauschen über die Cloud Daten aus.' },
            { t: 'Du schreibst einen Text auf einem Laptop ohne WLAN und ohne Kabel.', k: 'kein Netzwerk', why: 'Ein einzelnes Gerät ohne Verbindung ist kein Netzwerk.' },
            { t: 'Du spielst mit Freunden ein Online-Spiel.', k: 'Netzwerk', why: 'Eure Geräte tauschen ständig Spieldaten aus.' },
            { t: 'Eine einfache Armbanduhr ohne Funk zeigt die Uhrzeit an.', k: 'kein Netzwerk', why: 'Sie ist mit keinem anderen Gerät verbunden.' },
            { t: 'Dein Handy lädt über das WLAN zu Hause ein Video.', k: 'Netzwerk', why: 'Handy und WLAN-Router tauschen Daten aus.' }
          ] }
      ] },

    /* ---------- C ---------- */
    { kurz: 'Netzwerkgrößen', titel: 'Zuordnen: Wie groß ist das Netz?', min: 6, folien: [5, 6],
      hinweis: 'Die ersten vier Beispiele kennst du vom Mini-Check auf Folie 6.',
      aufgaben: [
        { typ: 'kategorien',
          q: 'Welche Netzwerkgröße passt zu dem Beispiel?',
          kats: ['LAN', 'MAN', 'WAN', 'GAN'],
          items: [
            { t: 'Zuhause streamt dein Handy über den WLAN-Router.', k: 'LAN', why: 'Alles passiert in deiner Wohnung – lokal.' },
            { t: 'Die Stadtwerke verbinden mehrere Standorte in einer Großstadt.', k: 'MAN', why: 'Mehrere Gebäude in einer Stadt.' },
            { t: 'Eine Firma verbindet Büros in München und Hamburg.', k: 'WAN', why: 'Zwei weit entfernte Städte – ein weites Netz.' },
            { t: 'Du öffnest eine Webseite aus einem anderen Land.', k: 'GAN', why: 'Dafür nutzt du das Internet, das Netz vieler Netze.' },
            { t: 'Die 16 PCs im Computerraum eurer Schule.', k: 'LAN', why: 'Ein Raum in einem Gebäude – lokal.' },
            { t: 'Alle Schulen einer Stadt sind über ein gemeinsames Stadtnetz verbunden.', k: 'MAN', why: 'Mehrere Gebäude in einer Stadt.' },
            { t: 'Eine Supermarktkette verbindet ihre Filialen in ganz Deutschland.', k: 'WAN', why: 'Filialen in vielen Städten – ein weites Netz.' },
            { t: 'Du schaust ein Video, das auf einem Server in den USA liegt.', k: 'GAN', why: 'Das Video kommt über das Internet zu dir.' },
            { t: 'Dein Laptop und dein Drucker zu Hause sind über WLAN verbunden.', k: 'LAN', why: 'Beide Geräte stehen in deiner Wohnung.' },
            { t: 'Eine Bank verbindet ihre eigenen Standorte in Europa und Asien.', k: 'WAN', why: 'Ein Netz über Kontinente, das der Bank gehört – ein WAN.' },
            { t: 'Das Rathaus, die Bücherei und das Hallenbad einer Stadt sind vernetzt.', k: 'MAN', why: 'Mehrere Gebäude in einer Stadt.' },
            { t: 'Weltweit sind Millionen Netze miteinander verbunden.', k: 'GAN', why: 'Das ist das Internet – global.' }
          ] }
      ] },

    /* ---------- D ---------- */
    { kurz: 'Fragen zum Anklicken', titel: 'Verstehen: Fragen zum Anklicken', min: 5, folien: [4, 5],
      aufgaben: [
        { typ: 'wahl', q: 'Welcher Satz beschreibt ein Computernetzwerk richtig?',
          opts: ['Ein Computer, an dem zwei Bildschirme hängen.',
                 'Mindestens zwei Geräte, die miteinander Daten austauschen.',
                 'Ein Programm, mit dem man im Internet surfen kann.',
                 'Ein Kabel, das den Computer mit Strom versorgt.'],
          ok: 1, why: 'Merke: Ein Netzwerk verbindet mindestens zwei Geräte, damit sie Daten austauschen können.' },
        { typ: 'wahl', q: 'Welche Netzwerkgröße hat die kleinste Reichweite?',
          opts: ['GAN', 'WAN', 'LAN', 'MAN'], ok: 2,
          why: 'LAN = lokal: Klassenraum, Schule, Zuhause.' },
        { typ: 'wahl', q: 'Welche Reihenfolge stimmt – von der kleinsten zur größten Reichweite?',
          opts: ['MAN – LAN – GAN – WAN', 'LAN – WAN – MAN – GAN', 'LAN – MAN – WAN – GAN', 'GAN – WAN – MAN – LAN'],
          ok: 2, why: 'lokal → Stadt → weit → global.' },
        { typ: 'wahl', q: 'Was bedeutet der Merksatz „Je größer die Reichweite, desto mehr Technik und Organisation“?',
          opts: ['Große Netze sind immer langsamer als kleine.',
                 'In einem LAN braucht man gar keine Technik.',
                 'Große Netze haben weniger Geräte als kleine.',
                 'Ein großes Netz braucht mehr Leitungen, Geräte und Planung als ein kleines.'],
          ok: 3, why: 'Ein Netz über Länder oder die ganze Welt ist viel aufwendiger als das Netz in deinem Zimmer.' },
        { typ: 'wahl', q: 'Welches Beispiel ist KEIN Netzwerk aus deinem Alltag?',
          opts: ['das Schul-WLAN', 'der Klassenchat', 'ein USB-Stick, der in der Schublade liegt', 'ein Online-Spiel'],
          ok: 2, why: 'Der USB-Stick ist mit keinem Gerät verbunden und tauscht keine Daten aus.' },
        { typ: 'mehrfach', q: 'Was kann in einem Netzwerk ausgetauscht werden?',
          opts: ['Nachrichten', 'Dateien', 'Papier für den Drucker', 'Webseiten', 'Druckaufträge'],
          ok: [0, 1, 3, 4], why: 'Folie 4: Nachrichten, Dateien, Webseiten oder Druckaufträge. Papier muss man immer noch selbst einlegen.' }
      ] },

    /* ---------- E ---------- */
    { kurz: 'Mein Schulnetz', titel: 'Anwenden: Die Skizze „Mein Schulnetz“', min: 8, folien: [7, 8],
      hinweis: 'Schau dir die Skizze genau an. Alle Fragen beziehen sich auf dieses Bild.',
      aufgaben: [
        { typ: 'figur', bild: '../bilder/training/schulnetz-skizze.png',
          alt: 'Skizze eines Schulnetzes: Laptop, Drucker und Server sind mit Kabeln an einem Switch angeschlossen, ein Handy ist per WLAN verbunden. Der Switch ist mit einem Router verbunden, der Router mit dem Internet. Pfeile zeigen den Weg einer Nachricht vom Laptop über Switch und Router ins Internet.',
          cap: 'Folie 8 · Mein Schulnetz (Beispiel)' },
        { typ: 'wahl', q: 'An welchem Gerät laufen die Kabel zusammen?',
          opts: ['am Router', 'am Switch', 'am Server', 'am Drucker'], ok: 1,
          why: 'Der Switch ist das zentrale Gerät. Laptop, Drucker und Server haben je ein Kabel zum Switch.' },
        { typ: 'wahl', q: 'Welches Gerät ist ohne Kabel verbunden?',
          opts: ['der Laptop', 'der Drucker', 'das Handy', 'der Server'], ok: 2,
          why: 'Die gepunktete Linie bedeutet laut Legende: WLAN (drahtlos).' },
        { typ: 'wahl', q: 'Welches Gerät verbindet das Schulnetz mit dem Internet?',
          opts: ['der Switch', 'der Router', 'der Server', 'das Handy'], ok: 1,
          why: 'Der Router führt nach außen ins Internet (roter Pfeil „3. Ins Internet“).' },
        { typ: 'ordnen', q: 'Bringe den Weg einer Nachricht vom Laptop ins Internet in die richtige Reihenfolge.',
          schritte: ['Laptop', 'Switch', 'Router', 'Internet'],
          why: '1. Nachricht zum Switch, 2. Weiterleitung zum Router, 3. ins Internet.' },
        { typ: 'wahl', q: 'Welche Netzwerkgröße zeigt die Skizze?',
          opts: ['LAN', 'MAN', 'WAN', 'GAN'], ok: 0,
          why: 'Alle Geräte stehen im selben Gebäude, in der Schule. Das ist ein LAN.' },
        { typ: 'wahl', q: 'Welche Begründung für diese Netzwerkgröße ist richtig?',
          opts: ['Es sind weniger als zehn Geräte.',
                 'Die Geräte stehen räumlich nah beieinander im selben Gebäude.',
                 'Im Netz gibt es einen Router.',
                 'Das Handy benutzt WLAN.'],
          ok: 1, why: 'Entscheidend ist die Reichweite, nicht die Anzahl der Geräte. Ein LAN kann aus wenigen oder aus vielen Geräten bestehen.' },
        { typ: 'wahl', q: 'Stell dir vor, der Router fällt aus. Was passiert?',
          opts: ['Alle Geräte sind komplett getrennt, auch der Drucker ist nicht mehr erreichbar.',
                 'Kein Gerät kommt mehr ins Internet – aber der Laptop kann über den Switch noch drucken.',
                 'Nur das Handy ist betroffen.',
                 'Nichts, der Switch übernimmt einfach die Verbindung ins Internet.'],
          ok: 1, why: 'Der Router führt nach außen ins Internet. Im Schulnetz selbst verteilt weiterhin der Switch die Daten.' }
      ] },

    /* ---------- F ---------- */
    { kurz: 'Begriffe zuordnen', titel: 'Wiederholen: Begriffe zuordnen', min: 4, folien: [5, 8],
      aufgaben: [
        { typ: 'zuordnen', q: 'Wähle zu jedem Begriff die passende Erklärung.',
          paare: [
            ['LAN', 'lokales Netz, z. B. Klassenraum, Schule, Zuhause'],
            ['MAN', 'Netz über mehrere Gebäude in einer Stadt'],
            ['WAN', 'weites Netz über Filialen, Länder und Kontinente'],
            ['GAN', 'globales Netz: das Internet als Netz vieler Netze'],
            ['Switch', 'zentrales Gerät, an dem die Kabel im Schulnetz zusammenlaufen'],
            ['Router', 'stellt die Verbindung ins Internet her'],
            ['WLAN', 'drahtlose Verbindung, z. B. für das Handy']
          ] }
      ] },

    /* ---------- G ---------- */
    { kurz: 'Erklären', titel: 'Erklären wie in der Probe', min: 9,
      hinweis: 'In der Probe musst du auch Fragen mit eigenen Worten beantworten. Schreibe zuerst selbst eine Antwort, dann vergleiche mit der Musterlösung.',
      aufgaben: [
        { typ: 'frei', q: 'Erkläre mit eigenen Worten, was ein Computernetzwerk ist. Nenne zwei Beispiele aus deinem Alltag.',
          punkte: [
            { t: 'Mindestens zwei (mehrere) Geräte sind miteinander verbunden.', k: ['zwei', '\\b2\\b', 'mehrere', 'verbind', 'verbunden', 'vernetz'] },
            { t: 'Die Geräte tauschen Daten oder Informationen aus.', k: ['daten', 'information', 'austausch', 'tausch', 'schick', 'send', 'nachricht'] },
            { t: 'Zwei Beispiele aus dem Alltag, z. B. Schul-WLAN, Klassenchat, Cloud-Dokument, Online-Spiel.',
              k: ['wlan', 'chat', 'cloud', 'spiel', 'whatsapp', 'internet', 'drucker', 'streaming', 'instagram', 'tiktok', 'mail'], mind: 2 }
          ],
          muster: 'Ein Computernetzwerk besteht aus mindestens zwei Geräten, die miteinander verbunden sind und Daten austauschen, zum Beispiel Nachrichten, Dateien oder Druckaufträge. Beispiele aus meinem Alltag sind das Schul-WLAN und der Klassenchat.' },
        { typ: 'frei', q: 'Erkläre den Unterschied zwischen einem LAN und einem WAN. Nenne zu jedem ein Beispiel.',
          punkte: [
            { t: 'LAN: ein lokales Netz mit kleiner Reichweite (Raum, Schule, Zuhause).', k: ['lokal', 'klein', 'schule', 'zuhause', 'zu hause', 'raum', 'gebaeude', 'wohnung', '\\bhaus'] },
            { t: 'WAN: ein weites Netz über große Entfernungen (Städte, Länder, Kontinente).', k: ['weit', 'gross', 'groess', 'laender', 'land', 'kontinent', 'staedte', 'filiale', 'entfern'] },
            { t: 'Zu jedem Netz ein passendes Beispiel.',
              k: ['firma', 'filiale', 'buero', 'bank', 'muenchen', 'hamburg', 'klassenzimmer', 'klassenraum', 'computerraum', 'zuhause', 'zu hause', 'schule', 'kette', 'supermarkt'], mind: 2 }
          ],
          muster: 'Ein LAN ist ein lokales Netz mit kleiner Reichweite, zum Beispiel im Klassenraum, in der Schule oder zu Hause. Ein WAN verbindet Geräte über weite Entfernungen, also über Städte, Länder oder Kontinente – zum Beispiel eine Firma mit Büros in München und Hamburg.' },
        { typ: 'frei', q: 'Beschreibe ein Netzwerk aus deiner Umgebung, zum Beispiel bei dir zu Hause: Welche Geräte gehören dazu, wie sind sie verbunden und welche Netzwerkgröße ist das? Begründe.',
          zeilen: 5, min: 3,
          punkte: [
            { t: 'Mindestens zwei Geräte werden genannt.',
              k: ['handy', 'smartphone', 'laptop', '\\bpc\\b', 'computer', 'tablet', 'drucker', 'fernseher', '\\btv\\b', 'konsole', 'playstation', 'xbox', 'lautsprecher', 'router'], mind: 2 },
            { t: 'Die Art der Verbindung wird genannt (WLAN, Kabel, Router).', k: ['wlan', 'kabel', 'router', 'funk', 'drahtlos', 'bluetooth'] },
            { t: 'Die richtige Netzwerkgröße: LAN.', k: ['\\blan\\b'] },
            { t: 'Eine Begründung: Die Geräte stehen räumlich nah beieinander, z. B. in einer Wohnung.', k: ['\\bnah', 'wohnung', '\\bhaus\\b', 'gebaeude', 'zimmer', 'lokal'] }
          ],
          muster: 'Bei mir zu Hause sind Handy, Laptop und Fernseher über WLAN mit dem Router verbunden. Der Drucker hängt mit einem Kabel am Router. Das ist ein LAN, weil alle Geräte räumlich nah beieinander in unserer Wohnung stehen.' }
      ] }
  ]
});
