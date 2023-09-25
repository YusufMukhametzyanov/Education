// const dayOfWeek = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Fridey",
//     6: "Saturday",
//     7: "Sunday",
// };
// console.log(dayOfWeek[2]);

// const user = {
//     name: 'Yusuf',
//     surname: 'Mukhametzyanov',
//     age: 38,
// };
// alert(`${user.surname}-${user.name}-${user.age}`)
// user.patronymic = prompt(`Enter your patronymic, please`);
// console.log(user);
// delete user.surname;
// console.log(user);

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr1);
// const objWeek = {};
// for (let i = 0; i < arr1.length; i++) {
//     objWeek[arr1[i]] = arr2[i];
// }
// console.log(objWeek);

// const obj = { x: 1, y: 2, z: 3 };
// for (const key in obj) {
//     obj[key] = obj[key] ** 2
// }
// console.log(obj);

// const obj = {
//     key1: {
//         key1: 1, key2: 2, key3: 3,
//     },
//     key2: {
//         key1: 4, key2: 5, key3: 6,
//     },
//     key3: {
//         key1: 7, key2: 8, key3: 9,
//     },
// };
// const arr = Object.values(obj);
// console.log(arr);
// const sum = arr.reduce((acc, i) => {
//     return acc + i.key1 + i.key2 + i.key3;
// }, 0);
// console.log(sum);

/* Создайте объект riddles Добавьте свойства question, answer создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
Добавьте свойство hints (содержащее 2 подсказки) Если пользователь ответил неверно, ему даётся одна подсказка Если пользователь ответил второй раз неверно, даётся вторая подсказка
Если ответил неверно, то в консоль выводится текст: “вы проиграли” */

// const riddles = {
//     question: "Мчится печка впереди, тащит избы позади",
//     answer: "поезд",
//     askQuestion: function () {
//         let userAnswer = prompt(`${this.question}`).toLowerCase();
//         if (userAnswer === this.answer) {
//             alert("Right, accepted");
//         } else alert("Not right => riddles.hints();");
//     },
//     hints: function () {
//         let count = 1;
//         let userAnswer = prompt(`${this.question}`).toLowerCase();
//         if (userAnswer != this.answer) {
//             alert('Hints: это так же может возить людей');
//             userAnswer = prompt(`${this.question}`).toLowerCase();
//             if (userAnswer === this.answer) {
//                 alert("Right, accepted");
//             } else alert("Not right");
//             count++;
//         }
//         if (count === 2) {
//             alert('Hints: он ездит по железным путям');
//             userAnswer = prompt(`${this.question}`).toLowerCase();
//             if (userAnswer === this.answer) {
//                 alert("Right, accepted");
//             } else alert("Not right, you lose");
//         }

//     },
// };

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
// };

// for (const key in numbers) {
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     };
// };

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };
// console.log(post.author);
// const postValues = Object.values(post);
// console.log((Object.values(Object.values(postValues[2][0])[3]))[1]);
// console.log((Object.values(postValues[2][1])[0]));
// console.log((Object.values(postValues[2][1])[2]));

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];
// console.log((Object.values(products[0]))[1]);

// products.forEach(element => {
//     element.price = element['price'] * 0.85;
// });
// console.table(products);

// Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография, используя метод filter. Исходные данные - массив products.

// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];
// const result = products.filter(element => element.photos && element.photos.length > 0);
// console.table(result);
// products.sort((a, b) => a.price - b.price);
// console.table(products);

// Напишите функцию, которая createDaysList, которая должна будет объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// const objEnRuDay = {};

// function createDaysList(en, ru) {
//     for (let index = 0; index < en.length; index++) {
//         objEnRuDay[en[index]] = ru[index];
//     }
//     return objEnRuDay;
// };
// console.table(createDaysList(en, ru));