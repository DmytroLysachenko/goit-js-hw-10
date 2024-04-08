import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
console.log(inputs);
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
      theme: 'dark', // dark
      color: 'orange', // blue, red, green, yellow
      iconUrl: '../img/achtung.png',
      position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    });
  }
};

const createOptions = () => {
  const options = {};
  options.delay = inputs[0].value;
  options.shouldResolve = inputs[1].checked;
  return options;
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const options = createOptions();
  makePromise(options).then(
    value =>
      iziToast.show({
        title: 'OK',
        message: value,
        backgroundColor: 'green',
        theme: 'dark',
        color: 'green',
        iconUrl: '../img/ok.png',
        position: 'topRight',
      }),
    err => {
      iziToast.show({
        title: 'OK',
        message: err,
        backgroundColor: 'red',
        theme: 'dark',
        color: 'red',
        iconUrl: '../img/ok.png',
        position: 'topRight',
      });
    }
  );
});
