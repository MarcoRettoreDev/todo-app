import React from "react";
import { TodoTitle } from '../TodoTitle/TodoTitle'; 
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';

function AppUI
({searchValue,
  setSearchValue,

  completedTodos,
  totalTodos,
  remainingTodos,

  toggleCompleteTodos,
  deleteTodos,
  filterTodos,
})
{
  return(
    <React.Fragment>
      <TodoTitle/>

      <TodoSearch
      // Enviamos las props como valores para ser utilizado en nuestro componente
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        remainingTodos={remainingTodos}
      />
    
      <TodoList>
        {filterTodos.map((task, i) => 
          (<TodoItem
            key={i} 
            text={task.text}
            completed={task.completed}
            onComplete={() => toggleCompleteTodos(task.text)}
            onDelete={() => deleteTodos(task.text)}
          />))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export { AppUI };