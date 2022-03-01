import React from "react";

const TodoContext = React.createContext();

function todoProvider(props)
{
  return(
    <TodoContext.Provider value=
    {{
      
    }}>
     {props.children} 
    </TodoContext.Provider>
  )
}

<TodoContext.Provider></TodoContext.Provider>

<TodoContext.Consumer>

</TodoContext.Consumer>


