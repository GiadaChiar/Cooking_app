//sito API gratuite https://spoonacular.com/food-api/console#Dashboard
//lib to traslate everything in italian or other language
    // ---- TRANSLATOR FREE ---- //

    /*
    async function translate(text, targetLang = "it") {
    if (!text) return ""; // evita errori se testo mancante

    try {
        const response = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                q: text,
                source: "en",
                target: targetLang,
                format: "text"
            })
        });

        const data = await response.json();
        return data.translatedText;
    } catch (err) {
        console.error("Errore traduzione:", err);
        return text; // fallback → testo originale
    }
}
const testoTradottoIt = await translate(details.instructions, "it");
const testoTradottoFr = await translate(details.instructions, "fr");
*/
///start my code 
// Recupera lingua salvata o italiana di default
const lang = localStorage.getItem("lang") || "it";

// Dizionario traduzioni navbar + tabella vitamine
const translations = {
    it: {
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
            <li>B9 (acido folico): spinaci, asparagi, broccoli, avocado, legumi</li>
            <li>B12: uova, latte, formaggi, carne, pesce</li>
        `,

        tabC_desc: "Presente in molti agrumi e frutti arancioni.",
        tabC_food: "arance, limoni, fragole, kiwi, peperoni.",

        tabD_desc: "Si trova in alimenti marini e con esposizione solare.",
        tabD_food: "salmone, sgombro, uova, funghi esposti al sole.",

        tabE_desc: "Contenuta in oli vegetali e semi.",
        tabE_food: "olio di girasole, mandorle, nocciole, semi.",

        tabK_desc: "Abbondante nelle verdure a foglia.",
        tabK_food: "spinaci, cavolo nero, lattuga, broccoli, bietole."
    },

    fr: {
        table_vitamina: "Vitamine",
        table_descrizione: "Description",
        table_nutrienti: "Nutriments",

        tabA_desc: "Riche en légumes orange et jaunes.",
        tabA_food: "carottes, potiron, abricots, patates douces, melon.",

        tabB_desc: "Souvent associées aux céréales complètes et aux légumineuses.",
        tabB_ul: `
            <li>B1 : céréales complètes, légumineuses</li>
            <li>B2 : lait, amandes</li>
            <li>B3 : viande, arachides</li>
            <li>B5 : champignons, avocat</li>
            <li>B6 : bananes, pommes de terre, céréales</li>
            <li>B9 : épinards, asperges, brocoli, avocat, légumineuses</li>
            <li>B12 : œufs, lait, fromage, viande, poisson</li>
        `,

        tabC_desc: "Présente dans de nombreux agrumes.",
        tabC_food: "oranges, citrons, fraises, kiwis, poivrons.",

        tabD_desc: "Présente surtout dans les aliments marins.",
        tabD_food: "saumon, maquereau, œufs, champignons exposés au soleil.",

        tabE_desc: "Contenue dans les huiles végétales et les graines.",
        tabE_food: "huile de tournesol, amandes, noisettes, graines.",

        tabK_desc: "Abondante dans les légumes à feuilles.",
        tabK_food: "épinards, chou kale, laitue, brocoli, blettes."
    },

    en: {
        table_vitamina: "Vitamin",
        table_descrizione: "Description",
        table_nutrienti: "Nutrients",

        tabA_desc: "Rich in orange and yellow vegetables.",
        tabA_food: "carrots, pumpkin, apricots, sweet potatoes, melon.",

        tabB_desc: "Often found in whole grains and legumes.",
        tabB_ul: `
            <li>B1: whole grains, legumes</li>
            <li>B2: milk, almonds</li>
            <li>B3: meat, peanuts</li>
            <li>B5: mushrooms, avocado</li>
            <li>B6: bananas, potatoes, cereals</li>
            <li>B9: spinach, asparagus, broccoli, avocado, legumes</li>
            <li>B12: eggs, milk, cheese, meat, fish</li>
        `,

        tabC_desc: "Found in many citrus fruits.",
        tabC_food: "oranges, lemons, strawberries, kiwis, bell peppers.",

        tabD_desc: "Found in marine foods and linked to sunlight exposure.",
        tabD_food: "salmon, mackerel, eggs, sun-exposed mushrooms.",

        tabE_desc: "Found in vegetable oils and seeds.",
        tabE_food: "sunflower oil, almonds, hazelnuts, seeds.",

        tabK_desc: "Abundant in leafy vegetables.",
        tabK_food: "spinach, kale, lettuce, broccoli, chard."
    }
};



//same langiage to first page or italian default
    
    const apiKey = "13cc17b8236f4f35a793846b89223cfd";
    const chosenLang = localStorage.getItem("lang") || "it"; 
    const texth5 = document.getElementById("offcanvasDarkNavbarLabel");
    const texthome = document.getElementById("home");
    const textsearch= document.getElementById("search");
    const selectLanguage= document.getElementById("langSelect");
    selectLanguage.value = chosenLang;
    //function to change langue



    const vitB = document.getElementById("vitB");
    const subB = document.getElementById("subB");


            //three variable that I have to use
            let yourVit = null;
            let Eat= null;
            let Country = "";

    const dropdownVit = document.querySelector('.dropdown-menu-css');
    const dropdownEat = document.getElementById("dropEat");
    const dropdownCountry = document.getElementById("dropContry");
    const jsDiv= document.getElementById("container");
    const navWrite=document.getElementById("vitamine");
    //find id to collocate the table
    const tableDiv= document.getElementById("tableDiv");
    const recipiesDiv= document.getElementById("recipes")

    const vitaminFoods = {
        "A": ["carrots", "pumpkins", "apricots", "sweet potatoes", "melons", "spinach", "kale"],
        "B":["whole grains", "beans", "nuts", "porks",],
        "B1": ["whole grains", "beans", "nuts", "porks","milks", "almonds", "eggs", "yogurts","spinach", "asparagus", "broccolis", "avocados", "lentils","meats", "fish", "peanuts"],
        "B2": ["milks", "almonds", "eggs", "yogurts"],
        "B3": ["meats", "fish", "peanuts"],
        "B5": ["mushrooms", "avocados", "eggs", "chickens"],
        "B6": ["bananas", "potatoes", "chickpeas"],
        "B9": ["spinach", "asparagus", "broccolis", "avocados", "lentils"],
        "B12": ["eggs", "milks", "cheeses", "meats", "fish"],
        "C": ["oranges", "lemons", "strawberries", "kiwis", "bell peppers"],
        "D": ["salmons", "mackerels", "egg yolks", "mushrooms"], 
        "E": ["sunflower oils", "almonds", "hazelnuts", "seeds"],
        "K": ["spinach", "kale", "broccolis", "lettuces", "cabbages"]
    
};


//function to call python process for traslation not here, in front-end
//fetch to communicate with js back-end

async function translateWithPython(text) {
    try {
        const response = await fetch("http://localhost:3000/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });

        const data = await response.json();
        return data.translated;
    } catch (error) {
        console.error("Errore nella conversione:", error);
        return text; // fallback: testo originale
    }
}



function removeVit(){
    const existingVith = document.getElementById("Vith")
            if(existingVith ){
                existingVith.remove()
            }
}

function removeEat(){
    const existingEat = document.getElementById("Eath")
        if(existingEat){
            existingEat.remove();
        }
}

function removeCountry(){
    const existingCountry  = document.getElementById("Countryh")
        if(existingCountry){
            existingCountry.remove();
        }
}

function removeSubmitBtt(){
    const existingbutSubmit = document.getElementById("submit");
    if(existingbutSubmit){
        existingbutSubmit.remove();
    }

}



    vitB.addEventListener("click", (e) => {
        console.log("Bottone B cliccato")
        e.preventDefault(); // impedisce di navigare
        subB.classList.toggle("show");
    });


    // Funzione per cercare ricette su Spoonacular
// vitamin = es. "A", meal = es. "lunch", country = es. "Italian"
/* "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],*/
//cuisine= "Italian"

//if it is A you trasform it in a list of food




async function fetchRecipes(yourVit,Eat,Country) {
    try {

        const ingredientsArray = vitaminFoods[yourVit]; // ex A: ["carrot", "pumpkin", ...]
        // Costruisci la query concatenando i parametri
        //only one random
        const randomIngredient = ingredientsArray[Math.floor(Math.random() * ingredientsArray.length)];
        const ingredientsQuery= randomIngredient;
        console.log("Ingrediente a caso", ingredientsQuery);
        
        /*const ingredientsQuery = ingredientsArray.join(",");
        console.log("La lista igredienti è:" + ingredientsQuery)*/
        if (Country === "Italia") {
            Country = "Italian";
        } else if (Country === "") {
            Country = "";
        } else if (Country === "Nessuno") {
            Country = "";
        }else if (Country === "Spagna") {
            Country = "Spanish";
        }else if (Country === "Francia") {
            Country = "French";
        }
        console.log("Paese convertito:", Country);

        if(Eat=="Colazione"){
            Eat ="breakfast"
        }
        else if(Eat=="Pranzo" || Eat=="Cena"){
            Eat ="main course"
        }
        else if(Eat=="Spuntino"){
            Eat ="snack"
        }
        console.log("Pasto convertito:", Eat)

        // Qui puoi continuare a costruire l'URL della fetch usando ingredientsQuery e Country
        // const url = `...`
        const url = `https://api.spoonacular.com/recipes/complexSearch?` +
                    `includeIngredients=${encodeURIComponent(ingredientsQuery)}` +
                    `&type=${encodeURIComponent(Eat)}` +
                    `&cuisine=${encodeURIComponent(Country)}` +
                    `&number=1` +
                    `&apiKey=${apiKey}`;

        console.log("URL finale:", url);

        const response = await fetch(url);
        if (!response.ok) throw new Error("Errore API " + response.status);

        const data = await response.json();
        console.log("Risultati API:", data.results);

        //I want only title and image 
        /*
        const simplifiedRecipes = data.results.map(recipe=>({
            id:recipe.id,
            title: recipe.title,
            image: recipe.image
        }));

        */

    const simplifiedRecipes = [];

    for (const recipe of data.results) {
        const translatedTitle = await translateWithPython(recipe.title);

        simplifiedRecipes.push({
            id: recipe.id,
            title: translatedTitle,
            image: recipe.image
        });
    }

    console.log("Ricette tradotte:", simplifiedRecipes);


        //right description and left photo
        
        simplifiedRecipes.forEach(recipe =>{

            //create div1 
            const divN = document.createElement("div")
            divN.classList.add("row")
            
            
            //create element h2
            const titleh2 = document.createElement("a");
            titleh2.textContent= recipe.title;
            titleh2.id= recipe.id;
            

            //add imagine
            const titleImg = document.createElement("Img");
            titleImg.id= recipe.id;
            titleImg.src= recipe.image;
            titleImg.alt = recipe.title;

            //box to show etra info i8f you pass over with mouse
            const boxHover= document.createElement("div");
            boxHover.classList.add("hover_info");
            boxHover.style.display= "none"//not show 
    

            //append
            divN.appendChild(titleh2);
            divN.appendChild(titleImg);
            divN.appendChild(boxHover);
            recipiesDiv.appendChild(divN);


            //if I pass hover I want to show the recipes time and element in it
            titleh2.addEventListener("click",async ()=>{
                //I get id
                const recipeId = titleh2.id;
                console.log("Id immagine = " + recipeId)

                //Request for time and recipes


                
                const datailUrl= `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;
                console.log("la fetch ingredienti : " + datailUrl)
                
                try{
                    const response = await fetch(datailUrl);
                    const details = await response.json(); // I want it in json
                    console.log(details);
                    

                    console.log("dettagli:"+ details)

                    


                    
                    const ingredients = details.extendedIngredients.map(i => i.original).join("<br>");
                    const divIngredient= document.createElement("div");
                    divIngredient.classList.add("ingredientClass");
                    divIngredient.id=("ingredientClass");
                    const ulIngredients = document.createElement("ul");
                    const titleIngredient= document.createElement("h4");
                    if(chosenLang==="it"){
                        titleIngredient.textContent="Lista ingredienti:"
                    }else if(chosenLang==="en"){
                        titleIngredient.textContent="Ingredient list:"
                    }else if(chosenLang==="fr"){
                        titleIngredient.textContent="Liste des ingrédients:"
                    }
                    
                    
                    

                    //create a point list foreach ingredient
                    details.extendedIngredients.forEach(i => {
                        const li = document.createElement("li");
                        li.textContent = i.original; 
                        ulIngredients.appendChild(li);    

                    })

                    const divSummary= document.createElement("div");
                    divSummary.classList.add("summary");
                    divSummary.id=("summary")

                    const timeText = document.createElement("h4");
                    if(chosenLang==="it"){
                        timeText.textContent = "Tempo : " + details.readyInMinutes +" minuti"
                    }if(chosenLang==="en"){
                        timeText.textContent = "Time : " + details.readyInMinutes +" minutes"
                    }if(chosenLang==="fr"){
                        timeText.textContent = "Temps : " + details.readyInMinutes +" minutes"
                    }
            

                    const cuisineText = document.createElement("h4");
                    //if it is empty "international"
                    if(!details.cuisines || details.cuisines.length === 0){
                        if(chosenLang==="it"){
                            cuisineText.textContent= "Piatto internazionale"
                        } else if(chosenLang==="en"){
                            cuisineText.textContent= "International dish"
                        }else if(chosenLang==="fr"){
                            cuisineText.textContent= "Plat international"
                        }
                        
                    }
                    else{
                        if(chosenLang==="it"){
                            cuisineText.textContent= "Piatto " + details.cuisines
                        } else if(chosenLang==="en"){
                            cuisineText.textContent= "Dish " + details.cuisines
                        }else if(chosenLang==="fr"){
                            cuisineText.textContent= "Plat " + details.cuisines
                        }
                        
                    }
                    
                    const healthText = document.createElement("h4");
                    if(!details.healthScore || details.healthScore === 0){
                        if(chosenLang==="it"){
                            healthText.textContent= "Percentuale salutare non disponibile"
                        } else if(chosenLang==="en"){
                            healthText.textContent= "Healthy percentage not available"
                        }else if(chosenLang==="fr"){
                            healthText.textContent= "Pourcentage sain non disponible"
                        }
                        
                    }
                    else{
                        if(chosenLang==="it"){
                            healthText.textContent= "Piatto salutare al " + details.healthScore + " %"
                        }else if(chosenLang==="en"){
                            healthText.textContent= "Healthy dish at " + details.healthScore + " %"
                        }else if(chosenLang==="fr"){
                            healthText.textContent= "Plat sain à " + details.healthScore + " %"
                        } 
                    }
                    

                    const divPreparation = document.createElement("div");
                    divPreparation.classList.add("prep");
                    divPreparation.id=("prep");

                    const titlePrep= document.createElement("h4");
                    if(chosenLang==="it"){
                        titlePrep.textContent="Procedimento:"
                    }else if(chosenLang==="en"){
                        titlePrep.textContent="Procedure:"
                    }else if(chosenLang==="fr"){
                        titlePrep.textContent="Procédure:"
                    }
                    
                    
                    

                    const prepText= document.createElement("p");
                    prepText.innerHTML = details.instructions || "Procedimento non disponibile";
                    

                    

                    //append under afterend
                    
                    divN.insertAdjacentElement("afterend", divPreparation);
                    divPreparation.appendChild(titlePrep);
                    divPreparation.appendChild(prepText);
                    divN.insertAdjacentElement("afterend", divIngredient);
                    divIngredient.appendChild(titleIngredient);
                    divIngredient.appendChild(ulIngredients);
                    divN.insertAdjacentElement("afterend", divSummary);
                    divSummary.appendChild(timeText);
                    divSummary.appendChild(cuisineText);
                    divSummary.appendChild(healthText);
                    


                    boxHover.style.display ="block";
                }
                catch(error){
                    boxHover.innerHTML = "Errore nel catricamento dettagli"
                    boxHover.style.display="block";
                }

                //Create button x for extra detail 

            const deleteBt=document.createElement("button");
                deleteBt.id = "delete_bt";
                deleteBt.type = "button";
                deleteBt.classList.add("btn-close");
                deleteBt.setAttribute("aria-label", "Close");
                //append it to row div classs
                divN.appendChild(deleteBt);

                 //if i click on the button every think also the button
                deleteBt.addEventListener("click",()=>{
                    const existngSummary= document.getElementById("summary");
                    const exIngredient= document.getElementById("ingredientClass");
                    const existnPreparation= document.getElementById("prep");

                    //delete table
                if(existngSummary){
                    existngSummary.remove();
                }
                if(exIngredient){
                    exIngredient.remove();
                }
                if(existnPreparation){
                    existnPreparation.remove();
                }
                deleteBt.remove();
                })
            }) ;
        
            

            
        });



        console.log("Ricette semplificate:", simplifiedRecipes);

        removeVit();
        removeEat();
        removeCountry();
        removeSubmitBtt();

        

        return data.results;
        


    } catch (error) {
        console.error("Errore nella conversione:", error);
        return [];
    }
/*https://api.spoonacular.com/recipes/complexSearch?includeIngredients=carrots%&type=main%20course&cuisine=French&number=1&apiKey=4c81b3bd660d4066822b58868f0fc0b1
*/

}



    function checkSubmitReady(){
        //if existing at least Vit and Eat you can submit 
        const existingEat = document.getElementById("Eath")
        const existingVith = document.getElementById("Vith")


        if (existingEat && existingVith) {
            let butSubmit = document.getElementById("submit");
            
            if (!butSubmit) {
                butSubmit = document.createElement("button");
                butSubmit.classList.add("btn", "btn-primary");
                butSubmit.id = "submit";
                butSubmit.type="submit";
                butSubmit.textContent = "Cerca";
                jsDiv.appendChild(butSubmit);

                //add event click
                butSubmit.addEventListener("click",  async () => {
                console.log("I valori selezionati sono:");
                console.log("Vitamina:", yourVit);
                console.log("Pasto:", Eat);
                console.log("Paese:", Country);

                //recall async function
                const recipes = await fetchRecipes(yourVit,Eat,Country);
                console.log("Ricette ottenute:", recipes);





            });


            }
        }
        
    }




    //legend for each vitamins
    //take write to start to show table

    //now logic if I click create table, show me table 

    navWrite.addEventListener("click", ()=>{
        if(navWrite.textContent == "Le vitamine+" || navWrite.textContent == "The vitamins+"||navWrite.textContent == "Les vitamines+"){
            
            //create table 
        const Mytable= document.createElement("table");
        Mytable.id="table_1"
        Mytable.innerHTML = 
                            `
                        <thead>
                            <tr>
                                <td>${translations[lang].table_vitamina}</td>
                                <td>${translations[lang].table_descrizione}</td>
                                <td>${translations[lang].table_nutrienti}</td>
                            </tr>

                        <tbody>
                            <tr>
                                <td>A (Retinolo/Beta-carotene)</td>
                                <td>${translations[lang].tabA_desc}</td>
                                <td>${translations[lang].tabA_food}</td>
                            </tr>

                            <tr>
                                <td>B</td>
                                <td>${translations[lang].tabB_desc}</td>
                                <td><ul>${translations[lang].tabB_ul}</ul></td>
                            </tr>

                            <tr>
                                <td>C</td>
                                <td>${translations[lang].tabC_desc}</td>
                                <td>${translations[lang].tabC_food}</td>
                            </tr>

                            <tr>
                                <td>D</td>
                                <td>${translations[lang].tabD_desc}</td>
                                <td>${translations[lang].tabD_food}</td>
                            </tr>

                            <tr>
                                <td>E</td>
                                <td>${translations[lang].tabE_desc}</td>
                                <td>${translations[lang].tabE_food}</td>
                            </tr>

                            <tr>
                                <td>K</td>
                                <td>${translations[lang].tabK_desc}</td>
                                <td>${translations[lang].tabK_food}</td>
                            </tr>
                        </tbody>
`;
        
        /*`
                <thead>
                    <tr><td>Vitamina</td><td>Descrizione</td><td>Nutrienti</td></tr>
                </thead>
                <tbody>
                    <tr><td>A(Retinolo/Beta-carotene)</td><td>Ricca nei vegetali arancioni e gialli.</td><td>carote, zucca, albicocche, patate dolci, melone..</td></tr>
                    <tr><td>B</td><td>Spesso associate a cereali integrali e legumi.</td><td><ul>
                    <li>B1 (tiamina): cereali integrali, legumi</li>
                    <li>B2 (riboflavina): latte, mandorle</li>
                    <li>B3 (niacina): carne, arachidi</li>
                    <li>B5 (acido pantotenico): funghi, avocado</li>
                    <li>B6 (piridossina): banane, patate, cereali</li>
                    <li>B9 (Acido Folico): spinaci, asparagi, broccoli, avocado, legumi.</li>
                    <li>B12 : uova, latte, formaggi, carne, pesce.</li>
                    </ul></td></tr>
                    <tr><td>C</td><td>Presente in molti agrumi e frutti arancioni.</td><td>carote, zucca, albicocche, patate dolci, melone.</td></tr>
                    <tr><td>D</td><td>Si trova in alimenti marini e viene associata alla luce del sole</td><td>salmone, sgombro, uova, funghi esposti al sole.</td></tr>
                    <tr><td>E</td><td>Contenuta in oli vegetali e semi.</td><td>olio di girasole, mandorle, nocciole, semi.</td></tr>
                    <tr><td>K</td><td>Abbondante nelle verdure a foglia.</td><td>spinaci, cavolo nero, lattuga, broccoli, bietole.</td></tr>
                </tbody>
                `;*/

                //create button delete x
                const deleteBt=document.createElement("button");
                deleteBt.id = "delete_bt";
                deleteBt.type = "button";
                deleteBt.classList.add("btn-close");
                deleteBt.setAttribute("aria-label", "Close");

                //if i click on the button delete table
                deleteBt.addEventListener("click",()=>{
                    //delete table
                const existingTable = document.getElementById("table_1")
                    if(existingTable){
                        existingTable.remove()
                    }
                    deleteBt.remove();

                    if(chosenLang==="it"){
                        navWrite.textContent="Le vitamine+";
                    }else if (chosenLang==="en"){
                        navWrite.textContent="The vitamins+";
                    }else if (chosenLang==="fr"){
                        navWrite.textContent="Les vitamines+";
                    }
                    
                })

                //append table to its div
                tableDiv.appendChild(Mytable);
                Mytable.appendChild(deleteBt);
                //check language
                if(selectLanguage.value==="fr"){
                texth5.textContent="Navigue";
                texthome.textContent="Menu";
                textsearch.textContent="Cherche";

            }else if(selectLanguage.value==="it"){
                texth5.textContent="Naviga";
                texthome.textContent="Menu";
                textsearch.textContent="Cerca";

            }else if(selectLanguage.value==="en"){
                texth5.textContent="Navigate";
                texthome.textContent="Home";
                textsearch.textContent="Search";

}           if(chosenLang==="it"){
                navWrite.textContent="Le vitamine -";
            }else if (chosenLang==="en"){
                navWrite.textContent="The vitamins -";
            }else if (chosenLang==="fr"){
                navWrite.textContent="Les vitamines -";
            }

            
        }
        else{
                if(chosenLang==="it"){
                    navWrite.textContent="Le vitamine+";
                }else if (chosenLang==="en"){
                    navWrite.textContent="The vitamins+";
                }else if (chosenLang==="fr"){
                    navWrite.textContent="Les vitamines+";
                }
            //delete table
            const existingTable = document.getElementById("table_1")
            if(existingTable){
                existingTable.remove()
            }
            const existingBtDelete = document.getElementById("delete_bt")
            if(existingBtDelete){
                existingBtDelete.remove()
                return;
            }
        }
        
        

    });




    //if i click to Vitamina i want to my choise in a table and then submit it 
    //take a vitamina 


    dropdownVit.addEventListener("click",function(e) {
        //block defaul link action(a)
        e.preventDefault();
        //delete table vit if is still open 
        const existingTable = document.getElementById("table_1")
            if(existingTable){
                existingTable.remove()
            }
            navWrite.textContent="Le vitamine+"



        //if you choose element a in dopdown-item
        if (e.target && e.target.matches("a.dropdown-item")) {
            console.log("Hai scelto:", e.target.textContent);
            yourVit = e.target.textContent;
            console.log(yourVit);
            //if already exist a table delete it 
            const existingTable = document.getElementById("table_ch")
            if(existingTable){
                existingTable.remove()
            }

            const existingVith = document.getElementById("Vith")
            if(existingVith ){
                existingVith.remove()
            }

            textVit= document.createElement("h2");
            textVit.id= "Vith";
            textVit.textContent= "La vitamina selezionata è: "+ `${yourVit}`;
            tableDiv.appendChild(textVit);


    /*

            tableChoose= document.createElement("table");
            tableChoose.id="table_ch"
            tableChoose.innerHTML = `
                <thead>
                    <tr><td>Vitamina</td><td>Pasto</td><td>Paese(facoltativo)</td></tr>
                </thead>
                <tbody>
                    <tr><td>${yourVit}</td><td>...</td><td>...</td></tr>
                    
                </tbody>
                `;
                //append table to its div
                tableDiv.appendChild(tableChoose);*/

                checkSubmitReady();

        }
    });

    //because it will execute before so I have to put a timer

    setTimeout(() => {
        console.log("Valore dopo 3 secondi:", yourVit);
    }, 6000);


    //Contry 

    dropdownEat.addEventListener("click", function(e){
        e.preventDefault();

        //delete table vit if is still open 
        const existingTable = document.getElementById("table_1")
            if(existingTable){
                existingTable.remove()
            }
            navWrite.textContent="Le vitamine+"

        //if you choose element a in dopdown-item
        if (e.target && e.target.matches("a.dropdown-item")) {
            console.log("Hai scelto:", e.target.textContent);
            Eat = e.target.textContent;
            console.log(Eat);


        const existingEat = document.getElementById("Eath")
        if(existingEat){
            existingEat.remove();
        }

        textEat= document.createElement("h2");
        textEat.id="Eath"
        textEat.textContent= "Il pasto selezionato è: "+ `${Eat}`;
        tableDiv.appendChild(textEat);

        checkSubmitReady();

        }
    });

    //country

    dropdownCountry.addEventListener("click",  function(e){
        e.preventDefault();

        //delete table vit if is still open 
        const existingTable = document.getElementById("table_1")
            if(existingTable){
                existingTable.remove()
            }
            navWrite.textContent="Le vitamine+"

            //if you choose element a in dopdown-item
        if (e.target && e.target.matches("a.dropdown-item")) {
            console.log("Hai scelto:", e.target.textContent);
            Country = e.target.textContent;
            console.log(Country);


        const existingCountry  = document.getElementById("Countryh")
        if(existingCountry){
            existingCountry.remove();
        }

        textCountry = document.createElement("h2");
        textCountry.id="Countryh"
        textCountry.textContent= "Il Paese selezionato è: "+ `${Country}`;
        tableDiv.appendChild(textCountry);

        }
    });

    function updateWord() {
    if(selectLanguage.value==="fr"){
        texth5.textContent="Navigue";
        texthome.textContent="Menu";
        textsearch.textContent="Cherche";

    }else if(selectLanguage.value==="it"){
        texth5.textContent="Naviga";
        texthome.textContent="Menu";
        textsearch.textContent="Cerca";

    }else if(selectLanguage.value==="en"){
        texth5.textContent="Navigate";
        texthome.textContent="Home";
        textsearch.textContent="Search";

    }
    //to save the selection language
    localStorage.setItem("lang", selectLanguage.value);
    }


//when I change language call function

selectLanguage.addEventListener("change",updateWord);
updateWord();




/*ricette esempio
https://www.giallozafferano.it/ricerca-ricette/vitamina+b+e+c/    */ 


//site free is spoonacular the api key account name api
