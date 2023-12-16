/* Task 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.
*/

const myJsonVar = JSON.stringify(learnJSON);

/* Task 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию).
*/

const figures = document.querySelectorAll(".figure");
const imgFigure = document.querySelector(".imgFigure");
const headers = document.querySelectorAll(".header");
const paragraphs = document.querySelectorAll(".paragraph");

let count = 0;

figures.forEach((element) => {
  element.children[0].setAttribute("src", myData[count].picture);
  headers[count].textContent = myData[count].header;
  paragraphs[count].textContent = myData[count].paragraph;
  count++;
});
