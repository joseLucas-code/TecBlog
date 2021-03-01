const slides = document.querySelectorAll(".carousel-content");
const nextBTN = document.querySelector(".next-btn");
const prevBTN = document.querySelector(".prev-btn");
const dotContainer = document.querySelector(".dots");
const dots = document.querySelectorAll(".dot");
let totalSlides = slides.length - 1;
let currentSlideIndex = 0;

// mudar os slides

nextBTN.addEventListener("click", () => {
  currentSlideIndex === totalSlides
    ? (currentSlideIndex = 0)
    : ++currentSlideIndex;

  mudarSlide();
});

prevBTN.addEventListener("click", () => {
  currentSlideIndex === 0
    ? (currentSlideIndex = totalSlides)
    : --currentSlideIndex;

  mudarSlide();
});

let mudarSlide = () => {
  slides.forEach((slide) => {
    slide.classList.remove("currentSlide");
  });
  slides[currentSlideIndex].classList.add("currentSlide");

  //change activeDot from navigation dots
  let singleDot = document.querySelector("span.dot.dot-active");
  singleDot.classList.remove("dot-active");

  dotContainer.children[currentSlideIndex].classList.add("dot-active");
};

// criar os dots e alterar slides com os pontos/dots
function createNavigationDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
    dot.addEventListener("click", function () {
      currentSlideIndex = i;

      mudarSlide();
    });
  }

  dotContainer.children[0].classList.add("dot-active");
}

// auto play slide
function autoPlaySlides() {
  currentSlideIndex === totalSlides
    ? (currentSlideIndex = 0)
    : ++currentSlideIndex;

  mudarSlide();
}

// setInterval(function(){
//     autoPlaySlides()
// },5000)

createNavigationDots();
