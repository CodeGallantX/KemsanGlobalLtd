const items = document.querySelectorAll('.carousel-item');
const controls = document.querySelectorAll('.carousel-control');
let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
    });
    controls.forEach((control, i) => {
        control.classList.toggle('bg-blue-600', i === index);
        control.classList.toggle('bg-gray-500', i !== index);
    });
}

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Initialize carousel with the first slide visible
showSlide(currentIndex);
