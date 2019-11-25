'use strict';

const collapsibleArr = document.querySelectorAll('.collapsible');

const collapsible1 = collapsibleArr[0];
function show1() {
  const article = document.querySelector('.design-box');
  if (article.classList.contains('hidden')) {
    article.classList.remove('hidden');
    collapsible1.classList.add('open');
  } else {
    article.classList.add('hidden');
    collapsible1.classList.remove('open');
  }
}
collapsible1.addEventListener('click', show1);

const collapsible2 = collapsibleArr[1];
function show2() {
  const article = document.querySelector('.fill');
  if (article.classList.contains('hidden')) {
    article.classList.remove('hidden');
    collapsible2.classList.add('open');
  } else {
    article.classList.add('hidden');
    collapsible2.classList.remove('open');
  }
}
collapsible2.addEventListener('click', show2);

const collapsible3 = collapsibleArr[2];
function show3() {
  const article = document.querySelector('.share');
  if (article.classList.contains('hidden')) {
    article.classList.remove('hidden');
    collapsible3.classList.add('open');
  } else {
    article.classList.add('hidden');
    collapsible3.classList.remove('open');
  }
}
collapsible3.addEventListener('click', show3);
