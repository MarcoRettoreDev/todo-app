import React from "react";
import { TodoTitle } from '../components/TodoTitle/TodoTitle'; 
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';

function AppUI
({
  loading,
  error,
  searchValue,
  setSearchValue,
// Aca recibimos los parámetros necesarios que necesitan nuestros componentes para renderizar
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
        {error && <p>An error ocurred</p>}
        {loading && <p>Loading page</p>}
        {(!loading && !filterTodos.length) && <p>Press the + button to create your first TODO!</p>}
        {/*Aca vamos recorrer la variable filterTodos y enviamos a nuestros items
        el identificador (key) el texto(task.text) si está completado (task.completed)
        y las funciones en forma de arrow function (buena práctica) */}
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