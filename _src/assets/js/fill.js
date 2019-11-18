'use strict';

/*
let selectElement = function (ev) {
  var choose = ev.target.value;
  alert('El target es: ' + ev.target + 'El current target es: ' + ev.currentTarget);
  if(choose ==='name'){
    let inputValue = ev.currentTarget.value;
    changeTitle.innerHTML = inputValue;
  }
  else if(choose === 'surnames'){
    let inputValue = ev.currentTarget.value;
    changeSubtitle.innerHTML = inputValue;
  }
};
*/
/*
const listenerFill = document.querySelector('.fill');
const changeTitle = document.querySelector('.preview__display--title');
const changeSubtitle = document.querySelector('.preview__display--subtitle');
*/

/*
let selectElement = function () {
  let inputName = document.getElementById('name');
  let inputSurname = document.getElementById('surnames');
  inputName.addEventListener('input', writeTitle);
  inputSurname.addEventListener('input', writeSubtitle);
};

function writeTitle(ev) {
  let inputValue = ev.currentTarget.value;
  changeTitle.innerHTML = inputValue;
}
function writeSubtitle(ev) {
  let inputValue = ev.currentTarget.value;
  changeSubtitle.innerHTML = inputValue;
}*/

//listenerFill.addEventListener('input', selectElement);

const inputFirstName = document.querySelector('.js-input-name');
const inputPosition = document.querySelector('.js-input-position');
const inputEmail = document.querySelector('.js-input-email');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const formData = {};

function setForm(ev) {
    const input = ev.target;
    const inputName = input.name;
    const inputValue = input.value;
    formData.inputName = inputValue;
    console.log('Datos del formulario: ', formData);
}
console.log(inputFirstName.addEventListener('keyup', setForm));
console.log(inputPosition.addEventListener('keyup', setForm));
console.log(inputEmail.addEventListener('keyup', setForm));
console.log(inputPhone.addEventListener('keyup', setForm));
console.log(inputLinkedin.addEventListener('keyup', setForm));
console.log(inputGithub.addEventListener('keyup', setForm));