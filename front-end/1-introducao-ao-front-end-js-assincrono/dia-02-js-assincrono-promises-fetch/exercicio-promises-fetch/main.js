import './style.css';

const imagemHeroi = document.getElementById('imagem-heroi');

const botaoRandom = document.getElementById('botao-random');

const randomNumber = (n) => {
  return Math.floor(Math.random() * n);
};

const erro = (erro) => {
  imagemHeroi.innerHTML = '';
  const p = document.createElement('p');
  p.textContent = 'Não achamos voce ainda. Clique Novamente';
  imagemHeroi.appendChild(p);
};
