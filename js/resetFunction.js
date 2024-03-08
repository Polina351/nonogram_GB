import { currentNono } from './createNonogram';
import { updateNonogram } from './selectPicture';
import { stopTimer } from './timer';

function resetNonogram() {
  const value = currentNono.name;
  updateNonogram(value);
}
// eslint-disable-next-line import/prefer-default-export
export function addEventForButtonReset() {
  // eslint-disable-next-line no-undef
  const buttonReset = document.querySelector('.reset');
  buttonReset.addEventListener('click', resetNonogram);
  buttonReset.addEventListener('click', stopTimer);
}
