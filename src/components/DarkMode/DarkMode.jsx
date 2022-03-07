import React from "react";
import svgMoon from '../../SVGs/moon-f.svg'
import svgSun from '../../SVGs/sun-f.svg'
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
    // checkbox.checked = true;
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
    <img className='svg-title' src={svgSun} alt='Sun icon'></img>
    <label className="toggle-theme" htmlFor="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        onChange={toggleTheme}
      />
      <div className="slider round"></div>
    </label>
    <img className='svg-title' src={svgMoon} alt='Moon icon'></img>
  </div>
  );
};

export { DarkMode }
