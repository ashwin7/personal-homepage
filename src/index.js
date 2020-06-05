import "./style.scss";
console.log("hello world!");
const mobileToggle = document.getElementById("nav-mobile-toggle");
const navEl = document.getElementById("navigation");
const navFill = document.getElementById("nav-filler");

function toggleNav() {
  navEl.classList.toggle("expanded");
  if (navEl.classList != "expanded") {
    navEl.blur();
  }
}
// When navEl receives focus it gets the expand class so keyboard users can see it...
navEl.addEventListener("focus", toggleNav);
// Clicking this invisible block will collapse the menu back down (in case it was an accident from a sighted user)
navFill.addEventListener("click", toggleNav);
// Mobile view can toggle menu open or closed
mobileToggle.addEventListener("click", toggleNav);
