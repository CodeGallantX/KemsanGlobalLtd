function showSideBar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('translate-y-full');
    sidebar.classList.add('translate-y-0');
  }
  
  function hideSideBar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('translate-y-0');
    sidebar.classList.add('translate-y-full');
  }