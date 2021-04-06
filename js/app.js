/* Menu Show & Hidden */ 
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

/* Show Menu */ 
toggleMenu.addEventListener('click', (ev) => {
    navMenu.classList.toggle('show');
});

/* Hide Menu */
closeMenu.addEventListener('click', (ev) => {
    navMenu.classList.remove('show');
});

/* Remove Menu */

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => navMenu.classList.remove('show');
navLink.forEach(l => l.addEventListener('click', linkAction));

/* Scroll, action, Active line */

const sections = document.querySelectorAll('section[id]');

const scrollActive = (ev) => { 
    const scrollY = window.pageYOffset;
    sections.forEach( current => {
        console.log(current);
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY> sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a [href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a [href*=' + sectionId + ']').classList.remove('active')
        }

    });
}

window.addEventListener('scroll', scrollActive);

/* Cursor Dot*/
const sigueRaton = document.getElementById('sigueRaton').style;

const seguir = () => {
  sigueRaton.top = parseInt(window.event.pageY + 5) + "px";
  sigueRaton.left = parseInt(window.event.pageX + 5) + "px";
}

window.addEventListener('mouseover', seguir);