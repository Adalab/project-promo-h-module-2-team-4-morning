'use strict';

const collapsibleArr = document.querySelectorAll('.collapsible');
const fieldsetArr = document.querySelectorAll('fieldset');

for (let i = 0; i < collapsibleArr.length; i++) {
  collapsibleArr[i].addEventListener('click', toggleItem);

  function toggleItem() {
    toggle(i);
  }
}

function toggle(itemIndex) {
  fieldsetArr[0].classList.add('hidden');
  fieldsetArr[1].classList.add('hidden');
  fieldsetArr[2].classList.add('hidden');
  const sel = fieldsetArr[itemIndex];
  if (sel.classList.contains('hidden')) {
    sel.classList.remove('hidden');
    sel.classList.add('open');
  } else {
    sel.classList.add('hidden');
    sel.classList.remove('open');
  }
}
