import nonograms from './dataNonograms';

/**
 * Создает element DOM c присвоением классов
 * @param {string} tag
 * @param {string} classNames один или несколько
 * @returns {object} dom element
 */
export function createElem(tag, ...classNames) {
  // eslint-disable-next-line no-undef
  const elem = document.createElement(tag);
  elem.className = classNames.join(' ');
  return elem;
}
function createGameBoard(matrix, pictureField) {
  const lenMatrix = matrix.length;
  for (let i = 0; i < lenMatrix; i += 1) {
    for (let j = 0; j < lenMatrix; j += 1) {
      const cellElem = createElem('div', 'cell', 'empty');
      cellElem.id = `pos${i}-${j}`;
      if ((j + 1) % 5 === 0) {
        cellElem.classList.add('border_right');
      }
      if ((i + 1) % 5 === 0) {
        cellElem.classList.add('border_bottom');
      }
      pictureField.append(cellElem);
    }
  }
}

function createHintRows(matrix, parentElem) {
  const lenMatrix = matrix.length;
  for (let i = 0; i < lenMatrix; i += 1) {
    let counter = 0;
    const hintBox = createElem('div', 'hint-row-box', 'border_right');
    if ((i + 1) % 5 === 0) {
      hintBox.classList.add('border_bottom');
    }
    for (let j = 0; j < lenMatrix; j += 1) {
      if (matrix[i][j] === 1) {
        counter += 1;
      }
      if (
        (matrix[i][j] === 0 && counter !== 0) ||
        (j === lenMatrix - 1 && counter !== 0)
      ) {
        const hintNumberCell = createElem('div', 'hint-number-cell-row');
        hintNumberCell.innerHTML = String(counter);
        hintBox.append(hintNumberCell);
        counter = 0;
      }
    }
    parentElem.append(hintBox);
  }
}
function createHintColumns(matrix, parentElem) {
  const lenMatrix = matrix.length;
  for (let i = 0; i < lenMatrix; i += 1) {
    let counter = 0;
    const hintBox = createElem('div', 'hint-col-box', 'border_bottom');
    if ((i + 1) % 5 === 0) {
      hintBox.classList.add('border_right');
    }
    for (let j = 0; j < lenMatrix; j += 1) {
      if (matrix[j][i] === 1) {
        counter += 1;
      }
      if (
        (matrix[j][i] === 0 && counter !== 0) ||
        (j === lenMatrix - 1 && counter !== 0)
      ) {
        const hintNumberCell = createElem('div', 'hint-number-cell-column');
        hintNumberCell.innerHTML = String(counter);
        hintBox.append(hintNumberCell);
        counter = 0;
      }
    }
    parentElem.append(hintBox);
  }
}

// eslint-disable-next-line import/no-mutable-exports
export let currentNono = nonograms[0];
export function updateCurrentNono(index) {
  currentNono = nonograms[index];
}
export function createAppElem(index) {
  updateCurrentNono(index);
  const countCells = currentNono.nonogram.length;
  // eslint-disable-next-line no-unused-vars,no-undef
  const nonogramBox = document.querySelector('.nonogram-box');
  // eslint-disable-next-line no-unused-vars,no-undef
  const nonogramTittle = document.querySelector('.tittle');
  nonogramTittle.innerHTML = currentNono.name.toUpperCase();
  const appElem = createElem('div', 'app');
  const divElem = createElem('div', 'border_bottom', 'border_right');
  const hintColumn = createElem('div', `hint-col${countCells}`);
  const picture = createElem('div', `picture${countCells}`);
  const hintRow = createElem('div', `hint-row${countCells}`);
  createGameBoard(currentNono.nonogram, picture);
  createHintRows(currentNono.nonogram, hintRow);
  createHintColumns(currentNono.nonogram, hintColumn);
  appElem.append(divElem);
  appElem.append(hintColumn);
  appElem.append(picture);
  appElem.append(hintRow);
  // eslint-disable-next-line no-undef
  nonogramBox.append(appElem);
}

