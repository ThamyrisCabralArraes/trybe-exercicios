console.log('1exercicio');
const myList = [5, 2, 3];
const swap = ([a, b, c]) => [c, b, a];
console.log(swap(myList));

console.log('2exercicio');
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({ name, brand, year });

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

console.log('3exercicio');

const greet = (name = 'User', message = 'Hi') => `${message} ${name}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

console.log('4exercicio');
const student1 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
};

const student2 = {
  name: `Vitor`,
  age: 20,
};

const getLastName = (objStudent) => {
  const { lastName = `lastName não preenchido` } = objStudent;
  return lastName;
};

console.log(getLastName(student1));
console.log(getLastName(student2));

console.log('5exercicio');

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

const [student3, [student4, student5], [student6, student7]] = moreStudents;

console.log(student3, student4, student5, student6, student7);
