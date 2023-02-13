import Swal from 'sweetalert2';

const p = document.getElementById('p');
const button = document.getElementById('button');
const input = document.getElementById('input');

const cep = '51020-250';

const erro = () => {
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool',
  });
};

const funcaoDePesquisaCep = async () => {
  if (!input.value) {
    funcaoErro();
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${input.value}/json/`);
    const data = await response.json();

    p.innerHTML = `Cep: ${data.cep} <br> Cidade: ${data.localidade} <br> Bairro: ${data.bairro} <br> Rua: ${data.logradouro}`;
    input.value = '';
  } catch (erro) {
    p.innerHTML = '';
    p.innerHTML = erro.message;
    input.value = '';
  }
};

button.addEventListener('click', funcaoDePesquisaCep);
