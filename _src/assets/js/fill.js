'use strict';

console.log('>> Ready :)');


const inputName = document.querySelector('.js-input-name');
const inputPosition = document.querySelector('.js-input-position');
const inputEmail = document.querySelector('.js-input-email');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');

const changeTitle = document.querySelector('.js-preview-title');
const changeSubtitle = document.querySelector('.js-preview-subtitle');
const changePhone = document.querySelector('.js-link-phone');
const changeEmail = document.querySelector('.js-link-email');
const changeLinkedin = document.querySelector('.js-link-linkedin');
const changeGithub = document.querySelector('.js-link-github');

const defaultName = 'Nombre Apellido';
const defaultPosition = 'Front-end developer';
const isFilled = ''; // No está relleno


const changeName = function () {

    if (inputName.value !== isFilled) {
        changeTitle.innerHTML = inputName.value;
    } else {
        changeTitle.innerHTML = defaultName;
    }
};
const changePosition = function () {

    if (inputPosition.value !== isFilled) {
        changeSubtitle.innerHTML = inputPosition.value;
    } else {
        changeSubtitle.innerHTML = defaultPosition;
    }
};
const updateEmail = function () {

    if (inputEmail.value !== isFilled) {
        changeEmail.href = `mailto:"${inputEmail.value}"`;
    } else {
        changeEmail.href = '';
    }
};
const updateGithub = function () {
    if (inputGithub.value !== isFilled) {
        const profile = inputGithub.value.slice(1);
        changeGithub.href = 'https://www.github.com/' + profile + '/';
    } else {
        changeGithub.href = '';
    }
};
const updatePhone = function () {
    if (inputGPhone.value !== isFilled) {
        const profile = inputPhone.value.slice(1);
        changePhone.href = 'https://www.github.com/' + profile + '/';
    } else {
        changePhone.href = '';
    }
};



inputName.addEventListener('keyup', updateName);
inputPosition.addEventListener('keyup', updatePosition);
inputEmail.addEventListener('keyup', updateEmail);
inputGithub.addEventListener('keyup', updateGithub);
inputPhone.addEventListener('keyup', updatePhone);