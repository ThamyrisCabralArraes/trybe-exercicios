const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade.toLowerCase() === 'aprovado'); // false

console.log(verifyGrades);

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, number) => {
  return arr.every((item) => item.age >= number);
};

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));

//
const pessoas2 = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

console.log(pessoas2.every((pessoa) => pessoa > 30));
