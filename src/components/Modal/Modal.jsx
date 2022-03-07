import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext/TodoContext';
import './Modal.css';

function Modal({ children })
{
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState(''); 
  
  const onClickClose = () =>
  {
    setOpenModal(false);
  }

  const onChange = (event) =>
  {
    setNewTodoValue(event.target.value);
  }

  const onSubmit = () =>
  {
    if(newTodoValue.length < 80)
    {
      if(newTodoValue.length >= 1)
      {
        addTodo(newTodoValue);
      }
    }
    else
    {
      return onClickClose();
    }
    onClickClose();
  }

  const enterKey = (e) =>
  {
    if(e.charCode === 13)
    {
      e.preventDefault();
      addTodo(newTodoValue);
      onClickClose();
    }
  }

  return ReactDOM.createPortal
  (
    <div className="modal-background" id='modal-background' onClick={()=> setOpenModal(false)}>
      {children}
        <form action='#' className='modal-wrapper' onKeyPress={enterKey} onClick={(event)=> event.stopPropagation()}>
          <textarea className='textarea-add-task' value={newTodoValue} onChange={onChange}type="text" placeholder='Add your task here'></textarea>
          <div className='buttons-wrapper'>
            <div className="add-button add-modal" onClick={onSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="100%" fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>
            </div>
          </div>
        </form>
    </div>,
    document.getElementById('modal'),
  )
}

export { Modal };