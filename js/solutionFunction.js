// eslint-disable-next-line import/named
import { currentMatrix, removeEventListenerForCells } from './startGame';
import { stopTimer } from './timer';

function deleteCondition(element) {
  element.classList.remove('fill');
  element.classList.remove('cross');
  element.classList.remove('empty');
}
function addNewCondition(element, key) {
  if (key === 1) {
    element.classList.add('fill');
  } else {
    element.classList.add('empty');
  }
}
function solutionNonogram() {
  // eslint-disable-next-line no-undef
  const cells = document.querySelectorAll('.cell');
  const lenMatrix = currentMatrix.length;
  let cellIndex = 0;
  for (let i = 0; i < lenMatrix; i += 1) {
    for (let j = 0; j < lenMatrix; j += 1) {
      deleteCondition(cells[cellIndex]);
      addNewCondition(cells[cellIndex], currentMatrix[i][j]);
      cellIndex += 1;
    }
  }
}
// eslint-disable-next-line import/prefer-default-export
export function addEventForButtonSolution() {
  // eslint-disable-next-line no-undef
  const buttonSolution = document.querySelector('.solution');
  buttonSolution.addEventListener('click', solutionNonogram);
  buttonSolution.addEventListener('click', stopTimer);
  buttonSolution.addEventListener('click', removeEventListenerForCells);
}
