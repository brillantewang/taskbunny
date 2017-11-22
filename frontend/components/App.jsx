import React from 'react';
import NavBarContainer from './nav_bar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import DashboardContainer from './dashboard_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignupFormContainer}/>
    <Route path="/dashboard" component={DashboardContainer}/>
  </div>
)

export default App;
