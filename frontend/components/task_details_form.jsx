import React from 'react';
import { Link } from 'react-router-dom';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'

class TaskDetailsForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubFormSubmit = this.handleSubFormSubmit.bind(this);
    this.handleLastSubFormSubmit = this.handleLastSubFormSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount() {
    this.updateDisableStatus();
    this.props.reloadTask();
  }

  collapse(subFormId, nextSubFormId) {
    const subForm = document.getElementById(subFormId);
    const subFormText = document.getElementById(`${subFormId}-text`);
    const nextSubForm = document.getElementById(nextSubFormId);
    const nextSubFormText = document.getElementById(`${nextSubFormId}-text`);

    subForm.classList.add("hidden");
    subFormText.classList.remove("hidden");
    nextSubForm.classList.remove("hidden");
    if (nextSubFormText) nextSubFormText.classList.add("hidden");
  }

  handleSubFormSubmit(subFormId, nextSubFormId) {
    return e => {
      e.preventDefault();
      this.props.updateTask(this.props.state)
        .then(() => {
          this.collapse(subFormId, nextSubFormId)
        })
    }
  }

  handleLastSubFormSubmit(e) {
    e.preventDefault();
    this.props.updateTask(this.props.state)
      .then(() => this.props.history.push("/task-form/taskers"))
  }

  updateDisableStatus() {
    const locationBtn = document.getElementById("details-location-submit");
    locationBtn.disabled =  this.props.state.location ? false : true;

    const vehicleBtn = document.getElementById("details-vehicle-btn");
    vehicleBtn.disabled =  this.props.state.vehicle_requirements ? false : true;

    const finalBtn = document.getElementById("details-final-submit");
    finalBtn.disabled =  this.props.state.location && this.props.state.description ? false : true;
  }

  componentDidUpdate() {
    this.updateDisableStatus();
  }

  handleClick(subFormId) {
    const subFormIds = ["location", "vehicle_requirements", "description"];

    return e => {
      const clickedSubForm = document.getElementById(subFormId);
      const clickedSubFormText = document.getElementById(`${subFormId}-text`);

      const otherSubForms = subFormIds.filter(subId => {
        return subId !== subFormId
      }).map(subId => document.getElementById(subId))

      clickedSubForm.classList.remove("hidden");
      if (clickedSubFormText) clickedSubFormText.classList.add("hidden");
      otherSubForms.forEach(subForm => {
        subForm.classList.add("hidden")
      })
    }
  }

  handleLocationChange(address) {
    this.props.setState({ location: address }, () => this.props.dispatchCurrentTask(this.props.state))
  }

  render() {
    const inputProps = {
      value: this.props.state.location || "",
      onChange: this.handleLocationChange
    }
    const googlePlacesClasses = {
      root: 'google-places-div',
      autocompleteContainer: 'google-places-dropdown',
      autocompleteItem: 'google-places-dropdown-item',
      autocompleteItemActive: 'google-places-dropdown-item-active'
    }

    return (
      <div className="task-details-form task-form-subform">
        <h2>Describe Your Task</h2>
        <h3>We need these inputs to show only qualified and available Taskers for the job.</h3>
        <form className="task-details-subform location-details-form">
          <strong className="task-subform-header">YOUR TASK LOCATION</strong>
          <strong id="location-text" className="subform-text hidden">
            <i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.state.location}
            <i onClick={this.handleClick("location")} className="fa fa-pencil" aria-hidden="true"></i>
          </strong>
          <div id="location">
            <div className="location-details-form-inputs">
              <PlacesAutocomplete
                inputProps={inputProps}
                classNames={googlePlacesClasses}
               />
              {/* <input ### comment this section back in if you'd like to use a normal input field in place of PlacesAutocomplete
                value={this.props.state.location || ""}
                onChange={this.props.handleChange('location')}
                className="location-details-form-input1 Location"
                type="text"
                placeholder="Enter street address"
              /> */}
            </div>
            <div className="save-button-container">
              <button id="details-location-submit" onClick={this.handleSubFormSubmit("location", "vehicle_requirements")} className="btn-green">Save</button>
            </div>
          </div>
        </form>
        <form className="task-details-subform vehicle-details-form">
          <strong className="task-subform-header">VEHICLE REQUIREMENTS</strong>
          <strong id="vehicle_requirements-text" className="subform-text hidden">
            <i className="fa fa-car" aria-hidden="true"></i>{this.props.state.vehicle_requirements}
            <i onClick={this.handleClick("vehicle_requirements")} className="fa fa-pencil" aria-hidden="true"></i>
          </strong>
          <div id="vehicle_requirements" className="hidden">
            <div className="vehicle-details-form-inputs">
              <span className="vehicle-option">
                <input
                  id="no-vehicle"
                  type="radio"
                  value="No vehicle needed"
                  checked={this.props.state.vehicle_requirements === "No vehicle needed"}
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
              <button id="details-vehicle-btn" onClick={this.handleSubFormSubmit("vehicle_requirements", "description")} className="btn-green">Save</button>
            </div>
          </div>
        </form>
        <form className="task-details-subform description-details-form">
          <strong className="task-subform-header">TELL US ABOUT YOUR TASK</strong>
          <div id="description" className="hidden">
            <div className="description-details-form-content">
              <p>Tell us what you need done, plus any requirements or questions that you may have. You can edit this later.</p>
              <textarea
                value={this.props.state.description || ""}
                onChange={this.props.handleChange('description')}
                className="description-details-form-textarea Description"
                placeholder="EXAMPLE: I rented a moving van, but need help moving my stuff in and out of it. I have: queen bed with frame, medium couch, loveseat, entertainment center, large TV, armchair, 2 bookcases, dining room table with 4 chairs, desk and chair, and about 50 boxes.">
              </textarea>
              <p>If you need two or more Taskers, please post additional tasks for each Tasker needed.</p>
              <div className="save-button-container">
                <button id="details-final-submit" onClick={this.handleLastSubFormSubmit} className="btn-green">See Taskers & Prices</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TaskDetailsForm;
