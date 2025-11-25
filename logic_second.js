document.addEventListener("DOMContentLoaded", () => {

    const vitB = document.getElementById("vitB");
    const subB = document.getElementById("subB");


            //three variable that I have to use
            let yourVit = null;
            let Eat= null;
            let Country = null;


    const dropdownVit = document.querySelector('.dropdown-menu-css');
    const dropdownEat = document.getElementById("dropEat");
    const dropdownCountry = document.getElementById("dropContry");
    const jsDiv= document.getElementById("container");
    const navWrite=document.getElementById("vitamine");
    //find id to collocate the table
    const tableDiv= document.getElementById("tableDiv");




    vitB.addEventListener("click", (e) => {
        console.log("Bottone B cliccato")
        e.preventDefault(); // impedisce di navigare
        subB.classList.toggle("show");
    });




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
                butSubmit.addEventListener("click", () => {
                console.log("I valori selezionati sono:");
                console.log("Vitamina:", yourVit);
                console.log("Pasto:", Eat);
                console.log("Paese:", Country);
            });


            }
        }
        
    }




    //legend for each vitamins
    //take write to start to show table

    //now logic if I click create table, show me table 

    navWrite.addEventListener("click", ()=>{
        if(navWrite.textContent == "Le vitamine+"){
            
            //create table 
        const Mytable= document.createElement("table");
        Mytable.id="table_1"
        Mytable.innerHTML = `
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
                `;

                //create button delete x
                const deleteBt=document.createElement("button");
                deleteBt.id= "delete_bt"
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
                    navWrite.textContent="Le vitamine+";
                })

                //append table to its div
                tableDiv.appendChild(Mytable);
                Mytable.appendChild(deleteBt);
                navWrite.textContent="Vitamine -"
        }
        else{
            navWrite.textContent="Le vitamine+"
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

});


