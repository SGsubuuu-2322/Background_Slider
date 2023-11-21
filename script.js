const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBTn = document.getElementById("right");

let activeSlides = 0;

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlides].style.backgroundImage;
}
