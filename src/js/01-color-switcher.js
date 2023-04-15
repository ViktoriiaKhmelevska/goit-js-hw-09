const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body')

// start.addEventListener('click', startClick);
// stop.addEventListener('click', stopClick);

// function startClick(e) {

//   setInterval(() => {
// let color = getRandomHexColor();
//     body.style.backgroundColor = color;
//  }, 1000);
// };

// function stopClick() { 

// };
start.addEventListener("click", () => {
  timerId = setInterval(() => {
    start.disabled = true;
let color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(timerId);
start.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}