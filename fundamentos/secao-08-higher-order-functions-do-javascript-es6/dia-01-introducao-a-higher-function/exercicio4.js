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

const autora = books.find((item) => {
  if (item.author.birthYear === 1947) {
    console.log(item.author.name);
  }
});

const lowCaracter = (arra) => {
  let itemZero;
  arra.forEach((item) => {
    if (!itemZero || itemZero.length > item.name.length) {
      itemZero = item.name;
    }
  });
  return itemZero;
};

console.log(lowCaracter(books));

const getNamedBook = (arra) => {
  return arra.find((item) => {
    if (item.name.length === 26) {
      return item;
    }
  });
};

console.log(getNamedBook(books));

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1901 && book.author.birthYear < 2000);
}
console.log(everyoneWasBornOnSecXX());

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear > 1980 && book.releaseYear < 1989);
};
console.log(someBookWasReleaseOnThe80s());

const authorUnique = () => {
  return books.every((book) =>
    books.some(
      (bookSome) =>
        bookSome.author.birthYear === book.author.birthYear &&
        bookSome.author.name !== book.author.name,
    ),
  );
};

console.log(authorUnique());
