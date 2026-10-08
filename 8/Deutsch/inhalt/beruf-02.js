/* Deutsch 8 · Beruf, Kommunikation und Präsentation · Modul 2: Das Bewerbungsgespräch
   (einem Vorstellungsgespräch zuhören und Gelungenes von weniger Gelungenem unterscheiden; Vorbereitung: Betrieb kennen,
   Stärken mit Beispiel, eigene Fragen; typische Fragen – starke und schwache Antworten vergleichen und verbessern; Auftreten,
   Körpersprache, Sprachebene; nachfragen, wenn man etwas nicht versteht; ein Probegespräch als Folge von Entscheidungen;
   M8: mit eigenen Worten zurückfragen, Rückmeldung nach Kriterien prüfen und selbst formulieren)
   LehrplanPLUS D8 1.3 (Gespräche vorbereiten, bei Unklarheiten nachfragen, Angemessenheit von Beiträgen reflektieren,
   nonverbal angemessen verhalten, Sprachebene an Partner und Situation anpassen; M8: Techniken des Nachfragens, Rückmeldung
   geben, z. B. beim Bewerbungsgespräch), 1.1 (Gesprächen aufmerksam zuhören, Notizen machen, Verständnisfragen beantworten).
   Hörtext: „Vorstellungsgespräch in der Autowerkstatt“ (texte/hoertexte/vorstellungsgespraech-werkstatt.js) – erfunden.
   Übungsbeispiele (alle erfunden, kein Kind schreibt über sich selbst): Hofladen, Buchhandlung, Tierheim, Hotel, Möbelhaus,
   Elektrobetrieb (Probegespräch), Optikergeschäft (Beobachtungsbogen für M8). */
D7Kit.seite({
  id: "beruf-02",
  titel: "Das Bewerbungsgespräch",
  einleitung: "Ein Vorstellungsgespräch ist keine Prüfung, sondern ein Kennenlernen – und darauf kann man sich vorbereiten. Heute hörst du bei einem Gespräch in einer Autowerkstatt zu, vergleichst starke und schwache Antworten und spielst selbst ein Gespräch durch.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 Ich höre einem Vorstellungsgespräch zu und erkenne, was gelingt und was nicht.", "📋 Ich bereite mich vor: Betrieb, eigene Stärken mit Beispiel, eigene Fragen.", "🗣️ Ich antworte in ganzen Sätzen, bleibe beim „Sie“ und frage nach, wenn ich etwas nicht verstehe.", "👀 Ich weiß, wie Auftreten und Körpersprache wirken."],
  quiz: { profi: "Bewerbungs-Profi" },
  glossar: {
    vorstellung: ["Vorstellungsgespräch", "Das Gespräch, in dem ein Betrieb und eine Bewerberin oder ein Bewerber einander kennenlernen."],
    staerke: ["Stärke", "Etwas, das du gut kannst oder das dich auszeichnet – zum Beispiel Geduld oder Zuverlässigkeit."],
    koerpersprache: ["Körpersprache", "Was du ohne Worte mitteilst: Blick, Gesichtsausdruck, Haltung und Bewegungen."],
    sprachebene: ["Sprachebene", "Die Art zu sprechen, die zu einer Situation passt: im Betrieb höflich und in ganzen Sätzen, unter Freunden locker."],
    jugendsprache: ["Jugendsprache", "Wörter und Wendungen, die vor allem Jugendliche untereinander benutzen, zum Beispiel „mega“ oder „chillen“."],
    nachfrage: ["Nachfrage", "Eine Frage, mit der du klärst, was du nicht verstanden hast."],
    rueckmeldung: ["Rückmeldung", "Du sagst jemandem, was dir an seiner Leistung aufgefallen ist: Gelungenes und Tipps. Ein anderes Wort dafür ist Feedback."],
    kriterium: ["Kriterium", "Ein Gesichtspunkt, nach dem man etwas beobachtet und beurteilt, zum Beispiel „Sprache“ oder „Auftreten“."]
  },
  stationen: [
    { kurz: "Zuhören", ober: "Zuhören", titel: "Antonia stellt sich vor", teile: [
      { art: "text", html: "<p class=\"lead\">Antonia geht in die achte Klasse und sucht einen Platz für ihr Praktikum. Heute hat sie ein <button class=\"term\" data-t=\"vorstellung\">Vorstellungsgespräch</button> in der Autowerkstatt von Frau Stadler. Am Empfang trifft sie zuerst Arda, den Auszubildenden. Lies zuerst die Aufgaben. Achte dann beim Hören auf zwei Dinge: <b>Was</b> gelingt Antonia gut – und <b>wo</b> hakt es?</p><p>Tipp: Leg dir einen Zettel bereit. Schreib links ein Plus, rechts ein Minus und notiere Stichwörter.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Hörtext", hoertext: "beruf-gespraech-werkstatt", fragen: [
        { art: "mc", id: "hw", titel: "Was erfährst du?", fragen: [
          { q: "Woher weiß Antonia, dass die Werkstatt auch Elektroautos repariert?", o: ["von der Internetseite der Werkstatt", "von Arda, dem Auszubildenden", "aus einer Anzeige in der Zeitung"], a: 0, e: "Sie hat sich vorher informiert – und sagt das auch. Das zeigt echtes Interesse." },
          { q: "Mit welchem Beispiel zeigt Antonia, dass sie geduldig ist?", o: ["Sie hat die Bremsen an ihrem Fahrrad selbst gewechselt.", "Sie hat ihrem Vater beim Reifenwechsel am Auto geholfen.", "Sie hat im Fach Technik ein Modellauto zusammengebaut."], a: 0, e: "Erst haben die Bremsen geschliffen, dann hat sie weitergemacht, bis es passte. Ein Beispiel macht eine Stärke glaubwürdig." }
        ] },
        { art: "tf", id: "htf", titel: "Hast du genau zugehört?", aussagen: [
          ["Antonia kommt zehn Minuten vor ihrem Termin in die Werkstatt.", true],
          ["Weil Frau Stadler sie duzt, sagt auch Antonia „du“ zu ihr.", false],
          ["Auf die Frage nach einer Schwäche fällt Antonia nichts ein.", true],
          ["Die Arbeit in der Werkstatt beginnt um acht Uhr.", false],
          ["Antonia wiederholt am Ende, was sie mitbringen soll.", true]
        ] },
        { art: "sort", id: "hs", titel: "Gelungen – oder nicht so gelungen?", lead: "Ordne zu, was Antonia im Gespräch sagt und tut.", buckets: ["gelungen", "nicht so gelungen"], cols: 240, items: [
          { t: "Sie nennt am Empfang ihren Namen und ihren Termin.", b: 0 },
          { t: "Sie fragt nach, was „Sicherheitsunterweisung“ bedeutet.", b: 0 },
          { t: "Sie stellt am Ende zwei eigene Fragen.", b: 0 },
          { t: "Sie bedankt sich für das Gespräch.", b: 0 },
          { t: "„Technik ist voll mein Ding, da bin ich mega gut.“", b: 1 },
          { t: "„Keine Ahnung. Eigentlich habe ich keine.“", b: 1 },
          { t: "Mitten im Gespräch klingelt ihr Handy.", b: 1 }
        ] }
      ] }
    ] },
    { kurz: "Vorbereiten", ober: "Vorbereiten", titel: "Vor dem Gespräch", teile: [
      { art: "sort", id: "vorb", tag: "Sortieren", titel: "Welche Fragen stellst du dir vorher?", lead: "Dass Antonia so viel über die Werkstatt wusste, war kein Zufall. Vor einem Gespräch beantwortet man sich selbst ein paar Fragen. Ordne sie.", buckets: ["den Betrieb kennen", "über mich sprechen", "den Tag planen"], items: [
        { t: "Was repariert, baut oder verkauft der Betrieb?", b: 0 },
        { t: "Welche Berufe kann man dort lernen?", b: 0 },
        { t: "Was kann ich gut – und woran sieht man das?", b: 1 },
        { t: "Warum interessiert mich gerade dieser Beruf?", b: 1 },
        { t: "Wie komme ich hin, und wie lange brauche ich?", b: 2 },
        { t: "Was ziehe ich zu dem Termin an?", b: 2 }
      ] },
      { art: "merke", kopf: "MERKE: Drei Dinge bereitest du vor", html: "<ol><li><b>Den Betrieb kennen:</b> Sieh dir die Internetseite an oder frag Leute, die dort arbeiten. Was macht der Betrieb? Wer leitet ihn?</li><li><b>Über dich sprechen können:</b> Überlege dir zwei <button class=\"term\" data-t=\"staerke\">Stärken</button> – jede mit einem Beispiel. Und eine Schwäche, an der du arbeitest.</li><li><b>Eigene Fragen mitbringen:</b> Zwei oder drei Fragen zeigen, dass dich die Arbeit wirklich interessiert.</li></ol><p>Dazu kommt das Praktische: den Weg vorher ausprobieren, fünf bis zehn Minuten früher da sein, saubere und passende Kleidung, das Handy ausschalten.</p>" },
      { art: "paare", id: "staerken", tag: "Paare finden", titel: "Welches Beispiel belegt welche Stärke?", lead: "„Ich bin zuverlässig“ kann jeder sagen. Erst ein Beispiel macht die Stärke glaubwürdig.", paare: [
        ["zuverlässig", "Seit einem Jahr trage ich jeden Samstag pünktlich die Gemeindezeitung aus."],
        ["teamfähig", "In der Schulband stimme ich mich bei jedem Lied mit den anderen ab."],
        ["geduldig", "An einem Puzzle mit tausend Teilen sitze ich, bis das letzte Teil liegt."],
        ["sorgfältig", "Beim Modellbau prüfe ich jedes Teil genau, bevor ich es festklebe."],
        ["hilfsbereit", "Wer krank war, bekommt von mir die Arbeitsblätter nach Hause gebracht."]
      ] },
      { art: "offen", id: "staerke", tag: "Selbst formulieren", titel: "Stärke plus Beispiel", fragen: [
        { q: "Emma hilft seit zwei Jahren jeden Samstag im Hofladen ihrer Tante: Sie wiegt Obst ab, kassiert und räumt Regale ein. Im Vorstellungsgespräch wird sie gefragt: „Was kannst du gut?“ Schreibe Emmas Antwort in ein bis zwei Sätzen: eine Stärke und das Beispiel dazu.", m: "Ich bin zuverlässig. Seit zwei Jahren helfe ich jeden Samstag im Hofladen meiner Tante, wiege Obst ab und kassiere.", k: ["zuverlässig|fleißig|freundlich|genau|sorgfältig|verantwortung|hilfsbereit|ausdauer|pünktlich|selbstständig|ordentlich|rechnen|umgehen|gut mit", "hofladen|laden|samstag|kassier|wiege|obst|regal|tante|kund"], min: 2 }
      ], tipp: "Zwei Teile: erst die Stärke („Ich bin …“), dann das Beispiel aus dem Hofladen.", hilfen: ["Welche Eigenschaft zeigt jemand, der zwei Jahre lang jeden Samstag kommt?", "So kannst du anfangen: „Ich bin zuverlässig. Seit zwei Jahren …“"] },
      { art: "mc", id: "fragen", tag: "Eigene Fragen", fragen: [
        { q: "Am Ende heißt es fast immer: „Hast du noch Fragen?“ Welche Antwort zeigt am meisten Interesse an der Arbeit?", o: ["„Welche Aufgaben darf ich im Praktikum selbst übernehmen?“", "„Kann ich freitags schon mittags nach Hause gehen?“", "„Nein, danke. Mir fällt gerade keine Frage ein.“"], a: 0, e: "Fragen nach Aufgaben, Ablauf oder Ausbildung zeigen Interesse. Wer nur nach der Freizeit fragt oder gar nichts wissen will, wirkt gleichgültig." }
      ] }
    ] },
    { kurz: "Antworten", ober: "Bewerten", titel: "Starke und schwache Antworten", teile: [
      { art: "mc", id: "antw", tag: "Vergleichen", titel: "Welche Antwort überzeugt?", lead: "Manche Fragen kommen in fast jedem Gespräch vor. Entscheide, welche Antwort den besten Eindruck macht.", fragen: [
        { q: "In einer Buchhandlung: „Warum möchtest du dein Praktikum gerade bei uns machen?“", o: ["„Ich lese viel und möchte wissen, wie Sie entscheiden, welche Bücher ins Schaufenster kommen.“", "„Meine Eltern haben gesagt, ich soll mich endlich irgendwo bewerben, und hier war noch frei.“", "„Ihr Laden liegt gleich bei mir um die Ecke, da muss ich morgens nicht so früh aufstehen.“"], a: 0, e: "Die überzeugende Antwort nennt einen Grund, der mit dem Betrieb zu tun hat. Bequemlichkeit oder der Wunsch der Eltern sind für den Betrieb kein Grund, dich zu nehmen." },
        { q: "„Und wo hast du eine Schwäche?“", o: ["„Vor vielen Leuten zu sprechen fällt mir schwer. Deshalb übernehme ich jetzt öfter kurze Vorträge.“", "„Ich habe eigentlich keine Schwächen. Bei mir läuft alles ziemlich gut, das sagen alle.“", "„Ich komme oft zu spät, vergesse ständig meine Sachen und habe selten Lust auf Arbeit.“"], a: 0, e: "Niemand ist ohne Schwäche – wer das behauptet, wirkt unehrlich. Nenne eine Schwäche, die dem Betrieb nicht schadet, und sag, was du dagegen tust." }
      ] },
      { art: "merke", kopf: "MERKE: So überzeugt eine Antwort", html: "<ul><li><b>Ganze Sätze</b> statt „Ja“, „Nein“ oder „Weiß nicht“.</li><li><b>Genau:</b> ein Grund oder ein Beispiel statt „Das ist halt so“.</li><li><b>Passend zum Betrieb:</b> Zeig, dass du weißt, wo du dich bewirbst.</li><li><b>Ehrlich:</b> Erfinde nichts. Bei der Schwäche sagst du, was du dagegen tust.</li></ul><p>Fragen, mit denen du rechnen kannst: Warum gerade bei uns? Was kannst du gut? Wo hast du eine Schwäche? Was machst du in deiner Freizeit? Was weißt du über den Beruf?</p>" },
      { art: "offen", id: "besser", tag: "Verbessern", titel: "Aus schwach mach stark", fragen: [
        { q: "Im Tierheim wird Fabian gefragt: „Warum möchtest du dein Praktikum bei uns machen?“ Er antwortet: „Weiß nicht. Tiere sind halt ganz okay.“ Schreibe für Fabian eine bessere Antwort in ein bis zwei ganzen Sätzen. Sie soll einen Grund enthalten.", m: "Ich möchte mein Praktikum bei Ihnen machen, weil ich gern mit Tieren umgehe. Zu Hause versorge ich jeden Tag unsere zwei Katzen und möchte lernen, wie man Tiere richtig pflegt.", k: ["weil|denn|da |deshalb|darum|deswegen", "tier|hund|katze|pfleg|versorg|fütter|kümmer"], min: 2 }
      ], tipp: "Beginne mit „Ich möchte mein Praktikum bei Ihnen machen, weil …“ und nenne einen Grund, der zum Tierheim passt.", hilfen: ["Was könnte Fabian an der Arbeit im Tierheim wirklich interessieren? Denk an füttern, pflegen, ausführen.", "Ein Beispiel aus Fabians Alltag macht die Antwort stärker, etwa ein eigenes Haustier."] }
    ] },
    { kurz: "Auftreten", ober: "Verstehen", titel: "Auftreten, Körpersprache und Sprache", teile: [
      { art: "sort", id: "koerper", tag: "Körpersprache", titel: "Was sagt dein Körper?", lead: "Noch bevor du den ersten Satz sagst, macht sich dein Gegenüber ein Bild von dir. Ordne zu.", buckets: ["wirkt interessiert", "wirkt gleichgültig oder unsicher"], cols: 240, items: [
        { t: "Blickkontakt halten", b: 0 },
        { t: "aufrecht sitzen, dem Gegenüber zugewandt", b: 0 },
        { t: "beim Zuhören ab und zu nicken", b: 0 },
        { t: "freundlich lächeln", b: 0 },
        { t: "die Arme vor der Brust verschränken", b: 1 },
        { t: "im Stuhl hängen und mit dem Fuß wippen", b: 1 },
        { t: "beim Antworten auf den Boden schauen", b: 1 },
        { t: "Kaugummi kauen", b: 1 }
      ] },
      { art: "merke", kopf: "MERKE: Der erste Eindruck", html: "<ul><li><b>Pünktlich:</b> fünf bis zehn Minuten vor dem Termin da sein.</li><li><b>Begrüßen:</b> „Guten Tag, Frau …“ – mit Namen und mit Blickkontakt. Setz dich erst, wenn man dir einen Platz anbietet.</li><li><b><button class=\"term\" data-t=\"koerpersprache\">Körpersprache</button>:</b> aufrecht sitzen, zugewandt bleiben, die Hände ruhig halten.</li><li><b>Handy aus</b>, Kaugummi raus, Mütze ab.</li><li><b><button class=\"term\" data-t=\"sprachebene\">Sprachebene</button>:</b> ganze Sätze, keine <button class=\"term\" data-t=\"jugendsprache\">Jugendsprache</button> – und „Sie“. Auch wenn man dich duzt, bleibst du beim „Sie“, bis man dir das Du anbietet.</li></ul>" },
      { art: "paare", id: "ebene", tag: "Sprachebene", titel: "So nicht – so besser", lead: "Mit Freunden sprichst du anders als im Betrieb. Finde zu jedem Satz die Fassung, die ins Vorstellungsgespräch passt.", paare: [
        ["„Hä? Was?“", "„Entschuldigung, könnten Sie die Frage bitte wiederholen?“"],
        ["„Jo, passt schon.“", "„Ja, damit bin ich einverstanden.“"],
        ["„Kein Plan.“", "„Das weiß ich leider noch nicht.“"],
        ["„Technik ist voll mein Ding.“", "„Technik interessiert mich sehr.“"],
        ["„Tschau, bis dann!“", "„Vielen Dank für das Gespräch. Auf Wiedersehen.“"]
      ] },
      { art: "merke", kopf: "MERKE: Nachfragen ist erlaubt", html: "<p>Du hast eine Frage nicht verstanden oder kennst ein Wort nicht? Dann frag nach – so wie Antonia bei der „Sicherheitsunterweisung“. Eine <button class=\"term\" data-t=\"nachfrage\">Nachfrage</button> zeigt, dass du mitdenkst. Ungünstig ist nur, zu nicken und zu raten.</p><ul><li>Nicht verstanden: „Entschuldigung, könnten Sie die Frage bitte wiederholen?“</li><li>Wort unbekannt: „Dieses Wort kenne ich nicht. Was bedeutet … genau?“</li></ul>" },
      { art: "offen", id: "nachfr", tag: "Selbst formulieren", titel: "Deine Nachfrage", fragen: [
        { q: "Die Leiterin eines Hotels sagt: „Am ersten Tag hilfst du im Restaurant beim Eindecken.“ Du weißt nicht, was „Eindecken“ bedeutet. Formuliere eine höfliche Nachfrage.", m: "Entschuldigung, dieses Wort kenne ich nicht. Was bedeutet Eindecken genau?", k: ["entschuldig|bitte|verzeih|könnten sie|können sie|darf ich", "was bedeutet|was heißt|was ist|was genau|erklären|meinen sie|versteht man|was macht man"], min: 2 }
      ], tipp: "Zwei Teile: eine höfliche Einleitung („Entschuldigung, …“) und die Frage nach dem Wort („Was bedeutet …?“).", hilfen: ["Beginne mit „Entschuldigung, …“ – und bleib beim „Sie“.", "So kannst du fragen: „Was bedeutet … genau?“ oder „Könnten Sie mir bitte erklären, was … ist?“"] },
      { art: "text", nur: "M", html: "<p><b>Für M8 – drei Techniken des Nachfragens:</b> Du kannst (1) um Wiederholung bitten, (2) einen Begriff klären lassen oder (3) mit eigenen Worten zurückfragen: „Habe ich richtig verstanden, dass …?“ Die dritte Technik ist die stärkste. Du zeigst, was bei dir angekommen ist – und dein Gegenüber kann dich sofort berichtigen, bevor ein Missverständnis entsteht.</p>" },
      { art: "offen", id: "rueckfr", m7: true, tag: "Zurückfragen", titel: "Mit eigenen Worten nachfragen", fragen: [
        { q: "Der Leiter eines Möbelhauses sagt: „Die ersten zwei Tage läufst du in der Warenannahme mit. Danach schauen wir, in welche Abteilung du am besten passt.“ Frage mit eigenen Worten zurück, ob du ihn richtig verstanden hast. Beginne mit „Habe ich richtig verstanden, dass …“.", m: "Habe ich richtig verstanden, dass ich an den ersten beiden Tagen bei der Warenannahme zuschaue und mithelfe und erst danach in einen festen Bereich komme?", k: ["habe ich|verstehe ich|heißt das|bedeutet das|meinen sie|richtig verstanden", "zwei tage|beiden tage|ersten tage|anfang|zuerst|zunächst|warenannahme|waren|danach|später|abteilung|bereich|zuschau|mithelf|mitlauf|begleit"], min: 2 }
      ], tipp: "Wiederhole nicht Wort für Wort. Sag in deinen Worten, was an den ersten zwei Tagen geschieht und was danach kommt." }
    ] },
    { kurz: "Probe", ober: "Anwenden", titel: "Dein Probegespräch", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt bist du dran. Stell dir vor: Du hast einen Termin bei Herrn Zellner. Er leitet einen Elektrobetrieb, der Leitungen in Neubauten verlegt und Solaranlagen auf Dächer baut – das hast du auf der Internetseite gelesen. Was antwortest du?</p>" },
      { art: "mc", id: "probe", tag: "Was antwortest du?", fragen: [
        { q: "Herr Zellner kommt herein und begrüßt dich. Was sagst du?", o: ["„Guten Tag, Herr Zellner. Vielen Dank für die Einladung.“", "„Hallo! Na, alles klar bei Ihnen? Ich bin dann mal da.“", "„Hi, ich komme wegen dem Praktikum. Wo muss ich hin?“"], a: 0, e: "Gruß, Name, Dank – mehr braucht es nicht. „Na, alles klar?“ passt zu Freunden, nicht in ein Vorstellungsgespräch." },
        { q: "„Was weißt du denn schon über unseren Betrieb?“", o: ["„Sie verlegen Leitungen in Neubauten und bauen Solaranlagen auf Dächer.“", "„Noch nicht viel, aber das erklären Sie mir bestimmt gleich.“", "„Dass Sie Praktikanten nehmen – sonst wäre ich ja nicht hier.“"], a: 0, e: "Wer zwei Dinge über den Betrieb nennen kann, zeigt: Ich habe mich vorbereitet. Genau darauf zielt die Frage." },
        { q: "Herr Zellner sagt: „Am ersten Tag bekommst du deine PSA.“ Du hast keine Ahnung, was das ist. Was tust du?", o: ["Ich frage nach: „Entschuldigung, was bedeutet PSA?“", "Ich nicke und hoffe, dass es nicht so wichtig ist.", "Ich sage: „PSA? Nie gehört. Klingt kompliziert.“"], a: 0, e: "PSA heißt „persönliche Schutzausrüstung“, zum Beispiel Sicherheitsschuhe und Handschuhe. Woher sollst du das wissen? Nachfragen ist hier genau richtig." },
        { q: "„Hast du noch Fragen an mich?“", o: ["„Ja. Bei welchen Arbeiten darf ich im Praktikum mithelfen?“", "„Nein, danke. Ich glaube, ich weiß jetzt schon alles.“", "„Ja. Wie lange dauert bei Ihnen die Mittagspause?“"], a: 0, e: "Eine Frage zu den Aufgaben zeigt, dass du mitarbeiten willst. Wer nichts fragt, wirkt wenig interessiert – und wer zuerst nach der Pause fragt, auch." }
      ] },
      { art: "duell", id: "kiduell", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Die KI bewirbt sich auch",
        intro: "Die KI sitzt mit dir im Wartezimmer und hat denselben Termin. Ihr bekommt dieselben Fragen. Wer antwortet besser? Achtung: Die KI klingt immer sehr sicher – auch wenn sie danebenliegt.",
        runden: [
          { material: "Frage im Gespräch: „Was machst du in deiner Freizeit?“", q: "Welche Antwort passt am besten?", o: ["„Ich spiele Schlagzeug und koche gern für meine Familie.“", "„Nichts Besonderes. Zocken halt, was man eben so macht.“", "„Das ist privat. Dazu möchte ich lieber nichts sagen.“"], a: 0, ki: 0, kiText: "denn Hobbys zeigen, was jemand kann – und ganze Sätze wirken interessiert.",
            e: "Kurz, ehrlich, in ganzen Sätzen: Mehr will der Betrieb hier nicht wissen. Er möchte dich kennenlernen." },
          { material: "Frage im Gespräch: „Was kannst du besonders gut?“", q: "Welche Antwort überzeugt am meisten?", o: ["„Ich bin sorgfältig. Beim Modellbau prüfe ich jedes Teil zweimal.“", "„Ich bin in allem, was ich anfange, sofort richtig gut.“", "„Eigentlich nichts so richtig. Da müssen Sie andere fragen.“"], a: 0, ki: 1, kiText: "weil man im Gespräch selbstbewusst auftreten soll – je mehr Lob, desto besser.",
            e: "Selbstbewusst heißt nicht angeberisch. Eine Stärke mit Beispiel überzeugt; „in allem sofort richtig gut“ glaubt niemand.",
            begruende: { q: "Warum überzeugt eine Stärke mit Beispiel mehr als ein großes Lob?", m: "Weil das Beispiel zeigt, dass die Stärke wirklich stimmt, während ein Lob ohne Beleg nur eine Behauptung ist.", k: ["beispiel|beleg|beweis|zeigt|glaub|nachprüf|behauptung|konkret|stimmt"] } },
          { material: "Die Chefin stellt dir eine Frage. Draußen fährt ein Lastwagen vorbei – du hast kein Wort verstanden.", q: "Was tust du?", o: ["Ich bitte sie höflich, die Frage zu wiederholen.", "Ich antworte irgendetwas, das meistens passt.", "Ich warte still ab, bis sie weiterspricht."], a: 0, ki: 1, kiText: "denn Nachfragen wirkt unaufmerksam – eine allgemeine Antwort fällt weniger auf.",
            e: "Raten fällt viel mehr auf als Nachfragen. „Entschuldigung, könnten Sie die Frage bitte wiederholen?“ ist völlig in Ordnung." },
          { material: "Nach zehn Minuten sagt der Chef: „Wir sagen hier alle du. Ich bin der Martin.“", q: "Wie sprichst du ihn von jetzt an an?", o: ["mit „du“ – er hat es mir angeboten", "weiter mit „Sie“ – alles andere wäre unhöflich", "am besten gar nicht mehr – das ist am sichersten"], a: 0, ki: 0, kiText: "Das Du bietet die ältere oder ranghöhere Person an – hier der Chef. Dann darf man es annehmen.",
            e: "Du bleibst beim „Sie“, bis man dir das Du anbietet. Bietet man es dir an, nimmst du es freundlich an.",
            begruende: { q: "Warum solltest du einem Chef nicht von dir aus das Du anbieten?", m: "Weil das Du von der älteren oder ranghöheren Person angeboten wird und es sonst unhöflich und respektlos wirken kann.", k: ["älter|ranghöher|chef|vorgesetzt|höflich|unhöflich|respekt|anbieten|angeboten|erwachsen|zusteht"] } }
        ] },
      { art: "merke", m7: true, kopf: "MERKE: Rückmeldung geben – nach Kriterien", html: "<p>Wer ein Probegespräch beobachtet, hilft mit einer genauen <button class=\"term\" data-t=\"rueckmeldung\">Rückmeldung</button>. Beobachte nach <button class=\"term\" data-t=\"kriterium\">Kriterien</button>:</p><ul><li><b>Vorbereitung</b> – Wusste die Person etwas über den Betrieb? Hatte sie eigene Fragen?</li><li><b>Antworten</b> – ganze Sätze, Gründe, Beispiele?</li><li><b>Sprache</b> – „Sie“, keine Jugendsprache, deutlich gesprochen?</li><li><b>Auftreten</b> – Begrüßung, Blickkontakt, Haltung?</li></ul><p>So sagst du es: zuerst etwas <b>Gelungenes</b> mit Beispiel („Mir hat gefallen, dass …“), dann <b>eine</b> Beobachtung, die noch nicht passt („Mir ist aufgefallen, dass …“), zum Schluss ein <b>Tipp</b> („Beim nächsten Mal könntest du …“). Du beschreibst, was du gesehen und gehört hast – du verurteilst niemanden.</p>" },
      { art: "mc", id: "fbwahl", m7: true, tag: "Rückmeldung prüfen", fragen: [
        { q: "Denk an Antonia aus dem Hörtext. Welche Rückmeldung hilft ihr am meisten?", o: ["„Mir hat gefallen, dass du die Internetseite kanntest. Bei der Schwäche kam nichts – überleg dir vorher eine.“", "„Insgesamt war das schon ganz gut, aber an manchen Stellen hat es einfach nicht so richtig gepasst.“", "„Du redest ja wie auf dem Pausenhof. So nimmt dich in einer Werkstatt doch niemand ernst.“"], a: 0, e: "Hilfreich ist eine Rückmeldung, die Gelungenes nennt, genau sagt, was fehlte, und einen Tipp gibt. „Ganz gut“ sagt nichts Genaues, und ein Satz wie „So nimmt dich niemand ernst“ verletzt nur." }
      ] },
      { art: "beispiel", m7: true, kopf: "Beobachtungsbogen: Dilaras Probegespräch (Optikergeschäft)", html: "<ul><li><b>Vorbereitung:</b> weiß von der Internetseite, dass das Geschäft auch Hörgeräte anpasst; hat eine Frage zu den Aufgaben im Praktikum dabei</li><li><b>Antworten:</b> antwortet meist nur mit „Ja“ oder „Nein“; nennt als Stärke „sorgfältig“, aber kein Beispiel</li><li><b>Sprache:</b> sagt durchgehend „Sie“, spricht deutlich</li><li><b>Auftreten:</b> grüßt freundlich mit Namen; schaut beim Antworten fast nur auf die Tischplatte</li></ul>" },
      { art: "offen", id: "feedback", m7: true, tag: "Rückmeldung geben", titel: "Deine Rückmeldung für Dilara", fragen: [
        { q: "Dilara hat in der Klasse ein Vorstellungsgespräch geübt. Du hast sie beobachtet und den Bogen ausgefüllt. Gib ihr eine Rückmeldung in drei Sätzen: etwas Gelungenes mit Beispiel, eine Beobachtung, die noch nicht passt, und ein Tipp.", m: "Mir hat gefallen, dass du gut vorbereitet warst, denn du wusstest, dass das Geschäft auch Hörgeräte anpasst. Mir ist aufgefallen, dass du oft nur mit Ja oder Nein geantwortet und dabei auf den Tisch geschaut hast. Beim nächsten Mal könntest du in ganzen Sätzen antworten und zu deiner Stärke ein Beispiel nennen.", k: ["gefallen|gelungen|gut war|gut fand|gut vorbereitet|stark|positiv|toll|freundlich", "hörgerät|internetseite|vorbereit|frage|gegrüßt|grüß|begrüß|sie gesagt|deutlich|siez", "ja oder nein|ja und nein|kurz|einsilbig|tisch|blick|angeschaut|anschau|augen|beispiel|ganze sätze|ganzen sätzen", "nächsten mal|könntest|tipp|versuch|rate|empfehl|achte|probier|solltest"], min: 3 }
      ], tipp: "Halte die Reihenfolge ein: „Mir hat gefallen, dass …“ – „Mir ist aufgefallen, dass …“ – „Beim nächsten Mal könntest du …“. Nimm die Beispiele aus dem Bogen." }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Vor dem Gespräch informierst du dich, was der Betrieb macht.", true],
        ["Eine Stärke überzeugt erst richtig mit einem Beispiel.", true],
        ["Auf die Frage nach einer Schwäche antwortest du am besten: „Ich habe keine.“", false],
        ["Wenn du ein Wort nicht verstehst, darfst du höflich nachfragen.", true],
        ["Duzt dich die Chefin, darfst du sie sofort auch duzen.", false],
        ["Verschränkte Arme und ein Blick auf den Boden wirken interessiert.", false],
        ["Eigene Fragen am Ende zeigen, dass dich die Arbeit interessiert.", true]
      ] }
    ] }
  ],
  weiter: { href: "beruf_03.html", titel: "Modul 3: Telefonieren und E-Mails schreiben", text: "Vor jedem Gespräch steht der erste Kontakt. Wie du in einem Betrieb anrufst und eine E-Mail schreibst, die ernst genommen wird, übst du im nächsten Modul." }
});
