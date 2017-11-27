import React from 'react';
import { Route } from 'react-router-dom';
import { TrustIcon } from './trust_icon';
import { StatusBarWithRouter } from './status_bar';
import TaskDetailsForm from './task_details_form';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(props, 'props');

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
    // this.handleErrorInput = this.props.handleErrorInput.bind(this);
    // console.log(this);
    // console.log(this.props.handleErrorInput.bind(this));
    // this.handleErrorInput('hey')
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

  handleErrorInput(type) {
    const regex = new RegExp(type);
    const error = this.props.errors.filter(error => { return error.match(regex) })[0];
    if (error) {
      $(`.${type}`).addClass("error-input");
      return (
        <strong className="error-message">{error}</strong>
      );
    } else {
      $(`.${type}`).removeClass("error-input");
    }
  }

  render() {
    const MyTaskDetailsForm = (props) => {
      return (
        <TaskDetailsForm
          state={this.state}
          // address={this.location.address}
          unit={this.location.unit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.props.errors}
          handleErrorInput={this.handleErrorInput.bind(this)}
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
