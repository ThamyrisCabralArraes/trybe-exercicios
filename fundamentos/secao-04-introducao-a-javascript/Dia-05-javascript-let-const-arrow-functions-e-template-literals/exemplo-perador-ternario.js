// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = 1 + 1 === 2 ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = 2 + 2 === 3 ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

//
// Situação em que é mais simples usar o operador ternário:

const checkTernary = (age) =>
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;

console.log(checkTernary(20));

//

const aprovacao = (nota) => (nota >= 7 ? `Aprovado` : `Recuperação`);

console.log(aprovacao(8));
