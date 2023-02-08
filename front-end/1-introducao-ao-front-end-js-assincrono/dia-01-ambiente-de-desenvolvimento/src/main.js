import { nanoid } from 'nanoid';
import './main.css';
import copy from 'clipboard-copy';

const btn = document.querySelector('button');
const h2 = document.querySelector('h2');

const createSenha = () => {
  const gerador = nanoid();
  h2.innerHTML = gerador;
};

btn.addEventListener('click', createSenha);

h2.addEventListener('click', (e) => {
  copy(e.target.innerHTML);
  alert('texto copiado');
});

// import { nanoid } from 'nanoid';

// const randomPassword = nanoid();
// console.log(randomPassword);
