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
    slide.style.top = "-580px";
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

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log("clicked");
  if (!showMenu) {
    hamburger.classList.add("open");
    showMenu = true;
    menuBtn.classList.add("right");
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
    box1.classList.add("open");
    box2.classList.remove("shrink-one");
    box3.classList.remove("shrink-two");
    box4.classList.remove("shrink-three");
    box5.classList.remove("shrink-four");
    box6.classList.remove("shrink-five");
  }
}
