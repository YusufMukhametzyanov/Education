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

const divElement = document.querySelector('.newDiv');
const paragraphElement = document.createElement('p');

paragraphElement.textContent = 'New text and his so many, well done';
const newBtn = document.querySelector('.newButton');


newBtn.onclick = function () {
    newBtn.textContent = 'Change button';
    divElement.appendChild(paragraphElement);
}
