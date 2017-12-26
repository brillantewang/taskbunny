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
      user_id: this.props.currentUser.id,
      tasker_id: "",
      tasker: null,
      form_complete: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorInput = handleErrorInput.bind(this);
    this.reloadTask = this.reloadTask.bind(this);
    // console.log('task form constructing');
  }

  // componentDidMount() {
  //   // this.setState({ user_id: this.props.currentUser.id })
  //   // this.setState({ date: todaysDateString })
  //   // this.setState({ task_time: "I'm Flexible"})
  //   // this.setState({ vehicle_requirements: "No vehicle needed"})
  //   // this.setState({ form_complete: false })
  //   // console.log('task form mounting');
  //   // this.props.fetchAllUsers();
  //   console.log('task form mounting');
  //   // const sortedTaskIds = this.props.currentUser.tasks.sort();
  //   // const lastId = sortedTaskIds[sortedTaskIds.length - 1];
  //   // this.props.fetchLastTaskForCurrentUser(lastId)
  //   //   .then(taskRes => { // why is taskRes the action POJO dispatched? is taskRes the return value of fetchLastTaskForCurrentUser?
  //   //     // console.log(taskRes);
  //   //     const lastTask = taskRes.task;
  //   //     this.setState(lastTask);
  //   //   })
  //   this.reloadTask();
  //
  //   // const lastTask = this.props.fetchLastTaskForCurrentUser(lastId);
  //   // console.log(lastTask, 'lasttask in mounting');
  //   // this.setState(lastTask);
  // }

  getLastTaskId(user) {
    const sortedTaskIds = user.user_tasks.sort((a,b) => a - b);
    return sortedTaskIds[sortedTaskIds.length - 1];
  }

  reloadTask() { //checks last task for current user and reloads it to state if it's incomplete
    // console.log('task reloading');
    return new Promise((resolve, reject) => {
      this.props.fetchCurrentUser(this.state.user_id)
      .then(userRes => {
        const currentUser = userRes.user;
        const lastId = this.getLastTaskId(currentUser);

        this.props.fetchLastTaskForCurrentUser(lastId)
        .then(taskRes => { // why is taskRes the action POJO dispatched? is taskRes the return value of fetchLastTaskForCurrentUser?
          const lastTask = taskRes.task;

          // if (lastTask.form_complete === false) {
            this.setState(lastTask, () => this.props.dispatchCurrentTask(this.state));
          // } else {
          //   console.log(lastTask, 'this is the last task in the else of reload condition');
          //   reject();
          // }
        })
      })

    })
    // console.log(this.props.currentUser);
  }

  // componentWillUnmount() {
  //   this.props.history.push("/dashboard");
  // }

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
    // console.log(this.state);
    // console.log('task form rendering');

    const MyTaskDetailsForm = (props) => {
      return (
        <TaskDetailsForm
          state={this.state}
          // address={this.location.address}
          // unit={this.location.unit}
          // selectedTaskType={this.props.currentTask.selected_type}
          location={this.state.location}
          handleChange={this.handleChange}
          // handleSubmit={this.handleSubmit}
          createTask={this.props.createTask}
          updateTask={this.props.updateTask}
          errors={this.props.errors}
          handleErrorInput={this.handleErrorInput}
          removeErrors={this.props.removeErrors}
          setState={this.setState.bind(this)}
          reloadTask={this.reloadTask.bind(this)}
          // setTaskLocation={this.props.setTaskLocation}
          // setTaskDescription={this.props.setTaskDescription}
          // setTaskVehicleReq={this.props.setTaskVehicleReq}
          {...props}
        />
      );
    }

    const MyPickTaskerFormContainer = (props) => {
      return (
        <PickTaskerFormContainer
          state={this.state}
          // address={this.location.address}
          // unit={this.location.unit}
          // location={this.state.location}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.props.errors}
          handleErrorInput={this.handleErrorInput}
          removeErrors={this.props.removeErrors}
          setState={this.setState.bind(this)}
          // availableTaskers={this.props.availableTaskers}
          setTaskDate={this.props.setTaskDate}
          setTaskTime={this.props.setTaskTime}
          // setTaskTaskerId={this.props.setTaskTaskerId}
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
          // address={this.location.address}
          // unit={this.location.unit}
          // location={this.state.location}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.props.errors}
          handleErrorInput={this.handleErrorInput}
          removeErrors={this.props.removeErrors}
          setState={this.setState.bind(this)}
          // availableTaskers={this.props.availableTaskers}
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
      <div>
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
