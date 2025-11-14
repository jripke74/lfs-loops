const cars = ['ford', 'volkswagon', 'subaru', 'buick', 'landrover', 'dodge'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

const firstName = "Jeff";
let position = 1;
for (letter of firstName) {
  console.log(`${position++}: ${letter}`);
}