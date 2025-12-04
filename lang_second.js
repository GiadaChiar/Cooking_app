// Recupera lingua da localStorage
document.addEventListener("DOMContentLoaded", () => {

    // Recupera lingua da localStorage
    let lang = localStorage.getItem("lang") || "it";
    const langSelectEl = document.getElementById("langSelect");
    if (langSelectEl) langSelectEl.value = lang;
    // Dizionario
    const translations = {
        it: {
            vitamine: "Le vitamine+",
            naviga: "Naviga",
            home: "Home",
            search: "Cerca",
            vitamina: "Vitamina",
            pasto: "Pasto",
            colazione: "Colazione",
            pranzo: "Pranzo",
            spuntino: "Spuntino",
            cena: "Cena",
            paese: "Paese",
            italia: "Italia",
            francia: "Francia",
            spagna: "Spagna",
            nessuno: "Nessuno"
        },
        fr: {
            vitamine: "Les vitamines+",
            naviga: "Navigation",
            home: "Accueil",
            search: "Recherche",
            vitamina: "Vitamine",
            pasto: "Repas",
            colazione: "Petit déjeuner",
            pranzo: "Déjeuner",
            spuntino: "Snack",
            cena: "Dîner",
            paese: "Pays",
            italia: "Italie",
            francia: "France",
            spagna: "Espagne",
            nessuno: "Aucun"
        },
        en: {
            vitamine: "The vitamins+",
            naviga: "Navigate",
            home: "Home",
            search: "Search",
            vitamina: "Vitamin",
            pasto: "Meal",
            colazione: "Breakfast",
            pranzo: "Lunch",
            spuntino: "Snack",
            cena: "Dinner",
            paese: "Country",
            italia: "Italy",
            francia: "France",
            spagna: "Spain",
            nessuno: "None"
            
        }
    };

    // Funzione traduzione
    function translatePage() {
        document.querySelectorAll("[data-translate]").forEach(el => {
            const key = el.dataset.translate;
           // el.textContent = translations[lang][key];
            const v = (translations[lang] && translations[lang][key]) || translations.it[key] || el.textContent;
            el.textContent = v;
        });
    }

    translatePage();

    // Cambia lingua
    document.getElementById("langSelect").addEventListener("change", (e) => {
        localStorage.setItem("lang", e.target.value);
        location.reload();
    });
});
