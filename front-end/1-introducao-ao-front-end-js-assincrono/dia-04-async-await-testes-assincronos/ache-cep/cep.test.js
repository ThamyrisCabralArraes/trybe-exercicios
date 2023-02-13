const { handleClick } = require('./cep');

import fetch from 'node-fetch'; // necessário em versões abaixo do Node 18.
global.fetch = fetch; // necessário em versões abaixo do Node 18.

describe('testando a funcao handleClick', () => {
  it('se quando passa um cep valido', async () => {
    const cepvalido = await handleClick('51020-250');
    expect(cepvalido.cep).toBe('51020-250');
  });
});
