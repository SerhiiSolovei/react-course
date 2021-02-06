import React from 'react';
import ReactDOM from 'react-dom';
import UseState from './use-state';
import UseContext from './use-context';
import UseEffect from './use-effect'

const App = () => {
  return (
    <div style={{padding: '15px'}}>
      <UseState />
      <UseContext />
      <UseEffect />
    </div>
  );
};

ReactDOM.render(<App />,document.getElementById('root'));
