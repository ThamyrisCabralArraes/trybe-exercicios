let repetitionNumber = [2, 3, 2, 5, 8, 2, 3];
let count = 0;
let result = [];
function repetition() {
  for (let index = 1; index < repetitionNumber.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
      if (repetitionNumber[index] === repetitionNumber[index2]) {
        result.push(repetitionNumber[index2]);
      }
    }
  }
}
repetition(repetitionNumber);
console.log(result);

// O da trybe

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }

  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//

const numeroNatural = (numero) => {
  let result = 0;
  for (let index = 0; index <= numero; index += 1) {
    result += index;
  }
  return result;
};
console.log(numeroNatural(5));

//

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;
  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }

  return result;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
