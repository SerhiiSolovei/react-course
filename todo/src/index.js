import React from 'react';
import ReactDOM from 'react-dom';

/*
  const el = React.createElement('h1', null, 'Hello World!!!'); // JS code
  const el = <h1>Hello World!</h1>; // JSX code which converted to backwards compatible version of JavaScript using Babel transcompiler
  console.log(typeof el); // object
*/

// Create components
const TodoList = () => {
  return (
    <ul>
    <li>Learn React</li>
    <li>Build Awesome App</li>
  </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
};

const SearchPanel = () => {
  return (
    <input placeholder="search"/>
  );
};

const App = () => {
  return (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
