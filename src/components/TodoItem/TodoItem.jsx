import React from "react";
import './TodoItem.css';

function TodoItem ({completed, text, onComplete, onDelete})
{
  return (
    <li className="TodoItem">
      <div className={`check-icon-wrapper ${completed &&'check-icon-active'}`}
      onClick={onComplete}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="100%" height='100%' fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>
      </div>

      <p className={`ItemText ${completed && 'ItemText-complete'}`}>{text}</p>

      <div className={`close-icon-wrapper ${completed && 'close-icon-complete'}`}
      onClick={onDelete}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="100%" height='100%' fill="currentColor"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>
      </div>
    </li>
  )
}

export { TodoItem };