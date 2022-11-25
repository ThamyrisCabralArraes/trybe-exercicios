// let a = 50;
// let b = 10;
// let c = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a % b);

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else if (c > a && c > a) {
//   console.log(c);
// }

// let nameAtual = 'thamyris';

// if (nameAtual === 'Thamyris') {
//   console.log('positive');
// } else if (nameAtual != 'Thamyris') {
//   console.log('negative');
// } else {
//   console.log('zero');
// }

// let n1 = 60;
// let n2 = 60;
// let n3 = 60;

// if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number') {
//   console.log('Erro');
// } else if (n1 + n2 + n3 != 180) {
//   console.log(false);
// } else if (n1 + n2 + n3 === 180) {
//   console.log(true);
// }

// let pecaXadrez = 'Torre';
// pecaXadrez = pecaXadrez.toLowerCase();

// switch (pecaXadrez) {
//   case 'bispo':
//     console.log('Diagonal.');
//     break;

//   case 'torre':
//     console.log('Linha reta.');
//     break;

//   case 'dama':
//     console.log('Fileira, Coluna, Diagonal.');
//     break;

//   case 'cavalo':
//     console.log(
//       'Pode ser movido para uma das casas mais próximas a que ocupa que não esteja na mesma fileira, coluna ou diagonal.'
//     );
//     break;

//   case 'peao':
//     console.log(
//       'O peão pode ser movido para uma casa que esteja imediatamente à sua frente ao longo da mesma coluna, desde que esta casa esteja desocupada.'
//     );
//     break;

//   case 'rei':
//     console.log('Movendo-o para uma casa vizinha.');
//     break;

//   default:
//     console.log('Erro');
// }

// let number1 = 10;
// let number2 = 30;
// let number3 = 90;

// if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
//   console.log('Par');
// } else {
//   console.log('Nào tem par');
// }

// if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
//   console.log('impar');
// } else {
//   console.log('Nao tem impar');
// }

// const valorCusto = 1000;
// const impostoSobreOCusto = 1000 * 1.2;
// const valorVenda = 3000;
// let valorCustoTotal = valorCusto + impostoSobreOCusto;
// let lucro = valorVenda - valorCustoTotal;
// let result = lucro * 1000;
// if (result > 1) {
//   console.log(result);
// } else {
//   console.log('Erro');
// }

// let salary = 4600.1;
// let total;
// let salaryFinal;

// if (salary <= 1556.94) {
//   total = salary - salary * 0.2;
// } else if (salary >= 1556.95 && salary < 2594.92) {
//   total = salary - salary * 0.1;
// } else if (salary >= 2594.93 && salary < 5189.82) {
//   total = salary - salary * 0.89;
// } else if (salary >= 5189.82) {
//   total = salary - salary - 570.88;
// }
// console.log(total.toFixed(2));

// if (salary <= 1903.98) {
//   salaryFinal = total;
// } else if (salary >= 1903.99 && salary < 2826.65) {
//   salaryFinal = total - salary * 0.925 - 142.8;
// } else if (salary >= 2826.65 && salary < 3751.05) {
//   salaryFinal = total - salary * 0.85 - 354.8;
// } else if (salary >= 3751.06 && salary < 4664.68) {
//   salaryFinal = total - salary * 0.775 - 636.13;
// } else {
//   salaryFinal = total - salary * 0.755 - 869.36;
// }
// console.log(salaryFinal.toFixed(2));

let list = ['amarrar', 'cabelo', 'sair'];
list.unshift('acordar');
list.shift();
console.log(list);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');
menu.push('Contato');
console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name1 of names) {
  console.log(name1);
}

for (let index = 0; index < 10; index += 1) {
  console.log(index);
}
