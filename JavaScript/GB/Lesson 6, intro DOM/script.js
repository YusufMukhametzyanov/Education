//===========HOME WORK===========

/* 
1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
*/

// const superLinkEl = document.getElementById("super_link");
// console.log(superLinkEl);

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
*/

// const cardLinkEl = document.querySelectorAll(".card-link");

// cardLinkEl.forEach((element) => {
//   element.innerHTML = "ссылка";
// });

/* 
3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/

// const cardBodyEl = document.querySelector(".card-body");
// const cardLinkEl2 = cardBodyEl.querySelectorAll(".card-link");
// console.log(cardLinkEl2);

/* 
4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
*/

// const dataNumberEl = document.querySelector("[data-number='50']");
// console.log(dataNumberEl);

/* 
5. Выведите содержимое тега title в консоль.
*/

// const titleEl = document.querySelector("title").textContent;
// console.log(titleEl);

/* 
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
*/

// const cardTitleEl = document.querySelector(".card-title");
// console.log(cardTitleEl.parentElement);

/* 
7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
*/

// const paragraphEl = document.createElement("p");
// paragraphEl.textContent = "Привет";

// const cardEl = document.querySelector(".card");
// cardEl.prepend(paragraphEl);
// console.log(cardEl);

/* 
8. Удалите тег h6 на странице.
*/

// const h6El = document.querySelector("h6");
// h6El.remove();

//==========WORKSHOP===========

//Task 1

/* 
<div id="block"> <p>1</p> <p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
*/

// console.log(document.querySelector("#block").querySelector("p"));

/* 
Получите ссылку на первый абзац с классом www. и вывести его в консоль <p class="www">text 1</p> <p class="www">text 2</p>
*/

// console.log(document.querySelector(".www"));

//Task 2

/* 
Дан тег <a class="link" href="#">link text html</a> Вам необходимо поменять текст внутри ссылки на “link text js” Заменить href, на значение https://developer.mozilla.org/ru/
*/

// const linkEl = document.querySelector(".link");
// linkEl.textContent = "https://developer.mozilla.org/ru/";
// linkEl.setAttribute("href", "https://developer.mozilla.org/ru/");

/* 
Дан тег <img class="photo" src="" alt=""> Вам необходимо с помощью js поменять значение src на любое изображение из интернета
*/

// document
//   .querySelector(".photo")
//   .setAttribute(
//     "src",
//     "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-37.jpg"
//   );
// document.querySelector(".photo").setAttribute("alt", "Photo red cats");

// Task 3

/* 
Дан тег <div class="content"></div> Создайте новый элемент p Добавьте в него текст “Новый текстовый элемент” Добавьте созданный элемент внутри <div class="content"></div> Удалите добавленный узел
*/

const contentEl = document.querySelector(".content");
const pEl = document.createElement("p");

pEl.textContent = "Новый текстовый элемент";
contentEl.append(pEl);

pEl.remove();

// Task 4

/* 
Создать элемент button, добавить в блок <div class="content"></div> При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
*/

// const buttonEl = document.createElement("button");
// buttonEl.textContent = "Submit";
// contentEl.append(buttonEl);

// let countUser = 0;

// buttonEl.addEventListener("click", function (e) {
//   countUser++;
//   console.log(`User press to button ${countUser} times`);
// });

// Task 5

/* 
Дан тег <div class="content"></div> Создайте с помощью javascript новый элемент button Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/

// buttonEl.addEventListener("click", function (e) {
//   buttonEl.innerText = "Text has send";
// });
