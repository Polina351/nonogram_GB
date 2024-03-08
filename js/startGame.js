// eslint-disable-next-line no-unused-vars
import * as events from 'events';

// eslint-disable-next-line import/named
import { createElem, currentNono } from './createNonogram';
import nonograms from './dataNonograms';
import { currentTime, startTimer, stopTimer } from './timer';
import { getDataСompleteNonogram } from './saveResult';
import { audioClick } from './sound';

// const currentIndex = 0;
// eslint-disable-next-line import/no-mutable-exports
export let currentMatrix = currentNono.nonogram;
console.log(currentMatrix);
function checkCell(elem, matrix) {
  const position = elem.id.replace('pos', '').split('-');
  return matrix[+position[0]][+position[1]] === 1;
}
function getFillCells(matrix) {
  let count = 0;
  const matrixLen = matrix.length;
  for (let i = 0; i < matrixLen; i += 1) {
    for (let j = 0; j < matrixLen; j += 1) {
      if (matrix[i][j] === 1) {
        count += 1;
      }
    }
  }
  return count;
}

let fillCells = getFillCells(currentMatrix);
export let counterFill = 0;
export let counterError = 0;
export function restoreCounters(objectData) {
  currentMatrix = nonograms[objectData.index].nonogram;
  fillCells = getFillCells(currentMatrix);
  counterFill = objectData.fill;
  counterError = objectData.error;
}
export function updateCurrentGameDate(index) {
  currentMatrix = nonograms[index].nonogram;
  fillCells = getFillCells(currentMatrix);
  counterError = 0;
  counterFill = 0;
}
function createModal() {
  // eslint-disable-next-line no-undef
  if (!document.querySelector('.button_volume').classList.contains('mute')) {
    // eslint-disable-next-line no-undef
    audioClick('victory.mp3');
  }
  const modalBg = createElem('div', 'modal_bg', 'del');
  // eslint-disable-next-line no-undef
  document.body.append(modalBg);

  const modal = createElem('div', 'modal', 'hint', 'del');
  modalBg.append(modal);

  const massageText = createElem('p', 'message');
  modal.append(massageText);
  massageText.append(`Great!
You have solved the nonogram in ${currentTime} seconds.`);

  const modalBtn = createElem('button', 'modal-btn');
  modal.append(modalBtn);
  modalBtn.append('Ok');

  modalBtn.addEventListener('click', () => {
    modalBg.remove();
    modal.remove();
  });

  setTimeout(() => {
    modalBg.classList.add('open');
    modal.classList.add('open');
  }, 1);
}
export function removeEventListenerForCells() {
  // eslint-disable-next-line no-undef
  const picture = document.querySelectorAll('.cell');
  picture.forEach((elem) => {
    // eslint-disable-next-line no-use-before-define
    elem.removeEventListener('click', replaceClassNameForCell);
    // eslint-disable-next-line no-use-before-define
    elem.removeEventListener('contextmenu', handlerMouseClick);
  });
}
function checkGame() {
  if (counterFill === fillCells && counterError === 0) {
    getDataСompleteNonogram();
    createModal();
    removeEventListenerForCells();
    stopTimer();
  }
}
function replaceClassNameForCell() {
  if (this.classList.contains('empty')) {
    if (checkCell(this, currentMatrix)) {
      counterFill += 1;
    } else {
      counterError += 1;
    }
    this.classList.remove('empty');
    this.classList.add('fill');
    audioClick('right_click.mp3');
    checkGame();
  } else if (this.classList.contains('cross')) {
    if (checkCell(this, currentMatrix)) {
      counterFill += 1;
    } else {
      counterError += 1;
    }
    this.classList.remove('cross');
    this.classList.add('fill');
    audioClick('right_click.mp3');
    checkGame();
  } else if (this.classList.contains('fill')) {
    if (checkCell(this, currentMatrix)) {
      counterFill -= 1;
    } else {
      counterError -= 1;
    }
    this.classList.remove('fill');
    this.classList.add('empty');
    audioClick('right_click.mp3');
    checkGame();
  }
}
function replaceClassNameOnCross(elem) {
  if (elem.classList.contains('empty')) {
    elem.classList.remove('empty');
    elem.classList.add('cross');
    audioClick('left_click.mp3');
  } else if (elem.classList.contains('fill')) {
    if (checkCell(elem, currentMatrix)) {
      counterFill -= 1;
    } else {
      counterError -= 1;
    }
    elem.classList.remove('fill');
    elem.classList.add('cross');
    audioClick('left_click.mp3');
    checkGame();
  } else if (elem.classList.contains('cross')) {
    elem.classList.remove('cross');
    elem.classList.add('empty');
    audioClick('left_click.mp3');
    checkGame();
  }
}

function handlerMouseClick(event) {
  if (event.button === 2) {
    event.preventDefault();
    replaceClassNameOnCross(this);
  }
}
export function addEventListenerForCells() {
  // eslint-disable-next-line no-undef
  const picture = document.querySelectorAll('.cell');
  picture.forEach((elem) => {
    elem.addEventListener('click', replaceClassNameForCell);
    elem.addEventListener('click', startTimer);
    elem.addEventListener('contextmenu', handlerMouseClick);
    elem.addEventListener('contextmenu', startTimer);
  });
}

export default addEventListenerForCells;
