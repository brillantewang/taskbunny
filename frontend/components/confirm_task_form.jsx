import React from 'react';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

class ConfirmTaskForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log('confirm task form constructing');
    // console.log(this.props, 'props confirmtaskform');
    // console.log(this.props.availableTaskers, 'availableTaskers confirm task form');
    // this.tasker = this.props.availableTaskers.find(tasker => {
    //   return tasker.id === this.props.state.tasker_id;
    // })

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loaded() {
    // console.log(this.props.state.tasker, 'tasker in loaded');
    return this.props.state.tasker !== null
  }

  componentDidUpdate() {
    if (this.loaded()) {
      const finalBtn = document.getElementById("confirm-submit-btn");
      if (this.props.state.location === "" || this.props.state.description === "") {
        finalBtn.disabled = true;
      } else {
        finalBtn.disabled = false;
      }
    }
  }

  componentDidMount() {
    // console.log('component will mount in confirm task form');
    this.props.reloadTask();
  }

  // componentDidMount() {
  //   this.props.fetchAllUsers()
  //     .then(() => this.tasker = this.props.availableTaskers.find(tasker => {
  //       return tasker.id === this.props.state.tasker_id;
  //     }));
  //     console.log(this.tasker, 'mounted tasker');
  // }

  handleSubmit() {
    this.props.setState({ form_complete: true }, () => {
      this.props.updateTask(this.props.state)
        .then(this.props.history.push('/dashboard'))
      });
    // console.log(this.props.state, 'state right before updating in confirm task form');
  }

  render() {
    // console.log(this.props.state, 'confirm task form rendering');
    // console.log(this.props.state.tasker);
    // console.log(this.loaded(), 'loaded in confirm task render');
    if (this.loaded()) {
      return (
        <div className="confirm-task-form-container">
          <div className="confirm-task-form">
            <div className="confirm-task-form-header">
              <h2 className="task-type-header">{this.props.state.task_type}</h2>
              <h2>${this.props.state.tasker.price_per_hour}/hr</h2>
              {/* <h2>$50/hr</h2> */}
              {/* <h2>{this.tasker.first_name} {this.tasker.last_name[0]}</h2> */}
            </div>
            <div className="confirm-task-form-details">
              <div className="date-time-tasker">
                <div className="date-time-tasker-date-time  ">
                  <strong className="mini-header">Date & Time</strong>
                  <strong className="info-text">{this.props.state.date} ({this.props.state.task_time})</strong>
                </div>
                <div className="date-time-tasker-tasker">
                  <img className="tasker-mini-profile-photo" src={this.props.state.tasker.image_url}/>
                  <div className="tasker-name">
                    <strong className="mini-header">Tasker</strong>
                    {/* <strong className="info-text">Semo N.</strong> */}
                    <strong className="info-text">{this.props.state.tasker.first_name} {this.props.state.tasker.last_name[0]}.</strong>
                  </div>
                </div>
              </div>
              <div className="confirm-task-form-task-location confirm-field">
                <strong className="mini-header">Task Location</strong>
                <strong className="info-text">{this.props.state.location}</strong>
              </div>
              <div className="confirm-task-form-vehicle-requirements confirm-field">
                <strong className="mini-header">Vehicle Requirements</strong>
                <strong className="info-text">{this.props.state.vehicle_requirements}</strong>
              </div>
              <div className="confirm-task-form-description confirm-field">
                <strong className="mini-header">Task Description</strong>
                <textarea className="description-details-form-textarea" onChange={this.props.handleChange('description')} value={this.props.state.description}></textarea>
              </div>
              <div className="modify-task-link-container">
                <Link to="/task-form/details">
                  <strong className="mini-header"><i className="fa fa-cog" aria-hidden="true"></i> Modify Task</strong>
                </Link>
              </div>
              <div className="submit-button-container">
                <button id="confirm-submit-btn" onClick={this.handleSubmit} className="btn-green">Confirm & Book</button>
                <strong>You are charged only after your task is completed.</strong>
              </div>
            </div>
          </div>
          <div className="notification-footer">
            <p>Tasks have a one-hour minimum. A 7.5% Trust and Support fee is added to the Tasker’s total rate.</p>
            <p>If you cancel your task within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tasker's hourly rate. If you selected a recurring cleaning, this is a task with repeat appointments. If you cancel the task (all appointments) or skip any individual appointment within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tasker's hourly rate.</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="loader-icon">
          <ClipLoader/>
        </div>
      )
    }
  }
}

export default ConfirmTaskForm;
