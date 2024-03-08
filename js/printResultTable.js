import { getDataFromLocalStorage } from './saveResult';
import { createElem } from './createNonogram';

function sortResult(arrayResult) {
  arrayResult.sort(function (elem1, elem2) {
    return elem1.time - elem2.time;
  });
  return arrayResult;
}
function createTable() {
  const data = sortResult(getDataFromLocalStorage());
  const tableHeaderDate = ['Title', 'Level', 'Time'];
  const table = createElem('div', 'result_table');
  for (let i = 0; i < tableHeaderDate.length; i += 1) {
    const elem = createElem('div', 'tableCell');
    const subElem = createElem('p', 'table_text', 'bold');
    subElem.innerHTML = tableHeaderDate[i];
    elem.append(subElem);
    table.append(elem);
  }
  for (let i = 0; i < data.length; i += 1) {
    const title = createElem('div', 'tableCell');
    const titleText = createElem('p', 'table_text');
    titleText.innerHTML = `${i + 1}. ${data[i].tittle}`;
    title.append(titleText);
    table.append(title);
    const level = createElem('div', 'tableCell');
    const levelText = createElem('p', 'table_text');
    levelText.innerHTML = data[i].level;
    level.append(levelText);
    table.append(level);
    const time = createElem('div', 'tableCell');
    const timeText = createElem('p', 'table_text');
    timeText.innerHTML = `${data[i].time}s.`;
    time.append(timeText);
    table.append(time);
  }
  return table;
}

// eslint-disable-next-line import/prefer-default-export
export function createModalForResult() {
  // eslint-disable-next-line no-undef
  const modalBg = createElem('div', 'modal_bg', 'del');
  // eslint-disable-next-line no-undef
  document.body.append(modalBg);

  const modal = createElem('div', 'modal', 'hint', 'del', 'modal_result');
  modalBg.append(modal);

  const massageText = createTable();
  modal.append(massageText);

  const modalBtn = createElem('button', 'modal-btn');
  modal.append(modalBtn);
  modalBtn.append('Ok');

  modalBtn.addEventListener('click', () => {
    modalBg.remove();
    modal.remove();
  });

  setTimeout(() => {
    modalBg.classList.add('open');
    modal.classList.add('open');
  }, 1);
}
