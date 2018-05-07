const content = document.querySelector('.section-features');
const threshold = content.offsetTop - 60;

const fixNav = () => {
    if(window.scrollY >= threshold) {
        document.body.classList.add('sticky-nav');
    } else {
        document.body.classList.remove('sticky-nav');
    }
}

window.addEventListener('scroll', fixNav);