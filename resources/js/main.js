// Vars for fixed nav
const content = document.querySelector('.section-features');
const nav = document.querySelector('nav');
const thresholdFeatures = content.offsetTop - 60; //minus height of the nav bar
// Vars for smooth scrolling
const anchors = document.querySelectorAll('header a');
// Vars for responsive navigation
const hamBtn = document.querySelector('.ham-btn');
const navList = document.querySelector('.main-nav');
// Vars for animation
const features = document.querySelectorAll('.section-features .row div');
const thresholdSteps = document.querySelector('.section-steps').offsetTop - 80;
const thresholdPlans = document.querySelector('.section-plans').offsetTop - 100;

// fixed nav logic and animations
const fixNav = () => {
    hamBtn.classList.remove('ham-btn--switch');
    navList.classList.remove('nav--visible');
    // make nav fixed and animate features
    if(window.scrollY >= thresholdFeatures) {
        document.body.classList.add('sticky-nav');
        features.forEach( el => {
            el.classList.add('animated', 'fadeIn');
        });
    } else {
        document.body.classList.remove('sticky-nav');
    }
    // animate phone image
    if (window.scrollY >= thresholdSteps) {
        document.querySelector('.app-screen').classList.add('animated', 'fadeInUp');
    }
    // animate premium plan
    if (window.scrollY >= thresholdPlans) {
        document.querySelector('.plan-box').classList.add('animated', 'pulse');
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

// responsive navigation
function navToggle() {
    hamBtn.classList.toggle('ham-btn--switch');
    navList.classList.toggle('nav--visible');
}

// add event listeners
anchors.forEach( anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        let elScrollTo = document.querySelector(this.getAttribute('href'));
        scrollIt(elScrollTo);
        //Hide nav only if anchors inside nav bar were clicked
        if (anchor.hasAttribute('class')) { return; }
        navToggle();
    });
});

hamBtn.addEventListener('click', navToggle);

window.addEventListener('scroll', fixNav);