import { currentNono } from './createNonogram';
import { currentTime } from './timer';

function setDataToLocalStorage(arrayData) {
  // eslint-disable-next-line no-undef
  localStorage.setItem('saveResult', JSON.stringify(arrayData));
}
// eslint-disable-next-line import/prefer-default-export
export function getDataСompleteNonogram() {
  const ojectData = {};
  ojectData.tittle = currentNono.name;
  ojectData.level = currentNono.level;
  ojectData.time = currentTime;
  console.log(ojectData);
  // eslint-disable-next-line no-use-before-define
  const resultData = getDataFromLocalStorage();
  resultData.push(ojectData);
  if (resultData.length > 5) {
    resultData.splice(0, 1);
  }
  setDataToLocalStorage(resultData);
}
export function getDataFromLocalStorage() {
  // eslint-disable-next-line no-undef
  let data = JSON.parse(localStorage.getItem('saveResult'));
  if (data === null) {
    console.log('Not data');
    data = [];
  }
  return data;
}
