import { iconeVolumeOn, iconVolumeOff } from './icons';

export function audioClick(path) {
  // eslint-disable-next-line no-undef
  if (!document.body.classList.contains('mute')) {
    // eslint-disable-next-line no-undef,no-unused-vars
    const audio = new Audio(path);
    // eslint-disable-next-line no-undef
    audio.play();
  }
}
export function toggleMute() {
  // eslint-disable-next-line no-undef,no-unused-vars
  const buttonVolume = document.querySelector('.button_volume');

  // eslint-disable-next-line no-undef
  if (document.body.classList.contains('mute')) {
    // eslint-disable-next-line no-undef
    document.body.classList.remove('mute');
    // eslint-disable-next-line no-undef
    buttonVolume.innerHTML = iconeVolumeOn;
  } else {
    // eslint-disable-next-line no-undef
    document.body.classList.add('mute');
    // eslint-disable-next-line no-undef
    buttonVolume.innerHTML = iconVolumeOff;
  }
}
