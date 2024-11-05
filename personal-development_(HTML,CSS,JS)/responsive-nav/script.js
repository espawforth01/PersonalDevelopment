// Get the navigation toggle element
const navToggle = document.querySelector('.nav-toggle');

// Get the navigation links element
const navLinks = document.querySelector('.nav-links');

// Add event listener to the navigation toggle
navToggle.addEventListener('click', () => {
    // Toggle the 'show' and 'hide' classes on the navigation links
    navLinks.classList.toggle('show');
    navLinks.classList.toggle('hide');
});