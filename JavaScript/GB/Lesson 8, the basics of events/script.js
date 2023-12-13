//=============WORKSHOP=============

/* Task 1
Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
*/

// window.addEventListener("DOMContentLoaded", function (e) {
//   console.log("Все теги прогрузились");
// });

/* Task 2
Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
*/

// window.addEventListener("load", function (e) {
//   console.log("Страница загрузилась");
// });

/* Task 3 
При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.
*/

// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener("click", function (e) {
//   if (e.target.className === "super_element") {
//     console.log(
//       `Класс "super_element" присутствует в элементе ${e.target.localName}`
//     );
//   } else console.log(`Класс "super_element" отсутствует в элементе ${e.target.localName}`);
// });

/* Task 4
Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
*/

// const textareaEl = document.querySelector("textarea");

// textareaEl.addEventListener("mouseover", function () {
//   console.log("Вы навели на textarea");
// });

/* Task 5
Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
*/

// const ulEl = document.querySelector("ul");
// const buttonEls = ulEl.querySelectorAll("button");

// ulEl.addEventListener("click", function (e) {
//   if (
//     e.target === buttonEls[0] ||
//     e.target === buttonEls[1] ||
//     e.target === buttonEls[2] ||
//     e.target === buttonEls[3]
//   ) {
//     console.log(e.target.textContent);
//   }
// });

/* Task 6
Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
*/

// Предполагаю если пойман более глобальный тег, событие из него будет выводится позже

/* Task 7
С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
*/

// const liEls = document.querySelectorAll("li");

// for (let index = 0; index < liEls.length; index++) {
//   if (index % 2) {
//     liEls[index].style.backgroundColor = "red";
//   }
// }

//==========HOMEWORK============

/* Task 1
В html создать кнопку button После загрузки страницы вывести в консоль текст “страница загрузилась”
Добавить событие onclick которое выводит в консоль текст “событие onclick”
Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
*/

// window.addEventListener("load", function (e) {
//   console.log("Page loaded");
// });

// const buttonEl = document.querySelector(".button");
// buttonEl.onclick = () => {
//   console.log("Event onclick");
// };

// buttonEl.addEventListener("click", function (e) {
//   console.log("Event addEventListener");
// });

/* Task 2 
Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно) Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
*/

const button2El = document.querySelectorAll(".button2");

button2El.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(e.target);
  });
});

const body = document.querySelector("body");
const button4 = document.createElement("button");
button4.textContent = "4";
button4.className = "button2";
body.append(button4);

let countForButton4 = 0;

button4.addEventListener("click", function (e) {
  countForButton4++;
  console.log(`You clicked on button ${countForButton4} times`);
});

const button5 = document.createElement("button");
button5.textContent = "5";
button5.className = "button2";
body.append(button5);

button5.addEventListener("click", function (e) {
  button5.textContent = "Вы нажали на эту кнопку";
});

/* Task 3
Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
Создать вторую кнопку, которая будет удалять созданный заголовок h1 Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы
убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
*/

const button6 = document.createElement("button");
const h1El = document.createElement("h1");
h1El.style.color = "red";
h1El.innerText = "New header";
body.append(button6);
button6.textContent = "Submit";

button6.addEventListener("click", function (e) {
  body.append(h1El);
});

const button7 = document.createElement("button");
button7.textContent = "Remove header";
body.append(button7);

button7.addEventListener("click", function (e) {
  h1El.remove();
});

const button8 = document.createElement("button");
button8.textContent = "Button 8";
body.append(button8);

button8.addEventListener("mouseover", function (e) {
  console.log("Вы навели на данную кнопку");
});

button8.addEventListener("mouseout", function (e) {
  console.log("Наведения на кнопку больше нет");
});

/* Task 4
Создать в html список состоящий из 3-х произвольных элементов li Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
Создать кнопку, которая будет удалять первый элемент из созданного списка
Создать кнопку, при клике на которую ей добавляется класс “click”
*/

const button9 = document.createElement("button");
button9.textContent = "Добавить элемент в список";
body.append(button9);

const ul2 = document.querySelector(".ul2");

button9.addEventListener("click", function (e) {
  const liEl = document.createElement("li");
  liEl.textContent = "Новый элемент списка";
  liEl.className = "liForTask4";
  ul2.append(liEl);
});

const button10 = document.createElement("button");
button10.textContent = "Удалить первый элемент из списка";
body.append(button10);

const liEls2 = document.querySelectorAll(".liForTask4");

let count = 0;

button10.addEventListener("click", function (e) {
  liEls2[count].remove();
  count++;
});

const button11 = document.createElement("button");
button11.innerText = "Button 11";
body.append(button11);

button11.addEventListener("click", function (e) {
  button11.setAttribute("class", "click");
});

/* Task 5
Дан тег <div class="content"></div> Создайте с помощью javascript новый элемент button Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/

const content = document.querySelector(".content");
content.innerHTML = '<button class="buttonFromContent">Submit</button>';
const buttonFromContent = document.querySelector(".buttonFromContent");

buttonFromContent.addEventListener("click", function (e) {
  buttonFromContent.innerText = "Text has sent";
});
