let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index, cars[index]);
}

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
for (let index in car) {
  console.log(index, car[index]);
}

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let index in names) {
  console.log(`Ola ${names[index]}`);
}

let cart = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
};

for (let index in cart) {
  console.log(index + ': ' + cart[index]);
}
