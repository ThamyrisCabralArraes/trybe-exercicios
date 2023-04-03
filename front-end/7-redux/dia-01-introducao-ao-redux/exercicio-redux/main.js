import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'pink', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// const INITIAL_STATE;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };

    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };

    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const btnPrevious = document.querySelector('#previous');
const btnNext = document.querySelector('#next');

btnPrevious.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

btnNext.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

store.subscribe(() => {
  const span = document.querySelector('#value');
  const container = document.querySelector('#container');
  const { colors, index } = store.getState();
  span.innerHTML = colors[index];
  container.style.background = colors[index];
});

function criarCor() {
  const oneChar = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const btnRandom = document.querySelector('#random');

btnRandom.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' });
});
