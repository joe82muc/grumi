const topics = {
  "1": [
    ["Regenerative Kunststoffe: Holz und Raps", "14,15"],
    ["Biodiesel", "16,17"],
    ["Nachhaltigkeit regenerierter Rohstoffe", "20,21"],
    ["Entstehung fossiler Rohstoffe", "22,23"],
    ["Aufbereitung von Erdöl", "24,25"],
    ["Eigenschaften und Verwendung der Erdölfraktionen", "26,27"],
    ["Kohlenstoffkreislauf und Treibhauseffekt", "28,29"],
    ["Leben ohne Erdöl", "30,31"],
    ["Biogas eine nachhaltige Energiequelle", "34,35"],
    ["Methan", "36,37"],
    ["Vielfalt der Kunststoffe", "48,49"],
    ["Einteilung der Kunststoffe", "50,51"],
    ["Kunststoffe und ihre Verarbeitung", "52,53"],
    ["Kunststoff-Recycling", "56,57"],
    ["Der Wertstoffkreislauf der PET Flasche", "58,59,60,61"],
    ["So gewinnt man Alkohol", "64,65"],
    ["Eigenschaften und Verwendung von Ethanol", "66,67"],
    ["Wirkung auf den Menschen", "68,69"]
  ],
  "2": [
    ["Lebewesen sind aus Zellen aufgebaut", "78,79,80"],
    ["Der Zellkern als Träger der Erbinformation", "86,87"],
    ["Chromosomen bestimmen das Geschlecht", "88,89"],
    ["Genetisch bedingte Erkrankungen", "90,91"],
    ["Tier- und Pflanzenzucht", "94,95"],
    ["Erbgut und Erscheinungsbild", "96,97"],
    ["Methoden der Genetik: Gentransfer", "102,103"],
    ["Chancen und Risiken der Gentechnik", "104,105,106"],
    ["Fruchtwasseranalyse", "107"],
    ["PID", "108,109"]
  ],
  "3": [
    ["Radioaktivität und ihre Entdeckung", "118,119"],
    ["Hinweis radioaktiver Strahlung", "120,121"],
    ["Altersbestimmung", "126,127"],
    ["Biologische und genetische Folgen von Strahlung", "128,130"],
    ["Anwendung radioaktiver Strahlung", "131"],
    ["Die Entdeckung der Kernspaltung", "134,135"],
    ["Die Kettenreaktion", "136,137"],
    ["Risiken und Folgen der Kernenergie", "138,139,140"],
    ["Vom Reiz zur Reaktion", "152,153"],
    ["Der Aufbau des Nervensystems", "154,155"],
    ["Informationsverarbeitung und Gedächtnis", "156,157"],
    ["Reflexe schützen", "158,159"],
    ["Das vegetative Nervensystem", "160,161"],
    ["Das Nervensystem braucht Schutz", "162,163"],
    ["Mikrofon und Lautsprecher", "166,167"],
    ["Sensoren elektrische Umweltfühler", "168,169,170,171"],
    ["Diode und Leuchtdiode", "172,173"],
    ["Transistoren", "174,175"]
  ]
};

const imageByCategory = {
  "1": "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=70",
  "2": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=70",
  "3": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=70"
};

const specialMenus = {
  "Risiken und Folgen der Kernenergie": {
    subtopics: [
      { title: "Radioaktive Belastung", pages: "138", href: "kernenergie-radioaktive-belastung.html" },
      { title: "Super-GAU in Tschernobyl", pages: "138", href: "kernenergie-tschernobyl.html" },
      { title: "Die Katastrophe von Fukushima", pages: "138", href: "kernenergie-fukushima.html" },
      { title: "Die Atombombe (Extra)", pages: "139", href: "kernenergie-atombombe.html" },
      { title: "Radioaktiver Abfall", pages: "140", href: "kernenergie-radioaktiver-abfall.html" },
      { title: "Zwischenlager, Transport, Endlager", pages: "140", href: "kernenergie-endlager.html" }
    ],
    worksheets: ["AB1", "AB2", "AB3"]
  }
};

function infoText(title, category) {
  if (category === "1") return `Infotext: ${title} erklärt dir wichtige Zusammenhänge rund um Kohlenstoff, Rohstoffe, Energie und nachhaltige Nutzung im Alltag.`;
  if (category === "2") return `Infotext: ${title} zeigt dir Grundlagen zu Zellen, Vererbung und Gesundheit sowie Chancen und Risiken moderner Medizin.`;
  if (title === "Risiken und Folgen der Kernenergie") {
    return "Infotext: Hier lernst du an Tschernobyl und Fukushima, welche Folgen ein Unfall haben kann, und wie man mit radioaktivem Abfall umgeht.";
  }
  return `Infotext: ${title} behandelt physikalische und technische Prinzipien, damit du Vorgänge sicher beschreiben und bewerten kannst.`;
}

function buildSpecialMenus(title, pages, index) {
  const data = specialMenus[title];
  if (!data) return "";

  const topicMenuId = `topic-menu-${index}`;
  const abMenuId = `ab-menu-${index}`;

  const subtopicsMarkup = data.subtopics
    .map((item) => `<li><a href="${item.href}">${item.title}</a><small>Seite ${item.pages}</small></li>`)
    .join("");

  const abMarkup = data.worksheets
    .map((ab, idx) => {
      const abNum = idx + 1;
      return `<li><a href="arbeitsblatt.html?thema=${encodeURIComponent(title)}&seiten=${encodeURIComponent(pages)}&ab=${abNum}">${ab}</a></li>`;
    })
    .join("");

  return `
    <div class="menu-block">
      <button class="btn ghost submenu-toggle" data-target="${topicMenuId}" aria-expanded="false">Unterthemen anzeigen</button>
      <ul class="submenu topic-links" id="${topicMenuId}">${subtopicsMarkup}</ul>
    </div>
    <div class="menu-block">
      <button class="btn primary submenu-toggle" data-target="${abMenuId}" aria-expanded="false">Arbeitsblätter öffnen</button>
      <ul class="submenu links" id="${abMenuId}">${abMarkup}</ul>
    </div>
  `;
}

function createCards(categoryId, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !topics[categoryId]) return;

  topics[categoryId].forEach(([title, pages], index) => {
    const card = document.createElement("article");
    card.className = "topic-card";

    const hasSpecialMenu = Boolean(specialMenus[title]);
    const actionsDefault = hasSpecialMenu
      ? `<a class="btn ghost" href="#top">Zurück nach oben</a>`
      : `<a class="btn primary" href="arbeitsblatt.html?thema=${encodeURIComponent(title)}&seiten=${encodeURIComponent(pages)}&ab=1">Arbeitsblatt öffnen</a>
         <a class="btn ghost" href="#top">Zurück nach oben</a>`;

    card.innerHTML = `
      <img class="topic-image" src="${imageByCategory[categoryId]}" alt="Bild zu ${title}">
      <div class="topic-body">
        <h3>${title}</h3>
        <p>${infoText(title, categoryId)}</p>
        <p class="topic-meta">Buchseiten: ${pages}</p>
        <div class="actions">${actionsDefault}</div>
        ${buildSpecialMenus(title, pages, `${categoryId}-${index}`)}
      </div>
    `;

    container.appendChild(card);
  });
}

createCards("1", "topics-1");
createCards("2", "topics-2");
createCards("3", "topics-3");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".submenu-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const menu = targetId ? document.getElementById(targetId) : null;
    if (!menu) return;

    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
});
