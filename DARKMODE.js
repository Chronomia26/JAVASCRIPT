  function toggleDarkMode() {
      var body = document.body;
      var header = document.querySelector('header');
      var footer = document.querySelector('footer');
      var darkmode = document.getElementById('toggle-dark-button')

      if (!body.classList.contains('dark-mode')) {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
          header.classList.remove('lightmode');
          header.classList.add('darkmode');
          footer.classList.remove('lightmode');
          footer.classList.add('darkmode');
          darkmode.textContent = "DAY"
      } else {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
          header.classList.remove('darkmode');
          header.classList.add('lightmode');
          footer.classList.remove('darkmode');
          footer.classList.add('lightmode');
          darkmode.textContent = "NIGHT"
        }
  }