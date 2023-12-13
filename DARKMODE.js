  function toggleDarkMode() {
      var body = document.body;
      var header = document.querySelector('header');
      var footer = document.querySelector('footer');
      var darkmode = document.getElementById('toggle-dark-button')
      var left = document.getElementById('left');
      var right = document.getElementById('right');
      var side = document.getElementById('side');
      var title = document.getElementById('main_title');
      var button = document.getElementById('side_button')

      if (body.classList.contains('light-mode')) {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
          header.classList.remove('light-header-footer');
          header.classList.add('dark-header-footer');
          header.classList.remove('light-border');
          header.classList.add('dark-border');
          footer.classList.remove('light-border');
          footer.classList.add('dark-border');
          footer.classList.remove('light-header-footer');
          footer.classList.add('dark-header-footer');
          left.classList.remove('light-text');
          left.classList.add('dark-text');
          right.classList.remove('light-text');
          right.classList.add('dark-text');
          side.classList.add('dark-border');
          side.classList.remove('light-border');
          title.classList.remove('light-title');
          title.classList.add('dark-title');
          darkmode.textContent = "LIGHT"
      } else {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
          header.classList.remove('dark-header-footer');
          header.classList.add('light-header-footer');
          header.classList.add('light-border');
          header.classList.remove('dark-border');
          footer.classList.add('light-border');
          footer.classList.remove('dark-border');
          footer.classList.remove('dark-header-footer');
          footer.classList.add('light-header-footer');
          left.classList.add('light-text');
          left.classList.remove('dark-text');
          right.classList.add('light-text');
          right.classList.remove('dark-text');
          side.classList.add('light-border');
          side.classList.remove('dark-border');
          title.classList.add('light-title');
          title.classList.remove('dark-title');
          darkmode.textContent = "DARK"
        }
  }