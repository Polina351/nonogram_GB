import { createElem } from './createNonogram';
// eslint-disable-next-line import/named
import { createSelectPictureMenu } from './selectPicture';
import { iconeVolumeOn, iconsTrophy, moon } from './icons';
import { toggleMute } from './sound';
// eslint-disable-next-line import/named
import { createModalForResult } from './printResultTable';
import { changeTheme } from './changeTheme';

function createHeaderMenu(parentElement) {
  const resultButton = createElem('div', 'header_button', 'button_result');
  const volumButton = createElem('div', 'header_button', 'button_volume');
  const themeButton = createElem('div', 'header_button', 'button_theme');
  const burgerButton = createElem('div', 'header_button', 'burger_btn');
  const burgerLine1 = createElem('span', 'burger_line');
  const burgerLine2 = createElem('span', 'burger_line');
  volumButton.addEventListener('click', toggleMute);
  resultButton.addEventListener('click', createModalForResult);
  themeButton.addEventListener('click', changeTheme);
  burgerButton.append(burgerLine1);
  burgerButton.append(burgerLine2);
  resultButton.innerHTML = iconsTrophy;
  volumButton.innerHTML = iconeVolumeOn;
  themeButton.innerHTML = moon;
  parentElement.append(resultButton);
  parentElement.append(volumButton);
  parentElement.append(themeButton);
  parentElement.append(burgerButton);
}
export function createHeaderAndWrapper() {
  const wrapperHidden = createElem('div', 'wrapper-hidden');
  // eslint-disable-next-line no-undef
  document.body.append(wrapperHidden);
  const header = createElem('header', 'header', 'container');
  // eslint-disable-next-line no-undef
  wrapperHidden.append(header);
  const logo = createElem('h1', 'logo');
  header.append(logo);
  logo.innerHTML = 'Nonograms';
  const menu = createElem('div', 'menu');
  header.append(menu);
  createHeaderMenu(menu);
}
function createSelectSizeMenu() {
  const selectSizeMenu = createElem('div', 'select_size-menu');
  const subtittle = createElem('h3', 'subtittle');
  selectSizeMenu.append(subtittle);
  subtittle.innerHTML = 'Select size';
  // eslint-disable-next-line no-use-before-define
  selectSizeMenu.append(createButtonsForSizeMenu());
  return selectSizeMenu;
}
function createButtonsForSizeMenu() {
  const buttonBox = createElem('div', 'button-box');
  const sizies = ['5 Х 5', '10 Х 10', '15 X 15'];
  const classes = ['easy', 'normal', 'hard'];
  for (let i = 0; i < sizies.length; i += 1) {
    const button = createElem('button', 'size-button', `${classes[i]}`);
    button.innerHTML = sizies[i];
    button.id = classes[i];
    buttonBox.append(button);
  }
  return buttonBox;
}
function createGameMenu() {
  const menuGames = createElem('div', 'menu_game');
  const valueArray = ['reset', 'random', 'solution', 'save', 'continue'];
  for (let i = 0; i < valueArray.length; i += 1) {
    const button = createElem('button', 'menu_button', `${valueArray[i]}`);
    button.name = valueArray[i];
    button.innerHTML = valueArray[i];
    menuGames.append(button);
  }
  return menuGames;
}
export function createMain() {
  const main = createElem('main', 'main', 'container');
  // eslint-disable-next-line no-undef
  const wrapperHidden = document.querySelector('.wrapper-hidden');
  // eslint-disable-next-line no-undef
  wrapperHidden.append(main);
  const mainLeft = createElem('div', 'main-left');
  const mainRight = createElem('div', 'main-right');
  main.append(mainLeft);
  main.append(mainRight);
  const tittleNono = createElem('h2', 'tittle');
  const timer = createElem('p', 'timer');
  timer.innerHTML = '00:00';
  const nonogramBox = createElem('div', 'nonogram-box');
  mainLeft.append(tittleNono);
  mainLeft.append(timer);
  mainLeft.append(nonogramBox);
  mainLeft.append(createGameMenu());
  mainRight.append(createSelectSizeMenu());
  mainRight.append(createSelectPictureMenu('easy'));
}
