import React from 'react';
import ReactDOM from 'react-dom';
import UseState from './use-state';
import UseContext from './use-context';

const App = () => {
  return (
    <div style={{padding: '10px'}}>
      <UseState />
      <UseContext />
    </div>
  );
};

ReactDOM.render(<App />,document.getElementById('root'));
