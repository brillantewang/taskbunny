import React from 'react';
import Modal from 'react-modal';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
// import DatePicker from 'react-date-picker';

class PickTaskerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      taskers: this.props.availableTaskersByRecommended,
      modalIsOpen: true,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      zip_code: ""
    };

    // console.log(this.state.taskers, 'taskers');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  loading() {
    return this.state.taskers.length === 0
  }

  componentWillReceiveProps(nextProps) {
    // console.log('will receive props available taskers', nextProps.availableTaskers);
    if (this.loading()) return;
    // console.log(nextProps.availableTaskers, 'next props avail taskers');
    // console.log(this.props.availableTaskers, 'this props avail taskers');
    if (nextProps.availableTaskers !== this.props.availableTaskers) {
      const sortInput = document.getElementById("sort");
      // console.log(sortInput.value, "sort input val");
      switch(sortInput.value) {
        case "Highest Rating":
          this.setState({
            taskers: nextProps.availableTaskersByHighestRating
          })
          break;
        case "Price (Lowest To Highest)":
          this.setState({
            taskers: nextProps.availableTaskersByLowestPrice
          })
          break;
        case "Price (Highest To Lowest)":
          this.setState({
            taskers: nextProps.availableTaskersByHighestPrice
          })
          break;
        case "Most Reviews":
          this.setState({
            taskers: nextProps.availableTaskersByMostReviews
          })
          break;
        case "Number Of Tasks":
          this.setState({
            taskers: nextProps.availableTaskersByMostTasks
          })
          break;
        case "Recommended":
          this.setState({
            taskers: nextProps.availableTaskersByRecommended
          })
          break;
        default:
          this.setState({
            taskers: nextProps.availableTaskers
          })
      }
    }
  }

  componentDidMount() { //borrowed from https://stackoverflow.com/questions/6982692/html5-input-type-date-default-value-to-today
    // console.log('pick_tasker_form mounting');
    this.props.reloadTask();

    this.props.fetchAllUsers().then(() => {
      this.setState({
        taskers: this.sortedTaskers("Recommended")
      })
    })

    // document.addEventListener('DOMContentLoaded', () => document.getElementById('datePicker').valueAsDate = new Date());
    // console.log(document.getElementById('datePicker').value, 'date value');
  }

  onChange(type) {
    return e => {
      if (type === 'date') {
        this.props.handleChange('date')(e);
        // this.props.setTaskDate(e.target.value);
      } else if (type === 'task_time') {
        this.props.handleChange('task_time')(e);
        // this.props.setTaskTime(e.target.value);
      } else if (type === 'sort') {
        this.setState({
          taskers: this.sortedTaskers(e.target.value)
        })
      }
    }
  }

  sortedTaskers(sortValue) {
    switch(sortValue) {
      case "Highest Rating":
        return this.props.availableTaskersByHighestRating;
      case "Price (Lowest To Highest)":
        return this.props.availableTaskersByLowestPrice;
      case "Price (Highest To Lowest)":
        return this.props.availableTaskersByHighestPrice;
      case "Most Reviews":
        return this.props.availableTaskersByMostReviews;
      case "Number Of Tasks":
        return this.props.availableTaskersByMostTasks;
      case "Recommended":
        return this.props.availableTaskersByRecommended;
      default:
        return this.props.availableTaskers;
    }
  }

  handleSubmit(taskerId) {
    // this.props.setTaskTaskerId(taskerId);
    // console.log(taskerId, 'submit pick tasker form tasker id');
    return e => {
      e.preventDefault();
      this.props.setState({ tasker_id: taskerId }, () => {
        this.props.updateTask(this.props.state);
        // console.log(this.props.state, 'select and confirm clicked');
        if (this.props.state.user_id) {
          this.props.history.push('/task-form/confirm');
        } else {
          Modal.setAppElement(".task-form");
          this.openModal();
        }
      });
    }
  }

  handleSessionFormSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/dashboard'));
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  handleErrorInput(type) {
    console.log('hey');
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
    // console.log(this.props, 'pick tasker form props');
    // console.log(this.state, 'pick tasker form state');
    // console.log(this.state.taskers, 'taskers rendered');
    // console.log(this.props.state, 'state in pick tasker form render');

    if (this.loading() === false) {
      return (
        <div className="pick-tasker-form task-form-subform">
          <h2>Pick a Tasker</h2>
          <h3>After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.</h3>
          <div className="pick-tasker-form-content">
            <div className="date-time-picker-container">
              <div className="date-time-picker">
                <strong>SORTED BY:</strong>
                <select id="sort" onChange={this.onChange('sort')}>
                  <option value="Recommended">Recommended</option>
                  <option value="Price (Lowest To Highest)">Price (Lowest To Highest)</option>
                  <option value="Price (Highest To Lowest)">Price (Highest To Lowest)</option>
                  <option value="Highest Rating">Highest Rating</option>
                  <option value="Most Reviews">Most Reviews</option>
                  <option value="Number Of Tasks">Number Of Tasks</option>
                </select>
                <strong>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  TASK DATE & TIME:
                </strong>
                {/* <DatePicker /> */}
                <input id="datePicker" className="calendar-input" type="date" value={this.props.state.date} onChange={this.onChange('date')}/>
                <select value={this.props.state.task_time} onChange={this.onChange('task_time')}>
                  <option value="I'm Flexible">I'm Flexible</option>
                  <option value="Morning 8AM - 12PM">Morning 8AM - 12PM</option>
                  <option value="Afternoon 12PM - 4PM">Afternoon 12PM - 4PM</option>
                  <option value="Evening 4PM - 8PM">Evening 4PM - 8PM</option>
                </select>
                <p>You can agree later on exact start time with your selected Tasker.</p>
              </div>
            </div>
            <div className="taskers">
              {this.state.taskers.map(tasker => {
                return (
                  <div key={tasker.id} className="tasker">
                    <div className="tasker-profile">
                      <img className="tasker-profile-image" src={tasker.image_url}/>
                      <button onClick={this.handleSubmit(tasker.id)} className="btn-green">Select & Continue</button>
                    </div>
                    <div className="tasker-main">
                      <div className="tasker-header">
                        <h2 id="tasker-name">{tasker.first_name} {tasker.last_name[0]}.</h2>
                        <h3 id="tasker-price">${tasker.price_per_hour}/hr</h3>
                      </div>
                      <div className="tasker-subheader">
                        <strong><i className="fa fa-check" aria-hidden="true"></i> {tasker.num_of_completed_tasks} Completed {this.props.state.task_type} Tasks</strong>
                        <strong><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {tasker.num_of_reviews} {this.props.state.task_type} Reviews: {tasker.percent_positive}% Positive</strong>
                      </div>
                      <div className="tasker-description">
                        <strong>How I can help:</strong>
                        <p>{tasker.tasker_description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <Modal
            className="modal-container"
            overlayClassName="modal-container-overlay"
            onRequestClose={this.closeModal.bind(this)}
            isOpen={this.state.modalIsOpen}
            >
            <div className="session-form-modal">
              <div className="session-form-container">
                <form onSubmit={this.handleSessionFormSubmit.bind(this)} className="session-form">
                  <h3>Create an account</h3>
                  <p>You'll be able to review everything before booking</p>
                  <fieldset>
                    <label>First Name</label>
                    <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')} className="First session-input"/>
                    {this.handleErrorInput("First")}
                  </fieldset>
                  <fieldset>
                    <label>Last Name</label>
                    <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')} className="Last session-input"/>
                    {this.handleErrorInput("Last")}
                  </fieldset>
                  <fieldset>
                    <label>Email Address</label>
                    <input type="text" value={this.state.email} onChange={this.handleChange('email')} className="Email session-input"/>
                    {this.handleErrorInput("Email")}
                  </fieldset>
                  <fieldset>
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')} className="Password session-input"/>
                    {this.handleErrorInput("Password")}
                  </fieldset>
                  <fieldset>
                    <label>Zip Code</label>
                    <input type="text" value={this.state.zip_code} onChange={this.handleChange('zip_code')} className="Zip session-input"/>
                    {this.handleErrorInput("Zip")}
                  </fieldset>
                  <button className="btn-green">Create account</button>
                  <div className="extras signup-extras">
                    <p>Already have an account? <Link to="/login">Log in</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
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

export default PickTaskerForm;
