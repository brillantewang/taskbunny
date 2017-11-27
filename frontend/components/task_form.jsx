import React from 'react';
import { Route } from 'react-router-dom';
import { TrustIcon } from './trust_icon';
import { StatusBarWithRouter } from './status_bar';
import TaskDetailsForm from './task_details_form';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <StatusBarWithRouter/>
        <div className="trust-banner">
          <TrustIcon/>
          <p><strong>Trust & Safety Guarantee:</strong> $1MM insurance guarantee on every task.</p>
        </div>
        <Route path="/task-form/details" component={TaskDetailsForm}/>
      </div>
    )
  }
}

export default TaskForm;
