// navigator.geolocation.getCurrentPosition((position) => {
//   const { latitude, longitude } = position.coords;
//   console.log(`Координаты устройства: ${latitude}, ${longitude}`);
// });

// navigator.geolocation.watchPosition(({ coords }) => {
//   console.log(
//     `Координаты: широта - ${coords.latitude}, долгота - ${coords.longitude}`
//   );
// });

const pEl = document.querySelector("p");

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);
console.log(window.scrollY);
console.log(window.pageYOffset);

document.addEventListener("scroll", function (e) {
  console.log(document.documentElement.scrollTop);
});
array.forEach((element) => {});
