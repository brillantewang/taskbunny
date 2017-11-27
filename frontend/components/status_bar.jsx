import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

const StatusBar = ({ location }) => {
  const currentStatus = page => classNames({
    'current-page': location.pathname === `/task-form/${page}`
  });

  return (
    <ul className="status-bar">
      <li className={currentStatus('details')}>1. Fill Out Task Details</li>
      <li className={currentStatus('taskers')}>2. View Taskers & Prices</li>
      <li className={currentStatus('confirm')}>3. Confirm & Book</li>
    </ul>
  )
}

export const StatusBarWithRouter = withRouter(StatusBar);
