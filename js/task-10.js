const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


/*

Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити, 
після чого рендериться колекція. 
Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 

Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
 у такий спосіб видаляючи всі створені елементи.
*/
// const inputNumber = document.querySelector('#controls[type="number"]')
const inputNumber = document.querySelector('input')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

let amount = 0;


inputNumber.addEventListener('input', (event) => {
  amount = Number(event.currentTarget.value);
});

createBtn.addEventListener('click', () => createBoxes(amount));

destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {

  let quantityBoxes = '';
  for (let i = 0; i < amount; i++) {
    let hexColor = getRandomHexColor();
    quantityBoxes += `<div style="background-color:${hexColor}; width:${30 + (i * 10)}px; height: ${30 + (i * 10)}px">${hexColor}</div>`;
  }

  boxes.innerHTML = quantityBoxes;
}

function destroyBoxes() {
  boxes.innerHTML = ''
}
