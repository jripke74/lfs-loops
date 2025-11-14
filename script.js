const cars = ['ford', 'volkswagon', 'subaru', 'buick', 'landrover', 'dodge'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

const firstName = "Jeff";
let position = 1;
for (let letter of firstName) {
  console.log(`${position++}: ${letter}`);
}
for (let carManfacture of cars) {
  console.log(carManfacture);
}

const brothers = [
  { name: "Jason", age: 58 },
  { name: "Ryan", age: 45},
  { name: "David", age: 48},
  { name: "Matthew", age: 38}
];
for (let bro of brothers) {
  console.log(`${bro.name} - ${bro.age}`);
}