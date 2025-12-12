document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // LightGallery Initialization (Only if gallery exists on page)
    const galleryElement = document.getElementById('lightgallery');
    if (galleryElement) {
        lightGallery(galleryElement, {
            speed: 500,
            mode: 'lg-fade',
            download: false
        });
    }
});