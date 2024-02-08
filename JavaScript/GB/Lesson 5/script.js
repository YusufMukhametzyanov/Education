// const post = {
//   author: "John", // вывести этот текст
//   postId: 23,
//   comments: [
//     {
//       userId: 10,
//       userName: "Alex",
//       text: "lorem ipsum",
//       rating: {
//         likes: 10,
//         dislikes: 2, // вывести это число
//       },
//     },
//     {
//       userId: 5, // вывести это число
//       userName: "Jane",
//       text: "lorem ipsum 2", // вывести этот текст
//       rating: {
//         likes: 3,
//         dislikes: 1,
//       },
//     },
//   ],
// };
// console.log(`${post.author}
// ${post["comments"][0]["rating"].dislikes}
// ${post["comments"][1]["userId"]}
// ${post["comments"][1]["text"]}`);

// const products = [
//   {
//     id: 3,
//     price: 200,
//   },
//   {
//     id: 4,
//     price: 900,
//   },
//   {
//     id: 1,
//     price: 1000,
//   },
// ];

// products.forEach((element) => {
//   element.price = element.price * 0.85;
// });

// console.log(products);

// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: ["1.jpg", "2.jpg"],
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: [],
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: ["3.jpg"],
//   },
//   {
//     id: 8,
//     price: 78,
//   },
// ];
// const result = products.filter(function (i) {
//   if (i.photos && i.photos.length > 0) return true;
//   return false;
// });
// console.log(result);

// const result2 = products.sort((a, b) => {
//   if (a.price > b.price) return 1;
//   if (a.price < b.price) return -1;
// });
// console.log(result2);

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

// const myObj = {};
// let count = 0;

// en.forEach((element) => {
//   myObj[element] = ru[count];
//   count++;
// });

// console.log(myObj);

const objEnRuDay = {};

function createDaysList(en, ru) {
  for (let index = 0; index < en.length; index++) {
    objEnRuDay[en[index]] = ru[index];
  }
  return objEnRuDay;
}

console.table(createDaysList(en, ru));
