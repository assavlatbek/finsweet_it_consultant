// Auto Scroll Code

let container = document.querySelector('.main-footer');
let scrollDirection = 1;
let scrollSpeed = 1;

function autoScroll() {
    container.scrollLeft += scrollDirection * scrollSpeed;

    if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
        scrollDirection = -1;
    } else if (container.scrollLeft <= 0) {
        scrollDirection = 1;
    }

    setTimeout(autoScroll, 8);
}

window.onload = autoScroll;

// Dark & Light mode

let toggleSwitches = document.querySelectorAll('.toggle-checkbox');
toggleSwitches.forEach(function (toggle) {
    toggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });
});

// Auto Type

let typed = new Typed('.typing', {
    strings: ['1560+'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    backDelay: 1000

});
let typed2 = new Typed('.typing1', {
    strings: ['100+'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    backDelay: 1500

});
let typed3 = new Typed('.typing2', {
    strings: ['950+'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    backDelay: 900
});
let typed4 = new Typed('.typing3', {
    strings: ['10 yrs'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    backDelay: 1200
});

// Back to top

var backToTopButton = document.getElementById('back-to-top-btn');

// Show the button when scrolling down
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
