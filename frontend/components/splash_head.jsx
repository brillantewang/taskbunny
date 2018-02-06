import React from 'react';
import { TaskCategories } from './task_categories';
import { Link, withRouter } from 'react-router-dom';
import TaskSearchWithRouter from './task_search';
import todaysDateString from "../util/todays_date_util";

class SplashHead extends React.Component {
  constructor(props) {
    super(props);
  }

  handleImageClick(taskCategory) {
    this.props.createTask({task_type: taskCategory, date: todaysDateString, task_time: "I'm Flexible"}).then(
      () => this.props.history.push('/task-form/details')
    )
  }

  render() {
    return (
      <div className="splash-head">
        <h1 className="main-header">The convenient & fast way <br/> to get things done around the house</h1>
        <h3 className="sub-header">Choose from over 50,000 carefully vetted and feedback rated Taskers to get quick help</h3>
        <ul className="splash-head-buttons">
          <a onClick={() => this.handleImageClick("General Handyman")}><button>General handyman</button></a>
          <a onClick={() => this.handleImageClick("Help Moving")}><button>Moving & packing</button></a>
          <a onClick={() => this.handleImageClick("Assembly")}><button>Furniture assembly</button></a>
          <a onClick={() => this.handleImageClick("General Handyman")}><button>Home improvement</button></a>
          <a onClick={() => this.handleImageClick("Mounting")}><button>Mounting & installation</button></a>
          <a onClick={() => this.handleImageClick("Yard work")}><button>Yard work</button></a>
        </ul>
        <TaskSearchWithRouter/>
      </div>
    )
  }
}

export default withRouter(SplashHead);
