// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = 
[
  { text: 'Task 1', completed: false },
  { text: 'Task 2', completed: false },
  { text: 'Task 3', completed: true },
  { text: 'Task 4 that iwll helpo us to build a better app ♥', completed: false },
  { text: 'Task 5 with a longer text than the task before', completed: true },
  { text: 'Task 6 Another task that we use to correct manage the scroll on the list', completed: true },
  { text: 'Task 7 On this we will check some issues with the list', completed: false },
  { text: 'Task 8 I think this is going well, but lest try with another one', completed: false },
];

function App() {
  // Estado de los todos
  const [todos, setTodos] = React.useState(defaultTodos);

  // Guardamos el estado en esta constante en forma de array:
  const [searchValue, setSearchValue] = React.useState('');

  // Todos Variables . ! es negación pero !! es negación de negación (true)
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const remainingTodos = totalTodos - completedTodos;

  // Buscador de task
  const filterTodos = todos.filter((task)=> task.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  // Función completar todos y eliminar

  const toggleCompleteTodos = (text) =>
  {
    // primero buscamos el índice de la task que vamos a marcar
    const todoIndex = todos.findIndex(task=> task.text == text);
    // hacemos una copia de las task actuales
    const newTodos = [...todos];
    // condicional para activar, o desactivar nuestras task
    if(newTodos[todoIndex].completed == false)
    {
      newTodos[todoIndex].completed = true;
    }
    else
    {
      newTodos[todoIndex].completed = false;
    }
    // re render of our task
    setTodos(newTodos);
  }

  const deleteTodos = (text) =>
  {
    const todoIndex = todos.findIndex(task=> task.text == text);
    const newTodos = [...todos];
    if(todoIndex > -1)
    {
      newTodos.splice(todoIndex, 1)
    }
    setTodos(newTodos);
  }
  
  return <AppUI
  searchValue={searchValue}
  setSearchValue={setSearchValue}

  completedTodos={completedTodos}
  totalTodos={totalTodos}
  remainingTodos={remainingTodos}

  toggleCompleteTodos={toggleCompleteTodos}
  deleteTodos={deleteTodos}

  filterTodos = {filterTodos}
  />
}

export default App;