// Task 1
/* Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов. */
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }
/* Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве. */
// const arr2 = ['First element', 'Second element', 'Tird element'];
// console.log(`In the second array  ${arr2.length} elements`);
// arr2[Math.floor(Math.random() * 100)] = 0;
// console.log(arr2.length);
/* Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3. */
// Version 1
// const arr3 = ['a', 'b', 'c'];
// arr3.splice(0, 3, 1, 2, 3);
// console.log(arr3);
// Version 2
// const arr4 = ['a', 'b', 'c'];
// let count = 1;
// for (let index = 0; index < arr4.length; index++) {
//     arr4[index] = count;
//     count++;
// }
// console.log(arr4);
//Task 2
//Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
// const array = [1, 2, 3];
// for (let index = 0; index < array.length; index++) {
//     array[index]++;
// }
// console.log(array);
//Узнайте длину следующего массива: const arr = []; arr[3] = 'a'; arr[8] = 'b';
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);
//Пусть дан такой массив: const arr = [1, 2, 3]; Добавьте ему в конец элементы 4 и 5.
// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);
//Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 4);
// console.log(arr.length);
//С помощью цикла for выведите в консоль числа от 11 до 33.
// for (let num = 11; num <= 33; num++) {
//     console.log(num);
// }
//С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
// for (let index = 1; index < 99; index++) {
//     if (index % 2 === 0) {
//         console.log(index);
//     }
// }
//С помощью цикла for выведите в консоль числа от 100 до 0.
// for (let index = 100; index >= 0; index--) {
//     console.log(index);
// }
// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
// let count = 1000;
// let count2 = 0;
// do {
//     count = count * 3;
//     count2++;
// } while (count < 1000);
// console.log(count, count2);
// Task 4 
// Дан массив const arr = [2, 5, 9, 15, 1, 4]; Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// const arr = [2, 5, 9, 15, 1, 4];
// const arr2 = [];
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > 3 && arr[index] < 10) {
//         arr2.push(arr[index]);
//     }
// }
// console.log(arr2);
// Найдите сумму четных чисел от 2 до 100.
// let sumNum = 0;
// for (let num = 100; num > 0; num--) {
//     if (num % 2 === 0) {
//         sumNum = sumNum + num;
//     }
// }
// console.log(sumNum);
// Дан массив const = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива.
// const arr = [2, 5, 9, 3, 1, 4];
// let element = 0;
// for (let index = 0; index < arr.length; index++) {
//     element = element + arr[index];
// }
// console.log(element);
// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// let str = '-';
// for (let index = 1; index <= 9; index++) {
//     str += index + '-';
// }
// console.log(str);
//Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
// const arr = [2, 5, 9, 0, 3, 1, 4];
// for (let index = 0; arr[index] != 0; index++) {
//     const element = arr[index];
//     console.log(element);
// }
//Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.
// const arr = [];
// for (let index = 0; index < 10; index++) {
//     arr.push(Math.floor((Math.random() * 100)));
// }
// console.log(arr);
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0) {
//         console.log(arr[index] ** 2);
//     }
// }
// console.log('===');
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 3 === 0) {
//         console.log(arr[index] ** 3);
//     }
// }
// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве.
// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element === 3) {
//         count++;
//     }
// }
// console.log(count);
// Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
// const arr = [1, 2, 3, 4, 5];
// arr.splice(0, 5, 1, 4, 5);
// console.log(arr);
// C помощью цикла for выведите следующие 11 строк в консоль:
/* 0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */

// for (let index = 0; index < 11; index++) {
//     if (index === 0) {
//         console.log(`${index} - это ноль`);
//     }
//     if (index % 2 === 0 && index != 0) {
//         console.log(`${index} - четное число`);
//     }
//     if (index % 2 != 0) {
//         console.log(`${index} - нечетное число`);
//     }
// }
/* Дан массив myArray = [1, 2, 3, 4, 5, 6, 7].

Сделайте из этого массива следующий [1, 2, 3, 6, 7].

Выведите на экран сначала массив myArray, а затем измененный. */

// const myArray = [1, 2, 3, 4, 5, 6, 7];
// alert(myArray);
// myArray.splice(3, 6, 6, 7);
// alert(myArray);

/* Выведите в консоль "горку" (используя цикл for), как показано в примере, только у вашей горки должно быть 20 рядов, а не 5.
Используйте именно знак x.
Пример:
x
xx
xxx
xxxx
xxxxx */
// let slide = '';
// for (let index = 0; index < 20; index++) {
//     slide += 'x';
//     console.log(slide);
// }
// const para = document.querySelector('p');

// para.addEventListener('click', updateName);

// function updateName() {
//     let name = prompt('Enter a new name');
//     para.textContent = 'Player 1: ' + name;
// }