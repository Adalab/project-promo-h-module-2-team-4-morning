"use strict";

console.log(">> Ready :)");

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
const listenerFill = document.querySelector(".fill");
/*
const changeTitle = document.querySelector('.preview__display--title');
const changeSubtitle = document.querySelector('.preview__display--subtitle');
*/
const inputName = document.querySelector(".js-input-name");
const inputPosition = document.querySelector(".js-input-position");
const inputEmail = document.querySelector(".js-input-email");

let selectElement = function () {
    let inputName = document.getElementById("name");
    let inputSurname = document.getElementById("surnames");
    inputName.addEventListener("input", writeTitle);
    inputSurname.addEventListener("input", writeSubtitle);
};

function writeTitle(ev) {
    let inputValue = ev.currentTarget.value;
    changeTitle.innerHTML = inputValue;
}
function writeSubtitle(ev) {
    let inputValue = ev.currentTarget.value;
    changeSubtitle.innerHTML = inputValue;
}* /

//listenerFill.addEventListener('input', selectElement);
/*const defaultName = "Nombre Apellido";
const defaultRole = "Front-end developer";
const isFilled = ""; // No está relleno
function changeName() {
    if (formInputName.value !== isFilled) {
        cardName.innerHTML = formInputName.value;
    } else { };
}*/

const inputFirstName = document.querySelector('.js-input-name');
const inputPosition = document.querySelector('.js-input-position');
const inputEmail = document.querySelector('.js-input-email');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const changeTitle = document.querySelector('preview__display--title');
const changeSubtitle = document.querySelector('preview__display--subtitle');
/*const changePhone = document.querySelector('preview__display--subtitle');
const changeEmail = document.querySelector('preview__display--subtitle');
const changeLinkedin = document.querySelector('preview__display--subtitle');
const changeGithub = document.querySelector('preview__display--subtitle');*/

const formData = {};

function setForm(ev) {
    const input = ev.target;
    const inputName = input.name;
    const inputValue = input.value;
    formData[inputName] = inputValue;
    console.log('Datos del formulario: ', formData);
    console.log('El nombre del formulario es: ', inputValue);


    if (formData.inputName === 'name') {
        changeTitle.innerHTML = inputValue;
    }
    else if (inputName === 'position') {
        changeSubtitle.innerHTML = inputValue;
    }
}
/*
else if (inputName === 'email') {
    changeEmail.href = `"mailto:` + inputValue + `"`;
}
else if (inputName === 'phone') {
    changePhone.href = `"tel:+` + inputValue + `"`;
}
else if (inputName === 'linkedin') {
    changeLinkedin.href = `"https://www.linkedin.com/in/` + inputValue + `/"`;
}
else if (inputName === 'github') {
    changeGithub.href = `"https://github.com/` + inputValue + `"`;
}
*/


inputFirstName.addEventListener('keyup', setForm);
inputPosition.addEventListener('keyup', setForm);
inputEmail.addEventListener('keyup', setForm);
inputPhone.addEventListener('keyup', setForm);
inputLinkedin.addEventListener('keyup', setForm);
inputGithub.addEventListener('keyup', setForm);
