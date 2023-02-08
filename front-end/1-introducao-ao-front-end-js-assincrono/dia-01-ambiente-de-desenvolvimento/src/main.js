import { nanoid } from 'nanoid';
import './main.css';

const btn = document.querySelector('button');
const h2 = document.querySelector('h2');

btn.addEventListener('click', () => {
  const gerador = nanoid();
  h2.innerHTML = gerador;
});

// import { nanoid } from 'nanoid';

// const randomPassword = nanoid();
// console.log(randomPassword);
