// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-top button functionality
let backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 800,
    delay: 200
});

// Reveal elements on scroll
ScrollReveal().reveal('.profile-image img, .about-content h2, .about-content p, #projects h2, .project-card, #skills h2, .skill-category, #education h2, .education-item, #contact h2, #contact p', {
    origin: 'bottom'
});
