const techList = (array, string) => {
  if (array.length === 0) {
    return 'Vazio!';
  }
  const arraySort = array.sort();
  let received = [];
  for (let index = 0; index < arraySort.length; index += 1) {
    if (arraySort[index]) {
      received.push({ tech: arraySort[index], name: string });
    }
  }
  received = received.sort();
  return received;
};
module.exports = techList;
