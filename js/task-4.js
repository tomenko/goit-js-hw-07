'use strict';
/* Счетчик состоит из спана и кнопок, которые должны увеличивать 
и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */
    

const elemRef = document.querySelector('#counter');
const btnIncrementRef = document.querySelector("[data-action='increment']");
const btnDecrementRef = document.querySelector("[data-action='decrement']");
const spanRef = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    spanRef.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    spanRef.textContent = counterValue;
};

btnIncrementRef.addEventListener('click', increment);
btnDecrementRef.addEventListener('click', decrement);


