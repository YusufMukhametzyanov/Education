// const buttonEl = document.querySelector('.button');

// buttonEl.addEventListener('click', function (event) {
//     console.log('Hello basics of event');
// });

// const button = document.querySelector('button');
// const onceListener = () => {
//     console.log('Будет вызван только один раз с включённой опцией "once"')
// }
// const onceListenerManual = (event) => {
//     console.log('Будет вызван только один раз и удалён вручную через вызов removeEventListener')
//     event.target.removeEventListener('click', onceListenerManual)
// }
// document.addEventListener('click', onceListener, { once: true })
// document.addEventListener('click', onceListenerManual)

// const list = document.querySelector('ul')
// const listener = (event) => {
//     console.log(event.target, event.currentTarget)
// }
// list.addEventListener('click', listener)

// ['fourth', 'fifth'].forEach((text) => {
//     const listItem = document.createElement('li')
//     listItem.append(text)
//     list.append(listItem)
// })

// window.onload = () => { console.log(`Page loaded all`) };
// const button = document.querySelector('button');
// button.onclick = () => {
//     console.log(`Event onclick`);
//     alert('Yo');
// };
// window.addEventListener('click', function (event) {
//     console.log('Event addEventListener');
// });

// const divForButtons = document.querySelector('.divForButtons');
// const button4 = document.createElement('button');
// const button5 = document.createElement('button');
// button4.textContent = 'Button4';
// button5.textContent = 'Button5';
// divForButtons.append(button4);
// divForButtons.append(button5);

// divForButtons.addEventListener('click', function (event) {
//     console.log(event.target);
// });

// let count = 0;
// button4.onclick = () => {
//     count++;
//     console.log(`Вы нажали на кнопку 4 ${count} раз`);
// };

// button5.onclick = () => {
//     button5.textContent = 'You pressed this button';
//     button5.style.backgroundColor = 'aqua';
// };

// const body = document.querySelector('body');
// const button = document.createElement('button');
// button.textContent = 'Button';
// body.append(button);

// const h1 = document.createElement('h1');
// h1.textContent = 'New header';

// button.addEventListener('click', function (e) {
//     body.append(h1);
// });

// const button2 = document.createElement('button');
// button2.textContent = 'button 2';
// body.append(button2);

// button2.onclick = () => {
//     h1.remove();
// };

// const button3 = document.createElement('button');
// button3.textContent = 'button 3';
// body.append(button3);

// button3.addEventListener('mouseover', function (e) {
//     console.log('You have pointed to this button');
// });

// button3.addEventListener('mouseleave', function (e) {
//     console.log('There is no more pointing at the button');
// });

// const button4 = document.createElement('button');
// const button5 = document.createElement('button');
// button4.textContent = 'Add';
// button5.textContent = 'Delete'
// body.prepend(button4, button5);

// const ul = document.querySelector('ul');

// button4.addEventListener('click', function (e) {
//     const AddLi = document.createElement('li');
//     AddLi.textContent = 'New list item';
//     ul.append(AddLi);
// });

// button5.addEventListener('click', function (e) {
//     const liEl = document.querySelector('li');
//     liEl.remove();
// });

// const button6 = document.createElement('button');
// button6.textContent = 'ButtonClickClass';
// body.append(button6);

// button6.addEventListener('click', function (e) {
//     button6.setAttribute('class', 'click');
// });

const divContent = document.querySelector('.content');
const btnSubmit = document.createElement('button');
btnSubmit.textContent = 'Submit';
divContent.append(btnSubmit);

// btnSubmit.onclick = () => {
//     btnSubmit.textContent = 'Text sent';
// };

btnSubmit.addEventListener('click', function (e) {
    btnSubmit.textContent = 'Text sent';
});

