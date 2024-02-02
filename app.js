let intro = document.querySelector('.intro');
let logo = document.querySelector('.ani'); 
let logoSpan = document.querySelectorAll('.tion');
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, idx * 480);
        });
    }, 500);

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, idx * 480 + 500);
        });
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2500);
});window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, idx * 480);
        });
    }, 500);

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, idx * 480 + 500);
        });
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2500);
});
