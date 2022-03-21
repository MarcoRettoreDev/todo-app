import React from "react";
import myImg from '../../images/logo-img.png';
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
        <img src={myImg} alt="Imagen logo todo" />
        <h1 className='title'>TODO LIST</h1>
      </div>
      <div className='titleFieldLeft'>
        <div className="darkThemeToggle"> {props.children} </div>
        <p className='date'> {date} </p>
      </div>
    </div>
  )
}

export { TodoTitle };