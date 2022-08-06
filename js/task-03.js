const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
/*
Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

<ul class="gallery"></ul>
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
*/



const galleryBlock = document.querySelector('.gallery');

const galleryItems = images.map(({ url, alt }) => {
  const galleryItem2 = `<li><img class = "gallery__item" src = ${url} alt = ${alt}}></li>`
  return galleryItem2
})


galleryBlock.insertAdjacentHTML("afterbegin", galleryItems.join(""));
/*
elem.insertAdjacentHTML(position, string);

elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/


// const galleryBlock = document.querySelector('.gallery');

// const galleryItems = images.map(({ url, alt }) => {
//   const galleryItem = document.createElement('img');
//   galleryItem.classList.add('gallery__item')
//   galleryItem.setAttribute('src', url)
//   galleryItem.setAttribute('alt', alt)
//   return galleryItem
// })

// console.log(...galleryItems);

// console.log(galleryItems);
// galleryBlock.append(...galleryItems)

// galleryBlock.insertAdjacentHTML("afterbegin", galleryItems.join(""));