const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNoite = (objeto, key, value) => {
  objeto[key] = value;
};
addNoite(lesson2, 'turno', 'noite');

// console.log(lesson2);

// const keys = (key) => {
//   return Object.keys(key);
// };

// console.log(keys(lesson2));

// const tamanhoObj = (valor) => {
//   return Object.keys(valor).length;
// };
// console.log(tamanhoObj(lesson1));

// const takeValue = (valor) => {
//   return Object.values(valor);
// };
// console.log(takeValue(lesson2));

const allLesson = Object.assign({}, { lesson1, lesson2, lesson3 });

const countStudents = (valor) => {
  let total = 0;
  const keys = Object.keys(valor);
  for (let i in keys) {
    total += valor[keys[i]].numeroEstudantes;
  }
  return total;
};
console.log(countStudents(allLesson));
