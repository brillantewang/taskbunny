import React from 'react';
import { Route } from 'react-router-dom';
import { TrustIcon } from './trust_icon';
import { StatusBarWithRouter } from './status_bar';
import TaskDetailsForm from './task_details_form';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    this.location = {
      address: "",
      unit: ""
    }

    this.state = {
      type: "",
      date: "",
      time: "",
      location: "",
      description: "",
      vehicle_needed: "",
      user_id: "",
      tasker_id: "",
      complete: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => {
      if (type === 'address' || type === 'unit') {
        this.location[type] = e.target.value;
        this.setState({ location: `${this.location.address} ${this.location.unit}` })
      } else {
        this.setState({ [type]: e.target.value })
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.state);
  }

  render() {
    console.log(this.state);
    const MyTaskDetailsForm = (props) => {
      return (
        <TaskDetailsForm
          state={this.state}
          address={this.location.address}
          unit={this.location.unit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
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
      </div>
    )
  }
}

export default TaskForm;
