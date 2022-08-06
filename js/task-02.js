/*Завдання 2
HTML містить порожній список ul#ingredients.

< ul id = "ingredients" ></ul >
  JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент < li >.Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі < li > за одну операцію у список ul#ingredients.
*/



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsBlock = document.querySelector('#ingredients');

const addMarckUp =
  ingredients.map(element => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.classList.add('item');
    ingredientsItem.textContent = element;
    return ingredientsItem;
  });



console.log(...addMarckUp);

ingredientsBlock.append(...addMarckUp)

/*

Щоб створений елемент відображався на сторінці, його необхідно додати 
до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента element, 
для цього існують методи.

element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.

element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.

element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.

element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.

У всіх цих методах el - це елементи або рядки, в будь-якому поєднанні і кількості. 
Рядки додаються як текстові вузли.

*/


/*
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.

elem.classList.add(cls) - додає клас cls до списку класів елемента.

elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.

elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.

elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/