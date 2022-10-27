// script closes hamburger menu when user selects a link, so it does not obstruct the page any longer.

let hamburgerMenuCheckbox = document.querySelector('#hamburger-on-off');
let hamburgerLinks = document.querySelectorAll('#hamburger-menu ul li a');

hamburgerLinks.forEach(link => {
    link.addEventListener("click",()=> {
        hamburgerMenuCheckbox.checked = false;
    })
})