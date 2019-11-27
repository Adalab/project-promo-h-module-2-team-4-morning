'use strict';

const inputArr = document.querySelectorAll('.js-input');
const previewArr = document.querySelectorAll('.js-preview');
const formValidation = document.querySelector('.js-form-container');
const createAllowCard = document.querySelector('.js-share__btn');
const colorIConsCard = document.querySelectorAll('.menu__items');

function checkCheck() {
  if (formValidation.checkValidity() === true) {
    createAllowCard.classList.remove('filter');
  } else {
    createAllowCard.classList.add('filter');
  }
}

function listenInputs() {
  for (let i = 0; i < inputArr.length; i++) {
    inputArr[i].addEventListener('keyup', handler);
  }
}

listenInputs();

const defaultPreviewArr = [
  'Nombre Apellido',
  'Front-End Developer',
  '',
  '',
  '',
  '',
];
const hrefArr = [
  false,
  false,
  'mailto:',
  'tel:+',
  'https://www.linkedin.com/in/',
  'https://www.github.com/',
];

function updatePreview() {
  for (let i = 0; i < inputArr.length; i++) {
    if (i < 2) {
      if (!!inputArr[i].value === false) {
        previewArr[i].innerHTML = defaultPreviewArr[i];
      } else {
        previewArr[i].innerHTML = inputArr[i].value;
      }
    } else if (!!inputArr[i].value === false) {
      previewArr[i].href = `${hrefArr[i]}${defaultPreviewArr[i]}`;
      colorIConsCard[i - 2].classList.add('filter');
    } else {
      previewArr[i].href = `${hrefArr[i]}${inputArr[i].value}`;
      colorIConsCard[i - 2].classList.remove('filter');
    }
  }
  twitterBtn.classList.add('hidden');
}

function handler() {
  // localstorage
  updatePreview();
  // updatePalette();
  checkCheck();
}

// Image loading
const fr = new FileReader();
const uploadBtn = document.querySelector('.js-fill__image-btn');
const fileField = document.querySelector('.js-fill__image-upload-btn');
const profileImage = document.querySelector('.preview__display--img');
const profilePreview = document.querySelector('.fill__image--miniature');


function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}
/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}
/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick(e) {
  e.preventDefault();
  fileField.click();
}
/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
