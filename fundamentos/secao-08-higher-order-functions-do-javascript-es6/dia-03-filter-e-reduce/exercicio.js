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

// Adicione o código do exercício aqui:
console.log('1........');

const fantasyOrScienceFiction = () => {
  return books.filter((item) => item.genre === 'Fantasia' || item.genre === 'Ficção Científica');
};

console.log(fantasyOrScienceFiction());

//

console.log('2........');

const oldBooksOrdered = () => {
  return books
    .filter((item) => 2022 - item.releaseYear > 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
};

console.log(oldBooksOrdered());

//

console.log('3........');

const booksByAuthorBirthYear = (birthYear) => {
  return books.filter((item) => item.author.birthYear === birthYear).map((item) => item.name);
};
console.log(booksByAuthorBirthYear(1920));

console.log('4........');

const fantasyOrScienceFictionAuthors = () => {
  return books
    .filter((item) => item.genre === 'Fantasia' || item.genre === 'Ficção Científica')
    .map((item) => item.author.name)
    .sort();
};

console.log(fantasyOrScienceFictionAuthors());

console.log('5........');

const oldBooks = () => {
  return books.filter((item) => 2022 - item.releaseYear > 60).map((item) => item.name);
};

console.log(oldBooks());

console.log('6........');

const authorWith3DotsOnName = () => {
  return books
    .filter(
      (item) =>
        item.author.name[1] === '.' && item.author.name[4] === '.' && item.author.name[7] === '.',
    )
    .map((item) => item.name);
};

console.log(authorWith3DotsOnName());
