let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

for (let number of numbers) {
  console.log(number);
}

let som = 0;
for (let i = 0; i < numbers.length; i += 1) {
  som = som + numbers[i];
}
console.log(som);

let soma = 0;
let media;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
  media = soma / numbers.length;
}
console.log(media);

if (media > 20) {
  console.log(`Valor maior que 20`);
} else {
  console.log(`Valor menor que 20`);
}
let maiorNumero = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}
console.log(maiorNumero);
for (let i = 0; i < numbers.length; i += 1)
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  } else {
    console.log(`Nenhum valor impar encontrado.`);
  }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i += 1) {
  console.log(arr[i] / 2);
}

let menorNumero = 99999;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
}
console.log(menorNumero);

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}
