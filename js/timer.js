function formatTime(time) {
  const minutes = String(Math.floor(time / 60));
  const seconds = String(Math.floor(time % 60));
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}
// eslint-disable-next-line no-undef
export let currentTime = 0;
let timer;
export function startTimer() {
  // eslint-disable-next-line no-undef
  const timerElem = document.querySelector('.timer');
  // eslint-disable-next-line no-undef
  const cells = document.querySelectorAll('.cell');
  cells.forEach((elem) => {
    elem.removeEventListener('click', startTimer);
    elem.removeEventListener('contextmenu', startTimer);
  });
  timer = setInterval(() => {
    currentTime += 1;
    timerElem.innerHTML = formatTime(currentTime);
  }, 1000);
}
export function stopTimer() {
  // eslint-disable-next-line no-undef
  const timerElem = document.querySelector('.timer');
  clearInterval(timer);
  timerElem.innerHTML = formatTime(0);
  currentTime = 0;
}
export function updateCurrentTime(seconds) {
  const timerElem = document.querySelector('.timer');
  timerElem.innerHTML = formatTime(seconds);
  currentTime = seconds;
}
