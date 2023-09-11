// Task 1
let num1 = Number(prompt(`Enter first number`));
let num2 = Number(prompt(`Enter second number`));
if (num1 === 1) {
    alert(`${num1} = 1`);
} else if (num1 < 1) {
    alert(`${num1} < 1`);
} else alert(`${num1} > 1`);
if (num2 === 3) {
    alert(`${num2} = 3`)
} else if (num2 > 3) {
    alert(`${num2} > 3`)
} else alert(`${num2} < 3`)

// Task 2 
let test = true;
(test === true) ? console.log('+++'): console.log('---');

// Task 3

// В переменной day лежит какое - то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число(в первую, вторую или третью).
let getNumber = Math.ceil(Math.random() * 31);
if (getNumber > 1 && getNumber <= 10) {
    alert(`Число ${getNumber} попадает в первую декаду месяца`);
} else
if (getNumber >= 11 && getNumber <= 20) {
    alert(`ْЧисло ${getNumber} попадает во вторую декаду месяца`);
} else if (getNumber >= 21 && getNumber <= 31) { alert(`ْЧисло ${getNumber} попадает в третью декаду`); }

// Task 4

// Необязательное задание.(Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления % , например 10 % 3 === 1, десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

let get_Number = prompt(`Enter number`);
if (get_Number.length === 1) {
    alert(`В числе ${get_Number} количество сотен: 0, десятков 0, единиц ${get_Number[get_Number.length-1]}`)
} else if (get_Number.length === 2) {
    alert(`В числе ${get_Number} количество сотен: 0, десятков ${get_Number[get_Number.length-2]}, единиц ${get_Number[get_Number.length-1]}`);
} else if (get_Number.length === 3) {
    alert(`В числе ${get_Number} количество сотен: ${get_Number[get_Number.length-3]}, десятков ${get_Number[get_Number.length-2]}, единиц ${get_Number[get_Number.length-1]}`);
} else if (get_Number.length > 3) {
    alert(`В числе ${get_Number} количество сотен: ${get_Number[get_Number.length-3]}, десятков ${get_Number[get_Number.length-2]}, единиц ${get_Number[get_Number.length-1]}`);
}