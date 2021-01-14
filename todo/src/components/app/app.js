import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends React.Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', id: 1 },
      { label: 'Make Awesome App', id: 2 },
      { label: 'Have a lunch', id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState((state)=> {
      // const newArray = [];
      // state.todoData.forEach((el) => {
      //   if (el.id !== id) {
      //     newArray.push(el);
      //   }
      //   return newArray;
      // });

      // return {
      //   todoData: newArray
      // }

      const newArr = state.todoData.reduce((acc, el) => {
        if (el.id !== id) {
          acc.push(el);
        };
        return acc;
      },[]);

      return {
        todoData: newArr
      }
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      id: this.maxId++
    };

    this.setState((state) => {
      const newArr = [
        ...state.todoData, newItem
      ]
      return {
        todoData: newArr
      }
    });
  };

  render () {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted = { this.deleteItem }/>
        <ItemAddForm
          onItemAdded = { this.addItem }/>
      </div>
    );
  };
};
