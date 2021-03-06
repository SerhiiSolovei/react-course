import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
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

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }),timeout);
};


store.dispatch('HELLO_WORLD');
store.dispatch(delayedActionCreator(3000));
export default store;
