const startButton = document.querySelector('button[data-start="Start"]');
const stopButton = document.querySelector('dataset.stop');

console.log(startButton);
console.log(stopButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}