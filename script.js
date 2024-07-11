document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.hero', { duration: 2000, origin: 'top', distance: '50px' });
    ScrollReveal().reveal('.features h3', { duration: 2000, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.features ul li', { duration: 2000, origin: 'right', distance: '50px', interval: 200 });
    ScrollReveal().reveal('.ingredients h3', { duration: 2000, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.ingredients ul li', { duration: 2000, origin: 'right', distance: '50px', interval: 200 });
    ScrollReveal().reveal('.testimonials h3', { duration: 2000, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.testimonials blockquote', { duration: 2000, origin: 'right', distance: '50px', interval: 200 });
    ScrollReveal().reveal('.how-to-use h3', { duration: 2000, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.how-to-use ol li', { duration: 2000, origin: 'right', distance: '50px', interval: 200 });
    ScrollReveal().reveal('.special-offer', { duration: 2000, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('.social-media', { duration: 2000, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('footer', { duration: 2000, origin: 'bottom', distance: '50px' });
});