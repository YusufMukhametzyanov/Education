// const inputEl = document.querySelector('.check');
// const formEl = document.querySelector('.form');


// formEl.addEventListener('submit', function (e) {
//     if (inputEl.checked) {
//         console.log('Well done');
//     } else {
//         e.preventDefault();
//         const divError = document.createElement('div');
//         divError.textContent = 'You have not selected the field';
//         divError.setAttribute('class', 'divError');
//         formEl.insertBefore(divError, formEl[1]);
//         check2.setAttribute('class', 'check2');
//         console.log('You have not selected the field');
//     }
// });

// formEl.addEventListener('submit', function (e) {
//     console.log(inputEl.checked ? 'Yes' : 'No');
// });



// const form = document.forms[0];
// const list = document.querySelector('ul'); list.addEventListener('click', (e) => {
//     console.log('В первом UL в фазе захвата')
//     const propagationControlMethodName =
//         form.elements['propagation-control'].value
//     if (propagationControlMethodName) {
//         e[propagationControlMethodName]()
//     }
// }, true)
// list.addEventListener('click', () => {
//     console.log('Во втором UL в фазе захвата')
// }, true)
// list.addEventListener('click', () => {
//     console.log('В первом UL в фазе всплытия')
// })
// Array.from(list.children).forEach((child) => {
//     child.addEventListener('click', () => {
//         console.log('В каждом LI в фазе всплытия')
//     })
// });

// const eventOptions = { bubbles: true, cancelable: true }
// const event1 = new Event('click', eventOptions)
// event1.view = window

// const mouseEvent = new MouseEvent('click', {
//     ...eventOptions,
//     view: window,
// })

// document.addEventListener('click', function (e) {
//     console.log(event1.isTrusted);
// });

// const button = document.querySelector('button');
// button.dispatchEvent(event1)
// button.dispatchEvent(mouseEvent)
// button.click();

// const rabbit = document.querySelector('#rabbit')
// const button = document.querySelector('button')

// button.addEventListener('click', function (e) {
//     rabbit.hidden = true;
// });


// rabbit.addEventListener('hide', (event) => {
//     if (confirm('Вызвать event.preventDefault()?')) {
//         event.preventDefault()
//     }
// })
// button.addEventListener(() => {
//     const event = new CustomEvent('hide', { cancelable: true })
//     const defaultPrevented = !rabbit.dispatchEvent(event)
//     if (defaultPrevented) {
//         console.log('Отменено обработчиком события');
//     } else {
//         rabbit.hidden = true
//     }
// })

/* Задание 1 (тайминг 20 минут)
В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
Добавить кнопку отправить При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями” */

// const button = document.querySelector('button');
// const inputFromPasswod = document.querySelector('inputFromPasswod');
// const divForForm = document.createElement('div');
// const strongTeg = document.createElement('strong');
// divForForm.style.fontSize = '13px';
// strongTeg.appendChild(divForForm);
// button.before(strongTeg);

// button.addEventListener('click', function (e) {
//     if (inputFromPasswod.checked) {
//         divForForm.style.color = 'Green';
//         divForForm.textContent = 'Cobgratulation!';
//     } else {
//         divForForm.style.color = 'red';
//         divForForm.textContent = 'You must agree to the terms'
//     }
// });

/* Задание 2 (тайминг 25 минут)
В html создать 2 элемента радио кнопки (inputFromPasswod type=”radio”) и текст “Чай”, “Кофе” соответственно
Кнопка отправить Если выбран чай, необходимо вывести сообщение “Чай закончился”
Если выбран кофе, необходимо вывести соообщение “кофе закончился” */

// const button = document.querySelector('button');
// const inputTea = document.querySelector('#Tea');
// const inputCoffe = document.querySelector('#Coffe');
// const divMessage = document.createElement('div');
// button.before(divMessage);
// divMessage.style.color = 'red';


// button.addEventListener('click', function (e) {
//     if (inputTea.checked) {
//         divMessage.textContent = 'Tea if over';
//     }
//     if (inputCoffe.checked) {
//         divMessage.textContent = 'Coffe if over';
//     }
//     else {
//         divMessage.textContent = 'You must to choose an option';
//     }
// });

/* Задание 3 (тайминг 20 минут)
Создать поле ввода (пароль) Кнопка отправить Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный” */

// const inputFromPasswod = document.querySelector('#password');
// const button = document.querySelector('button');


// button.addEventListener('click', function (e) {
//     if (inputFromPasswod === 'пароль' || inputFromPasswod.value === 'password') {
//         inputFromPasswod.setAttribute('class', 'inputForTextAccept');
//     } else {
//         inputFromPasswod.setAttribute('class', 'inputForTextError');
//     }
// });

/* Задание 4 (тайминг 20 минут)
Создать поле ввода и под ним заголовок h1 с текстом “Заголовок” При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода */

// const body = document.querySelector('body');
// const script = document.querySelector('script');
// const inputFrom4Task = document.createElement('input');
// script.before(inputFrom4Task);
// const headerFor4Task = document.createElement('h1');
// script.before(headerFor4Task);
// headerFor4Task.textContent = 'Header';
// console.log(body);

// inputFrom4Task.addEventListener('input', (e) => {
//     headerFor4Task.textContent = inputFrom4Task.value;
// });

// ===========HOME WORK===========

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться. 

const inputIdFrom = document.querySelector('#from')
const spanForInput = document.querySelector('#spanForInput')

inputIdFrom.addEventListener('input', () => {
    spanForInput.textContent = inputIdFrom.value;
})

/* 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:

- добавить два класса: animate__fadeInLeftBig
    
    animated и animate
    
- поставить данному элементу стиль visibility в значение 'visible'. */

const messageBtn = document.querySelector('.messageBtn')
const message = document.querySelector('.message')

messageBtn.addEventListener('click', function (e) {
    message.classList.add('animate__fadeInLeftBig', 'animated', 'animate')
});

/* 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:

- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать. */

const form_control = document.querySelectorAll('.form-control')
const btnFrom3Task = document.querySelector('.btnFrom3Task')

btnFrom3Task.addEventListener('click', () => {
    if (form_control[0].value === "") {
        form_control[0].classList.add('error')
    }
    if (form_control[1].value === "") {
        form_control[1].classList.add('error')
    }
});
btnFrom3Task.addEventListener('click', () => {
    if (form_control[0].value != "") {
        form_control[0].classList.remove('error')
    }
    if (form_control[1].value != "") {
        form_control[1].classList.remove('error')
    }
});


form_control[0].addEventListener('input', () => {
    if (form_control[0].value === "") {
        form_control[0].classList.add('error')
    }
    if (form_control[0].value != "") {
        form_control[0].classList.remove('error')
    }
});

form_control[1].addEventListener('input', () => {
    if (form_control[1].value === "") {
        form_control[1].classList.add('error')
    }
    if (form_control[1].value != "") {
        form_control[1].classList.remove('error')
    }
});
