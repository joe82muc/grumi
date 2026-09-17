"use strict";

/**
 * Testdefinitionen fuer die Vokabeltests.
 *
 * Diese Datei bleibt bewusst auf dem Server: Sie enthaelt die Loesungen.
 * An den Browser gehen ueber /api/vokabeltest/start nur die Aufgaben.
 *
 * direction: "en-de" -> englisches Wort steht da, Deutsch ist gesucht
 *            "de-en" -> deutsches Wort steht da, Englisch ist gesucht
 * solutions: alle zugelassenen Schreibweisen. Mehrere gleichwertige
 *            Bedeutungen koennen zusaetzlich mit ";" getrennt werden.
 */

/* ==================================================================
   Englisch 7 - Unit 1 - Test 1
   Out and about in England + Topic 1 + Numbers + Talking about places
   ================================================================== */
const e7u1t1 = {
  id: "e7-u1-test1",
  title: "Vokabeltest 1 - Out and about in England",
  unit: "Englisch 7 / Unit 1",
  classLevel: "7",
  direction: "mixed",
  items: [
    // --- Intro: Out and about in England ---
    { prompt: "unterwegs", direction: "de-en", solutions: ["out and about"] },
    { prompt: "to go surfing", direction: "en-de", solutions: ["surfen gehen"] },
    { prompt: "theatre", direction: "en-de", solutions: ["Theater"] },
    { prompt: "Theaterstück", direction: "de-en", solutions: ["play"] },
    { prompt: "science", direction: "en-de", solutions: ["Wissenschaft; Naturwissenschaft"] },
    { prompt: "Ausstellung", direction: "de-en", solutions: ["exhibition"] },
    { prompt: "rocket", direction: "en-de", solutions: ["Rakete"] },
    { prompt: "fahren", direction: "de-en", solutions: ["to drive; drive"], hint: "Verb" },
    { prompt: "coast", direction: "en-de", solutions: ["Küste"] },

    // --- Topic 1: Manchester ---
    { prompt: "Verkehr", direction: "de-en", solutions: ["traffic"] },
    { prompt: "noisy", direction: "en-de", solutions: ["laut"] },
    { prompt: "Vergangenheit", direction: "de-en", solutions: ["past"] },
    { prompt: "factory", direction: "en-de", solutions: ["Fabrik; Werk"] },
    { prompt: "Kohle", direction: "de-en", solutions: ["coal"] },
    { prompt: "mine", direction: "en-de", solutions: ["Bergwerk; Mine"] },
    { prompt: "Zentrum", direction: "de-en", solutions: ["centre; center"] },
    { prompt: "before", direction: "en-de", solutions: ["vorher; zuvor; schon einmal"] },
    { prompt: "Luft", direction: "de-en", solutions: ["air"] },
    { prompt: "clean", direction: "en-de", solutions: ["sauber"] },

    // --- Talking about places ---
    { prompt: "im Nordwesten von", direction: "de-en", solutions: ["in the northwest of"] },
    { prompt: "quiet", direction: "en-de", solutions: ["leise; ruhig; still"] },
    { prompt: "in der Nähe von", direction: "de-en", solutions: ["near"] },
    { prompt: "far", direction: "en-de", solutions: ["weit"] },
    { prompt: "Hauptstadt", direction: "de-en", solutions: ["capital; capital city"] },
    { prompt: "environment", direction: "en-de", solutions: ["Umgebung"] },
    { prompt: "Süden", direction: "de-en", solutions: ["south"] },
    { prompt: "east", direction: "en-de", solutions: ["Osten; Ost-"] },

    // --- Numbers higher than 1,000 ---
    { prompt: "eine halbe Million", direction: "de-en", solutions: ["half a million"] },
    { prompt: "one hundred thousand", direction: "en-de", solutions: ["einhunderttausend; 100000; 100.000"] },
    { prompt: "eine Million", direction: "de-en", solutions: ["a million; one million"] }
  ]
};

/* ==================================================================
   Englisch 7 - Unit 1 - Test 2
   Topic 2 + Possessive pronouns + Text + Jobs + Theatre
   + More about + Film
   ================================================================== */
const e7u1t2 = {
  id: "e7-u1-test2",
  title: "Vokabeltest 2 - Free time, Globe Theatre & more",
  unit: "Englisch 7 / Unit 1",
  classLevel: "7",
  direction: "mixed",
  items: [
    // --- Topic 2: Free time ---
    { prompt: "dauern; brauchen", direction: "de-en", solutions: ["to take; take"], hint: "It ... two hours." },
    { prompt: "to catch (bus/train)", direction: "en-de", solutions: ["nehmen; bekommen"] },
    { prompt: "vormittags", direction: "de-en", solutions: ["a.m.; am"], hint: "Uhrzeit" },
    { prompt: "p.m.", direction: "en-de", solutions: ["nachmittags; abends"] },
    { prompt: "Kulissen; Bühnenbild", direction: "de-en", solutions: ["scenery"] },
    { prompt: "to design", direction: "en-de", solutions: ["entwerfen; gestalten"] },
    { prompt: "gelegentlich", direction: "de-en", solutions: ["occasionally"] },
    { prompt: "to order", direction: "en-de", solutions: ["bestellen"] },
    { prompt: "gesund", direction: "de-en", solutions: ["healthy"] },
    { prompt: "I'm afraid", direction: "en-de", solutions: ["leider"] },

    // --- Possessive pronouns ---
    { prompt: "meine", direction: "de-en", solutions: ["mine"] },
    { prompt: "yours", direction: "en-de", solutions: ["deine; eure; Ihre"] },
    { prompt: "hers", direction: "en-de", solutions: ["ihre; ihrs"], hint: "von ihr" },
    { prompt: "unsere", direction: "de-en", solutions: ["ours"] },
    { prompt: "theirs", direction: "en-de", solutions: ["ihre; ihrs"], hint: "von ihnen" },

    // --- Text: The Globe Theatre ---
    { prompt: "besitzen", direction: "de-en", solutions: ["to own; own"] },
    { prompt: "landlord", direction: "en-de", solutions: ["Grundstückseigentümer; Vermieter"] },
    { prompt: "Miete", direction: "de-en", solutions: ["rent"] },
    { prompt: "builder", direction: "en-de", solutions: ["Bauarbeiter; Bauarbeiterin"] },
    { prompt: "tragen; befördern", direction: "de-en", solutions: ["to carry; carry"] },
    { prompt: "hurt", direction: "en-de", solutions: ["verletzt"] },
    { prompt: "Feuer", direction: "de-en", solutions: ["fire"] },

    // --- Jobs & theatre ---
    { prompt: "actor", direction: "en-de", solutions: ["Schauspieler; Schauspielerin; Darsteller; Darstellerin"] },
    { prompt: "Hausmeister", direction: "de-en", solutions: ["caretaker"] },
    { prompt: "engineer", direction: "en-de", solutions: ["Ingenieur; Ingenieurin; Techniker; Technikerin"] },
    { prompt: "Bauer; Landwirt", direction: "de-en", solutions: ["farmer"] },
    { prompt: "stage", direction: "en-de", solutions: ["Bühne"] },

    // --- More about ---
    { prompt: "Kultur", direction: "de-en", solutions: ["culture"] },
    { prompt: "important", direction: "en-de", solutions: ["wichtig"] },
    { prompt: "beliebt", direction: "de-en", solutions: ["popular"] },
    { prompt: "advert", direction: "en-de", solutions: ["Werbung; Anzeige"] },
    { prompt: "Sammlung", direction: "de-en", solutions: ["collection"] },
    { prompt: "artist", direction: "en-de", solutions: ["Künstler; Künstlerin"] },

    // --- Film: Surfing ---
    { prompt: "Welle", direction: "de-en", solutions: ["wave"] },
    { prompt: "brilliant", direction: "en-de", solutions: ["großartig; hervorragend; toll"] },
    { prompt: "recht haben", direction: "de-en", solutions: ["to be right; be right"] }
  ]
};

/* ==================================================================
   Englisch 9R - Unit 1 - Test 1
   Zoom in (A world language) + Intro (Australia) + Topic 1 (Uluru)
   + adjectives for talking about experiences
   ================================================================== */
const e9ru1t1 = {
  id: "e9r-u1-test1",
  title: "Vokabeltest 1 - A world language & Around Australia",
  unit: "Englisch 9R / Unit 1",
  classLevel: "9R",
  direction: "mixed",
  items: [
    // --- Zoom in: A world language ---
    { prompt: "Amtssprache", direction: "de-en", solutions: ["official language"] },
    { prompt: "majority", direction: "en-de", solutions: ["Mehrheit; Mehrzahl"] },
    { prompt: "Wettbewerb", direction: "de-en", solutions: ["competition"] },
    { prompt: "to communicate", direction: "en-de", solutions: ["kommunizieren; sich verständigen"] },
    { prompt: "englischsprachig", direction: "de-en", solutions: ["English-speaking"] },
    { prompt: "business", direction: "en-de", solutions: ["Geschäftswelt; Geschäft"] },
    { prompt: "Aufgabe; Auftrag", direction: "de-en", solutions: ["task"] },
    { prompt: "half", direction: "en-de", solutions: ["Hälfte; die Hälfte"] },

    // --- Intro: Around Australia ---
    { prompt: "beginnen; anfangen", direction: "de-en", solutions: ["to begin; begin"] },
    { prompt: "creature", direction: "en-de", solutions: ["Lebewesen; Kreatur; Geschöpf"] },
    { prompt: "brechen; zerbrechen", direction: "de-en", solutions: ["to break; break"], hint: "Verb" },
    { prompt: "settler", direction: "en-de", solutions: ["Siedler; Siedlerin"] },
    { prompt: "töten", direction: "de-en", solutions: ["to kill; kill"] },
    { prompt: "to struggle", direction: "en-de", solutions: ["kämpfen; ringen; sich anstrengen; Mühe haben"] },
    { prompt: "Recht", direction: "de-en", solutions: ["right"] },
    { prompt: "flat", direction: "en-de", solutions: ["flach; eben; platt"] },
    { prompt: "das Outback", direction: "de-en", solutions: ["the outback; outback"] },
    { prompt: "Aboriginal people", direction: "en-de", solutions: ["die Aborigines; Aborigines"] },

    // --- Topic 1: Uluru ---
    { prompt: "Stamm; Volksstamm", direction: "de-en", solutions: ["tribe"] },
    { prompt: "lifestyle", direction: "en-de", solutions: ["Lebensstil; Lebensart; Lebensweise"] },
    { prompt: "enttäuscht", direction: "de-en", solutions: ["disappointed"] },
    { prompt: "helicopter", direction: "en-de", solutions: ["Helikopter; Hubschrauber"] },
    { prompt: "bunt", direction: "de-en", solutions: ["colourful; colorful"] },
    { prompt: "painting", direction: "en-de", solutions: ["Gemälde"] },
    { prompt: "riesig", direction: "de-en", solutions: ["giant"] },
    { prompt: "delicious", direction: "en-de", solutions: ["lecker; köstlich"] },
    { prompt: "erfahren; herausfinden", direction: "de-en", solutions: ["to learn; learn"] },

    // --- Adjectives for talking about experiences ---
    { prompt: "excited", direction: "en-de", solutions: ["aufgeregt; begeistert"] },
    { prompt: "spannend; aufregend", direction: "de-en", solutions: ["exciting"] },
    { prompt: "worried", direction: "en-de", solutions: ["beunruhigt; besorgt"] },
    { prompt: "selbstsicher; selbstbewusst", direction: "de-en", solutions: ["confident"] }
  ]
};

/* ==================================================================
   Englisch 9R - Unit 1 - Test 2
   Topic 2 (At the doctor's) + Text (Great Barrier Reef)
   + Film + Speaking skills
   ================================================================== */
const e9ru1t2 = {
  id: "e9r-u1-test2",
  title: "Vokabeltest 2 - At the doctor's & The Great Barrier Reef",
  unit: "Englisch 9R / Unit 1",
  classLevel: "9R",
  direction: "mixed",
  items: [
    // --- Topic 2: At the doctor's ---
    { prompt: "Arzthelfer; Arzthelferin", direction: "de-en", solutions: ["receptionist"] },
    { prompt: "appointment", direction: "en-de", solutions: ["Termin"] },
    { prompt: "Patient; Patientin", direction: "de-en", solutions: ["patient"] },
    { prompt: "to register", direction: "en-de", solutions: ["sich registrieren lassen; sich eintragen; sich anmelden"] },
    { prompt: "Krankenakte", direction: "de-en", solutions: ["medical record"] },
    { prompt: "ill", direction: "en-de", solutions: ["krank; schlecht"] },
    { prompt: "Fieber", direction: "de-en", solutions: ["high temperature"] },
    { prompt: "flu", direction: "en-de", solutions: ["Grippe"] },
    { prompt: "Rezept", direction: "de-en", solutions: ["prescription"], hint: "beim Arzt" },
    { prompt: "medicine", direction: "en-de", solutions: ["Medikamente; Medizin"] },
    { prompt: "Tablette", direction: "de-en", solutions: ["tablet"] },
    { prompt: "pharmacy", direction: "en-de", solutions: ["Apotheke"] },
    { prompt: "Gute Besserung!", direction: "de-en", solutions: ["Get well soon"] },
    { prompt: "What's the matter?", direction: "en-de", solutions: ["Was ist los; Was hast du"] },
    { prompt: "Kopfschmerzen", direction: "de-en", solutions: ["headache"] },
    { prompt: "nurse", direction: "en-de", solutions: ["Krankenpfleger; Krankenschwester"] },

    // --- Text: The Great Barrier Reef ---
    { prompt: "Gefahr", direction: "de-en", solutions: ["danger"] },
    { prompt: "reef", direction: "en-de", solutions: ["Riff"] },
    { prompt: "Koralle", direction: "de-en", solutions: ["coral"] },
    { prompt: "climate change", direction: "en-de", solutions: ["Klimawandel"] },
    { prompt: "Temperatur", direction: "de-en", solutions: ["temperature"] },
    { prompt: "area", direction: "en-de", solutions: ["Fläche; Bereich"] },
    { prompt: "sich erholen", direction: "de-en", solutions: ["to recover; recover"] },
    { prompt: "government", direction: "en-de", solutions: ["Regierung"] },
    { prompt: "Gesetz", direction: "de-en", solutions: ["law"] },
    { prompt: "however", direction: "en-de", solutions: ["jedoch"] },
    { prompt: "völlig", direction: "de-en", solutions: ["completely"] },
    { prompt: "energy", direction: "en-de", solutions: ["Energie; Kraft"] },
    { prompt: "protestieren", direction: "de-en", solutions: ["to protest; protest"] },
    { prompt: "destruction", direction: "en-de", solutions: ["Zerstörung"] },

    // --- Film & Speaking skills ---
    { prompt: "Delfin", direction: "de-en", solutions: ["dolphin"] },
    { prompt: "wide", direction: "en-de", solutions: ["breit; groß"] },
    { prompt: "Ecke", direction: "de-en", solutions: ["corner"] },
    { prompt: "at the bottom", direction: "en-de", solutions: ["unten"] }
  ]
};

/* ==================================================================
   Englisch 7 - Unit 2 - Test 1
   Intro (Wales & Scotland) + Topic 1 (Adventure centre)
   + adjectives + irregular verbs
   ================================================================== */
const e7u2t1 = {
  id: "e7-u2-test1",
  title: "Vokabeltest 1 - Fun in Wales and Scotland",
  unit: "Englisch 7 / Unit 2",
  classLevel: "7",
  direction: "mixed",
  items: [
    // --- Intro: Wales & Scotland ---
    { prompt: "Seilrutsche", direction: "de-en", solutions: ["zip line"] },
    { prompt: "mile", direction: "en-de", solutions: ["Meile"] },
    { prompt: "bis", direction: "de-en", solutions: ["until"] },
    { prompt: "castle", direction: "en-de", solutions: ["Burg; Schloss"] },
    { prompt: "gegen", direction: "de-en", solutions: ["against"] },
    { prompt: "competition", direction: "en-de", solutions: ["Wettkampf; Wettbewerb"] },
    { prompt: "Hammerwerfen", direction: "de-en", solutions: ["hammer throwing"] },
    { prompt: "tradition", direction: "en-de", solutions: ["Tradition; Brauch"] },
    { prompt: "Dudelsack", direction: "de-en", solutions: ["bagpipes"] },
    { prompt: "kilt", direction: "en-de", solutions: ["Kilt; Schottenrock"] },
    { prompt: "Geschichte", direction: "de-en", solutions: ["history"], hint: "Schulfach" },
    { prompt: "Scottish", direction: "en-de", solutions: ["schottisch; aus Schottland"] },

    // --- Topic 1: Adventure centre ---
    { prompt: "Abenteuer; Erlebnis", direction: "de-en", solutions: ["adventure"] },
    { prompt: "already", direction: "en-de", solutions: ["schon; bereits"] },
    { prompt: "packen; einpacken", direction: "de-en", solutions: ["to pack; pack"] },
    { prompt: "to need to", direction: "en-de", solutions: ["müssen"] },
    { prompt: "stark", direction: "de-en", solutions: ["strong"] },
    { prompt: "dangerous", direction: "en-de", solutions: ["gefährlich"] },
    { prompt: "ungefährlich; sicher", direction: "de-en", solutions: ["safe"] },
    { prompt: "careful", direction: "en-de", solutions: ["vorsichtig; sorgfältig"] },
    { prompt: "(sich) entscheiden", direction: "de-en", solutions: ["to decide; decide"] },
    { prompt: "to book", direction: "en-de", solutions: ["buchen; reservieren"] },
    { prompt: "schwierig; schwer", direction: "de-en", solutions: ["difficult"] },
    { prompt: "not ... yet", direction: "en-de", solutions: ["noch nicht"] },

    // --- Adjectives for free-time activities ---
    { prompt: "müde", direction: "de-en", solutions: ["tired"] },
    { prompt: "easy", direction: "en-de", solutions: ["einfach; leicht"] },
    { prompt: "langweilig", direction: "de-en", solutions: ["boring"] },
    { prompt: "exciting", direction: "en-de", solutions: ["spannend; aufregend"] },

    // --- Irregular verbs (past participle) ---
    { prompt: "to see, saw, ...", direction: "en-de", solutions: ["seen"], hint: "3. Form" },
    { prompt: "to go, went, ...", direction: "en-de", solutions: ["gone"], hint: "3. Form" },
    { prompt: "to take, took, ...", direction: "en-de", solutions: ["taken"], hint: "3. Form" },
    { prompt: "to think, thought, ...", direction: "en-de", solutions: ["thought"], hint: "3. Form" }
  ]
};

/* ==================================================================
   Englisch 7 - Unit 2 - Test 2
   Topic 2 (Highland Games) + adverbs of time + Text (Robert the Bruce)
   + Film + More about + Presentation skills
   ================================================================== */
const e7u2t2 = {
  id: "e7-u2-test2",
  title: "Vokabeltest 2 - Highland Games & Robert the Bruce",
  unit: "Englisch 7 / Unit 2",
  classLevel: "7",
  direction: "mixed",
  items: [
    // --- Topic 2: Highland Games ---
    { prompt: "schon einmal; jemals", direction: "de-en", solutions: ["ever"] },
    { prompt: "fun", direction: "en-de", solutions: ["lustig; spaßig; amüsant"] },
    { prompt: "übrig", direction: "de-en", solutions: ["left"] },
    { prompt: "just", direction: "en-de", solutions: ["gerade; soeben; einfach; nur"] },
    { prompt: "herausfinden", direction: "de-en", solutions: ["to find out; find out"] },
    { prompt: "another", direction: "en-de", solutions: ["ein anderer; andere; noch ein"] },
    { prompt: "Zeile; Linie", direction: "de-en", solutions: ["line"] },
    { prompt: "bought", direction: "en-de", solutions: ["gekauft"], hint: "3. Form von to buy" },

    // --- Adverbs of time ---
    { prompt: "nie; niemals", direction: "de-en", solutions: ["never"] },
    { prompt: "still", direction: "en-de", solutions: ["noch; immer noch"] },
    { prompt: "gelegentlich", direction: "de-en", solutions: ["occasionally"] },

    // --- Text: Robert the Bruce ---
    { prompt: "Jahrhundert", direction: "de-en", solutions: ["century"] },
    { prompt: "battle", direction: "en-de", solutions: ["Schlacht; Kampf"] },
    { prompt: "zwischen", direction: "de-en", solutions: ["between"] },
    { prompt: "free", direction: "en-de", solutions: ["frei; kostenlos"] },
    { prompt: "Armee; Heer", direction: "de-en", solutions: ["army"] },
    { prompt: "spider", direction: "en-de", solutions: ["Spinne"] },
    { prompt: "Netz", direction: "de-en", solutions: ["web"] },
    { prompt: "to give up", direction: "en-de", solutions: ["aufgeben"] },
    { prompt: "tapfer; mutig", direction: "de-en", solutions: ["brave"] },
    { prompt: "lost", direction: "en-de", solutions: ["verloren"], hint: "3. Form von to lose" },
    { prompt: "Frieden schaffen", direction: "de-en", solutions: ["to make peace; make peace"] },

    // --- Film ---
    { prompt: "Grund", direction: "de-en", solutions: ["reason"] },
    { prompt: "briefcase", direction: "en-de", solutions: ["Aktenkoffer; Aktentasche"] },
    { prompt: "Jahreszeit", direction: "de-en", solutions: ["time of year"] },

    // --- More about: Heavy events ---
    { prompt: "to lift", direction: "en-de", solutions: ["heben; hochheben; anheben"] },
    { prompt: "schwer", direction: "de-en", solutions: ["heavy"], hint: "Gewicht" },
    { prompt: "rarely", direction: "en-de", solutions: ["selten"] },
    { prompt: "Kette", direction: "de-en", solutions: ["chain"] },
    { prompt: "stone", direction: "en-de", solutions: ["Stein"] },
    { prompt: "zum Beispiel", direction: "de-en", solutions: ["for example"] },
    { prompt: "possible", direction: "en-de", solutions: ["möglich"] },
    { prompt: "Art und Weise", direction: "de-en", solutions: ["way"] },

    // --- Presentation skills ---
    { prompt: "presentation", direction: "en-de", solutions: ["Präsentation; Referat; Vortrag"] },
    { prompt: "Partnerstadt", direction: "de-en", solutions: ["twin town"] },
    { prompt: "most", direction: "en-de", solutions: ["die meisten; die Mehrheit; am meisten"] }
  ]
};

/* ==================================================================
   Englisch 7 - Unit 3 - Test 1
   Intro (Ireland) + Topic 1 (Public transport) + travel
   ================================================================== */
const e7u3t1 = {
  id: "e7-u3-test1",
  title: "Vokabeltest 1 - Welcome to Ireland & public transport",
  unit: "Englisch 7 / Unit 3",
  classLevel: "7",
  direction: "mixed",
  items: [
    // --- Intro: Ireland ---
    { prompt: "irisch; aus Irland", direction: "de-en", solutions: ["Irish"] },
    { prompt: "orchestra", direction: "en-de", solutions: ["Orchester"] },
    { prompt: "(die) Hälfte", direction: "de-en", solutions: ["half"] },
    { prompt: "to celebrate", direction: "en-de", solutions: ["feiern"] },
    { prompt: "Kleeblatt", direction: "de-en", solutions: ["shamrock"] },
    { prompt: "the Irish", direction: "en-de", solutions: ["die Iren"] },
    { prompt: "gälisch", direction: "de-en", solutions: ["Gaelic"] },

    // --- Topic 1: Public transport ---
    { prompt: "öffentliche Verkehrsmittel", direction: "de-en", solutions: ["public transport"] },
    { prompt: "timetable", direction: "en-de", solutions: ["Fahrplan"] },
    { prompt: "umsteigen", direction: "de-en", solutions: ["to change; change"] },
    { prompt: "journey", direction: "en-de", solutions: ["Fahrt; Reise"] },
    { prompt: "einfache Fahrkarte", direction: "de-en", solutions: ["single ticket"] },
    { prompt: "return ticket", direction: "en-de", solutions: ["Hin- und Rückfahrkarte"] },
    { prompt: "kosten", direction: "de-en", solutions: ["to cost; cost"] },
    { prompt: "each", direction: "en-de", solutions: ["pro Stück; jeweils; jede"] },
    { prompt: "Schlüssel", direction: "de-en", solutions: ["key"] },
    { prompt: "notice", direction: "en-de", solutions: ["Aushang; Plakat"] },
    { prompt: "anrufen; rufen; nennen", direction: "de-en", solutions: ["to call; call"] },
    { prompt: "workshop", direction: "en-de", solutions: ["Workshop; Seminar"] },
    { prompt: "Ganztages-", direction: "de-en", solutions: ["all-day"] },

    // --- Travel ---
    { prompt: "to arrive", direction: "en-de", solutions: ["ankommen"] },
    { prompt: "abfahren; weggehen", direction: "de-en", solutions: ["to leave; leave"] },
    { prompt: "stop", direction: "en-de", solutions: ["Haltestelle; Halt"] },
    { prompt: "aussteigen", direction: "de-en", solutions: ["to get off; get off"] },
    { prompt: "across", direction: "en-de", solutions: ["über"] },
    { prompt: "Straßenbahn", direction: "de-en", solutions: ["tram"] },
    { prompt: "map", direction: "en-de", solutions: ["Karte; Plan"] },
    { prompt: "links; auf der linken Seite", direction: "de-en", solutions: ["on the left"] },
    { prompt: "past", direction: "en-de", solutions: ["vorbei; vorbei an"] },
    { prompt: "fahren; reisen", direction: "de-en", solutions: ["to travel; travel"] },
    { prompt: "near", direction: "en-de", solutions: ["in der Nähe von; nah"] }
  ]
};

/* ==================================================================
   Englisch 7 - Unit 3 - Test 2
   Topic 2 (Feelings) + adjectives for feelings + Text (St Patrick's Day)
   + prepositions of time + More about + Speaking skills
   ================================================================== */
const e7u3t2 = {
  id: "e7-u3-test2",
  title: "Vokabeltest 2 - Feelings, St Patrick's Day & the Troubles",
  unit: "Englisch 7 / Unit 3",
  classLevel: "7",
  direction: "mixed",
  items: [
    // --- Topic 2: Feelings ---
    { prompt: "die Nase voll haben (von)", direction: "de-en", solutions: ["to be fed up; be fed up; to be fed up with"] },
    { prompt: "advice", direction: "en-de", solutions: ["Rat; Ratschlag"] },
    { prompt: "nicht mehr", direction: "de-en", solutions: ["not any more"] },
    { prompt: "should", direction: "en-de", solutions: ["sollte"] },
    { prompt: "Frühstückspension", direction: "de-en", solutions: ["bed & breakfast; bed and breakfast; B&B"] },
    { prompt: "accent", direction: "en-de", solutions: ["Akzent"] },
    { prompt: "jemand", direction: "de-en", solutions: ["someone; somebody"] },
    { prompt: "guest", direction: "en-de", solutions: ["Gast"] },
    { prompt: "versuchen; probieren", direction: "de-en", solutions: ["to try; try"] },
    { prompt: "chance", direction: "en-de", solutions: ["Möglichkeit; Chance; Gelegenheit"] },
    { prompt: "Liste", direction: "de-en", solutions: ["list"] },
    { prompt: "positiv", direction: "de-en", solutions: ["positive"] },

    // --- Adjectives for feelings ---
    { prompt: "unhappy", direction: "en-de", solutions: ["unglücklich; traurig"] },
    { prompt: "wütend; böse", direction: "de-en", solutions: ["angry"] },
    { prompt: "worried", direction: "en-de", solutions: ["beunruhigt; besorgt"] },
    { prompt: "aufgeregt; begeistert", direction: "de-en", solutions: ["excited"] },
    { prompt: "awful", direction: "en-de", solutions: ["schrecklich; furchtbar"] },
    { prompt: "hübsch", direction: "de-en", solutions: ["pretty"] },
    { prompt: "amazing", direction: "en-de", solutions: ["unglaublich; erstaunlich; toll"] },

    // --- Text: St Patrick's Day ---
    { prompt: "different", direction: "en-de", solutions: ["andere; verschieden"] },
    { prompt: "Gold", direction: "de-en", solutions: ["gold"] },
    { prompt: "finally", direction: "en-de", solutions: ["schließlich; zum Schluss"] },
    { prompt: "bedeuten; meinen", direction: "de-en", solutions: ["to mean; mean"] },
    { prompt: "whole", direction: "en-de", solutions: ["ganz"] },
    { prompt: "Regenbogen", direction: "de-en", solutions: ["rainbow"] },
    { prompt: "each other", direction: "en-de", solutions: ["einander; sich; gegenseitig"] },
    { prompt: "Topf", direction: "de-en", solutions: ["pot"] },
    { prompt: "enough", direction: "en-de", solutions: ["genug; genügend"] },
    { prompt: "Überraschung", direction: "de-en", solutions: ["surprise"] },
    { prompt: "poem", direction: "en-de", solutions: ["Gedicht"] },

    // --- Prepositions of time ---
    { prompt: "während", direction: "de-en", solutions: ["during"] },
    { prompt: "before", direction: "en-de", solutions: ["vor; bevor"] },

    // --- More about: The Troubles ---
    { prompt: "Insel", direction: "de-en", solutions: ["island"] },
    { prompt: "trouble", direction: "en-de", solutions: ["Problem; Schwierigkeiten; Ärger"] },
    { prompt: "Religion", direction: "de-en", solutions: ["religion"] },
    { prompt: "to die", direction: "en-de", solutions: ["sterben"] },
    { prompt: "seit; seitdem", direction: "de-en", solutions: ["since"] },

    // --- Speaking skills ---
    { prompt: "background", direction: "en-de", solutions: ["Hintergrund"] },
    { prompt: "Vordergrund", direction: "de-en", solutions: ["foreground"] },
    { prompt: "campsite", direction: "en-de", solutions: ["Campingplatz; Zeltplatz"] }
  ]
};

/* ==================================================================
   Englisch 7 - Unit 4 - Test 1
   Intro (USA) + Topic 1 (Native Americans & media) + comparing things
   ================================================================== */
const e7u4t1 = {
  id: "e7-u4-test1",
  title: "Vokabeltest 1 - USA, Native Americans & media",
  unit: "Englisch 7 / Unit 4",
  classLevel: "7",
  direction: "mixed",
  items: [
    // --- Intro: USA ---
    { prompt: "Tal", direction: "de-en", solutions: ["valley"] },
    { prompt: "state", direction: "en-de", solutions: ["Bundesstaat; Staat"] },
    { prompt: "riesig", direction: "de-en", solutions: ["huge"] },
    { prompt: "national park", direction: "en-de", solutions: ["Nationalpark"] },
    { prompt: "Pflanze", direction: "de-en", solutions: ["plant"] },
    { prompt: "space", direction: "en-de", solutions: ["Raumfahrt; Weltraum"] },
    { prompt: "Welt; Erde", direction: "de-en", solutions: ["earth"] },
    { prompt: "native", direction: "en-de", solutions: ["eingeboren; einheimisch"] },
    { prompt: "siedeln; sich niederlassen", direction: "de-en", solutions: ["to settle; settle"] },
    { prompt: "European", direction: "en-de", solutions: ["Europäer; Europäerin; europäisch"] },
    { prompt: "Tour; Trip", direction: "de-en", solutions: ["trip"] },

    // --- Topic 1: Native Americans & media ---
    { prompt: "vacation", direction: "en-de", solutions: ["Urlaub; Ferien"], hint: "AE" },
    { prompt: "Stamm; Volksstamm", direction: "de-en", solutions: ["tribe"] },
    { prompt: "reservation", direction: "en-de", solutions: ["Reservat; Reservierung"] },
    { prompt: "schön; wunderschön", direction: "de-en", solutions: ["beautiful"] },
    { prompt: "to share", direction: "en-de", solutions: ["teilen"] },
    { prompt: "soziale Medien", direction: "de-en", solutions: ["social media"] },
    { prompt: "to post", direction: "en-de", solutions: ["posten; online stellen"] },
    { prompt: "sich erinnern (an)", direction: "de-en", solutions: ["to remember; remember"] },
    { prompt: "themselves", direction: "en-de", solutions: ["sich; selbst; sie selbst"] },
    { prompt: "Zeitung", direction: "de-en", solutions: ["newspaper"] },
    { prompt: "useful", direction: "en-de", solutions: ["nützlich; hilfreich; brauchbar"] },
    { prompt: "weniger", direction: "de-en", solutions: ["less"] },
    { prompt: "latest", direction: "en-de", solutions: ["neueste; aktuell"] },
    { prompt: "interessiert sein an", direction: "de-en", solutions: ["to be interested in; be interested in"] },

    // --- Comparing things ---
    { prompt: "good, better, ...", direction: "en-de", solutions: ["the best; best"], hint: "Superlativ" },
    { prompt: "bad, worse, ...", direction: "en-de", solutions: ["the worst; worst"], hint: "Superlativ" },
    { prompt: "teuer", direction: "de-en", solutions: ["expensive"] },
    { prompt: "cheap", direction: "en-de", solutions: ["günstig; billig"] },

    // --- British / American English ---
    { prompt: "movie", direction: "en-de", solutions: ["Film"], hint: "AE" },
    { prompt: "Lieblings- (AE)", direction: "de-en", solutions: ["favorite"] }
  ]
};

/* ==================================================================
   Englisch 7 - Unit 4 - Test 2
   Topic 2 (Rafting) + ordinal numbers + much/many + Text (US sports)
   + Film + More about (civil rights) + celebrations + Writing skills
   ================================================================== */
const e7u4t2 = {
  id: "e7-u4-test2",
  title: "Vokabeltest 2 - Rafting, US sports & civil rights",
  unit: "Englisch 7 / Unit 4",
  classLevel: "7",
  direction: "mixed",
  items: [
    // --- Topic 2: Rafting ---
    { prompt: "Leiter; Leiterin", direction: "de-en", solutions: ["leader"] },
    { prompt: "to paddle", direction: "en-de", solutions: ["paddeln"] },
    { prompt: "Helikopter; Hubschrauber", direction: "de-en", solutions: ["helicopter"] },
    { prompt: "wave", direction: "en-de", solutions: ["Welle"] },
    { prompt: "Herz", direction: "de-en", solutions: ["heart"] },
    { prompt: "rapid", direction: "en-de", solutions: ["Stromschnelle"] },
    { prompt: "tief", direction: "de-en", solutions: ["deep"] },
    { prompt: "current", direction: "en-de", solutions: ["Strömung"] },
    { prompt: "umkippen; sich umdrehen", direction: "de-en", solutions: ["to turn over; turn over"] },
    { prompt: "to wake up", direction: "en-de", solutions: ["aufwachen; erwachen"] },
    { prompt: "Fels; Stein", direction: "de-en", solutions: ["rock"] },
    { prompt: "president", direction: "en-de", solutions: ["Präsident; Präsidentin"] },

    // --- Ordinal numbers ---
    { prompt: "fünfzigste (50th)", direction: "de-en", solutions: ["fiftieth"] },
    { prompt: "hundredth", direction: "en-de", solutions: ["hundertste"] },
    { prompt: "vierzigste (40th)", direction: "de-en", solutions: ["fortieth"] },

    // --- much / many ---
    { prompt: "viel Zeit", direction: "de-en", solutions: ["much time"] },
    { prompt: "many people", direction: "en-de", solutions: ["viele Leute; viele Menschen"] },

    // --- Text: US sports ---
    { prompt: "oval; eiförmig", direction: "de-en", solutions: ["oval"] },
    { prompt: "playing field", direction: "en-de", solutions: ["Spielfeld"] },
    { prompt: "Schläger", direction: "de-en", solutions: ["bat"] },
    { prompt: "to bounce", direction: "en-de", solutions: ["prellen; hüpfen"] },
    { prompt: "Punkt", direction: "de-en", solutions: ["point"] },
    { prompt: "to motivate", direction: "en-de", solutions: ["anspornen; motivieren"] },
    { prompt: "Prozent", direction: "de-en", solutions: ["percent"] },
    { prompt: "to hit", direction: "en-de", solutions: ["treffen; schlagen"] },

    // --- Film ---
    { prompt: "Trainer; Trainerin", direction: "de-en", solutions: ["coach"] },
    { prompt: "to join", direction: "en-de", solutions: ["mitmachen bei"] },
    { prompt: "überraschen", direction: "de-en", solutions: ["to surprise; surprise"] },

    // --- More about: Civil rights ---
    { prompt: "civil rights", direction: "en-de", solutions: ["Bürgerrechte; Grundrechte"] },
    { prompt: "Recht", direction: "de-en", solutions: ["right"] },
    { prompt: "peaceful", direction: "en-de", solutions: ["friedlich"] },
    { prompt: "protestieren", direction: "de-en", solutions: ["to protest; protest"] },
    { prompt: "independence", direction: "en-de", solutions: ["Unabhängigkeit"] },
    { prompt: "Flagge; Fahne", direction: "de-en", solutions: ["flag"] },
    { prompt: "to discover", direction: "en-de", solutions: ["entdecken"] },
    { prompt: "Erntedankfest", direction: "de-en", solutions: ["Thanksgiving"] },
    { prompt: "to begin, began, ...", direction: "en-de", solutions: ["begun"], hint: "3. Form" },

    // --- Celebrations & Writing skills ---
    { prompt: "Umzug; Festzug", direction: "de-en", solutions: ["procession"] },
    { prompt: "costume", direction: "en-de", solutions: ["Kostüm"] },
    { prompt: "einladen", direction: "de-en", solutions: ["to invite; invite"] },
    { prompt: "subject", direction: "en-de", solutions: ["Betreff"] },
    { prompt: "Profil; Steckbrief", direction: "de-en", solutions: ["profile"] }
  ]
};

const TESTS = {
  [e7u1t1.id]: e7u1t1,
  [e7u1t2.id]: e7u1t2,
  [e7u2t1.id]: e7u2t1,
  [e7u2t2.id]: e7u2t2,
  [e7u3t1.id]: e7u3t1,
  [e7u3t2.id]: e7u3t2,
  [e7u4t1.id]: e7u4t1,
  [e7u4t2.id]: e7u4t2,
  [e9ru1t1.id]: e9ru1t1,
  [e9ru1t2.id]: e9ru1t2
};

module.exports = { TESTS };
