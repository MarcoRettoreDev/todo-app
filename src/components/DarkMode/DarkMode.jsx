import React from "react";
import { ChangeEventHandler } from "react";
import { useLocalStorage } from '../../App/hooks/useLocalStorage';
import './DarkMode.css';

const DarkMode = () =>
{
  const { saveTheme } = useLocalStorage('theme', '');
          
  const setDark = () => 
  {
    // 2
    saveTheme('dark')
    // 3
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => 
  {
    saveTheme('light')
    document.documentElement.setAttribute("data-theme", "light");
  };

  // 4
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === 'dark')
  {
    setDark();
    const checkbox = document.getElementById('checkbox')
  }
  
  // 5
  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => 
  {
    if (e.target.checked) 
    {
      setDark();
    }
    else 
    {
      setLight();
    }
  }

  return (
  <div className="toggle-theme-wrapper">
    <div className="svg-title">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="100%" fill="currentcolor"><path d="M10 15.565a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-9-7h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2zm16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM5.757 14.808a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM4.343 3.494l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.908a1 1 0 0 1 1.414-1.414zm11.314 11.314l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414z"></path></svg>
    </div>
    <label className="toggle-theme" htmlFor="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        onChange={toggleTheme}
      />
      <div className="slider round"></div>
    </label>
    <div className="svg-title">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="100%" fill="currentcolor"><path d="M12.253.335A10.086 10.086 0 0 0 8.768 8c0 4.632 3.068 8.528 7.232 9.665A9.555 9.555 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335z"></path></svg>
    </div>
  </div>
  );
};

export { DarkMode }
