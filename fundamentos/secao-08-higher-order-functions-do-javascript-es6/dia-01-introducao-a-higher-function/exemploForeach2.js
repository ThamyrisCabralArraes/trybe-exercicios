const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const text = (item) => {
  console.log(`O email ${item} está cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((item) => {
  text(item);
});
