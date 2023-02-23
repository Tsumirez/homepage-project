// this script tries to detect an apple device and if it is one changes all android app download links (save google play badge) to apple app store version of it

//detect if the user agent is on apple device
let userAgent = window.navigator.userAgent;
let isItApple = ((userAgent.indexOf(" Mac OS") + 1) || (userAgent.indexOf(" Darwin") + 1) || (userAgent.indexOf("iOS") + 1));


//page links are by default for android devices. So if it's not apple device, there's nothing to do!
if (isItApple) {

    //get all links on page except badges
    let nonBadgeLinks = document.querySelectorAll("a:not([badge])");

    //detect if link is for dowloading mobile app and change it to app store version if it is
    nonBadgeLinks.forEach(link => {
        if (link.href == "https://play.google.com/store/apps/details?id=zbiletem.zbiletem") {
            link.setAttribute("href", "https://apps.apple.com/us/app/zbiletem-bilety-komunikacji/id1028407437")
        }
    })

    let headerText = document.querySelector('#mobile-header-get-call span');
    headerText.textContent = " the App Store";

    let ratingNumberSpan = document.querySelector('.rating-number');
    ratingNumberSpan.textContent = "4,6"
}