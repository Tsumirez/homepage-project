// script closes hamburger menu when user selects a link, so it does not obstruct the page any longer.

let hamburgerMenuCheckbox = document.querySelector('#hamburger-menu');
let hamburgerLinks = document.querySelectorAll('nav > a');
let citySearchInput = document.querySelector("#city-search");

//current language link highlighting variables
let languageLinks = document.querySelectorAll("#lang a");
let currentUrlSubDir = window.location.pathname.split("/").slice(-2, -1).pop();
let defaultLangLink = document.querySelector("#lang a[href='./index.html']");

//variables for touch screen device menu close functionality
let langMenuCheckbox = document.getElementById("lang-input");
let languageWidget = document.querySelector("#lang");
let languageWidgetClicked = false;

hamburgerLinks.forEach(link => {
    //when link is clicked, close hamburger menu
    link.addEventListener("click", () => {
        hamburgerMenuCheckbox.checked = false;
    })
})


//this script finds links pointing to search box, and focuses it's input when such a link is clicked
let = searchLinks = document.querySelectorAll("a[href$='search'");

searchLinks.forEach(link => {
    link.addEventListener("click", () => setTimeout(() => citySearchInput.focus(), 250))
});

//this script highlights the current page language in language select drop menu and displays it on top
let currentLangLink = defaultLangLink;
let currentLanguageLabel = document.querySelector("#lang span");

languageLinks.forEach(link => {
    linkSubDir = link.getAttribute("href").split("/").slice(-2, -1);

    if (currentUrlSubDir == linkSubDir) {
        currentLangLink = link;
    }
})

currentLanguageLabel.textContent = currentLangLink.textContent;
currentLangLink.setAttribute("style", "color: var(--current-page-language-font-color)");


// closing the lang menu on touch devices when clicked anywhere else on the page
document.body.addEventListener('click', (e) => {
    if(!languageWidgetClicked) langMenuCheckbox.checked = false;
    languageWidgetClicked=false;
}, false);

languageWidget.addEventListener('click',
    e => {
        languageWidgetClicked = true;
        e.stopPropagation();
    }, false);