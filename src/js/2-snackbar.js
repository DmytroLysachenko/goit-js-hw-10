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
      iconUrl: '/achtung.png',
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
  console.log(inputs[0].valueAsNumber);
  makePromise(options)
    .then(value =>
      iziToast.show({
        title: 'OK',
        message: value,
        backgroundColor: 'green',
        theme: 'dark', // dark
        color: 'green', // blue, red, green, yellow
        iconUrl: '/ok.png',
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      })
    )
    .catch(value => {
      iziToast.show({
        title: 'OK',
        message: value,
        backgroundColor: 'green',
        theme: 'dark', // dark
        color: 'red', // blue, red, green, yellow
        iconUrl: '/ok.png',
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      });
    });
});
