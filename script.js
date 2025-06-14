document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Enable smooth scroll
            });
        });
    });
});