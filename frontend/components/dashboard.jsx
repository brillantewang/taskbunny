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
    return (
      <div className="dashboard" onClick={this.handleClick}>
        <Route path="/dashboard" component={NavBarContainer}/>
        <div className="dashboard-head">
          <h2>Welcome back, {this.props.currentUser.first_name}.</h2>
          <TaskSearchWithRouter/>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-header-container">
            <h3 className="dashboard-body-header">Tasks</h3>
          </div>
          {this.props.currentUserTasks.map(task => {
            console.log(task.id, 'task id in dashboard');
            console.log(task, 'task in dashboard');
            return (
              <div className="dashboard-task">
                <div>
                  <h2>{task.task_type}</h2>
                  {!task.complete ? <a onClick={() => this.props.deleteTask(task.id)} className="cancel-task-link">Cancel Task</a> : ""}
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
