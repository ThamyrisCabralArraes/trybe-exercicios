//Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('pai');

let criarIrmao = document.createElement('section');
criarIrmao.id = 'irmaoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(criarIrmao);
criarIrmao.innerHTML = 'deu certo?';

// Crie um filho para primeiroFilhoDoFilho.

const CriarFilhoDOFilho = document.getElementById('primeiroFilhoDoFilho');
let criarFilho = document.createElement('p');
criarFilho.id = 'filhoElementoOndeVoceEsta';
CriarFilhoDOFilho.appendChild(criarFilho);

// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = criarFilho.parentElement.parentElement.nextElementSibling;
