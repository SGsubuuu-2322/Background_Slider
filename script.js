// This is script file for this project written in JS tech...
// This some HTML elements captured in some constants for further DOM manipulation...
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlides = 0;

// This script code is for button event listening...
rightBtn.addEventListener("click", () => {
  activeSlides++;
  if (activeSlides > slides.length - 1) {
    activeSlides = 0;
  }
  setBgToBody();
  setActiveSlides();
});
leftBtn.addEventListener("click", () => {
  activeSlides--;
  if (activeSlides < 0) {
    activeSlides = slides.length - 1;
  }
  setBgToBody();
  setActiveSlides();
});

setBgToBody();

// This is for setting body background image dynamically...
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlides].style.backgroundImage;
}

// This is for setting slide
function setActiveSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlides].classList.add("active");
}
