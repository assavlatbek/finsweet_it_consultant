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

// Optional: Add event listener to toggle multiple elements
let toggleSwitches = document.querySelectorAll('.toggle-checkbox');
toggleSwitches.forEach(function (toggle) {
    toggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });
});
