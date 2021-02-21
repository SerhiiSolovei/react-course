import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const logMiddleware = (store) => (next) => (action) => {
  console.log(action.type, store.getState());
  return next(action);
}; // store passes just two functions (getState, dispatch) as arguments

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next ({
      type: action
    });
  };

  return next(action);
}; // next = dispatch - means next dispatch

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD')
export default store;
