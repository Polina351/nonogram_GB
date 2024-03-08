// eslint-disable-next-line no-unused-vars
import nonograms from './dataNonograms';
import { updateNonogram } from './selectPicture';
import { updateCurrentTime, stopTimer } from './timer';
import { restoreCounters } from './startGame';

function restoreCells(arrayCells) {
  // eslint-disable-next-line no-undef
  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < cells.length; i += 1) {
    if (arrayCells[i] === 1) {
      cells[i].classList.remove('empty');
      cells[i].classList.add('fill');
    } else if (arrayCells[i] === 3) {
      cells[i].classList.remove('empty');
      cells[i].classList.add('cross');
    }
  }
}
function restoreGame() {
  // eslint-disable-next-line no-undef
  const gameData = JSON.parse(localStorage.getItem('saveGame'));
  console.log('get:', gameData);
  stopTimer();
  updateNonogram(nonograms[gameData.index].name);
  // eslint-disable-next-line no-import-assign
  updateCurrentTime(gameData.time);
  restoreCells(gameData.cells);
  restoreCounters(gameData);
}
// eslint-disable-next-line import/prefer-default-export
export function addEventForButtonContinue() {
  // eslint-disable-next-line no-undef
  const buttonContinue = document.querySelector('.continue');
  // eslint-disable-next-line no-undef
  buttonContinue.addEventListener('click', restoreGame);
}
