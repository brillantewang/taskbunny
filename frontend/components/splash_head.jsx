import React from 'react';
import { TaskCategories } from './task_categories';
import TaskSearch from './task_search';

export const SplashHead = ({ text, handleChange }) => {
  return (
    <div className="splash-head">
      <h1 className="main-header">The convenient & fast way <br/> to get things done around the house</h1>
      <h3 className="sub-header">Choose from over 50,000 carefully vetted and feedback rated Taskers to get quick help</h3>
      <ul className="splash-head-buttons">
        <button>General handyman</button>
        <button>Moving & packing</button>
        <button>Furniture assembly</button>
        <button>Home improvement</button>
        <button>Mounting & installation</button>
        <button>Yard work</button>
      </ul>
      <TaskSearch/>
      {/* <div className="task-search-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input className="task-search search" type="text" value={text} onChange={handleChange} placeholder="Need something different?"/>
        <i id="input-canceler" className="fa fa-times-circle hidden" aria-hidden="true"></i>
        <TaskCategories text={text}/>
      </div> */}
    </div>
  )
}
