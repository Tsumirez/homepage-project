// script closes hamburger menu when user selects a link, so it does not obstruct the page any longer.

let hamburgerMenuCheckbox = document.querySelector('#hamburger-on-off');
let hamburgerLinks = document.querySelectorAll('#hamburger-menu ul li a');
let citySearchInput = document.querySelector("#city-search");

hamburgerLinks.forEach(link => {
    //when link is clicked, close hamburger menu
    link.addEventListener("click",()=> {
        hamburgerMenuCheckbox.checked = false;
    })
})


//this script finds links pointing to search box, and focuses it's input when such a link is clicked
let = searchLinks = document.querySelectorAll("a[href$='search'");

searchLinks.forEach(link => {
    link.addEventListener("click", () => setTimeout(() => citySearchInput.focus(),250))
});
