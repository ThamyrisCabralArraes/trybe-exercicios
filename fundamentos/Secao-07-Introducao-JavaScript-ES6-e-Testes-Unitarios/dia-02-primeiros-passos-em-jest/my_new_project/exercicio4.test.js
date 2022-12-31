const { encode, decode } = require('./exercicio4');

describe.skip('testa as funcoes encode e decode', () => {
  it('teste se encode existe', () => {
    expect(encode).toBeDefined();
  });
  it('teste se decode existe', () => {
    expect(decode).toBeDefined();
  });
  it('teste se encode é funcão', () => {
    expect(typeof encode).toBe('function');
  });
  it('teste se decode é funcão', () => {
    expect(typeof decode).toBe('function');
  });
  it('testa se encode convertem letras em numeros', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  it('testa se encode convertem letras em numeros', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('testas se as outras letras nao sao convertidas pra numeros', () => {
    expect(encode('thm')).toBe('thm');
  });
  it('testas se as outras letras nao sao convertidas pra numeros', () => {
    expect(decode('thm')).toBe('thm');
  });
  it('testa se a string que é retornada pelas funções tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
  it('testa se a string que é retornada pelas funções tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  });
});
