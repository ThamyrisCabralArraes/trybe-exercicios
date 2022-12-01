const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';
//

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//

const printName = () => 'Lucas';
console.log(printName());

const multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

//

const soma = (num1, num2) => num1 + num2;
console.log(soma(2, 2));

//

const contadorPalavras = (frase) => frase.split(' ').length;
console.log(contadorPalavras('Olá mundo cruel'));

//

const farses = 'Olá mundo cruel, como voce está?';
let resultado = farses.split(' ');
let resultado2 = farses.split('');
console.log(resultado);
console.log(resultado2);

//
