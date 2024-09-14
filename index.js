const tabs = document.querySelectorAll('.window')

document.querySelectorAll('.navigation__button').forEach(e => {
  e.addEventListener('click', function (el) {
    tabs.forEach(tab => {
      tab.classList.remove('window_active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('window_active')

      if (tab.getAttribute('name') === el.target.id) {
        tab.classList.add('window_active');
      }
    })
  })
});