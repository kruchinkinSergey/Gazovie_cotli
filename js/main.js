let time = 1055514;

const timerElems = document.querySelectorAll('#taimer'),
  orderBtn = document.querySelectorAll('.order__btn'),
  applicationContent = document.getElementsByClassName('application__content'),
  application = document.querySelector('.application'),
  closeBtn = document.querySelectorAll('.close__btn'),
  headerBtn = document.querySelector('.header__btn'),
  headerMenu = document.querySelector('.header__menu');


setInterval(updateCountdown, 1000);

function updateCountdown() {
    let days = Math.floor(time/86400);

    days = days < 10 ? '0' + days:
    days;

    let hours = Math.floor((time - 86400 * days)/3600);

    hours = hours < 10 ? '0' + hours:
    hours;

    let minutes = Math.floor((time - 86400 * days - 3600 * hours) / 60);

    minutes = minutes < 10 ? '0' + minutes:
    minutes;

    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds:
    seconds;

    timerElems[0].innerHTML = `${days}`;
    timerElems[1].innerHTML = `${hours}`;
    timerElems[2].innerHTML = `${minutes}`;
    timerElems[3].innerHTML = `${seconds}`;

    time > 0 ? time--: time = 0;
};


orderBtn.forEach((btn) => {
    btn.addEventListener('click', ()=> {
      applicationContent[0].classList.add('application__show'),
      application.classList.add('application__overlay');
    });
});

headerBtn.addEventListener('click', ()=> {
  headerMenu.classList.add('header__menu-show');
});  

closeBtn.forEach((btn) => {
  btn.addEventListener('click', ()=>{
    applicationContent[0].classList.remove('application__show'),
    application.classList.remove('application__overlay');
    headerMenu.classList.remove('header__menu-show');
  });
});


const cotliSwiper = new Swiper('.cotli__swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 28,

  pagination: {
    el: '.cotli__pagination',
    clickable: true,
  },

  slidesPerView: 1.6,
});

const boilerySwiper = new Swiper('.boilery__swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 28,

  pagination: {
    el: '.boilery__pagination',
    clickable: true,
  },

  slidesPerView: 1.6,
});

const equipmentSwiper = new Swiper('.equipment__swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 40,

  slidesPerView: 1.6,
});