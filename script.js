window.addEventListener("load", () => {
  const preloader = document.querySelector(".loader-style");
  preloader.classList.add("preload-finish");
});

let menuToggler = function () {
  let openMenu = document.querySelector(".menu-icon");
  let closeMenu = document.querySelector(".close");
  let mobileMenu = document.querySelector(".mobile-nav");
  let links = document.querySelectorAll(".mobile-nav-link");
  let body = document.querySelector("section");
  let header = document.querySelector("header");
  let overlay = document.querySelector(".overlayer");

  openMenu.addEventListener("click", () => {
    overlay.classList.add("overlay");
    mobileMenu.style.transform = "translate(0px)";
    document.style.opacity = "0.5";
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.transform = "translate(-100vw)";
    overlay.classList.remove("overlay");
  });

  overlay.addEventListener("click", () => {
    mobileMenu.style.transform = "translate(-100vw)";
    overlay.classList.remove("overlay");
  });
};

function scrollToTop() {
  window.scrollTo(0, 0);
}
