import React from "react";
import './TodosLoading.css';

function TodosLoading ()
{
  return(
    <div className="state-content">
      <svg
      className="state-loading"
      viewBox="0 0 24 24"
      xmlns="<http://www.w3.org/2000/svg>"
      >
      <circle
        className="main"
        cx="12" cy="12" r="6"
        strokeWidth="1" stroke={"var(--light-grey)"}
        fill="none"
      />
      </svg>
      <p className="default-text centered-text">Loading page</p>
    </div>
  )
}

export { TodosLoading };