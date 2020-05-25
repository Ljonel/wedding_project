

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');


const clickOn = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active');
}
hamburger.addEventListener('click', clickOn);
