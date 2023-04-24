const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body')

let timerId;
stop.disabled = true;

start.addEventListener("click", () => {
  timerId = setInterval(() => {
    start.disabled = true;
    stop.disabled = false;
    
let color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(timerId);
  start.disabled = false;
  stop.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}