// const text = document.querySelectorAll('.text')
// console.log(text);
// text.forEach(element => {
//     console.log(element)
// });
// console.log('\t')
// for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);
// };

// const heading2 = document.getElementById('heading');
// const heading3 = document.querySelector('#heading');
// console.log(heading2);
// console.log(heading3);

// const listEls = document.getElementsByClassName('list');
// console.log(listEls);
// const listElsQs = document.querySelectorAll('.list');
// console.log(listElsQs);


// const changeH3El = document.querySelector('.title');
// changeH3El.textContent = 'My first changes for H1 Elements in JS, ElhamduliLlah!!!';

// const heading2 = document.querySelector('#heading');
// heading2.remove();

// const divElement = document.querySelector('.newDiv');
// const paragraphElement = document.createElement('p');

// paragraphElement.textContent = 'New text and his so many, well done';
// const newBtn = document.querySelector('.newButton');


// newBtn.onclick = function () {
//     newBtn.textContent = 'Change button';
//     divElement.appendChild(paragraphElement);
// }

// Tasks from seminar: Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль

// const divIdBlock = document.querySelector('#block');
// console.log(divIdBlock);

// Получите ссылку на первый абзац с классом www. и вывести его в консоль

// const paragraphClassWww = document.querySelector('.www');
// console.log(paragraphClassWww);

/* Дан тег <a class="link" href="#">link text html</a> Вам необходимо поменять текст внутри ссылки на “link text js” Заменить href, на значение https://developer.mozilla.org/ru/
Дан тег <img class="photo" src="" alt=""> Вам необходимо с помощью js поменять значение src на любое изображение из интернета */

// const aClassLinkText = document.querySelector('.link');
// aClassLinkText.textContent = 'link text js';
// aClassLinkText.href = 'https://developer.mozilla.org/ru/';
// aClassLinkText.title = 'MDN';

// const imgElPhoto = document.querySelector('.photo');
// imgElPhoto.src = 'img/Children_study.JPG';
// imgElPhoto.onclick = function () {
//     imgElPhoto.src = 'img/Children_fun.JPG';
// };

/* Задание 3 (тайминг 20 минут)
Дан тег <div class="content"></div> Создайте новый элемент p Добавьте в него текст “Новый текстовый элемент” Добавьте созданный элемент внутри <div class="content"></div> Удалите добавленный узел */

// const divContent = document.querySelector('.content');
// const newParagraph = document.createElement('p');

// newParagraph.textContent = 'New text element';
// divContent.appendChild(newParagraph);

// newParagraph.remove();

/* Задание 4 (тайминг 15 минут)
Создать элемент button, добавить в блок <div class="content"></div> При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку */

// const myButton = document.createElement('button');
// myButton.textContent = 'Submit';
// divContent.appendChild(myButton);

// let count = 0;
// myButton.onclick = function () {
//     count++;
//     console.log(`The user clicked on the button ${count} times`);
// };

/* Задание 4 (тайминг 20 минут)
Дан тег <div class="content"></div> Создайте с помощью javascript новый элемент button Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен” */

// myButton.onclick = function () {
//     myButton.textContent = 'Text sent';
// };

/*====================HOME WORK=================*/

/* 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
[]()
2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
[]()
3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
[]()
4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
[]()
5. Выведите содержимое тега title в консоль.
[]()
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
[]()
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

8. Удалите тег h6 на странице. */

const idSuperLink = document.getElementById('super_link');
console.log(idSuperLink);

const cardLinks = document.querySelectorAll('.card-link');

cardLinks.forEach(element => {
    element.textContent = 'Link';
});

const divCardBody = document.querySelector('.card-body');
const CardBobyCardLinks = divCardBody.querySelectorAll('.card-link');
console.log(CardBobyCardLinks);

const dataNumber = document.querySelectorAll('[data-number="50"]');
console.log(dataNumber)

const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);

const card = document.querySelector('.card');
const newP = document.createElement('p');
newP.textContent = 'Hello';
card.prepend(newP);
console.log(card);

const h6 = document.querySelector('h6')
h6.remove();