'use strict';
/* Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий
в ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега h2) 
и количество элементов в категории (всех вложенных в него элементов li). */


const elemRef = document.querySelector('#categories');

console.log(`В списке ${elemRef.children.length} категории.`);

//1-й способ решения
const categoryArray = document.querySelectorAll(`.item`);
for (let elem of categoryArray) {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(`Количество элемментов: ${elem.lastElementChild.children.length}`)
};

//2-й способ решения
/* const childrenElem = elemRef.children
for(let element of childrenElem) {
    console.log(`Категория: ${ title.querySelector('h2').textContent }`);
    console.log(`Количество элементов: ${ title.querySelector('ul').children.length }`)
}; */

//3-й способ решения
/* const getSubList = elemRef.forEach((sublist) => {
  const title = sublist.children[0].textContent;
  const quantity = sublist.children[1].querySelectorAll("li").length;

  console.log(`Категория: ${title}`);
  console.log(`Количество элементов: ${quantity}`);
}); */

//4-й способ решения
/* const getSubList = elemRef.forEach (title => {
    console.log(`Категория: ${ title.querySelector('h2').textContent }`);
    console.log(`Количество элементов: ${ title.querySelector('ul').children.length }`);
}); */










