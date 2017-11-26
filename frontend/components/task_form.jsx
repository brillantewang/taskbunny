import React from 'react';
import { TrustIcon } from './trust_icon';
import TaskDetailsForm from './task_details_form';

export const TaskForm = () => {
  return (
    <div>
      <ul className="status-bar">
        <li>1. Fill Out Task Details</li>
        <li>2. View Taskers & Prices</li>
        <li>3. Confirm & Book</li>
      </ul>
      <div className="trust-banner">
        <TrustIcon/>
        <p><strong>Trust & Safety Guarantee:</strong> $1MM insurance guarantee on every task.</p>
      </div>
      <TaskDetailsForm/>
    </div>
  )
}
