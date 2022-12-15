let imageContainer = document.getElementsByClassName("gallery-images")[0];
let leftArrow = document.querySelector(".gallery > p:first-of-type");
let rightArrow = document.querySelector(".gallery > p:last-of-type");


let scrollXDistance = imageContainer.offsetWidth;

leftArrow.addEventListener('click', (e) => { scroll(e, -scrollXDistance) });
rightArrow.addEventListener('click', (e) => { scroll(e, scrollXDistance) });


function scroll(e, scrollXDistance) {
    imageContainer.scrollBy(scrollXDistance, 0);
}

// "read more" functionality script

function expandiblePanelsInit() {
    let readMoreInputs = document.querySelectorAll("input.read-more");
    readMoreInputs.forEach(input => {
        let initialHeight = input.nextElementSibling.offsetHeight;
        input.checked = false;
        let realHeight = input.nextElementSibling.offsetHeight;

        if (realHeight > (initialHeight + 27)) {
            input.parentElement.style.paddingBottom = "6rem";
        } else {
            input.style.display = 'none'
        }
        input.nextElementSibling.style.maxHeight = `${realHeight}px`;
        input.checked = true;
    })
}

window.addEventListener("load", expandiblePanelsInit);