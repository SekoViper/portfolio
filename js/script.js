const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector(".menu-items");
const linkItem = document.querySelectorAll(".menu-links");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  navMenu.classList.toggle("show-menu");
})

for(let link of linkItem){
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
}
