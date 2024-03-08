// eslint-disable-next-line no-unused-vars
import { createAppElem, createElem, updateCurrentNono } from './createNonogram';
// eslint-disable-next-line import/named
import { updateCurrentGameDate, addEventListenerForCells } from './startGame';
import nonograms from './dataNonograms';
import { stopTimer } from './timer';

function filterBySizePicture(arrayAllNono, value) {
  // eslint-disable-next-line no-use-before-define
  return arrayAllNono.filter((elem) => elem.level === value);
}

// eslint-disable-next-line import/prefer-default-export
export function createSelectPictureMenu(value) {
  const selectPictureBox = createElem('div', 'select_picture-box');
  const subtitle = createElem('h3', 'subtitle');
  subtitle.innerHTML = 'Select picture';
  selectPictureBox.append(subtitle);
  // eslint-disable-next-line no-use-before-define
  createButtonsSelectPicture(
    filterBySizePicture(nonograms, value),
    selectPictureBox
  );
  return selectPictureBox;
}

function createButtonsSelectPicture(filterNonoArray, buttonsBox) {
  for (let i = 0; i < filterNonoArray.length; i += 1) {
    const button = createElem(
      'button',
      'button',
      'picture_button',
      'right_menu_btn'
    );
    button.innerHTML = filterNonoArray[i].name;
    button.name = filterNonoArray[i].name;
    button.addEventListener('click', function () {
      // eslint-disable-next-line no-use-before-define
      updateNonogram(this.name);
    });
    button.addEventListener('click', stopTimer);
    buttonsBox.append(button);
  }
}
function updatePictureMenu(value) {
  // eslint-disable-next-line no-undef
  document.querySelector('.select_picture-box').remove();
  const newSelectPictureMenu = createSelectPictureMenu(value);
  // eslint-disable-next-line no-undef
  const rightBox = document.querySelector('.main-right');
  rightBox.append(newSelectPictureMenu);
}
export function addEventListenerForSizeButton() {
  // eslint-disable-next-line no-undef
  const sizeBtns = document.querySelectorAll('.size-button');
  for (let i = 0; i < sizeBtns.length; i += 1) {
    sizeBtns[i].addEventListener('click', function () {
      updatePictureMenu(this.id);
    });
  }
}

export function getIndex(value) {
  // eslint-disable-next-line consistent-return
  for (let i = 0; i < nonograms.length; i += 1) {
    if (nonograms[i].name === value) {
      return i;
    }
  }
  return 0;
}

export function updateNonogram(value) {
  const index = getIndex(value);
  // eslint-disable-next-line no-undef
  updateCurrentGameDate(index);
  // updateCurrentNono(index);
  // eslint-disable-next-line no-undef
  document.querySelector('.app').remove();
  // eslint-disable-next-line no-undef
  document.querySelector('.tittle').innerHTML = value;
  createAppElem(index);
  // eslint-disable-next-line no-undef
  addEventListenerForCells();
}
