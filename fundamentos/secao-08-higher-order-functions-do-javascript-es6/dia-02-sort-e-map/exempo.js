const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort();
console.log(inventory); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

const inventory2 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory2.sort((a, b) => a - b);
console.log(inventory2); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => b.age - a.age);

console.log(people);

// diferenca de for para map

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

// map
const persons2 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames2 = persons2.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames2); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// transformar numeros em negativos

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => (number > 0 ? number * -1 : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

//

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const newArrayProducts = products.map((item, index) => {
  const newI = {};
  newI[item] = prices[index];
  return newI;
});
console.log(newArrayProducts);
