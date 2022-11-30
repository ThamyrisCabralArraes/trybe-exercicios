function verificaPalindrome(valor) {
  let wordReverse = valor.split('').reverse().join('');
  if (valor === wordReverse) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('ama'));
//

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
//

let arr2 = [2, 4, 6, 7, 10, 0, -3];
let menor = arr2.length;
function menorNumero() {
  for (let index = 0; index < arr2.length; index += 1) {
    if (menor > arr2[index]) {
      menor = index;
    }
  }
}
menorNumero(arr2);
console.log(menor);
//

let arrNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorNome = arrNomes[0];

function arrNome() {
  for (let index = 0; index < arrNomes.length; index = +1) {
    if (maiorNome < arrNomes[index].length) {
      maiorNome = arrNomes[index];
    }
  }
}
arrNome(arrNomes);
console.log(maiorNome);
