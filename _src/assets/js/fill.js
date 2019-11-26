'use strict';

const inputArr = document.querySelectorAll('.js-input');
const previewArr = document.querySelectorAll('.js-preview');
const formValidation = document.querySelector('.js-form-container');
const createAllowCard = document.querySelector('.js-share__btn');

function show() {
  for (let i = 0; i < inputArr.length; i++) {
    inputArr[i].value;
    console.log(inputArr[i].value);

    function checkCheck() {
      if (formValidation.checkValidity() === true) {
        createAllowCard.classList.remove('js-filter');
      } else {
        createAllowCard.classList.add('js-filter');
      };
    };

    function updatePreview() {
      const defaultPreviewArr = [
        'Nombre Apellido',
        'Front-End Developer',
        '',
        '',
        '',
        '',
      ]
      const hrefArr = [];
      hrefArr[2] = 'mailto:';
      hrefArr[3] = 'tel:+';
      hrefArr[4] = 'https://www.linkedin.com/in/';
      hrefArr[5] = 'https://www.github.com/';

      if (i < 2) {
        if (!!inputArr[i].value === false) {
          previewArr[i].innerHTML = defaultPreviewArr[i];
        } else {
          previewArr[i].innerHTML = inputArr[i].value;
        }
      } else {
        if (!!inputArr[i].value === false) {
          previewArr[i].href = `${hrefArr[i]}${defaultPreviewArr[i]}`;
        } else {
          previewArr[i].href = `${hrefArr[i]}${inputArr[i].value}`;
        }
      }
    };

    function handler(event) {
      updatePreview();
      checkCheck();
    };

    inputArr[i].addEventListener('keyup', handler);
  };
};
show();
