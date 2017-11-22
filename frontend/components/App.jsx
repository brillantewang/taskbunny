import React from 'react';
import NavBarContainer from './nav_bar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>

    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
  </div>
)

export default App;
