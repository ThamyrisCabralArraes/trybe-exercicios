import validator from 'validator';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const answer = document.querySelector('#answer');
const select = document.querySelector('#drop-down');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const campos = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    email: validator.isEmail(input.value),
  };

  answer.innerHTML = `A validaçao retornou ${campos[select.value]}`;
});
