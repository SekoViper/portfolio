const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector(".menu-items");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  navMenu.classList.toggle("active");
})