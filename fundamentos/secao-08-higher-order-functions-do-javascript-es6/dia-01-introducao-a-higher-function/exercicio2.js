const result = () => {
  return parseFloat(Math.random() * 6).toFixed(0);
};

const comparat = (funcao, number) => {
  if (funcao === number) return 'Parabéns, você ganhou';
  return 'Tente novamente';
};

console.log(comparat(result(), 1));
