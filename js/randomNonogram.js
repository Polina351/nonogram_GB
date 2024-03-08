// eslint-disable-next-line no-unused-vars
import { currentNono } from './createNonogram';
import { updateNonogram } from './selectPicture';
import nonograms from './dataNonograms';
import { stopTimer } from './timer';

function randomIndex() {
  const max = nonograms.length - 1;
  const min = 0;
  return Math.floor(Math.random() * (max - min) + min + 1);
}
function randomNonogram() {
  const index = randomIndex();
  console.log('random', index);
  const value = nonograms[index].name;
  updateNonogram(value);
}
// eslint-disable-next-line import/prefer-default-export
export function addEventForButtonRandom() {
  // eslint-disable-next-line no-undef
  const buttonRandom = document.querySelector('.random');
  // eslint-disable-next-line no-undef
  buttonRandom.addEventListener('click', randomNonogram);
  buttonRandom.addEventListener('click', stopTimer);
}
