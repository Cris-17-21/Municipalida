/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Función para abrir el menú
function openMenu() {
    navMenu.classList.add('show-menu');
}

// Función para cerrar el menú
function closeMenu() {
    navMenu.classList.remove('show-menu');
}

// Event listener para abrir el menú cuando se hace clic en el botón de alternancia
if (navToggle) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Detener la propagación del evento para evitar interferencias
        openMenu();
    });
}

// Event listener para cerrar el menú cuando se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target)) {
        closeMenu();
    }
});

/* Menu Hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        closeMenu();
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-Menu')
    //when we click on each nav__link, we remove the show-menu cl
    closeMenu();
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the v.
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higter than 350 viewport height and the 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
})

sr.reveal('.home__img, .new__data, .care_img, .contact__content, .footer')
sr.reveal('.home___ data, .care__list, .contact__img', { delay: 500 })
sr.reveal('.new__card', { delay: 500, interval: 100 })
sr.reveal('.shop__card', { interval: 100 })