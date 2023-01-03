const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkGrade = () => {
  let count = 0;
  for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
    console.log(RIGHT_ANSWERS[index] + '--' + STUDENT_ANSWERS[index]);
    if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
      count += 1;
    } else if (STUDENT_ANSWERS[index] === 'N.A') {
      count += 0;
    } else {
      count -= 0.5;
    }
  }
  return count;
};

console.log(checkGrade());
