"use strict";

console.log(">> Ready :)");

/**
 * Reset del formulario
 */

let form = document.querySelector("form");
const resetFormBtn = document.querySelector(".preview__reset");

function resetForm() {
  form.reset();
}

resetFormBtn.addEventListener("click", resetForm);
