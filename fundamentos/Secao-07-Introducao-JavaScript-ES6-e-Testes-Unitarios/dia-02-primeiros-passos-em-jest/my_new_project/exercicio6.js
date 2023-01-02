const hydrate = (string) => {
  const transfomerNumber = string.split('');
  const cupsOfWater = 0;

  for (let index = 0; index < transfomerNumber.length; index += 1) {
    const parse = parseInt(transfomerNumber[index]);
    if (parse) {
      cupsOfWater += parse;
    }
  }

  let glass = 'copo';
  if (cupsOfWater > 1) {
    glass = 'copos';
  }

  frase = `${cupsOfWater} ${glass} de água`;
};

module.exports = hydrate;
