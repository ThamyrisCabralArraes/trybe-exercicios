const items = ['Camiseta', 'Carregador', 'Chinelo'];

const newItems = [...items, 'Meia'];

console.log(newItems); // ['Camiseta', 'Carregador', 'Chinelo', 'Meia'];

console.log('...');

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

console.log('...');

const product = {
  id: 1,
  name: 'Camiseta',
};

// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: '23'}

console.log('...');

const product2 = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
  price: 23,
};

const newProduct2 = { ...product2, ...productPrice };

console.log(newProduct2);

console.log('...');

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800

console.log('...');

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'goiaba', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['hamburguer', 'pizza', 'bolo'];

const fruitSalad = (fruit, additional) => {
  const allTogether = [...fruit, ...additional];
  return allTogether;
};

console.log(fruitSalad(specialFruit, additionalItens));
