import React from 'react';

class TaskDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      unit: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const location = `${this.state.address} ${this.state.unit}`;
    this.props.createTask({ location });
  }

  handleChange(type) {
    return e => { this.setState({ [type]: e.target.value }) }
  }

  render() {
    return (
      <div className="task-details-form">
        <h2>Describe Your Task</h2>
        <h3>We need these inputs to show only qualified and available Taskers for the job.</h3>
        <form className="location-details-form">
          <strong>YOUR TASK LOCATION</strong>
          <div className="location-details-form-inputs">
            <input className="location-details-form-input1" type="text" placeholder="Enter street address"/>
            <input className="location-details-form-input2" type="text" placeholder="Unit or Apt #"/>
          </div>
          {this.props.errors}
          <div className="save-button-container">
            <button className="btn-green">Continue</button>
          </div>
        </form>
      </div>
    )
  }
}

export default TaskDetailsForm;
