import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

function TodoSearch()
{
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  // Función que lee nuestro valor
  const onSearchValueChange = (event) =>
  {
    setSearchValue(event.target.value);
  }
  return (
    <div className='searchContainer'>
      <input className='searchField' placeholder='Search task'
/*Al cambiar, lee el valor*/onChange={onSearchValueChange} /*Asignamos el valor nuevamente*/ value={searchValue}
      />
      <i className='fa fa-search fa-lg icon'></i>
    </div>
  );
}

export { TodoSearch };