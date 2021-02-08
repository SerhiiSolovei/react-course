import { createStore }  from 'redux';

const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  };
};

const store = createStore(reducer);
//store.subscribe(fn) - it will be called any time an action is dispatched
store.subscribe(() => {
  console.log(store.getState()); // store.getState() - using for read the current state
});

store.dispatch({type: 'INC'}); // store.dispatch(action) - handling new action
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
