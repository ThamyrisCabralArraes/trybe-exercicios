let repetitionNumber = [2, 3, 2, 5, 8, 2, 3];
let count = 0;
let result = [];
function repetition() {
  for (let index = 1; index < repetitionNumber.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
      if (repetitionNumber[index] === repetitionNumber[index2]) {
        result.push(repetitionNumber[index2]);
      }
    }
  }
}
repetition(repetitionNumber);
console.log(result);
