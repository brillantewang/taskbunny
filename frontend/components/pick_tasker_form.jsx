import React from 'react';
// import DatePicker from 'react-date-picker';

class PickTaskerForm extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.fetchAllUsers();
  // }
  componentDidMount() { //borrowed from https://stackoverflow.com/questions/6982692/html5-input-type-date-default-value-to-today
    document.getElementById('datePicker').valueAsDate = new Date();
    console.log(document.getElementById('datePicker').value, 'date value');
  }

  onChange(type) {
    return e => {
      if (type === 'date') {
        this.props.handleChange('date')(e);
        this.props.setTaskDate(e.target.value);
      } else if (type === 'time') {
        this.props.handleChange('time')(e);
        this.props.setTaskTime(e.target.value);
      }
    }
  }

  render() {
    return (
      <div className="pick-tasker-form task-form-subform">
        <h2>Pick a Tasker</h2>
        <h3>After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.</h3>
        <div className="pick-tasker-form-content">
          <div className="date-time-picker-container">
            <div className="date-time-picker">
              <strong>SORTED BY:</strong>
              <select>
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
              <select value={this.props.state.time} onChange={this.onChange('time')}>
                <option value="I'm Flexible">I'm Flexible</option>
                <option value="Morning 8AM - 12PM">Morning 8AM - 12PM</option>
                <option value="Afternoon 12PM - 4PM">Afternoon 12PM - 4PM</option>
                <option value="Evening 4PM - 8PM">Evening 4PM - 8PM</option>
              </select>
              <p>You can agree later on exact start time with your selected Tasker.</p>
            </div>
          </div>
          <div className="taskers">
            {this.props.availableTaskers.map(tasker => {
              return (
                <div className="tasker">
                  <div className="tasker-profile">
                    <img className="tasker-profile-image" src={tasker.image_url}/>
                    <button className="btn-green">Select & Continue</button>
                  </div>
                  <div className="tasker-main">
                    <div className="tasker-header">
                      <h2 className="tasker-name">{tasker.first_name} {tasker.last_name[0]}.</h2>
                      <h3>${tasker.price_per_hour}/hr</h3>
                    </div>
                    <div className="tasker-subheader">
                      <strong>{tasker.num_of_completed_tasks} Completed {this.props.state.task_type} Tasks</strong>
                      <strong>{tasker.num_of_reviews} {this.props.state.task_type} Reviews: {tasker.percent_positive}% Positive</strong>
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
  }
}

export default PickTaskerForm;
