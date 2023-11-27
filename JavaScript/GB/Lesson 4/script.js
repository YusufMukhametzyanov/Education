//===========Home work===============

// Task 1

/*
Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
 */

// const myArr = [1, 2, 3];
// myArr.forEach((element) => {
//   console.log(element);
// });

/* 
Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.
*/

// const myArr2 = [
//   Math.random() * 1000,
//   Math.random() * 100,
//   Math.random() * 100,
//   Math.random() * 100,
// ];
// console.log(myArr2.length);

/* 
Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
*/

// const myArr3 = ["a", "b", "c"];
// console.log(myArr3);
// let count = 1;

// for (let index = 0; index < myArr3.length; index++) {
//   myArr3[index] = count;
//   count++;
// }
// console.log(myArr3);

// Task 2

/* 
Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
*/

// const myArr4 = [1, 2, 3];

// for (index = 0; index < myArr4.length; index++) {
//   myArr4[index]++;
// }
// console.log(myArr4);

/* 
Узнайте длину следующего массива: const arr = []; arr[3] = 'a'; arr[8] = 'b';
*/

// const arr = [];
// arr[3] = "a";
// arr[8] = "b";
// console.log(arr.length);
// console.log(arr);

/* 
Пусть дан такой массив: const arr = [1, 2, 3]; Добавьте ему в конец элементы 4 и 5.
*/

// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);

/* 
Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
*/

// const myArr5 = [1, 2, 3, 4, 5];
// myArr5.splice(0, 2);
// console.log(myArr5, myArr5.length);

// Task 3

/* 
С помощью цикла for выведите в консоль числа от 11 до 33.
*/

// for (let index = 11; index < 34; index++) {
//   console.log(index);
// }

/* 
С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
*/

// for (let index = 1; index < 100; index++) {
//   if (index % 2 != 0) {
//     console.log(index);
//   }
// }

/* 
С помощью цикла for выведите в консоль числа от 100 до 0.
*/

// for (let index = 100; index >= 0; index--) {
//   console.log(index);
// }

/* 
Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
*/

// let num = 1;
// let count = 0;
// for (let index = 0; num < 1000; index++) {
//   num = num * 3;
//   count++;
//   console.log(num);
// }
// console.log(count);

/* 
Дан массив const arr = [2, 5, 9, 15, 1, 4]; Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
*/

// const arr = [2, 5, 9, 15, 1, 4];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] > 3 && arr[index] < 10) {
//     console.log(arr[index]);
//   }
// }

/* 
Найдите сумму четных чисел от 2 до 100.
*/
// let num = 0;
// for (let index = 2; index <= 100; index++) {
//   if (index % 2 === 0) {
//     num += index;
//   }
// }
// console.log(num);

/* 
Дан массив const = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива.
*/

// const arr = [2, 5, 9, 3, 1, 4];
// let sumNum = 0;
// arr.forEach((element) => {
//   sumNum += element;
// });
// console.log(sumNum);

/* 
С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
*/

// let userChar = "-";

// for (let index = 1; index <= 9; index++) {
//   userChar = userChar + index + "-";
// }
// console.log(userChar);

/* 
Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
*/

// const arr = [2, 5, 9, 0, 3, 1, 4];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] === 0) {
//     break;
//   }
//   console.log(arr[index]);
// }

/* 
Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.
*/

// const arr = [1, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] % 2 === 0) {
//     console.log(arr[index], Math.pow(arr[index], 2));
//   }
//   if (arr[index] % 3 === 0) {
//     console.log(arr[index], Math.pow(arr[index], 3));
//   }
// }

/* 
Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве
*/

// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] === 3) {
//     count++;
//   }
// }
// console.log(count);

/* 
Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice преобразуйте массив в следующий:
[1, 4, 5]
*/

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);
