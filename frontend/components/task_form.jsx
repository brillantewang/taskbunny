import React from 'react';
import { Route } from 'react-router-dom';
import { TrustIcon } from './trust_icon';
import { StatusBarWithRouter } from './status_bar';
import TaskDetailsForm from './task_details_form';
import PickTaskerFormContainer from './pick_tasker_form_container';
import { handleErrorInput } from '../util/errors_util';
import todaysDateString from '../util/todays_date_util';
import ConfirmTaskFormContainer from './confirm_task_form_container';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    // this.location = {
    //   address: "",
    //   unit: ""
    // }

    this.state = {
      task_type: "",
      date: "",
      task_time: "",
      location: "",
      description: "",
      vehicle_requirements: "",
      user_id: "",
      tasker_id: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorInput = handleErrorInput.bind(this);

    console.log('task form constructing');
  }

  componentDidMount() {
    this.setState({ user_id: this.props.currentUser.id })
    this.setState({ date: todaysDateString })
    this.setState({ task_time: "I'm Flexible"})
    console.log('task form mounting');
    // this.props.fetchAllUsers();
  }

  componentWillUnmount() {
    this.props.history.push("/dashboard");
  }

  handleChange(type) {
    return e => {
      // if (type === 'address' || type === 'unit') {
      //   this.location[type] = e.target.value;
      //   this.setState({ location: `${this.location.address} ${this.location.unit}` })
      // } else {
        this.setState({ [type]: e.target.value })
      // }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.createTask(this.state)
  }

  render() {
    console.log(this.state);

    const MyTaskDetailsForm = (props) => {
      return (
        <TaskDetailsForm
          state={this.state}
          // address={this.location.address}
          // unit={this.location.unit}
          selectedTaskType={this.props.currentTask.selected_type}
          location={this.state.location}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.props.errors}
          handleErrorInput={this.handleErrorInput}
          removeErrors={this.props.removeErrors}
          setState={this.setState.bind(this)}
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
