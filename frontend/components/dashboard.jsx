import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Welcome back, {this.props.currentUser.first_name}</h1>
    )
  }
}

export default Dashboard;
