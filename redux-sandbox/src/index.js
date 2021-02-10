import { createStore, bindActionCreators }  from 'redux';
import * as actions from './actions';
import reducer from './reducer';

const store = createStore(reducer);
//store.subscribe(fn) - it will be called any time an action is dispatched and using for update UI
// store.getState() - using for read the current state
// store.dispatch(action) - handling new action

const { dispatch } = store;

//const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }; // simple example of working bindActionCreators function

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random()*10 + 1);
  rnd(payload);
});

const update = () => {
  document.getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);
