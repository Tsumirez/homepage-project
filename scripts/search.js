let searchInput = document.getElementById("city-search");
let autoCompleteDiv = document.getElementsByClassName("autocomplete")[0];

//Map object containing names of cities and link names for them
/*
cities = new Map();
cities.set('Bydgoszcz', 'bydgoszcz');
cities.set('Czechowice-Dziedzice', 'czechowicedziedzice');
cities.set('Częstochowa', "czestochowa");
cities.set('Gdańsk', 'gdansk');
cities.set('Gdynia', 'gdynia');
cities.set('Gniezno', 'gniezno');
cities.set('Grudziądz', 'grudziadz');
cities.set('Inowrocław', 'inowroclaw');
cities.set('Jastrzębie-Zdrój', 'jastrzebiezdroj');
cities.set('Kalisz', 'kalisz');
cities.set('Legnica', 'legnica');
cities.set('Łódź', 'lodz');
cities.set('Gorzów Wielkopolski', 'gorzowwielkopolski');
cities.set('Karczew Mini Bus', 'MiniBus');
cities.set('Olsztyn', 'olsztyn');
cities.set('Ostrowiec Świętokrzyski', 'ostrowiec');
cities.set('Przemyśl', 'przemysl');
cities.set('Rybnik', 'rybnik');
cities.set('Rzeszów', 'rzeszow');
cities.set('Skierniewice', 'skierniewice');
cities.set('Słupsk', 'slupsk');
cities.set('Sopot', 'sopot');
cities.set('Świdnica', 'swidnica');
cities.set('Szczecin', 'szczecin');
cities.set('Tarnów', 'tarnow');
cities.set('Tomaszów Mazowiecki', 'tomaszowmazowiecki');
cities.set('Toruń', 'torun');
cities.set('Wejherowo', 'wejherowo');
cities.set('Włocławek', 'wloclawek');
cities.set('Zawiercie', 'zawiercie');
cities.set('Zduńska Wola', 'zdunskawola');
cities.set('Zgierz', 'zgierz');
*/

/*Event listener for user typing in search input if using pre-coded cities and links list above

searchInput.addEventListener("input", (e) => {
    let resultsHTML = "";
    let searchTerm = e.target.value.toLowerCase();

    e.target.value.length && cities.forEach((cityLink, cityName) =>{
        if(cityName.substring(0,searchTerm.length).toLowerCase() === searchTerm) {
            resultsHTML += `<p><a href="https://zbiletem.pl/ticket/${cityLink}">${cityName}</a></p>`
        }
    })

    autoCompleteDiv.innerHTML = resultsHTML;
});
*/

//attach handler to city search box's input event
searchInput.addEventListener("input", debouncedCitySearch());

//debounce function for user input in serch box. Attach this as it's event handler.
function debouncedCitySearch() {
    let pendingCall = null;
    return (e) => {
        clearTimeout(pendingCall);
        pendingCall = setTimeout(() => callCitiesApi(e), 1000);
    }
}

//options object required for api call autorization
const apiCallOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4139be0acdmshdbe3fdd3fc41903p134078jsnb90ef04ed884',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

//api call to retrieve city names based on given user input
let callCitiesApi = (e) => {
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${e.target.value}&countryIds=pl&minPopulation=50000&languageCode=en&types=CITY`, apiCallOptions)
        .then(response => response.json())
        .then(response => {
            autocomplete(response.data);

        })
        .catch(err => console.error(err));
}

//function for filling autocomplete panel with html containing retrieved api call values
let autocomplete = (data) => {
    let resultsHTML = "";

    if (Array.isArray(data) && data.length) {
        data.forEach(item => {
            resultsHTML += `<p>${item.city}</p>`;
        })
    }

    autoCompleteDiv.innerHTML = resultsHTML;
}