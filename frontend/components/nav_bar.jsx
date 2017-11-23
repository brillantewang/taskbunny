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
      <div className="nav-bar">
        <div className="session-buttons">
          <Link to="/login">Log In</Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      </div>
    )
  }
}

export default NavBar;
