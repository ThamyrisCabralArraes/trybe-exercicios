const carro = 'desligado';

const ligarDesligar = (carro) => (carro === 'desligado' ? `ligado` : `desligado`);

const status1 = (carro) => (carro === 'ligado' ? `desligado` : `ligado`);

console.log(ligarDesligar(carro));
console.log(`O motor está ${status1(carro)}`);

//

const pi = 3.14;
const raio = 10;

const circleArea = (raio) => pi * raio ** 2;

console.log(`Essa é a área do círculo: ${circleArea(10)}`);

//

let result;
let menor = 0;
const biggestWord = (frase) => {
  result = frase.split(' ');
  menor = result[0];
  for (let index = 0; index < result.length; index += 1) {
    if (menor.length < result[index].length) {
      menor = result[index];
    }
  }
};
biggestWord(`Hello, Bem vindo, obrigada por estar aqui`);
console.log(menor);
