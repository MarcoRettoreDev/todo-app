import React from "react";
import ReactDOM from 'react-dom';
import './DesktopView.css';
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
        <h3>Tech used in this project:</h3>
        <ul>
          <li> React Create App</li>
          <li> Css variables</li>
          <li> Back-end did with localStorage</li>
          <li> React Portals</li>
          <li> React Context (providers and consumers)</li>
          <li> Reack Hooks and Custom hooks:</li>
          <li> React useEffect</li>
          <li> React useState</li>
        </ul>
      </div>
      <div className="desktop-description">
        <h3>See the repo here</h3>
        <a className="github-wrapper" href="https://github.com/MarcoRettoreDev/todo-app" target='_blank'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028 3.498 3.498 0 0 1-.57-.057 1.276 1.276 0 0 1-.548-.246 1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196.16.11.293.251.397.426.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148 3.346 3.346 0 0 1-.77-.32 2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687-.202-.497-.183-1.054.057-1.671.159-.05.394-.013.705.11.311.123.54.228.684.316.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36.29-.11.511-.14.664-.09.246.617.268 1.174.065 1.67.432.465.648 1.027.648 1.688 0 .464-.056.875-.168 1.233-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545 3.342 3.342 0 0 1-.77.32 5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04.047.006.113.009.2.009h-1.966-2.227z"></path><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>
          </a>
      </div>
      <div className="desktop-svg-wrapper">
        <img src={svgTask} alt="svg of task" className="svg-desktop" />
      </div>
    </div>,
    document.getElementById('desktop'),
  )
}

export { DesktopView }; 