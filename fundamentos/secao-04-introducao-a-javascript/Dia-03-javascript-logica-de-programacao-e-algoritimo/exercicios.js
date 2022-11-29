let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

let word = 'tryber';
let wordReverse = '';
for (let index = 0; index < word.length; index += 1) {
  wordReverse = word.split('');
  wordReverse = wordReverse.reverse();
  wordReverse = wordReverse.join('');
}
console.log(wordReverse);

let word2 = 'tryber';
let reverseWord = '';

for (let index = 0; index < word2.length; index += 1) {
  reverseWord += word2[word2.length - 1 - index];
}

console.log(reverseWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
