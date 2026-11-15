/* Englisch 7 · Unit 4 · Listening practice 1: Hörtext „Welcome to Chicago“ (M7-Fassung).
   Dieselbe Situation wie die R7-Fassung, aber länger: Gate-Wechsel (B fifteen → B fifty) mit neuer Abflugzeit, Verspätung nach Seattle
   mit Grund, Ausruf einer Passagierin, Zubringerbusse, Sicherheitshinweis. Eine Sprecherin (Frau). Flugnummern, Gates, Zeiten und
   Greta Kranz sind erfunden; Chicago, Denver, Seattle und Frankfurt sind echte Städte. Zahlen und Uhrzeiten ausgeschrieben. */
D7Texte.add({
  id: "u4-lp1-airport-m", titel: "Welcome to Chicago", textsorte: "Listening: announcements at an airport", zug: "M7", sprache: "en",
  modul: "Unit 4 – USA – here we come!", unterthema: "Listening practice 1: Durchsagen verstehen (Zahlen, Gate-Wechsel, Gründe)", woerter: 183,
  schwierigkeit: "mittel", lehrplan: "E7 1.2 Hörverstehen (Durchsage, Einzelheiten, Gründe und Zahlen entnehmen), E7 5 (USA: Reisen)", thema: "Durchsagen nach der Landung am Flughafen Chicago",
  quelle: "Eigenständig für GRUMI erstellt.", lizenz: "eigener Text", erstellung: "eigener Text für GRUMI (erfundene Flüge, Gates und Personen)",
  zeilennummern: false, probe: false,
  stimmen: { Announcer: "en-GB-SoniaNeural" },
  aufnahme: true,
  sprecher: [
    { rolle: "Announcer", text: "Good afternoon, ladies and gentlemen, and welcome to Chicago. The local time is two o'clock in the afternoon." },
    { rolle: "Announcer", text: "Passengers arriving from Frankfurt: your bags are coming to belt number seven. Many bags look the same, so please check the name on your bag before you leave the belt." },
    { rolle: "Announcer", text: "Passengers on flight four one six to Denver, please note: your flight will not leave from gate B fifteen. Please go to gate B fifty. The plane will now leave at ten past four." },
    { rolle: "Announcer", text: "Passengers on the flight to Seattle: because of bad weather in Seattle, your flight is about forty minutes late. It will now leave at five o'clock. We are very sorry for the delay." },
    { rolle: "Announcer", text: "This is a call for Greta Kranz, a passenger from Frankfurt. Please come to the information desk next to belt number two. Your uncle is waiting for you there." },
    { rolle: "Announcer", text: "Shuttle buses to the city centre leave every twenty minutes from exit three. Taxis wait outside exit four." },
    { rolle: "Announcer", text: "For your safety, please do not leave your bags alone at any time. Thank you, and enjoy your stay in Chicago!" }
  ]
});
