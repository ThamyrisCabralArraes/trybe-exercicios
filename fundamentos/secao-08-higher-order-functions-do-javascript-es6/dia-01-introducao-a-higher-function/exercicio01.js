const newEmployees = (createEmail) => {
  const employees = {
    id1: createEmail('Pedro Guerra'),
    id2: createEmail('Luiza Drumond'),
    id3: createEmail('Carla Paiva'),
  };

  return employees;
};

const createEmail = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  // const email = fullName.toLowerCase().split(' ').join('_');

  return `${fullName}: Email: ${email}${parseFloat(Math.random() * 100).toFixed(0)}@trybe.com`;
};

console.log(newEmployees(createEmail));
