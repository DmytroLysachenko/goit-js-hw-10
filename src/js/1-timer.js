import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import notOk from '../img/notok.png';

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
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      buttonStart.classList.remove('btn-active');
      inputDate.classList.remove('input-active');
      iziToast.show({
        title: 'Error',
        message: 'Please choose date in the future',
        backgroundColor: 'red',
        theme: 'dark',
        color: 'red',
        iconUrl: notOk,
        position: 'topRight',
      });
      selectedDates[0] = Date.now();
      buttonStart.setAttribute('disabled', 'true');
    } else {
      userSelectedDate = selectedDates[0];
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
  inputDate.style.cursor = 'default';
  console.log(inputDate);
  const timerId = setInterval(() => {
    const diff = userSelectedDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(diff);
    daysCounter.textContent = addLeadingZero(days);
    hoursCounter.textContent = addLeadingZero(hours);
    minutesCounter.textContent = addLeadingZero(minutes);
    secondsCounter.textContent = addLeadingZero(seconds);
    if (diff <= 0) {
      clearInterval(timerId);
      daysCounter.textContent = addLeadingZero(0);
      hoursCounter.textContent = addLeadingZero(0);
      minutesCounter.textContent = addLeadingZero(0);
      secondsCounter.textContent = addLeadingZero(0);
    }
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
