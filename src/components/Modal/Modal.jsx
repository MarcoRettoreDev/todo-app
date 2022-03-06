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
    addTodo(newTodoValue);
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
    <div className="modal-background">
      {children}
        <form action='#' className='modal-wrapper' onKeyPress={enterKey}>
          <div className=' modal-close' onClick={onClickClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="100%" fill="currentColor"><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path><path d="M11.414 10l2.829 2.828a1 1 0 0 1-1.415 1.415L10 11.414l-2.828 2.829a1 1 0 1 1-1.415-1.415L8.586 10 5.757 7.172a1 1 0 0 1 1.415-1.415L10 8.586l2.828-2.829a1 1 0 0 1 1.415 1.415L11.414 10z"></path></svg>
          </div>
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