import { Notify } from 'notiflix/build/notiflix-notify-aio';

let position=1;
let delayVal;
let amountVal;
const form = document.querySelector('.form');

form.addEventListener("submit", onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notify.success`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(Notify.failure`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, 200);
  })
};
  
function onSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;

  delayVal = delay.value * step.value;
  amountVal = Number(amount.value);

  for (let i = 1; i <= amountVal; i++) {
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    position++;
  };
  };
