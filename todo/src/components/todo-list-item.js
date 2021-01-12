import React from 'react';

// Example of destructuring object 'props' which be default is an empty object and a parameter of each components
const TodoListItem = ( {label, important = false} ) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };

  return <span style={style}>{ label }</span>;
};

export default TodoListItem;
