const startBtn = document.querySelector('button');
const stopBtn = document.querySelector('button').nextElementSibling;
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startBtn.addEventListener("click", () => {
 timerId = setInterval(() => {

    const body = document.querySelector('body')
    body.style.background = getRandomHexColor()
  }, 
  1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
});
