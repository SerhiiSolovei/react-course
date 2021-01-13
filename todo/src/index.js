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

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Make Awesome App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ];

  return (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList todos = {todoData}/>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
