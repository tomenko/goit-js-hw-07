'use strict';
/* Напиши скрипт, который для каждого элемента массива 
ingredients создаст отдельный li, после чего вставит все 
li за одну операцию в список ul.ingredients. Для создания 
DOM-узлов используй document.createElement(). */

const elemRef = document.querySelector('#ingredients');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


/* ingredients.map(element => elemRef.insertAdjacentHTML("beforeend", `<li> ${element}</li>`));
менее подходящий вариант т.как при каждом
переборе, li будет добавляться в DOM поочерёдно*/


const liArr = ingredients.map( elem => {
    const li = document.createElement( `li` );
    li.textContent = elem;
    return li;
} );
elemRef.append( ...liArr );



