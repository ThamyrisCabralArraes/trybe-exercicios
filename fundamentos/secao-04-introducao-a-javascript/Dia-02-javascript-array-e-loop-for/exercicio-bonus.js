let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result;
for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (numbers[index] < numbers[index2]) {
      result = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = result;
    }
  }
}
console.log(numbers);
