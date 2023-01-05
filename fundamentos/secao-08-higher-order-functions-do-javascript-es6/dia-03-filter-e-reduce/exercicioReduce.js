// Fonte: <https://restcountries.com/v2/all>

const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230,
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580,
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748,
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741,
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199,
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468,
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700,
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91,
  },
];

console.log('1........');

const getPopulation = () => {
  return countries
    .map((item) => item.population)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
};

console.log(getPopulation());

console.log('2........');

const getTotalArea = () => {
  const expectedResult = countries.reduce((acc, curr) => {
    return acc + curr.area;
  }, 0);
  return expectedResult;
};

console.log(getTotalArea());

console.log('3........');

const longestName = () => {
  const expectedResult = countries.reduce((acc, curr) =>
    acc.name.length > curr.name.length ? acc : curr,
  );
  return expectedResult;
};
console.log(longestName());

console.log('4........');

const countA = () => {
  const names = countries.map((item) => item.name);
  const splitNames = names.join('').toLowerCase().split('');
  return splitNames.reduce((acc, curr) => (curr === 'a' ? (acc += 1) : acc), 0);
};

console.log(countA());

console.log('5........');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const expectedResult = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = () => {
  return students.map((item, index) => ({
    name: item,
    average: grades[index].reduce((acc, curr) => acc + curr) / grades[index].length,
  }));
};
console.log(studentAverage());
