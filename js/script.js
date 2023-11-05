(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');
  var themeSwitcher = document.getElementById('theme-switcher');

  //set page dark/light mode to last specified by user or use prefers-colors-theme
  let settheme = 'light-theme';
  let savedtheme = localStorage.getItem('theme');

  //If there is a saved theme used that
  //also need to ensure that the saved theme is a valid option before use
  if(savedtheme != null && (savedtheme === 'light-theme' || savedtheme === 'dark-theme')) {
    //ensure that the saved theme is a valid option before use
    settheme = savedtheme;
  } else {
    //if no saved theme attempt to use user broswer preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      settheme = 'dark-theme';
    } 
    //if no browser preference default to light-theme
  }

  //set page theme
  document.body.setAttribute('class', settheme);


  //add listener event to sidebar toggle
  //uncheck checkbox when clicking outside sidebar
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
