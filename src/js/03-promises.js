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
        resolve();
      } else {
        reject();
      }
    }, delayVal);
  })
};
  
function onSubmit(evt) {

  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;

  stepVal = Number(step.value);
  delayVal = Number(delay.value);
  amountVal = amount.value;

  for (let position = 1; position <= amountVal; position++) {
  createPromise(position, delayVal)
  .then(resolve => Notify.success(`✅ Fulfilled promise ${position} in ${delayVal}ms`))
  .catch(reject => Notify.failure(`❌ Rejected promise ${position} in ${delayVal}ms`));
  delayVal += stepVal;
  };
  };
