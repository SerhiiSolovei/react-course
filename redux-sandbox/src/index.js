import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators }  from 'redux';

import Counter from './counter';
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

const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={()=>{
        const value = Math.floor(Math.random()*10 + 1);
        rnd(value);
      }}/>,
    document.getElementById('root'));
};

update();
store.subscribe(update);
