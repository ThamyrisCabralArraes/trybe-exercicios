const greeting1 = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting1(); // Welcome pessoa usuária!

console.log('1....');

const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting(); /// Welcome pessoa usuária!

console.log('2....');

const multiply = (number, value = 1) => number * value;

console.log(multiply(8));
