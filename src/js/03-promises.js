import { Notify } from 'notiflix/build/notiflix-notify-aio';

let delayVal;
let amountVal;
let stepVal;
let startPoint=0;

const form = document.querySelector('.form');

form.addEventListener("submit", onSubmit);

function createPromise(position, delayVal) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delayVal});
      } else {
        reject({position, delayVal});
      }
    }, delayVal);
  })
};
  
function onSubmit(evt) {

  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;

  delayVal = Number(delay.value);
  stepVal = Number(step.value);
  amountVal = amount.value;
  startPoint = delayVal;
  
  for (let i = 1; i <= amountVal; i++) {
      createPromise(i, delayVal)
  .then(resolve => Notify.success(`✅ Fulfilled promise ${i} in ${startPoint+(i-1)*stepVal}ms`))
    .catch(reject => Notify.failure(`❌ Rejected promise ${i} in ${startPoint+(i-1)*stepVal}ms`));
          delayVal += stepVal;
  };
  };
