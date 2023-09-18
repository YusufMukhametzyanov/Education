// Если присвоить значение одного объкта другому, то они оба будут ссылаться на один и тот же объект. Example:

// const car = {
//     make: "Audi",
//     model: "A5",
//     year: 2023,
//     color: "red",
//     passengers: 2,
//     power: 249,
// };
// const myCar = car;
// console.log(car, myCar);
// myCar.power = 100;
// console.log(car)

// В объекты можно добавлять функции, именуются они уже методами. Example:

// const car = {
//     make: "Audi",
//     model: "A5",
//     year: 2023,
//     color: "red",
//     passengers: 2,
//     power: 249,
//     odometer: 0,
//     startEngine: function () {
//         console.log('Engine started');
//     }
// };
// car.startEngine();

// Object metods

const car = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometer: 0,
    engineIsStarted: false,
    startEngine: function () {
        this.engineIsStarted = true;
    },
    stopEngine: function () {
        this.engineIsStarted = false;
    },
    haveRoadTrip: function (distance) {
        if (this.engineIsStarted) {
            this.odometer += distance;
        } else {
            alert(`Сначала запустите двигатель! // startEngine();`)
        }
    },
};


// Перебор значение объекта циклом for

// for (const key in car) {
//     console.log(`${key}: ${car[key]}`);
// }

// Преобразование объекта в массив
// Ключей
// const carKeys = Object.keys(car);
// console.log(carKeys);
// Значений
// const carValues = Object.values(car);
// console.log(carValues);
// И ключей и значений
// const carKeysAndValues = Object.entries(car);
// console.log(carKeysAndValues);
// Создание копии массива
// const carMap = carKeys.map(index => index);
// console.log(carMap);
// carMap.push(1);
// console.log(carMap);
// console.log(carKeys);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.filter(i => {
//     if (i === 3) return false
//     return true
// });
// console.log(arr2);

// const sumArr = arr.reduce((acc, i) => {
//     return acc + i;
// }, 0);
// console.log(sumArr);

// const [n1, n2, n3] = arr;
// console.log(n1, n2, n3);

// const { make: make2, model, year2 = 2022, color } = car;
// console.log(make2, year2);