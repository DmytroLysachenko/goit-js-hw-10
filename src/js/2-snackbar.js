import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import caution from '../img/caution.png';
import ok from '../img/ok.png';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputFulfilled = document.querySelector('input[value="fulfilled"]');
const inputRejected = document.querySelector('input[value="rejected"]');
console.log(inputDelay, inputFulfilled, inputRejected);
const makePromise = ({ delay, shouldResolve }) => {
  if (delay >= 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`Fulfilled promise in ${delay}ms`);
        } else {
          reject(`Rejected promise in ${delay}ms`);
        }
      }, delay);
    });
  } else {
    iziToast.show({
      title: 'Caution',
      message: 'Number should be positive',
      backgroundColor: 'orange',
      theme: 'dark',
      color: 'orange',
      iconUrl: caution,
      position: 'topRight',
    });
  }
};

const createOptions = () => {
  const options = {};
  options.delay = inputDelay.value;
  if (inputFulfilled.checked && !inputRejected.checked) {
    options.shouldResolve = true;
  }
  return options;
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const options = createOptions();
  makePromise(options)
    .then(value =>
      iziToast.show({
        title: 'OK',
        message: value,
        backgroundColor: 'green',
        theme: 'dark',
        color: 'green',
        iconUrl: ok,
        position: 'topRight',
      })
    )
    .catch(value =>
      iziToast.show({
        title: 'OK',
        message: value,
        backgroundColor: 'red',
        theme: 'dark',
        color: 'red',
        iconUrl: ok,
        position: 'topRight',
      })
    );
});
