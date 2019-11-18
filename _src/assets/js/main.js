'use strict';

console.log('>> Ready :)');

/**
 * Reset del formulario
 */

let form = document.querySelector('form');
const resetFormBtn = document.querySelector('.preview__reset');

function resetForm() {
  form.reset();
}

resetFormBtn.addEventListener('click', resetForm);


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

const listenerFill = document.querySelector('.fill');
const changeTitle = document.querySelector('.preview__display--title');
const changeSubtitle = document.querySelector('.preview__display--subtitle');

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
}

listenerFill.addEventListener('input', selectElement);
