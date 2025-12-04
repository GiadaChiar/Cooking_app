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
            nessuno: "Nessuno",
            //traslate table 
            table_vitamina: "Vitamina",
            table_descrizione: "Descrizione",
            table_nutrienti: "Nutrienti",

            tabA_desc: "Ricca nei vegetali arancioni e gialli.",
            tabA_food: "carote, zucca, albicocche, patate dolci, melone.",

            
            tabB_desc: "Spesso associate a cereali integrali e legumi.",
            tabB_ul: `
                <li>B1 (tiamina): cereali integrali, legumi</li>
                <li>B2 (riboflavina): latte, mandorle</li>
                <li>B3 (niacina): carne, arachidi</li>
                <li>B5 (acido pantotenico): funghi, avocado</li>
                <li>B6 (piridossina): banane, patate, cereali</li>
                <li>B9 (Acido Folico): spinaci, asparagi, broccoli, avocado, legumi</li>
                <li>B12: uova, latte, formaggi, carne, pesce</li>`,

            tabC_desc: "Presente in molti agrumi e frutti arancioni.",
            tabC_food: "arance, limoni, kiwi, fragole.",

            tabD_desc: "Si trova in alimenti marini ed è legata alla luce solare.",
            tabD_food: "salmone, sgombro, uova, funghi esposti al sole.",

            tabE_desc: "Contenuta in oli vegetali e semi.",
            tabE_food: "olio di girasole, mandorle, nocciole, semi.",

            tabK_desc: "Abbondante nelle verdure a foglia.",
            tabK_food: "spinaci, cavolo nero, lattuga, broccoli, bietole."
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
            nessuno: "Aucun",
            //traslate 
            table_vitamina: "Vitamine",
            table_descrizione: "Description",
            table_nutrienti: "Nutriments",

            tabA_desc: "Riche en légumes orange et jaunes.",
            tabA_food: "carottes, potiron, abricots, patates douces, melon.",

            tabB_desc: "Souvent associées aux céréales complètes et aux légumineuses.",
            tabB_ul: `
                <li>B1 (thiamine) : céréales complètes, légumineuses</li>
                <li>B2 (riboflavine) : lait, amandes</li>
                <li>B3 (niacine) : viande, arachides</li>
                <li>B5 (acide pantothénique) : champignons, avocat</li>
                <li>B6 (pyridoxine) : bananes, pommes de terre, céréales</li>
                <li>B9 (acide folique) : épinards, asperges, brocoli, avocat, légumineuses</li>
                <li>B12 : œufs, lait, fromages, viande, poisson</li>`,

            tabC_desc: "Présente dans de nombreux agrumes et fruits orange.",
            tabC_food: "oranges, citrons, kiwis, fraises.",


            tabD_desc: "Se trouve dans les aliments marins et liée à la lumière du soleil.",
            tabD_food: "saumon, maquereau, œufs, champignons exposés au soleil.",


            tabE_desc: "Contenue dans les huiles végétales et les graines.",
            tabE_food: "huile de tournesol, amandes, noisettes, graines.",

            tabK_desc: "Abondante dans les légumes à feuilles.",
            tabK_food: "épinards, chou kale, laitue, brocoli, bettes."
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
            nessuno: "None",
            //table
            table_vitamina: "Vitamin",
            table_descrizione: "Description",
            table_nutrienti: "Nutrients",

        tabA_desc: "Rich in orange and yellow vegetables.",
        tabA_food: "carrots, pumpkin, apricots, sweet potatoes, melon.",

        tabB_desc: "Often associated with whole grains and legumes.",
        tabB_ul: `
            <li>B1 (thiamine): whole grains, legumes</li>
            <li>B2 (riboflavin): milk, almonds</li>
            <li>B3 (niacin): meat, peanuts</li>
            <li>B5 (pantothenic acid): mushrooms, avocado</li>
            <li>B6 (pyridoxine): bananas, potatoes, cereals</li>
            <li>B9 (Folic Acid): spinach, asparagus, broccoli, avocado, legumes</li>
            <li>B12: eggs, milk, cheese, meat, fish</li>`,

        tabC_desc: "Found in many citrus and orange fruits.",
        tabC_food: "oranges, lemons, kiwis, strawberries.",

        tabD_desc: "Found in marine foods and associated with sunlight.",
        tabD_food: "salmon, mackerel, eggs, sun-exposed mushrooms.",

        tabE_desc: "Found in vegetable oils and seeds.",
        tabE_food: "sunflower oil, almonds, hazelnuts, seeds.",

        tabK_desc: "Abundant in leafy green vegetables.",
        tabK_food: "spinach, kale, lettuce, broccoli, chard."
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
