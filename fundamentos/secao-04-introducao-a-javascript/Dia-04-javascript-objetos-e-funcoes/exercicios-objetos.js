let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics',
  nota: 'O último MacPatinhas',
};

console.log(`Boas-vindas, ${info.personagem}`);

info.recorrente = 'Sim';
info2.recorrente = 'Sim';
console.log(info);

for (let index in info) {
  console.log(index);
}

for (let index in info) {
  console.l;
}
for (let index in info) {
  if (index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim') {
    console.log('Ambos são recorrentes');
  } else {
    console.log(`${info.recorrente} e ${info2.recorrente}`);
  }
}

console.log(`${info.personagem} e ${info2.personagem}`);
console.log(`${info.origem} e ${info2.origem}`);
console.log(`${info.nota} e ${info2.nota}`);
