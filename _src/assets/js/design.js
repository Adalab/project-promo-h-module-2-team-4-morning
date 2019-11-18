"use strict";

// Color palette 1 //
changeColor1();

const selectPalette1 = document.getElementById("color1");
function changeColor1() {
  let color = document.querySelector(".preview__display");
  color.classList.remove("palette2");
  color.classList.remove("palette3");
  color.classList.add("palette1");
}

selectPalette1.addEventListener("click", changeColor1);

/// Color palette 2 //

const selectPalette2 = document.getElementById("color2");
function changeColor2() {
  let color = document.querySelector(".preview__display");
  color.classList.remove("palette1");
  color.classList.remove("palette3");
  color.classList.add("palette2");
}

selectPalette2.addEventListener("click", changeColor2);

// Color palette 3 //

const selectPalette3 = document.getElementById("color3");
function changeColor3() {
  let color = document.querySelector(".preview__display");
  color.classList.remove("palette1");
  color.classList.remove("palette2");
  color.classList.add("palette3");
}

selectPalette3.addEventListener("click", changeColor3);
