let a = 50;
let b = 10;
let c = 5;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > a) {
  console.log(c);
}

let nameAtual = 'thamyris';

if (nameAtual === 'Thamyris') {
  console.log('positive');
} else if (nameAtual != 'Thamyris') {
  console.log('negative');
} else {
  console.log('zero');
}

let n1 = 60;
let n2 = 60;
let n3 = 60;

if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number') {
  console.log('Erro');
} else if (n1 + n2 + n3 != 180) {
  console.log(false);
} else if (n1 + n2 + n3 === 180) {
  console.log(true);
}

let pecaXadrez = 'Torre';
pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez) {
  case 'bispo':
    console.log('Diagonal.');
    break;

  case 'torre':
    console.log('Linha reta.');
    break;

  case 'dama':
    console.log('Fileira, Coluna, Diagonal.');
    break;

  case 'cavalo':
    console.log(
      'Pode ser movido para uma das casas mais próximas a que ocupa que não esteja na mesma fileira, coluna ou diagonal.'
    );
    break;

  case 'peao':
    console.log(
      'O peão pode ser movido para uma casa que esteja imediatamente à sua frente ao longo da mesma coluna, desde que esta casa esteja desocupada.'
    );
    break;

  case 'rei':
    console.log('Movendo-o para uma casa vizinha.');
    break;

  default:
    console.log('Erro');
}

let number1 = 10;
let number2 = 30;
let number3 = 90;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  console.log('Par');
} else {
  console.log('Nào tem par');
}

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
  console.log('impar');
} else {
  console.log('Nao tem impar');
}

const valorCusto = 1000;
const impostoSobreOCusto = 1000 * 1.2;
const valorVenda = 3000;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;
let result = lucro * 1000;
if (result > 1) {
  console.log(result);
} else {
  console.log('Erro');
}
