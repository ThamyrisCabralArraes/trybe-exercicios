console.log('Log 1');

setTimeout(() => console.log('Async log'), 1000);

console.log('Log 2');
console.log('Log 3');

console.log('......');

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

resolvedPromise().then((response) => console.log(response));

console.log('....');

const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O numero ${randomNumber} é um erro.`));
    }, 1000);
  });

rejectedPromise().catch((error) => {
  console.log(error.message);
});

console.log('......');

const randomNumberPar = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`O numero ${randomNumber} não é par`));
      }
    }, 1000);
  });

randomNumberPar()
  .then((response) => console.log(`${response} é par`))
  .catch((error) => console.log(`${error.message}`))
  .finally(() => console.log('Acabou a funçao randomNumberPar.'));

console.log('exemplo de fetch');

fetch('https://dummyjson.com/products/27')
  .then((response) => console.log(response.json()))
  .catch((error) => console.log('Olha o erro:', error.message));
