import React from 'react';
import NavBarContainer from './nav_bar_container';
import TaskSearchWithRouter from './task_search';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
// import { SplashBody } from './splash_body';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTasks();
    // this.props.fetchAllUsers();
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

  getMonth(num) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]

    return months[num - 1];
  }

  render() {
    console.log('dashboard rendering');
    console.log(this.props.currentUser);

    if (this.props.currentUserTasks.length > 0) {
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
              console.log(task.tasker.image_url, 'tasker image url');
              // let tasker = this.props.getUser(task.tasker_id);
              return (
                <div className="dashboard-task">
                  <div className="dashboard-task-header">
                    <h2 className="dashboard-task-header-title">{task.task_type}</h2>
                    <div className="tasker-cancel-section">
                      <img className="tasker-profile-img" src={task.tasker.image_url}/>
                      {!task.complete ? <a onClick={() => this.props.deleteTask(task.id)} className="cancel-task-link">Cancel Task</a> : ""}
                    </div>
                  </div>
                  <div className="dashboard-task-status">
                    <strong>{task.complete ? "Your task is complete." : `Your task is booked with ${task.tasker.first_name} ${task.tasker.last_name[0]}.`}</strong>
                  </div>
                  <div className="date-time-section">
                    <div className="date-section">
                      <strong className="date-time-section-day">{task.date.split('-')[2]}</strong>
                      <strong className="date-time-section-month">{this.getMonth(task.date.split('-')[1])}</strong>
                    </div>
                    <div className="time-section">
                      <strong className="date-time-section-time">{task.task_time}</strong>
                    </div>
                  </div>
                  <div className="dashboard-task-body">
                    <div className="location-tasker-price-section">
                      <div className="dashboard-task-body-location">
                        <strong className="dashboard-task-mini-header">Location</strong>
                        <strong className="location-address"><i class="fa fa-map-marker" aria-hidden="true"></i> {task.location}</strong>
                      </div>
                      <div className="dashboard-task-body-tasker">
                        <strong className="dashboard-task-mini-header">Tasker</strong>
                        <strong className="dashboard-task-body-tasker-name">{task.tasker.first_name} {task.tasker.last_name[0]}.</strong>
                      </div>
                      <div className="dashboard-task-body-price">
                        <strong className="dashboard-task-mini-header">Price</strong>
                        <strong className="dashboard-task-body-tasker-name">${task.tasker.price_per_hour}/hr</strong>
                      </div>
                    </div>
                    <div className="dashboard-task-body-description">
                      <strong className="dashboard-task-mini-header">Description</strong>
                      <p className="dashboard-task-body-description-text">{task.description}</p>
                    </div>
                    <div className="small-border"></div>
                    <div className="dashboard-task-body-vehicle-requirements">
                      <strong>Vehicle Requirements:</strong>
                      <strong className="dashboard-task-body-vehicle-requirements-text">{task.vehicle_requirements}</strong>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* <SplashBody/> */}
          </div>
        </div>
      )
    } else {
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
            <div className="dashboard-empty-bottom-section">
            </div>
          </div>
        </div>
      )
    }

  }
}

export default Dashboard;
