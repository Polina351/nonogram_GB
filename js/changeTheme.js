import { sun, moon } from './icons';

// eslint-disable-next-line import/prefer-default-export
export function changeTheme() {
  // eslint-disable-next-line no-undef
  const themeButton = document.querySelector('.button_theme');

  // eslint-disable-next-line no-undef
  if (document.body.classList.contains('dark')) {
    // eslint-disable-next-line no-undef
    document.body.classList.remove('dark');
    // eslint-disable-next-line no-undef
    themeButton.innerHTML = moon;
  } else {
    // eslint-disable-next-line no-undef
    document.body.classList.add('dark');
    themeButton.innerHTML = sun;
  }
}
