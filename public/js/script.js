(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');
  var themeSwitcher = document.getElementById('theme-switcher');

  //set page dark/light mode to last specified by user or default to light
  let savedtheme = localStorage.getItem('theme') || 'light-theme';
  document.body.setAttribute('class', savedtheme);


  //add listener event to sidebar toggle
  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);

  //add button functionality to themeswitcher
  themeSwitcher.onclick = function() {
    if(document.body.getAttribute('class') === 'light-theme') {
      //set theme
      document.body.setAttribute('class', 'dark-theme');
      //save new preference
      localStorage.setItem('theme', 'dark-theme');
    }
    else {
      //set theme
      document.body.setAttribute('class', 'light-theme');
      //save new preference
      localStorage.setItem('theme', 'light-theme');
    }
  }
})(document);
