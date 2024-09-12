//  // Carousel images
//  const images = [
//     "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-2.jpg?updatedAt=1726059406429",
//     "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-1.jpg?updatedAt=1726059405688",
//     "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-3.jpg?updatedAt=1726059405688"
//   ];

//   let currentIndex = 0;

//   const carouselImage = document.getElementById('carouselImage');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');

//   // Function to update the carousel image
//   function updateImage() {
//     carouselImage.src = images[currentIndex];
//   }

//   // Show next image
//   nextBtn.addEventListener('click', function() {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateImage();
//   });

//   // Show previous image
//   prevBtn.addEventListener('click', function() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateImage();
//   });


  // Carousel images
  const images = [
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-2.jpg?updatedAt=1726059406429",
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-1.jpg?updatedAt=1726059405688",
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-night-2.jpg?updatedAt=1726059406708",
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-night-wide.jpg?updatedAt=1726059405457",
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-night-3.jpg?updatedAt=1726059406090",
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-night-1.jpg?updatedAt=1726059406580",
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-up.jpg?updatedAt=1726059409521",
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-day-wide.jpg?updatedAt=1726059405341",
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-day-angle-2.jpg?updatedAt=1726059406872",
    "https://ik.imagekit.io/mshcgnjju/Kemsan/kh-day-angle.jpg?updatedAt=1726059406553",
  ];

  let currentIndex = 0;
  const carouselImage = document.getElementById('carouselImage');
  const dots = document.querySelectorAll('.dot');
  
  // Function to update the carousel image and pagination dots with morph effect
  function updateCarousel() {
    // Remove active class to trigger morph-out transition
    carouselImage.classList.remove('active');
    
    setTimeout(() => {
      // Update the image source
      carouselImage.src = images[currentIndex];
      
      // Re-add active class for morph-in effect
      carouselImage.classList.add('active');
      
      // Update pagination dots
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
      
    }, 500); // Sync delay to half the transition time for a smooth morph
  }

  // Auto carousel function
  function autoCarousel() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  // Start auto-carousel every 5 seconds
  setInterval(autoCarousel, 3000);
  
  // Initialize carousel with the first image and dot active
  updateCarousel();