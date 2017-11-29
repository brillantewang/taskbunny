import React from 'react';
// import DatePicker from 'react-date-picker';

class PickTaskerForm extends React.Component {
  constructor(props) {
    super(props)
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
              <input className="calendar-input" type="date" value={this.props.state.date} onChange={this.props.handleChange("date")}/>
              <select value={this.props.state.time} onChange={this.props.handleChange("time")}>
                <option value="I'm Flexible">I'm Flexible</option>
                <option value="8:00am">8:00am</option>
                <option value="8:30am">8:30am</option>
                <option value="9:00am">9:00am</option>
                <option value="9:30am">9:30am</option>
                <option value="10:00am">10:00am</option>
                <option value="10:30am">10:30am</option>
                <option value="11:00am">11:00am</option>
                <option value="11:30am">11:30am</option>
                <option value="12:00pm">12:00pm</option>
                <option value="12:30pm">12:30pm</option>
                <option value="1:00pm">1:00pm</option>
                <option value="1:30pm">1:30pm</option>
                <option value="2:00pm">2:00pm</option>
                <option value="2:30pm">2:30pm</option>
                <option value="3:00pm">3:00pm</option>
                <option value="3:30pm">3:30pm</option>
                <option value="4:00pm">4:00pm</option>
                <option value="4:30pm">4:30pm</option>
                <option value="5:00pm">5:00pm</option>
                <option value="5:30pm">5:30pm</option>
                <option value="6:00pm">6:00pm</option>
                <option value="6:30pm">6:30pm</option>
                <option value="7:00pm">7:00pm</option>
                <option value="7:30pm">7:30pm</option>
                <option value="8:00pm">8:00pm</option>
              </select>
              <p>You can agree later on exact start time with your selected Tasker.</p>
            </div>
          </div>
          <div className="reviews">
            Review
          </div>
        </div>
      </div>
    )
  }
}

export default PickTaskerForm;
