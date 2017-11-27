import React from 'react';
import NavBarContainer from './nav_bar_container';
import TaskSearchWithRouter from './task_search';
import classNames from 'classnames';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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
        <NavBarContainer/>
        <div className="dashboard-head">
          <h2>Welcome back, {this.props.currentUser.first_name}.</h2>
          <TaskSearchWithRouter/>
        </div>
      </div>
    )
  }
}

export default Dashboard;
