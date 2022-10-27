let imageContainer = document.getElementsByClassName("gallery-images")[0];
let leftArrow = document.querySelector(".gallery > p:first-of-type");
let rightArrow = document.querySelector(".gallery > p:last-of-type");


let scrollXDistance = imageContainer.offsetWidth;

leftArrow.addEventListener('click',(e)=> {scroll(e, -scrollXDistance)});
rightArrow.addEventListener('click',(e)=> {scroll(e, scrollXDistance)});


function scroll(e, scrollXDistance) {
    imageContainer.scrollBy(scrollXDistance,0);
}