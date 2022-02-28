import React from "react";
import './TodoTitle.css';

function TodoTitle()
{
  return (
    <div className='titleField'>
      <h1 className='title'>TODO LIST</h1>
      <div className='titleFieldLeft'>
        <div className='sunMoonIcon'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="100%">
          <path d="M12.253.335A10.086 10.086 0 0 0 8.768 8c0 4.632 3.068 8.528 7.232 9.665A9.555 9.555 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335z"></path></svg>
        </div>
        <p className='date'>Saturday. December, 26</p>
      </div>
    </div>
  )
}

export { TodoTitle };