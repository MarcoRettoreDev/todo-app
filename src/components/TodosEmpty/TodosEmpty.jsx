import React from "react";
import './TodosEmpty.css';
import mySvg from '../../SVGs/undraw_add_notes_re_ln36.svg';

function TodosEmpty ()
{
  return(
    <div className="state-content">
      <img  className="svg-img" src={mySvg} alt="" />
      <p className="default-text">Press the green button to create your first TODO!</p>
    </div>
  )
}

export { TodosEmpty };