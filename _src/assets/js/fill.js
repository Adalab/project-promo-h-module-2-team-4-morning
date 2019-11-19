'use strict';

const inputName = document.querySelector('.js-input-name');
const inputPosition = document.querySelector('.js-input-position');
const inputEmail = document.querySelector('.js-input-email');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');

const changeTitle = document.querySelector('.js-preview-title');
const changeSubtitle = document.querySelector('.js-preview-subtitle');
const changeEmail = document.querySelector('.js-link-email');
const changePhone = document.querySelector('.js-link-phone');
const changeLinkedin = document.querySelector('.js-link-linkedin');
const changeGithub = document.querySelector('.js-link-github');

const containerPhone = document.querySelector('.menu__items--phone');
const containerEmail = document.querySelector('.menu__items--email');
const containerLinkedin = document.querySelector('.menu__items--linkedin');
const containerGithub = document.querySelector('.menu__items--github');

const defaultName = 'Nombre Apellido';
const defaultPosition = 'Front-end developer';
const isFilled = ''; // No está relleno


const updateName = function () {

    if (inputName.value !== isFilled) {
        changeTitle.innerHTML = inputName.value;
    } else {
        changeTitle.innerHTML = defaultName;
    }
};
const updatePosition = function () {

    if (inputPosition.value !== isFilled) {
        changeSubtitle.innerHTML = inputPosition.value;
    } else {
        changeSubtitle.innerHTML = defaultPosition;
    }
};
const updatePhone = function () {
    if (inputPhone.value !== isFilled) {
        containerPhone.classList.remove('js-filter');
        changePhone.href = 'tel:+' + inputPhone.value;
    } else {
        containerPhone.classList.add('js-filter');
        changePhone.href = '';
    }
};

const updateEmail = function () {
    if (inputEmail.value !== isFilled) {
        containerEmail.classList.remove('js-filter');
        changeEmail.href = `mailto:"${inputEmail.value}"`;
    } else {
        containerEmail.classList.add('js-filter');
        changeEmail.href = '';
    }
};

const updateLinkedin = function () {
    if (inputLinkedin.value !== isFilled) {
        containerLinkedin.classList.remove('js-filter');
        const profile = inputLinkedin.value;
        changeLinkedin.href = 'https://www.' + profile;
    } else {
        containerLinkedin.classList.add('js-filter');
        changeLinkedin.href = '';
    }
};

const updateGithub = function () {
    if (inputGithub.value !== isFilled) {
        containerGithub.classList.remove('js-filter');
        const profile = inputGithub.value.slice(1);
        changeGithub.href = 'https://www.github.com/' + profile;
    } else {
        containerGithub.classList.add('js-filter');
        changeGithub.href = '';
    }
};


inputName.addEventListener('keyup', updateName);
inputPosition.addEventListener('keyup', updatePosition);
inputEmail.addEventListener('keyup', updateEmail);
inputGithub.addEventListener('keyup', updateGithub);
inputPhone.addEventListener('keyup', updatePhone);
inputLinkedin.addEventListener('keyup', updateLinkedin);