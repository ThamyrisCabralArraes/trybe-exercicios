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
botaoRandom.addEventListener('click', () => {
  const random = randomNumber(500);
  console.log(random);
  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${random}.json`)
    .then((response) => response.json())
    .then((data) => {
      escolherImagemHeroi(data.images.md);
    })
    .catch((error) => erro(error.message));
});
export function escolherImagemHeroi(imageId) {
  imagemHeroi.innerHTML = '';
  const img = document.createElement('img');
  img.src = imageId;
  imagemHeroi.appendChild(img);
}
