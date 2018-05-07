// Vars for fixed nav
const content = document.querySelector('.section-features');
const threshold = content.offsetTop - 60;
// Vars for smooth scrolling
const anchors = document.querySelectorAll('header a');
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

//add event listeners
anchors.forEach( anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        let elScrollTo = document.querySelector(this.getAttribute('href'));
        scrollIt(elScrollTo);
    });
});

window.addEventListener('scroll', fixNav);