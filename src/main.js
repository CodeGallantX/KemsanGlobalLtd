function showSideBar() {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.remove('-translate-y-full');
  sidebar.classList.add('translate-y-0');
}

function hideSideBar() {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.remove('translate-y-0');
  sidebar.classList.add('-translate-y-full');
}



// Video Pop-up
function showVideoPopup() {
  const videoPopup = document.getElementById('videoPopup');
  const iframeElement = videoPopup.querySelector('iframe');
  const bodyElement = document.getElementsByTagName('body')[0];

  const src = iframeElement.getAttribute('src');
  iframeElement.setAttribute('src', src + '&autoplay=1');

  videoPopup.classList.remove('hidden');
  bodyElement.classList.add('overflow-y-hidden');
}

function hideVideoPopup() {
  const videoPopup = document.getElementById('videoPopup');
  const iframeElement = videoPopup.querySelector('iframe');
  const bodyElement = document.getElementsByTagName('body')[0];

  const src = iframeElement.getAttribute('src').replace('&autoplay=1', '');
  iframeElement.setAttribute('src', src);

  videoPopup.classList.add('hidden');
  bodyElement.classList.remove('overflow-y-hidden');
}


// Preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');

  preloader.style.opacity = '0';

  setTimeout(function() {
      preloader.style.display = 'none';
      content.style.display = 'block';
      document.body.style.overflow = 'auto';

      // Show the modal after preloader finishes
      showModal(); // Call showModal() to display the video modal
  }, 3500);
});

// Function to show the video modal
function showModal() {
  const modal = document.getElementById('videoModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// Close modal button
document.getElementById('closeModal').addEventListener('click', function () {
  const modal = document.getElementById('videoModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
});
