const carro = 'desligado';

const ligarDesligar = (carro) => (carro === 'desligado' ? `ligado` : `desligado`);

console.log(ligarDesligar(carro));
console.log(`O motor está ${ligarDesligar(carro)}`);

//

const pi = 3.14;
const raio = 3;

const circleArea = () => pi * raio ** 2;

console.log(`Essa é a área do círculo: ${circleArea(raio)}`);

//

let result;
let menor = 0;
const biggestWord = (frase) => {
  result = frase.split(' ');
  menor = result[0];
  for (let index = 0; index < result.length; index += 1) {
    if (menor.length < result[index].length) {
      menor = result[index];
    }
  }
  return menor;
};
biggestWord(`Hello, Bem vindo, obrigada por estar aqui`);
console.log(menor);

//Outra maneira de fazer

const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word;
      result = word;
    }
  }

  return maxLength;
};

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

//

const substituaX = (name) => {
  let frase = `Tryber x aqui!`;
  let fraseSplit = frase.split(' ');
  for (let word in fraseSplit) {
    if (fraseSplit[word] === 'x') {
      fraseSplit[word] = name;
    }
  }
  return fraseSplit.join(' ');
};
console.log(substituaX('Thamyris'));

const minhasSkill = (funcao) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  return `${funcao}
    Minhas três principais habilidades são:
    ${skills}`;
};
console.log(minhasSkill(substituaX('Thamyris')));

//Trybe fez:

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    resultado = `${resultado} - ${skills[index]}`;
  }
  return resultado;
};
console.log(minhasSkills(substituaX('Bebeto')));
