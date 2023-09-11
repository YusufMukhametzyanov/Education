// Task 1
/* Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов. */
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
/* Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве. */
const arr2 = ['First element', 'Second element', 'Tird element'];
console.log(`In the second array  ${arr2.length} elements`);
arr2[Math.floor(Math.random() * 100)] = 0;
console.log(arr2.length);
/* Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3. */
// Version 1
const arr3 = ['a', 'b', 'c'];
arr3.splice(0, 3, 1, 2, 3);
console.log(arr3);
// Version 2
const arr4 = ['a', 'b', 'c'];
let count = 1;
for (let index = 0; index < arr4.length; index++) {
    arr4[index] = count;
    count++;
}
console.log(arr4);