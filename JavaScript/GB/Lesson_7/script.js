// const divContent = document.querySelector('.content');

// const h1 = document.createElement('h1');
// h1.textContent = 'No pain no gain';
// divContent.appendChild(h1);

// h1.style.color = 'green';
// h1.style.backgroundColor = 'gray';
// h1.style.textAlign = 'center';

// h1.setAttribute('class', 'heading');

// const maximum = findMax(1000, 3, 5, 10);
// function findMax() {
//     const values = arguments;
//     let maxValue = -Infinity;
//     for (let index = 0; index < values.length; index++) {
//         if (values[index] > maxValue)
//             maxValue = values[index]
//     }
//     return maxValue;
// };
// console.log(maximum);

// const divContent2 = document.querySelector('.content2');
// console.log(divContent2.children);
// [...divContent2.children].forEach(element => {
//     console.log(element)
// });

// Array.from(divContent2.childNodes).forEach((childNode) => {
//     console.log('childNode "%s" типа "%d"', childNode.nodeName, childNode.nodeType)
// });

// let allParagraphElements = divContent2.querySelectorAll('p')
// console.log('Static NodeList длина до: %d', allParagraphElements.length);
// console.log('Dynamic NodeList длина до: %d', divContent2.childNodes.length);
// console.log('HTMLCollection длина до: %d', divContent2.children.length);

// const fourthParagraphElement = document.createElement('p')
// fourthParagraphElement.textContent = 'Четвертый параграф'
// divContent2.appendChild(fourthParagraphElement)

// console.log('Static NodeList длина после: %d', allParagraphElements.length)
// console.log('Dynamic NodeList длина после: %d', divContent2.childNodes.length)
// console.log('HTMLCollection длина после: %d', divContent2.children.length)

// const divBlock = document.querySelector('.block');
// const divItem = document.createElement('div');
// divBlock.appendChild(divItem);
// divItem.setAttribute('class', 'item');
// const paragraphFromItem = document.createElement('p');

// paragraphFromItem.textContent = 'Element inside';

// divItem.appendChild(paragraphFromItem);

// const paragraphText = document.querySelector('.text');
// console.log(paragraphText.parentElement.parentElement);

// const body = document.querySelector('body');
// const input = document.querySelector('input');
// input.setAttribute('class', 'input');

// const button = document.querySelector('button');
// const header2 = document.createElement('h2');
// header2.textContent = "You have not filled in the input field";
// header2.style.border = '3px solid red';

// button.onclick = function () {
//     if (input.value) {
//         header2.textContent = 'Access'
//         header2.style.border = 'none';
//         body.appendChild(header2);
//     } else
//         body.appendChild(header2);
// }

// const divContent = document.querySelector('.content');
// const btn = document.createElement('button');
// divContent.appendChild(btn);
// btn.textContent = 'Submit';
// btn.setAttribute('class', 'item');

// btn.onclick = function () {
//     btn.textContent = 'Text sent';
// }

