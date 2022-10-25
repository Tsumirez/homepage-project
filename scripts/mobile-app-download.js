// this script tries to detect an apple device and if it is one changes mobile app download link to apple app store version of it

let downloadLink = document.querySelector("#mobile-app-splash > a");
let userAgent = window.navigator.userAgent;
let isItApple = ((userAgent.indexOf(" Mac OS") +1) || (userAgent.indexOf(" Darwin")+1) || (userAgent.indexOf("iOS")+1));


if(isItApple) {
    downloadLink.setAttribute("href","https://apps.apple.com/us/app/zbiletem-bilety-komunikacji/id1028407437")
}