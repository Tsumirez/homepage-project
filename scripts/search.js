let searchInput = document.getElementById("city-search");
let autoCompleteDiv = document.getElementsByClassName("autocomplete")[0];

//Map object containing names of cities and link names for them
cities = new Map();
cities.set('Bydgoszcz', 'bydgoszcz');
cities.set('Czechowice-Dziedzice','czechowicedziedzice');
cities.set('Częstochowa', "czestochowa");
cities.set('Gdańsk', 'gdansk');
cities.set('Gdynia','gdynia');
cities.set('Gniezno','gniezno');
cities.set('Grudziądz', 'grudziadz');
cities.set('Inowrocław','inowroclaw');
cities.set('Jastrzębie-Zdrój','jastrzebiezdroj');
cities.set('Kalisz','kalisz');
cities.set('Legnica','legnica');
cities.set('Łódź','lodz');
cities.set('Gorzów Wielkopolski','gorzowwielkopolski');
cities.set('Karczew Mini Bus','MiniBus');
cities.set('Olsztyn','olsztyn');
cities.set('Ostrowiec Świętokrzyski','ostrowiec');
cities.set('Przemyśl','przemysl');
cities.set('Rybnik','rybnik');
cities.set('Rzeszów','rzeszow');
cities.set('Skierniewice','skierniewice');
cities.set('Słupsk','slupsk');
cities.set('Sopot','sopot');
cities.set('Świdnica','swidnica');
cities.set('Szczecin','szczecin');
cities.set('Tarnów','tarnow');
cities.set('Tomaszów Mazowiecki', 'tomaszowmazowiecki');
cities.set('Toruń', 'torun');
cities.set('Wejherowo','wejherowo');
cities.set('Włocławek','wloclawek');
cities.set('Zawiercie','zawiercie');
cities.set('Zduńska Wola','zdunskawola');
cities.set('Zgierz','zgierz');

//Event listener for user typing in search input
searchInput.addEventListener("input", e => {
    let resultsHTML = "";
    let searchTerm = e.target.value.toLowerCase();

    // e.target.value.length && cities.forEach((cityLink, cityName) => {
    //     if (cityName.toLowerCase().includes(e.target.value.toLowerCase())) {
    //         resultsHTML += `<p><a href="https://zbiletem.pl/ticket/${cityLink}">${cityName}</a></p>`
    //     }
    // })

    e.target.value.length && cities.forEach((cityLink, cityName) =>{
        if(cityName.substring(0,searchTerm.length).toLowerCase() === searchTerm) {
            resultsHTML += `<p><a href="https://zbiletem.pl/ticket/${cityLink}">${cityName}</a></p>`
        }
    })

    autoCompleteDiv.innerHTML = resultsHTML;
});