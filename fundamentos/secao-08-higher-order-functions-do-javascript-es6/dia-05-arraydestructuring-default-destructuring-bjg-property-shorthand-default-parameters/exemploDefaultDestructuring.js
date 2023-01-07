console.log('1......');

const person1 = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality1 = 'Brazilian' } = person1;
console.log(nationality1); // Brazilian

console.log('2......');

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

console.log('3......');

const getNationality = ({ firstName, nationality = 'Frances' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
