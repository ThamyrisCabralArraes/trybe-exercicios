const currentHour = 5;
let message = '';

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour <= 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour > 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
} else if (currentHour > 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém-passado';
}

console.log(message);

let weekDay = 'Domingo';
let result = '';
if (
  weekDay === 'segunda-feira' ||
  weekDay === 'terça-feira' ||
  weekDay === 'quarta-feira' ||
  weekDay === 'quinta-feira' ||
  weekDay === 'sexta-feira'
) {
  result = 'Oba, mais um dia de aprendizado na Trybe >:D';
} else {
  result = 'FINALMENTE, descanso merecido UwU';
}

console.log(result);
