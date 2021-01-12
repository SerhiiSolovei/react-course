import React from 'react';
import ReactDOM from 'react-dom';
import  AppHeader from './components/app-header';
import  TodoList from './components/todo-list';
import  SearchPanel from './components/search-panel';

/*
  const el = React.createElement('h1', null, 'Hello World!!!'); // JS code
  const el = <h1>Hello World!</h1>; // JSX code which converted to backwards compatible version of JavaScript using Babel transcompiler
  console.log(typeof el); // object
*/

// Create components

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
