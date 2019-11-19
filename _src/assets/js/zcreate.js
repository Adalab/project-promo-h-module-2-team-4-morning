'use strict';

// const form = document.querySelector(".share__btn");

// const checkForm = function () {
//     return form.checkValidity();
// };

// const validateForm = function () {
//     if (checkForm === true) {
//         console.log('esto funciona');
//     } else {
//         console.log('ojito');
//     }
// };

const beitaGuapa = document.querySelector('.js-elenaGuapa');
const createAllowCard = document.querySelector('.js-share__btn')

console.log(beitaGuapa.checkValidity())

const checkCheck = function (event) {
    if (beitaGuapa.checkValidity() === true) {
        createAllowCard.classList.remove('js-filter');
    } else {
        createAllowCard.classList.add('js-filter');
    };
};
// const formInputsArr = document.querySelectorAll(".fill__box");
// console.log(formInputsArr);
// console.log(fonmInputarrValue);

inputName.addEventListener('keyup', checkCheck);
// inputPosition.addEventListener('keyup', changePosition);
// inputEmail.addEventListener('keyup', updateEmail);
// inputGithub.addEventListener('keyup', updateGithub);