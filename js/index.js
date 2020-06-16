const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let buttonStart = document.querySelector('button[data-action="start"]');
let buttonStop = document.querySelector('button[data-action="stop"]');
let bodyTag = document.querySelector("body");
let random = 0;
let timerId = null;

buttonStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    random = randomIntegerFromInterval(0, colors.length);
    bodyTag.style.backgroundColor = colors[random];
  }, 1000);
  buttonStart.disabled = true;
});

buttonStop.addEventListener("click", () => {
  buttonStart.disabled = false;
  clearInterval(timerId);
});
