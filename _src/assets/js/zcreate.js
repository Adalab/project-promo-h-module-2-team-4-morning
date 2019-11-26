'use strict';

const twitterBtn = document.querySelector('.twitter');
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
