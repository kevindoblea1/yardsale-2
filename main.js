//variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//funcionalidad toggle 

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);

//funciones
function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}
function toggleMobilepMenu () {
    console.log('click')
    mobileMenu.classList.toggle('inactive');
}