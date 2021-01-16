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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    term: ''
  };

  createTodoItem (label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

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

      console.log(newArr, state.todoData);
      return {
        todoData: newArr
      }
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState((state) => {
      const newArr = [
        ...state.todoData, newItem
      ]
      return {
        todoData: newArr
      }
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName]}

      return [
        ...arr.slice(0,idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  };

  onToggleImportant = (id) => {
    this.setState((state) => {
      return  {
        todoData: this.toggleProperty(state.todoData, id, 'important')
      };
    });
  }


  onToggleDone = (id) => {
    this.setState((state) => {
      return  {
        todoData: this.toggleProperty(state.todoData, id, 'done')
      }

      // const newArr = state.todoData.reduce((acc, el) => {
      //   if (el.id !== id) {
      //     acc.push(el);
      //   } else {
      //     acc.push(el);
      //     el.done = !el.done;
      //   };
      //   return acc;
      // },[]);

      // console.log(newArr, state.todoData);
      // return {
      //   todoData: newArr
      // }
    });
  };

  onSearchChange = (term) => {
    return this.setState({ term });
  };

  search (items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  render () {

    const { todoData, term } = this.state;

    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel
            onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted = { this.deleteItem }
          onToggleImportant = {this.onToggleImportant }
          onToggleDone = { this.onToggleDone }/>
        <ItemAddForm
          onItemAdded = { this.addItem }/>
      </div>
    );
  };
};
