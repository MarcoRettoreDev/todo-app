import React from "react";
// Main components:
import { DesktopView } from '../components/DesktopView/DesktopView';
import { TodoContext } from "../components/TodoContext/TodoContext";
import { TodoTitle } from '../components/TodoTitle/TodoTitle'; 
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
// Extras components:
import { TodosEmpty } from "../components/TodosEmpty/TodosEmpty";
import { TodosError } from "../components/TodosError/TodosError";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { Modal } from '../components/Modal/Modal';
import { DarkMode } from '../components/DarkMode/DarkMode';

function AppUI()
{
  const {
    error,
    loading,
    filterTodos,
    deleteTodos,
    toggleCompleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  return(
    <React.Fragment>
      {vw >= 1024 && <DesktopView/>}
      <TodoTitle>
        <DarkMode/>
        </TodoTitle>

      <TodoSearch/>
    
      <TodoCounter/>
    
      <TodoContext.Consumer>
        {({
          error,
          loading,
          filterTodos,
          deleteTodos,
          toggleCompleteTodos,
          }) => (
        <TodoList>
          {error && <TodosError/>}
          {loading && <TodosLoading/>}
          {(!loading && !filterTodos.length) && <TodosEmpty/>}
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
        )}
      </TodoContext.Consumer>
    
      <CreateTodoButton>
        
      </CreateTodoButton>

      {!!openModal && (
        <Modal>
        
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };