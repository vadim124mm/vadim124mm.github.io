var slider = document.getElementsByClassName("b-slide");
var currentSlide = 0;


function nextSlide(){
    slider[currentSlide].className ="b-slide";
    currentSlide = (currentSlide+1)%slider.length;
    slider[currentSlide].className = "b-slide b-slide__current";
}
var slideInterval = setInterval(nextSlide, 3500);
console.log(slider[0].className);