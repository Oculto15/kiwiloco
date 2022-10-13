

const burger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const subMenu1 = document.querySelector('.submenu');
const subMenuItem = document.querySelector('.nav-item');
const item1 = document.getElementById('submenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
});


const navbar = document.getElementById("mynav");

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};

document.getElementById('currentyear').textContent = new Date().getFullYear();