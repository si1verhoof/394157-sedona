var mainNav = document.querySelector(".main-nav__mobile-vision");
var navToggle = mainNav.querySelector(".main-nav__toggler");
var navClose = mainNav.querySelector(".main-nav__close-menu");

navToggle.classList.remove("main-nav__toggler--hidden");
navClose.classList.remove("main-nav__close-menu--hidden");
mainNav.classList.add("main-nav__mobile-menu-vision--none");

navToggle.addEventListener("click", function() {
  mainNav.classList.remove("main-nav__mobile-menu-vision--none");
})
