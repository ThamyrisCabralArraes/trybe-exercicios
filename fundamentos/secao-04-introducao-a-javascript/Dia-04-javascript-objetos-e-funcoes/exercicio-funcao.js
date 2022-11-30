function verificaPalindrome(valor) {
  let wordReverse = valor.split('').reverse().join('');
  if (valor === wordReverse) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('ama'));

let arr = [2, 3, 6, 7, 10, 1];
let maior = 0;
function maiorValor() {
  for (let index = 0; index < arr.length; index += 1) {
    if (maior < arr[index]) {
      maior = index;
    }
  }
}
maiorValor(arr);
console.log(maior);
