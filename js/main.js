let time = 1055514;

const daysEl = document.getElementById('days'),
  hoursEl = document.getElementById('hours'),
  minutesEl = document.getElementById('minutes'),
  secondsEl = document.getElementById('seconds'),
  orderBtn = document.querySelectorAll('.order__btn'),
  applicationContent = document.getElementsByClassName('application__content'),
  application = document.querySelector('.application'),
  closeBtn = document.querySelector('.close__btn');

console.log(application)
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

    daysEl.innerHTML = `${days}`;
    hoursEl.innerHTML = `${hours}`;
    minutesEl.innerHTML = `${minutes}`;
    secondsEl.innerHTML = `${seconds}`;

    time > 0 ? time--: time = 0;
};


orderBtn.forEach((btn) => {
    btn.addEventListener('click', ()=> {
      applicationContent[0].classList.add('show'),
      application.classList.add('application__overlay');
    });
});

closeBtn.addEventListener('click', ()=>{
    applicationContent[0].classList.remove('show'),
    application.classList.remove('application__overlay');
});
