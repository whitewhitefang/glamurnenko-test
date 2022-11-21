const footerButton = document.querySelector('.footer__button');
const navbar = document.querySelector('.navigation__bar');

footerButton.addEventListener('click', function() {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
