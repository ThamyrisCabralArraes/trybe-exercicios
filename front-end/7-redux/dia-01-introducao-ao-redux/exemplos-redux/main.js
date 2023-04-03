import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// criando o esatdo inicial
const INICIAL_STATE = { count: 0 };

const reducer = (state = INICIAL_STATE, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return { count: state.count + 1 };
  }
  return state;
};

// criando a store do redux dev tools
const store = createStore(reducer, composeWithDevTools());

// criando a action
const action = { type: 'INCREMENT_COUNTER' };

// disparando a action
const incrementarBtn = document.querySelector('#incrementar');
incrementarBtn.addEventListener('click', () => {
  store.dispatch(action);
});

// lendo as alterações do estado
store.subscribe(() => {
  const count = document.querySelector('h2');
  const globalState = store.getState();
  count.innerHTML = globalState.count;
});
