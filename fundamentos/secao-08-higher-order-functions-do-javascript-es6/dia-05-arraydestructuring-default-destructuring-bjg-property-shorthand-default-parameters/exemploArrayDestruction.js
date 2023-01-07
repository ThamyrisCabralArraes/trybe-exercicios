const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

console.log('1......');

const primeNumbers = [17, 23, 37];
const [firstNumber, secondNumber, thirdNumber] = primeNumbers;

const sum = (a, b) => {
  console.log(a + b);
};

console.log(sum(firstNumber, thirdNumber));

console.log('2......');

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água

console.log('3......');

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[, , , ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
