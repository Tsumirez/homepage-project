// script closes hamburger menu when user selects a link, so it does not obstruct the page any longer.

let hamburgerMenuCheckbox = document.querySelector('#hamburger-on-off');
let hamburgerLinks = document.querySelectorAll('#hamburger-menu ul li a');
let citySearchInput = document.querySelector("#city-search");

hamburgerLinks.forEach(link => {
    //when link is clicked, close hamburger menu
    link.addEventListener("click",()=> {
        hamburgerMenuCheckbox.checked = false;
    })

    //if the link is for the search box, give it focus after clicking the link.
    if(link.href.split("#").pop() =="search") {
        link.addEventListener("click", () => setTimeout(() => citySearchInput.focus(),250))
    }
})