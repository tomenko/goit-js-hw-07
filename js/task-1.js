'use strict';
/* Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий
в ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега h2) 
и количество элементов в категории (всех вложенных в него элементов li). */

const elemRef = document.querySelector('#categories');

console.log('В списке', elemRef.children.length, 'категории.');

const categoryArray = document.querySelectorAll(`.item`);
for(let elem of categoryArray) {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(`Количество элемментов: ${elem.lastElementChild.children.length}`)
};

console.log(elemRef.children, `Количество категорий : ${elemRef.children.length}`);

const childrenElem = elemRef.children
for(let element of childrenElem) {
    console.log('Категория:', element.querySelector("h2").textContent);
    console.log('Количество элементов:', element.querySelector("ul").children.length)
};








