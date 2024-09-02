const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicators = document.querySelectorAll('[data-slide]');

let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;

  // Animate text on the current slide
  const currentSlideText = slides[index].querySelector('h2');
  currentSlideText.classList.add('opacity-100');

  // Reset text animation on all other slides
  Array.from(slides).forEach((slide, i) => {
    if (i !== index) {
      const slideText = slide.querySelector('h2');
      slideText.classList.remove('opacity-100');
    }
  });

  // Update indicators
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('bg-gray-100', i === index);
    indicator.classList.toggle('w-4', i === index);
  });

  currentIndex = index;
}

prevButton.addEventListener('click', () => {
  const nextIndex = (currentIndex - 1 + totalSlides) < 0 ? totalSlides - 1 : (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(nextIndex);
});

nextButton.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % totalSlides;
  showSlide(nextIndex);
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    const slideIndex = parseInt(indicator.dataset.slide);
    showSlide(slideIndex);
  });
});

// Initialize the first slide
showSlide(currentIndex);





// // Properties Slider
// const slider = document.getElementById('slider');
//         const slides = slider.children;
//         const totalSlides = slides.length;
//         let currentIndex = 0;
//         const intervalTime = 5000;

//         function showSlide(index) {
//             slider.style.transform = `translateX(-${index * 100}%)`;
//         }

//         function nextSlide() {
//             currentIndex = (currentIndex + 1) % totalSlides;
//             showSlide(currentIndex);
//         }

//         function prevSlide() {
//             currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//             showSlide(currentIndex);
//         }

//         document.getElementById('next').addEventListener('click', nextSlide);
//         document.getElementById('prev').addEventListener('click', prevSlide);

//         setInterval(nextSlide, intervalTime);