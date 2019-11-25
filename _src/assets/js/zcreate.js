const twitterBtn = document.querySelector(".twitter");
const twitterActive = function (event) {
  event.preventDefault(event);
  if (formValidation.checkValidity() === true) {
    twitterBtn.classList.remove('hidden');
  } else {
    twitterBtn.classList.add('hidden');
  };
};

createAllowCard.addEventListener('click', twitterActive);
