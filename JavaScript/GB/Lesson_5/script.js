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

// const car = {
//     make: "Audi",
//     model: "A5",
//     year: 2023,
//     color: "red",
//     passengers: 2,
//     power: 249,
//     odometer: 0,
//     engineIsStarted: false,
//     startEngine: function () {
//         this.engineIsStarted = true;
//     },
//     stopEngine: function () {
//         this.engineIsStarted = false;
//     },
//     haveRoadTrip: function (distance) {
//         if (this.engineIsStarted) {
//             this.odometer += distance;
//         } else {
//             alert(`Сначала запустите двигатель! // startEngine();`)
//         }
//     },
// };