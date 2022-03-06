import React from "react";
import mySvg from '../../SVGs/undraw_page_not_found_re_e9o6.svg';

function TodosError ()
{
  return(
    <div className="state-content">
      <img  className="svg-img" src={mySvg} alt="" />
      <p className="default-text">An error ocurred</p>
    </div>
  )
}

export { TodosError };