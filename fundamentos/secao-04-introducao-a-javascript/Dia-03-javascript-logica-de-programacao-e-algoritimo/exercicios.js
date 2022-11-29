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
