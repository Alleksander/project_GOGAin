const hamburger = document.querySelector('.hamburger'),
      mobile = document.querySelector('.mobile'),
      closeElem = document.querySelector('.mobile__close')
      link = document.querySelector('.menu__item-link');

hamburger.addEventListener('click', () => {
    mobile.classList.add('active');
});

closeElem.addEventListener('click', () => {
    mobile.classList.remove('active');
});

/* link.addEventListener('click', () => {
    mobile.classList.remove('active');
}); */