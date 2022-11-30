function biggestNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return `${firstNumber} é maior que ${secondNumber}`;
  } else if (secondNumber > firstNumber) {
    return `${secondNumber} é maior que ${firstNumber}`;
  } else {
    return `Os numeros são iguais`;
  }
}

console.log(biggestNumber(4, 4));
//

let n1 = [1, 2, 4, 6, 7];
let sum = 0;
let sum2 = 0;

for (let index = 0; index < n1.length; index += 1) {
  sum += n1[index];
  sum2 = n1[index];
}
console.log(n1);
console.log(sum);
console.log(sum2);
//

let a = 10;
let b = 5;

function soma() {
  return a + b;
}
console.log(soma(a, b));

function subtração() {
  return a - b;
}
console.log(subtração(a, b));

function divisao() {
  return a / b;
}
console.log(divisao(a, b));

function multiplicacao() {
  return a * b;
}
console.log(multiplicacao(a, b));
//

function bigNumber(firstNumber, secondNumber, third) {
  if (firstNumber > secondNumber && firstNumber > third) {
    return `${firstNumber} é maior que ${secondNumber} e ${third}`;
  } else if (secondNumber > firstNumber && secondNumber > third) {
    return `${secondNumber} é maior que ${firstNumber} e ${third}`;
  } else {
    return `${third} é maior que ${firstNumber} e ${secondNumber}`;
  }
}
console.log(bigNumber(14, 15, 6));

function positiveNegative(number) {
  if (number > 0) {
    return `Positive`;
  } else if (number < 0) {
    return `Negative`;
  } else {
    return `Zero`;
  }
}
console.log(positiveNegative(0));
//

function triangulo(n1, n2, n3) {
  if (n1 + n2 + n3 === 180) {
    return `True`;
  } else if (n1 + n2 + n3 !== 180) {
    return `False`;
  } else {
    return `Erro`;
  }
}
console.log(triangulo(60, 60, 60));
