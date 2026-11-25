/* Lernkarten zum Modul „Sensoren – elektronische Umweltfühler“ (NT 9, Kommunikationstechnik 2, Modul-id kt-sensoren). Trainer: 8M/NT/karten.js.
   Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("kt-sensoren", [
  { id: "k1", art: "begriff", v: "Was ist ein Sensor?", h: "Ein Messfühler: Er nimmt ein Signal aus der Umgebung auf (z. B. Wärme, Licht, ein Magnetfeld) und wandelt es in ein elektrisches Signal um." },
  { id: "k2", art: "vergleich", v: "Sinnesorgan und Sensor – was ist der Unterschied?", h: "Sinnesorgane empfinden subjektiv – bei jedem anders. Sensoren messen objektiv, und ihr Signal kann elektronisch ausgewertet werden." },
  { id: "k3", art: "begriff", v: "Was ist ein Heißleiter (NTC)?", h: "Ein Temperatursensor, der umso besser leitet, je wärmer er ist. Wird er erwärmt, sinkt sein Widerstand." },
  { id: "k4", art: "begriff", v: "Was ist ein Kaltleiter (PTC)?", h: "Ein Temperatursensor, der umso besser leitet, je kälter er ist. Wird er erwärmt, steigt sein Widerstand." },
  { id: "k5", art: "versuch", v: "Ein Heißleiter hängt an einem Messgerät für den Widerstand. Du erwärmst ihn mit dem Fön. Was zeigt das Messgerät?", h: "Der Widerstand (in Ohm) wird kleiner. Bei einem Kaltleiter würde er größer." },
  { id: "k6", art: "ursache", v: "Warum schaltet der Bimetall-Schalter im Bügeleisen ab, wenn es heiß wird?", h: "Kupfer dehnt sich beim Erwärmen stärker aus als Eisen. Der Streifen biegt sich und öffnet den Kontakt zum Heizdraht. Kühlt er ab, schließt der Kontakt wieder." },
  { id: "k7", art: "begriff", v: "Was ist ein Thermostat?", h: "Ein Temperatursensor mit Steuerung. Er hält eine eingestellte Temperatur ein, z. B. bei der Heizung." },
  { id: "k8", art: "begriff", v: "Was ist ein LDR, und wie reagiert er auf Licht?", h: "Ein Fotowiderstand (lichtabhängiger Widerstand): Je heller, desto kleiner sein Widerstand. Im Dunkeln ist er groß." },
  { id: "k9", art: "anwendung", v: "Wie verhindert eine Lichtschranke, dass eine Aufzugtür jemanden einklemmt?", h: "Wer in die Tür tritt, unterbricht den Lichtstrahl. Am Lichtsensor wird es dunkel. Die Steuerung schaltet den Schließmotor aus." },
  { id: "k10", art: "ursache", v: "Wie bemerkt ein Rauchmelder Rauch?", h: "Ohne Rauch fällt das Licht der Leuchtdiode nicht auf den Lichtsensor. Rauch streut das Licht auf den Sensor – der Melder schlägt Alarm." },
  { id: "k11", art: "begriff", v: "Wie ist ein Reed-Kontakt gebaut, und wie schaltet er?", h: "Glasröhrchen mit Schutzgas und zwei Kontaktzungen. Magnet in der Nähe: Die Zungen berühren sich, der Kontakt ist geschlossen. Magnet weg: offen. Er schaltet berührungslos." },
  { id: "k12", art: "anwendung", v: "Wie misst ein Fahrradtacho die Geschwindigkeit?", h: "Magnet an der Speiche, Reed-Kontakt an der Gabel. Jede Radumdrehung gibt einen Impuls. Je mehr Impulse pro Minute, desto schneller. Mit dem Radumfang rechnet der Tacho die Geschwindigkeit aus." },
  { id: "k13", art: "anwendung", v: "Nenne fünf Sensoren in einem Smartphone.", h: "Zum Beispiel Kamera, Mikrofon, Lagesensor, Helligkeitssensor, Näherungssensor, Fingerabdrucksensor, GPS." },
  { id: "k14", art: "transfer", v: "Warum gehört ein CO-Melder in einen Raum mit Gasheizung oder Kamin?", h: "Kohlenstoffmonoxid ist hochgiftig und hat keinen Geruch – man bemerkt es nicht. Der Sensor erkennt das Gas und schlägt Alarm." }
]);
