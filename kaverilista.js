

document.getElementById("lisaaButton").addEventListener("click", lisaaKaveri);
document.getElementById("poistaButton").addEventListener("click", poistaKaveri);
document.getElementById("jarjestaButton").addEventListener("click", jarjestaKaverit);

function lisaaKaveri(event) {
    event.preventDefault();
    console.log('Lisätään uusi kaveri');
    let elementinNimi = document.querySelector('#nimiInput').value;

    if (elementinNimi.trim() === "") {
        alert("Syötä kaverin nimi ennen lisäämistä.");
        return;
    }

    // Luo uusi elementti ja lisää se listaan
    let kaveriLista = document.getElementById('kaveriLista');
    let uusiElementti = document.createElement('li');
    uusiElementti.textContent = elementinNimi;
    kaveriLista.appendChild(uusiElementti);
    
    document.querySelector('#nimiInput').value = "";
    // Tulosta kaverilista konsoliin
    tulostaKaveriLista();
}

function poistaKaveri(event) {
    event.preventDefault();
    console.log('Poistetaan kaveri');
    let kaveriLista = document.getElementById('kaveriLista');
    let kaverit = kaveriLista.getElementsByTagName('li');

    //tarkista, onko listassa valittu kaveri
    if(kaverit.length === 0) {
        alert("Kaverilista on tyhjä.");
        return;
    }
    // poista viimeinen
    let viimeinenKaveri = kaverit[kaverit.length - 1];
    kaveriLista.removeChild(viimeinenKaveri);

    tulostaKaveriLista();

}

function jarjestaKaverit(event) {
    event.preventDefault();
    console.log('Järjestetään kaverit');

    // Hae kaikki listan kaverit
    let kaveriLista = document.getElementById('kaveriLista');
    let kaverit = Array.from(kaveriLista.getElementsByTagName('li'));

    // Järjestä kaverit aakkosjärjestykseen suoraan listassa
    kaverit.sort((a, b) => {
        return a.textContent.localeCompare(b.textContent);
    });

    // Tyhjennä nykyinen lista
    while (kaveriLista.firstChild) {
        kaveriLista.removeChild(kaveriLista.firstChild);
    }

    // Lisää järjestetyt kaverit takaisin listaan
    kaverit.forEach(kaveri => {
        kaveriLista.appendChild(kaveri);
    });

    // Tulosta kaverilista konsoliin
    tulostaKaveriLista();
}

function tulostaKaveriLista() {
    let kaveriLista = document.getElementById('kaveriLista');
    let kaverit = kaveriLista.getElementsByTagName('li');
    console.log('Kaverilista:');
    for (let i = 0; i < kaverit.length; i++) {
        console.log(kaverit[i].textContent);
    }
}
