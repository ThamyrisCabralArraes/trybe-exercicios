const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const min = 15;
  const max = Math.floor(Math.random() * dragon.strength);
  const atack = max > min ? max : min;
  return atack;
};
console.log(dragonDamage());

const warriorDamage = () => {
  const min = warrior.strength;
  const max = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg));
  const atack = min > max ? min : max;
  return atack;
};
console.log(warriorDamage());

const manaMage = () => {
  const min = mage.intelligence;
  const max = Math.floor(Math.random() * (mage.intelligence * 2));
  const damage = min > max ? min : max;
  let mana = mage.mana;
  if (mana >= 15) {
    mana = mana - 15;
    console.log(mana);
  } else {
    mana = 'Não possui mana suficiente';
  }
  return { mana, damage };
};

console.log(manaMage());
