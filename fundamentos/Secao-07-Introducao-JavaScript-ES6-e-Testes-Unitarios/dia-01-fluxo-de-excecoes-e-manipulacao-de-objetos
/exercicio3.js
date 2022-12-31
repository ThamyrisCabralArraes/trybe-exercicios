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

console.log(Object.values(lesson1)[0]);
console.log('......');
console.log(Object.keys(lesson2));

console.log(lesson2);

const keys = (key) => {
  return Object.keys(key);
};

console.log(keys(lesson2));

const tamanhoObj = (valor) => {
  return Object.keys(valor).length;
};
console.log(tamanhoObj(lesson1));

const takeValue = (valor) => {
  return Object.values(valor);
};
console.log(takeValue(lesson2));

const allLesson = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLesson);
console.log(Object.values(allLesson)[0].turno);
console.log('......');
console.log(Object.keys(allLesson));

const countStudents = (valor) => {
  let total = 0;
  const keys = Object.keys(valor);
  for (let i in keys) {
    total += valor[keys[i]].numeroEstudantes;
  }
  return total;
};

console.log(countStudents(allLesson));

const getValueByNumber = (obj, valor) => {
  return Object.values(obj)[valor];
};

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, valor) => {
  const entries = Object.entries(obj);
  let result = false;

  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === valor) {
      result = true;
    }
  }
  return result;
};
console.log(verifyPair(lesson1, 'materia', 'Matemática'));

const countstudante = (obj, valor) => {
  let total = 0;
  const value = Object.values(obj);
  for (let i in value) {
    if (value[i].materia === valor) {
      total += value[i].numeroEstudantes;
    }
  }
  return total;
};

console.log(countstudante(allLesson, 'Matemática'));

const createReport = (obj, valor) => {
  let lessons = [];
  let Nameprofessor = '';
  let total = 0;
  const value = Object.values(obj);
  const key = Object.keys(obj);
  for (let i in value) {
    if (value[i].professor === valor) {
      lessons.push(value[i].materia);
      Nameprofessor = value[i].professor;
      total += value[i].numeroEstudantes;
    }
  }
  return { professor: Nameprofessor, aulas: lessons, estudantes: total };
};

console.log(createReport(allLesson, 'Maria Clara'));
