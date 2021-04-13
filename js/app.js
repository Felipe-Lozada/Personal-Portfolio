/* Menu Show & Hidden */ 
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

/* Show Menu */ 
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

/* Hide Menu */
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

/* Remove Menu */

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => navMenu.classList.remove('show');
navLink.forEach(l => l.addEventListener('click', linkAction));

/* Scroll, action, Active line */
const home = document.querySelector('#home__link');
const about = document.querySelector('#about__link');
const skills = document.querySelector('#skills__link');
const education = document.querySelector('#education__link');
const services = document.querySelector('#services__link');
const works = document.querySelector('#works__link');
const contact = document.querySelector('#contact__link');

home.addEventListener('click', () => {
    home.classList.add('active');
    about.classList.remove('active');
    skills.classList.remove('active');
    education.classList.remove('active');
    services.classList.remove('active');
    works.classList.remove('active');
    contact.classList.remove('active');

});

about.addEventListener('click', () => {
    home.classList.remove('active');
    about.classList.add('active');
    skills.classList.remove('active');
    education.classList.remove('active');
    services.classList.remove('active');
    works.classList.remove('active');
    contact.classList.remove('active');

});

skills.addEventListener('click', () => {
    home.classList.remove('active');
    about.classList.remove('active');
    skills.classList.add('active');
    education.classList.remove('active');
    services.classList.remove('active');
    works.classList.remove('active');
    contact.classList.remove('active');

});

education.addEventListener('click', () => {
    home.classList.remove('active');
    about.classList.remove('active');
    skills.classList.remove('active');
    education.classList.add('active');
    services.classList.remove('active');
    works.classList.remove('active');
    contact.classList.remove('active');

});

services.addEventListener('click', () => {
    home.classList.remove('active');
    about.classList.remove('active');
    skills.classList.remove('active');
    education.classList.remove('active');
    services.classList.add('active');
    works.classList.remove('active');
    contact.classList.remove('active');

});

works.addEventListener('click', () => {
    home.classList.remove('active');
    about.classList.remove('active');
    skills.classList.remove('active');
    education.classList.remove('active');
    services.classList.remove('active');
    works.classList.add('active');
    contact.classList.remove('active');

});

contact.addEventListener('click', () => {
    home.classList.remove('active');
    about.classList.remove('active');
    skills.classList.remove('active');
    education.classList.remove('active');
    services.classList.remove('active');
    works.classList.remove('active');
    contact.classList.add('active');

});
/* Cursor Dot*/
const sigueRaton = document.getElementById('sigueRaton').style;

window.addEventListener('mouseover', () => {
    sigueRaton.top = parseInt(window.event.pageY + 5) + "px";
    sigueRaton.left = parseInt(window.event.pageX + 5) + "px";
});