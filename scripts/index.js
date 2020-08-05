const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const btns = document.querySelectorAll(".btn");

const texts = document.querySelectorAll(".text");

const slideImage = (n) => {
  slides.forEach((slide, index) => {
    slide.style.top = "-550px";
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
    texts.forEach((text, index) => {
      text.style.opacity = "0";
      text.style.transform = "translateY(70px)";
    });
    btns.forEach((btn, index) => {
      btn.style.transform = "translateY(40px)";
      btn.style.opacity = "0";
    });
  });
  slides[n].style.top = "0";
  dots[n].classList.add("active");
  texts[n].style.opacity = "100";
  texts[n].style.transform = "translateY(20px)";
  btns[n].style.transform = "translateY(20px)";
  btns[n].style.opacity = "100";
};

prev.addEventListener("click", () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  slideImage(currentSlide);
});

next.addEventListener("click", () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  slideImage(currentSlide);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideImage(i);
    currentSlide = i;
  });
});
