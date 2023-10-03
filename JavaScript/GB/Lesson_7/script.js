const divContent = document.querySelector('.content');

const h1 = document.createElement('h1');
h1.textContent = 'No pain no gain';
divContent.appendChild(h1);

h1.style.color = 'green';
h1.style.backgroundColor = 'gray';
h1.style.textAlign = 'center';

h1.setAttribute('class', 'heading');