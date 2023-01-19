$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.svg"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});

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

//Remove active classes

// Get the container element
var btnContainer = document.getElementById("donation__btns");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn_mini");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("btn_mini-active");
    current[0].className = current[0].className.replace(" btn_mini-active", "");
    this.className += " btn_mini-active";
  });
}

/* var btnSubscriptionContainer = document.getElementById("userSubscription");
var btnSubscription = btnSubscriptionContainer.getElementsByClassName("products__group-btn");
for (var i = 0; i < btns.length; i++) {
    btnSubscription[i].addEventListener("click", function() {
      var current = btnSubscriptionContainer.getElementsByClassName("products__group-btn_active");
      current[0].className = current[0].className.replace(" products__group-btn_active", "");
      this.className += " products__group-btn_active";
    });
} */

/* var charterContainer = document.getElementById("charter");
var charter = charterContainer.getElementsByClassName("btn_white12");
for (var i = 0; i < charter.length; i++) {
    charter[i].addEventListener("click", function() {
      var current = charterContainer.getElementsByClassName("btn_white12-active");
      current[0].className = current[0].className.replace(" btn_white12-active", "");
      this.className += " btn_white12-active";
    });
} */