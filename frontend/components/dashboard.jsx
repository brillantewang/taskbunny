import React from 'react';
import NavBarContainer from './nav_bar_container';
import TaskSearchWithRouter from './task_search';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTasks();
    this.props.fetchAllUsers();
  }

  handleClick(e) {
    const nodeClasses= e.target.classList;
    console.log(nodeClasses);
    const taskCategoriesClass = classNames({
      'hidden': !nodeClasses.contains("search")
    })
    console.log(taskCategoriesClass);

    document.getElementById('task-categories').className = taskCategoriesClass;
  }

  render() {
    console.log('dashboard rendering');
    console.log(this.props.currentUser);
    return (
      <div className="dashboard" onClick={this.handleClick}>
        <Route path="/dashboard" component={NavBarContainer}/>
        <div className="dashboard-head">
          <div className="user-greeting">
            <img className="user-profile-img" src={this.props.currentUser.image_url}/>
            <h2>Welcome back, {this.props.currentUser.first_name}.</h2>
          </div>
          <TaskSearchWithRouter/>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-header-container">
            <h3 className="dashboard-body-header">Tasks</h3>
          </div>
          {this.props.currentUserTasks.map(task => {
            console.log(task.id, 'task id in dashboard');
            console.log(task, 'task in dashboard');
            console.log(task.tasker, 'tasker');
            // let tasker = this.props.getUser(task.tasker_id);
            return (
              <div className="dashboard-task">
                <div className="dashboard-task-header">
                  <h2>{task.task_type}</h2>
                  <div className="tasker-cancel-section">
                    <img className="tasker-profile-img" src={task.tasker.image_url}/>
                    {!task.complete ? <a onClick={() => this.props.deleteTask(task.id)} className="cancel-task-link">Cancel Task</a> : ""}
                  </div>
                </div>
                <div className="dashboard-task-status">
                  <strong>{task.complete ? "Your task is complete." : `Your task is booked with ${task.tasker.first_name} ${task.tasker.last_name[0]}`}</strong>
                </div>
                <div className="dashboard-task-body">
                  <div className="date-time-section">
                    <div className="date-section">
                      <strong className="date-time-section-day">{task.date.split('-')[2]}</strong>
                      <strong className="date-time-section-month">{new Date(task.date).toLocaleString("en-us", { month: "short" })}</strong>
                    </div>
                    <div className="time-section">
                      <strong className="date-time-section-time">{task.time}</strong>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Dashboard;
