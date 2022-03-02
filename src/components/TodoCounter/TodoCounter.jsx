import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter(){

  const { completedTodos ,totalTodos, remainingTodos } = React.useContext(TodoContext)

  return (
    <div className='TodoCounter-field'>
      <h4>Completed: {completedTodos}</h4>
      <h4>All: {totalTodos}</h4>
      <h4>Remaining: {remainingTodos}</h4>
    </div>
  );
}

export { TodoCounter };