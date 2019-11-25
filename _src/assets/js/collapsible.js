"use strict";

const collapsibleArr = document.querySelectorAll(".collapsible");
const fieldsetArr = document.querySelectorAll("fieldset");

for (let i = 0; i < collapsibleArr.length; i++) {
  collapsibleArr[i].addEventListener("click", toggleItem);
  function toggleItem() {
    toggle(i);
  }
}

function toggle(itemIndex) {
  const sel = fieldsetArr[itemIndex];
  if (sel.classList.contains("hidden")) {
    sel.classList.remove("hidden");
    sel.classList.add("open");
  } else {
    sel.classList.add("hidden");
    sel.classList.remove("open");
  }
}





