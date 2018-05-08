// Vars for fixed nav
const content = document.querySelector('.section-features');
const nav = document.querySelector('nav');
const threshold = content.offsetTop - 60;
// Vars for smooth scrolling
const anchors = document.querySelectorAll('header a');
//Vars for responsive navigation
const hamBtn = document.querySelector('.ham-btn');
const navList = document.querySelector('.main-nav');


// fixed nav logic
const fixNav = () => {
    if(window.scrollY >= threshold) {
        document.body.classList.add('sticky-nav');
    } else {
        document.body.classList.remove('sticky-nav');
    }
};

// scrolling logic
function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop - 60
    });
}

//responsive navigation
function navToggle() {
    hamBtn.classList.toggle('ham-btn--switch');
    navList.classList.toggle('nav--visible');
}

//add event listeners
anchors.forEach( anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        let elScrollTo = document.querySelector(this.getAttribute('href'));
        scrollIt(elScrollTo);
        if (anchor.hasAttribute('class')) { return; }
        navToggle();
    });
});

hamBtn.addEventListener('click', navToggle);

window.addEventListener('scroll', fixNav);