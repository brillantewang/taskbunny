import React from 'react';
import { Route } from 'react-router-dom';
import { TrustIcon } from './trust_icon';
import { StatusBarWithRouter } from './status_bar';
import TaskDetailsForm from './task_details_form';
import PickTaskerFormContainer from './pick_tasker_form_container';
import { handleErrorInput } from '../util/errors_util';
import todaysDateString from '../util/todays_date_util';
import ConfirmTaskFormContainer from './confirm_task_form_container';
import NavBarContainer from './nav_bar_container';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      task_type: "",
      date: todaysDateString,
      task_time: "I'm Flexible",
      location: "",
      description: "",
      vehicle_requirements: "No vehicle needed",
      user_id: this.props.currentUser ? this.props.currentUser.id : null,
      tasker_id: "",
      tasker: null,
      form_complete: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorInput = handleErrorInput.bind(this);
    this.reloadTask = this.reloadTask.bind(this);
  }

  getLastTaskId(user) {
    const sortedTaskIds = user.user_tasks.sort((a,b) => a - b);
    return sortedTaskIds[sortedTaskIds.length - 1];
  }

  reloadTask() {
    // this.props.fetchCurrentUser(this.state.user_id) ### Comment this section back in if you want to fetch last task for current user rather than simply fetching the last task in DB. Note this will break reloading task if there is no current user (if the user is filling out the task form pre login)
    // .then(userRes => {
    //   const currentUser = userRes.user;
    //   const lastId = this.getLastTaskId(currentUser);
    //
    //   this.props.fetchLastTaskForCurrentUser(lastId)
    //   .then(taskRes => { // why is taskRes the action POJO dispatched? is taskRes the return value of fetchLastTaskForCurrentUser?
    //     const lastTask = taskRes.task;
    //
    //   this.setState(lastTask, () => this.props.dispatchCurrentTask(this.state));

    // Comment this section out if you comment in section above. Note the below may not work to reload the correct task if there are multiple users filling out forms at the same time.
    this.props.fetchLastTaskInDB()
      .then(taskRes => {
        const lastTask = taskRes.task;

        this.setState(lastTask, () => this.props.dispatchCurrentTask(this.state));
      })
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value }, () => this.props.dispatchCurrentTask(this.state))
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.createTask(this.state)
  }

  render() {
    const MyTaskDetailsForm = (props) => {
      return (
        <TaskDetailsForm
          state={this.state}
          location={this.state.location}
          handleChange={this.handleChange}
          createTask={this.props.createTask}
          updateTask={this.props.updateTask}
          errors={this.props.errors}
          handleErrorInput={this.handleErrorInput}
          removeErrors={this.props.removeErrors}
          setState={this.setState.bind(this)}
          reloadTask={this.reloadTask.bind(this)}
          dispatchCurrentTask={this.props.dispatchCurrentTask}
          {...props}
        />
      );
    }

    const MyPickTaskerFormContainer = (props) => {
      return (
        <PickTaskerFormContainer
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.props.errors}
          handleErrorInput={this.handleErrorInput}
          removeErrors={this.props.removeErrors}
          setState={this.setState.bind(this)}
          setTaskDate={this.props.setTaskDate}
          setTaskTime={this.props.setTaskTime}
          fetchAllUsers={this.props.fetchAllUsers}
          updateTask={this.props.updateTask}
          reloadTask={this.reloadTask}
          {...props}
        />
      );
    }

    const MyConfirmTaskFormContainer = (props) => {
      return (
        <ConfirmTaskFormContainer
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.props.errors}
          handleErrorInput={this.handleErrorInput}
          removeErrors={this.props.removeErrors}
          setState={this.setState.bind(this)}
          setTaskDate={this.props.setTaskDate}
          setTaskTime={this.props.setTaskTime}
          fetchAllUsers={this.props.fetchAllUsers}
          fetchCurrentUser={this.props.fetchCurrentUser}
          reloadTask={this.reloadTask}
          updateTask={this.props.updateTask}
          dispatchCurrentTask={this.props.dispatchCurrentTask}
          {...props}
        />
      );
    }

    return (
      <div className="task-form">
        <Route path="/task-form" component={NavBarContainer}/>
        <StatusBarWithRouter/>
        <div className="trust-banner">
          <TrustIcon/>
          <p><strong>Trust & Safety Guarantee:</strong> $1MM insurance guarantee on every task.</p>
        </div>
        <Route path="/task-form/details" render={MyTaskDetailsForm}/>
        <Route path="/task-form/taskers" render={MyPickTaskerFormContainer}/>
        <Route path="/task-form/confirm" render={MyConfirmTaskFormContainer}/>
      </div>
    )
  }
}

export default TaskForm;
