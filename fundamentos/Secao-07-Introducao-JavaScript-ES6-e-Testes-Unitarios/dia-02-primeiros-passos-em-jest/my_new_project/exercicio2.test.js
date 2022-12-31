const { info } = require('./exercicio2');

describe('variavel info precisa ter a chave personagem', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
});
