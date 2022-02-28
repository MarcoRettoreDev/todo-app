import React from 'react';
import './TodoCounter.css';

function TodoCounter({completedTodos ,totalTodos, remainingTodos})
{
  return (
    <div className='TodoCounter-field'>
      <h4>Completed: {completedTodos}</h4>
      <h4>All: {totalTodos}</h4>
      <h4>Remaining: {remainingTodos}</h4>
    </div>
  );
}

export { TodoCounter };