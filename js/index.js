import '../style.css';
import '../sound/click.mp3';
import '../sound/victory.mp3';
import '../sound/left_click.mp3';
import '../sound/right_click.mp3';
import { createAppElem, print } from './createNonogram';
import { addEventListenerForCells } from './startGame';
// eslint-disable-next-line import/named
import { createHeaderAndWrapper, createMain } from './createStaticElements';
// eslint-disable-next-line import/named
import { addEventListenerForSizeButton } from './selectPicture';
// eslint-disable-next-line import/named
import { addEventForButtonReset } from './resetFunction';
// eslint-disable-next-line import/named
import { addEventForButtonRandom } from './randomNonogram';
// eslint-disable-next-line import/named
import { addEventForButtonSolution } from './solutionFunction';
import { addEventForButtonSave } from './saveGame';
import { addEventForButtonContinue } from './continueSaveGame';
import { openCloseMenu } from './burgerMenu';

createHeaderAndWrapper();
createMain();
createAppElem(0);
addEventListenerForSizeButton();
addEventForButtonReset();
addEventForButtonRandom();
addEventForButtonSolution();
addEventForButtonSave();
addEventForButtonContinue();
print();
addEventListenerForCells();
openCloseMenu();
