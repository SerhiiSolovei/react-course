// import Calc from './calc';
// import Log from './log';

// import img from './react.png';

// const calc = new Calc();
// const log = new Log();

// log.log(calc.add(1,2,3))


// const el = document.createElement('img');
// el.src = img;
// document.body.appendChild(el);

import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

const App = () => {
  return <p>Hello World!</p>
};

ReactDOM.render(<App />, document.getElementById('root'))
