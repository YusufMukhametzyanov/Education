//===============HOMEWORK===============

/* Task
При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
*/

const inputEl = document.querySelector("input");
const spanEl = document.querySelector("span");

inputEl.addEventListener("keydown", function (e) {
  spanEl.textContent = inputEl.value;
});

/* Task 2
При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.
*/

const messageBtn = document.querySelector(".messageBtn");
const messageEl = document.querySelector(".message");

messageBtn.addEventListener("click", function (e) {
  messageEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageEl.style.visibility = "visible";
});

/* Task 3
Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const submitForm = document.querySelector(".submitForm");
const formControl = document.querySelectorAll(".form-control");
console.log(formControl);

submitForm.addEventListener("click", function (e) {
  if (formControl[0].value === "") {
    submitForm.setAttribute("type", "button");
    formControl[0].style.borderColor = "red";
    formControl[0].className = "error";
  }
  if (formControl[0].value) {
    submitForm.setAttribute("type", "button");
    formControl[0].style.borderColor = "green";
    formControl[0].classList.replace("error", "form-control");
  }
  if (formControl[1].value === "") {
    submitForm.setAttribute("type", "button");
    formControl[1].style.borderColor = "red";
    formControl[1].classList.replace("form-control", "error");
  }
  if (formControl[1].value) {
    submitForm.setAttribute("type", "button");
    formControl[1].style.borderColor = "green";
    formControl[1].classList.replace("error", "form-control");
  }
});

submitForm.addEventListener("keydown", function (e) {
  if (formControl[0].value === "") {
    submitForm.setAttribute("type", "button");
    formControl[0].style.borderColor = "red";
    formControl[0].className = "error";
  }
  if (formControl[0].value) {
    submitForm.setAttribute("type", "button");
    formControl[0].style.borderColor = "green";
    formControl[0].classList.replace("error", "form-control");
  }
  if (formControl[1].value === "") {
    submitForm.setAttribute("type", "button");
    formControl[1].style.borderColor = "red";
    formControl[1].classList.replace("form-control", "error");
  }
  if (formControl[1].value) {
    submitForm.setAttribute("type", "button");
    formControl[1].style.borderColor = "green";
    formControl[1].classList.replace("error", "form-control");
  }
});

//=============WORKSHOP=============

/* Task
В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
Добавить кнопку отправить При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
*/

const formEl = document.querySelector(".formEl");
const inputEl2 = document.querySelector(".inputEl");
const buttonEl = document.createElement("button");
buttonEl.innerText = "Submit";
formEl.append(buttonEl);
const h3El = document.querySelector(".h3El");

buttonEl.addEventListener("click", function (e) {
  if (inputEl2.checked != true) {
    h3El.className = "visibleElements";
  } else h3El.className = "hiddenElements";
});

/* Task 2
В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
Кнопка отправить Если выбран чай, необходимо вывести сообщение “Чай закончился”
Если выбран кофе, необходимо вывести соообщение “кофе закончился”
*/

const formForTeaCoffe = document.querySelector(".formForTeaCoffee");
const buttonEl2 = document.querySelector(".buttonEl2");
const teaEl = document.querySelector(".tea");
const coffeEl = document.querySelector(".coffee");
const productEnd = document.querySelector(".productEnd");

buttonEl2.addEventListener("click", function (e) {
  if (teaEl.checked) {
    productEnd.textContent = "Чай закончился";
  }
  if (coffeEl.checked) {
    productEnd.textContent = "Кофе закончился";
  }
});

/* Task 3
Создать поле ввода (пароль) Кнопка отправить Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
*/

const inputPassword = document.querySelector(".inputPassword");
const buttonEl3 = document.querySelector(".buttonEl3");
const passwordIncorrect = document.querySelector(".passwordIncorrect");

buttonEl3.addEventListener("click", function (e) {
  if (inputPassword.value === "пароль") {
    inputPassword.style.borderColor = "green";
    passwordIncorrect.textContent = "";
  }
  if (inputPassword.value != "пароль") {
    inputPassword.style.borderColor = "red";
    passwordIncorrect.textContent = "Incorrect password";
  }
});

/* Task 4
Создать поле ввода и под ним заголовок h1 с текстом “Заголовок” При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
*/

const inputFromLabel = document.querySelector(".inputFromLabel");
const headerForInput = document.querySelector(".headerForInput");

inputFromLabel.addEventListener("input", function (e) {
  headerForInput.textContent = inputFromLabel.value;
});
