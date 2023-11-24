//====================Workshop====================

// Task 1
/* Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
Создайте функцию которая возводит переданное число в квадрат
Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.
В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
 */

// function helloUser(secondNameUser, firstNameUser, ageUser) {
//   alert(`Hello ${secondNameUser} ${firstNameUser} with the age of ${ageUser}`);
// }

// helloUser("Mukhametzyanov", "Yuriy", 38);

// const squareNumberUser = (numberUser) => numberUser ** 2;

// alert(squareNumberUser(+prompt(`Enter number`)));

// function checkNumberUser(numberUser) {
//   return numberUser >= 0 ? console.log("+++") : console.log("---");
// }

// checkNumberUser(+prompt("Enter number"));

//Task 2

// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// function sumUserNumbers(param1, param2, param3) {
//   console.log(param1 + param2 + param3);
// }
// sumUserNumbers(
//   +prompt("Enter number 1"),
//   +prompt("Enter number 2"),
//   +prompt("Enter number 3")
// );

// С помощью созданной вами функции выведите в консоль сумму значений этих переменных. let param1 = 1; let param2 = 2; let param3 = 3;

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// sumUserNumbers(param1, param2, param3);

// Дана фукнция function func(num = 5) { console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции. func(2); func(3); func();

// function func(num = 5) {
//   console.log(num * num);
// }
// func(2); // 4
// func(3); // 9
// func(); // 25

// Task 3

// Задание 3 (тайминг 15 минут)
// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
// Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции

// function userNumbersSqrtAndSum(params) {
//   return Math.sqrt(params);
// }
// userNumbersSqrtAndSum(3);
// userNumbersSqrtAndSum(4);
// console.log(userNumbersSqrtAndSum(3) + userNumbersSqrtAndSum(4));

// const getMinimumNumberUser = (param1, param2) =>
//   param1 <= param2
//     ? `Minimum number is ${param1}`
//     : `Minimum number is ${param2}`;
// console.log(getMinimumNumberUser(10, 10));

// Task 4

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

// function getDayWeek(params) {
//   if (params === 1) {
//     return "Понедельник";
//   }
//   if (params === 2) {
//     return "Вторник";
//   }
//   if (params === 3) {
//     return "Среда";
//   }
//   if (params === 4) {
//     return "Четверг";
//   }
//   if (params === 5) {
//     return "Пятница";
//   }
//   if (params === 6) {
//     return "Суббота";
//   }
//   if (params === 7) {
//     return "Воскресение";
//   }
// }

// alert(getDayWeek(+prompt("Введите номер дня недели")));

// function greetingUser(nameUser) {
//   if ((new Date().getHours() >= 4) & (new Date().getHours() < 12)) {
//     alert(`Good morning, ${nameUser}`);
//   }
//   if ((new Date().getHours() >= 12) & (new Date().getHours() < 16)) {
//     alert(`Good day, ${nameUser}`);
//   }
// }

// greetingUser(prompt("Enter your name, please"));

// Task 5
/* 
Пользователь с клавиатуры вводит число, Необходимо создать
условный оператор который Выводит в консоль “Число больше 5” Выводит в консоль “Число меньше 5” Выводит в консоль “Число равно 5”
Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
Пользовать с клавиатуры вводит 2 числа Необходимо найти какое из двух чисел минимальное
Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15. */

// const userNumber = +prompt("Enter number");

// if (userNumber > 5) {
//   console.log(`Number ${userNumber} > 5`);
// }
// if (userNumber < 5) {
//   console.log(`Number ${userNumber} < 5`);
// }
// if (userNumber === 5) {
//   console.log(`Number ${userNumber} = 5`);
// }
