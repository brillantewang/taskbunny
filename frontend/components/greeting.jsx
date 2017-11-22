import React from 'react';

const Greeting = ({ currentUser, logout }) => (
  <div>
    <h1>Welcome, {currentUser.first_name}</h1>
  </div>
)
