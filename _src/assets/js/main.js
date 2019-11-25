"use strict";

/**
 * Reset del formulario
 */

let form = document.querySelector("form");
const resetFormBtn = document.querySelector(".preview__reset");
const defaultImage = './assets/images/profile.png';

function resetForm() {
  form.reset();
  document.querySelector(".preview__display").classList.remove("palette1");
  document.querySelector(".preview__display").classList.remove("palette2");
  document.querySelector(".preview__display").classList.remove("palette3");
  checkCheck();
  updateName();
  updatePosition();
  updateEmail();
  updateGithub();
  updatePhone();
  updateLinkedin();
  profileImage.style.backgroundImage = `url(${defaultImage})`;
  profilePreview.style.backgroundImage = `url('')`;

  // twitterActive();
}

resetFormBtn.addEventListener("click", resetForm);
