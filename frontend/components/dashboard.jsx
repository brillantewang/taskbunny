import React from 'react';
import NavBarContainer from './nav_bar_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBarContainer/>
        <h1>Welcome back, {this.props.currentUser.first_name}.</h1>
      </div>
    )
  }
}

export default Dashboard;
