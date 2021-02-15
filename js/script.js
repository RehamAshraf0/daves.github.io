const navBtn = document.querySelector(".nav__button");
const navigationNav = document.querySelector('.navigation__nav');

const toggleNavigation = function () {
    navigationNav.classList.toggle('navigation--opened');
};


navBtn.addEventListener('click', function () {
    toggleNavigation();
})