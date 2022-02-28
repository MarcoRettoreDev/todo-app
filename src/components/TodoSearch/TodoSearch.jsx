import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue})//Acá recibimos las props del componente padre (App)
{
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
      <i className='fa fa-search icon'></i>
    </div>
  );
}

export { TodoSearch };