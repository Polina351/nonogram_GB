// localStorage.setItem('users',JSON.stringify(data))
// let users = JSON.parse(localStorage.getItem('users'));
// localStorage.setItem('users', JSON.stringify(users));
// counterError = 0;
// counterFill = 0;
import { counterError, counterFill } from './startGame';
import { currentNono } from './createNonogram';
// eslint-disable-next-line import/named
import { getIndex } from './selectPicture';
import { currentTime } from './timer';

function getCurrentCellsInArray() {
  // eslint-disable-next-line no-undef
  const cells = document.querySelectorAll('.cell');
  const currentCellsArray = [];
  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i].classList.contains('fill')) {
      currentCellsArray.push(1);
    } else if (cells[i].classList.contains('cross')) {
      currentCellsArray.push(3);
    } else {
      currentCellsArray.push(0);
    }
  }
  console.log(currentCellsArray);
  return currentCellsArray;
}
function getObjectInfoSaveGame() {
  const objectInfoSaveGame = {};
  objectInfoSaveGame.error = counterError;
  objectInfoSaveGame.fill = counterFill;
  objectInfoSaveGame.cells = getCurrentCellsInArray();
  objectInfoSaveGame.index = getIndex(currentNono.name);
  objectInfoSaveGame.time = currentTime;
  console.log(objectInfoSaveGame);
  return objectInfoSaveGame;
}

function saveInLocalStorage() {
  const data = getObjectInfoSaveGame();
  // eslint-disable-next-line no-undef
  localStorage.setItem('saveGame', JSON.stringify(data));
}
// eslint-disable-next-line import/prefer-default-export
export function addEventForButtonSave() {
  // eslint-disable-next-line no-undef
  const buttonSave = document.querySelector('.save');
  // eslint-disable-next-line no-undef
  buttonSave.addEventListener('click', getCurrentCellsInArray);
  buttonSave.addEventListener('click', saveInLocalStorage);
}
