import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = 0;
const buttonStart = document.querySelector('[data-start]');
const inputDate = document.querySelector('#datetime-picker');
inputDate.classList.add('input');
const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');

buttonStart.setAttribute('disabled', 'true');
flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 2,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      buttonStart.classList.remove('btn-active');
      inputDate.classList.remove('input-active');
      iziToast.show({
        id: null,
        class: '',
        title: 'Error',
        titleColor: '',
        titleSize: '',
        titleLineHeight: '',
        message: 'Illegal operation',
        messageColor: '',
        messageSize: '',
        messageLineHeight: '',
        backgroundColor: 'red',
        theme: 'dark', // dark
        color: 'red', // blue, red, green, yellow
        icon: '',
        iconText: '',
        iconColor: '',
        iconUrl: '../img/pngegg.png',
        image: '',
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: false,
        close: true,
        closeOnEscape: false,
        closeOnClick: false,
        displayMode: 0, // once, replace
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        target: '',
        targetFirst: true,
        timeout: 5000,
        rtl: false,
        animateInside: true,
        drag: true,
        pauseOnHover: true,
        resetOnHover: false,
        progressBar: true,
        progressBarColor: '',
        progressBarEasing: 'linear',
        overlay: false,
        overlayClose: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown',
        buttons: {},
        inputs: {},
        onOpening: function () {},
        onOpened: function () {},
        onClosing: function () {},
        onClosed: function () {},
      });
      selectedDates[0] = new Date(Date.now());
      buttonStart.setAttribute('disabled', 'true');
    } else {
      userSelectedDate = selectedDates[0];
      console.log(userSelectedDate);
      buttonStart.removeAttribute('disabled');
      buttonStart.classList.add('btn-active');
      inputDate.classList.add('input-active');
    }
  },
});

buttonStart.addEventListener('click', () => {
  buttonStart.setAttribute('disabled', 'true');
  buttonStart.classList.remove('btn-active');
  inputDate.setAttribute('disabled', 'true');
  inputDate.classList.remove('input-active');
  const timerId = setInterval(() => {
    const diff = userSelectedDate - Date.now();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const { days, hours, minutes, seconds } = convertMs(diff);
    daysCounter.textContent = addLeadingZero(days);
    hoursCounter.textContent = addLeadingZero(hours);
    minutesCounter.textContent = addLeadingZero(minutes);
    secondsCounter.textContent = addLeadingZero(seconds);
  });
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};