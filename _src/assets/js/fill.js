'use strict';

const inputArr = document.querySelectorAll('.js-input');
const previewArr = document.querySelectorAll('.js-preview');
const formValidation = document.querySelector('.js-form-container');
const createAllowCard = document.querySelector('.js-share__btn');
const colorIConsCard = document.querySelectorAll('.menu__items');
const colorInputArr = document.querySelectorAll('.js-input-color');
const lsObj = {};
const twitterBtn = document.querySelector('.twitter');

function listenColors() {
  for (let i = 0; i < colorInputArr.length; i++) {
    colorInputArr[i].addEventListener('click', updatePalette);

  }
}

listenColors();

function updatePalette() {

  for (let i = 0; i < colorInputArr.length; i++) {
    let color = document.querySelector('.preview__display');
    if (colorInputArr[0].checked === true) {
      color.classList.remove('palette1');
      color.classList.remove('palette2');
      color.classList.add('palette0');
      lsObj['palette'] = colorInputArr[0].id;
    } else if (colorInputArr[1].checked === true) {
      color.classList.remove('palette0');
      color.classList.remove('palette2');
      color.classList.add('palette1');
      lsObj['palette'] = colorInputArr[1].id;
    } else {
      color.classList.remove('palette0');
      color.classList.remove('palette1');
      color.classList.add('palette2');
      lsObj['palette'] = colorInputArr[2].id;
    }

  }
  updateLocalStorage();
}

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
  const lsArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (i < 2) {
      if (!!inputArr[i].value === false) {
        previewArr[i].innerHTML = defaultPreviewArr[i];
      } else {
        previewArr[i].innerHTML = inputArr[i].value;
      }
    } else {
      if (!!inputArr[i].value === false) {
        previewArr[i].href = `${hrefArr[i]}${defaultPreviewArr[i]}`;
        colorIConsCard[i - 2].classList.add('filter');
      } else {
        previewArr[i].href = `${hrefArr[i]}${inputArr[i].value}`;
        colorIConsCard[i - 2].classList.remove('filter');
      }
    }
    lsObj[inputArr[i].id] = inputArr[i].value;
    lsArr.push(inputArr[i].value);
  }
  twitterBtn.classList.add('hidden');
}

function updateLocalStorage() {
  localStorage.setItem('userData', JSON.stringify(lsObj));
}

function getFromLocalStorage() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    inputArr[0].value = userData.name;
    inputArr[1].value = userData.position;
    inputArr[2].value = userData.email;
    inputArr[3].value = userData.phone;
    inputArr[4].value = userData.linkedin;
    inputArr[5].value = userData.github;
    for (let i = 0; i < colorInputArr.length; i++) {
      if (colorInputArr[i].id === userData.palette) {
        colorInputArr[i].setAttribute('checked', 'checked');
        updatePalette();
      }
    }
  }
}

function updateObject() {
  for (let i = 0; i < lsObj.length; i++) {
    lsObj[inputArr[i].id] = '';
    lsObj['palette'] = '';
  }
}
updateObject();

function handler() {
  updateLocalStorage();
  updatePreview();
  updatePalette();
  checkCheck();

}
getFromLocalStorage();



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
  lsObj['image'] = fr.result;
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


const twitterActive = function () {
  if (formValidation.checkValidity() === true) {
    twitterBtn.classList.remove('hidden');
  } else {
    twitterBtn.classList.add('hidden');
  }
};

function createButtonHandler(event) {
  event.preventDefault();
  twitterActive();
}

createAllowCard.addEventListener('click', createButtonHandler);
