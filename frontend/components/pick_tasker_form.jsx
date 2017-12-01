import React from 'react';
import { ClipLoader } from 'react-spinners';
// import DatePicker from 'react-date-picker';

class PickTaskerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      taskers: this.props.availableTaskersByRecommended
    }

    // console.log(this.state.taskers, 'taskers');
  }

  loading() {
    return this.state.taskers.length === 0
  }

  componentWillReceiveProps(nextProps) {
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
    console.log('pick_tasker_form mounting');
    this.props.fetchAllUsers().then(() => {
      this.setState({
        taskers: this.sortedTaskers("Recommended")
      })
    })

    // document.getElementById('datePicker').valueAsDate = new Date();
    // console.log(document.getElementById('datePicker').value, 'date value');
  }

  onChange(type) {
    return e => {
      if (type === 'date') {
        this.props.handleChange('date')(e);
        this.props.setTaskDate(e.target.value);
      } else if (type === 'task_time') {
        this.props.handleChange('task_time')(e);
        this.props.setTaskTime(e.target.value);
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

  handleClick(taskerId) {
    return e => {
      e.preventDefault();
      this.props.setState({
        tasker_id: taskerId
      })
      this.props.history.push('/task-form/confirm');
    }
  }

  render() {
    // console.log(this.props, 'pick tasker form props');
    // console.log(this.state, 'pick tasker form state');
    console.log(this.state.taskers, 'taskers rendered');

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
                <select value={this.props.state.time} onChange={this.onChange('task_time')}>
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
                  <div className="tasker">
                    <div className="tasker-profile">
                      <img className="tasker-profile-image" src={tasker.image_url}/>
                      <button onClick={this.handleClick(tasker.id)} className="btn-green">Select & Continue</button>
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
