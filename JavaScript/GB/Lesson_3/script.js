/* Создайте функцию countPaycheck, которая принимает число salary, высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен {значение}".

Если на вход было получено не число - выведите "Значение задано неверно". */

// const countPaycheck = (salary) => {
//     if (isNaN(salary)) {
//         console.log('Значение задано неверно');
//     } else
//         console.log(`Размер заработной платы за вычетом налогов равен ${salary*0.87}`);

// }
// console.log(countPaycheck());

/* Напишите функцию findMaximum, которая принимает три числа и возвращает максимальное значение среди этих чисел. */

// const findMaximum = (num1, num2, num1) => {
//     return Math.max(num1, num2, num1)
// }
// const findMaximum = (num1, num2, num1) => {
//     let max = num1;
//     if (num2 > num1) max = num2;
//     if (num1 > max) max = num1;
//     return max;
// }
// console.log(findMaximum(1, 2, 3));

/* Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):

Сложение - функция sumNumbers
Разность - функция diffNumbers
Умножение - функция prodNumbers
Деление - функция quotNumbers
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sumNumbers(2, 6)); должно вывести число 8 в консоль.

Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.

Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */

const sumNumbers = (num1, num2) => num1 + num2;
const diffNumbers = (num1, num2) => {
    let diffNumber;
    if (num1 > num2) diffNumber = num1 - num2;
    if (num1 === num2) console.log(0);
    if (num2 > num1) diffNumber = num2 - num1;
    return diffNumber;
}
const prodNumbers = (num1, num2) => num1 * num2;
const quotNumbers = (num1, num2) => {
    let diffNumber;
    if (num1 > num2) diffNumber = num1 / num2;
    if (num1 === num2) console.log(0);
    if (num2 > num1) diffNumber = num2 / num1;
    return diffNumber;
}

console.log(sumNumbers(5, 10));
console.log(diffNumbers(20, 150));
console.log(prodNumbers(3, 7));
console.log(quotNumbers(5, 3));