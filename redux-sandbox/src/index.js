import React from 'react';
import ReactDOM from 'react-dom';
import { createStore }  from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import reducer from './reducer';

const store = createStore(reducer);
//store.subscribe(fn) - it will be called any time an action is dispatched and using for update UI
// store.getState() - using for read the current state
// store.dispatch(action) - handling new action

//const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }; // simple example of working bindActionCreators function

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
