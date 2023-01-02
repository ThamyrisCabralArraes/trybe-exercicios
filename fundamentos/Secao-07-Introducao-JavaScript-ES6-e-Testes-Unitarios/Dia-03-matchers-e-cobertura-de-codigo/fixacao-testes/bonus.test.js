const { searchEmployee, professionalBoard } = require('./bonus.js');

describe('Testa a função searchEmployee', () => {
  it('funcao searchEmployee existe', () => {
    expect(typeof searchEmployee).toEqual('function');
  });
  it('retornar os resultados da busca pelo id para firstName', () => {
    const parameter = searchEmployee('8579-6', 'firstName');
    const expected = 'Ana';
    expect(parameter).toBe(expected);
  });
  it('retornar os resultados da busca pelo id para lastname', () => {
    const parameter = searchEmployee('5569-4', 'lastName');
    const expected = 'Jobs';
    expect(parameter).toBe(expected);
  });
  it('retornar os resultados da busca pelo id para specialities', () => {
    const parameter = searchEmployee('4456-4', 'specialities');
    const expected = ['Context API', 'RTL', 'Bootstrap'];
    expect(parameter).toEqual(expected);
  });
  it('erro se o id nao foi identificado', () => {
    expect(() => {
      searchEmployee(undefined, 'lastName');
    }).toThrow(new Error('ID não identificada'));
  });
  it('erro se nao houver datails', () => {
    expect(() => {
      searchEmployee('4456-4', undefined);
    }).toThrow(new Error('Informação indisponível'));
  });
});
