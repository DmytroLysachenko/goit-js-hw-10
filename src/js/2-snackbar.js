const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
form.addEventListener('click', event => {
  if (event.target.nodeName === 'button') {
    event.preventDefault();
  }
});
console.log(delayInput);
