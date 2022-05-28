const hamburger = document.querySelector('.hamburger'),
      mobile = document.querySelector('.mobile'),
      closeElem = document.querySelector('.mobile__close'),
      menuOverlay = document.querySelector('.mobile__overlay');

/* const closeModal = (element) => {
    element.classList.remove('active');
}

hamburger.addEventListener('click', () => {
    mobile.classList.add('active');
});

closeElem.addEventListener('click', closeModal(mobile));

menuOverlay.addEventListener('click', closeModal(mobile)); */

hamburger.addEventListener('click', () => {
    mobile.classList.add('active');
});

closeElem.addEventListener('click', () => {
    mobile.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    mobile.classList.remove('active');
});