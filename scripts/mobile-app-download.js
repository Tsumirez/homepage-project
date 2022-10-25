// this script tries to detect an apple device and if it is one changes mobile app download link to apple app store version of it

let downloadLink = document.querySelector("#mobile-app-splash > a");
let isItSafari = window.navigator.userAgent.toLowerCase().indexOf("safari");

if(isItSafari+1) {
    downloadLink.setAttribute("href","https://apps.apple.com/us/app/zbiletem-bilety-komunikacji/id1028407437")
}