import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <button onClick={() => logout(currentUser)}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    )
  }
}

export default NavBar;
