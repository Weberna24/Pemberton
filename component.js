const menu = document.querySelector('#menu-bar');
const navbarEl = document.querySelector('.navbar-menu');
const btnWedding = document.getElementById('wedding');
const btnBirthday = document.getElementById('birthday');
const btnCocktail = document.getElementById('cocktail');
const btnSport = document.getElementById('sport');
const btnFundraiser = document.getElementById('fundraiser');
const btnBaby = document.getElementById('baby');
const btnGraduation = document.getElementById('graduation');
const btnWorkshop = document.getElementById('workshop');
const btnDinner = document.getElementById('dinner');
const body = document.querySelector('body');
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector('.close');
const eventBox = document.querySelector('.event-box');
const eventText = document.querySelector('.event-text');
const cover = document.querySelector('.cover');
const eventSection = document.querySelector('.event-section');
const footer = document.querySelector('.footer');
let title = document.querySelector('.event-title');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbarEl.classList.toggle('active');
    body.classList.toggle("active");
})

var swiper = new Swiper("#menu-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide:true,
    fade: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
      el: "swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    }
  });


var swiper = new Swiper("#mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});

btnWedding.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Wedding";
    eventText.innerHTML = wedding;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});

btnBirthday.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Birthday Party";
    eventText.innerHTML = birthday;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});

btnCocktail.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Cocktail Party";
    eventText.innerHTML = cocktail;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});

btnBaby.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Baby Shower";
    eventText.innerHTML = baby;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});

btnSport.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Sporting Event";
    eventText.innerHTML = sport;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});

btnFundraiser.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Fundraiser";
    eventText.innerHTML = fundraiser;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});

btnGraduation.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Graduation Ceremony";
    eventText.innerHTML = graduation;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});

btnWorkshop.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Workshop";
    eventText.innerHTML = workshop;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});

btnDinner.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Dinner Party";
    eventText.innerHTML = dinner;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});



overlay.addEventListener('click', (e) => {
    body.classList.remove("active");
});

btnClose.addEventListener('click', (e) =>{
    overlay.classList.remove("active");
    eventBox.classList.remove("active");
    navbarEl.classList.remove("active");
})
  