

const burger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const subMenu1 = document.querySelector('.submenu');
const subMenuItem = document.querySelector('.nav-item');
const item1 = document.getElementById('submenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// item1.addEventListener('click', e => {
//   subMenu1.classList.add('open');
// });


// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop < 80 || document.documentElement.scrollTop > 80) {
//         document.querySelector(".navbar").style.padding = "30px 10px";
//         document.querySelector(".navbar").style.opacity = "0.5";
//         document.getElementById("logo").style.fontSize = "25px";
//     } else {
//         document.querySelector(".navbar").style.padding = "80px 10px";
//         document.querySelector(".navbar").style.fontSize = "35px";
//         document.getElementById("navbar").style.opacity = "1";
//     }
// }