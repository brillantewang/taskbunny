import React from 'react';
import { TaskCategories } from './task_categories';
import { Link } from 'react-router-dom';
import TaskSearchWithRouter from './task_search';

export const SplashHead = ({ text, handleChange }) => {
  return (
    <div className="splash-head">
      <h1 className="main-header">The convenient & fast way <br/> to get things done around the house</h1>
      <h3 className="sub-header">Choose from over 50,000 carefully vetted and feedback rated Taskers to get quick help</h3>
      <ul className="splash-head-buttons">
        <Link to="/task-form/details"><button>General handyman</button></Link>
        <Link to="/task-form/details"><button>Moving & packing</button></Link>
        <Link to="/task-form/details"><button>Furniture assembly</button></Link>
        <Link to="/task-form/details"><button>Home improvement</button></Link>
        <Link to="/task-form/details"><button>Mounting & installation</button></Link>
        <Link to="/task-form/details"><button>Yard work</button></Link>
      </ul>
      <TaskSearchWithRouter/>
    </div>
  )
}
