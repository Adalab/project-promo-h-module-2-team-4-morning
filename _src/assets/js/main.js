'use strict';

/**
 * Reset del formulario
 * hay que poner el form con un querySelector con una clase js
 */

let form = document.querySelector('form');
const resetFormBtn = document.querySelector('.preview__reset');
const defaultImage = './assets/images/profile.png';

function resetForm() {
  form.reset();
  document.querySelector('.preview__display').classList.remove('palette1');
  document.querySelector('.preview__display').classList.remove('palette2');
  document.querySelector('.preview__display').classList.remove('palette3');
  handler();

  // twitterActive();
  profileImage.style.backgroundImage = `url(${defaultImage})`;
  profilePreview.style.backgroundImage = `url('')`;
}

resetFormBtn.addEventListener('click', resetForm);
