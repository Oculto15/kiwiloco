const burger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');


burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    navMenu.classList.toggle('active')
})