let imageContainer = document.getElementsByClassName("gallery-images")[0];
let leftArrow = document.querySelector(".gallery > p:first-of-type");
let rightArrow = document.querySelector(".gallery > p:last-of-type");


let scrollXDistance = imageContainer.offsetWidth;

leftArrow.addEventListener('click',(e)=> {scroll(e, -scrollXDistance)});
rightArrow.addEventListener('click',(e)=> {scroll(e, scrollXDistance)});


function scroll(e, scrollXDistance) {
    imageContainer.scrollBy(scrollXDistance,0);
}

// "read more" functionality script

let readMoreInputs = document.querySelectorAll("input.read-more");
readMoreInputs.forEach(input => {
    input.checked=false;
    var realHeight = input.nextElementSibling.offsetHeight;
    input.nextElementSibling.style.maxHeight = `${realHeight}px`;
    input.checked = true;
})