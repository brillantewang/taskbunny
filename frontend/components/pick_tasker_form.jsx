import React from 'react';

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
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              TASK DATE & TIME:
            </strong>
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
