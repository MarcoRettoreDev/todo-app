import React from 'react';

// Custom Hook
function useLocalStorage(itemName, initialValue) // Recibimos los 2 parámetros que necesitamos
{
  // Constantes de estados de carga
  const [loading, setLoading] = React.useState(true);

  // Creamos nuestro Custom Hook
  const [item, setItem] = React.useState(initialValue);  

  // Estado de error
  const [error, setError] = React.useState(false);

  React.useEffect(() =>
  {
    try
    {
      setTimeout(() => 
      {
        // Recibimos la información del local storage: "TODOS_V1"
        const localStorageItem = localStorage.getItem(itemName); 
        // creamos una variable de los todos parseado (json) por defecto
        let parsedItem; 

        // Si nuestro localstore esta vacio (por que recien entran a la app)
        if (!localStorageItem)
        {
          // le enviamos un array vacio en forma de string
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          // por defecto, parsed todo es un array vacio 
          parsedItem = []; 
        }
        else // Si nuestro local storage no está vacio, tomamos la variable por defecto (vacia)
        {     
          // y lo transformamos en un archivo JSON
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      }, 1000)}

    catch(error)
    {
      setError(error);
    }
  }, [])

  // Función que guarda los todos en local storage
  const saveItem = (newTodos) => 
  {
    try
    {
      const stringifyTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifyTodos);
      setItem(newTodos);
    }
    catch(error)
    {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage };