import React from "react";
import mySvg from '../../SVGs/todo-list-svgrepo-com.svg';
import './TodoTitle.css';

function TodoTitle(props)
{
  const dateConstructor = new Date();
  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = dayName[dateConstructor.getDay()];
  const month = dateConstructor.getMonth()+1;
  const year = dateConstructor.getFullYear();
  const date = `${day} - ${month} - ${year}`;
  return (
    <div className='titleField'>
      <div className="title-wrapper">
        <h1 className='title'>TODO <br></br>LIST</h1>
      </div>
      <div className='titleFieldLeft'>
        <div className="darkThemeToggle"> {props.children} </div>
        <p className='date'> {date} </p>
      </div>
    </div>
  )
}

export { TodoTitle };