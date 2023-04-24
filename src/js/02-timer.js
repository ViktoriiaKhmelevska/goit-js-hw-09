import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dataInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let selectedDate = null;
let id;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - Date.now() > 0) {
         selectedDate = selectedDates[0];
         startBtn.disabled = false;
        } else {
          Notify.failure("Please choose a date in the future");
      }
   },
};

flatpickr(dataInput, options);

startBtn.addEventListener('click', onStartClick);

function onStartClick() {
  startBtn.disabled = true;
  id=setInterval(() => {
    if (selectedDate - Date.now() < 0) {
      clearInterval(id);
    } else {
      convertMs(selectedDate - Date.now());
    }
    }, 1000);
}

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

    daysEl.textContent = days.toString().padStart(2,"0");
    hoursEl.textContent = hours.toString().padStart(2,"0");
    minutesEl.textContent = minutes.toString().padStart(2,"0");
    secondsEl.textContent = seconds.toString().padStart(2,"0");
  return { days, hours, minutes, seconds };
}
