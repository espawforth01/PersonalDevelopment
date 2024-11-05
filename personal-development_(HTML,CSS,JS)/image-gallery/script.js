// Get all images in the gallery
const images = document.querySelectorAll('.gallery-image');

// Add event listener to each image
images.forEach((image) => {
    image.addEventListener('click', () => {
        // Get the modal and modal content elements
        const modal = document.getElementById('image-modal');
        const modalContent = document.getElementById('image-modal-content');
        const modalCaption = document.getElementById('image-modal-caption');

        // Set the modal content and caption
        modalContent.src = image.src;
        modalCaption.innerHTML = image.alt;

        // Show the modal
        modal.style.display = 'block';
    });
});

// Get the close button and add event listener
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    // Hide the modal
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
});

// Add event listener to the modal to close it when clicked outside
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('image-modal')) {
        document.getElementById('image-modal').style.display = 'none';
    }
});