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
  const videoElement = videoPopup.querySelector('video');
  const bodyElement = document.getElementsByTagName('body');

  videoElement.play();
  videoPopup.classList.remove('hidden');
  bodyElement.classList.add('overflow-y-hidden');
}

function hideVideoPopup() {
  const videoPopup = document.getElementById('videoPopup');
  const videoElement = videoPopup.querySelector('video');
  const bodyElement = document.getElementsByTagName('body');

  videoElement.pause();
  videoElement.currentTime = 0;
  videoPopup.classList.add('hidden');
  bodyElement.classList.remove('overflow-hidden');
}