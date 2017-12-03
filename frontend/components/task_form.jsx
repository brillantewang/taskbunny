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

    // this.location = {
    //   address: "",
    //   unit: ""
    // }

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
      form_complete: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorInput = handleErrorInput.bind(this);

    // console.log('task form constructing');
  }

  componentDidMount() {
    // this.setState({ user_id: this.props.currentUser.id })
    // this.setState({ date: todaysDateString })
    // this.setState({ task_time: "I'm Flexible"})
    // this.setState({ vehicle_requirements: "No vehicle needed"})
    // this.setState({ form_complete: false })
    // console.log('task form mounting');
    // this.props.fetchAllUsers();
  }

  // componentWillUnmount() {
  //   this.props.history.push("/dashboard");
  // }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.createTask(this.state)
  }

  render() {
    // console.log(this.state);

    const MyTaskDetailsForm = (props) => {
      return (
        <TaskDetailsForm
          state={this.state}
          // address={this.location.address}
          // unit={this.location.unit}
          selectedTaskType={this.props.currentTask.selected_type}
          location={this.state.location}
          handleChange={this.handleChange}
          // handleSubmit={this.handleSubmit}
          createTask={this.props.createTask}
          errors={this.props.errors}
          handleErrorInput={this.handleErrorInput}
          removeErrors={this.props.removeErrors}
          setState={this.setState.bind(this)}
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
