'use strict';

const box = document.querySelector('.box');
const closeBox = document.querySelector('#close');
const openBox = document.querySelector('#open');
const content = document.querySelector('.content');

openBox.addEventListener('click', () => {
    box.style.width = `370px`;
    closeBox.style.display = 'block';
    openBox.style.display = 'none';
    content.style.display = 'block';
});

closeBox.addEventListener('click', () => {
    box.style.width = `70px`;
    closeBox.style.display = 'none';
    openBox.style.display = 'block';
    content.style.display = 'none';
})