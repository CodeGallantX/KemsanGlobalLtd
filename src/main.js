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
  preloader.style.opacity = '0';
  setTimeout(function() {
      preloader.style.display = 'none';
  }, 500); 
});
