const hamburger = document.querySelector('.hamburger'),
      mobile = document.querySelector('.mobile'),
      closeElem = document.querySelector('.mobile__close'),
      menuOverlay = document.querySelector('.mobile__overlay');

hamburger.addEventListener('click', () => {
    mobile.classList.add('active');
});

closeElem.addEventListener('click', () => {
    mobile.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    mobile.classList.remove('active');
});