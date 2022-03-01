import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props)
{
  const onClickButton = () =>
  {
    alert('Modal Show');
  }

  return (
    <div className="CreateTodoButton-wrapper">
      <button className='button clear-button'>
        Clear
      </button>
      <button className='button add-button'
      onClick={onClickButton}>
        +
      </button>
    </div>
  )
};

export { CreateTodoButton };