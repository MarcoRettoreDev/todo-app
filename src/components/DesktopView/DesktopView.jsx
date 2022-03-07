import React from "react";
import ReactDOM from 'react-dom';
import './DesktopView.css';
import svgGithub from '../../SVGs/github-circle.svg';
import svgTask from '../../SVGs/undraw_project_completed_re_pqqq.svg';

const DesktopView = () =>
{
  return ReactDOM.createPortal
  (
    <div className="desktop-wrapper">
      <div className="desktop-title">
        <h1>Made with passion for <a href="https://marcorettoredev.github.io/" target='_blank'>Mr.Dev</a></h1>
      </div>
      <div className="desktop-list">
        <h3>Tools used in this project:</h3>
        <ul>
          <li> React Create App</li>
          <li> Reack hooks and custom hooks</li>
          <li> Back-end did with localStorage</li>
          <li> Reack Portals</li>
          <li> Reack useEffect</li>
          <li> Reack context (providers and consumers)</li>
        </ul>
      </div>
      <div className="desktop-description">
        <h3>See the repo here</h3>
        <a href="https://github.com/MarcoRettoreDev/todo-app" target='_blank'><img src={svgGithub} alt="Github icon" /></a>
      </div>
      <div className="desktop-svg-wrapper">
        <img src={svgTask} alt="svg of task" className="svg-desktop" />
      </div>
    </div>,
    document.getElementById('desktop'),
  )
}

export { DesktopView }; 