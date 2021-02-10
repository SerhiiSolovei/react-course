import { createStore }  from 'redux';
import { inc, dec, rnd } from './actions';
import reducer from './reducer';

const store = createStore(reducer);
//store.subscribe(fn) - it will be called any time an action is dispatched and using for update UI
// store.getState() - using for read the current state
// store.dispatch(action) - handling new action

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random()*10 + 1);
  store.dispatch(rnd(payload));
});

const update = () => {
  document.getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);
