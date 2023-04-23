import { Notify } from 'notiflix/build/notiflix-notify-aio';

let delayVal;
let amountVal;
let stepVal;

const form = document.querySelector('.form');

form.addEventListener("submit", onSubmit);

function createPromise(position, delayVal) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delayVal}ms`));
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delayVal}ms`));
      }
    }, delayVal);
  })
};
  
function onSubmit(evt) {

  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;

  stepVal = step.value;
  delayVal = delay.value;
  amountVal = amount.value;

  for (let i = 1; i <= amountVal; i++) {
  createPromise(i, delayVal)
  .then(data => console.log(data))
  .catch(err =>console.log(err));
  delayVal += stepVal;
  };
  };
