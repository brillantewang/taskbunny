import React from 'react';

class TaskDetailsForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-details-form">
        <h2>Describe Your Task</h2>
        <h3>We need these inputs to show only qualified and available Taskers for the job.</h3>
        <form onSubmit={this.props.handleSubmit} className="task-details-subform location-details-form">
          <strong>YOUR TASK LOCATION</strong>
          <div className="location-details-form-inputs">
            <input
              value={this.props.address}
              onChange={this.props.handleChange('address')}
              className="location-details-form-input1 Location"
              type="text"
              placeholder="Enter street address"
            />
            <input
              value={this.props.unit}
              onChange={this.props.handleChange('unit')}
              className="location-details-form-input2"
              type="text"
              placeholder="Unit or Apt #"
            />
          </div>
          {this.props.handleErrorInput('Location')}
          <div className="save-button-container">
            <button className="btn-green">Continue</button>
          </div>
        </form>
        <form className="task-details-subform vehicle-details-form">
          <strong>VEHICLE REQUIREMENTS</strong>
          <div className="vehicle-details-form-inputs">
            <span className="vehicle-option">
              <input type="radio"/>
              <label><strong>Not needed</strong> for task</label>
            </span>
            <span className="vehicle-option">
              <input type="radio"/>
              <label>Task requires a <strong>car</strong></label>
            </span>
            <span className="vehicle-option">
              <input type="radio"/>
              <label>Task requires a <strong>truck</strong></label>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default TaskDetailsForm;
