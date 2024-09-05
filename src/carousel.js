const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicators = document.querySelectorAll('[data-slide]');

let currentIndex = 0;
let autoplayInterval;
const autoplayDelay = 5000; 

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;

  const currentSlideText = slides[index].querySelector('h2');
  currentSlideText.classList.add('opacity-100');

  Array.from(slides).forEach((slide, i) => {
    if (i !== index) {
      const slideText = slide.querySelector('h2');
      slideText.classList.remove('translate-x-full');
    }
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('bg-gray-100', i === index);
    indicator.classList.toggle('w-4', i === index);
  });

  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % totalSlides;
  showSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(prevIndex);
}

// Autoplay function
function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, autoplayDelay);
}

// Stop autoplay temporarily when interacting with the buttons
function stopAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

prevButton.addEventListener('click', () => {
  stopAutoplay();
  prevSlide();
});

nextButton.addEventListener('click', () => {
  stopAutoplay();
  nextSlide();
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    stopAutoplay();
    const slideIndex = parseInt(indicator.dataset.slide);
    showSlide(slideIndex);
  });
});

showSlide(currentIndex);
startAutoplay();




/*

//  Properties Slider
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

*/