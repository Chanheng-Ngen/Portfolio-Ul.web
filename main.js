document.addEventListener('DOMContentLoaded', () => {
  const homePage = document.getElementById('home-page');
  const infoPage = document.getElementById('info-page');
  const educationPage = document.getElementById('education-page');
  const experiencePage = document.getElementById('experience-page');
  const blogPage = document.getElementById('blog-page');

  const homeButton = document.querySelector('.list-Vbutton li:nth-child(1) a');
  const infoButton = document.querySelector('.list-Vbutton li:nth-child(2) a');
  const educationButton = document.querySelector(
    '.list-Vbutton li:nth-child(3) a'
  );
  const experienceButton = document.querySelector(
    '.list-Vbutton li:nth-child(4) a'
  );
  const blogButton = document.querySelector('.list-Vbutton li:nth-child(5) a');

  function showPage(pageToShow) {
    homePage.style.display = 'none';
    infoPage.style.display = 'none';
    educationPage.style.display = 'none';
    experiencePage.style.display = 'none';
    blogPage.style.display = 'none';

    pageToShow.style.display = 'block';
  }

  showPage(homePage);

  homeButton.addEventListener('click', function (event) {
    event.preventDefault();
    showPage(homePage);
  });

  infoButton.addEventListener('click', function (event) {
    event.preventDefault();
    showPage(infoPage);
  });

  educationButton.addEventListener('click', function (event) {
    event.preventDefault();
    showPage(educationPage);
  });

  experienceButton.addEventListener('click', function (event) {
    event.preventDefault();
    showPage(experiencePage);
  });

  blogButton.addEventListener('click', function (event) {
    event.preventDefault();
    showPage(blogPage);
  });

  const version = '1.0.0';
  const versionElement = document.getElementById('version');
  if (versionElement) {
    versionElement.innerHTML = `Version ${version}`;
  }
});
