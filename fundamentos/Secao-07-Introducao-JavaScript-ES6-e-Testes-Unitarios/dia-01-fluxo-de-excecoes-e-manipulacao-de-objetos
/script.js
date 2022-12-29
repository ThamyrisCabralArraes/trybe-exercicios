const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
  }
};

const sum = (value1, value2) => {
  // o `try` vai executar a função verifyNumber e retornar a soma caso os parâmetros sejam números
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
    // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada através da propriedade `.message` nativa do objeto Error.
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));

const verificaErro = (valor1, valor2) => {
  if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
    throw new Error('Digite um número');
  }
};

const media = (valor1, valor2) => {
  try {
    verificaErro(valor1, valor2);
    return (valor1 + valor2) / 2;
  } catch (erro) {
    return erro.message;
  }
};

console.log(media(5, '5'));

const getDayName = (number) => {
  const dayNumber = number - 1;
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return days[dayNumber];
};

const printDayname = (dayNumber) => {
  console.log(getDayName(dayNumber));
};

printDayname(4);
