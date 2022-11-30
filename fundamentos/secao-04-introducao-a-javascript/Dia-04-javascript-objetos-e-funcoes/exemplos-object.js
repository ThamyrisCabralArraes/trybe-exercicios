let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
}; // SyntaxError: Unexpected number

console.log(diasDaSemana['1']); // domingo

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};
let paraBanco = 'banco';
console.log(conta[paraBanco]);
console.log(conta.banco.id);
console.log(conta['agencia']);
console.log(conta[paraBanco]);
console.log(conta[paraBanco].id);

let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario.id);
console.log(usuario.infoPessoal.nome);
console.log(usuario.infoPessoal.endereco.bairro);
console.log(usuario.infoPessoal.endereco);

let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador['andar']);

let lastMorador = moradores[moradores.length - 1];

console.log(lastMorador);

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

let meuObjeto = player;
let chave = `A jogadora ${meuObjeto.name} ${meuObjeto.lastName} tem ${meuObjeto.age} anos de idade`;

console.log(chave);

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player);

let melhorJogadora = `A jogadora ${meuObjeto.name} ${meuObjeto.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes`;
console.log(melhorJogadora);

console.log(
  `A jogadora possui ${meuObjeto.medals.golden} medalhas de ouro e ${meuObjeto.medals.silver} medalhas de prata`
);
