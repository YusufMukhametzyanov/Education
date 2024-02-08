// const data = JSON.parse(dataInfo);
// console.log(data);

// data.forEach(element => {
//     console.log(element)
// });

// const content = document.querySelector('.content');


// let count = 0;

// data.forEach(element => {
//     const divEl = document.createElement('div');
//     const imgEl = document.createElement('img');
//     const headerEl = document.createElement('h2');
//     const pEl = document.createElement('p');
//     divEl.className = 'divEl';
//     content.append(divEl);
//     headerEl.textContent = data[count].header;
//     pEl.textContent = data[count].paragraph;
//     imgEl.setAttribute('src', data[count].url);
//     imgEl.setAttribute('id', data[count].id);
//     imgEl.classList.add('imgEl');
//     divEl.append(imgEl);
//     divEl.append(headerEl);
//     divEl.append(pEl);
//     count++;
// });
// console.log(count);

const data2 = Object.entries(JSON.parse(dataInfo2));
const contentEl = document.querySelector('.swing');

data2.forEach(element => {
    const h1El = document.createElement('h1');
    h1El.innerText = 'Lorem, ipsum dolor.';
    contentEl.append(h1El);
});



