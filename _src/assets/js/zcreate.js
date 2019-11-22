'use strict';
const formValidation = document.querySelector('.js-form-container');
const createAllowCard = document.querySelector('.js-share__btn');


const checkCheck = function (event) {
  if (formValidation.checkValidity() === true) {
    createAllowCard.classList.remove('filter');
  } else {
    createAllowCard.classList.add('filter');
  }
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

const twitterBtn = document.querySelector('.twitter');
const twitterActive = function (event) {
  event.preventDefault(event);
  if (formValidation.checkValidity() === true) {
    twitterBtn.classList.remove('hidden');
  } else {
    twitterBtn.classList.add('hidden');
  }
};

createAllowCard.addEventListener('click', twitterActive);
// inputName.addEventListener('keyup', twitterActive);
// inputPosition.addEventListener('keyup', twitterActive);
// inputEmail.addEventListener('keyup', twitterActive);
// inputGithub.addEventListener('keyup', twitterActive);
// inputPhone.addEventListener('keyup', twitterActive);
// inputLinkedin.addEventListener('keyup', twitterActive);
