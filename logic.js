//functon to click on button and go to second page 
buttonShowMore = document.getElementById("show_more");

buttonShowMore.addEventListener("click", () => {

    window.location.href = "search.html"; 

})

const selectLanguage= document.getElementById("langSelect");
const healmeat= document.getElementById("healmeat");
const texth2 = document.getElementById("texth2");
const texth1 = document.getElementById("texth1");
const textp = document.getElementById("textp");
const show_more= document.getElementById("show_more");
const texth5 = document.getElementById("offcanvasDarkNavbarLabel");
const texthome = document.getElementById("home");
const textsearch= document.getElementById("search");
//function to change langue
function updateWord() {
    if(selectLanguage.value==="fr"){
        healmeat.textContent="Manger sainement";
        texth2.textContent="Le mot du jour est";
        texth1.textContent ="Manger!";
        textp.textContent="C'est une loi incontestée du bien-être";
        show_more.textContent="En savoir plus";
        texth5.textContent="Navigue";
        texthome.textContent="Menu";
        textsearch.textContent="Cherche";

    }else if(selectLanguage.value==="it"){
        healmeat.textContent="Mangiare sano";
        texth2.textContent="La parola del giorno è";
        texth1.textContent ="Mangiare!";
        textp.textContent="Questa è una legge indiscussa dello stare bene";
        show_more.textContent="Scopri di più";
        texth5.textContent="Naviga";
        texthome.textContent="Menu";
        textsearch.textContent="Cerca";

    }else if(selectLanguage.value==="en"){
        healmeat.textContent="Eating Healthy";
        texth2.textContent="The word of the day is";
        texth1.textContent ="Eat!";
        textp.textContent="This is an undisputed law of feeling good";
        show_more.textContent="Show more";
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