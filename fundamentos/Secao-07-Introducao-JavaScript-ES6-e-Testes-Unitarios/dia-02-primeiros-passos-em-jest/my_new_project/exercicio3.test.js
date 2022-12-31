const myFizzBuzz = require('./exercicio3');

describe.skip('A função myFizzBuzz deverá retornar numeros divisíveis por 3, 5', () => {
  it('num deverá ser divisivel por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('num deverá ser divisivel por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('num deverá ser divisivel por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('num deverá ser um número', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
  it('num nao for divisivel nem por 3 e nem por 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
});
