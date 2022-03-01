import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  // Recibimos el custom hook 
  const {
    item: todos,
    saveItem: saveTodos,
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []);

  // Guardamos el estado del valor de búsqueda en esta constante en forma de array:
  const [searchValue, setSearchValue] = React.useState('');

  // Todos Variables          ! es negación pero !! es negación de negación (true)
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const remainingTodos = totalTodos - completedTodos;

  // Constante que filtra los todos para el buscador
  const filterTodos = todos.filter((task)=> 
  {
    const texto = task.text.toString().toLowerCase();
    return texto.includes(searchValue.toString().toLowerCase())
  });

  // Función completar todos
  const toggleCompleteTodos = (text) =>
  {
    // primero buscamos el índice de la task que vamos a marcar
    const todoIndex = todos.findIndex(task=> task.text === text);
    // hacemos una copia de las task actuales
    const newTodos = [...todos];
    // condicional para activar, o desactivar nuestras task
    if(newTodos[todoIndex].completed === false)
    {
      newTodos[todoIndex].completed = true;
    }
    else
    {
      newTodos[todoIndex].completed = false;
    }
    // re render of our task
    saveTodos(newTodos);
  }

  //Función eliminar todos (misma lógica que completarlos)
  const deleteTodos = (text) =>
  {
    const todoIndex = todos.findIndex(task=> task.text === text);
    const newTodos = [...todos];
    if(todoIndex > -1)
    {
      newTodos.splice(todoIndex, 1)
    }
    saveTodos(newTodos);
  }
  
  return <AppUI
  error={error}
  loading={loading}
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