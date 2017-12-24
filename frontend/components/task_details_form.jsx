import React from 'react';
import { Link } from 'react-router-dom';

class TaskDetailsForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubFormSubmit = this.handleSubFormSubmit.bind(this);
    this.handleLastSubFormSubmit = this.handleLastSubFormSubmit.bind(this);
    // this.taskCreated = null;
  }

  componentDidMount() {
    // console.log('task details form mounting', this.props.state);
    // debugger
    this.updateDisableStatus();
    this.props.reloadTask();
      // .then(
      //   // () => { this.props.updateTask(this.props.state) },
      //   null,
      //   () => { this.props.createTask(this.props.state).then(taskRes => this.props.setState(taskRes)) }
      // )
      // this.props.setState({ task_type: this.props.selectedTaskType }, () => {
      //   this.props.createTask(this.props.state)
      //     .then((taskRes) => {
      //       // this.taskCreated = taskRes.task;
      //       // console.log(taskRes, 'taskres');
      //       this.props.setState(taskRes.task); //so we get the id
      //       // this.collapse(subFormId, nextSubFormId);
      //     })
      // });
  }



  collapse(subFormId, nextSubFormId) {
    const subForm = document.getElementById(subFormId);
    const subFormText = document.getElementById(`${subFormId}-text`);
    const nextSubForm = document.getElementById(nextSubFormId);
    const nextSubFormText = document.getElementById(`${nextSubFormId}-text`);
    // console.log(subFormId, 'subform-id');
    // console.log(subForm, 'subform');
    // console.log(nextSubFormId, 'nextsubform-id');
    // console.log(nextSubForm, 'nextsubform');

    // if (this.props.state[subFormId]) {
      subForm.classList.add("hidden");
      subFormText.classList.remove("hidden");
      nextSubForm.classList.remove("hidden");
      if (nextSubFormText) nextSubFormText.classList.add("hidden");
    // }

    // return new Promise((resolve, reject) => {
    //   if (this.props.handleErrorInput(subFormId) === undefined) {
    //     subForm.classList.add("hidden");
    //     nextSubForm.classList.remove("hidden");
    //     resolve();
    //   } else {
    //     reject();
    //   }
    // })
  }

  handleSubFormSubmit(subFormId, nextSubFormId) {
    // switch(subFormId) {
    //   case "Location":
    //     this.props.setTaskLocation(this.props.state.location);
    //     break;
    //   case "Vehicle":
    //     this.props.setTaskVehicleReq(this.props.state.vehicle_requirements);
    //     break;
    //   case "Description":
    //     this.props.setTaskDescription(this.props.state.description);
    //     break;
    // }

    // if (this.props.state.id === null) {
    //   return e => {
    //     e.preventDefault();
    //     this.props.createTask(this.props.state)
    //       .then((taskRes) => {
    //         // this.taskCreated = taskRes.task;
    //         // console.log(taskRes);
    //         this.props.setState(taskRes.task); //so we get the id
    //         this.collapse(subFormId, nextSubFormId);
    //       })
    //   }
    // } else {
      return e => {
        e.preventDefault();
        console.log('task updating');
        this.props.updateTask(this.props.state)
          .then(() => {
            // this.props.setState(this.props.state);
            this.collapse(subFormId, nextSubFormId)
          })
        }
    // }

    // return e => {
    //   this.props.handleSubmit(e)
    //     .then(null, () => {
    //       this.collapse(subFormId, nextSubFormId)
    //         // .then(() => this.props.removeErrors())
    //     })
    // }
  }

  handleLastSubFormSubmit(e) {
    e.preventDefault();
    this.props.updateTask(this.props.state)
      .then(() => this.props.history.push("/task-form/taskers"))
  }

  // updateSubFormTextStatus() {
  //   const locationText = document.getElementById("location-text");
  //   const locationForm = document.getElementById("location");
  //
  //   locationForm.classList.contains("hidden") ? locationText.classList.remove("hidden") : locationText.classList.add("hidden");
  // }

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
    // const locationSubForm = document.getElementById("Location");
    // const locationText = document.getElementById("location-text")
    // console.log(locationText, 'text');
    // console.log(locationSubForm, 'subform');
    // console.log(locationSubForm.classList.contains("hidden"));
    // if (locationSubForm.classList.contains("hidden")) {
    //   locationText.classList.remove("hidden")
    // }
  }

  handleClick(subFormId) {
    const subFormIds = ["location", "vehicle_requirements", "description"];

    return e => {
      const clickedSubForm = document.getElementById(subFormId);
      const clickedSubFormText = document.getElementById(`${subFormId}-text`);

      const otherSubForms = subFormIds.filter(subId => {
        return subId !== subFormId
      }).map(subId => document.getElementById(subId))

      // const otherSubFormTexts = subFormIds.filter(subId => {
      //   return subId !== subFormId
      // }).map(subId => document.getElementById(`${subId}-text`))

      clickedSubForm.classList.remove("hidden");
      if (clickedSubFormText) clickedSubFormText.classList.add("hidden");
      otherSubForms.forEach(subForm => {
        subForm.classList.add("hidden")
      })
      // otherSubFormTexts.forEach(subForm => {
      //   subForm.classList.remove("hidden")
      // })
    }
  }

  render() {
    // console.log(this.props.state, 'task details form rendering - taskform state');
    return (
      <div className="task-details-form task-form-subform">
        <h2>Describe Your Task</h2>
        <h3>We need these inputs to show only qualified and available Taskers for the job.</h3>
        <form className="task-details-subform location-details-form">
          <strong className="task-subform-header">YOUR TASK LOCATION</strong>
          <strong id="location-text" className="subform-text hidden">
            <i class="fa fa-map-marker" aria-hidden="true"></i>{this.props.state.location}
            <i onClick={this.handleClick("location")} class="fa fa-pencil" aria-hidden="true"></i>
          </strong>
          <div id="location">
            <div className="location-details-form-inputs">
              <input
                value={this.props.state.location || ""}
                onChange={this.props.handleChange('location')}
                className="location-details-form-input1 Location"
                type="text"
                placeholder="Enter street address"
              />
              <input
                // value={this.props.unit}
                // onChange={this.props.handleChange('unit')}
                className="location-details-form-input2"
                type="text"
                placeholder="Unit or Apt #"
              />
            </div>
            {/* {this.props.handleErrorInput('Location')} */}
            <div className="save-button-container">
              <button id="details-location-submit" onClick={this.handleSubFormSubmit("location", "vehicle_requirements")} className="btn-green">Save</button>
            </div>
          </div>
        </form>
        <form className="task-details-subform vehicle-details-form">
          <strong className="task-subform-header">VEHICLE REQUIREMENTS</strong>
          <strong id="vehicle_requirements-text" className="subform-text hidden">
            <i class="fa fa-car" aria-hidden="true"></i>{this.props.state.vehicle_requirements}
            <i onClick={this.handleClick("vehicle_requirements")} class="fa fa-pencil" aria-hidden="true"></i>
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
              {/* {this.props.handleErrorInput('description')} */}
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

// disabled={`${ this.props.state.location === "" || this.props.state.description === "" }`}
// {this.props.state.location !== "" && this.props.state.description !== "" ? "disabled" : "" }
export default TaskDetailsForm;
