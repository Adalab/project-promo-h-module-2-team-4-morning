'use strict';
const formValidation = document.querySelector('.js-form-container');
const createAllowCard = document.querySelector('.js-share__btn')


const checkCheck = function (event) {
    if (formValidation.checkValidity() === true) {
        createAllowCard.classList.remove('js-filter');
    } else {
        createAllowCard.classList.add('js-filter');
    };
};
// const formInputsArr = document.querySelectorAll(".fill__box");
// console.log(formInputsArr);
// console.log(fonmInputarrValue);

inputName.addEventListener('keyup', checkCheck);
inputPosition.addEventListener('keyup', checkCheck);
inputEmail.addEventListener('keyup', checkCheck);
inputGithub.addEventListener('keyup', checkCheck);
inputPhone.addEventListener('keyup', checkCheck);
inputLinkedin.addEventListener('keyup', checkCheck);

const twitterBtn = document.querySelector(".twitter");
const twitterActive = function (event) {
    if (formValidation.checkValidity() === true) {
        twitterBtn.classList.remove('hidden');
    } else {
        twitterBtn.classList.add('hidden');
    };
};

createAllowCard.addEventListener('click', twitterActive);