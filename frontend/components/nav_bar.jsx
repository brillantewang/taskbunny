import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, history }) => {
  if (currentUser) {
    const onClick = (e) => {
      logout(currentUser)
        .then(() => history.push('/'));
    }

    return (
      <div className="nav-bar">
        <img className="nav-bar-logo" src="https://res.cloudinary.com/dezmnl5mf/image/upload/v1512150412/taskwombat_logo_gnnuiq.png"/>
        <button className="logout-button" onClick={onClick}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div className="nav-bar">
        <img className="nav-bar-logo" src="https://res.cloudinary.com/dezmnl5mf/image/upload/v1512150412/taskwombat_logo_gnnuiq.png"/>
        <div className="session-buttons">
          <Link to="/login">Log In</Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      </div>
    )
  }
}

export default NavBar;
