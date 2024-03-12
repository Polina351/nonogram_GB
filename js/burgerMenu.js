// eslint-disable-next-line no-unused-vars,import/prefer-default-export
export function openCloseMenu() {
  // eslint-disable-next-line no-undef
  const burgerButton = document.querySelector('.burger_btn');
  // eslint-disable-next-line no-undef
  const burgerMenu = document.querySelector('.main-right');
  burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('open');
    burgerButton.classList.toggle('open');
  });
  burgerButton.addEventListener('click', (event) => {
    // eslint-disable-next-line no-param-reassign,no-underscore-dangle
    event._isMenuOpen = true;
  });
  burgerMenu.addEventListener('click', (event) => {
    // eslint-disable-next-line no-underscore-dangle,no-param-reassign
    event._isMenuOpen = true;
  });
  // eslint-disable-next-line no-undef
  document.body.addEventListener('click', (event) => {
    // eslint-disable-next-line no-underscore-dangle
    if (event._isMenuOpen) return;
    burgerMenu.classList.remove('open');
    burgerButton.classList.remove('open');
  });
  burgerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('right_menu_btn')) {
      burgerMenu.classList.remove('open');
      burgerButton.classList.remove('open');
    }
  });
}
