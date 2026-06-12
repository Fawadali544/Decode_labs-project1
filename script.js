// Simple JavaScript to handle the responsive mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the menu on small screens
        navLinks.classList.toggle('active');

        // Toggle icon between hamburger and close
        if (navLinks.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '✕';
        } else {
            mobileMenuBtn.innerHTML = '☰';
        }
    });
});