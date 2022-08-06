/*

Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. Якщо інпут порожній,
 у спані повинен відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

*/

const nameOutput = document.querySelector('#name-output');

const nameInput = document.querySelector('#name-input');

nameInput.addEventListener("input", ({ currentTarget: { value } }) => {
    value.trim().length !== 0 ?
        nameOutput.textContent = value : nameOutput.textContent = 'Anonymous';
})