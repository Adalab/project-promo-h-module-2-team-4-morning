'use strict';

const inputArr = document.querySelectorAll('.js-input');
const previewArr = document.querySelectorAll('.js-preview');

function show() {
  for (let i = 0; i < inputArr.length; i++) {

    inputArr[i].value;
    console.log(inputArr[i].value);

    function updatePreview() {
      const defaultPreviewArr = [];
      defaultPreviewArr[0] = 'Nombre y Apellido';
      defaultPreviewArr[1] = 'Front-End';
      defaultPreviewArr[2] = '';
      defaultPreviewArr[3] = '';
      defaultPreviewArr[4] = '';
      defaultPreviewArr[5] = '';

      const hrefArr = [];
      hrefArr[2] = 'mailto:';
      hrefArr[3] = 'tel:+';
      hrefArr[4] = 'https://www.linkedin.com/in/';
      hrefArr[5] = 'https://www.github.com/';

      if (i < 2) {
        if (inputArr[i].value == false) {
          previewArr[i].innerHTML = defaultPreviewArr[i];
        } else {
          previewArr[i].innerHTML = inputArr[i].value;
        }
      } else {
        if (inputArr[i].value == false) {
          previewArr[i].href = `${hrefArr[i]}${defaultPreviewArr[i]}`;
        } else {
          previewArr[i].href = `${hrefArr[i]}${inputArr[i].value}`;
        }
      }
    }
    inputArr[i].addEventListener('keyup', updatePreview);
  }
}
show();



// const changeEmail = document.querySelector('.js-link-email');
// const changePhone = document.querySelector('.js-link-phone');
// const changeLinkedin = document.querySelector('.js-link-linkedin');
// const changeGithub = document.querySelector('.js-link-github');
