const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];
console.log(idades.find((idade) => idade < 20));
//

const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((item) => item > 19));

//

const names = ['João', 'Irene', 'Fernando', 'Maria'];

names.find((item) => {
  if (item.length === 5) console.log(item);
});

//

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

musicas.find((item) => {
  if (item.id === '31031685') {
    console.log(item);
  }
});

//

const numbers2 = [19, 21, 30, 3, 45, 22, 15];

const result = numbers2.find((item) => item % 3 === 0 && item % 5 === 0);

console.log(result);

const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

console.log(pessoas.find((pessoa) => pessoa.nome === 'Aline'));
