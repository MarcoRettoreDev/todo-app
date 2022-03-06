import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext/TodoContext";

function CreateTodoButton()
{
  const { setOpenModal, deleteAllTodos } = React.useContext(TodoContext);

  const onClickButton = () =>
  {
    setOpenModal(true);
  }

  const onClickDelete = () =>
  {
    deleteAllTodos();
  }

  return (
    <div className="CreateTodoButton-wrapper">
      <div className='clear-button' onClick={onClickDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="100%" fill="currentColor"><path d="M14.833 5l-.728 13.11A2 2 0 0 1 12.108 20H3.892a2 2 0 0 1-1.997-1.89L1.167 5H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-.167zM12.83 5H3.17l.722 13h8.216l.722-13zM2 2v1h12V2H2zm4 5a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z"></path></svg>
      </div>
      <div className='add-button'
      onClick={onClickButton}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" width="100%" fill="currentColor"><path d="M8 3.414v5.642a1 1 0 1 1-2 0V3.414L4.879 4.536A1 1 0 0 1 3.464 3.12L6.293.293a1 1 0 0 1 1.414 0l2.829 2.828A1 1 0 1 1 9.12 4.536L8 3.414zM1 12h12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z"></path></svg>
      </div>
    </div>
  )
};

export { CreateTodoButton };