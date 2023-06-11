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

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Auto Dark Mode Alert

const closeBtn = document.querySelector('.remove-perent')

closeBtn.addEventListener('click', function (e) {
    const target = e.target
    const perent = target.parentElement.parentElement
    perent.style.display = 'none';
})

const ligt_mode_btn = document.querySelector('.ligt-mode-btn')
const dark_mode_btn = document.querySelector('.dark-mode-btn')

ligt_mode_btn.addEventListener('click', function () {
    document.body.classList.remove('dark-mode')
})


dark_mode_btn.addEventListener('click', function () {
    document.body.classList.add('dark-mode')
    closeBtn.classList.add('btn-white')
})