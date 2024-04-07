import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
console.log(inputs);
const makePromise = ({ delay, shouldResolve }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
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
  console.log(inputs[0].valueAsNumber);
  makePromise(options)
    .then(value =>
      iziToast.show({
        title: 'OK',
        message: value,
        backgroundColor: 'green',
        theme: 'dark', // dark
        color: 'green', // blue, red, green, yellow
        iconUrl: '../img/ok.svg',
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      })
    )
    .catch(value => {
      new Promise((resolve, reject) => {
        if (inputs[0].valueAsNumber >= 0) {
          resolve(
            iziToast.show({
              title: 'Error',
              message: value,
              backgroundColor: 'red',
              theme: 'dark', // dark
              color: 'red', // blue, red, green, yellow
              iconUrl: '../img/notok.svg',
              position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            })
          );
        } else {
          reject(
            iziToast.show({
              title: 'Caution',
              message: 'You forgot important data (number should be positive)',
              backgroundColor: 'orange',
              theme: 'dark', // dark
              color: 'orange', // blue, red, green, yellow
              iconUrl: '../img/achtung.svg',
              position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            })
          );
        }
      });
    });
});
