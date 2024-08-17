function showSideBar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');
  }
  
  function hideSideBar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('translate-x-full');
  }