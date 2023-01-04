const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
}, 0);
//
valorItens.reduce((acc, curr) => {
  console.log(`acc:`, acc);
  console.log(`curr:`, curr);
  console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);

//

const numbers = [1, 32, 44, 2, 3];

const sumNumbers = (acc, curr) => acc + curr;

const totalSum = numbers.reduce(sumNumbers, 30);

console.log(totalSum); //112

//

const numbers2 = [50, 85, -30, 3, 15];

const result = numbers2.reduce((acc, curr) => (acc > curr ? acc : curr));

console.log(result);

//

const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumOdd = numbers3.filter((item) => item % 2 === 0).reduce((acc, curr) => acc + curr);

console.log(sumOdd);

//

const numbers4 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = (accumulator, number) => (number % 2 === 0 ? accumulator + number : accumulator);

const sumNumbers1 = (array) => array.reduce(sum, 0);

console.log(sumNumbers1(numbers4)); // 152
