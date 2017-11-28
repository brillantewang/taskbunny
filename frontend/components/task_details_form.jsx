import React from 'react';

class TaskDetailsForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubFormSubmit = this.handleSubFormSubmit.bind(this);
  }

  collapse(subFormId, nextSubFormId) {
    const subForm = document.getElementById(subFormId);
    const nextSubForm = document.getElementById(nextSubFormId);
    console.log(subFormId, 'subform-id');
    console.log(subForm, 'subform');
    console.log(nextSubFormId, 'nextsubform-id');
    console.log(nextSubForm, 'nextsubform');
    if (this.props.handleErrorInput(subFormId) === undefined) {
      subForm.classList.add("hidden");
      nextSubForm.classList.remove("hidden")
    }
  }

  handleSubFormSubmit(subFormId, nextSubFormId) {
    return e => {
      this.props.handleSubmit(e)
        .then(null, () => this.collapse(subFormId, nextSubFormId))
    }
  }

  render() {
    return (
      <div className="task-details-form">
        <h2>Describe Your Task</h2>
        <h3>We need these inputs to show only qualified and available Taskers for the job.</h3>
        <form className="task-details-subform location-details-form">
          <strong>YOUR TASK LOCATION</strong>
          <div id="Location">
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
              <button onClick={this.handleSubFormSubmit("Location", "Vehicle")} className="btn-green">Continue</button>
            </div>
          </div>
        </form>
        <form className="task-details-subform vehicle-details-form">
          <strong>VEHICLE REQUIREMENTS</strong>
          <div id="Vehicle" className="hidden">
            <div className="vehicle-details-form-inputs">
              <span className="vehicle-option">
                <input
                  id="no-vehicle"
                  type="radio"
                  value=""
                  checked={this.props.state.vehicle_requirements === ""}
                  onChange={this.props.handleChange("vehicle_requirements")}
                />
                <label htmlFor="no-vehicle"><strong>Not needed</strong> for task</label>
              </span>
              <span className="vehicle-option">
                <input
                  id="car"
                  type="radio"
                  value="A car is needed"
                  checked={this.props.state.vehicle_requirements === "A car is needed"}
                  onChange={this.props.handleChange("vehicle_requirements")}
                />
                <label htmlFor="car">Task requires a <strong>car</strong></label>
              </span>
              <span className="vehicle-option">
                <input
                  id="truck"
                  type="radio"
                  value="A truck is needed"
                  checked={this.props.state.vehicle_requirements === "A truck is needed"}
                  onChange={this.props.handleChange("vehicle_requirements")}
                />
                <label htmlFor="truck">Task requires a <strong>truck</strong></label>
              </span>
            </div>
            <div className="save-button-container">
              <button onClick={this.handleSubFormSubmit("Vehicle", "Description")} className="btn-green">Continue</button>
            </div>
          </div>
        </form>
        <form onSubmit={this.props.handleSubmit} className="task-details-subform description-details-form">
          <strong>TELL US ABOUT YOUR TASK</strong>
          <p>Tell us what you need done, plus any requirements or questions that you may have. You can edit this later.</p>
          <div id="Description">
            <textarea
              value={this.props.state.description}
              onChange={this.props.handleChange('description')}
              className="description-details-form-textarea Description"
              placeholder="EXAMPLE: I rented a moving van, but need help moving my stuff in and out of it. I have: queen bed with frame, medium couch, loveseat, entertainment center, large TV, armchair, 2 bookcases, dining room table with 4 chairs, desk and chair, and about 50 boxes.">
            </textarea>
            {this.props.handleErrorInput('Description')}
            <p>If you need two or more Taskers, please post additional tasks for each Tasker needed.</p>
            <div className="save-button-container">
              <button className="btn-green">See Taskers & Prices</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TaskDetailsForm;
