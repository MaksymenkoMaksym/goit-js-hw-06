// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories,
//знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і
//кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categoriesTree = document.querySelector('#categories')

const numberOfCategories = (categoriesTree) => {

    const arrayCategories = categoriesTree.querySelectorAll("h2");

    console.log(`Number of categories: ${arrayCategories.length}`)

    arrayCategories.forEach((el) => {
        console.log(`Category: ${el.textContent}`)
        console.log(`Elements: ${el.nextElementSibling.querySelectorAll("li").length}.`)
    });
}




numberOfCategories(categoriesTree);

// console.log(document);
// console.log(window);



/*Для навігації по цій ієрархії елементи мають наступні властивості.

 elem.parentNode - вибере батьківський elem.

 elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.

 elem.children - псевдомасив, зберігає тільки дочірні вузли - елементи, тобто ті, що відповідають тегам.

 elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.

 elem.firstElementChild - вибере перший дочірній вузол - елемент всередині elem.

 elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.

 elem.lastElementChild - вибере останній дочірній вузол - елемент всередині elem.

 elem.previousSibling - вибере елемент «зліва» від elem(його попереднього сусіда).

 elem.previousElementSibling - вибере вузол - елемент «зліва» від elem(його попереднього сусіда).

 elem.nextSibling - вибере елемент «праворуч» від elem(його наступного сусіда)

 elem.nextElementSibling - вибере вузол - елемент «праворуч» від elem(його наступного сусіда).
*/