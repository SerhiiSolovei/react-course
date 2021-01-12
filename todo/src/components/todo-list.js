import React from 'react';
import TodoListItem from './todo-list-item'

const TodoList = ( {todos} ) => {

  const elements = todos.map((item) => {
    return (
      <li>
        <TodoListItem {... item} />
      </li>
    ); // the same if use <TodoListItem label={item.label} important={item.important} />
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;
