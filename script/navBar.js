const burger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const subMenu1 = document.querySelector('.submenu');
const subMenuItem = document.querySelector('.nav-item');
const item1 = document.getElementById('submenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

item1.addEventListener('click', e => {
  subMenu1.classList.add('open');
});
