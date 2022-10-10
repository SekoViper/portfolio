const toggler = document.querySelector('.toggler');
const navMenu = document.querySelector('.menu-items');
const linkItems = document.querySelectorAll('.menu-links');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  navMenu.classList.toggle('show-menu');
});

for(let i = 0; i < linkItems.length; i++){
  linkItems[i].addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    toggler.classList.toggle('active');
  });
}
