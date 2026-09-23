const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});