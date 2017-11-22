import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h1>Welcome, {currentUser.first_name}</h1>
        <button onClick={() => logout(currentUser)}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    )
  }
}

export default Greeting;
