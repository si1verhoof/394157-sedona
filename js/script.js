var mainNav = document.querySelector(".main-nav__mobile-menu-vision");
var navToggle = document.querySelector(".toggler");
var navClose = mainNav.querySelector(".main-nav__close-menu");
var navOpen = mainNav.querySelector(".toggler--open");

navToggle.classList.remove("main-nav__toggler--hidden");

navToggle.addEventListener("click", function() {
  mainNav.classList.toggle("main-nav__mobile-menu-vision--none");
  navToggle.classList.toggle("toggler--open");
  navToggle.classList.toggle("toggler--close");
})
