document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navlinks = document.getElementById("navlinks");

  hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
  });
});
// Code from hamburger nav bar worked in class 