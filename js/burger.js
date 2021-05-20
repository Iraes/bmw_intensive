const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');
};

const closeMenu = () => {
    menuElem.classList.remove('menu-active');
    humburgerElem.classList.remove('humburger-menu-active');
};

humburgerElem.addEventListener('click', toggleMenu);
document.body.addEventListener('click', (event) =>{
    const target = event.target;
    console.log('target: ', target.closest('.menu'));
    if (!target.classList.contains('humburger-menu') & !target.closest('.menu')) closeMenu();
});