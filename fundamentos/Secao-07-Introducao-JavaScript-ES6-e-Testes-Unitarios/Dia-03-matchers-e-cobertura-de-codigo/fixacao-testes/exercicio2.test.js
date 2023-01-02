const { info, printMessage } = require('./exercicio2');

describe.skip('Garantir que o objeto passado como parâmetro possui a propriedade personagem', () => {
  it('teste info', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('teste printMessage', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
  it('tem a função de erro', () => {
    expect(() => {
      printMessage();
    }).toThrow();
  });
  it('se o erro tem a frase objeto inválido', () => {
    expect(() => {
      printMessage();
    }).toThrow(new Error('objeto inválido'));
  });
});
