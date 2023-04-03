import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INICIAL_STATE = { count: 0 };

const reducer = (state = INICIAL_STATE, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return { count: state.count + 1 };
  }
  return state;
};

const store = createStore(reducer, composeWithDevTools());

const action = { type: 'INCREMENT_COUNTER' };

const incrementarBtn = document.querySelector('#incrementar');
incrementarBtn.addEventListener('click', () => {
  store.dispatch(action);
});

store.subscribe(() => {
  const count = document.querySelector('h2');
  const globalState = store.getState();
  count.innerHTML = globalState.count;
});
