//variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


//eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

//funciones
function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMobilepMenu () {
    mobileMenu.classList.toggle('inactive');
}
function toggleCarAside () {
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}