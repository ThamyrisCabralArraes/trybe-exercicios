const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

console.log('1........');

const flatten = () => {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
};

console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

console.log('2........');

const reduceNames = () => {
  return books.reduce((acc, curr) => `${(acc += curr.author.name)}, `, '');
};
console.log(reduceNames());

console.log('3........');

const averageAge = () => {
  let total = 0;
  books.reduce((acc, curr, _index, book) => {
    const sub = curr.releaseYear - curr.author.birthYear;
    return (total = acc + sub / book.length);
  }, 0);
  return total.toFixed(0);
};
console.log(averageAge());

console.log('4........');

const longestNamedBook = () => {
  return books.reduce((acc, curr) => (acc.name.length > curr.name.length ? acc : curr));
};
console.log(longestNamedBook());
