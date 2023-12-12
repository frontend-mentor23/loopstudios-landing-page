const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("hide-page-content");
})

document.querySelectorAll(".nav__list").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("hide-page-content");
}))