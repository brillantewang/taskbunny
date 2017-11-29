import React from 'react';
import { Route } from 'react-router-dom';
import { TrustIcon } from './trust_icon';
import { StatusBarWithRouter } from './status_bar';
import TaskDetailsForm from './task_details_form';
import PickTaskerForm from './pick_tasker_form';
import { handleErrorInput } from '../util/errors_util';

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
      time: "",
      location: "",
      description: "",
      vehicle_requirements: "",
      user_id: "",
      tasker_id: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorInput = handleErrorInput.bind(this);

    // console.log(this.props);
  }

  // componentDidMount() {
  //   this.setState({ user_id: this.props.currentUser.id })
  // }

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
          selectedTaskType={this.props.currentTask.selected_task_type}
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

    const MyPickTaskerForm = (props) => {
      return (
        <PickTaskerForm
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
        <Route path="/task-form/taskers" render={MyPickTaskerForm}/>
      </div>
    )
  }
}

export default TaskForm;
