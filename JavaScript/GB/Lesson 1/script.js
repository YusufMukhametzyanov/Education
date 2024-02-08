// console.log('Text from script.js')

// let num = 123
// console.log(num)

// let a = 5
// a = 7
// console.log(a)

// let b = 1 + 2 + 3
// console.log(b)

// Это первый вид комментариев

/* Это второй вид комментариев */

// let c = 10
// let d = 2
// let sumNumbers = c + d
// let difNumbers = c - d
// let multNumbers = c * d
// let divNumbers = c / d

// console.log(`Сумма переменных с и d = ${sumNumbers}\nРазница переменных c и d = ${difNumbers}\nРезультат умножения переменных c и d = ${multNumbers}\nРезультат деления переменных c и d = ${divNumbers}\nСумма всех созданных переменных = ${sumNumbers + difNumbers + multNumbers + divNumbers}`)

// let a = 5 + 5 * 3 + 3; // 23
// a = 8 / 2 + 2; // 6
// a = (2 + 3) * (2 + 3); // 25
// a = (2 + 3) * 2 + 3; // 13
// a = (2 * 8) / 4; // 4
// a = 2 * (8 / 4); // 4

// let a = 1.5
// let b = 0.75
// let sumAB = a + b
// alert(sumAB)

// let a = -5
// alert(-a)

// let firstMyName = 'Yuriy'
// let lastMyName = 'Mukhametzyanov'
// console.log(`${firstMyName} ${lastMyName}`)

// let javaMy = 'java'
// let scriptMy = 'script'
// console.log(javaMy + scriptMy)

// let helloMy = 'hello'
// let worldMy = 'world'
// console.log(`${helloMy} ${worldMy}`)

//==================Practic tasks==============

// Task 1

/* Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах. */

let varCelsiumTemperature = 30;
let varFahrenheitTemperature = (9 / 5) * varCelsiumTemperature + 32;

console.log(varCelsiumTemperature, varFahrenheitTemperature);

// Task 2

/* Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль. */

let name = "Yuriy";
let admin = name;

console.log(name, admin);
