//=========WORKSHOP=========

// Task 1

/* 
<div class="block"> </div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
● Цвет текста синий ● Рамка сплошная черная ● Цвет фона #f8f8f8 ● Внутренний отступ 16px Добавить данному блоку класс item_1 (использовать setAttribute)
*/
// const divBlockEl = document.querySelector(".block");
// const divItemEl = document.createElement("div");
// divItemEl.className = "item";
// const pTextEl = document.createElement("p");
// pTextEl.textContent = "Element inside";
// divItemEl.append(pTextEl);
// divBlockEl.append(divItemEl);
// pTextEl.setAttribute("class", "item_1");

// Task 2

/* 
<div class="elem"> <img src="photo.png" alt="photo"> <div class="content"> <h2 class="heading">Lorem, ipsum dolor.</h2> <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing
elit. Recusandae, ea!</p> </div>
</div> Необходимо с помощью querySelector найти параграф с классом text
Вывести в консоль соседний элемент h2 Вывести в консоль родительский элемент content Вывести в консоль картинку Вывести в консоль родительский элемент elem
*/

// const pTextEl = document.querySelector(".text");
// console.log(pTextEl.previousElementSibling);
// console.log(pTextEl.parentElement);
// console.log(pTextEl.parentElement.previousElementSibling);
// console.log(pTextEl.parentElement.parentElement);

// Task 3

/* 
<div class="item"> <div class="elem"> <div class="info"> <h2 class="subtitle">Lorem, ipsum dolor.</h2>
</div> </div>
</div> С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей
*/

// const h2El = document.querySelector("h2");
// console.log(`${h2El.parentElement}
// ${h2El.parentElement.parentElement}
// ${h2El.parentElement.parentElement.parentElement}`);

// Task 4

/* 
<form action="#"> <input type="text"> <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода Цвет у рамки сделать красным
*/

// const btnEl = document.querySelector(".btn");
// const bodyEl = document.querySelector("body");
// const inputEl = document.querySelector("input");
// const h2El = document.createElement("h2");
// bodyEl.append(h2El);

// btnEl.addEventListener("click", function (e) {
//   if (inputEl.value) {
//     h2El.textContent = "Well done";
//     h2El.style.border = "1px solid green";
//   } else {
//     h2El.textContent = "Вы не заполнили поле ввода";
//     h2El.style.border = "1px solid red";
//   }
// });

// Task 5

/* 
Дан тег <div class="content"></div> Создайте с помощью javascript новый элемент button Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/

// const contentEl = document.querySelector(".content");
// const btnEl = document.createElement("button");
// btnEl.innerText = "Submit";

// contentEl.append(btnEl);

// btnEl.addEventListener("click", function (e) {
//   btnEl.textContent = "Text sent";
// });
