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



/*
// Advanced Properties Slider
const items = document.querySelectorAll('.item input[type="radio"]');
const contentDiv = document.querySelector('#city-content');
const allContents = document.querySelectorAll('.content');

items.forEach((item) => {
  item.addEventListener('change', () => {
    items.forEach(i => {
      const label = i.nextElementSibling;
      const content = document.querySelector(`.content_${i.value}`);

      if (i.checked) {
        // Scale the active thumbnail to be larger
        label.parentElement.style.transform = 'scale(1.3)';

        // Display corresponding content
        allContents.forEach(c => c.classList.add('hidden'));
        contentDiv.innerHTML = content.innerHTML;
      } else {
        // Scale inactive thumbnails smaller
        label.parentElement.style.transform = 'scale(1)';
      }
    });

    // Scroll to the active item
    const offsetTop = item.parentElement.offsetTop;
    const list = document.querySelector('ul.list');
    list.scrollTo({
      top: offsetTop - list.clientHeight / 2 + item.parentElement.clientHeight / 2,
      behavior: 'smooth'
    });
  });
});
*/

// const items = document.querySelectorAll('.item input[type="radio"]');
// const contents = document.querySelectorAll('.content');
// let activeContent = document.querySelector('.content.active');

// items.forEach((item) => {
//   item.addEventListener('change', () => {
//     const contentId = `#content_${item.value}`;
//     const newContent = document.querySelector(contentId);

//     // Handle sliding out the previous content
//     if (activeContent) {
//       activeContent.classList.remove('active');
//       activeContent.classList.add('exiting');
//     }

//     // Handle sliding in the new content
//     newContent.classList.remove('exiting');
//     newContent.classList.add('active');
//     activeContent = newContent;

//     // Scroll to the active thumbnail in the left zone
//     item.scrollIntoView({
//       behavior: 'smooth',
//       block: 'center'
//     });
//   });
// });

 // Function to animate the counter
