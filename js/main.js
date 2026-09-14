const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});