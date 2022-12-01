const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);

function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a, b)}`);
console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a, b));

//

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

//

const hello = (nome1) => `Olá, ${nome1}!`;
let nome1 = 'Ivan';
console.log(hello(nome1));

//

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

//

let speed = 90;
const speedCar = (speed) =>
  speed >= 120
    ? `Você ultrapassou o limite de velocidade`
    : `Você está na velocidade permitida`;

console.log(speedCar(speed));
