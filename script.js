window.addEventListener("load", () => {
  const preloader = document.querySelector(".loader-style");
  preloader.classList.add("preload-finish");
});

let menuToggler = function () {
  let openMenu = document.querySelector(".menu-icon");
  let closeMenu = document.querySelector(".close");
  let mobileMenu = document.querySelector(".mobile-nav");
  let links = document.querySelectorAll(".mobile-nav-link");
  let body = document.querySelector("body");

  openMenu.addEventListener("click", () => {
    mobileMenu.style.transform = "translate(0px)";
    openMenu.style.transform = "rotate(180deg)";
  });
  closeMenu.addEventListener("click", () => {
    mobileMenu.style.transform = "translate(-1000px)";
  });
};
