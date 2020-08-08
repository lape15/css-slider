const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const btns = document.querySelectorAll(".btn");
const texts = document.querySelectorAll(".text");
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".burger");
let showMenu = false;
const box1 = document.querySelector(".about");
const box2 = document.querySelector(".services");
const box3 = document.querySelector(".products");
const box4 = document.querySelector(".partners");
const box5 = document.querySelector(".team");
const box6 = document.querySelector(".contact");

const slideImage = (n) => {
  slides.forEach((slide, index) => {
    if (index < n) {
      slide.classList.add("hide-slide");
    }

    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
    texts.forEach((text, index) => {
      if (index < n) {
        text.classList.add("hide-text");
      }
    });
    btns.forEach((btn, index) => {
      if (index < n) {
        btn.classList.add("hide-btn");
      }
    });
  });
  slides[n].classList.remove("hide-slide");
  dots[n].classList.add("active");
  texts[n].classList.remove("hide-text");
  btns[n].classList.remove("hide-btn");
};

prev.addEventListener("click", () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  slideImage(currentSlide);
});

next.addEventListener("click", () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  slideImage(currentSlide);
});

dots.forEach((doti, i) => {
  doti.addEventListener("click", () => {
    slideImage(i);
    currentSlide = i;
  });
});

document.addEventListener("wheel", (e) => {
  if (e.deltaY <= 0) {
    currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
    slideImage(currentSlide);
  } else if (e.deltaY > 0) {
    currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
    slideImage(currentSlide);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 40) {
    currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
    slideImage(currentSlide);
  } else if (e.keyCode === 38) {
    currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
    slideImage(currentSlide);
  }
});
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    showMenu = true;
    menuBtn.classList.add("right");

    // menuBtn.style.background = "rgba(229, 234, 249, 0.4)";
    box1.classList.add("shrink");
    box1.classList.remove("open");
    box2.classList.add("shrink-one");
    box3.classList.add("shrink-two");
    box4.classList.add("shrink-three");
    box5.classList.add("shrink-four");
    box6.classList.add("shrink-five");
  } else {
    hamburger.classList.remove("open");
    menuBtn.classList.remove("right");
    showMenu = false;
    box1.classList.remove("shrink");

    box2.classList.remove("shrink-one");
    box3.classList.remove("shrink-two");
    box4.classList.remove("shrink-three");
    box5.classList.remove("shrink-four");
    box6.classList.remove("shrink-five");
  }
}
