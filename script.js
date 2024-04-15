const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.header__menu-list');
const scrollOff = document.querySelector('body');
const closeMenu = document.querySelector('.header__menu-close');
const circleBtn = document.querySelector('.header__circle');
const services = document.querySelector('.services');

// open menu and delete scroll
burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  scrollOff.classList.toggle('hidden');
});
// close menu
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
  scrollOff.classList.remove('hidden');
});


// hiden work block
circleBtn.addEventListener('click', (event) => {
  services.classList.toggle('active');
  circleBtn.classList.toggle('opened');
  event.preventDefault();
});






