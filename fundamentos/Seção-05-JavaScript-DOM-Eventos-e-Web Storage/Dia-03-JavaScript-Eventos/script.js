const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();
//
const zoomIn = (event) => {
  const day = event.target;
  day.style.fontSize = '50px';
};

const zoomOut = (event) => {
  event.target.style.fontSize = '20px';
};

const createDates = () => {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31,
  ];
  const days = document.getElementById('days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const everyDay = decemberDaysList[index];
    const createDays = document.createElement('li');
    createDays.className = 'day';
    createDays.innerHTML = everyDay;

    createDays.addEventListener('mouseover', zoomIn);
    createDays.addEventListener('mouseout', zoomOut);

    if (everyDay === 24 || everyDay === 25 || everyDay === 31) {
      createDays.classList.add('holiday');
    }
    if (everyDay === 4 || everyDay === 11 || everyDay === 18 || everyDay === 25) {
      createDays.classList.add('friday');
    }
    days.appendChild(createDays);
  }
};
createDates();
//

const btnHoliday = () => {
  const buttonsContainer = document.getElementsByClassName('buttons-container');
  const bHoliday = document.createElement('button');
  bHoliday.id = 'btn-holiday';
  bHoliday.textContent = 'Feriados';
  buttonsContainer[0].append(bHoliday);
};
btnHoliday();

const changeColor = () => {
  const bnt = document.querySelector('#btn-holiday');
  const classColor = document.querySelectorAll('.holiday');
  const backGround = 'rgba(255, 184, 184, 0.619)';
  const originColor = '#eee';

  bnt.addEventListener('click', (event) => {
    for (let index = 0; index < classColor.length; index += 1) {
      if (classColor[index].style.backgroundColor !== backGround) {
        classColor[index].style.backgroundColor = backGround;
      } else {
        classColor[index].style.backgroundColor = originColor;
      }
    }
  });
};
changeColor();
//

const friday = () => {
  const btnPai = document.querySelector('.buttons-container');
  const btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  btnFriday.textContent = 'Sexta-feira';
  btnPai.appendChild(btnFriday);
};
friday();

const changeFriday = () => {
  const bntChangeFriday = document.getElementById('btn-friday');
  let friday = document.querySelectorAll('.friday');
  let dates = [4, 11, 18, 25];
  bntChangeFriday.addEventListener('click', () => {
    for (let index = 0; index < friday.length; index += 1) {
      if (friday[index].innerHTML !== 'Sextou!') {
        friday[index].innerHTML = 'Sextou!';
      } else {
        friday[index].innerHTML = dates[index];
      }
    }
  });
};
changeFriday();

const tasks = () => {
  const myTasks = document.querySelector('.my-tasks');
  const span = document.createElement('span');
  span.innerHTML = 'Cozinhar';
  myTasks.appendChild(span);
};
tasks();

const addColorTask = (cor) => {
  const tasksPai = document.querySelector('.my-tasks');
  const divTaskColor = document.createElement('div');
  divTaskColor.className = 'task selected';
  divTaskColor.style.backgroundColor = cor;
  tasksPai.appendChild(divTaskColor);
};
addColorTask('red');

const changeClasseColor = () => {
  const changeClass = document.getElementsByClassName('task selected');
  const tasksPai = document.querySelector('.my-tasks');
  tasksPai.addEventListener('click', (event) => {
    if (changeClass.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
changeClasseColor();

const changeColorNumber = () => {
  const changeClass = document.getElementsByClassName('task selected');
  const changeClass2 = document.querySelector('.task');
  const days = document.getElementById('days');
  let backGround = changeClass2.style.backGround;

  days.addEventListener('click', (event) => {
    let eventTarget = event.target.style.color;

    if (changeClass.length > 0 && eventTarget !== backGround) {
      let color = changeClass[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTarget === backGround) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

changeColorNumber();
